// Centralized Project Datasets

// --- Hero Contents ---
export const ABOUT_HERO_CONTENT = {
  eyebrow: 'About Spinny',
  heading: 'Garment care built around modern routines.',
  description:
    'Spinny brings together scheduling, quality control, and trusted fulfillment so customers can hand off laundry and dry cleaning with confidence. Our goal is simple: make premium care feel easy, predictable, and worth coming back to.',
  backgroundImage: '/frames/ezgif-frame-008.jpg',
  rightImage: {
    src: '/frames/ezgif-frame-031.jpg',
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
    'Built for households and commercial teams that want premium care without the friction of old-school laundry routines.',
};

export const CONTACT_HERO_CONTENT = {
  eyebrow: 'Contact Spinny',
  heading: 'Reach the right team without the usual back-and-forth.',
  description:
    'Use the form below for service questions, order updates, vendor requests, or general feedback. For urgent pickup issues, call the support line and we’ll help you sort it out quickly.',
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
    'Average response time stays under one business day, and urgent pickup changes are routed to support before your window closes.',
};

export const PROCEDURE_HERO_CONTENT = {
  eyebrow: 'Procedure',
  heading: 'Registration explained in three simple journeys.',
  description:
    'Spinny has a different onboarding path for each user type, but the structure stays consistent: create the profile, verify the essentials, and complete approval before work begins. The sample details below use fictional data to show how the process feels in practice.',
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
    'Clear sign-up flow, dummy data for demonstration, and requirements listed before submission for each role.',
};

export const SERVICES_HERO_CONTENT = {
  eyebrow: 'Our Services',
  heading: 'Garment care solutions tailored to your life.',
  description:
    'From everyday laundry to delicate fabrics and bulk items, Spinny delivers expert handling and convenience. Select a service type below to learn more or schedule your first pickup.',
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
    'All items processed in commercial-grade facilities by trained garment care specialists.',
};

export const HELP_CENTER_HERO_CONTENT = {
  eyebrow: 'Help Center',
  heading: 'Support that is easy to find and simple to use.',
  description:
    'Browse common questions, send feedback, or start with the most important service topics. We keep the help experience direct so customers can get back to their day quickly.',
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
    'Need a quicker answer? Start with the FAQ section below, then use the feedback form if your issue needs more context.',
};

export const PRIVACY_HERO_CONTENT = {
  eyebrow: 'Privacy Policy',
  heading: 'A plain-language look at how Spinny handles your information.',
  description:
    'This page explains what data we collect, why we collect it, and how we protect it. The goal is transparency, not legal jargon.',
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
    'If you have a privacy concern or request, reach out and we will direct it to the right person.',
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
  'Free Pickups',
  '100% Satisfaction Guaranteed',
];

export const HOME_MARQUEE_2 = [
  'Eco-Conscious Cleaning',
  'Hypoallergenic Detergents',
  'Custom Fabric Preferences',
  'Certified Commercial Facilities',
  '24h Speed Turnaround',
];
