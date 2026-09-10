import Link from "next/link";

export default function Page() {
  return (
    <footer className="bg-card pt-16 pb-8">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-0 justify-between items-center mb-8">
          {/* Footer Brand */}
          <Link href="/">
            <span className="font-heading font-bold text-xl text-text-on-card">
              Laiba Azhar
            </span>
          </Link>

          {/* Footer Links */}
          <div>
            <div className="flex flex-col lg:flex-row items-center gap-3 lg:gap-12">
              <Link
                href="#home"
                className="text-text-on-card no-underline hover:text-primary-500 transition-colors"
              >
                Home
              </Link>
              <Link
                href="#about"
                className="text-text-on-card no-underline hover:text-primary-500 transition-colors"
              >
                About
              </Link>
              <Link
                href="#case-study"
                className="text-text-on-card no-underline hover:text-primary-500 transition-colors"
              >
                Work
              </Link>
              <Link
                href="#contact"
                className="text-text-on-card no-underline hover:text-primary-500 transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex gap-3">
            <a
              href="https://github.com/laibaazhar135-oss"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center p-3 rounded group hover:bg-primary-500 transition-colors"
            >
              <i className="pi pi-github group-hover:text-text-on-card text-primary-500 text-xl leading-none"></i>
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center p-3 rounded group hover:bg-primary-500 transition-colors"
            >
              <i className="pi pi-linkedin group-hover:text-text-on-card text-primary-500 text-xl leading-none"></i>
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center p-3 rounded group hover:bg-primary-500 transition-colors"
            >
              <i className="pi pi-twitter group-hover:text-text-on-card text-primary-500 text-xl leading-none"></i>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-text-on-card/20 pt-6 text-center">
          <p className="text-text-on-card text-sm opacity-70">
            Copyright © 2026 Laiba Azhar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}