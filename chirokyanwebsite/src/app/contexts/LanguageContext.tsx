import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";

type Language = "en" | "ku" | "ar";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<
  LanguageContextType | undefined
>(undefined);

const translations = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.videos": "Videos",
    "nav.about": "About",
    "nav.social": "Social Media",
    "nav.contact": "Contact",
    "nav.language": "Language",
    "nav.language.english": "English",
    "nav.language.kurdish": "کوردی",
    "nav.language.arabic": "العربية",

    // Hero Section
    "hero.title": "چیرۆکیان",
    "hero.subtitle": "Real Stories, Real Voices",
    "hero.description":
      "Join us on a journey through authentic conversations and compelling narratives",
    "hero.watchLatest": "Watch Latest Episode",
    "hero.exploreMore": "Explore More",

    // About Section
    "about.title": "About چیرۆکیان",
    "about.description":
      "Real people sharing authentic stories. Every voice matters, every story deserves to be heard.",
    "about.stat1.number": "50M+",
    "about.stat1.label": "Total Views",
    "about.stat2.number": "20+",
    "about.stat2.label": "Episodes",
    "about.stat3.number": "50K+",
    "about.stat3.label": "Followers",
    "about.founder.title": "Meet the Founder",
    "about.founder.name": "Doctor Hazhar Salam",
    "about.founder.role": "Founder & Host",
    "about.founder.bio":
      "A passionate listener dedicated to sharing authentic voices and meaningful conversations.",

    // Videos Section
    "videos.title": "Latest Episodes",
    "videos.description":
      "Watch our most recent conversations and discover compelling stories",
    "videos.viewAll": "View All Episodes on YouTube",
    "videos.watchAll": "Watch All Episodes",
    "videos.episode1.title":
      "Haji Karwan Tells His Life Story",
    "videos.episode1.description":
      "Haji Karwan Tells His Life Story",
    "videos.episode2.title":
      "M. Fatih Sharastani Tells His Life Story",
    "videos.episode2.description":
      "M. Fatih Sharastani Tells His Life Story",
    "videos.episode3.title":
      "Dr. Jafar Shekhelislami Mokri Tells His Life Story",
    "videos.episode3.description":
      "Dr. Jafar Shekhelislami Mokri Tells His Life Story",

    // Popular Episodes Section
    "popular.badge": "Most Popular",
    "popular.title": "Most Watched Episodes",
    "popular.description":
      "Our most popular conversations that thousands have enjoyed",
    "popular.episode1.title": "Most Watched Episode #1",
    "popular.episode1.description":
      "Irfani Wasta Muhammad [Hama Dambal] Tells His Life Story",
    "popular.episode2.title": "Most Watched Episode #2",
    "popular.episode2.description":
      "Dr. Farhad Pirbal Tells His Life Story",
    "popular.episode3.title": "Most Watched Episode #3",
    "popular.episode3.description":
      "M. Ahmad Shafei Tells His Life Story",
    "popular.views": "views",

    // Social Media Section
    "social.title": "Connect With Us",
    "social.description":
      "Follow us on social media for updates, behind-the-scenes content, and more",
    "social.youtube": "YouTube",
    "social.instagram": "Instagram",
    "social.facebook": "Facebook",
    "social.tiktok": "TikTok",
    "social.youtube.handle": "@chirokyan",
    "social.instagram.handle": "@chirokiyan",
    "social.facebook.handle": "chirokyan",
    "social.tiktok.handle": "@chirokyann",
    "social.youtube.followers": "140K+ Subscribers",
    "social.instagram.followers": "50K+ Followers",
    "social.facebook.followers": "Connections",
    "social.tiktok.followers": "50K+ Followers",

    // Contact Section
    "contact.title": "Get In Touch",
    "contact.description":
      "Have a story to share or interested in sponsorship opportunities? We'd love to hear from you.",
    "contact.email.label": "Email Us",
    "contact.email.value": "hazharsalam62@gmail.com",
    "contact.phone.label": "Call Us",
    "contact.sponsorship.label": "For Sponsorship Inquiries",
    "contact.sponsorship.value": "hazharsalam62@gmail.com",
    "contact.general.label": "General Questions",
    "contact.general.value": "hazharsalam62@gmail.com",

    // Footer
    "footer.rights": "© 2026 چیرۆکیان. All rights reserved.",
    "footer.madeBy": "made by dolamari",
    "footer.tagline":
      "Every story matters. Every voice counts.",
  },
  ku: {
    // Navigation
    "nav.home": "خانە",
    "nav.videos": "ڤیدیۆکان",
    "nav.about": "دەربارە",
    "nav.social": "سۆشیال میدیا",
    "nav.contact": "پەیوەندی",
    "nav.language": "زمان",
    "nav.language.english": "ئینگلیزی",
    "nav.language.kurdish": "کوردی",
    "nav.language.arabic": "عەرەبی",

    // Hero Section
    "hero.title": "چیرۆکیان",
    "hero.subtitle": "چیرۆکی ڕاستەقینە، دەنگی ڕاستەقینە",
    "hero.description":
      "پێکەوە بەشداری گفتوگۆی ڕاستەقینە و چیرۆکە سەرجڕاکێشەکان بکە",
    "hero.watchLatest": "سەیری دوایین بەش بکە",
    "hero.exploreMore": "زیاتر بگەڕێ",

    // About Section
    "about.title": "دەربارەی چیرۆکیان",
    "about.description":
      "خەڵک چیرۆکە ڕاستەقینەکانیان دەگێڕنەوە. هەموو دەنگێک گرنگە و هەموو چیرۆکێک شایانی گوێگرتنە.",
    "about.stat1.number": "50M+",
    "about.stat1.label": "کۆی بینەران",
    "about.stat2.number": "20+",
    "about.stat2.label": "بەشەکان",
    "about.stat3.number": "50K+",
    "about.stat3.label": "فۆڵۆوەران",
    "about.founder.title": "دامەزرێنەر",
    "about.founder.name": "دکتۆر هەژار سەلام",
    "about.founder.role": "دامەزرێنەر و پێشکەشکار",
    "about.founder.bio":
      "گوێگرێکی چالاکە کە بە هێمنی گوێ لە چیرۆکی میوانەکان دەگرێت. خۆی تەرخان کردووە بۆ هاوبەشیکردنی دەنگە کاریگەر و ڕاستەقینە کوردییەکان و گفتوگۆی پڕ بەها.",

    // Videos Section
    "videos.title": "دوایین بەشەکان",
    "videos.description":
      "سەیری دوایین گفتوگۆکانمان بکە و چیرۆکە سەرنجڕاکشەکان بدۆزەرەوە",
    "videos.viewAll": "هەموو بەشەکان لە یوتیوب ببینە",
    "videos.watchAll": "هەموو بەشەکان ببینە",
    "videos.episode1.title":
      "حاجی کاروان چیرۆکی ژیانی خۆی دەگێڕێتەوە",
    "videos.episode1.description":
      "حاجی کاروان چیرۆکی ژیانی خۆی دەگێڕێتەوە",
    "videos.episode2.title":
      "م فاتیح شارستێنی چیرۆکی ژیانی خۆی دەگێڕێتەوە",
    "videos.episode2.description":
      "م فاتیح شارستێنی چیرۆکی ژیانی خۆی دەگێڕێتەوە",
    "videos.episode3.title":
      "دکتۆر جافار شەخەلیسلامی مۆکری چیرۆکی ژیانی خۆی دەگێڕێتەوە",
    "videos.episode3.description":
      "دکتۆر جافار شەخەلیسلامی مۆکری چیرۆکی ژیانی خۆی دەگێڕێتەوە",

    // Popular Episodes Section
    "popular.badge": "پێکەوەکەرەتەرین",
    "popular.title": "زۆرترین بینراو",
    "popular.description":
      "دەربارەی گفتوگۆیەکانمان پێکەوەکەرەتەرین کە هەزارە چند کەس دەستەڵێتەوە",
    "popular.episode1.title": "زۆرترین بینراو #1",
    "popular.episode1.description":
      "عیرفانی وەستا محمد [حەمە دەمبڵ] چیرۆکی ژیانی خۆی دەگێڕێتەوە",
    "popular.episode2.title": "زۆرترین بینراو #2",
    "popular.episode2.description":
      "د.فەرهاد پیربەڵ چیرۆکی ژیانی خۆی دەگێڕێتەوە",
    "popular.episode3.title": "زۆرترین بینراو #3",
    "popular.episode3.description":
      "م.ئەحمەد شافعی چیرۆکی ژیانی خۆی دەگێڕێتەوە",
    "popular.views": "بینەران",

    // Social Media Section
    "social.title": "پەیوەندیمان پێوە بکە",
    "social.description":
      "لە سۆشیال میدیادا فۆڵۆومان بکە بۆ نوێکاری ناوەڕۆکی پشت ڕوداو و زیاتر",
    "social.youtube": "یوتیوب",
    "social.instagram": "ئینستاگرام",
    "social.facebook": "فەیسبووک",
    "social.tiktok": "تیکتۆک",
    "social.youtube.handle": "@chirokyan",
    "social.instagram.handle": "@chirokiyan",
    "social.facebook.handle": "chirokyan",
    "social.tiktok.handle": "@chirokyann",
    "social.youtube.followers": "140K+ سەبسکرایبس",
    "social.instagram.followers": "50K+ فۆڵۆوەر",
    "social.facebook.followers": "پەیوەندی",
    "social.tiktok.followers": "50K+ فۆڵۆوەر",

    // Contact Section
    "contact.title": "پەیوەندیمان پێوە بکە",
    "contact.description":
      "چیرۆکێکت هەیە بۆ هاوبەشکردن یان حەزت لە سپۆنسەرکردن هەیە؟ خۆشحاڵ دەبین لە بیستنی دەنگت.",
    "contact.email.label": "ئیمەڵمان بۆ بنێرە",
    "contact.email.value": "hazharsalam62@gmail.com",
    "contact.phone.label": "پەیوەندی بە تێلەفۆن",
    "contact.sponsorship.label": "بۆ پرسیاری سپۆنسەرکردن",
    "contact.sponsorship.value": "hazharsalam62@gmail.com",
    "contact.general.label": "پرسیارە گشتییەکان",
    "contact.general.value": "hazharsalam62@gmail.com",

    // Footer
    "footer.rights": "© 2026 چیرۆکیان. هەموو مافێک پارێزراوە.",
    "footer.madeBy": "made by dolamari",
    "footer.tagline":
      "هەموو چیرۆکێک گرنگە. هەموو دەنگێک دەژمێردرێت.",
  },
  ar: {
    // Navigation
    "nav.home": "الرئيسية",
    "nav.videos": "الفيديوهات",
    "nav.about": "عن البودكاست",
    "nav.social": "وسائل التواصل",
    "nav.contact": "تواصل معنا",
    "nav.language": "اللغة",
    "nav.language.english": "English",
    "nav.language.kurdish": "کوردی",
    "nav.language.arabic": "العربية",

    // Hero Section
    "hero.title": "چیرۆکیان",
    "hero.subtitle": "قصص حقيقية، أصوات حقيقية",
    "hero.description":
      "انضم إلينا في رحلة عبر محادثات أصيلة وروايات مقنعة",
    "hero.watchLatest": "شهد أحدث حلقة",
    "hero.exploreMore": "استكشف اكثر",

    // About Section
    "about.title": "عن چیرۆکیان",
    "about.description":
      "أشخاص حقيقيون يشاركون في قصصهم الحقيقية. كل صوت مهم، كل قصة تستحق أن تُسمع.",
    "about.stat1.number": "50M+",
    "about.stat1.label": "إجمالي المشاهدات",
    "about.stat2.number": "20+",
    "about.stat2.label": "الحلقات",
    "about.stat3.number": "50K+",
    "about.stat3.label": "المتابعين",
    "about.founder.title": "تعرف على المؤسس",
    "about.founder.name": "دکتور هەزار سلام",
    "about.founder.role": "المؤسس والمقدم",
    "about.founder.bio":
      "مستمع شغوف مكرس لمشاركة الأصوات الأصيلة والمحادثات الهادفة.",

    // Videos Section
    "videos.title": "أحدث الحلقات",
    "videos.description":
      "شاهد أحدث محادثاتنا واكتشف قصصاً مقنعة",
    "videos.viewAll": "شاهد جميع الحلقات على يوتيوب",
    "videos.watchAll": "شاهد جميع الحلقات",
    "videos.episode1.title":
      "حاجي كاروان يروي قصة حياته",
    "videos.episode1.description":
      "حاجي كاروان يروي قصة حياته",
    "videos.episode2.title":
      "م. فاتيح شاراستاني يروي قصة حياته",
    "videos.episode2.description":
      "م. فاتيح شاراستاني يروي قصة حياته",
    "videos.episode3.title":
      "دكتور جافار شخيليسامي موكري يروي قصة حياته",
    "videos.episode3.description":
      "دكتور جافار شخيليسامي موكري يروي قصة حياته",

    // Popular Episodes Section
    "popular.badge": "الأكثر شعبية",
    "popular.title": "الحلقات الأكثر مشاهدة",
    "popular.description":
      "أكثر محادثاتنا شعبية التي شاهدها آلاف الأشخاص",
    "popular.episode1.title": "الحلقة الأكثر مشاهدة #1",
    "popular.episode1.description":
      "عرفاني وستا محمد [حمه دمبل] يروي قصة حياته",
    "popular.episode2.title": "الحلقة الأكثر مشاهدة #2",
    "popular.episode2.description":
      "د. فرهاد بيربال يروي قصة حياته",
    "popular.episode3.title": "الحلقة الأكثر مشاهدة #3",
    "popular.episode3.description":
      "م. أحمد شافعي يروي قصة حياته",
    "popular.views": "مشاهدات",

    // Social Media Section
    "social.title": "تواصل معنا",
    "social.description":
      "تابعنا على وسائل التواصل الاجتماعي للحصول على التحديثات والمحتوى من وراء الكواليس والمزيد",
    "social.youtube": "يوتيوب",
    "social.instagram": "إنستغرام",
    "social.facebook": "فيسبوك",
    "social.tiktok": "تيك توك",
    "social.youtube.handle": "@chirokyan",
    "social.instagram.handle": "@chirokiyan",
    "social.facebook.handle": "chirokyan",
    "social.tiktok.handle": "@chirokyann",
    "social.youtube.followers": "140K+ Subscribers",
    "social.instagram.followers": "50K+ متابعين",
    "social.facebook.followers": "تواصل",
    "social.tiktok.followers": "50K+ متابعين",

    // Contact Section
    "contact.title": "تواصل معنا",
    "contact.description":
      "هل لديك قصة لمشاركتها أو مهتم بفرص الرعاية؟ نود أن نسمع منك.",
    "contact.email.label": "راسلنا عبر البريد الإلكتروني",
    "contact.email.value": "hazharsalam62@gmail.com",
    "contact.phone.label": "اتصل بنا",
    "contact.sponsorship.label": "لاستفسارات الرعاية",
    "contact.sponsorship.value": "hazharsalam62@gmail.com",
    "contact.general.label": "الأسئلة العامة",
    "contact.general.value": "hazharsalam62@gmail.com",

    // Footer
    "footer.rights": "© 2026 چیرۆکیان. جميع الحقوق محفوظة.",
    "footer.madeBy": "made by dolamari",
    "footer.tagline": "كل قصة مهمة. كل صوت ُحسُّن.",
  },
};

export function LanguageProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [language, setLanguage] = useState<Language>("ku");

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage, t }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error(
      "useLanguage must be used within a LanguageProvider",
    );
  }
  return context;
}
