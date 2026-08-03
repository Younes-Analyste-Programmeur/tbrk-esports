const adminCredentials = {
  username: "admin",
  password: "TBRK2026!"
};

const adminAlertEmail = "y.dilali@gmail.com";
const adminSessionKey = "tbrk-admin-session";
const githubSettingsKey = "tbrk-github-settings";
const githubTokenKey = "tbrk-github-token";
const eventId = "cod-tournament-100";

const fallbackSocials = {
  discord: "",
  youtube: "",
  tiktok: "",
  facebook: "",
  instagram: ""
};

const fallbackPlayers = [
  { eventId, name: "ACE ", tag: "TBRK Core", role: "Organizer", squad: "TBRK", status: "Confirme", image: "assets/images/player-01.jpg", description: "Organizer" },
  { eventId, name: "YAMITCH", tag: "TBRK Core", role: "Organizer", squad: "TBRK", status: "Confirme", image: "assets/images/player-02.jpg", description: "Organizer" },
  { eventId, name: "SHOWGUN", tag: "TBRK Core", role: "Organizer", squad: "TBRK", status: "Confirme", image: "assets/images/player-03.jpg", description: "Organizer" }
];

const fallbackMembers = fallbackPlayers;

const $ = (selector, root = document) => root.querySelector(selector);

let socials = { ...fallbackSocials };
let formUrl = "";
let eventDate = "";
let eventTime = "";
let eventMode = "";
let eventsData = [];
let members = [];
let participants = [];

function textToBase64(text) {
  const bytes = new TextEncoder().encode(text);
  let binary = "";
  bytes.forEach((byte) => {
    binary += String.fromCharCode(byte);
  });
  return btoa(binary);
}

function base64ToText(base64) {
  const binary = atob(base64.replace(/\s/g, ""));
  const bytes = Uint8Array.from(binary, (char) => char.charCodeAt(0));
  return new TextDecoder().decode(bytes);
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function setMessage(message, type = "success") {
  const success = $("[data-save-message]");
  const error = $("[data-error-message]");
  success.hidden = true;
  error.hidden = true;
  const target = type === "error" ? error : success;
  target.textContent = message;
  target.hidden = false;
}

function clearMessage() {
  $("[data-save-message]").hidden = true;
  $("[data-error-message]").hidden = true;
}

function getGithubSettings() {
  const settings = {
    owner: $("[name='githubOwner']").value.trim(),
    repo: $("[name='githubRepo']").value.trim(),
    branch: $("[name='githubBranch']").value.trim() || "main",
    token: $("[name='githubToken']").value.trim()
  };

  if (!settings.owner || !settings.repo || !settings.branch || !settings.token) {
    throw new Error("Fill in the GitHub owner, repo, branch, and token first.");
  }

  localStorage.setItem(githubSettingsKey, JSON.stringify({
    owner: settings.owner,
    repo: settings.repo,
    branch: settings.branch
  }));
  sessionStorage.setItem(githubTokenKey, settings.token);
  return settings;
}

function restoreGithubSettings() {
  try {
    const stored = JSON.parse(localStorage.getItem(githubSettingsKey) || "{}");
    $("[name='githubOwner']").value = stored.owner || inferGithubOwner();
    $("[name='githubRepo']").value = stored.repo || inferGithubRepo();
    $("[name='githubBranch']").value = stored.branch || "main";
  } catch {
    $("[name='githubBranch']").value = "main";
  }

  $("[name='githubToken']").value = sessionStorage.getItem(githubTokenKey) || "";
}

function inferGithubOwner() {
  const match = location.hostname.match(/^([^.]+)\.github\.io$/i);
  return match ? match[1] : "";
}

function inferGithubRepo() {
  const firstPath = location.pathname.split("/").filter(Boolean)[0];
  return location.hostname.endsWith(".github.io") ? firstPath || "" : "";
}

async function githubRequest(path, options = {}) {
  const { owner, repo, token } = getGithubSettings();
  const response = await fetch(`https://api.github.com/repos/${owner}/${repo}${path}`, {
    ...options,
    headers: {
      Accept: "application/vnd.github+json",
      Authorization: `Bearer ${token}`,
      "X-GitHub-Api-Version": "2022-11-28",
      ...(options.headers || {})
    }
  });

  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(data.message || `GitHub request failed with ${response.status}`);
  }
  return data;
}

async function getGithubFile(filePath) {
  const { branch } = getGithubSettings();
  return githubRequest(`/contents/${encodeURIComponentPath(filePath)}?ref=${encodeURIComponent(branch)}`);
}

async function getOptionalGithubFile(filePath) {
  try {
    return await getGithubFile(filePath);
  } catch (error) {
    if (/not found/i.test(error.message || "")) return null;
    throw error;
  }
}

async function putGithubFile(filePath, contentBase64, message, sha) {
  const { branch } = getGithubSettings();
  return githubRequest(`/contents/${encodeURIComponentPath(filePath)}`, {
    method: "PUT",
    body: JSON.stringify({
      message,
      content: contentBase64,
      sha,
      branch
    })
  });
}

function encodeURIComponentPath(filePath) {
  return filePath.split("/").map(encodeURIComponent).join("/");
}

async function fetchJson(path, fallback) {
  try {
    const response = await fetch(path, { cache: "no-store" });
    if (!response.ok) throw new Error("Could not load data.");
    return await response.json();
  } catch {
    return fallback;
  }
}

function isLoggedIn() {
  return sessionStorage.getItem(adminSessionKey) === "true";
}

function setLoggedIn(value) {
  if (value) sessionStorage.setItem(adminSessionKey, "true");
  else sessionStorage.removeItem(adminSessionKey);
}

function showAdmin() {
  $("[data-login-panel]").hidden = true;
  $("[data-admin-panel]").hidden = false;
}

function showLogin() {
  $("[data-login-panel]").hidden = false;
  $("[data-admin-panel]").hidden = true;
}

function notifyFailedLogin(username) {
  const attemptedAt = new Date().toISOString();
  const subject = encodeURIComponent("TBRK admin failed login");
  const body = encodeURIComponent(`Failed login attempt\nUsername: ${username || "(empty)"}\nTime: ${attemptedAt}\nPage: ${location.href}`);
  location.href = `mailto:${adminAlertEmail}?subject=${subject}&body=${body}`;
}

function slugify(value) {
  return String(value || "player")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 48) || "player";
}

function getLocalizedValue(value) {
  if (value === undefined || value === null) return "";
  if (typeof value === "string" || typeof value === "number") return String(value);
  if (typeof value === "object") return value.fr || value.en || Object.values(value).find((item) => typeof item === "string") || "";
  return String(value);
}

function setLocalizedValue(existingValue, nextValue) {
  const trimmed = String(nextValue || "").trim();
  if (existingValue && typeof existingValue === "object" && !Array.isArray(existingValue)) {
    return {
      ...existingValue,
      fr: trimmed,
      en: trimmed
    };
  }
  return trimmed;
}

function getActiveEvent(events = eventsData) {
  if (!Array.isArray(events) || !events.length) return { id: eventId, active: true };
  return events.find((event) => event.active) || events[0];
}

function normalizeRoster(list, defaults = []) {
  const source = Array.isArray(list) ? list : defaults;
  return source.map((player) => ({
    ...player,
    description: player.description || player.role || player.tag || ""
  }));
}

function playerTemplate(player, index, collection, renderCallback) {
  const row = document.createElement("article");
  row.className = "player-editor";
  row.dataset.playerIndex = String(index);

  const preview = document.createElement("img");
  preview.className = "player-preview";
  preview.alt = "";
  preview.src = player.image || "assets/favicon.svg";

  const fields = document.createElement("div");
  fields.className = "player-fields";
  fields.innerHTML = `
    <label>Name <input data-player-field="name" value="${escapeHtml(getLocalizedValue(player.name))}" /></label>
    <label>Photo URL or path <input data-player-field="image" value="${escapeHtml(player.image || "")}" placeholder="assets/images/player-01.jpg" /></label>
    <label>Upload photo <input data-photo-upload type="file" accept="image/*" /></label>
    <label>Squad <input data-player-field="squad" value="${escapeHtml(getLocalizedValue(player.squad))}" /></label>
    <label>Status <input data-player-field="status" value="${escapeHtml(getLocalizedValue(player.status) || "Confirme")}" /></label>
    <label>Description <textarea data-player-field="description">${escapeHtml(getLocalizedValue(player.description || player.role || player.tag || ""))}</textarea></label>
  `;

  const removeButton = document.createElement("button");
  removeButton.className = "btn btn-ghost";
  removeButton.type = "button";
  removeButton.textContent = "Remove";
  removeButton.addEventListener("click", () => {
    collection.splice(index, 1);
    renderCallback();
  });

  fields.addEventListener("input", (event) => {
    const input = event.target.closest("[data-player-field]");
    if (!input) return;
    collection[index][input.dataset.playerField] = input.value;
    if (input.dataset.playerField === "image") preview.src = input.value || "assets/favicon.svg";
  });

  fields.addEventListener("change", (event) => {
    const input = event.target.closest("[data-photo-upload]");
    const file = input?.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.addEventListener("load", () => {
      const dataUrl = String(reader.result || "");
      const [, meta = "", base64 = ""] = dataUrl.match(/^data:([^;]+);base64,(.+)$/) || [];
      const extension = file.name.split(".").pop()?.toLowerCase() || meta.split("/").pop() || "jpg";
      collection[index].image = dataUrl;
      collection[index].pendingImage = { base64, extension };
      preview.src = dataUrl;
      const imageInput = fields.querySelector('[data-player-field="image"]');
      if (imageInput) imageInput.value = dataUrl;
    });
    reader.readAsDataURL(file);
  });

  row.append(preview, fields, removeButton);
  return row;
}

function renderRoster(editorSelector, collection, emptyText, renderCallback) {
  const editor = $(editorSelector);
  editor.innerHTML = "";
  if (!collection.length) {
    const empty = document.createElement("p");
    empty.className = "admin-muted";
    empty.textContent = emptyText;
    editor.appendChild(empty);
    return;
  }
  collection.forEach((player, index) => editor.appendChild(playerTemplate(player, index, collection, renderCallback)));
}

function renderMembers() {
  renderRoster("[data-members-editor]", members, "No members yet. Add one to start.", renderMembers);
}

function renderParticipants() {
  renderRoster("[data-participants-editor]", participants, "No participants yet. Add one to start.", renderParticipants);
}

function fillForm() {
  Object.entries(socials).forEach(([key, value]) => {
    const input = $(`[name="${key}"]`);
    if (input) input.value = value || "";
  });
  $("[name='formUrl']").value = formUrl || "";
  $("[name='eventDate']").value = eventDate || "";
  $("[name='eventTime']").value = eventTime || "";
  $("[name='eventMode']").value = eventMode || "";
  renderMembers();
  renderParticipants();
}

function cleanRoster(collection, defaults) {
  return collection.map((player) => ({
    eventId,
    name: player.name || defaults.name,
    tag: player.description || player.tag || "Participant",
    role: player.description || player.role || "Participant",
    squad: player.squad || defaults.squad,
    status: player.status || "Confirme",
    image: player.image || "",
    description: player.description || "",
    pendingImage: player.pendingImage
  }));
}

function readForm() {
  socials = {
    discord: $("[name='discord']").value.trim(),
    youtube: $("[name='youtube']").value.trim(),
    tiktok: $("[name='tiktok']").value.trim(),
    facebook: $("[name='facebook']").value.trim(),
    instagram: $("[name='instagram']").value.trim()
  };
  formUrl = $("[name='formUrl']").value.trim();
  eventDate = $("[name='eventDate']").value.trim();
  eventTime = $("[name='eventTime']").value.trim();
  eventMode = $("[name='eventMode']").value.trim();
  members = cleanRoster(members, { name: "Member", squad: "TBRK" });
  participants = cleanRoster(participants, { name: "Participant", squad: "Squad to confirm" });
}

function updateEvents(events) {
  const nextEvents = Array.isArray(events) && events.length ? structuredClone(events) : [{ id: eventId, active: true }];
  const activeEvent = getActiveEvent(nextEvents);
  activeEvent.formUrl = formUrl;
  activeEvent.dateLabel = setLocalizedValue(activeEvent.dateLabel, eventDate);
  activeEvent.timeLabel = setLocalizedValue(activeEvent.timeLabel, eventTime);
  activeEvent.mode = setLocalizedValue(activeEvent.mode, eventMode);
  return nextEvents;
}

async function loadFromGithub() {
  clearMessage();
  getGithubSettings();
  setMessage("Loading content from GitHub...");

  const [socialFile, eventFile, memberFile, participantFile] = await Promise.all([
    getGithubFile("data/socials.json"),
    getGithubFile("data/events.json"),
    getOptionalGithubFile("data/members.json"),
    getGithubFile("data/participants.json")
  ]);

  socials = JSON.parse(base64ToText(socialFile.content));
  eventsData = JSON.parse(base64ToText(eventFile.content));
  participants = normalizeRoster(JSON.parse(base64ToText(participantFile.content)), fallbackPlayers);
  members = memberFile ? normalizeRoster(JSON.parse(base64ToText(memberFile.content)), fallbackMembers) : normalizeRoster(participants, fallbackMembers);
  const activeEvent = getActiveEvent();
  formUrl = activeEvent.formUrl || "";
  eventDate = getLocalizedValue(activeEvent.dateLabel);
  eventTime = getLocalizedValue(activeEvent.timeLabel);
  eventMode = getLocalizedValue(activeEvent.mode);
  fillForm();
  setMessage("Loaded from GitHub.");
}

async function uploadPendingImages(collection, folderName) {
  for (let index = 0; index < collection.length; index += 1) {
    const player = collection[index];
    if (!player.pendingImage?.base64) continue;

    const extension = player.pendingImage.extension.replace(/[^a-z0-9]/gi, "") || "jpg";
    const filePath = `assets/images/${folderName}/${slugify(player.name)}-${Date.now()}-${index}.${extension}`;
    await putGithubFile(filePath, player.pendingImage.base64, `Add player photo for ${player.name}`, undefined);
    player.image = filePath;
    delete player.pendingImage;
  }
}

async function saveAll() {
  clearMessage();
  readForm();
  setMessage("Saving changes to GitHub...");

  await uploadPendingImages(members, "members");
  await uploadPendingImages(participants, "players");
  const cleanMembers = members.map(({ pendingImage, ...player }) => player);
  const cleanParticipants = participants.map(({ pendingImage, ...player }) => player);
  const nextEvents = updateEvents(eventsData);

  const [socialFile, eventFile, memberFile, participantFile] = await Promise.all([
    getGithubFile("data/socials.json"),
    getGithubFile("data/events.json"),
    getOptionalGithubFile("data/members.json"),
    getGithubFile("data/participants.json")
  ]);

  await putGithubFile("data/socials.json", textToBase64(`${JSON.stringify(socials, null, 2)}\n`), "Update TBRK social links", socialFile.sha);
  await putGithubFile("data/events.json", textToBase64(`${JSON.stringify(nextEvents, null, 2)}\n`), "Update TBRK event details", eventFile.sha);
  await putGithubFile("data/members.json", textToBase64(`${JSON.stringify(cleanMembers, null, 2)}\n`), "Update Team Breakers members", memberFile?.sha);
  await putGithubFile("data/participants.json", textToBase64(`${JSON.stringify(cleanParticipants, null, 2)}\n`), "Update TBRK participants", participantFile.sha);

  eventsData = nextEvents;
  members = cleanMembers;
  participants = cleanParticipants;
  fillForm();
  setMessage("Saved to GitHub. GitHub Pages may take a minute to show the update.");
}

function downloadBackup() {
  readForm();
  const backup = {
    socials,
    events: updateEvents(eventsData),
    members: members.map(({ pendingImage, ...player }) => player),
    participants: participants.map(({ pendingImage, ...player }) => player)
  };
  const blob = new Blob([JSON.stringify(backup, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "tbrk-admin-backup.json";
  link.click();
  URL.revokeObjectURL(url);
}

async function loadData() {
  restoreGithubSettings();
  const [localSocials, localMembers, localParticipants, localEvents] = await Promise.all([
    fetchJson("data/socials.json", fallbackSocials),
    fetchJson("data/members.json", fallbackMembers),
    fetchJson("data/participants.json", fallbackPlayers),
    fetchJson("data/events.json", [])
  ]);
  socials = localSocials;
  eventsData = localEvents;
  members = normalizeRoster(localMembers, fallbackMembers);
  participants = normalizeRoster(localParticipants, fallbackPlayers);
  const activeEvent = getActiveEvent();
  formUrl = activeEvent.formUrl || "";
  eventDate = getLocalizedValue(activeEvent.dateLabel);
  eventTime = getLocalizedValue(activeEvent.timeLabel);
  eventMode = getLocalizedValue(activeEvent.mode);
  fillForm();
}

function initLogin() {
  const form = $("[data-login-form]");
  const handleLogin = (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const username = String(data.get("username") || "").trim();
    const password = String(data.get("password") || "");

    if (username === adminCredentials.username && password === adminCredentials.password) {
      setLoggedIn(true);
      showAdmin();
      loadData();
      return;
    }

    $("[data-login-error]").hidden = false;
    notifyFailedLogin(username);
  };

  form.addEventListener("submit", handleLogin);
  $("[data-login-submit]").addEventListener("click", handleLogin);
}

function initAdmin() {
  $("[data-add-member]").addEventListener("click", () => {
    members.push({
      eventId,
      name: "",
      tag: "",
      role: "",
      squad: "TBRK",
      status: "Confirme",
      image: "",
      description: ""
    });
    renderMembers();
  });

  $("[data-add-participant]").addEventListener("click", () => {
    participants.push({
      eventId,
      name: "",
      tag: "",
      role: "",
      squad: "",
      status: "Confirme",
      image: "",
      description: ""
    });
    renderParticipants();
  });

  const handleAsyncAction = (action) => async (event) => {
    event.preventDefault();
    try {
      await action();
    } catch (error) {
      setMessage(error.message || "Something went wrong.", "error");
    }
  };

  const adminForm = $("[data-admin-form]");
  adminForm.addEventListener("submit", handleAsyncAction(saveAll));
  $("[data-save]").addEventListener("click", handleAsyncAction(saveAll));
  $("[data-load-github]").addEventListener("click", handleAsyncAction(loadFromGithub));
  $("[data-download]").addEventListener("click", downloadBackup);
  $("[data-logout]").addEventListener("click", () => {
    setLoggedIn(false);
    showLogin();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initLogin();
  initAdmin();
  if (isLoggedIn()) {
    showAdmin();
    loadData();
  } else {
    showLogin();
  }
});
