// components/ui/footer.tsx
"use client";

interface FooterProps {
  logo: React.ReactNode;
  brandName: string;
  socialLinks?: Array<{
    icon: React.ReactNode;
    href: string;
    label: string;
  }>;
  mainLinks?: Array<{
    href: string;
    label: string;
  }>;
  legalLinks?: Array<{
    href: string;
    label: string;
  }>;
  copyright: {
    text: string;
    license?: string;
  };
}

export function Footer({
  logo,
  brandName,
  socialLinks = [],
  mainLinks = [],
  legalLinks = [],
  copyright,
}: FooterProps) {
  return (
    <footer className="bg-[#FDF2F8] pb-6 pt-12 sm:pt-16 lg:pb-8 lg:pt-24">
      <div className="px-4 sm:px-6 lg:px-8">
        {/* Logo + Socials */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <a
            href="/"
            className="flex items-center gap-x-2 text-[#831843]"
            aria-label={brandName}
          >
            {logo}
            <span className="font-bold text-lg sm:text-xl text-[#BE185D]">
              {brandName}
            </span>
          </a>

          {socialLinks.length > 0 && (
            <ul className="flex list-none space-x-3 justify-center sm:justify-start">
              {socialLinks.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    target="_blank"
                    aria-label={link.label}
                    className="flex items-center justify-center h-9 w-9 sm:h-10 sm:w-10 rounded-full bg-[#EC4899] hover:bg-[#DB2777] text-white transition-colors"
                  >
                    {link.icon}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Links + Copyright */}
        <div className="border-t mt-6 pt-6 border-[#BE185D]/20 grid gap-6 md:gap-8 lg:grid-cols-10">
          {/* Main Links */}
          {mainLinks.length > 0 && (
            <nav className="lg:col-[4/11]">
              <ul className="list-none flex flex-wrap gap-3 justify-center lg:justify-end">
                {mainLinks.map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.href}
                      className="text-sm sm:text-base text-[#BE185D] underline-offset-4 hover:underline hover:text-[#9D174D]"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          )}

          {/* Legal Links */}
          {legalLinks.length > 0 && (
            <div className="lg:col-[4/11]">
              <ul className="list-none flex flex-wrap gap-3 justify-center lg:justify-end">
                {legalLinks.map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.href}
                      className="text-sm sm:text-base text-[#831843]/70 underline-offset-4 hover:underline hover:text-[#BE185D]"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Copyright */}
          <div className="text-center lg:text-left text-sm sm:text-base leading-6 text-[#831843]/70 whitespace-nowrap lg:row-[1/3] lg:col-[1/4] space-y-1">
            {/* <div>{copyright.text}</div>
            {copyright.license && <div>{copyright.license}</div>} */}
            <div>
               <div>{copyright.text}</div>
            {copyright.license && <div>{copyright.license}</div>}
              Credit:{" "}
              <a
               
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#BE185D] hover:text-[#9D174D] font-medium transition-colors"
              >
                Made by Fatima Nazir
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
