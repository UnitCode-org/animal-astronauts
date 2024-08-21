import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <footer className="grid w-full max-w-screen-2xl grid-cols-2 justify-between px-6 py-6 md:px-16 md:pt-32 md:pb-16">
      <Image
        src="/images/logo/logo-type-white.svg"
        alt="AA Logo"
        width={175}
        height={175}
      />
      <div className="flex flex-col justify-end gap-x-20 gap-y-6 text-right font-poppins text-base md:text-lg sm:flex-row">
        <ul className="flex flex-col gap-y-1">
          <li>Home</li>
          <li>About</li>
          <li>Application</li>
          <li>Collection</li>
        </ul>
        <ul className="flex flex-col gap-y-1">
          <li>
            <Link href="https://unit.network/" target="_blank">
              Unit Network
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
