// Centralized Project Datasets

// --- Hero Contents ---
export const ABOUT_HERO_CONTENT = {
  eyebrow: 'About Spinny',
  heading: 'Garment care built around modern routines.',
  description:
    'Scheduling, quality control, and trusted fulfillment — built to make premium garment care easy and predictable.',
  backgroundImage: '/frames/ezgif-frame-008.jpg',
  rightImage: {
    // src: '/frames/ezgif-frame-031.jpg',
    alt: 'Spinny service preview with fresh garments and delivery presentation',
    priority: true,
    badge: {
      label: 'Service model',
      value: 'Pickup, processing, and delivery in one flow',
    },
  },
  buttons: [
    { label: 'Contact us', url: '/contact' },
    { label: 'See procedure', url: '/procedure', variant: 'secondary' },
  ],
  accentText:
    'For households and commercial teams who want premium care without the old-school hassle.',
};

export const CONTACT_HERO_CONTENT = {
  eyebrow: 'Contact Spinny',
  heading: 'Reach the right team without the usual back-and-forth.',
  description:
    'Questions about orders, vendors, or service? Send a message and our team will get back to you fast.',
  backgroundImage: '/frames/ezgif-frame-014.jpg',
  rightImage: {
    src: '/frames/ezgif-frame-056.jpg',
    alt: 'Spinny support and delivery experience shown as a clean service visual',
    priority: true,
    badge: {
      label: 'Support hours',
      value: 'Mon to Fri, 8:00 AM to 8:00 PM EST',
    },
  },
  buttons: [
    { label: 'Email support', url: 'mailto:hello@spinny.example' },
    { label: 'View procedure', url: '/procedure', variant: 'secondary' },
  ],
  accentText:
    'Most replies land within one business day.',
};

export const PROCEDURE_HERO_CONTENT = {
  eyebrow: 'Procedure',
  heading: 'Registration explained in three simple journeys.',
  description:
    'A simple path for every role: create a profile, verify the essentials, and get approved.',
  backgroundImage: '/frames/ezgif-frame-020.jpg',
  rightImage: {
    src: '/frames/ezgif-frame-088.jpg',
    alt: 'Operational workflow visual for the Spinny registration process',
    priority: true,
    badge: {
      label: 'Example status',
      value: 'Documents received. Review expected within 24 hours.',
    },
  },
  buttons: [
    { label: 'Contact support', url: '/contact' },
    { label: 'About us', url: '/about', variant: 'secondary' },
  ],
  accentText:
    'Sample data shown below is for illustration only.',
};

export const SERVICES_HERO_CONTENT = {
  eyebrow: 'Our Services',
  heading: 'Garment care solutions tailored to your life.',
  description:
    'From everyday laundry to delicate fabrics, expert handling for every load.',
  backgroundImage: '/frames/ezgif-frame-031.jpg',
  rightImage: {
    src: '/frames/ezgif-frame-031.jpg',
    alt: 'Premium laundry service presentation with neat folds',
    priority: true,
    badge: {
      label: 'Eco friendly',
      value: '100% biodegradable and hypoallergenic detergents',
    },
  },
  buttons: [
    { label: 'Schedule pickup', url: '/contact' },
    { label: 'View procedure', url: '/procedure', variant: 'secondary' },
  ],
  accentText:
    'Processed in commercial-grade facilities by trained specialists.',
};

export const HELP_CENTER_HERO_CONTENT = {
  eyebrow: 'Help Center',
  heading: 'Support that is easy to find and simple to use.',
  description:
    'Quick answers to common questions, plus a direct line to our team.',
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
  eyebrow: 'Privacy Policy',
  heading: 'A plain-language look at how Spinny handles your information.',
  description:
    'What we collect, why we collect it, and how we protect it — in plain language.',
  backgroundImage: '/frames/ezgif-frame-160.jpg',
  rightImage: {
    src: '/frames/ezgif-frame-185.jpg',
    alt: 'Privacy and security themed Spinny visual',
    priority: true,
    badge: {
      label: 'Policy summary',
      value: 'Collection, use, storage, and contact details in one place',
    },
  },
  buttons: [
    { label: 'Contact privacy', url: 'mailto:privacy@spinny.example' },
    { label: 'Back to help', url: '/help-center', variant: 'secondary' },
  ],
  accentText:
    'Have a privacy concern? Reach out and we’ll route it to the right person.',
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
    title: 'Information we collect',
    body:
      'We collect the information needed to create and service accounts, such as name, contact details, pickup and delivery addresses, order notes, and communication history. We may also collect device and usage information to keep the platform reliable.',
  },
  {
    title: 'How we use it',
    body:
      'We use your information to schedule service, process payments, provide support, communicate updates, improve the platform, and comply with legal obligations. We do not sell personal information.',
  },
  {
    title: 'How we share it',
    body:
      'We share only what is necessary with trusted service partners, delivery providers, and vendors who help us fulfill orders and support the platform. Those parties are expected to protect the information they receive.',
  },
  {
    title: 'Your choices',
    body:
      'You can request access, correction, or deletion where applicable, and you can also opt out of non-essential communications. If you want to exercise a privacy right, contact us using the details below.',
  },
];

export const PRIVACY_CONTACT = [
  { label: 'Privacy email', value: 'privacy@spinny.example' },
  { label: 'Support email', value: 'hello@spinny.example' },
  { label: 'Mailing address', value: '1840 King Street West, Suite 402, Toronto, ON M5V 1X6' },
];

// --- About Page Data ---
export const CORE_VALUES = [
  {
    title: 'Reliability first',
    description:
      'We keep pickup windows, status updates, and delivery promises simple, visible, and dependable so customers know exactly what to expect.',
  },
  {
    title: 'Quality at every step',
    description:
      'Every garment is handled by trained partners who follow garment-specific care checks, finish standards, and quality control before it leaves the facility.',
  },
  {
    title: 'Respect for time',
    description:
      'Spinny is built for busy households and teams that want premium garment care without losing a morning, a lunch break, or an evening to errands.',
  },
];

export const DIFFERENTIATORS = [
  'Centralized pickup scheduling with clear service windows and live-ready updates.',
  'A vetted partner network that combines local convenience with commercial-grade handling.',
  'Fabric-aware workflows that protect delicate items, uniforms, and everyday essentials alike.',
  'Support that feels human, with straightforward answers instead of scripted runaround.',
];

export const MILESTONES = [
  { year: '2019', label: 'Spinny launched with a simple promise: premium laundry should be easy to book and easier to trust.' },
  { year: '2022', label: 'Service coverage expanded across major urban neighborhoods with tighter pickup and delivery windows.' },
  { year: '2026', label: 'The platform now supports households, offices, and partner fleets with a more coordinated service experience.' },
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
      'Choose your first service type, for example wash & fold, dry cleaning, or a mixed bag order.',
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
  { label: 'Average response', value: 'Most support requests are reviewed within one business day.' },
  { label: 'Self-service', value: 'Use the FAQ below for the fastest answers to common questions.' },
  { label: 'Direct help', value: 'Send feedback when your issue needs more detail or follow-up.' },
];

// --- Home Page Marquees ---
export const HOME_MARQUEE_1 = [
  'Seamless Garment Care',
  'Reclaim Your Time',
  'Vetted Commercial Partners',
  'Real-Time Order Tracking',
  '100% Satisfaction Guaranteed',
];

export const HOME_MARQUEE_2 = [
  'Eco-Conscious Cleaning',
  'Hypoallergenic Detergents',
  'Custom Fabric Preferences',
  'Certified Commercial Facilities',
  '24h Speed Turnaround',
];

// --- App Page ---
export const APP_HERO_CONTENT = {
  eyebrow: 'Spinny Mobile',
  heading: 'Spinny. In your pocket.',
  description:
    'Book a pickup, track your driver, and manage every order — all from one app.',
  backgroundImage: '/frames/ezgif-frame-031.jpg',
  rightImage: {
    src: '/F1.jpg',
    alt: 'Spinny app preview on a mobile phone',
    priority: true,
    badge: {
      label: 'Rated 5 stars',
      value: '6,000+ customer reviews',
    },
  },
  accentText: 'Available soon for iOS and Android.',
};

export const APP_FEATURES = [
  {
    title: '30-second booking',
    desc: 'Add your address, pick a window, and you’re done. No forms, no phone calls.',
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
  heading: 'Pay for what you use. Nothing more.',
  description:
    'No monthly passes, no minimum spend — pay only for the pickups you book.',
  backgroundImage: '/frames/ezgif-frame-105.jpg',
  buttons: [
    { label: 'Schedule a pickup', url: '/contact' },
    { label: 'See how it works', url: '/procedure', variant: 'secondary' },
  ],
  accentText: 'Final pricing is confirmed at checkout based on service type and bag count.',
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
];

// --- Careers Page ---
export const CAREERS_HERO_CONTENT = {
  eyebrow: 'Careers',
  heading: 'Help us give people their time back.',
  description:
    'We’re growing across Canada and always open to hearing from great people.',
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
    body: 'When you schedule a pickup through Spinny, you’re reserving a time window with a driver and a laundry vendor partner. Please have your items ready at the scheduled window; repeated missed pickups may affect your ability to book future orders.',
  },
  {
    title: 'Pricing & payment',
    body: 'Spinny is pay-per-use — there are no subscriptions or recurring charges. Pricing is shown before you confirm an order and is charged to your saved payment method once service is complete.',
  },
  {
    title: 'Vendor & driver relationship',
    body: 'Laundry vendors and delivery drivers on Spinny are independent partners, vetted and onboarded through our partner program. Spinny coordinates the order but the physical cleaning is performed by the vendor you’re matched with.',
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
