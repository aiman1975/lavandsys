export type Lang = 'en' | 'ar';

export type TranslationKey =
  | 'nav.home'
  | 'nav.solutions'
  | 'nav.work'
  | 'nav.about'
  | 'nav.contact'
  | 'hero.slide1.headline'
  | 'hero.slide1.subtext'
  | 'hero.slide1.cta1'
  | 'hero.slide1.cta2'
  | 'hero.slide2.headline'
  | 'hero.slide2.subtext'
  | 'hero.slide2.cta'
  | 'hero.slide3.headline'
  | 'hero.slide3.subtext'
  | 'hero.slide3.cta'
  | 'hero.slide4.headline'
  | 'hero.slide4.subtext'
  | 'hero.slide4.cta'
  | 'solutions.title'
  | 'solutions.subtitle'
  | 'solutions.ngo.title'
  | 'solutions.ngo.desc'
  | 'solutions.archiving.title'
  | 'solutions.archiving.desc'
  | 'solutions.team.title'
  | 'solutions.team.desc'
  | 'solutions.business.title'
  | 'solutions.business.desc'
  | 'solutions.websites.title'
  | 'solutions.websites.desc'
  | 'solutions.hosting.title'
  | 'solutions.hosting.desc'
  | 'solutions.requestDemo'
  | 'solutions.close'
  | 'portfolio.title'
  | 'portfolio.subtitle'
  | 'portfolio.visitSite'
  | 'portfolio.proj1.title'
  | 'portfolio.proj1.desc'
  | 'portfolio.proj2.title'
  | 'portfolio.proj2.desc'
  | 'portfolio.proj3.title'
  | 'portfolio.proj3.desc'
  | 'portfolio.proj4.title'
  | 'portfolio.proj4.desc'
  | 'portfolio.proj5.title'
  | 'portfolio.proj5.desc'
  | 'portfolio.proj6.title'
  | 'portfolio.proj6.desc'
  | 'capabilities.title'
  | 'capabilities.subtitle'
  | 'capabilities.cap1.title'
  | 'capabilities.cap1.desc'
  | 'capabilities.cap2.title'
  | 'capabilities.cap2.desc'
  | 'capabilities.cap3.title'
  | 'capabilities.cap3.desc'
  | 'about.title'
  | 'about.subtitle'
  | 'about.body'
  | 'team.title'
  | 'team.member1.name'
  | 'team.member1.role'
  | 'team.member1.bio'
  | 'team.member2.name'
  | 'team.member2.role'
  | 'team.member2.bio'
  | 'contact.title'
  | 'contact.subtitle'
  | 'contact.form.name'
  | 'contact.form.email'
  | 'contact.form.phone'
  | 'contact.form.message'
  | 'contact.form.submit'
  | 'contact.form.sending'
  | 'contact.form.success'
  | 'contact.form.error'
  | 'contact.info.title'
  | 'contact.info.email'
  | 'contact.info.phone'
  | 'contact.info.address'
  | 'contact.quickContact'
  | 'footer.about'
  | 'footer.quickLinks'
  | 'footer.services'
  | 'footer.social'
  | 'footer.copyright'
  | 'footer.privacy'
  | 'footer.terms'
  | 'common.getStarted';

const en: Record<TranslationKey, string> = {
  'nav.home': 'Home',
  'nav.solutions': 'Solutions',
  'nav.work': 'Our Work',
  'nav.about': 'About',
  'nav.contact': 'Contact',

  'hero.slide1.headline': 'Custom-Built Systems for NGOs & Businesses',
  'hero.slide1.subtext':
    'From process automation to digital presence — we build what you need.',
  'hero.slide1.cta1': 'Explore Our Solutions',
  'hero.slide1.cta2': 'Contact Us',
  'hero.slide2.headline': 'Integrated Management Systems',
  'hero.slide2.subtext':
    'Streamline procurement, contracts, HR, and oversight with tailor-made solutions.',
  'hero.slide2.cta': 'Learn More',
  'hero.slide3.headline': 'Secure, Smart, Searchable',
  'hero.slide3.subtext':
    'Digitize and organize your documents for easy access and compliance.',
  'hero.slide3.cta': 'Discover Archiving',
  'hero.slide4.headline':
    'Efficiency for Shipping, Maintenance, Warehousing & Bookings',
  'hero.slide4.subtext':
    'Industry-specific software to optimize your operations.',
  'hero.slide4.cta': 'View Business Solutions',

  'solutions.title': 'What We Deliver',
  'solutions.subtitle': 'Tailored digital systems for every sector.',
  'solutions.ngo.title': 'NGO Solutions',
  'solutions.ngo.desc':
    'Procurement, contracts, HR, and oversight systems built for humanitarian organizations.',
  'solutions.archiving.title': 'Archiving Systems',
  'solutions.archiving.desc':
    'Secure document digitization and intelligent retrieval for compliance and access.',
  'solutions.team.title': 'Team & Task Management',
  'solutions.team.desc':
    'Workflow organization and progress tracking that keeps your team aligned.',
  'solutions.business.title': 'Business Systems',
  'solutions.business.desc':
    'Shipping, maintenance, warehouse, and booking software tailored to your industry.',
  'solutions.websites.title': 'Website Creation',
  'solutions.websites.desc':
    'Modern, responsive websites that establish your digital presence with style.',
  'solutions.hosting.title': 'Hosting Services',
  'solutions.hosting.desc':
    'Reliable, secure hosting infrastructure that keeps your systems running.',
  'solutions.requestDemo': 'Request a Demo',
  'solutions.close': 'Close',

  'portfolio.title': 'Our Work',
  'portfolio.subtitle': 'Real systems and platforms we’ve built and deployed.',
  'portfolio.visitSite': 'Visit Live Site',
  'portfolio.proj1.title': 'CVA System',
  'portfolio.proj1.desc':
    'Full-cycle cash & voucher assistance platform for humanitarian distributions — intake, scoring, multi-stage approvals, barcode-based distribution, and financial reconciliation.',
  'portfolio.proj2.title': 'OpsHub',
  'portfolio.proj2.desc':
    'Task and project management platform with visual Kanban boards, ticket tracking, and team progress dashboards, plus an AI assistant for questions about your projects and documents.',
  'portfolio.proj3.title': 'Gardenia (Bayt Souq)',
  'portfolio.proj3.desc':
    'Furniture marketplace for the Syrian market where store owners list products and buyers browse and compare, with full seller privacy protection.',
  'portfolio.proj4.title': 'Takaful Platform',
  'portfolio.proj4.desc':
    'Blockchain-based "Work-for-Goods" prototype for post-conflict Syria — Stellar-powered smart vouchers, a transparent public dashboard, and verified task-based aid distribution.',
  'portfolio.proj5.title': 'Seran',
  'portfolio.proj5.desc':
    'Resort booking platform for the Syrian tourism market, powered by a smart automated pipeline — 100% free to use.',
  'portfolio.proj6.title': 'ChamStores',
  'portfolio.proj6.desc':
    'B2B marketplace connecting suppliers and merchants — find who has what you need and order directly, with invoicing, payments, debt reminders, and mutual ratings.',

  'capabilities.title': 'AI Capabilities We Build In',
  'capabilities.subtitle':
    'Reusable AI building blocks we embed into custom systems — not standalone products, but capabilities we bring to whatever we build for you.',
  'capabilities.cap1.title': 'Syrian DocVault',
  'capabilities.cap1.desc':
    'AI-powered document archiving — automatic text extraction, summarization, and categorization, entity linking, and reminders for key dates.',
  'capabilities.cap2.title': 'Document Intelligence',
  'capabilities.cap2.desc':
    'A desktop app that works fully offline — semantic and keyword search across your documents, duplicate detection, auto-classification, and timeline extraction, with complete data privacy. Like our other products, this can be tailored to run without an internet connection wherever possible, syncing back once a connection is available.',
  'capabilities.cap3.title': 'LAVAND-STT',
  'capabilities.cap3.desc':
    'AI speech-to-text with speaker diarization and automatic summarization, ready to embed into any app that needs meetings or calls turned into transcripts and summaries. Can be tailored to run offline as a desktop app, syncing results automatically once a connection is available.',

  'about.title': 'Your Trusted Technology Partner',
  'about.subtitle':
    'We build digital systems that empower humanitarian, development, and business organizations.',
  'about.body':
    'LAVAND SYSTEMS is a digital solutions provider specializing in custom software for the humanitarian, development, and business sectors. From integrated management systems for NGOs to specialized business applications, we deliver technology that streamlines operations and drives impact. Our team combines technical expertise with deep sector understanding to build solutions that truly fit.',
  'team.title': 'Meet the Team',
  'team.member1.name': 'Murhaf Kallas',
  'team.member1.role': "Bachelor's in Economics & Accounting",
  'team.member1.bio':
    'Extensive experience in project management and administrative organization, with field work across NGOs and non-governmental institutions.',
  'team.member2.name': 'Aiman Tarabichi',
  'team.member2.role': 'Civil Engineer',
  'team.member2.bio':
    'Extensive experience executing projects and digital solutions, turning ideas into real projects with engineering precision and technical innovation.',

  'contact.title': "Let's Start Your Next Project",
  'contact.subtitle': 'Tell us about your needs and we will get back to you within 24 hours.',
  'contact.form.name': 'Your Name',
  'contact.form.email': 'Email Address',
  'contact.form.phone': 'Phone Number',
  'contact.form.message': 'Your Message',
  'contact.form.submit': 'Send Message',
  'contact.form.sending': 'Sending...',
  'contact.form.success': 'Thank you! We will be in touch shortly.',
  'contact.form.error': 'Something went wrong. Please try again or email us directly.',
  'contact.info.title': 'Get in Touch',
  'contact.info.email': 'Email',
  'contact.info.phone': 'Phone',
  'contact.info.address': 'Address',
  'contact.quickContact': 'Quick Contact',

  'footer.about':
    'LAVAND SYSTEMS builds custom digital systems for humanitarian, development, and business organizations.',
  'footer.quickLinks': 'Quick Links',
  'footer.services': 'Services',
  'footer.social': 'Follow Us',
  'footer.copyright': 'All rights reserved.',
  'footer.privacy': 'Privacy Policy',
  'footer.terms': 'Terms of Service',
  'common.getStarted': 'Get Started',
};

const ar: Record<TranslationKey, string> = {
  'nav.home': 'الرئيسية',
  'nav.solutions': 'الحلول',
  'nav.work': 'أعمالنا',
  'nav.about': 'من نحن',
  'nav.contact': 'تواصل معنا',

  'hero.slide1.headline': 'أنظمة مخصصة للمنظمات غير الربحية والشركات',
  'hero.slide1.subtext':
    'من أتمتة العمليات إلى الحضور الرقمي — نبني ما تحتاجه بالضبط.',
  'hero.slide1.cta1': 'استكشف حلولنا',
  'hero.slide1.cta2': 'تواصل معنا',
  'hero.slide2.headline': 'أنظمة إدارة متكاملة',
  'hero.slide2.subtext':
    'سهّل المشتريات والعقود والموارد البشرية والرقابة بحلول مصممة خصيصاً.',
  'hero.slide2.cta': 'اعرف المزيد',
  'hero.slide3.headline': 'آمن، ذكي، وقابل للبحث',
  'hero.slide3.subtext':
    'رقمن ونظّم مستنداتك لسهولة الوصول والامتثال.',
  'hero.slide3.cta': 'اكتشف الأرشفة',
  'hero.slide4.headline': 'كفاءة للشحن والصيانة والمخازن والحجوزات',
  'hero.slide4.subtext':
    'برمجيات متخصصة لكل صناعة لتحسين عملياتك.',
  'hero.slide4.cta': 'عرض حلول الأعمال',

  'solutions.title': 'ما نقدمه',
  'solutions.subtitle': 'أنظمة رقمية مصممة لكل قطاع.',
  'solutions.ngo.title': 'حلول المنظمات غير الربحية',
  'solutions.ngo.desc':
    'أنظمة المشتريات والعقود والموارد البشرية والرقابة للمنظمات الإنسانية.',
  'solutions.archiving.title': 'أنظمة الأرشفة',
  'solutions.archiving.desc':
    'رقمنة المستندات الآمنة واسترجاع ذكي للامتثال وسهولة الوصول.',
  'solutions.team.title': 'إدارة الفريق والمهام',
  'solutions.team.desc':
    'تنظيم سير العمل وتتبع التقدم للحفاظ على اندماج فريقك.',
  'solutions.business.title': 'أنظمة الأعمال',
  'solutions.business.desc':
    'برمجيات الشحن والصيانة والمخازن والحجوزات المصممة لصناعتك.',
  'solutions.websites.title': 'إنشاء المواقع',
  'solutions.websites.desc':
    'مواقع حديثة ومتجاوبة تؤسس حضورك الرقمي بأناقة.',
  'solutions.hosting.title': 'خدمات الاستضافة',
  'solutions.hosting.desc':
    'بنية استضافة موثوقة وآمنة تبقي أنظمتك تعمل دون انقطاع.',
  'solutions.requestDemo': 'اطلب عرضاً توضيحياً',
  'solutions.close': 'إغلاق',

  'portfolio.title': 'أعمالنا',
  'portfolio.subtitle': 'أنظمة ومنصات حقيقية قمنا ببنائها وإطلاقها فعليًا.',
  'portfolio.visitSite': 'زيارة الموقع',
  'portfolio.proj1.title': 'نظام CVA لإدارة المساعدات النقدية والقسائم',
  'portfolio.proj1.desc':
    'منصة متكاملة لإدارة المساعدات النقدية والقسائم للتوزيعات الإنسانية — من الفرز والتقييم إلى الموافقات متعددة المراحل والتوزيع عبر الباركود والتسوية المالية.',
  'portfolio.proj2.title': 'أوبس هَب OpsHub',
  'portfolio.proj2.desc':
    'أداة لإدارة المهام والمشاريع بلوحات Kanban مرئية، مع تتبع للتذاكر وتقدم الفريق، ومساعد ذكاء اصطناعي للإجابة عن أسئلتك حول مشاريعك ومستنداتك.',
  'portfolio.proj3.title': 'غاردينيا (بيت السوق)',
  'portfolio.proj3.desc':
    'منصة أثاث للسوق السوري، يعرض فيها أصحاب المتاجر منتجاتهم ويتصفح المشترون ويقارنون بينها، مع حماية كاملة لخصوصية البائع.',
  'portfolio.proj4.title': 'منصة تكافل',
  'portfolio.proj4.desc':
    'نموذج أولي قائم على تقنية البلوكشين لبرنامج "عمل مقابل سلع" لسوريا ما بعد النزاع — قسائم ذكية عبر شبكة Stellar، ولوحة شفافية عامة، وتوزيع مساعدات قائم على إنجاز المهام والتحقق منها.',
  'portfolio.proj5.title': 'سيران',
  'portfolio.proj5.desc':
    'منصة حجز منتجعات للسوق السياحي السوري، مدعومة بخط أتمتة ذكي، ومجانية الاستخدام بالكامل.',
  'portfolio.proj6.title': 'شام ستورز (ChamStores)',
  'portfolio.proj6.desc':
    'منصة تجارية بين الموردين والتجار — يجد التاجر المورد المناسب ويطلب البضاعة مباشرة، مع فوترة ومدفوعات وتذكيرات ديون وتقييمات متبادلة.',

  'capabilities.title': 'قدرات ذكاء اصطناعي ندمجها في أنظمتنا',
  'capabilities.subtitle':
    'لبنات ذكاء اصطناعي جاهزة لإعادة الاستخدام ندمجها ضمن أي نظام مخصص نبنيه لك — ليست منتجات مستقلة، بل قدرات نجلبها لكل ما نطوّره لك.',
  'capabilities.cap1.title': 'الأرشفة الذكية للمستندات (Syrian DocVault)',
  'capabilities.cap1.desc':
    'نظام أرشفة مستندات مدعوم بالذكاء الاصطناعي — استخراج تلقائي للنص والملخص والتصنيف، ربط بالجهات ذات الصلة، وتنبيهات بالمواعيد المهمة.',
  'capabilities.cap2.title': 'ذكاء المستندات (بحث محلي)',
  'capabilities.cap2.desc':
    'تطبيق مكتبي يعمل بالكامل دون اتصال بالإنترنت — بحث دلالي وبالكلمات المفتاحية داخل مستنداتك، كشف التكرار، تصنيف تلقائي، وتحليل زمني للمحتوى، مع خصوصية تامة لبياناتك. مثل باقي منتجاتنا، يمكن تكييف هذا التطبيق ليعمل دون إنترنت قدر الإمكان، ومزامنة النتائج تلقائياً عند توفر الاتصال.',
  'capabilities.cap3.title': 'LAVAND-STT',
  'capabilities.cap3.desc':
    'تفريغ صوتي ذكي مع تمييز المتحدثين وتلخيص تلقائي بالذكاء الاصطناعي، قدرة جاهزة للدمج داخل أي تطبيق يحتاج تحويل الاجتماعات أو المكالمات إلى نصوص وملخصات. يمكن تكييفه ليعمل كتطبيق مكتبي دون اتصال بالإنترنت، مع مزامنة النتائج تلقائياً عند توفر الاتصال.',

  'about.title': 'شريكك التقني الموثوق',
  'about.subtitle':
    'نبني أنظمة رقمية تمكّن المنظمات الإنسانية والتنموية والأعمال.',
  'about.body':
    'LAVAND SYSTEMS مزوّد حلول رقمية متخصص في البرمجيات المخصصة للقطاعات الإنسانية والتنموية والأعمال. من أنظمة الإدارة المتكاملة للمنظمات غير الربحية إلى التطبيقات التجارية المتخصصة، نقدم تقنية تبسّط العمليات وتحقق الأثر. يجمع فريقنا بين الخبرة التقنية والفهم العميق للقطاع لبناء حلول تناسبك فعلاً.',
  'team.title': 'تعرف على الفريق',
  'team.member1.name': 'مرهف كلاس',
  'team.member1.role': 'بكالوريوس اقتصاد ومحاسبة',
  'team.member1.bio':
    'خبرة طويلة في إدارة المشاريع والتنظيم الإداري، وعمل ميداني مع منظمات ومؤسسات غير حكومية (NGOs).',
  'team.member2.name': 'أيمن طرابيشي',
  'team.member2.role': 'مهندس مدني',
  'team.member2.bio':
    'خبرة طويلة في تنفيذ المشاريع والحلول الرقمية، وتحويل الأفكار إلى مشاريع واقعية بدقة هندسية وابتكار تقني.',

  'contact.title': 'لنبدأ مشروعك القادم',
  'contact.subtitle': 'أخبرنا عن احتياجاتك وسنعاود الاتصال خلال 24 ساعة.',
  'contact.form.name': 'اسمك',
  'contact.form.email': 'البريد الإلكتروني',
  'contact.form.phone': 'رقم الهاتف',
  'contact.form.message': 'رسالتك',
  'contact.form.submit': 'إرسال الرسالة',
  'contact.form.sending': 'جاري الإرسال...',
  'contact.form.success': 'شكراً لك! سنتواصل معك قريباً.',
  'contact.form.error': 'حدث خطأ ما. يرجى المحاولة مرة أخرى أو مراسلتنا مباشرة.',
  'contact.info.title': 'تواصل معنا',
  'contact.info.email': 'البريد الإلكتروني',
  'contact.info.phone': 'الهاتف',
  'contact.info.address': 'العنوان',
  'contact.quickContact': 'تواصل سريع',

  'footer.about':
    'LAVAND SYSTEMS تبني أنظمة رقمية مخصصة للمنظمات الإنسانية والتنموية والأعمال.',
  'footer.quickLinks': 'روابط سريعة',
  'footer.services': 'الخدمات',
  'footer.social': 'تابعنا',
  'footer.copyright': 'جميع الحقوق محفوظة.',
  'footer.privacy': 'سياسة الخصوصية',
  'footer.terms': 'شروط الخدمة',
  'common.getStarted': 'ابدأ الآن',
};

export const translations: Record<Lang, Record<TranslationKey, string>> = {
  en,
  ar,
};
