// Centralized Project Datasets

// --- Brand Motto / Core Value Proposition ---
// Single source of truth so the landing page and the "Why Spinny?" section
// never drift out of sync with each other.
export const BRAND_MOTTO = {
  eyebrow: 'The Spinny Promise',
  headingLead: 'Any specialist. ',  // <br/>
  headingAccent: 'Any service.', // Your whole city.',
  full: 'The freedom to choose any specialist, any service, anywhere in your city.',
  short: 'Any specialist. Any service. Your whole city.',
};

// --- Hero Contents ---
export const ABOUT_HERO_CONTENT = {
  eyebrow: 'About Us',
  heading: 'Not One Category. A Time-Buyback Platform.',
  description:
    'Spinny takes care of your entire wardrobe and home — from suits and sneakers to duvets and diaper bags — so the hours it used to cost are yours again. Any specialist, any service, anywhere in your city.',
  backgroundImage: '/frames/ezgif-frame-008.jpg',
  buttons: [
    { label: 'Contact us', url: '/contact' },
    { label: 'See process', url: '/process', variant: 'secondary' },
  ],
  accentText:
    'For households and commercial teams who’d rather have their weekend back than spend it on chores.',
};

export const CONTACT_HERO_CONTENT = {
  eyebrow: 'Contact Spinny',
  heading: 'Facing an issue with your order?',
  description:
    'We’re here to help. Send a message with your order details and we will get back to you fast.',
  backgroundImage: '/frames/ezgif-frame-014.jpg',
  buttons: [
    { label: 'Email support', url: 'mailto:hello@spinny.example' },
    { label: 'View process', url: '/process', variant: 'secondary' },
  ],
  accentText:
    'Most replies land within one business day.',
};

export const process_HERO_CONTENT = {
  eyebrow: 'process',
  heading: 'Getting your time back, in three simple journeys.',
  description:
    'A simple path for every role: create a profile, verify the essentials, and get approved.',
  backgroundImage: '/frames/ezgif-frame-020.jpg',
  buttons: [
    { label: 'Contact support', url: '/contact' },
    { label: 'About us', url: '/about', variant: 'secondary' },
  ],
  accentText:
    'Sample data shown below is for illustration only.',
};

export const SERVICES_HERO_CONTENT = {
  eyebrow: 'Our Services',
  heading: '80+ services. One pickup. Your choice of specialist.',
  description:
    'Shirts, suits, sneakers, duvets, and bags </br>- cared for by the local specialist you choose, then returned ready to use.',
  backgroundImage: '/frames/ezgif-frame-031.jpg',
  buttons: [
    { label: 'Get the app', url: '/app' },
    { label: 'View process', url: '/process', variant: 'secondary' },
  ],
  accentText:
    'Browse real local specialists by rating, distance, and price — matched to each material, picked by you.',
};

export const HELP_CENTER_HERO_CONTENT = {
  eyebrow: 'Help Center',
  heading: 'Support that is easy to find and simple to use.',
  description:
    'Quick answers to common questions — on orders, clothes, footwear, or home items — plus a direct line to our team.',
  backgroundImage: '/frames/ezgif-frame-105.jpg',
  rightImage: {
    src: '/frames/ezgif-frame-144.jpg',
    alt: 'Spinny help center support visual with service communication context',
    priority: true,
    badge: {
      label: 'Support overview',
      value: 'Fast answers, guided next steps, and clear contact options',
    },
  },
  buttons: [
    { label: 'Send Email', url: 'mailto:hello@spinny.app' },
    { label: 'Read FAQs', url: '#faq', variant: 'secondary' },
  ],
  accentText:
    'Start with the FAQ below, or send feedback for anything more specific.',
};

export const PRIVACY_HERO_CONTENT = {
  eyebrow: 'Spinny • Privacy Suite',
  heading: 'Spinny Platform Privacy Policy',
  description:
    'This Privacy Policy explains how Spinny collects, uses, discloses, stores, and protects personal information through the Spinny Platform.',
  backgroundImage: '/frames/ezgif-frame-160.jpg',
  rightImage: {
    src: '/frames/ezgif-frame-185.jpg',
    alt: 'Privacy and security themed Spinny visual',
    priority: true,
    badge: {
      label: 'Official Privacy Policy',
      value: 'Comprehensive Canadian Privacy Notice',
    },
  },
  buttons: [
    { label: 'Contact Privacy Officer', url: 'mailto:privacy@spinny.app' },
    { label: 'Help Center', url: '/help-center', variant: 'secondary' },
  ],
  accentText:
    'Questions about your personal data? Contact our designated Privacy Officer at privacy@spinny.app.',
};

// --- FAQ & Topics ---
export const HELP_FAQ_ITEMS = [
  {
    question: 'How do I change my pickup window?',
    answer:
      'Open your active order, choose reschedule, and select a new window that fits your route. If the window is close to closing, contact support so we can review the request manually.',
  },
  {
    question: 'What happens if a vendor needs more time?',
    answer:
      'The order status is updated and you receive a notification with the revised timeline. When possible, we provide the new expected delivery window before the original one expires.',
  },
  {
    question: 'How do I report a missing item?',
    answer:
      'Send feedback through the form below with your order number, the item description, and any relevant photos. That gives our team enough detail to start a trace quickly.',
  },
  {
    question: 'Can I use the service for commercial accounts?',
    answer:
      'Yes. Commercial accounts can request onboarding through the help center or contact support directly for routing to the business team.',
  },
];

export const FEEDBACK_TOPICS = [
  'Order or pickup support',
  'Vendor or driver onboarding',
  'Feature request',
  'Privacy question',
  'Billing question',
];

// --- Privacy Data ---
export const PRIVACY_SECTIONS = [
  {
    id: 1,
    title: '1. Scope',
    subtitle: 'Applicable Platforms & Users',
    body: 'This Privacy Policy explains how Spinny collects, uses, discloses, stores, and protects personal information through the Spinny Platform. It applies to customers, prospective customers, website visitors, customer-support contacts, and individuals whose information is submitted in connection with an order. Separate workforce and contractor privacy notices should be provided to Delivery Partners and Care Partner personnel.',
  },
  {
    id: 2,
    title: '2. Accountability',
    subtitle: 'Privacy Officer Oversight',
    body: 'Spinny is responsible for personal information under its control and designates a Privacy Officer to oversee compliance. Privacy questions, access requests, corrections, and complaints may be sent to privacy@spinny.app or mailed to our Langley corporate address.',
  },
  {
    id: 3,
    title: '3. Information We Collect',
    subtitle: 'Data Categories',
    body: 'We may collect personal information across several operational categories to provide and secure our platform:',
    bullets: [
      'Identity and Account Info: Name, username, password credentials, and account identifiers.',
      'Contact Info: Email address, telephone number, pickup and delivery addresses, and communication preferences.',
      'Order Info: Item categories, service selections, special instructions, allergies or sensitivities voluntarily provided, order history, pricing, refunds, complaints, and ratings.',
      'Payment & Transaction Info: Payment token, card type, last four digits, billing status, authorization results, chargebacks, and fraud signals. Full card details are collected directly by the payment processor.',
      'Location & Delivery Info: Address coordinates, route information, device location where permission is granted, timestamps, proof-of-pickup and proof-of-delivery records.',
      'Photos & Operational Evidence: Bag, garment, label, stain, damage, pickup, delivery, or incident photographs.',
      'Device & Usage Data: IP address, device identifiers, operating system, app version, browser, language, log data, crash reports, clicks, and feature interactions.',
      'Communications: Support messages, call recordings where notice and consent are provided, survey responses, and dispute materials.',
      'Marketing Info: Campaign engagement, referral activity, and consent records.',
      'Third-Party Information: Details from Care Partners, Delivery Partners, fraud-prevention providers, payment processors, and other service providers where necessary.',
    ],
  },
  {
    id: 4,
    title: '4. How We Use Information',
    subtitle: 'Authorized Operational Purposes',
    body: 'We use personal information for purposes a reasonable person would consider appropriate, including to:',
    bullets: [
      'Create and manage customer accounts.',
      'Accept, route, process, track, and deliver orders.',
      'Connect customers with Care Partners and Delivery Partners.',
      'Process payments, refunds, credits, and chargebacks.',
      'Communicate service updates and provide customer support.',
      'Document item condition, pickup, and delivery.',
      'Investigate complaints, missing items, safety events, and fraud.',
      'Personalize service and remember preferences.',
      'Maintain, troubleshoot, secure, and improve the Platform.',
      'Conduct analytics, forecasting, quality assurance, and business planning using aggregated or de-identified information.',
      'Send marketing communications where consent or another legal basis exists.',
      'Comply with tax, accounting, insurance, legal, regulatory, and law-enforcement obligations.',
      'Establish, exercise, or defend legal claims.',
    ],
  },
  {
    id: 5,
    title: '5. Consent',
    subtitle: 'Express & Implied Consent',
    body: 'We obtain meaningful consent where required. Depending on the sensitivity and context, consent may be express or implied. We will seek express consent for uses such as precise background location, promotional electronic messages where required, or other sensitive practices.\n\nYou may withdraw consent subject to legal or contractual restrictions and reasonable notice. Withdrawal may limit our ability to provide services that depend on the information, such as location-based pickup and delivery.',
  },
  {
    id: 6,
    title: '6. Disclosure of Information',
    subtitle: 'Third-Party Sharing & Partners',
    body: 'We may disclose personal information to:',
    bullets: [
      'Care Partners: To fulfill, document, and resolve orders.',
      'Delivery Partners: To conduct pickup and delivery logistics.',
      'Payment Processors & Security: Banks, payment processors, and fraud-prevention providers.',
      'Technology & Service Vendors: Cloud hosting, communications, mapping, analytics, customer-support, cybersecurity, and professional service providers.',
      'Advisors & Financing Partners: Insurers, auditors, accountants, lawyers, and financing partners where appropriate.',
      'Regulators & Legal Authorities: Courts, law enforcement, emergency services, or other parties where required or permitted by law.',
      'Corporate Transactions: A buyer, investor, lender, or successor in connection with a proposed or completed corporate transaction, subject to appropriate safeguards.',
      'Consented Third Parties: Other parties with your direction or consent.',
    ],
  },
  {
    id: 7,
    title: '7. Cross-Border Processing',
    subtitle: 'International Data Storage',
    body: 'Although the Platform operates in Canada, service providers may process or store information in other countries, including the United States. Information in another jurisdiction may be accessible to courts, law enforcement, or national-security authorities under that jurisdiction’s laws. Contact the Privacy Officer for information about service-provider locations and safeguards.',
  },
  {
    id: 8,
    title: '8. Retention',
    subtitle: 'Retention Schedules & Timelines',
    body: 'We retain personal information only as long as reasonably necessary for the identified purposes and legal requirements. Retention schedule summary:',
    bullets: [
      'Account Records: Life of the account plus 24 months.',
      'Transaction & Tax Records: At least 6 years after the relevant fiscal year.',
      'Proof-of-Delivery Photos: 90 days (unless needed for an active dispute).',
      'Support & Claim Records: 24 months after closure.',
      'Marketing Consent Records: For as long as needed to demonstrate compliance.',
      'Security Logs: 12 months (unless an incident requires longer retention).',
    ],
  },
  {
    id: 9,
    title: '9. Security',
    subtitle: 'Technical & Physical Safeguards',
    body: 'We use administrative, technical, and physical safeguards appropriate to the sensitivity of information, which may include access controls, encryption in transit, secure password practices, payment tokenization, vendor review, employee and contractor confidentiality requirements, logging, monitoring, backups, and incident-response processs. No system is completely secure, and users should protect their passwords and devices.',
  },
  {
    id: 10,
    title: '10. Privacy Incidents',
    subtitle: 'Breach Response processs',
    body: 'We maintain processs to identify, contain, investigate, document, and respond to privacy and security incidents. Where legally required, we will notify affected individuals and report to the appropriate privacy regulator. We will keep breach records as required by applicable law.',
  },
  {
    id: 11,
    title: '11. Access and Correction',
    subtitle: 'Data Access & Rights',
    body: 'You may request access to personal information under our control and request correction of inaccurate or incomplete information. We may verify identity and may refuse access only where permitted or required by law, such as where disclosure would reveal another person’s personal information or legally privileged information. We will explain any lawful refusal.',
  },
  {
    id: 12,
    title: '12. Account Deletion',
    subtitle: 'Right to Erasure & Deactivation',
    body: 'You may request account deletion through the app or by contacting support. We will delete or de-identify information that is no longer required, while retaining information necessary for legal, tax, fraud-prevention, dispute, security, or other legitimate purposes.',
  },
  {
    id: 13,
    title: '13. Location Information',
    subtitle: 'GPS & Address Tracking',
    body: 'The app may collect location information to provide address suggestions, estimate arrival, route deliveries, document pickup and delivery, support safety, and prevent fraud. Precise location is collected only when permissions and applicable consent requirements are satisfied. You may control device permissions, although disabling location may reduce functionality.',
  },
  {
    id: 14,
    title: '14. Photos and Images',
    subtitle: 'Operational Evidence Rules',
    body: 'Pickup and delivery photographs are intended to document bags, items, locations, or condition. Delivery Partners should avoid capturing faces, house interiors, licence plates, or unrelated personal information unless necessary for safety or dispute documentation. Customers may contact the Privacy Officer to raise concerns about an image.',
  },
  {
    id: 15,
    title: '15. Analytics and Advertising',
    subtitle: 'Usage Tracking & Consent',
    body: 'We may use analytics tools to understand app performance and use. Behavioural advertising or cross-app tracking will not be activated unless described here, supported by appropriate consent, and accurately reflected in app-store privacy disclosures.',
  },
  {
    id: 16,
    title: '16. Children',
    subtitle: 'Age Eligibility Restrictions',
    body: 'The Platform is not directed to children. We do not knowingly create independent accounts for children who lack capacity to contract. A parent or guardian may place household orders. If we learn that personal information was collected from a child without appropriate authorization, we will take reasonable steps to delete it.',
  },
  {
    id: 17,
    title: '17. Marketing Communications',
    subtitle: 'CASL Anti-Spam Compliance',
    body: 'We send promotional electronic messages only in accordance with Canada’s anti-spam rules (CASL) and other applicable law. Messages will identify the sender and provide an unsubscribe method. Transactional messages about orders, safety, account security, receipts, or legal changes are not promotional and may still be sent where necessary.',
  },
  {
    id: 18,
    title: '18. Changes and Complaints',
    subtitle: 'Policy Updates & Regulatory Contacts',
    body: 'We may update this Privacy Policy and will provide notice of material changes. A privacy complaint may be sent to the Privacy Officer. We will investigate and respond within a reasonable time.\n\nYou may also contact the Office of the Information and Privacy Commissioner for British Columbia (OIPC BC) or the Office of the Privacy Commissioner of Canada (OPC) where applicable.',
  },
];

export const PRIVACY_CONTACT = [
  { label: 'Privacy Officer email', value: 'privacy@spinny.app' },
  { label: 'Support email', value: 'hello@spinny.app' },
  { label: 'Corporate Office Address', value: 'Spinny, Langley, BC, Canada' },
];

// --- About Page Data ("Why Spinny" pillars) ---
export const CORE_VALUES = [
  {
    title: 'Reclaim 5+ Hours a Week',
    description:
      'Wardrobe care, shoe care, ironing, and home-textile upkeep quietly cost the average household a full weekend a month. Spinny buys that time back — permanently, not just this once.',
  },
  {
    title: 'One Service, Entire Wardrobe & Home',
    description:
      'Suits and sneakers. Duvets and diaper bags. Curtains and cashmere. Spinny is the single account for every fabric, leather, and textile surface you own — no juggling five specialists for one household.',
  },
  {
    title: 'Zero-Effort, Doorstep to Doorstep',
    description:
      'Book in under 30 seconds, and a driver handles the rest — door-to-door pickup, closet-ready hanging, drawer-ready folding. Nothing to drop off, nothing to carry further than your own front door.',
  },
  {
    title: 'Investment-Grade Care, Every Time',
    description:
      'Your favourite sneakers and your grandmother’s duvet don’t belong in a machine built for gym socks. Every item is matched to a vetted specialist trained for its exact material.',
  },
];

export const DIFFERENTIATORS = [
  'You choose your own specialist — browse real local businesses by name, rating, distance, and price. Other platforms assign you a facility; Spinny lets you pick.',
  'Centralized pickup scheduling that gets an entire household’s wardrobe, footwear, and home textiles off the calendar in under 30 seconds.',
  'A vetted specialist network spanning leather, suede, rugs, curtains, and delicate fabrics — not a single walk-in shop.',
  'Material-aware workflows that protect what you’ve invested in, from sneakers to a wedding dress.',
  'No forced subscriptions: pay-per-use stays the default, with Spinny Membership as an optional set-and-forget upgrade.',
  'Support that feels human and answers fast, because your time matters after the pickup too.',
];

export const MILESTONES = [
  { year: '2019', label: 'Spinny launched in Canada with a simple promise: buy people back the time chores were quietly taking from them.' },
  { year: '2022', label: 'Coverage expanded past clothes into footwear, leather goods, and home textiles — because a household’s time gets eaten by more than one category of chore.' },
  { year: '2026', label: 'Now live across major Canadian metro areas with 200+ vendor partners, the platform supports households, offices, and partner fleets across a full wardrobe-and-home ecosystem — bought-back hours, at scale.' },
];

// --- About Page: Social Proof Stats ---
export const ABOUT_STATS = [
  { value: '6,000+', label: 'Five-star reviews' },
  { value: '99.2%', label: 'Customer satisfaction' },
  { value: '50,000+', label: 'Items cared for monthly' },
  { value: '200+', label: 'Vendor partners across Canada' },
  { value: '80+', label: 'Services, one app' },
];

// --- About Page: Three-Sided Marketplace ---
export const ABOUT_ECOSYSTEM = [
  {
    role: 'Customers',
    title: 'Get your time back',
    description:
      'Busy professionals, families, students, and anyone who values their weekend. One app, one account, for a household’s entire wardrobe and home — no juggling five separate errands.',
  },
  {
    role: 'Vendors',
    title: 'Grow beyond walk-ins',
    description:
      'Independent care businesses — dry cleaners, footwear and leather specialists, home-textile cleaners, and tailors. Spinny brings online order flow and delivery infrastructure to businesses that couldn’t build it alone.',
  },
  {
    role: 'Drivers',
    title: 'Flexible, optimized routes',
    description:
      'Independent drivers handle pickup and delivery logistics with optimized batch routing — flexible gig-economy work that keeps every vendor’s doorstep promise on schedule.',
  },
];

// --- process Page Data ---
export const USER_GROUPS = [
  {
    title: 'Customers',
    eyebrow: 'Customer registration',
    sample: 'Example: Maya Chen, condo resident, downtown Toronto',
    steps: [
      'Create an account with name, mobile number, and email address.',
      'Add your pickup address, preferred service window, and delivery notes such as buzzer code or concierge desk instructions.',
      'Choose your first service and specialist — everyday wardrobe care, dry cleaning, footwear revival, or a home-textile pickup.',
      'Confirm the order details, review the summary, and receive status notifications by email or text.',
    ],
    requirements: [
      'Valid contact details for account verification.',
      'A pickup location that is inside the service area.',
      'Basic order preferences so the team knows how to handle your items.',
    ],
  },
  {
    title: 'Vendors',
    eyebrow: 'Vendor registration',
    sample: 'Example: Riverstone Garment Care, boutique processing partner',
    steps: [
      'Submit business details, ownership information, and facility location.',
      'Upload compliance documents, insurance certificates, and operating licenses if required.',
      'Complete an onboarding call to review service standards, turnaround expectations, and quality control processs.',
      'Receive a partner code, access credentials, and the first batch assignment once approval is completed.',
    ],
    requirements: [
      'Registered business name and contact person.',
      'Proof of capability, capacity, and service coverage.',
      'Agreement to Spinny quality and communication standards.',
    ],
  },
  {
    title: 'Drivers',
    eyebrow: 'Driver registration',
    sample: 'Example: Alex Romero, route driver with refrigerated delivery experience',
    steps: [
      'Create a driver profile with identity details and vehicle information.',
      'Upload license, insurance, and any required background check documentation.',
      'Complete route orientation, pickup handling training, and app access setup.',
      'Activate the account after approval and start accepting scheduled routes and pickup tasks.',
    ],
    requirements: [
      'Valid driver’s license and insured vehicle details.',
      'Ability to follow pickup and delivery handling instructions.',
      'Reliable availability for scheduled routes and status updates.',
    ],
  },
];

export const PROCESS_PILLS = [
  'Clear sign-up flow',
  'Dummy data shown for illustration',
  'Requirements listed before submission',
];

// --- Help Center Stats ---
export const HELP_STATS = [
  { label: 'Average response', value: 'Most support requests are reviewed within one business day, whatever the item.' },
  { label: 'Self-service', value: 'Use the FAQ below for the fastest answers to common questions.' },
  { label: 'Direct help', value: 'Send feedback when your issue needs more detail or follow-up.' },
];

// --- Home Page Marquees ---
export const HOME_MARQUEE_1 = [
  'Buy Back Your Time',
  'Wardrobe, Footwear & Home',
  'Choose Your Own Specialist',
  'Real-Time Order Tracking',
  '100% Satisfaction Guaranteed',
];

export const HOME_MARQUEE_2 = [
  '5+ Hours Reclaimed Weekly',
  'Leather, Suede & Home Textiles',
  'Set-and-Forget Membership',
  'Any Specialist, Any Service',
  '80+ Services, Your Whole City',
];

// --- Service Ecosystem (lifestyle categories, not one narrow category) ---
export const SERVICE_ECOSYSTEM = [
  {
    id: 'wardrobe',
    title: 'Wardrobe & Workwear Care',
    tagline: 'Everything that hangs in your closet, pressed and returned exactly how you like it.',
    items: ['Everyday shirts & separates', 'Suits & formalwear', 'Dresses & delicates', 'Workwear & uniforms'],
    timeBack: 'No more Sunday-night ironing marathons.',
  },
  {
    id: 'footwear',
    title: 'Footwear & Accessory Revival',
    tagline: 'Restoration-grade care for the pieces that took the longest to save up for.',
    items: ['Sneakers & trainers', 'Leather & suede boots', 'Handbags & leather goods', 'Hats & belts'],
    timeBack: 'Skip the cobbler queue entirely.',
  },
  {
    id: 'home',
    title: 'Home & Sanctuary Care',
    tagline: 'The bulky textiles that turn a Saturday into a chore — picked up, never carried.',
    items: ['Duvets & comforters', 'Curtains & drapes', 'Area rugs', 'Cushions & throws'],
    timeBack: 'No trunk full of rugs, no ladder for the curtain rail.',
  },
  {
    id: 'special-care',
    title: 'Special Care & Tailoring',
    tagline: 'For the items that matter too much to trust to a standard cycle.',
    items: ['Baby & nursery textiles', 'Pet beds & blankets', 'Wedding dress preservation', 'On-demand alterations'],
    timeBack: 'Expert care, without the research.',
  },
];

// --- Hours Ledger (DIY vs. Spinny contrast table) ---
export const HOURS_LEDGER_ROWS = [
  { task: 'Wash, dry & fold wardrobe', diy: '7 hrs / mo', spinny: '2 min (schedule)' },
  { task: 'Dry cleaner drop-off & pickup', diy: '2 hrs / mo', spinny: '0 min — at your door' },
  { task: 'Shoe & leather care', diy: '2 hrs / mo', spinny: '0 min' },
  { task: 'Ironing & pressing', diy: '4 hrs / mo', spinny: '0 min' },
  { task: 'Home textiles — rugs, curtains, duvets', diy: '4 hrs / mo', spinny: '0 min' },
  { task: 'Ad-hoc runs — alterations, baby & pet gear', diy: '1.5 hrs / mo', spinny: '0 min' },
];

export const HOURS_LEDGER_TOTAL = { task: 'Total monthly load', diy: '~20.5 hrs', spinny: '~2 min' };

export const HOURS_LEDGER_FOOTNOTE =
  'Estimates reflect a typical household’s combined maintenance load, including transit time. Your mileage — literally — will vary.';

// --- Membership / Footer Hook ---
export const MEMBERSHIP_CONTENT = {
  eyebrow: 'Spinny Membership',
  heading: 'A Set-and-Forget Time Investment.',
  description:
    'Membership puts your entire wardrobe and home on autopilot. Recurring pickups on your schedule, priority concierge turnaround, and member rates across every category — clothes, footwear, and home — billed as one predictable line, not five separate errands.',
  perks: [
    'Recurring pickups: weekly, bi-weekly, or monthly',
    'Priority turnaround across all categories',
    'Member pricing on footwear, leather & home textiles',
    'One flat plan instead of five disconnected errands',
  ],
  cta: { label: 'Become a Member', url: '/contact' },
};

// --- App Page ---
export const APP_HERO_CONTENT = {
  eyebrow: 'Spinny Mobile',
  heading: 'Your time, in your pocket.',
  description:
    'Book a pickup for anything — clothes, sneakers, or a duvet — track your driver, and manage every order from one app.',
  backgroundImage: '/frames/ezgif-frame-031.jpg',
  accentText: 'Available soon for iOS and Android.',
};

export const APP_FEATURES = [
  {
    title: '30-second booking',
    desc: 'Add your address, pick a window, and you’re done. Thirty seconds of your day, not thirty minutes.',
    image: '/F1.jpg',
  },
  {
    title: 'Live driver tracking',
    desc: 'Watch your pickup and delivery move in real time, from door to door.',
    image: '/F2.jpg',
  },
  {
    title: 'In-app messaging',
    desc: 'Message your driver directly for buzzer codes, gate access, or special instructions.',
    image: '/F1.jpg',
  },
  {
    title: 'Order history, one tap away',
    desc: 'Reorder your last pickup, revisit past invoices, and manage preferences instantly.',
    image: '/F2.jpg',
  },
];

// --- Pricing Page ---
export const PRICING_HERO_CONTENT = {
  eyebrow: 'Pricing',
  heading: 'Pay for time bought back. Nothing more.',
  description:
    'No monthly passes, no minimum spend — pay only for the pickups you book, or set it once with membership.',
  backgroundImage: '/frames/ezgif-frame-105.jpg',
  buttons: [
    { label: 'Schedule a pickup', url: '/contact' },
    { label: 'See how it works', url: '/process', variant: 'secondary' },
  ],
  accentText: 'Final pricing is confirmed at checkout based on service type and item count.',
};

export const PRICING_TIERS = [
  {
    title: 'Wash & Fold',
    desc: 'Everyday wardrobe items, cleaned, dried, and neatly folded per bag.',
  },
  {
    title: 'Dry Clean Press',
    desc: 'Delicate fabrics and formalwear, professionally pressed and packaged.',
  },
  {
    title: 'Wash & Iron Press',
    desc: 'Crisp, pressed finishing for shirts and everyday wear.',
  },
  {
    title: 'Footwear & Home Textiles',
    desc: 'Sneakers, leather goods, rugs, curtains, and duvets — restored and returned, picked up at your door.',
  },
];

// --- Careers Page ---
export const CAREERS_HERO_CONTENT = {
  eyebrow: 'Careers',
  heading: 'Help us give people their time back.',
  description:
    'We’re growing across Canada — across garment care, footwear revival, and home textiles — and always open to hearing from great people.',
  backgroundImage: '/frames/ezgif-frame-144.jpg',
  buttons: [
    { label: 'Get in touch', url: '/contact' },
  ],
  accentText: 'Send us a note through the contact page and tell us how you’d like to help.',
};

// --- Terms of Service Page ---
export const TERMS_HERO_CONTENT = {
  eyebrow: 'Spinny • Legal Suite',
  heading: 'Master Consumer Terms of Use',
  description:
    'These Terms of Use (Part A) form a binding agreement between you and Spinny, governing your access to and use of the Spinny platform, mobile applications, website, and pickup & delivery services.',
  backgroundImage: '/frames/ezgif-frame-008.jpg',
};

export const TERMS_SECTIONS = [
  {
    id: 1,
    title: '1. Agreement and Acceptance',
    subtitle: 'Binding Legal Contract',
    body: 'These Terms of Use (the “Terms”) form a binding agreement between you and Spinny, a British Columbia corporation with an address at Unit 120, 5710 201 Street, Langley, British Columbia V3A 8A8, Canada (“Spinny,” “we,” “us,” or “our”). They govern your access to and use of the Spinny mobile application, website, customer support channels, pickup and delivery coordination services, and related technology (collectively, the “Platform”).\n\nBy creating an account, selecting an acceptance box, placing an order, or otherwise using the Platform, you confirm that you have read, understood, and agreed to these Terms and the policies incorporated by reference. If you do not agree, do not use the Platform. Electronic acceptance and electronic records have the same effect as acceptance and records in writing, subject to applicable law.',
  },
  {
    id: 2,
    title: '2. Platform Role and Marketplace Structure',
    subtitle: 'Independent Partners & Logistics',
    body: 'The Platform is a technology marketplace and logistics coordination service. It enables customers to request pickup and delivery of clothing, linens, and other eligible items and to obtain care services from participating third-party specialist businesses (“Care Partners”).\n\nCare services are performed by independent Care Partners, not by Spinny. Pickup and delivery may be performed by independent delivery contractors (“Delivery Partners”). Care Partners and Delivery Partners are independent businesses or contractors and are not employees, agents, joint venturers, franchisees, or representatives of Spinnysolely because they use the Platform.\n\nSpinnymay facilitate communications, payments, refunds, quality reviews, and dispute handling. This facilitation does not make Spinnythe provider of the underlying care or dry-cleaning service and does not remove any rights or remedies that cannot lawfully be excluded.',
  },
  {
    id: 3,
    title: '3. Eligibility and Accounts',
    subtitle: 'Capacity & Security',
    body: 'You must have legal capacity to enter into a contract in your province or territory. A minor may use the Platform only through an account controlled by a parent or legal guardian who accepts responsibility for all activity.\n\nYou must provide accurate, current, and complete information and keep your login credentials secure. You are responsible for orders and activity conducted through your account unless you promptly report unauthorized access. We may require identity, payment, or address verification and may refuse or limit service where reasonably necessary for safety, fraud prevention, legal compliance, or operational reasons.',
  },
  {
    id: 4,
    title: '4. Service Availability',
    subtitle: 'Operational Coverage',
    body: 'The Platform may not be available in every city, postal code, or province. Service areas, hours, turnaround estimates, participating Care Partners, available service types, and delivery windows may change. Displayed pickup, processing, and delivery times are estimates unless expressly stated as guaranteed.\n\nWe may pause, modify, or discontinue features or service areas. Where a paid order is materially affected, we will provide an appropriate remedy as required by these Terms and applicable law.',
  },
  {
    id: 5,
    title: '5. Orders and Customer Instructions',
    subtitle: 'Special Instructions & Care Requirements',
    body: 'An order is a request for the selected services at the prices and fees shown before confirmation. We may reject or cancel an order if a service is unavailable, an item is prohibited, the address is unsafe or inaccessible, payment cannot be authorized, suspected fraud exists, or the order cannot reasonably be completed.\n\nYou must provide complete and accurate information about fabric type, stains, allergies, sensitivities, valuable or delicate items, designer items, colour-fastness concerns, and any special care requirements. Special requests are not guaranteed unless expressly accepted in the order record. Care Partners may rely on garment care labels and standard professional practices.',
  },
  {
    id: 6,
    title: '6. Eligible and Prohibited Items',
    subtitle: 'Safety & Hazardous Items Policy',
    body: 'Eligible items generally include ordinary clothing, household linens, and other items accepted in the app. The following must not be included unless the Platform expressly authorizes them: hazardous, biohazardous, contaminated, pest-infested, illegal, stolen, explosive, flammable, corrosive, radioactive, or sharp items; items containing bodily fluids beyond ordinary household soiling; wet items likely to mildew; items containing controlled substances; and any item that may endanger a person, vehicle, premises, or other property.\n\nWe may refuse, isolate, return, safely dispose of, or report prohibited items as reasonably necessary. You are responsible for direct losses and reasonable costs caused by knowingly or negligently including prohibited items, subject to applicable law.',
  },
  {
    id: 7,
    title: '7. Pockets and Personal Property',
    subtitle: 'Inspection Responsibility',
    body: 'You must check and empty every pocket, bag, cover, and compartment before pickup. Do not include cash, jewellery, watches, keys, identification, passports, payment cards, electronics, medication, legal documents, sentimental items, or other valuables.\n\nTo the maximum extent permitted by law, Spinny, Care Partners, and Delivery Partners are not responsible for property left inside or attached to submitted items. If property is found, we may attempt to return it, but recovery is not guaranteed and reasonable delivery or handling charges may apply.',
  },
  {
    id: 8,
    title: '8. Pricing, Taxes and Fees',
    subtitle: 'Transparent Fee Disclosures',
    body: 'Prices may be based on weight, item count, service type, distance, speed, time, minimum order amount, special handling, or other disclosed factors. The final amount may change where the actual weight, item category, or requested service differs from the customer’s selection. Material adjustments will be shown or communicated before processing where reasonably practicable.\n\nAll mandatory non-government fees will be disclosed before order confirmation. Applicable sales taxes and government-imposed charges may be added. Optional tips, if offered, are voluntary. Promotions are subject to stated conditions and may not be combined unless expressly allowed.',
  },
  {
    id: 9,
    title: '9. Payment Authorization',
    subtitle: 'Credit/Debit Card Charges',
    body: 'You authorize Spinnyand its payment processors to charge the payment method connected to your account for the order total, approved adjustments, taxes, cancellation charges, redelivery charges, and other amounts clearly disclosed under these Terms. We do not store full payment-card numbers; payment information is tokenized and handled by third-party payment processors.\n\nA temporary authorization hold may be placed before final settlement. You must maintain a valid payment method. We may pause service, seek payment, reverse credits, or suspend an account for unpaid balances, fraudulent chargebacks, or misuse.',
  },
  {
    id: 10,
    title: '10. Cancellations',
    subtitle: 'Pre & Post Dispatch Rules',
    body: 'You may cancel through the Platform or customer support. Unless the checkout screen states otherwise: cancellation is free before a Delivery Partner is assigned or dispatched; a disclosed cancellation fee may apply after dispatch; and once cleaning or processing has begun, amounts already earned or incurred may be non-refundable unless the order is defective, cannot be completed, or applicable law requires otherwise.\n\nWe may cancel an order for safety, fraud, unavailability, payment failure, prohibited items, incorrect information, inaccessible premises, or other reasonable operational grounds. If we cancel for reasons not caused by you, we will refund unearned amounts.',
  },
  {
    id: 11,
    title: '11. Pickup Requirements',
    subtitle: 'Preparation & Safe Access',
    body: 'You must package and label items as instructed and ensure they are ready during the scheduled window. You must provide safe, lawful access to the pickup location and restrain pets. A Delivery Partner is not required to enter a private residence.\n\nIf no one is available and you authorized unattended pickup, the order is considered received when the Delivery Partner documents collection from the authorized location. Risk associated with an unsecured or unsuitable unattended location remains with you to the extent permitted by law.',
  },
  {
    id: 12,
    title: '12. Delivery and Unattended Drop-off',
    subtitle: 'Drop-off Rules & Risk',
    body: 'You must ensure the delivery address is accurate and accessible. Where you authorize unattended delivery, delivery is deemed completed when the order is placed at the authorized location and documented through time, location, photo, or other delivery evidence.\n\nWe are not responsible for theft, weather damage, building access problems, or other loss occurring after a properly completed unattended delivery, except to the extent caused by our failure to follow your authorized instructions or where liability cannot legally be excluded. Failed delivery, storage, and redelivery charges may apply if disclosed.',
  },
  {
    id: 13,
    title: '13. Photos, Scans and Order Evidence',
    subtitle: 'Chain of Custody Documentation',
    body: 'We, Care Partners, and Delivery Partners may take photographs, scan labels or bags, record timestamps, and collect approximate or precise location data where enabled to document pickup, condition, processing, delivery, safety incidents, and disputes. Images should avoid unnecessary capture of people or the interior of a residence.\n\nCollection and use of this information are governed by the Privacy Policy. You must not use the Platform to photograph or record another person unlawfully.',
  },
  {
    id: 14,
    title: '14. Cleaning Risks and Customer Acknowledgements',
    subtitle: 'Inherent Professional Risks',
    body: 'Professional cleaning involves inherent risks. Results may be affected by fabric composition, age, previous treatment, hidden defects, weak seams, dyes, embellishments, adhesive, zippers, buttons, care labels, and the nature or duration of stains. Complete stain removal is not guaranteed.\n\nSubject to applicable law, Spinnyand Care Partners are not responsible for ordinary wear and tear; pre-existing damage; normal colour loss or fading; shrinkage or distortion consistent with an inaccurate or missing care label; damage caused by manufacturer defects or weak materials; loss of buttons, beads, sequins, or attachments that were loose or defective; or failure to remove stains that cannot reasonably be removed without risking damage.',
  },
  {
    id: 15,
    title: '15. Inspection and Problem Reporting',
    subtitle: '48-Hour Reporting Window',
    body: 'Inspect your order promptly after delivery. Report a missing item, wrong item, visible damage, delivery issue, or material service problem through the Platform within 48 hours after delivery, or as soon as reasonably possible where the problem could not be discovered earlier. Include the order number, description, photographs, receipts if available, and any other requested information.\n\nA short reporting period helps preserve evidence but does not eliminate rights that cannot legally be waived. You must retain the affected item and avoid further cleaning, alteration, repair, or disposal until the investigation is complete, unless reasonably necessary to prevent further damage.',
  },
  {
    id: 16,
    title: '16. Refunds, Recleaning and Credits',
    subtitle: 'Customer Remedies',
    body: 'Where a service issue is substantiated, we may arrange re-cleaning, return the item to the Care Partner, issue an account credit, refund some or all of the affected service charge, reimburse reasonable repair costs, or provide compensation under the Lost, Damaged and Problem Garment Policy. The appropriate remedy depends on the circumstances and applicable law.\n\nSpinnymay recover amounts from the responsible Care Partner under the partner agreement. A customer’s remedy is not conditional on Spinnysuccessfully collecting from the Care Partner where applicable law requires Spinnyto provide the remedy.',
  },
  {
    id: 17,
    title: '17. Lost or Damaged Items - Liability Framework',
    subtitle: 'Depreciated Value Cap ($300 CAD)',
    body: 'Compensation for a confirmed lost or irreparably damaged garment is based on the item’s fair depreciated value, not replacement-new or sentimental value. Unless prohibited by law, compensation for an affected item will not exceed the lowest of: (a) documented fair market value immediately before the loss; (b) ten times the cleaning charge allocated to that item; or (c) CAD $300 per order.\n\nThis limit does not apply to fraud, wilful misconduct, gross negligence where limitation is prohibited, personal injury, statutory consumer rights, or any liability that cannot legally be limited. High-value items should not be submitted unless the Platform offers and you purchase a specific declared-value service.',
  },
  {
    id: 18,
    title: '18. Third-Party Services',
    subtitle: 'External Providers',
    body: 'The Platform may use or link to payment processors, map providers, analytics vendors, app stores, communications providers, and other third parties. Their services may be governed by separate terms. We are not responsible for third-party services outside our control, but we remain responsible for our own obligations and for service providers as required by privacy and consumer law.',
  },
  {
    id: 19,
    title: '19. Promotions and Referral Programs',
    subtitle: 'Rules & Fraud Limits',
    body: 'Promotions, discounts, referral credits, and loyalty benefits have no cash value unless required by law. They may be limited by account, household, device, geography, date, service, or other stated conditions. We may withhold or reverse benefits obtained through error, duplicate accounts, self-referral, fraud, or manipulation. Material promotion terms will be disclosed when offered.',
  },
  {
    id: 20,
    title: '20. Customer Conduct and Safety',
    subtitle: 'Community Code of Conduct',
    body: 'You must treat customer-support personnel, Delivery Partners, and Care Partner staff respectfully and must not threaten, harass, discriminate against, stalk, assault, exploit, or interfere with any person. You must not use the Platform for unlawful activity, fraud, unauthorized commercial resale, or to transmit malware or abusive content.\n\nWe may take proportionate safety measures, including ending an interaction, refusing service, preserving evidence, contacting emergency services or law enforcement, and suspending or terminating accounts.',
  },
  {
    id: 21,
    title: '21. Account Suspension and Termination',
    subtitle: 'Account Enforcement',
    body: 'We may warn, restrict, suspend, or terminate access where we reasonably believe there has been fraud, abusive behaviour, repeated payment failure, chargeback abuse, prohibited-item activity, safety risk, legal violation, misuse of promotions, material breach, or conduct harmful to the Platform community. Where appropriate, we will provide notice and an opportunity to respond.\n\nYou may stop using the Platform and request account closure. Provisions concerning payment, claims, intellectual property, privacy, dispute resolution, and limitations survive termination as necessary.',
  },
  {
    id: 22,
    title: '22. Intellectual Property and Licence',
    subtitle: 'Limited License',
    body: 'Spinnyand its licensors own the Platform, software, designs, text, trademarks, logos, data compilations, and related intellectual property. Subject to these Terms, we grant you a personal, limited, revocable, non-exclusive, non-transferable licence to use the consumer Platform for lawful personal purposes.\n\nYou may not copy, sell, sublicense, scrape, reverse engineer, circumvent security, create derivative works, access non-public systems, or use the Platform to build a competing product except where applicable law expressly permits.',
  },
  {
    id: 23,
    title: '23. User Content and Feedback',
    subtitle: 'Submission License',
    body: 'You retain ownership of reviews, messages, photographs, and other content you submit. You grant Spinnya worldwide, non-exclusive, royalty-free licence to host, reproduce, adapt, display, and use that content to provide, secure, improve, and promote the Platform, subject to the Privacy Policy and your legal rights.\n\nYou must have the right to submit the content and must not submit unlawful, misleading, defamatory, infringing, private, or harmful material. Feedback and suggestions may be used without compensation or restriction.',
  },
  {
    id: 24,
    title: '24. Disclaimers',
    subtitle: 'As-Available Provision',
    body: 'The Platform is provided on an “as available” basis. We do not guarantee uninterrupted access, specific Care Partner availability, complete stain removal, exact timing, or error-free software. Estimates, ratings, and descriptions are informational and may change.\n\nNothing in these Terms excludes warranties, conditions, guarantees, or remedies imposed by consumer protection law that cannot be excluded. Any disclaimer applies only to the maximum extent permitted by law.',
  },
  {
    id: 25,
    title: '25. Limitation of Liability',
    subtitle: 'Liability Caps',
    body: 'To the maximum extent permitted by law, Spinnywill not be liable for indirect, incidental, special, exemplary, punitive, or consequential losses, including lost profits, loss of opportunity, or loss of data, arising from use of the Platform.\n\nExcept for payment or compensation obligations expressly stated in these Terms, Spinny’s aggregate liability arising from an order will not exceed the greater of: (a) amounts paid to Spinnyfor that order; or (b) the compensation available under the Lost, Damaged and Problem Garment Policy.',
  },
  {
    id: 26,
    title: '26. Indemnity',
    subtitle: 'Indemnification Rules',
    body: 'To the extent permitted by law, you will indemnify Spinnyagainst third-party claims, losses, and reasonable costs arising from your unlawful use of the Platform, intentional misconduct, knowing inclusion of dangerous or prohibited items, infringement of another person’s rights, or material breach of these Terms. This clause does not require you to indemnify Spinnyfor its own negligence, breach, or unlawful conduct.',
  },
  {
    id: 27,
    title: '27. Informal Dispute Resolution',
    subtitle: '30-Day Negotiation Requirement',
    body: 'Before starting arbitration or court proceedings, the claimant must send a written notice describing the dispute, relevant order, requested remedy, and contact information to hello@spinny.app or by mail to Spinny, Unit 120, 5710 201 Street, Langley, BC V3A 8A8.\n\nThe parties will attempt in good faith to resolve the dispute for at least 30 days after receipt of a complete notice. Either party may request a telephone or video conference. This process does not prevent either party from seeking urgent injunctive relief, preserving a limitation period, reporting to a regulator, or using a statutory complaint process.',
  },
  {
    id: 28,
    title: '28. Arbitration Agreement - Subject to Applicable Law',
    subtitle: 'Arbitration & Class Action Waiver',
    body: 'After completing informal resolution, and except for matters permitted in small claims court, requests for urgent injunctive relief, statutory complaints, and disputes that applicable law does not permit to be arbitrated, either party may elect final and binding arbitration. Arbitration will be administered in British Columbia by ADR Institute of Canada, the Vancouver International Arbitration Centre, or another mutually agreed Canadian provider under its applicable consumer or expedited rules. The seat will be Vancouver, British Columbia, the language will be English unless law requires otherwise, and remote participation will be permitted where reasonable.\n\nA consumer may opt out of this arbitration agreement by sending written notice to privacy@spinny.app within 30 days after first accepting these Terms.',
  },
  {
    id: 29,
    title: '29. Governing Law and Courts',
    subtitle: 'Jurisdiction: British Columbia, Canada',
    body: 'These Terms are governed by the laws of British Columbia and the federal laws of Canada applicable there, without regard to conflict-of-laws rules. This choice does not deprive a consumer of mandatory protections of the province or territory where the consumer resides.\n\nFor disputes not resolved by arbitration, the parties submit to the courts of British Columbia, except where applicable consumer law permits or requires proceedings elsewhere or the matter qualifies for another competent tribunal or small claims court.',
  },
  {
    id: 30,
    title: '30. Changes to Terms',
    subtitle: 'Notice of Updates',
    body: 'We may update these Terms for legal, security, operational, or service reasons. We will provide notice of material changes through the Platform, email, or another reasonable method before they take effect where required. Changes will not retroactively remove accrued rights. Continued use after the effective date constitutes acceptance where permitted by law; otherwise, we will request fresh consent.',
  },
  {
    id: 31,
    title: '31. General',
    subtitle: 'Severability & Entire Agreement',
    body: 'If a provision is unenforceable, it will be modified to the minimum extent necessary or severed, and the remaining provisions continue. Failure to enforce a provision is not a waiver. You may not assign these Terms without our consent; we may assign them as part of a merger, financing, reorganization, sale, or transfer of the Platform, subject to applicable law.\n\nThese Terms, together with incorporated policies and order-specific disclosures, form the entire agreement regarding consumer use of the Platform.',
  },
  {
    id: 32,
    title: '32. Contact Information',
    subtitle: 'Corporate Address & Contacts',
    body: 'Spinny\nUnit 120, 5710 201 Street, Langley, British Columbia V3A 8A8, Canada\nCustomer Support: hello@spinny.app\nLegal Notices & Disputes: privacy@spinny.app\nPrivacy Officer: privacy@spinny.app',
  },
];

// --- Cookie Policy Page ---
export const COOKIE_HERO_CONTENT = {
  eyebrow: 'Cookie & Tracking Notice',
  heading: 'Part J — Cookie and Tracking Technologies Notice',
  description:
    'How Spinny uses cookies, SDKs, local storage, and tracking technologies across the Spinny website and mobile application.',
  backgroundImage: '/frames/ezgif-frame-031.jpg',
};

export const COOKIE_CATEGORIES = [
  {
    title: '1. Technologies Used',
    desc: 'The website and app may use cookies, local storage, software development kits (SDKs), pixels, and similar technologies for authentication, security, preferences, analytics, crash reporting, attribution, and marketing.',
  },
  {
    title: '2. Strictly Necessary & Core Functionality',
    desc: 'Strictly necessary technologies support login, security, checkout, and core functionality. These cannot be disabled as they are required for service operation.',
  },
  {
    title: '3. Preferences & Settings',
    desc: 'Preference technologies remember settings, language, saved pickup locations, and operational preferences.',
  },
  {
    title: '4. Analytics & Performance',
    desc: 'Analytics technologies measure performance and feature usage to help us troubleshoot and improve the Platform.',
  },
  {
    title: '5. Controls & Undisclosed Tracking Policy',
    desc: 'Users may control browser cookies, device advertising settings, app tracking permissions, and consent choices. We do not include advertising or cross-app tracking software in the production app unless disclosed, consented to where required, and reflected in Apple and Google privacy declarations.',
  },
];

// --- Accessibility Page ---
export const ACCESSIBILITY_HERO_CONTENT = {
  eyebrow: 'Accessibility',
  heading: 'Built to work for everyone.',
  description:
    'We aim to meet WCAG 2.1 AA across our website and app — and welcome feedback.',
  backgroundImage: '/frames/ezgif-frame-105.jpg',
  buttons: [
    { label: 'Report an issue', url: '/contact' },
  ],
};

// --- Service Areas Page ---
export const SERVICE_AREAS_HERO_CONTENT = {
  eyebrow: 'Service Areas',
  heading: 'Where Spinny operates today.',
  description:
    'Live in major Canadian metro areas and expanding.',
  backgroundImage: '/frames/ezgif-frame-144.jpg',
  buttons: [
    { label: 'Schedule a pickup', url: '/contact' },
  ],
};

export const SERVICE_AREAS = [
  { city: 'Toronto', region: 'Ontario' },
  { city: 'Vancouver', region: 'British Columbia' },
  { city: 'Montreal', region: 'Quebec' },
  { city: 'Calgary', region: 'Alberta' },
  { city: 'Ottawa', region: 'Ontario' },
  { city: 'Edmonton', region: 'Alberta' },
];

// --- Status Page ---
export const STATUS_HERO_CONTENT = {
  eyebrow: 'System Status',
  heading: 'All systems operational.',
  description: 'This page reflects the current status of Spinny booking, tracking, and payment systems.',
  backgroundImage: '/frames/ezgif-frame-008.jpg',
};

export const STATUS_SYSTEMS = [
  'Booking & scheduling',
  'Driver dispatch & tracking',
  'Payments & checkout',
  'Vendor partner portal',
  'Notifications (email & SMS)',
];

// --- Claim Policy Page ---
export const CLAIM_POLICY_HERO = {
  eyebrow: 'Spinny • Dispute Resolution & Support',
  heading: 'Claim Policy',
  description:
    'Official Dispute Resolution, SLA Categorization, and Depreciation & Compensation Policy for Spinny Garment Care Services across Canada.',
  backgroundImage: '/frames/ezgif-frame-008.jpg',
};

export const CLAIM_CATEGORIES = [
  {
    category: 'Category 1: Investigation & Claim (Garment Issues)',
    applicable:
      'Garment Damage, Garment Lost, Garment Missing, Wrong Deliveries, Color Bleeding, Color Fading, Shrinkage, Burn Mark Damage, Stain Not Removed, Foul Odors, Poor Ironing, and Missing Buttons.',
    sla: '48 to 72 Hours',
    badgeColor: 'amber',
    process:
      'Support requests purchase receipts and photographic evidence. The laundry vendor is notified to investigate and revert within 48 hours. If service failure is established, claims are processed via refund or structured depreciation compensation.',
  },
  {
    category: 'Category 2: Operational Delays (Check-Expedite-Apology)',
    applicable: 'Pickup Delays, Delivery Delays, and Logistics Routing Bottlenecks.',
    sla: 'Strictly within 2 Hours (120 Minutes)',
    badgeColor: 'blue',
    process:
      'Logistics dispatch contacts the driver, tracks real-time location, expedites transit, and issues a formal delivery update and apology ticket to the customer.',
  },
  {
    category: 'Category 3: Investigation & Action (Driver Misconduct & Safety)',
    applicable: 'Driver Misconduct, Professional Conduct Violations, and Customer Privacy Issues.',
    sla: 'High Priority (Immediate Escalation)',
    badgeColor: 'rose',
    process:
      'Incident ticket is created and immediately escalated to the Driver Fleet Operations Manager. Communication logs are audited, formal warning notices issued, and driver payout profiles flagged for commission impact or internal sanctions.',
    privacyNote:
      'Customer and driver contact numbers are strictly masked via platform routing services to maintain data privacy at all times.',
  },
];

export const DEPRECIATION_TABLE = [
  { age: 'Less than 6 Months', depreciation: '0%', compensation: '100%' },
  { age: '6 Months – 1 Year', depreciation: '20%', compensation: '80%' },
  { age: '1 Year – 2 Years', depreciation: '30%', compensation: '70%' },
  { age: '2 Years – 3 Years', depreciation: '40%', compensation: '60%' },
  { age: '3 Years – 5 Years', depreciation: '60%', compensation: '40%' },
  { age: 'Over 5 Years', depreciation: '90%', compensation: '10%' },
  { age: 'No Receipt Provided', depreciation: 'N/A', compensation: '0% (Claim Declined)' },
];

export const SLA_MATRIX = [
  { stage: 'Ticket Generation & Email Acknowledgement', sla: 'Immediate / Within 30 Minutes' },
  { stage: 'Logistics & Operational Issue Resolution', sla: 'Within 2 Hours (Target < 120 Mins)' },
  { stage: 'Vendor Investigation Window', sla: 'Within 48 Hours' },
  { stage: 'Final Investigation & Claim Decision', sla: '48 – 72 Hours' },
  { stage: 'Refund / Compensation Processing', sla: 'As per platform payout and payment gateway schedule' },
];
