const languageConfig = {
  fr: { short: "FR", label: "Français", dir: "ltr" },
  en: { short: "EN", label: "English", dir: "ltr" },
  ar: { short: "AR", label: "العربية", dir: "rtl" }
};

const defaultLanguage = "fr";
const languageStorageKey = "tbrk-language";

const translations = {
  fr: {
    "meta.title": "TBRK Esports | Tournois Call of Duty",
    "meta.description": "TBRK Esports organise des matchs privés, événements et tournois Call of Duty. Consulte les règles, les participants et inscris ton squad.",
    "meta.ogTitle": "TBRK Esports - Team Breakers",
    "meta.ogDescription": "Tournois Call of Duty, règles officielles, fair play et inscriptions aux événements TBRK.",
    "a11y.brand": "Accueil TBRK Esports",
    "a11y.openMenu": "Ouvrir le menu",
    "a11y.closeMenu": "Fermer le menu",
    "a11y.mainNav": "Navigation principale",
    "a11y.languageSwitcher": "Choix de langue",
    "a11y.keyInfo": "Informations clés",
    "a11y.poster": "Affiche du tournoi TBRK",
    "a11y.posterAlt": "Affiche TBRK Esports pour un tournoi Call of Duty avec règles fair play",
    "a11y.highlights": "Points forts",
    "a11y.whyJoin": "Pourquoi participer",
    "a11y.socialLinks": "Liens officiels TBRK",
    "a11y.faq": "Questions fréquentes",
    "a11y.footerSocials": "Réseaux sociaux TBRK",
    "a11y.openSocial": "Ouvrir {label} TBRK dans un nouvel onglet",
    "a11y.socialToConfigure": "{label} TBRK à configurer",
    "nav.event": "Événement",
    "nav.team": "Équipe",
    "nav.participants": "Participants",
    "nav.socials": "Réseaux",
    "nav.registration": "Inscription",
    "hero.eyebrow": "Call of Duty Private Matches",
    "hero.title": "La zone officielle des tournois <em>TBRK</em>.",
    "hero.lead": "TBRK Esports réunit les squads, les joueurs compétitifs et la communauté autour de matchs privés Call of Duty, avec événements, cash prizes et règles fair-play claires.",
    "hero.primaryCta": "S'inscrire au prochain event",
    "hero.secondaryCta": "Voir les participants",
    "hero.confirmedPlayers": "joueurs confirmés",
    "hero.privateMatches": "Matchs privés",
    "metrics.cashPrize": "Cash prize",
    "metrics.format": "4v4",
    "metrics.squads": "Squads",
    "metrics.registrations": "Inscriptions",
    "poster.activeEvent": "Event actif",
    "strip.tournaments": "Tournois",
    "strip.privateMatches": "Matchs privés",
    "strip.cashPrize": "Cash prize",
    "strip.squads": "Squads",
    "strip.ranking": "Classement",
    "strip.community": "Communauté",
    "event.eyebrow": "Prochain rendez-vous",
    "event.date": "Date",
    "event.time": "Heure",
    "event.mode": "Mode",
    "event.prize": "Prix",
    "event.fillForm": "Remplir le formulaire",
    "event.viewRules": "Voir les règles",
    "rules.eyebrow": "Règlement officiel",
    "rules.title": "Règles du tournoi",
    "rules.policyTitle": "Fair Play Policy",
    "feature.one.title": "Inscription rapide",
    "feature.one.text": "Inscris ton squad en quelques secondes et reçois les informations du lobby avant le lancement de l'événement.",
    "feature.two.title": "Respect obligatoire",
    "feature.two.text": "Respect de tous les joueurs, admins et membres du staff. Aucune insulte, toxicité ou langage offensant.",
    "feature.three.title": "Ban permanent",
    "feature.three.text": "Aucune triche, hack, exploit ou logiciel tiers non autorisé. Toute violation entraîne un bannissement permanent.",
    "team.eyebrow": "Roster",
    "team.title": "Les visages de Team Breakers",
    "team.text": "Un roster noir et or pour découvrir les joueurs, admins, streamers et organisateurs qui font vivre Team Breakers.",
    "participants.eyebrow": "Event en cours",
    "participants.title": "Participants inscrits",
    "participants.text": "Quand un événement est actif, cette section affiche les joueurs confirmés et les squads déjà prêts pour le lobby.",
    "participants.confirmed": "confirmés",
    "participants.empty": "Aucun participant affiché pour le moment. Les inscriptions confirmées seront publiées ici.",
    "participant.fallbackName": "Joueur {number}",
    "participant.fallbackSquad": "Squad à confirmer",
    "participant.fallbackTag": "Participant",
    "participant.confirmed": "Confirmé",
    "participant.avatarAlt": "Avatar {name}",
    "player.portraitAlt": "Portrait {name}",
    "team.defaultRole": "Team Breakers",
    "cta.eyebrow": "Rejoins le lobby",
    "cta.title": "Inscris ton squad au prochain tournoi TBRK.",
    "cta.text": "Remplis le formulaire officiel pour réserver ta place. L'équipe TBRK validera ensuite les joueurs confirmés pour l'événement.",
    "cta.openForm": "Ouvrir le formulaire",
    "form.coming": "Formulaire à venir",
    "form.registrationComing": "Inscription à venir",
    "form.note.open": "Le formulaire s’ouvrira dans un nouvel onglet.",
    "form.note.closed": "Le formulaire sera ajouté ici dès l’ouverture des inscriptions.",
    "form.titleClosed": "Le formulaire d'inscription sera ajouté bientôt.",
    "social.eyebrow": "Communauté",
    "social.title": "Connecte-toi avec TBRK.",
    "social.text": "Rejoins nos réseaux pour recevoir les annonces d'événements, les horaires des lobbys, les clips, les résultats et les prochaines ouvertures d'inscription.",
    "social.discord.title": "Discord",
    "social.discord.desc": "Annonces, lobbys et support",
    "social.youtube.title": "YouTube",
    "social.youtube.desc": "Highlights et vidéos",
    "social.tiktok.title": "TikTok",
    "social.tiktok.desc": "Clips courts et moments forts",
    "social.facebook.title": "Facebook",
    "social.facebook.desc": "Communauté et nouvelles",
    "social.instagram.title": "Instagram",
    "social.instagram.desc": "Visuels, stories et annonces",
    "social.note.none": "Les réseaux officiels TBRK seront ajoutés ici au fur et à mesure de leur ouverture.",
    "social.note.partial": "Les liens actifs s’ouvrent dans un nouvel onglet. Les autres réseaux seront ajoutés bientôt.",
    "social.note.all": "Suis TBRK sur nos réseaux officiels pour ne manquer aucun tournoi, clip ou résultat.",
    "social.titleConfigure": "Lien {label} à configurer.",
    "faq.eyebrow": "FAQ",
    "faq.title": "Questions rapides",
    "faq.q1": "Comment participer à un événement?",
    "faq.a1": "Clique sur le bouton d'inscription, remplis le formulaire officiel et attends la confirmation de l'équipe TBRK.",
    "faq.q2": "Quand la liste des participants est-elle mise à jour?",
    "faq.a2": "Les participants confirmés sont publiés après validation des inscriptions par les admins TBRK.",
    "faq.q3": "Qu'arrive-t-il en cas de triche?",
    "faq.a3": "La triche, les hacks, les exploits et les logiciels non autorisés entraînent un bannissement permanent des événements TBRK.",
    "footer.description": "Tournois Call of Duty, matchs privés, fair play et événements compétitifs.",
    "footer.disclaimer": "Site non affilié à Activision ou Call of Duty. Les marques citées appartiennent à leurs propriétaires respectifs."
  },
  en: {
    "meta.title": "TBRK Esports | Call of Duty Tournaments",
    "meta.description": "TBRK Esports hosts Call of Duty private matches, events and tournaments. Check the rules, participants and register your squad.",
    "meta.ogTitle": "TBRK Esports - Team Breakers",
    "meta.ogDescription": "Call of Duty tournaments, official rules, fair play and TBRK event registration.",
    "a11y.brand": "TBRK Esports home",
    "a11y.openMenu": "Open menu",
    "a11y.closeMenu": "Close menu",
    "a11y.mainNav": "Main navigation",
    "a11y.languageSwitcher": "Language selector",
    "a11y.keyInfo": "Key information",
    "a11y.poster": "TBRK tournament poster",
    "a11y.posterAlt": "TBRK Esports poster for a Call of Duty tournament with fair play rules",
    "a11y.highlights": "Highlights",
    "a11y.whyJoin": "Why join",
    "a11y.socialLinks": "Official TBRK links",
    "a11y.faq": "Frequently asked questions",
    "a11y.footerSocials": "TBRK social networks",
    "a11y.openSocial": "Open TBRK {label} in a new tab",
    "a11y.socialToConfigure": "TBRK {label} to configure",
    "nav.event": "Event",
    "nav.team": "Team",
    "nav.participants": "Participants",
    "nav.socials": "Socials",
    "nav.registration": "Register",
    "hero.eyebrow": "Call of Duty Private Matches",
    "hero.title": "The official zone for <em>TBRK</em> tournaments.",
    "hero.lead": "TBRK Esports brings squads, competitive players and the community together around Call of Duty private matches, events, cash prizes and clear fair-play rules.",
    "hero.primaryCta": "Register for the next event",
    "hero.secondaryCta": "View participants",
    "hero.confirmedPlayers": "confirmed players",
    "hero.privateMatches": "Private matches",
    "metrics.cashPrize": "Cash prize",
    "metrics.format": "4v4",
    "metrics.squads": "Squads",
    "metrics.registrations": "Registration",
    "poster.activeEvent": "Active event",
    "strip.tournaments": "Tournaments",
    "strip.privateMatches": "Private matches",
    "strip.cashPrize": "Cash prize",
    "strip.squads": "Squads",
    "strip.ranking": "Ranking",
    "strip.community": "Community",
    "event.eyebrow": "Next event",
    "event.date": "Date",
    "event.time": "Time",
    "event.mode": "Mode",
    "event.prize": "Prize",
    "event.fillForm": "Fill the form",
    "event.viewRules": "View rules",
    "rules.eyebrow": "Official rules",
    "rules.title": "Tournament rules",
    "rules.policyTitle": "Fair Play Policy",
    "feature.one.title": "Fast registration",
    "feature.one.text": "Register your squad in seconds and receive lobby information before the event starts.",
    "feature.two.title": "Respect required",
    "feature.two.text": "Respect all players, admins and staff members. No insults, toxicity or offensive language.",
    "feature.three.title": "Permanent ban",
    "feature.three.text": "No cheating, hacks, exploits or unauthorized third-party software. Any violation leads to a permanent ban.",
    "team.eyebrow": "Roster",
    "team.title": "The faces of Team Breakers",
    "team.text": "A black-and-gold roster to discover the players, admins, streamers and organizers who keep Team Breakers alive.",
    "participants.eyebrow": "Current event",
    "participants.title": "Registered participants",
    "participants.text": "When an event is active, this section displays confirmed players and squads already ready for the lobby.",
    "participants.confirmed": "confirmed",
    "participants.empty": "No participants displayed yet. Confirmed registrations will be published here.",
    "participant.fallbackName": "Player {number}",
    "participant.fallbackSquad": "Squad to confirm",
    "participant.fallbackTag": "Participant",
    "participant.confirmed": "Confirmed",
    "participant.avatarAlt": "Avatar {name}",
    "player.portraitAlt": "Portrait {name}",
    "team.defaultRole": "Team Breakers",
    "cta.eyebrow": "Join the lobby",
    "cta.title": "Register your squad for the next TBRK tournament.",
    "cta.text": "Complete the official form to reserve your spot. The TBRK team will then validate confirmed players for the event.",
    "cta.openForm": "Open the form",
    "form.coming": "Form coming soon",
    "form.registrationComing": "Registration coming soon",
    "form.note.open": "The form will open in a new tab.",
    "form.note.closed": "The form will be added here as soon as registration opens.",
    "form.titleClosed": "The registration form will be added soon.",
    "social.eyebrow": "Community",
    "social.title": "Connect with TBRK.",
    "social.text": "Join our networks to receive event announcements, lobby schedules, clips, results and upcoming registration openings.",
    "social.discord.title": "Discord",
    "social.discord.desc": "Announcements, lobbies and support",
    "social.youtube.title": "YouTube",
    "social.youtube.desc": "Highlights and videos",
    "social.tiktok.title": "TikTok",
    "social.tiktok.desc": "Short clips and top moments",
    "social.facebook.title": "Facebook",
    "social.facebook.desc": "Community and news",
    "social.instagram.title": "Instagram",
    "social.instagram.desc": "Visuals, stories and announcements",
    "social.note.none": "Official TBRK networks will be added here as they open.",
    "social.note.partial": "Active links open in a new tab. The other networks will be added soon.",
    "social.note.all": "Follow TBRK on our official networks so you never miss a tournament, clip or result.",
    "social.titleConfigure": "{label} link to configure.",
    "faq.eyebrow": "FAQ",
    "faq.title": "Quick questions",
    "faq.q1": "How do I join an event?",
    "faq.a1": "Click the registration button, complete the official form and wait for confirmation from the TBRK team.",
    "faq.q2": "When is the participant list updated?",
    "faq.a2": "Confirmed participants are published after the TBRK admins validate the registrations.",
    "faq.q3": "What happens in case of cheating?",
    "faq.a3": "Cheating, hacks, exploits and unauthorized software lead to a permanent ban from TBRK events.",
    "footer.description": "Call of Duty tournaments, private matches, fair play and competitive events.",
    "footer.disclaimer": "This site is not affiliated with Activision or Call of Duty. Mentioned trademarks belong to their respective owners."
  },
  ar: {
    "meta.title": "TBRK Esports | بطولات Call of Duty",
    "meta.description": "تنظم TBRK Esports مباريات خاصة وفعاليات وبطولات Call of Duty. اطّلع على القواعد والمشاركين وسجّل فريقك.",
    "meta.ogTitle": "TBRK Esports - Team Breakers",
    "meta.ogDescription": "بطولات Call of Duty، قواعد رسمية، لعب نظيف وتسجيل في فعاليات TBRK.",
    "a11y.brand": "الصفحة الرئيسية لـ TBRK Esports",
    "a11y.openMenu": "فتح القائمة",
    "a11y.closeMenu": "إغلاق القائمة",
    "a11y.mainNav": "التنقل الرئيسي",
    "a11y.languageSwitcher": "اختيار اللغة",
    "a11y.keyInfo": "معلومات أساسية",
    "a11y.poster": "ملصق بطولة TBRK",
    "a11y.posterAlt": "ملصق TBRK Esports لبطولة Call of Duty مع قواعد اللعب النظيف",
    "a11y.highlights": "أبرز النقاط",
    "a11y.whyJoin": "لماذا تشارك",
    "a11y.socialLinks": "روابط TBRK الرسمية",
    "a11y.faq": "الأسئلة الشائعة",
    "a11y.footerSocials": "شبكات TBRK الاجتماعية",
    "a11y.openSocial": "فتح {label} الخاص بـ TBRK في تبويب جديد",
    "a11y.socialToConfigure": "رابط {label} الخاص بـ TBRK يحتاج إلى إعداد",
    "nav.event": "الفعالية",
    "nav.team": "الفريق",
    "nav.participants": "المشاركون",
    "nav.socials": "الشبكات",
    "nav.registration": "التسجيل",
    "hero.eyebrow": "مباريات Call of Duty الخاصة",
    "hero.title": "المنطقة الرسمية لبطولات <em>TBRK</em>.",
    "hero.lead": "تجمع TBRK Esports الفرق واللاعبين التنافسيين والمجتمع حول مباريات Call of Duty الخاصة، مع فعاليات وجوائز نقدية وقواعد لعب نظيف واضحة.",
    "hero.primaryCta": "سجّل في الفعالية القادمة",
    "hero.secondaryCta": "عرض المشاركين",
    "hero.confirmedPlayers": "لاعبين مؤكدين",
    "hero.privateMatches": "مباريات خاصة",
    "metrics.cashPrize": "الجائزة النقدية",
    "metrics.format": "4 ضد 4",
    "metrics.squads": "الفرق",
    "metrics.registrations": "التسجيل",
    "poster.activeEvent": "فعالية نشطة",
    "strip.tournaments": "بطولات",
    "strip.privateMatches": "مباريات خاصة",
    "strip.cashPrize": "جائزة نقدية",
    "strip.squads": "فرق",
    "strip.ranking": "ترتيب",
    "strip.community": "المجتمع",
    "event.eyebrow": "الموعد القادم",
    "event.date": "التاريخ",
    "event.time": "الوقت",
    "event.mode": "النمط",
    "event.prize": "الجائزة",
    "event.fillForm": "تعبئة النموذج",
    "event.viewRules": "عرض القواعد",
    "rules.eyebrow": "القواعد الرسمية",
    "rules.title": "قواعد البطولة",
    "rules.policyTitle": "سياسة اللعب النظيف",
    "feature.one.title": "تسجيل سريع",
    "feature.one.text": "سجّل فريقك خلال ثوانٍ واحصل على معلومات اللوبي قبل انطلاق الفعالية.",
    "feature.two.title": "الاحترام إلزامي",
    "feature.two.text": "احترام جميع اللاعبين والمشرفين وأعضاء الطاقم. ممنوع الإهانات أو السلوك السام أو اللغة المسيئة.",
    "feature.three.title": "حظر دائم",
    "feature.three.text": "ممنوع الغش أو الهاكات أو استغلال الثغرات أو البرامج غير المصرح بها. أي مخالفة تؤدي إلى حظر دائم.",
    "team.eyebrow": "التشكيلة",
    "team.title": "وجوه Team Breakers",
    "team.text": "تشكيلة باللونين الأسود والذهبي للتعرف على اللاعبين والمشرفين وصنّاع المحتوى والمنظمين الذين يجعلون Team Breakers نشطة.",
    "participants.eyebrow": "الفعالية الحالية",
    "participants.title": "المشاركون المسجلون",
    "participants.text": "عندما تكون هناك فعالية نشطة، يعرض هذا القسم اللاعبين المؤكدين والفرق الجاهزة للّوبي.",
    "participants.confirmed": "مؤكدون",
    "participants.empty": "لا يوجد مشاركون معروضون حالياً. سيتم نشر التسجيلات المؤكدة هنا.",
    "participant.fallbackName": "لاعب {number}",
    "participant.fallbackSquad": "الفريق قيد التأكيد",
    "participant.fallbackTag": "مشارك",
    "participant.confirmed": "مؤكد",
    "participant.avatarAlt": "صورة {name}",
    "player.portraitAlt": "صورة {name}",
    "team.defaultRole": "Team Breakers",
    "cta.eyebrow": "انضم إلى اللوبي",
    "cta.title": "سجّل فريقك في بطولة TBRK القادمة.",
    "cta.text": "املأ النموذج الرسمي لحجز مكانك. بعد ذلك سيقوم فريق TBRK بتأكيد اللاعبين المشاركين في الفعالية.",
    "cta.openForm": "فتح النموذج",
    "form.coming": "النموذج قريباً",
    "form.registrationComing": "التسجيل قريباً",
    "form.note.open": "سيفتح النموذج في تبويب جديد.",
    "form.note.closed": "سيتم إضافة النموذج هنا عند فتح التسجيل.",
    "form.titleClosed": "سيتم إضافة نموذج التسجيل قريباً.",
    "social.eyebrow": "المجتمع",
    "social.title": "تواصل مع TBRK.",
    "social.text": "انضم إلى شبكاتنا لتصلك إعلانات الفعاليات ومواعيد اللوبيات والمقاطع والنتائج وفتح التسجيلات القادمة.",
    "social.discord.title": "Discord",
    "social.discord.desc": "إعلانات ولوبيات ودعم",
    "social.youtube.title": "YouTube",
    "social.youtube.desc": "أبرز اللقطات والفيديوهات",
    "social.tiktok.title": "TikTok",
    "social.tiktok.desc": "مقاطع قصيرة وأفضل اللحظات",
    "social.facebook.title": "Facebook",
    "social.facebook.desc": "مجتمع وأخبار",
    "social.instagram.title": "Instagram",
    "social.instagram.desc": "صور وستوريز وإعلانات",
    "social.note.none": "ستتم إضافة شبكات TBRK الرسمية هنا عند إطلاقها.",
    "social.note.partial": "الروابط النشطة تفتح في تبويب جديد. سيتم إضافة الشبكات الأخرى قريباً.",
    "social.note.all": "تابع TBRK على شبكاتنا الرسمية حتى لا تفوّت أي بطولة أو مقطع أو نتيجة.",
    "social.titleConfigure": "رابط {label} يحتاج إلى إعداد.",
    "faq.eyebrow": "FAQ",
    "faq.title": "أسئلة سريعة",
    "faq.q1": "كيف أشارك في فعالية؟",
    "faq.a1": "اضغط على زر التسجيل، املأ النموذج الرسمي وانتظر تأكيد فريق TBRK.",
    "faq.q2": "متى يتم تحديث قائمة المشاركين؟",
    "faq.a2": "يتم نشر المشاركين المؤكدين بعد مراجعة التسجيلات من طرف مشرفي TBRK.",
    "faq.q3": "ماذا يحدث في حالة الغش؟",
    "faq.a3": "الغش والهاكات واستغلال الثغرات والبرامج غير المصرح بها تؤدي إلى حظر دائم من فعاليات TBRK.",
    "footer.description": "بطولات Call of Duty، مباريات خاصة، لعب نظيف وفعاليات تنافسية.",
    "footer.disclaimer": "هذا الموقع غير تابع لـ Activision أو Call of Duty. العلامات التجارية المذكورة مملوكة لأصحابها."
  }
};

const fallbackEvents = [
  {
    id: "cod-tournament-100",
    active: true,
    title: { fr: "TBRK Call of Duty Tournament", en: "TBRK Call of Duty Tournament", ar: "بطولة TBRK Call of Duty" },
    name: { fr: "TBRK Esports Call of Duty Tournament", en: "TBRK Esports Call of Duty Tournament", ar: "بطولة TBRK Esports للعبة Call of Duty" },
    description: {
      fr: "Prépare ton squad pour un tournoi Call of Duty TBRK Esports en matchs privés. Respect, fair play et tolérance zéro pour la triche.",
      en: "Get your squad ready for a TBRK Esports Call of Duty private-match tournament. Respect, fair play and zero tolerance for cheating.",
      ar: "جهّز فريقك لبطولة Call of Duty من TBRK Esports بنظام المباريات الخاصة. احترام، لعب نظيف، وعدم التسامح نهائياً مع الغش."
    },
    dateLabel: { fr: "Samedi 20/06/2026", en: "Saturday 20/06/2026", ar: "السبت 20/06/2026" },
    timeLabel: { fr: "Heure à confirmer", en: "Time to be confirmed", ar: "سيتم تأكيد الوقت" },
    mode: { fr: "Matchs privés COD", en: "COD private matches", ar: "مباريات COD خاصة" },
    cashPrize: "$100",
    statusLabel: { fr: "Inscriptions à venir", en: "Registration coming soon", ar: "التسجيل قريباً" },
    registrationStatus: { fr: "À venir", en: "Coming soon", ar: "قريباً" },
    formUrl: "",
    sheetCsvUrl: "",
    rules: [
      { fr: "Respect de tous les joueurs, admins et membres du staff.", en: "Respect all players, admins and staff members.", ar: "احترام جميع اللاعبين والمشرفين وأعضاء الطاقم." },
      { fr: "Fair play et bon esprit sportif obligatoires.", en: "Fair play and good sportsmanship are required.", ar: "الالتزام باللعب النظيف والروح الرياضية." },
      { fr: "Comportement professionnel en tout temps.", en: "Professional behavior at all times.", ar: "التصرف باحترافية في جميع الأوقات." },
      { fr: "Aucune insulte, toxicité ou langage offensant.", en: "No insults, toxicity or offensive language.", ar: "ممنوع الإهانات أو السلوك السام أو اللغة المسيئة." },
      { fr: "Aucune triche, hack, exploit ou logiciel tiers non autorisé.", en: "No cheating, hacks, exploits or unauthorized third-party software.", ar: "ممنوع الغش أو الهاكات أو استغلال الثغرات أو استخدام برامج غير مصرّح بها." },
      { fr: "Triche = bannissement permanent des événements TBRK.", en: "Cheating = permanent ban from TBRK events.", ar: "الغش = حظر دائم من فعاليات TBRK." },
      { fr: "Tous les matchs sont surveillés et révisés.", en: "All matches are monitored and reviewed.", ar: "تتم مراقبة جميع المباريات ومراجعتها." }
    ],
    fairPlayPolicy: {
      fr: "Tout joueur pris à tricher, exploiter un bug, utiliser un hack ou un logiciel non autorisé recevra un bannissement permanent de tous les événements TBRK Esports.",
      en: "Any player caught cheating, exploiting bugs, using hacks or unauthorized software will receive a permanent ban from all TBRK Esports events.",
      ar: "أي لاعب يتم ضبطه وهو يغش أو يستغل الثغرات أو يستخدم هاكات أو برامج غير مصرح بها سيحصل على حظر دائم من جميع فعاليات TBRK Esports."
    }
  }
];

const fallbackPlayers = [
  { eventId: "cod-tournament-100", name: { fr: "Joueur 01", en: "Player 01", ar: "لاعب 01" }, tag: "TBRK Core", role: { fr: "Capitaine", en: "Captain", ar: "القائد" }, squad: "Team Breakers", status: { fr: "Confirmé", en: "Confirmed", ar: "مؤكد" }, image: "assets/images/player-01.jpg" },
  { eventId: "cod-tournament-100", name: { fr: "Joueur 02", en: "Player 02", ar: "لاعب 02" }, tag: { fr: "Stratège", en: "Strategist", ar: "استراتيجي" }, role: { fr: "Organizer", en: "Organizer", ar: "منظم" }, squad: "Team Breakers", status: { fr: "Confirmé", en: "Confirmed", ar: "مؤكد" }, image: "assets/images/player-02.jpg" },
  { eventId: "cod-tournament-100", name: { fr: "Joueur 03", en: "Player 03", ar: "لاعب 03" }, tag: { fr: "Coach", en: "Coach", ar: "مدرب" }, role: { fr: "Admin", en: "Admin", ar: "مشرف" }, squad: "Team Breakers", status: { fr: "Confirmé", en: "Confirmed", ar: "مؤكد" }, image: "assets/images/player-03.jpg" },
  { eventId: "cod-tournament-100", name: { fr: "Joueur 04", en: "Player 04", ar: "لاعب 04" }, tag: "Slayer", role: { fr: "Assaut", en: "Assault", ar: "هجوم" }, squad: "Alpha", status: { fr: "Confirmé", en: "Confirmed", ar: "مؤكد" }, image: "assets/images/player-04.jpg" },
  { eventId: "cod-tournament-100", name: { fr: "Joueur 05", en: "Player 05", ar: "لاعب 05" }, tag: "Entry", role: { fr: "Objectif", en: "Objective", ar: "الأهداف" }, squad: "Alpha", status: { fr: "Confirmé", en: "Confirmed", ar: "مؤكد" }, image: "assets/images/player-05.jpg" },
  { eventId: "cod-tournament-100", name: { fr: "Joueur 06", en: "Player 06", ar: "لاعب 06" }, tag: "Support", role: { fr: "Support", en: "Support", ar: "دعم" }, squad: "Bravo", status: { fr: "Confirmé", en: "Confirmed", ar: "مؤكد" }, image: "assets/images/player-06.jpg" },
  { eventId: "cod-tournament-100", name: { fr: "Joueur 07", en: "Player 07", ar: "لاعب 07" }, tag: "Flex", role: { fr: "Flex", en: "Flex", ar: "مرن" }, squad: "Bravo", status: { fr: "Confirmé", en: "Confirmed", ar: "مؤكد" }, image: "assets/images/player-07.jpg" },
  { eventId: "cod-tournament-100", name: { fr: "Joueur 08", en: "Player 08", ar: "لاعب 08" }, tag: "AR", role: { fr: "Long range", en: "Long range", ar: "مدى بعيد" }, squad: "Charlie", status: { fr: "Confirmé", en: "Confirmed", ar: "مؤكد" }, image: "assets/images/player-08.jpg" }
];

const fallbackSocials = {
  discord: "https://discord.gg/tbrk-demo",
  youtube: "https://www.youtube.com/@tbrk-demo",
  tiktok: "https://www.tiktok.com/@tbrk-demo",
  facebook: "https://www.facebook.com/tbrk.demo",
  instagram: "https://www.instagram.com/tbrk.demo"
};

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));

let currentLanguage = defaultLanguage;
let currentEvent = null;
let currentPlayers = [];
let currentSocials = fallbackSocials;
let revealObserver = null;

function validLanguage(lang) {
  return Object.prototype.hasOwnProperty.call(languageConfig, lang) ? lang : defaultLanguage;
}

function getInitialLanguage() {
  const params = new URLSearchParams(window.location.search);
  const urlLanguage = params.get("lang");
  if (urlLanguage && languageConfig[urlLanguage]) return urlLanguage;

  try {
    const storedLanguage = localStorage.getItem(languageStorageKey);
    if (storedLanguage && languageConfig[storedLanguage]) return storedLanguage;
  } catch (error) {
    console.warn("La préférence de langue n'a pas pu être lue.", error.message);
  }

  return defaultLanguage;
}

function interpolate(template, params = {}) {
  return String(template).replace(/\{(\w+)\}/g, (_, key) => params[key] ?? "");
}

function t(key, params = {}) {
  const text = translations[currentLanguage]?.[key] ?? translations[defaultLanguage]?.[key] ?? key;
  return interpolate(text, params);
}

function localize(value, lang = currentLanguage) {
  if (value === undefined || value === null) return "";
  if (typeof value === "string" || typeof value === "number") return String(value);
  if (Array.isArray(value)) return value.map((item) => localize(item, lang)).filter(Boolean);
  if (typeof value === "object") {
    return value[lang] ?? value[defaultLanguage] ?? value.en ?? value.fr ?? value.ar ?? Object.values(value).find((item) => typeof item === "string") ?? "";
  }
  return String(value);
}

function setText(selector, value) {
  const element = $(selector);
  if (element && value !== undefined && value !== null) element.textContent = value;
}

function setAllText(selector, value) {
  $$(selector).forEach((element) => {
    if (value !== undefined && value !== null) element.textContent = value;
  });
}

function updateMetaTag(selector, value) {
  const tag = $(selector);
  if (tag && value) tag.setAttribute("content", value);
}

function applyTranslations() {
  const config = languageConfig[currentLanguage] || languageConfig[defaultLanguage];
  document.documentElement.lang = currentLanguage;
  document.documentElement.dir = config.dir;
  document.title = t("meta.title");
  updateMetaTag('meta[name="description"]', t("meta.description"));
  updateMetaTag('meta[property="og:title"]', t("meta.ogTitle"));
  updateMetaTag('meta[property="og:description"]', t("meta.ogDescription"));

  $$('[data-i18n]').forEach((element) => {
    element.textContent = t(element.dataset.i18n);
  });

  $$('[data-i18n-html]').forEach((element) => {
    element.innerHTML = t(element.dataset.i18nHtml);
  });

  const attrMap = [
    ["i18nAriaLabel", "aria-label"],
    ["i18nAlt", "alt"],
    ["i18nTitle", "title"]
  ];

  attrMap.forEach(([dataKey, attr]) => {
    $$(`[data-${dataKey.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`)}]`).forEach((element) => {
      element.setAttribute(attr, t(element.dataset[dataKey]));
    });
  });

  $$('[data-i18n-empty-text]').forEach((element) => {
    element.dataset.emptyText = t(element.dataset.i18nEmptyText);
  });

  $$('[data-lang-option]').forEach((button) => {
    const isActive = button.dataset.langOption === currentLanguage;
    button.setAttribute("aria-pressed", String(isActive));
    button.setAttribute("title", languageConfig[button.dataset.langOption]?.label || button.textContent.trim());
  });

  const navToggle = $('[data-nav-toggle]');
  const nav = $('[data-nav]');
  if (navToggle && nav) {
    navToggle.setAttribute("aria-label", nav.classList.contains("is-open") ? t("a11y.closeMenu") : t("a11y.openMenu"));
  }
}

async function fetchJson(path, fallback) {
  try {
    const response = await fetch(path, { cache: "no-store" });
    if (!response.ok) throw new Error(`Impossible de charger ${path}`);
    return await response.json();
  } catch (error) {
    console.warn(error.message);
    return fallback;
  }
}

async function fetchCsv(url) {
  if (!url) return null;
  try {
    const response = await fetch(url, { cache: "no-store" });
    if (!response.ok) throw new Error("CSV inaccessible");
    return await response.text();
  } catch (error) {
    console.warn("La feuille CSV n'a pas pu être chargée. Utilisation du JSON local.", error.message);
    return null;
  }
}

function parseCsv(csvText) {
  const rows = [];
  let current = "";
  let row = [];
  let inQuotes = false;

  for (let index = 0; index < csvText.length; index += 1) {
    const char = csvText[index];
    const next = csvText[index + 1];

    if (char === '"' && inQuotes && next === '"') {
      current += '"';
      index += 1;
    } else if (char === '"') {
      inQuotes = !inQuotes;
    } else if (char === "," && !inQuotes) {
      row.push(current.trim());
      current = "";
    } else if ((char === "\n" || char === "\r") && !inQuotes) {
      if (current || row.length) {
        row.push(current.trim());
        rows.push(row);
        row = [];
        current = "";
      }
      if (char === "\r" && next === "\n") index += 1;
    } else {
      current += char;
    }
  }

  if (current || row.length) {
    row.push(current.trim());
    rows.push(row);
  }

  const [headers = [], ...dataRows] = rows;
  const normalizedHeaders = headers.map((header) => header.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""));

  return dataRows
    .filter((cells) => cells.some(Boolean))
    .map((cells, index) => {
      const get = (...keys) => {
        const foundIndex = normalizedHeaders.findIndex((header) => keys.includes(header));
        return foundIndex >= 0 ? cells[foundIndex] : "";
      };

      const number = String(index + 1).padStart(2, "0");
      const name = get("nom", "name", "joueur", "player", "gamertag", "pseudo", "الاسم", "اللاعب") || t("participant.fallbackName", { number });
      return {
        name,
        tag: get("tag", "gamertag", "pseudo", "activision id") || t("participant.fallbackTag"),
        role: get("role", "poste", "position", "الدور") || t("participant.fallbackTag"),
        squad: get("squad", "team", "equipe", "équipe", "الفريق") || t("participant.fallbackSquad"),
        status: get("statut", "status", "الحالة") || t("participant.confirmed"),
        image: get("image", "photo", "avatar") || ""
      };
    });
}

function isPlaceholderUrl(url = "") {
  return !url || /^#/.test(url) || /remplacer|replace|example|exemple|votre-lien|your-link|a-configurer|à-configurer/i.test(url);
}

function normalizeExternalUrl(url = "") {
  const trimmed = typeof url === "string" ? url.trim() : "";
  if (!trimmed) return "";
  if (/^\/\//.test(trimmed)) return `https:${trimmed}`;
  if (/^https?:\/\//i.test(trimmed)) return trimmed;
  if (/^(discord\.gg|discord\.com|youtube\.com|www\.youtube\.com|youtu\.be|tiktok\.com|www\.tiktok\.com|facebook\.com|www\.facebook\.com|fb\.com|instagram\.com|www\.instagram\.com)/i.test(trimmed)) {
    return `https://${trimmed}`;
  }
  return trimmed;
}

function normalizeFormUrl(url = "") {
  const trimmed = typeof url === "string" ? url.trim() : "";
  if (!trimmed) return "";
  if (/^#|^\//.test(trimmed)) return trimmed;
  if (/^\/\//.test(trimmed)) return `https:${trimmed}`;
  if (/^https?:\/\//i.test(trimmed)) return trimmed;
  if (/^(forms\.gle|docs\.google\.com|www\.google\.com\/forms)/i.test(trimmed)) {
    return `https://${trimmed}`;
  }
  return trimmed;
}

function normalizeSocials(socials) {
  const normalized = { ...fallbackSocials };

  if (Array.isArray(socials)) {
    socials.forEach((social) => {
      if (social?.id) normalized[social.id] = social.url || "";
    });
    return normalized;
  }

  if (socials && typeof socials === "object") {
    Object.entries(socials).forEach(([key, value]) => {
      normalized[key] = typeof value === "string" ? value : value?.url || "";
    });
  }

  return normalized;
}

function setSocialLinks(socialsData) {
  const socials = normalizeSocials(socialsData);
  let totalCards = 0;
  let activeCards = 0;

  $$('[data-social-link]').forEach((link) => {
    const socialId = link.dataset.socialLink;
    const label = t(`social.${socialId}.title`) || socialId || "réseau";
    const cleanUrl = normalizeExternalUrl(socials[socialId]);
    const hasRealUrl = /^https?:\/\//i.test(cleanUrl);
    const isMainCard = link.classList.contains("social-card");

    if (isMainCard) totalCards += 1;

    if (hasRealUrl) {
      if (isMainCard) activeCards += 1;
      link.href = cleanUrl;
      link.target = "_blank";
      link.setAttribute("rel", "noopener noreferrer");
      link.classList.remove("is-disabled");
      link.removeAttribute("aria-disabled");
      link.removeAttribute("title");
      link.setAttribute("aria-label", t("a11y.openSocial", { label }));
    } else {
      link.href = "#reseaux";
      link.target = "_self";
      link.removeAttribute("rel");
      link.classList.add("is-disabled");
      link.setAttribute("aria-disabled", "true");
      link.setAttribute("title", t("social.titleConfigure", { label }));
      link.setAttribute("aria-label", t("a11y.socialToConfigure", { label }));
    }
  });

  const note = $("[data-social-note]");
  if (note) {
    if (activeCards === 0) {
      note.textContent = t("social.note.none");
    } else if (activeCards < totalCards) {
      note.textContent = t("social.note.partial");
    } else {
      note.textContent = t("social.note.all");
    }
  }
}

function setFormLinks(url) {
  const cleanUrl = normalizeFormUrl(url);
  const hasRealUrl = !isPlaceholderUrl(cleanUrl);

  $$('[data-form-link]').forEach((link) => {
    const activeTextKey = link.dataset.i18n;

    if (hasRealUrl) {
      link.href = cleanUrl;
      link.target = cleanUrl.startsWith("#") ? "_self" : "_blank";
      if (cleanUrl.startsWith("#")) link.removeAttribute("rel");
      else link.setAttribute("rel", "noopener noreferrer");
      link.classList.remove("is-disabled");
      link.removeAttribute("aria-disabled");
      link.removeAttribute("title");
      if (activeTextKey) link.textContent = t(activeTextKey);
    } else {
      link.href = "#inscription";
      link.target = "_self";
      link.removeAttribute("rel");
      link.classList.add("is-disabled");
      link.setAttribute("aria-disabled", "true");
      link.setAttribute("title", t("form.titleClosed"));
      link.textContent = link.dataset.emptyText || t("form.coming");
    }
  });

  const note = $("[data-form-note]");
  if (note) {
    note.textContent = hasRealUrl ? t("form.note.open") : t("form.note.closed");
  }
}

function resolveEventField(event, fieldName) {
  const translated = event.i18n?.[currentLanguage]?.[fieldName] ?? event.translations?.[currentLanguage]?.[fieldName];
  if (translated !== undefined) return localize(translated);
  return localize(event[fieldName]);
}

function getLocalizedEvent(event) {
  const rulesFromTranslations = event.i18n?.[currentLanguage]?.rules ?? event.translations?.[currentLanguage]?.rules;
  const rawRules = rulesFromTranslations || event.rules || [];
  return {
    ...event,
    title: resolveEventField(event, "title"),
    name: resolveEventField(event, "name") || resolveEventField(event, "title"),
    description: resolveEventField(event, "description"),
    dateLabel: resolveEventField(event, "dateLabel"),
    timeLabel: resolveEventField(event, "timeLabel"),
    mode: resolveEventField(event, "mode"),
    cashPrize: localize(event.cashPrize) || "$100",
    statusLabel: resolveEventField(event, "statusLabel"),
    registrationStatus: resolveEventField(event, "registrationStatus"),
    fairPlayPolicy: resolveEventField(event, "fairPlayPolicy"),
    rules: Array.isArray(rawRules) ? rawRules.map((rule) => localize(rule)) : []
  };
}

function renderEvent(event) {
  if (!event) return;
  const localizedEvent = getLocalizedEvent(event);

  setText("[data-event-title]", localizedEvent.title);
  setText("[data-event-name]", localizedEvent.name || localizedEvent.title);
  setText("[data-event-description]", localizedEvent.description);
  setAllText("[data-event-date]", localizedEvent.dateLabel);
  setText("[data-event-date-full]", localizedEvent.dateLabel);
  setText("[data-event-time]", localizedEvent.timeLabel);
  setText("[data-event-mode]", localizedEvent.mode);
  setText("[data-event-state]", localizedEvent.statusLabel);
  setText("[data-event-status]", localizedEvent.registrationStatus || localizedEvent.statusLabel);
  setText("[data-event-prize]", localizedEvent.cashPrize);
  setText("[data-event-prize-card]", localizedEvent.cashPrize);
  setFormLinks(event.formUrl);
  setText("[data-fair-play-policy]", localizedEvent.fairPlayPolicy);

  const rulesList = $("[data-rules-list]");
  if (rulesList) {
    rulesList.innerHTML = "";
    (localizedEvent.rules || []).forEach((rule) => {
      const item = document.createElement("li");
      item.textContent = rule;
      rulesList.appendChild(item);
    });
  }
}

function initials(name = "TBRK") {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("") || "TB";
}

function localizePlayer(player, index = 0) {
  const number = String(index + 1).padStart(2, "0");
  const name = localize(player.name) || t("participant.fallbackName", { number });
  return {
    ...player,
    name,
    tag: localize(player.tag) || t("participant.fallbackTag"),
    role: localize(player.role) || t("team.defaultRole"),
    squad: localize(player.squad) || t("participant.fallbackSquad"),
    status: localize(player.status) || t("participant.confirmed"),
    image: player.image || ""
  };
}

function renderTeam(players) {
  const grid = $("[data-team-grid]");
  if (!grid) return;
  grid.innerHTML = "";

  players.slice(0, 8).map(localizePlayer).forEach((player) => {
    const card = document.createElement("article");
    card.className = "player-card reveal";

    const image = document.createElement("img");
    image.src = player.image || "assets/images/player-01.jpg";
    image.alt = t("player.portraitAlt", { name: player.name });
    image.loading = "lazy";

    const info = document.createElement("div");
    info.className = "player-info";

    const name = document.createElement("strong");
    name.textContent = player.name;

    const role = document.createElement("span");
    role.textContent = player.role || player.tag || t("team.defaultRole");

    info.append(name, role);
    card.append(image, info);
    grid.appendChild(card);
  });
}

function renderParticipants(players) {
  const list = $("[data-participants-list]");
  if (!list) return;

  const blockedStatusPattern = /refus|annul|cancel|absent|rejected|declined|مرفوض|ملغ|غائب/i;
  const confirmedPlayers = players
    .map(localizePlayer)
    .filter((player) => !blockedStatusPattern.test(player.status || ""));

  setAllText("[data-participant-count]", confirmedPlayers.length);
  setText("[data-participant-count-large]", confirmedPlayers.length);

  if (!confirmedPlayers.length) {
    list.innerHTML = "";
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.textContent = t("participants.empty");
    list.appendChild(empty);
    return;
  }

  list.innerHTML = "";
  confirmedPlayers.forEach((player) => {
    const row = document.createElement("article");
    row.className = "participant-row";

    if (player.image) {
      const avatar = document.createElement("img");
      avatar.src = player.image;
      avatar.alt = t("participant.avatarAlt", { name: player.name });
      avatar.loading = "lazy";
      row.appendChild(avatar);
    } else {
      const avatar = document.createElement("div");
      avatar.className = "participant-avatar";
      avatar.setAttribute("aria-hidden", "true");
      avatar.textContent = initials(player.name);
      row.appendChild(avatar);
    }

    const meta = document.createElement("div");
    meta.className = "participant-meta";
    const name = document.createElement("strong");
    name.textContent = player.name;
    const detail = document.createElement("span");
    detail.textContent = `${player.squad || t("participant.fallbackSquad")} · ${player.tag || player.role || t("participant.fallbackTag")}`;
    meta.append(name, detail);

    const status = document.createElement("span");
    status.className = "status-pill";
    status.textContent = player.status || t("participant.confirmed");

    row.append(meta, status);
    list.appendChild(row);
  });
}

function initDisabledLinks() {
  document.addEventListener("click", (event) => {
    const disabledLink = event.target.closest('a[aria-disabled="true"]');
    if (disabledLink) event.preventDefault();
  });
}

function initNav() {
  const header = $("[data-nav]");
  const toggle = $("[data-nav-toggle]");
  const menu = $("[data-nav-menu]");
  if (!header || !toggle || !menu) return;

  toggle.addEventListener("click", () => {
    const isOpen = header.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
    toggle.setAttribute("aria-label", isOpen ? t("a11y.closeMenu") : t("a11y.openMenu"));
  });

  $$("a", menu).forEach((link) => {
    link.addEventListener("click", () => {
      header.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", t("a11y.openMenu"));
    });
  });
}

function initLanguageSwitcher() {
  $$('[data-lang-option]').forEach((button) => {
    button.addEventListener("click", () => {
      const nextLanguage = validLanguage(button.dataset.langOption);
      setLanguage(nextLanguage);
    });
  });
}

function setLanguage(language) {
  currentLanguage = validLanguage(language);
  try {
    localStorage.setItem(languageStorageKey, currentLanguage);
  } catch (error) {
    console.warn("La préférence de langue n'a pas pu être enregistrée.", error.message);
  }

  applyTranslations();
  renderEvent(currentEvent);
  renderTeam(currentPlayers.length ? currentPlayers : fallbackPlayers);
  renderParticipants(currentPlayers);
  setSocialLinks(currentSocials);
  initReveal();
}

function initReveal() {
  const elements = $$(".reveal");
  if (!("IntersectionObserver" in window)) {
    elements.forEach((element) => element.classList.add("is-visible"));
    return;
  }

  if (!revealObserver) {
    revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
          entry.target.dataset.revealObserved = "false";
        }
      });
    }, { threshold: 0.12 });
  }

  elements.forEach((element) => {
    if (!element.classList.contains("is-visible") && element.dataset.revealObserved !== "true") {
      revealObserver.observe(element);
      element.dataset.revealObserved = "true";
    }
  });
}

async function init() {
  currentLanguage = getInitialLanguage();
  initDisabledLinks();
  initNav();
  initLanguageSwitcher();
  applyTranslations();

  const events = await fetchJson("data/events.json", fallbackEvents);
  currentEvent = events.find((event) => event.active) || events[0] || fallbackEvents[0];
  renderEvent(currentEvent);

  const localPlayers = await fetchJson("data/participants.json", fallbackPlayers);
  const csvText = await fetchCsv(currentEvent.sheetCsvUrl);
  const playersFromCsv = csvText ? parseCsv(csvText) : null;
  currentPlayers = (playersFromCsv && playersFromCsv.length ? playersFromCsv : localPlayers)
    .filter((player) => !player.eventId || player.eventId === currentEvent.id);

  currentSocials = await fetchJson("data/socials.json", fallbackSocials);
  setSocialLinks(currentSocials);

  renderTeam(currentPlayers.length ? currentPlayers : fallbackPlayers);
  renderParticipants(currentPlayers);
  initReveal();
}

document.addEventListener("DOMContentLoaded", init);
