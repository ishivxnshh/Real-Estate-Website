import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full py-section-gap px-margin-mobile md:px-margin-desktop flex flex-col md:flex-row justify-between items-start gap-8 bg-surface dark:bg-surface-container-lowest border-t border-outline-variant/30 dark:border-outline/30">
      <div>
        <div className="mb-4 h-[120px] overflow-hidden flex items-center justify-start">
          <img src="/logo-light.png" alt="HOUSICK" className="h-[200px] w-auto max-w-none object-cover object-center dark:hidden" />
          <img src="/logo-dark.png" alt="HOUSICK" className="h-[200px] w-auto max-w-none object-cover object-center hidden dark:block" />
        </div>
        <p className="text-on-surface-variant dark:text-on-surface-variant font-label-sm text-label-sm">
          © {new Date().getFullYear()} HOUSICK. ALL RIGHTS RESERVED.
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-6">
        <Link
          className="font-label-sm text-label-sm text-on-surface-variant dark:text-on-surface-variant hover:text-secondary dark:hover:text-secondary-fixed-dim transition-colors duration-200"
          href="/about"
        >
          About Us
        </Link>
        <Link
          className="font-label-sm text-label-sm text-on-surface-variant dark:text-on-surface-variant hover:text-secondary dark:hover:text-secondary-fixed-dim transition-colors duration-200"
          href="/privacy"
        >
          Privacy Policy
        </Link>
        <Link
          className="font-label-sm text-label-sm text-on-surface-variant dark:text-on-surface-variant hover:text-secondary dark:hover:text-secondary-fixed-dim transition-colors duration-200"
          href="/terms"
        >
          Terms of Service
        </Link>
        <Link
          className="font-label-sm text-label-sm text-on-surface-variant dark:text-on-surface-variant hover:text-secondary dark:hover:text-secondary-fixed-dim transition-colors duration-200"
          href="/contact"
        >
          Contact
        </Link>
        <Link
          className="font-label-sm text-label-sm text-on-surface-variant dark:text-on-surface-variant hover:text-secondary dark:hover:text-secondary-fixed-dim transition-colors duration-200"
          href="/accessibility"
        >
          Accessibility
        </Link>
      </div>
    </footer>
  );
}
