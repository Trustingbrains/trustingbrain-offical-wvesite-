export const siteData = {
  brand: {
    name: "Trusting Brains",
    tagline: "YOUR TRUST OUR COMMITMENT",
    phone: "+91 8382835630",
    phoneDisplay: "+91 8382835630",
    email: "info@trustingbrains.com",
    address: "Delhi NCR, India",
    workingHours: "Mon - Sat: 9:00 AM - 7:00 PM",
    copyright: "© 2026 Developed by Trusting Brains. All rights reserved.",
    whatsappUrl: "https://wa.me/918382835630?text=Hello%20Trusting%20Brains%2C%20I%20am%20interested%20in%20your%20services."
  },

  navigation: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about-us" },
    { label: "Our Services", href: "/our-services" },
    { label: "Blog", href: "/blogs" },
    { label: "Contact Us", href: "/contact-us" },
  ],

  hero: {
    callBadge: "Call us: +91 8382835630",
    subtitleBadge: "Elevate Business With Trusting Brains",
    titleLine1: "We Don't just market",
    titleLine2: "we make your Brand",
    titleHighlight: "Unforgettable",
    description: "Explore Website Development to enhance your brand and reach over 3k users. Start your digital transformation with high-performance apps, modern websites, and smart AI solutions today.",
    trustedBy: "3k+ users",
    ctaPrimary: "Explore More",
    ctaSecondary: "Contact Us",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },

  clients: [
    { name: "Codechronics", logo: "/assets/client-codechronics.png" },
    { name: "Moneycart", logo: "/assets/client-moneycart.png" },
    { name: "Ovobee", logo: "/assets/client-ovobee.png" },
    { name: "Nebula", logo: "/assets/client-nebula.png" },
    { name: "GVS Line", logo: "/assets/client-codechronics-1.png" },
  ],

  services: [
    {
      slug: "game-development",
      title: "Game Development",
      shortDesc: "Ready to design the game of your dreams? Let's build it together with high-end physics, 2D/3D graphics, and engaging gameplay.",
      image: "/assets/service-game.webp",
      tag: "Game Development, Reimagined",
      features: ["Unreal & Unity Engines", "Cross-Platform Support", "Multiplayer Architecture", "Immersive 3D Environments"],
      detailedDesc: "Trusting Brains crafts unforgettable gaming experiences. From mobile indie games to full-scale AAA gaming architectures, our gaming engineers use the latest render pipelines to deliver fluid performance, stunning aesthetics, and addicting gameplay mechanics.",
      benefits: [
        "High-fidelity rendering across mobile, PC, and consoles",
        "Optimized network code for low-latency multiplayer",
        "Custom shaders, procedural generation, and AI-driven NPCs",
        "End-to-end game production from storyboarding to store launch"
      ],
      faqs: [
        { q: "What engines do you specialize in?", a: "We specialize in Unity, Unreal Engine 5, Godot, and WebGL for interactive web games." },
        { q: "Can you publish to iOS App Store and Google Play?", a: "Yes, we handle complete compliance, optimization, and store submission for both platforms." }
      ]
    },
    {
      slug: "app-development",
      title: "App Development",
      shortDesc: "Build an app that scales. Native iOS, Android, and cross-platform Flutter/React Native solutions built for speed and conversions.",
      image: "/assets/service-app.webp",
      tag: "Powerful Apps, Perfected",
      features: ["React Native & Flutter", "Native Swift & Kotlin", "Real-time Push Notifications", "Offline-first Sync"],
      detailedDesc: "We design and build intuitive, fast, and feature-rich mobile applications that users love. Whether you need a customer-facing marketplace or an internal enterprise operational tool, our mobile apps deliver top-tier UX and reliable architecture.",
      benefits: [
        "Seamless cross-platform experiences reducing development overhead",
        "Biometric authentication and bank-grade data security",
        "Instant real-time analytics and user behavior tracking",
        "Continuous automated CI/CD deployment pipelines"
      ],
      faqs: [
        { q: "How long does mobile app development take?", a: "MVP mobile apps typically take 4-8 weeks, while complex enterprise applications take 10-16 weeks." },
        { q: "Do you support ongoing app maintenance?", a: "Yes, we provide 24/7 monitoring, security patches, OS updates, and new feature iterations." }
      ]
    },
    {
      slug: "website-development",
      title: "Website Development",
      shortDesc: "Elevate your web presence with high-converting, lightning-fast, modern responsive web applications and landing pages.",
      image: "/assets/service-web.webp",
      tag: "Custom Websites, Crafted Right",
      features: ["React & Next.js Architecture", "SEO & Performance Optimized", "Mobile-first Responsive", "Interactive Micro-animations"],
      detailedDesc: "Your website is your 24/7 digital storefront. We create beautiful, ultra-fast websites that captivate visitors and convert them into paying customers. Every pixel is crafted to reflect your brand identity while maintaining 95+ Google Lighthouse scores.",
      benefits: [
        "Blazing fast load times under 1 second",
        "Responsive across all desktop, tablet, and mobile displays",
        "Conversion-rate-optimized UX layouts",
        "Modern CMS integration for effortless content management"
      ],
      faqs: [
        { q: "Will my website be mobile friendly?", a: "Absolutely! We build with a mobile-first philosophy, ensuring flawless viewing on all screens." },
        { q: "Is SEO included?", a: "Yes, on-page technical SEO, meta schemas, sitemaps, and speed optimization are built into every website." }
      ]
    },
    {
      slug: "e-commerce-development",
      title: "E-Commerce Development",
      shortDesc: "Custom digital storefronts designed to sell. Seamless payment gateway integrations, inventory sync, and hyper-fast checkouts.",
      image: "/assets/service-ecommerce.webp",
      tag: "Ecommerce Solutions That Sell",
      features: ["Shopify & WooCommerce", "Custom Headless Storefronts", "Payment Gateways (Stripe, Razorpay)", "Inventory & Shipping Automation"],
      detailedDesc: "Transform your online retail operations with high-conversion e-commerce systems. We build scalable stores that handle thousands of simultaneous transactions, personalized product recommendations, and automated logistics pipelines.",
      benefits: [
        "Frictionless 1-click checkout experiences",
        "Multi-currency and multi-language internationalization",
        "Automated inventory management and abandoned cart recovery",
        "Integrated CRM, analytics, and customer loyalty programs"
      ],
      faqs: [
        { q: "Which payment gateways do you integrate?", a: "We integrate Razorpay, Stripe, PayPal, Cashfree, UPI, and major global credit cards." },
        { q: "Can you migrate my existing store without downtime?", a: "Yes, we have zero-downtime database migration processes for products, orders, and customer data." }
      ]
    },
    {
      slug: "erp-solutions",
      title: "ERP Solutions",
      shortDesc: "Streamline enterprise operations with unified Enterprise Resource Planning software tailored to your company's workflow.",
      image: "/assets/erp-1.png",
      tag: "Innovative Ideas, Delivered Fast",
      features: ["Finance & Accounting", "HR & Payroll Management", "Supply Chain & Warehousing", "Executive Real-Time Dashboards"],
      detailedDesc: "Take total control of your business data. Our custom ERP platforms connect finance, manufacturing, supply chain, sales, and human resources into a single source of truth, removing organizational silos and automating repetitive manual work.",
      benefits: [
        "Real-time visibility into company-wide operational metrics",
        "Automated compliance, billing, and tax computations",
        "Role-based permission controls and audit tracking",
        "Modular architecture that scales with your company expansion"
      ],
      faqs: [
        { q: "Can the ERP system integrate with our existing accounting tools?", a: "Yes, we offer seamless APIs for Tally, QuickBooks, SAP, and custom internal software." },
        { q: "Is our business data secure on the cloud?", a: "We implement AES-256 encryption, VPC isolation, regular backups, and strict compliance protocols." }
      ]
    },
    {
      slug: "crm-solutions",
      title: "CRM Solutions",
      shortDesc: "Close more deals and retain customers with intelligent Customer Relationship Management systems powered by automation.",
      image: "/assets/solution-ai.png",
      tag: "Customer Intelligence, Amplified",
      features: ["Lead Pipeline Automation", "WhatsApp & Email Sync", "Call Logging & Recordings", "AI Lead Scoring"],
      detailedDesc: "Empower your sales and customer success teams. Our CRM solutions centralize lead scoring, automatic follow-ups, omnichannel communications, and deal pipelines so your reps never lose an opportunity.",
      benefits: [
        "Automated lead capture from web forms, WhatsApp, and social media",
        "Visual Kanban pipelines for transparent deal tracking",
        "Automated task reminders, follow-ups, and quotation generators",
        "Comprehensive sales forecasting and team performance metrics"
      ],
      faqs: [
        { q: "Can we track sales agent calling performance?", a: "Yes, our smart CRM includes automatic call recording, duration tracking, and disposition logs." },
        { q: "Does it support WhatsApp automated messages?", a: "Yes, we integrate official WhatsApp Business APIs for instant automated template messaging." }
      ]
    }
  ],

  featureHighlights: [
    { title: "Custom Websites, Crafted Right", desc: "Pixel-perfect, ultra-fast websites engineered to elevate your brand prestige and organic reach." },
    { title: "Powerful Apps, Perfected", desc: "High-performance iOS and Android mobile solutions built with smooth modern gestures and security." },
    { title: "Ecommerce Solutions That Sell", desc: "Designed for frictionless checkouts, repeat purchases, and automated multi-channel catalog sync." },
    { title: "Game Development, Reimagined", desc: "Engaging 2D/3D physics, captivating storylines, and addictive game mechanics for mobile and PC." },
    { title: "Innovative Ideas, Delivered Fast", desc: "Rapid agile delivery model taking your concept from blueprint to production ahead of schedule." }
  ],

  whyChooseUs: {
    heading: "Empowering Innovation, Delivering Excellence",
    leadText: "Trusting Brains is a leading IT solutions provider, delivering cutting-edge digital experiences, custom web development, mobile applications, and enterprise software designed to scale businesses seamlessly.",
    points: [
      {
        title: "Client-First Approach",
        desc: "We don't just write code; we align technical implementation directly with your business growth and revenue targets."
      },
      {
        title: "Agile & Fast Delivery",
        desc: "Iterative sprints, transparent weekly updates, and rapid turnarounds to keep you ahead of competitors."
      },
      {
        title: "Future-Ready Tech Stack",
        desc: "Leveraging modern React, Node, AI integrations, Cloud Native architecture, and scalable microservices."
      },
      {
        title: "Post-Launch Dedicated Support",
        desc: "24/7 operational monitoring, automated backups, security audits, and continuous performance tuning."
      }
    ]
  },

  coreValues: [
    {
      title: "Innovation",
      desc: "Pushing technical boundaries with generative AI, modern frameworks, and forward-thinking system architectures."
    },
    {
      title: "Transparency",
      desc: "Open communication, no hidden clauses, and crystal-clear visibility into project milestones."
    },
    {
      title: "Client-Centricity",
      desc: "Every design choice and feature is tailored precisely around the end user's needs and client ROI."
    },
    {
      title: "Quality",
      desc: "Rigorous automated testing, clean modular code, and high standards that guarantee robust reliability."
    },
    {
      title: "Integrity",
      desc: "Ethical collaboration, data confidentiality, and dependable partnership you can always count on."
    }
  ],

  smartPlatforms: [
    {
      id: "ai-voice",
      title: "AI Voice Calling Agent",
      badge: "Generative AI",
      heading: "Automate Inbound & Outbound Calling with Natural Human Voice",
      description: "Our AI Voice Agent handles real-time customer queries, appointment scheduling, lead qualification, and payment reminders with near-zero latency and natural conversational fluency.",
      highlights: [
        "Multilingual speech recognition and realistic voice synthesis",
        "Instant CRM sync of call logs, audio recordings, and transcripts",
        "Scales effortlessly to handle 10,000+ concurrent calls",
        "Smart intent detection with graceful fallback to human supervisors"
      ],
      image: "/assets/solution-ai.png"
    },
    {
      id: "loan-crm",
      title: "Smart Loan CRM System",
      badge: "FinTech Solution",
      heading: "Complete End-to-End Loan Origination & Disbursal CRM",
      description: "A specialized FinTech CRM platform for NBFCs and lending agencies. Automates KYC verification, credit score pulling, eligibility checks, document management, and collections.",
      highlights: [
        "Integrated Aadhaar & PAN verification APIs",
        "Automated CIBIL & Experian credit scoring checks",
        "Custom approval hierarchies and disbursal triggers",
        "EMI collection reminders via WhatsApp, SMS, and automated IVR"
      ],
      image: "/assets/erp-2.png"
    },
    {
      id: "attendance-tracking",
      title: "Smart Attendance & Field Tracking System",
      badge: "Enterprise Mobility",
      heading: "Geo-Fenced Mobile Attendance & Real-Time Field Executive Tracking",
      description: "Empower your field workforce. Provides selfie-based facial recognition attendance, GPS route playback, battery status, geofencing, and automatic client visit reporting.",
      highlights: [
        "Geo-fenced check-in / check-out with anti-spoofing verification",
        "Live field agent map tracking and route playback",
        "Automated daily allowance (DA/TA) distance computations",
        "Offline punch-in support with auto-sync when online"
      ],
      image: "/assets/erp-4.png"
    },
    {
      id: "manufacturing-ecommerce",
      title: "Manufacturing + Vendor E-commerce Management",
      badge: "Supply Chain",
      heading: "Unified B2B & B2C Manufacturing & Multi-Vendor Ecosystem",
      description: "Bridging manufacturing plants, raw material suppliers, distribution networks, and digital storefronts with integrated bill-of-materials, batch tracking, and vendor portals.",
      highlights: [
        "Multi-vendor onboarding, commission splits, and automated payouts",
        "Real-time inventory levels across multiple warehouses",
        "B2B bulk tier pricing and customer credit terms",
        "Direct synchronization with shipping carriers and logistics aggregators"
      ],
      image: "/assets/erp-5.png"
    }
  ],

  achievements: [
    { value: "150+", label: "Satisfied Clients All Over the World", sub: "Global Brands & Startups" },
    { value: "99%", label: "Clients Satisfactory Reviews", sub: "5-Star Ratings on Clutch & Google" },
    { value: "50+", label: "Projects Completed Successfully", sub: "Web, Mobile, AI & Enterprise ERP" },
    { value: "24/7", label: "Dedicated Support & Monitoring", sub: "Always Available for Critical Needs" }
  ],

  testimonials: [
    {
      name: "Amit Sharma",
      role: "Business Consultant (Delhi)",
      content: "We got our company website developed from Trusting Brains and honestly the experience was phenomenal. The team was responsive, delivered ahead of the deadline, and our traffic increased by 40% within the first two months.",
      rating: 5,
      avatar: "AS"
    },
    {
      name: "Neha Verma",
      role: "Founder, TechRetail",
      content: "Their e-commerce development team transformed our catalog into a fast, elegant online store. Seamless payment integration and outstanding UX. Customers love the new checkout flow!",
      rating: 5,
      avatar: "NV"
    },
    {
      name: "MoneyCart Leadership",
      role: "FinTech Platform",
      content: "Trusting Brains delivered our Loan Management CRM on time with outstanding quality. Security, speed, and API integrations were handled with utmost professionalism.",
      rating: 5,
      avatar: "MC"
    },
    {
      name: "Ovobee Management",
      role: "Digital Enterprise",
      content: "A truly dependable IT partner. Their custom ERP solution simplified our vendor and inventory tracking completely. Highly recommended for enterprise development.",
      rating: 5,
      avatar: "OB"
    },
    {
      name: "GVS Line Logistics",
      role: "Supply Chain Solutions",
      content: "The field attendance and tracking system built by Trusting Brains saved our operations team hours of manual verification every day. Remarkable engineering!",
      rating: 5,
      avatar: "GV"
    }
  ],

  tickerPills: [
    "AI Chatbot Development",
    "Website Chatbot",
    "WhatsApp Chatbot",
    "AI Automation Systems",
    "AI Content Creation Services",
    "AI Voice & Calling Agents",
    "Digital Marketing",
    "Full-Stack Web Development",
    "Mobile Apps (iOS & Android)",
    "Enterprise ERP Solutions",
    "Smart CRM Architectures",
    "Cloud DevOps & Hosting"
  ],

  pricingPlans: [
    {
      title: "Hosting Services",
      tagline: "High-Performance Cloud Hosting",
      monthlyPrice: "₹ 149",
      monthlyPeriod: "/ month",
      yearlyPrice: "₹ 1,250",
      yearlyPeriod: "/ year",
      saveText: "Save 30% on Annual Plan",
      features: [
        "Scalable infrastructure, adaptable for workloads",
        "99.9% High uptime for continuous availability",
        "Robust enterprise security with automated SSL",
        "Free daily cloud backups & 1-click restore",
        "High-speed SSD NVMe storage",
        "24/7 dedicated support via ticket & WhatsApp"
      ],
      popular: false,
      ctaText: "Try Today"
    },
    {
      title: "Business Growth Plan",
      tagline: "Managed Web & Server Suite",
      monthlyPrice: "₹ 2,499",
      monthlyPeriod: "/ month",
      yearlyPrice: "₹ 19,999",
      yearlyPeriod: "/ year",
      saveText: "Best Value for Growing Brands",
      features: [
        "Everything in Hosting Services",
        "Unlimited Bandwidth & CDN acceleration",
        "Weekly security scans and malware removal",
        "Dedicated account manager",
        "Speed optimization & database indexing",
        "Priority 15-minute SLA response time"
      ],
      popular: true,
      ctaText: "Get Started"
    },
    {
      title: "Enterprise Custom",
      tagline: "Dedicated Architecture & AI",
      monthlyPrice: "Custom",
      monthlyPeriod: "tailored quote",
      yearlyPrice: "Custom",
      yearlyPeriod: "annual contract",
      saveText: "Custom SLAs & Architecture",
      features: [
        "Private VPC cloud deployment (AWS / GCP)",
        "Custom ERP & CRM development modules",
        "Custom AI Voice Agents and automated pipelines",
        "Microservices architecture & load balancing",
        "Dedicated DevOps engineer & Slack channel",
        "Enterprise NDA and custom security compliance"
      ],
      popular: false,
      ctaText: "Contact Us"
    }
  ],

  blogs: [
    {
      slug: "transform-your-business-with-cutting-edge-it-services",
      title: "Transform Your Business with Cutting-Edge IT Services",
      category: "Digital Transformation",
      date: "August 24, 2026",
      author: "Trusting Brains Team",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=85",
      readTime: "5 min read",
      excerpt: "In today's fast-paced digital era, adopting cutting-edge IT services is no longer an option—it is a competitive necessity. Learn how modern cloud infrastructure, AI tools, and custom web applications accelerate revenue growth.",
      content: `
        <p>In today’s hyper-competitive digital economy, relying on legacy systems can severely hinder your business potential. From slow load times that drive potential buyers away to manual operational workflows that drain team productivity, traditional methodologies are rapidly becoming obsolete.</p>
        <h3>Why Cloud & Modern Web Tech Matter</h3>
        <p>A modern web application built on frameworks like React, coupled with resilient cloud infrastructure, ensures that your digital presence scales effortlessly during flash traffic spikes while maintaining sub-second page loads.</p>
        <h3>Automating with AI Solutions</h3>
        <p>By implementing custom AI voice agents and smart chatbots, businesses can handle 24/7 client inquiries with zero delay, drastically reducing customer churn and boosting lead qualification rates.</p>
      `
    },
    {
      slug: "the-role-of-managed-it-services-in-business-growth",
      title: "The Role of Managed IT Services in Business Growth",
      category: "IT Strategy",
      date: "July 12, 2026",
      author: "Tech Insights",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=85",
      readTime: "4 min read",
      excerpt: "Discover why forward-thinking enterprises partner with managed IT providers to reduce overhead, eliminate downtime, and safeguard critical business assets.",
      content: `
        <p>Managing an internal IT department can be resource-intensive, especially for growing startups and mid-market enterprises. Managed IT services bridge this gap by offering round-the-clock infrastructure oversight, proactive security patches, and tailored technical support.</p>
        <h3>Zero-Downtime Reliability</h3>
        <p>With predictive monitoring and automated failovers, potential server issues are flagged and remediated before customers even notice an interruption.</p>
        <h3>Predictable Cost Structures</h3>
        <p>Partnering with a managed IT provider provides fixed, predictable monthly costs, allowing founders and executives to focus capital expenditure directly on core business expansion.</p>
      `
    },
    {
      slug: "top-programming-languages-for-ai-development",
      title: "Top Programming Languages for AI Development in 2026",
      category: "Artificial Intelligence",
      date: "June 18, 2026",
      author: "Engineering Team",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=85",
      readTime: "6 min read",
      excerpt: "A deep dive into Python, TypeScript, Rust, and Mojo for building production-grade generative AI models, vector search pipelines, and agentic workflows.",
      content: `
        <p>Artificial Intelligence continues to evolve at breakneck speed. While Python remains the undisputed standard for model training and research, production deployments are increasingly written in TypeScript, Go, and Rust for high concurrency and ultra-low memory footprints.</p>
        <h3>TypeScript in the Age of Agentic Systems</h3>
        <p>With modern LLM SDKs and serverless environments, TypeScript has become a favorite for orchestrating multi-agent systems and real-time streaming interfaces.</p>
      `
    }
  ],

  teamMembers: [
    { name: "Wade Warren", role: "Lead Systems Architect", image: "/assets/team-wade.webp" },
    { name: "John Smith", role: "Senior Full-Stack Engineer", image: "/assets/team-john.webp" },
    { name: "Jenny Wilson", role: "UI/UX Creative Director", image: "/assets/team-jenny.webp" },
    { name: "Cody Fisher", role: "AI & Machine Learning Specialist", image: "/assets/team-cody.webp" },
    { name: "Robert Fox", role: "Mobile Application Lead", image: "/assets/team-robert.webp" },
    { name: "Albert Flores", role: "Cloud & DevOps Engineer", image: "/assets/team-albert.webp" }
  ]
};
