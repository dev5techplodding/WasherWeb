export default function AppStoreButtons({
  className = '',
  playStoreUrl = 'https://play.google.com/store',
  appStoreUrl = 'https://apps.apple.com',
}) {
  return (
    <div className={`flex flex-wrap items-center justify-center gap-3.5 ${className}`}>
      {/* Google Play Button */}
      <a
        href={playStoreUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-[#0F172A] hover:bg-[#1E293B] text-white transition-all duration-200 hover:scale-[1.03] active:scale-[0.98] shadow-md group"
        aria-label="Get it on Google Play"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3.6 1.83C3.37 2.07 3.25 2.45 3.25 2.96V21.04C3.25 21.55 3.37 21.93 3.6 22.17L3.68 22.24L13.79 12.13V11.87L3.68 1.76L3.6 1.83Z" fill="url(#play_blue_btn)" />
          <path d="M17.15 15.5L13.79 12.13V11.87L17.15 8.5L17.23 8.55L21.2 10.81C22.33 11.45 22.33 12.55 21.2 13.19L17.23 15.45L17.15 15.5Z" fill="url(#play_yellow_btn)" />
          <path d="M17.23 15.45L13.79 12L3.6 22.17C3.97 22.57 4.59 22.62 5.3 22.22L17.23 15.45Z" fill="url(#play_red_btn)" />
          <path d="M17.23 8.55L5.3 1.78C4.59 1.38 3.97 1.43 3.6 1.83L13.79 12L17.23 8.55Z" fill="url(#play_green_btn)" />
          <defs>
            <linearGradient id="play_blue_btn" x1="12.44" y1="2.9" x2="1.31" y2="14.03" gradientUnits="userSpaceOnUse">
              <stop stopColor="#00A0FF" />
              <stop offset="1" stopColor="#00A0FF" />
            </linearGradient>
            <linearGradient id="play_yellow_btn" x1="22.75" y1="12" x2="3.11" y2="12" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FFCC00" />
              <stop offset="1" stopColor="#FFAA00" />
            </linearGradient>
            <linearGradient id="play_red_btn" x1="18.6" y1="14.08" x2="4.1" y2="28.58" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FF3A44" />
              <stop offset="1" stopColor="#C31162" />
            </linearGradient>
            <linearGradient id="play_green_btn" x1="3.2" y1="-3.74" x2="17.7" y2="10.76" gradientUnits="userSpaceOnUse">
              <stop stopColor="#00E676" />
              <stop offset="1" stopColor="#12C360" />
            </linearGradient>
          </defs>
        </svg>
        <span className="text-left leading-none">
          <span className="block text-[9px] font-semibold tracking-wider text-slate-300 uppercase mb-0.5">GET IT ON</span>
          <span className="block text-sm sm:text-base font-bold text-white tracking-tight">Google Play</span>
        </span>
      </a>

      {/* Apple App Store Button */}
      <a
        href={appStoreUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-[#0F172A] hover:bg-[#1E293B] text-white transition-all duration-200 hover:scale-[1.03] active:scale-[0.98] shadow-md group"
        aria-label="Download on the App Store"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.35c.66-.8 1.11-1.92.99-3.04-.96.04-2.12.64-2.8 1.44-.6.7-1.13 1.84-.99 2.94 1.07.08 2.15-.54 2.8-1.34z" />
        </svg>
        <span className="text-left leading-none">
          <span className="block text-[9px] font-semibold tracking-wider text-slate-300 uppercase mb-0.5">DOWNLOAD ON THE</span>
          <span className="block text-sm sm:text-base font-bold text-white tracking-tight">App Store</span>
        </span>
      </a>
    </div>
  );
}
