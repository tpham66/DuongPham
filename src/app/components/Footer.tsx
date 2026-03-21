export function Footer() {
  return (
    <footer className="w-full dark page py-10">
      <div className="px-4 flex flex-col lg:flex-row justify-between items-center gap-4">

        {/* Left */}
        <p className="text-3xl lg:text-sm opacity-60">
          © 2026 Kyra
        </p>

        {/* Right */}
        <div className="flex gap-6 text-sm">
          <a
            href="https://github.com/tpham66"
            target="_blank"
            className="hover:text-[#e94560] text-3xl lg:text-sm"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            className="hover:text-[#e94560] text-3xl lg:text-sm"
          >
            LinkedIn
          </a>

          <a
            href="mailto:phamduong2604@gmail.com"
            className="hover:text-[#e94560] text-3xl lg:text-sm"
          >
            Email
          </a>
        </div>

      </div>
    </footer>
  );
}