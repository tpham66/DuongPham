export function Footer() {
  return (
    <footer className="w-full dark page py-10">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">

        {/* Left */}
        <p className="text-sm opacity-60">
          © 2026 Kyra
        </p>

        {/* Right */}
        <div className="flex gap-6 text-sm">
          <a
            href="https://github.com/tpham66"
            target="_blank"
            className="hover:text-[#e94560]"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            className="hover:text-[#e94560]"
          >
            LinkedIn
          </a>

          <a
            href="mailto:phamduong2604@gmail.com"
            className="hover:text-[#e94560]"
          >
            Email
          </a>
        </div>

      </div>
    </footer>
  );
}