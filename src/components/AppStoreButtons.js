export default function AppStoreButtons({ className = '' }) {
  return (
    <div className={`flex flex-col sm:flex-row gap-3 ${className}`}>
      <a
        href="#"
        className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl transition-all duration-200 hover:scale-[1.03] active:scale-[0.98]"
        style={{ backgroundColor: '#0B1420', color: 'white' }}
        aria-label="Download Spinny on the App Store"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M16.365 1.43c0 1.14-.437 2.086-1.312 2.836-.947.815-2.088 1.246-3.244 1.16-.13-1.19.415-2.418 1.28-3.19C13.99.474 15.234-.02 16.24 0c.084.483.125.955.125 1.43zM20.9 17.19c-.6 1.38-.887 2-1.63 3.222-1.04 1.71-2.51 3.84-4.325 3.855-1.617.014-2.034-1.06-4.23-1.048-2.195.012-2.652 1.062-4.27 1.048-1.815-.015-3.207-1.943-4.247-3.652C-.53 16.99-.98 12.09 1.07 9.02c1.033-1.556 2.663-2.465 4.16-2.465 1.523 0 2.481.868 3.744.868 1.223 0 1.964-.87 3.744-.87 1.354 0 2.79.62 3.786 1.767-3.335 1.85-2.79 6.638.396 8.87z" />
        </svg>
        <span className="text-left leading-tight">
          <span className="block text-[9px] font-medium opacity-70 uppercase tracking-wide">Download on the</span>
          <span className="block text-sm font-bold">App Store</span>
        </span>
      </a>

      <a
        href="#"
        className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl transition-all duration-200 hover:scale-[1.03] active:scale-[0.98]"
        style={{ backgroundColor: '#0B1420', color: 'white' }}
        aria-label="Get Spinny on Google Play"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <rect x="2" y="2" width="20" height="20" rx="5" fill="#00D8FF" />
          <path d="M9 7l9 5-9 5V7z" fill="white" />
        </svg>
        <span className="text-left leading-tight">
          <span className="block text-[9px] font-medium opacity-70 uppercase tracking-wide">Get it on</span>
          <span className="block text-sm font-bold">Google Play</span>
        </span>
      </a>
    </div>
  );
}
