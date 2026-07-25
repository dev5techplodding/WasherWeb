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
  heading: 'Reach the right team without losing an afternoon to it.',
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
  heading: 'Your whole wardrobe and home, cared for — not just your laundry.',
  description:
    'From everyday shirts to sneakers, leather bags, duvets, and rugs — one pickup covers what used to take five different errands.',
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
