// Centralized Project Datasets

// --- Hero Contents ---
export const ABOUT_HERO_CONTENT = {
  eyebrow: 'About Us',
  heading: 'Not a Laundry Company. A Time-Buyback Service.',
  description:
    'Spinny takes care of your entire wardrobe and home — from suits and sneakers to duvets and diaper bags — so the hours it used to cost are yours again.',
  backgroundImage: '/frames/ezgif-frame-008.jpg',
  buttons: [
    { label: 'Contact us', url: '/contact' },
    { label: 'See procedure', url: '/procedure', variant: 'secondary' },
  ],
  accentText:
    'For households and commercial teams who want their weekends back, not just clean clothes.',
};

export const CONTACT_HERO_CONTENT = {
  eyebrow: 'Contact Spinny',
  heading: 'Facing an issue with your order?',
  description:
    'Questions about orders, vendors, or service — for anything from garments to footwear and home textiles? Send a message and our team will get back to you fast.',
  backgroundImage: '/frames/ezgif-frame-014.jpg',
  buttons: [
    { label: 'Email support', url: 'mailto:hello@spinny.example' },
    { label: 'View procedure', url: '/procedure', variant: 'secondary' },
  ],
  accentText:
    'Most replies land within one business day.',
};

export const PROCEDURE_HERO_CONTENT = {
  eyebrow: 'Procedure',
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
  heading: 'One pickup. Everything handled.',
  description:
    'Shirts, suits, sneakers, duvets, and bags </br>- all cleaned and cared for by specialists, then returned ready to use.',
  backgroundImage: '/frames/ezgif-frame-031.jpg',
  buttons: [
    { label: 'Get the app', url: '/app' },
    { label: 'View procedure', url: '/procedure', variant: 'secondary' },
  ],
  accentText:
    'Handled by trained specialists across commercial-grade facilities, matched to each material.',
};

export const HELP_CENTER_HERO_CONTENT = {
  eyebrow: 'Help Center',
  heading: 'Support that is easy to find and simple to use.',
  description:
    'Quick answers to common questions — on orders, garments, footwear, or home items — plus a direct line to our team.',
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
    { label: 'Send feedback', url: '#feedback' },
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
    body: 'This Privacy Policy explains how Spinny collects, uses, discloses, stores, and protects personal information through the Spinny Platform. It applies to customers, prospective customers, website visitors, customer-support contacts, and individuals whose information is submitted in connection with an order. Separate workforce and contractor privacy notices should be provided to Delivery Partners and Laundry Partner personnel.',
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
      'Third-Party Information: Details from Laundry Partners, Delivery Partners, fraud-prevention providers, payment processors, and other service providers where necessary.',
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
      'Connect customers with Laundry Partners and Delivery Partners.',
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
      'Laundry Partners: To fulfill, document, and resolve orders.',
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
    body: 'We use administrative, technical, and physical safeguards appropriate to the sensitivity of information, which may include access controls, encryption in transit, secure password practices, payment tokenization, vendor review, employee and contractor confidentiality requirements, logging, monitoring, backups, and incident-response procedures. No system is completely secure, and users should protect their passwords and devices.',
  },
  {
    id: 10,
    title: '10. Privacy Incidents',
    subtitle: 'Breach Response Procedures',
    body: 'We maintain procedures to identify, contain, investigate, document, and respond to privacy and security incidents. Where legally required, we will notify affected individuals and report to the appropriate privacy regulator. We will keep breach records as required by applicable law.',
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
      'Wardrobe laundry, shoe care, ironing, and home-textile upkeep quietly eat a weekend a month. Spinny hands that time back — permanently, not just this once.',
  },
  {
    title: 'One Service, Entire Living Space',
    description:
      'Suits and sneakers. Duvets and diaper bags. Curtains and cashmere. Spinny is the single point of contact for every fabric, leather, and textile surface in your home.',
  },
  {
    title: 'Zero-Effort Concierge Logistics',
    description:
      'Door-to-door pickup and delivery, closet-ready hanging, drawer-ready folding. Nothing to drop off, nothing to carry further than your own front door.',
  },
  {
    title: 'Investment-Grade Care',
    description:
      'Your favourite sneakers and your grandmother’s duvet don’t belong in a machine built for gym socks. Every item goes to a specialist trained for its specific material.',
  },
];

export const DIFFERENTIATORS = [
  'Centralized pickup scheduling that gets an entire household’s laundry, footwear, and home textiles off the calendar in under 30 seconds.',
  'A vetted specialist network — not just laundromats — covering leather, suede, rugs, curtains, and delicate fabrics alike.',
  'Material-aware workflows that protect what you’ve invested in, from sneakers to a wedding dress.',
  'Support that feels human and answers fast, because your time matters after the pickup too.',
];

export const MILESTONES = [
  { year: '2019', label: 'Spinny launched with a simple promise: buy people back the time laundry was quietly taking from them.' },
  { year: '2022', label: 'Coverage expanded past garments into footwear, leather goods, and home textiles — because a household’s time gets eaten by more than just laundry.' },
  { year: '2026', label: 'The platform now supports households, offices, and partner fleets across a full wardrobe-and-home ecosystem — bought-back hours, at scale.' },
];

// --- Procedure Page Data ---
export const USER_GROUPS = [
  {
    title: 'Customers',
    eyebrow: 'Customer registration',
    sample: 'Example: Maya Chen, condo resident, downtown Toronto',
    steps: [
      'Create an account with name, mobile number, and email address.',
      'Add your pickup address, preferred service window, and delivery notes such as buzzer code or concierge desk instructions.',
      'Choose your first service type — wash & fold, dry cleaning, footwear revival, or a home-textile pickup.',
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
      'Complete an onboarding call to review service standards, turnaround expectations, and quality control procedures.',
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
  'Vetted Specialist Network',
  'Real-Time Order Tracking',
  '100% Satisfaction Guaranteed',
];

export const HOME_MARQUEE_2 = [
  '5+ Hours Reclaimed Weekly',
  'Leather, Suede & Home Textiles',
  'Set-and-Forget Membership',
  'Certified Commercial Facilities',
  '24h Speed Turnaround',
];

// --- Service Ecosystem (lifestyle categories, not just laundry) ---
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
    'Membership puts your entire wardrobe and home on autopilot. Recurring pickups on your schedule, priority concierge turnaround, and member rates across every category — garments, footwear, and home — billed as one predictable line, not five separate errands.',
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
    'Book a pickup for anything — garments, sneakers, or a duvet — track your driver, and manage every order from one app.',
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
    { label: 'See how it works', url: '/procedure', variant: 'secondary' },
  ],
  accentText: 'Final pricing is confirmed at checkout based on service type and item count.',
};

export const PRICING_TIERS = [
  {
    title: 'Wash & Fold',
    desc: 'Everyday laundry, cleaned, dried, and neatly folded per bag.',
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
  eyebrow: 'Terms of Service',
  heading: 'The plain-language terms behind every Spinny order.',
  description:
    'How bookings, payments, vendors, and drivers work together on Spinny.',
  backgroundImage: '/frames/ezgif-frame-008.jpg',
};

export const TERMS_SECTIONS = [
  {
    title: 'Booking & scheduling',
    body: 'When you schedule a pickup through Spinny, you’re reserving a time window with a driver and a service vendor partner. Please have your items ready at the scheduled window; repeated missed pickups may affect your ability to book future orders.',
  },
  {
    title: 'Pricing & payment',
    body: 'Spinny is pay-per-use — there are no required subscriptions or recurring charges outside of membership plans. Pricing is shown before you confirm an order and is charged to your saved payment method once service is complete.',
  },
  {
    title: 'Vendor & driver relationship',
    body: 'Service vendors and delivery drivers on Spinny are independent partners, vetted and onboarded through our partner program. Spinny coordinates the order but the physical care is performed by the vendor you’re matched with.',
  },
  {
    title: 'Damaged or lost items',
    body: 'Every order is inspected on pickup and before delivery. If something is damaged or missing, contact us within 48 hours of delivery through the Help Center so we can investigate with the vendor.',
  },
  {
    title: 'Account & cancellations',
    body: 'You can cancel or reschedule a pickup from your account before a driver is dispatched. Once a driver has been assigned, cancellation may be subject to a service fee.',
  },
  {
    title: 'Changes to these terms',
    body: 'We may update these terms as Spinny grows. Material changes will be communicated by email or in-app notice before they take effect.',
  },
];

// --- Cookie Policy Page ---
export const COOKIE_HERO_CONTENT = {
  eyebrow: 'Cookie Policy',
  heading: 'How Spinny uses cookies.',
  description:
    'How cookies help us remember your preferences and improve the site.',
  backgroundImage: '/frames/ezgif-frame-031.jpg',
};

export const COOKIE_CATEGORIES = [
  {
    title: 'Essential',
    desc: 'Required for the site to function — keeping you signed in and remembering items in an active booking. These cannot be turned off.',
  },
  {
    title: 'Performance',
    desc: 'Help us understand how the site is used so we can find and fix issues, anonymized wherever possible.',
  },
  {
    title: 'Preference',
    desc: 'Remember choices like your service area or saved address so you don’t have to re-enter them.',
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
