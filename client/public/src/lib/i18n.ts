import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      "nav": {
        "home": "Home",
        "about": "About Us",
        "who_we_are": "Who We Are",
        "vision": "Company Vision",
        "mission": "Company Mission",
        "founder": "Founder",
        "services": "Services",
        "commercial": "Commercial",
        "residential": "Residential",
        "planning": "Project Planning & Design",
        "estimation": "Project Estimation",
        "plans": "Plans",
        "partners": "Partners",
        "reviews": "Reviews",
        "contact": "Contact",
        "expertise": "Our Expertise"
      },
      "hero": {
        "title": "Building Your Future Today",
        "title_main": "Building Your",
        "title_accent": "Future Today",
        "subtitle": "Leading Construction Excellence",
        "description": "We transform visions into reality with precision engineering, sustainable practices, and unwavering dedication to quality.",
        "get_started": "Get Started",
        "learn_more": "Learn More"
      },
      "expertise": {
        "title": "Our Expertise",
        "subtitle": "Comprehensive construction solutions tailored to your specific needs.",
        "commercial_title": "Commercial",
        "commercial_desc": "Office towers, retail centers, and industrial facilities built for success.",
        "residential_title": "Residential",
        "residential_desc": "Luxury apartments and custom homes designed for modern living.",
        "planning_title": "Project Planning & Design",
        "planning_desc": "Comprehensive planning and design solutions to bring your vision to life.",
        "planning_page": {
          "title": "Project Planning & Design",
          "subtitle": "A masterfully planned project is the foundation of excellence. Our process covers every detail from concept to coordination.",
          "sections": {
            "concept": {
              "title": "Project Concept",
              "bullets": [
                "Defining core identity and unique vision",
                "Establishing goals and functional requirements",
                "Initial feasibility study and brainstorming"
              ]
            },
            "site": {
              "title": "Site Analysis",
              "bullets": [
                "Study the nature of the land to ensure stability.",
                "Review standards and regulations to protect the project.",
                "Understand the site surroundings to provide smart design solutions."
              ]
            },
            "architectural": {
              "title": "Architectural Planning",
              "bullets": [
                "Smart floor plans and space optimization",
                "Iconic facades blending aesthetics with function",
                "Immersive 3D walkthroughs for visualization"
              ]
            },
            "structural": {
              "title": "Structural Planning",
              "bullets": [
                "Robust load-bearing systems and foundations",
                "Premium and sustainable material selection",
                "Seamless integration of MEP systems"
              ]
            },
            "budget": {
              "title": "Budget & Timeline",
              "bullets": [
                "A precise budget reflecting every item of the project.",
                "Milestone-based delivery schedules",
                "Risk mitigation and contingency planning"
              ]
            },
            "coordination": {
              "title": "Pre-Construction Coordination",
              "bullets": [
                "Securing government permits and approvals",
                "Multi-disciplinary engineering coordination",
                "Finalizing procurement and material logistics"
              ]
            }
          }
        },
        "estimation_title": "Project Estimation",
        "estimation_desc": "Accurate forecasting and detailed scheduling to keep your project on track.",
        "estimation_page": {
          "title": "Project Estimation",
          "subtitle": "Precision in estimation is the key to a successful project. We provide accurate forecasts for costs, time, and resources.",
          "sections": {
            "cost": {
              "title": "Cost Estimation",
              "sentences": [
                "We provide detailed  cost analysis for every phase of your project.",
                "Our team uses market-real prices to ensure your budget is both accurate and realistic.",
                "You receive a comprehensive breakdown that helps in making informed financial decisions."
              ]
            },
            "timeline": {
              "title": "Project Timeline",
              "sentences": [
                "Every project is scheduled with precision to meet your delivery expectations.",
                "We establish clear milestones that allow for real-time tracking of construction progress.",
                "Our strategic planning ensures that all phases are completed on time without compromising quality."
              ]
            },
            "resource": {
              "title": "Resource Planning",
              "sentences": [
                "We efficiently allocate skilled labor and high-quality materials to maximize productivity.",
                "Our supply chain management guarantees that resources are available exactly when needed.",
                "Proper resource balancing prevents bottlenecks and ensures a seamless construction workflow."
              ]
            },
            "risk": {
              "title": "Risk Analysis",
              "sentences": [
                "We proactively identify potential challenges to ensure the safety and continuity of work.",
                "Our mitigation strategies are designed to manage environmental, financial, and technical risks.",
                "Continuous monitoring throughout the project lifecycle ensures that every obstacle is resolved swiftly."
              ]
            }
          }
        },
        "features": {
          "transparent_costs": "Transparent Costs",
          "direct_material": "Direct Material Billing",
          "fixed_fee": "Fixed Fee Structure",
          "max_flexibility": "Maximum Flexibility",
          "real_time": "Real-time Adjustments",
          "all_inclusive": "All-inclusive",
          "guaranteed_timeline": "Guaranteed Timeline",
          "turnkey": "Turnkey Solution"
        },
        "view_all": "View All Details",
        "learn_more": "Learn More"
      },
      "about": {
        "title": "Who We Are",
        "subtitle": "Building a legacy of trust and excellence since 2022",
        "heading": "Excellence in Every Detail",
        "company_name": "Tower Top General Contracting & Supplies",
        "registration": "Commercial Registration No.: 714-199-752",
        "established": "Established in 2022",
        "p1": "Tower Top operates in all general contracting and finishing works for residential and commercial projects within the Arab Republic of Egypt. The company has executed a wide range of projects, including villas, apartments, retail shops, malls, and office headquarters.",
        "p2": "Tower Top's working approach relies on adherence to quality standards, precise executive supervision, and clear execution stages, while ensuring integrated finishing solutions that consider technical details and achieve the highest level of reliability and sustainability.",
        "p3": "The company also considers after-sales service a core responsibility, believing that true quality starts with customer trust and continues thereafter.",
        "check1": "Licensed & Insured",
        "check2": "Expert Engineers",
        "check3": "On-time Delivery",
        "check4": "Quality Guaranteed"
      },
      "vision": {
        "title": "Our Vision",
        "subtitle": "Shaping the skyline of tomorrow",
        "p1": "To make Tower Top General Contracting & Supplies a professional entity capable of delivering contracting and finishing services with clear and practical execution standards inside and outside the Arab Republic of Egypt, while expanding thoughtfully into selected regional markets, maintaining the same level of quality, discipline, and precise supervision that the company has upheld since its establishment.",
        "item1_title": "Innovation",
        "item1_desc": "Adopting the latest technologies and methodologies to streamline construction.",
        "item2_title": "Quality",
        "item2_desc": "Setting the gold standard for durability and aesthetics in every project.",
        "item3_title": "Integrity",
        "item3_desc": "Building relationships based on transparency, honesty, and mutual respect."
      },
      "mission": {
        "title": "Our Mission",
        "subtitle": "Driven by purpose, defined by results",
        "p1": "Providing integrated contracting and finishing services for residential and commercial projects in Egypt, with commitment to quality standards, precise supervision, clear execution stages, and delivering comprehensive finishing solutions that consider technical details, while building long-term relationships with clients based on transparency, commitment, and responsibility at every stage of the work.",
        "card1_title": "Planning",
        "card1_desc": "Develop clear project plans and allocate resources efficiently.",
        "card2_title": "Execution",
        "card2_desc": "Ensure high quality finishes and supervise every stage carefully.",
        "card3_title": "Relationship",
        "card3_desc": "Maintain transparency with clients and provide ongoing support after delivery."
      },
      "founder": {
        "title": "Leadership",
        "subtitle": "Meet the visionary behind Tower Top",
        "name": "Ahmed Ramzy Abd-El Ghani Waar",
        "role": "Founder & CEO of Tower Top General Contracting & Supplies",
        "quote": "High-quality finishing is not achieved by quick solutions but by making informed decisions before execution, maintained through responsible supervision until delivery.",
        "bio1": "Ahmed Ramzy began his career working in executive supervision at contracting company sites, gaining over 7 years of hands-on experience in monitoring and executing various finishing works and dealing directly with site execution challenges and quality control.",
        "bio2": "During this professional journey, Ahmed Ramzy also partnered in Al-Kayan General Contracting Company for two years, a stage that deepened his managerial and organizational experience, linking the executive aspect with a broader project management vision.",
        "bio3": "Building on these accumulated experiences, he founded Tower Top General Contracting & Supplies in 2022, driven by a firm belief that: High-quality finishing is not achieved by quick solutions but by making informed decisions before execution, maintained through responsible supervision until delivery.",
        "bio4": "From this perspective, Ahmed Ramzy leads the company following a methodology based on careful planning, transparency with the client, and organized execution, aiming to deliver sustainable, high-quality work and build long-term professional relationships."
      },
      "services": {
        "commercial_title": "Commercial Construction",
        "commercial_subtitle": "Building the future of business",
        "commercial_desc": "We deliver state-of-the-art commercial spaces that enhance productivity and impress clients. From office towers to retail centers, we handle complex projects with precision.",
        "residential_title": "Residential Development",
        "residential_subtitle": "Creating homes, not just houses",
        "residential_desc": "Our residential projects blend aesthetic beauty with functional design. We create living spaces that offer comfort, luxury, and lasting value for generations.",
        "view_project": "View Project",
        "project_management": "Project Management",
        "interior_design": "Interior Design",
        "renovations": "Renovations",
        "consultation": "Consultation",
        "project": "Project",
        "full_view": "Full View",
        "close": "Close"
      },
      "plans": {
        "title": "Plans & Pricing",
        "subtitle": "Transparent models tailored to your needs",
        "most_popular": "Most Popular",
        "get_started": "Get Started",
        "fixed_title": "Fixed Percentage",
        "fixed_desc": "Ideal for clients who want transparency and direct involvement.",
        "cost_plus_title": "Cost Plus",
        "cost_plus_desc": "Perfect for complex projects where scope may evolve.",
        "package_title": "Package Plan",
        "package_desc": "A turnkey solution for complete peace of mind.",
        "estimation_title": "Detailed Estimation",
        "estimation_desc": "Start right with accurate forecasting.",
        "features": {
          "fixed": {
            "f1": "Direct billing to suppliers",
            "f2": "Fixed management fee %",
            "f3": "Client approves all purchases",
            "f4": "Weekly progress reports",
            "f5": "Freedom of the client in the payment with the retention of the amount agreed upon"
          },
          "cost_plus": {
            "f1": "Maximum flexibility",
            "f2": "Real-time scope adjustments",
            "f3": "Complete cost visibility",
            "f4": "Agile timeline management",
            "f5": "Ideal for renovations"
          },
          "package": {
            "f1": "Guaranteed fixed price",
            "f2": "Guaranteed timeline",
            "f3": "All-inclusive materials",
            "f4": "No hidden costs",
            "f5": "Full project warranty"
          },
          "estimation": {
            "f1": "Quantity take-offs",
            "f2": "Market price analysis",
            "f3": "Labor cost projections",
            "f4": "Timeline scheduling",
            "f5": "Risk assessment"
          },
          "transparent_costs": "The customer's freedom to exchange",
          "direct_material": "Direct billing to suppliers",
          "fixed_fee": "Fixed management fee %",
          "max_flexibility": "Maximum flexibility",
          "real_time": "Real-time scope adjustments",
          "complete_control": "Complete cost visibility",
          "all_inclusive": "All-inclusive materials",
          "guaranteed_timeline": "Guaranteed timeline",
          "turnkey": "Turnkey solutions"
        },
        "view_all": "View All Details",
        "learn_more": "Learn More"
      },
      "reviews": {
        "title": "Client Reviews",
        "subtitle": "What our clients say about us",
        "loading": "Loading reviews..."
      },
      "contact": {
        "title": "Contact Us",
        "subtitle": "Let's start your project today",
        "get_in_touch": "Get in Touch",
        "description": "Whether you have a question about our services, pricing, or want to discuss a new project, our team is ready to answer all your questions.",
        "phone": "Phone",
        "email": "Email",
        "office": "Office",
        "location": "Our Location",
        "send_message": "Send us a Message",
        "full_name": "Full Name",
        "subject": "Subject",
        "message": "Message",
        "sending": "Sending...",
        "send": "Send Message",
        "address_value": "55 Mariouteya Haram St, Giza, Egypt",
        "phone_value": "01555999908",
        "email_value": "Towertop52@gmail.com"
      },
      "cta": {
        "title": "Ready to Build Your Vision?",
        "description": "Contact us today for a free consultation and let's discuss how we can bring your project to life.",
        "button": "Contact Us Now"
      },
      "footer": {
        "company_name": "Tower Top Construction",
        "description": "Building the future with excellence, integrity, and innovation. Your trusted partner in construction and development.",
        "quick_links": "Quick Links",
        "services": "Services",
        "contact_info": "Contact Info",
        "rights": "All rights reserved.",
        "privacy": "Privacy Policy",
        "terms": "Terms of Service",
        "brand_tagline": "CONSTRUCTION"
      },
      "partners": {
        "title": "Success Partners",
        "subtitle": "Collaborating with the best to deliver the best",
        "cta_title": "Become a Partner",
        "cta_description": "We are always looking for high-quality suppliers and subcontractors to join our network.",
        "cta_button": "Join Our Network"
      }
    }
  },
  ar: {
    translation: {
      "nav": {
        "home": "الرئيسية",
        "about": "من نحن",
        "who_we_are": "من نحن",
        "vision": "رؤية الشركة",
        "mission": "رسالة الشركة",
        "founder": "المؤسس",
        "services": "الخدمات",
        "commercial": "تجاري",
        "residential": "سكني",
        "planning": "تخطيط وتصميم المشاريع",
        "estimation": "تقدير المشاريع",
        "plans": "الخطط",
        "partners": "الشركاء",
        "reviews": "الآراء",
        "contact": "اتصل بنا",
        "expertise": "خبراتنا"
      },
      "hero": {
        "title": "نبني مستقبلك اليوم",
        "title_main": "نبني مستقبلك",
        "title_accent": "اليوم",
        "subtitle": "الريادة في التميز الإنشائي",
        "description": "نحول الرؤى إلى واقع من خلال الهندسة الدقيقة والممارسات المستدامة والتفاني المطلق في الجودة.",
        "get_started": "ابدأ الآن",
        "learn_more": "تعرف علينا"
      },
      "expertise": {
        "title": "خبراتنا",
        "subtitle": "حلول بناء شاملة مصممة خصيصًا لاحتياجاتك.",
        "commercial_title": "تجاري",
        "commercial_desc": "أبراج مكتبية، مراكز تجارية، ومرافق صناعية مبنية للنجاح.",
        "residential_title": "سكني",
        "residential_desc": "شقق فاخرة ومنازل مخصصة مصممة للحياة العصرية.",
        "planning_title": "تخطيط وتصميم المشاريع",
        "planning_desc": "حلول تخطيط وتصميم شاملة لإحياء رؤيتك على أرض الواقع.",
        "planning_page": {
          "title": "تخطيط وتصميم المشاريع",
          "subtitle": "المشروع المخطط ببراعة هو أساس التميز. تغطي عمليتنا كل التفاصيل من الفكرة إلى التنسيق.",
          "sections": {
            "concept": {
              "title": "فكرة المشروع",
              "bullets": [
                "تحديد الهوية الأساسية والرؤية الفريدة",
                "تحديد الأهداف والمتطلبات الوظيفية",
                "دراسة الجدوى الأولية والعصف الذهني"
              ]
            },
            "site": {
              "title": "تحليل الموقع",
              "bullets": [
                "دراسة طبيعة الأرض لضمان استقرار",
                "مراجعة المعايير والقوانين لحماية المشروع",
                "فهم محيط الموقع لتقديم حلول تصميمية ذكية"
              ]
            },
            "architectural": {
              "title": "التخطيط المعماري",
              "bullets": [
                "مساقط أفقية ذكية وتحسين استغلال المساحات",
                "واجهات أيقونية تجمع بين الجمال والوظيفة",
                "جولات افتراضية ثلاثية الأبعاد للمعاينة"
              ]
            },
            "structural": {
              "title": "التخطيط الإنشائي",
              "bullets": [
                "أنظمة إنشائية وأساسات قوية ومتينة",
                "اختيار مواد بناء فاخرة ومستدامة",
                "تكامل سلس للأنظمة الميكانيكية والكهربائية"
              ]
            },
            "budget": {
              "title": "الميزانية والجدول الزمني",
              "bullets": [
                "ميزانية دقيقة تعكس كل بند من المشروع",
                "جداول زمنية دقيقة تعتمد على مراحل الإنجاز",
                "تخفيف المخاطر وإدارة خطط الطوارئ"
              ]
            },
            "coordination": {
              "title": "التنسيق قبل البناء",
              "bullets": [
                "تأمين كافة التصاريح الحكومية والموافقات",
                "التنسيق الهندسي المتكامل بين التخصصات",
                "الانتهاء من استراتيجيات التوريد واللوجستيات"
              ]
            }
          }
        },
        "estimation_title": "تقدير المشاريع",
        "estimation_desc": "توقعات دقيقة وجدولة مفصلة للحفاظ على سير مشروعك في المسار الصحيح.",
        "estimation_page": {
          "title": "تقدير المشاريع",
          "subtitle": "الدقة في التقدير هي مفتاح نجاح المشروع. نحن نقدم توقعات دقيقة للتكاليف والوقت والموارد.",
          "sections": {
            "cost": {
              "title": "تقدير التكلفة",
              "sentences": [
                "نوفر تحليلاً دقيقاً  للتكاليف لكل مرحلة من مراحل مشروعك.",
                "يعتمد فريقنا على أسعار السوق الواقعية لضمان ميزانية دقيقة ومنطقية.",
                "ستحصل على تفصيل شامل يساعدك في اتخاذ قرارات مالية مدروسة."
              ]
            },
            "timeline": {
              "title": "الجدول الزمني للمشروع",
              "sentences": [
                "تتم جدولة كل مشروع بدقة لضمان تلبية توقعاتك في مواعيد التسليم.",
                "نحدد معالم واضحة تتيح المتابعة الفورية لتقدم أعمال البناء والتشييد.",
                "يضمن تخطيطنا الاستراتيجي إتمام كافة المراحل في وقتها دون المساس بالجودة."
              ]
            },
            "resource": {
              "title": "تخطيط الموارد",
              "sentences": [
                "نخصص العمالة الماهرة والمواد عالية الجودة بكفاءة لتحقيق أقصى قدر من الإنتاجية.",
                "تضمن إدارة سلسلة التوريد لدينا توفر الموارد في الوقت المحدد تماماً.",
                "توازن الموارد بشكل صحيح يمنع العقبات ويضمن سير عمل البناء بسلاسة."
              ]
            },
            "risk": {
              "title": "تحليل المخاطر",
              "sentences": [
                "نحدد التحديات المحتملة بشكل استباقي لضمان سلامة واستمرارية العمل.",
                "صُممت استراتيجياتنا للتعامل مع المخاطر البيئية والمالية والفنية بفاعلية.",
                "تضمن المراقبة المستمرة طوال دورة حياة المشروع حل كل عقبة بسرعة وكفاءة."
              ]
            }
          }
        },
        "features": {
          "transparent_costs": "حرية العميل فى الصرف",
          "direct_material": "فواتير مواد مباشرة",
          "fixed_fee": "هيكل رسوم ثابت",
          "max_flexibility": "أقصى مرونة",
          "real_time": "تعديلات فورية",
          "complete_control": "تحكم كامل",
          "all_inclusive": "شامل للكل",
          "guaranteed_timeline": "جدول زمنی مضمون",
          "turnkey": "حل تسليم مفتاح"
        },
        "view_all": "عرض كافة التفاصيل",
        "learn_more": "اعرف المزيد"
      },
      "about": {
        "title": "من نحن",
        "subtitle": "بناء إرث من الثقة والتميز منذ عام 2022",
        "heading": "التميز في كل التفاصيل",
        "company_name": "تاور توب للمقاولات العامة والتوريدات",
        "registration": "السجل التجاري رقم: 714-199-752",
        "established": "تأسست عام 2022",
        "p1": "تعمل شركة تاور توب في مجال كافة أعمال المقاولات العامة والتشطيبات الخاصة بالمشاريع والوحدات السكنية والتجارية داخل جمهورية مصر العربية، وقد نفذت الشركة أعمالها في نطاق واسع من المشاريع شمل الفيلات، الشقق، المحلات التجارية، المولات، والمقرات الإدارية.",
        "p2": "تعتمد تاور توب في منهج عملها على الالتزام بمعايير الجودة، ودقة الإشراف التنفيذي، ووضوح مراحل التنفيذ، مع الحرص على تقديم حلول تشطيب متكاملة تراعي التفاصيل الفنية وتحقق أعلى مستوى من الاعتمادية والاستدامة.",
        "p3": "كما تضع الشركة خدمة ما بعد التسليم ضمن مسؤولياتها الأساسية، إيمانًا بأن جودة العمل الحقيقية تبدأ من ثقة العميل وتستمر بعدها.",
        "check1": "مرخصة ومؤمنة",
        "check2": "مهندسون خبراء",
        "check3": "التسليم في الوقت المحدد",
        "check4": "جودة مضمونة"
      },
      "vision": {
        "title": "رؤيتنا",
        "subtitle": "رسم أفق الغد",
        "p1": "أن تصبح شركة تاور توب للمقاولات العامة والتوريدات كيانًا احترافيًا قادرًا على تقديم خدمات المقاولات والتشطيبات وفق معايير تنفيذ واضحة وقابلة للتطبيق داخل وخارج جمهورية مصر العربية، مع التوسع المدروس في أسواق إقليمية مختارة، مع الحفاظ على نفس مستوى الجودة، والانضباط، والإشراف الدقيق الذي قامت عليه الشركة منذ تأسيسها.",
        "item1_title": "الابتكار",
        "item1_desc": "اعتماد أحدث التقنيات والمنهجيات لتبسيط عمليات البناء.",
        "item2_title": "الجودة",
        "item2_desc": "وضع المعيار الذهبي للمتانة والجمال في كل مشروع.",
        "item3_title": "النزاهة",
        "item3_desc": "بناء علاقات تقوم على الشفافية والصدق والاحترام المتبادل."
      },
      "mission": {
        "title": "رسالتنا",
        "subtitle": "مدفوعون بالهدف، محددون بالنتائج",
        "p1": "تقديم خدمات المقاولات والتشطيبات المتكاملة للمشاريع والوحدات السكنية والتجارية داخل مصر، مع الالتزام بمعايير الجودة، الإشراف الدقيق، ووضوح مراحل التنفيذ، وتقديم حلول تشطيب متكاملة تراعي التفاصيل الفنية، مع بناء علاقة طويلة الأمد مع العملاء قائمة على الشفافية، الالتزام، والمسؤولية في كل مرحلة من مراحل العمل.",
        "card1_title": "التخطيط",
        "card1_desc": "تطوير خطط واضحة للمشاريع وتخصيص الموارد بكفاءة.",
        "card2_title": "التنفيذ",
        "card2_desc": "ضمان تشطيبات عالية الجودة والإشراف على كل مرحلة بعناية.",
        "card3_title": "العلاقة مع العميل",
        "card3_desc": "الحفاظ على الشفافية مع العملاء وتقديم الدعم المستمر بعد التسليم."
      },
      "founder": {
        "title": "القيادة",
        "subtitle": "تعرف على الرؤية وراء تاور توب",
        "name": "أحمد رمزي عبد الغني واعر",
        "role": "المؤسس والمدير التنفيذي لشركة تاور توب للمقاولات العامة والتوريدات",
        "quote": "التشطيب المتقن لا يتم بالحلول السريعة، بل باتخاذ قرارات مدروسة قبل التنفيذ، ويُحافظ عليها بإشراف مسؤول حتى التسليم.",
        "bio1": "بدأ أحمد رمزي مسيرته المهنية بالعمل في الإشراف التنفيذي في مواقع شركات المقاولات، حيث اكتسب أكثر من 7 سنوات من الخبرة العملية في متابعة وتنفيذ أعمال تشطيبات متنوعة والتعامل المباشر مع تحديات التنفيذ الفعلي وضبط الجودة.",
        "bio2": "وخلال هذه الرحلة المهنية، شارك أحمد رمزي كشريك في شركة الكيان للمقاولات العامة لمدة عامين، وهي المرحلة التي ساهمت في تعميق خبرته الإدارية والتنظيمية وربط الجانب التنفيذي برؤية أوسع لإدارة المشاريع.",
        "bio3": "وبناءً على هذه الخبرات المتراكمة، أسس شركة تاور توب للمقاولات العامة والتوريدات في عام 2022، مدفوعاً بإيمان راسخ بأن: التشطيب المتقن لا يتم بالحلول السريعة، بل باتخاذ قرارات مدروسة قبل التنفيذ، ويُحافظ عليها بإشراف مسؤول حتى التسليم.",
        "bio4": "ومن هذا المنطلق، يقود أحمد رمزي الشركة بمنهجية تعتمد على التخطيط الدقيق والوضوح مع العميل والتنفيذ المنظم، سعيًا لتقديم أعمال مستدامة وعالية الجودة وبناء علاقات مهنية طويلة الأمد."
      },
      "services": {
        "commercial_title": "البناء التجاري",
        "commercial_subtitle": "بناء مستقبل الأعمال",
        "commercial_desc": "نقدم مساحات تجارية حديثة تعزز الإنتاجية وتبهر العملاء. من الأبراج المكتبية إلى المراكز التجارية، نتعامل مع المشاريع المعقدة بدقة.",
        "residential_title": "التطوير السكني",
        "residential_subtitle": "بناء بيوت لا مجرد منازل",
        "residential_desc": "تمزج مشاريعنا السكنية بين الجمال الجمالي والتصميم الوظيفي. نحن ننشئ مساحات معيشة توفر الراحة والفخامة وقيمة دائمة.",
        "view_project": "عرض المشروع",
        "project_management": "إدارة المشاريع",
        "interior_design": "التصميم الداخلي",
        "renovations": "تجديدات",
        "consultation": "استشارات",
        "project": "مشروع",
        "full_view": "عرض كامل",
        "close": "إغلاق"
      },
      "plans": {
        "title": "الخطط والأسعار",
        "subtitle": "نماذج شفافة مصممة خصيصًا لاحتياجاتك",
        "most_popular": "الأكثر شيوعاً",
        "get_started": "ابدأ الآن",
        "fixed_title": "نسبة ثابتة",
        "fixed_desc": "مثالي للعملاء الذين يريدون الشفافية والمشاركة المباشرة.",
        "cost_plus_title": "التكلفة زائد",
        "cost_plus_desc": "مثالي للمشاريع المعقدة حيث قد يتطور نطاق العمل.",
        "package_title": "خطة الباقة",
        "package_desc": "حل تسليم مفتاح لراحة بال تامة.",
        "estimation_title": "تقدير مفصل",
        "estimation_desc": "ابدأ بشكل صحيح مع التنبؤ الدقيق.",
        "features": {
          "fixed": {
            "f1": "فواتير الكترونية من الموردين",
            "f2": "نسبة إدارة ثابتة",
            "f3": "موافقة العميل شرط اساسى قبل عملية الشراء",
            "f4": "تقديم تقارير اسبوعيه",
            "f5": "حرية العميل فى الصرف مع الاحتفاظ بالنسبة المتفق عليها "
          },
          "cost_plus": {
            "f1": "أقصى درجات المرونة",
            "f2": "تعديلات فورية في نطاق العمل",
            "f3": "رؤية كاملة للتكاليف",
            "f4": "إدارة جدول زمني مرنة",
            "f5": "مثالي للتجديدات"
          },
          "package": {
            "f1": "سعر ثابت مضمون",
            "f2": "جدول زمني مضمون",
            "f3": "شامل جميع المواد",
            "f4": "بدون تكاليف خفية",
            "f5": "ضمان كامل للمشروع"
          },
          "estimation": {
            "f1": "حصر كميات",
            "f2": "تحليل أسعار السوق",
            "f3": "توقعات تكاليف العمالة",
            "f4": "جدولة زمنية",
            "f5": "تقييم المخاطر"
          },

          "transparent_costs": "حرية العميل فى الصرف",
          "direct_material": "فواتير مواد مباشرة",
          "fixed_fee": "هيكل رسوم ثابت",
          "max_flexibility": "أقصى مرونة",
          "real_time": "تعديلات فورية",
          "complete_control": "تحكم كامل",
          "all_inclusive": "شامل للكل",
          "guaranteed_timeline": "جدول زمنی مضمون",
          "turnkey": "حل تسليم مفتاح"
        },
        "view_all": "عرض كافة التفاصيل",
        "learn_more": "اعرف المزيد"
      },
      "reviews": {
        "title": "آراء العملاء",
        "subtitle": "ماذا يقول عملاؤنا عنا",
        "loading": "جاري تحميل الآراء..."
      },
      "contact": {
        "title": "اتصل بنا",
        "subtitle": "لنبدأ مشروعك اليوم",
        "get_in_touch": "تواصل معنا",
        "description": "سواء كان لديك سؤال حول خدماتنا أو أسعارنا أو كنت ترغب في مناقشة مشروع جديد، فإن فريقنا جاهز للإجابة على جميع أسئلتك.",
        "phone": "الهاتف",
        "email": "البريد الإلكتروني",
        "office": "المكتب",
        "location": "موقعنا",
        "send_message": "أرسل لنا رسالة",
        "full_name": "الاسم الكامل",
        "subject": "الموضوع",
        "message": "الرسالة",
        "sending": "جاري الإرسال...",
        "send": "إرسال الرسالة",
        "address_value": "55 مكرر المريوطية هرم جيزه",
        "phone_value": "01555999908",
        "email_value": "Towertop52@gmail.com"
      },
      "cta": {
        "title": "مستعد لبناء رؤيتك؟",
        "description": "اتصل بنا اليوم للحصول على استشارة مجانية ولنناقش كيف يمكننا تحقيق مشروعك.",
        "button": "اتصل بنا الان"
      },
      "footer": {
        "company_name": "تاور توب للمقاولات",
        "description": "نبني المستقبل بالتميز والنزاهة والابتكار. شريكك الموثوق في البناء والتطوير.",
        "quick_links": "روابط سريعة",
        "services": "الخدمات",
        "contact_info": "معلومات الاتصال",
        "rights": "جميع الحقوق محفوظة.",
        "privacy": "سياسة الخصوصية",
        "terms": "شروط الخدمة",
        "brand_tagline": "للمقاولات"
      },
      "partners": {
        "title": "شركاء النجاح",
        "subtitle": "نتعاون مع الأفضل لتقديم الأفضل",
        "cta_title": "كن شريكاً",
        "cta_description": "نحن نبحث دائماً عن موردين ومقاولين من الباطن ذوي جودة عالية للانضمام إلى شبكتنا.",
        "cta_button": "انضم إلى شبكتنا"
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

i18n.on('languageChanged', (lng) => {
  document.documentElement.dir = lng === 'ar' ? 'rtl' : 'ltr';
  document.documentElement.lang = lng;
});

export default i18n;
