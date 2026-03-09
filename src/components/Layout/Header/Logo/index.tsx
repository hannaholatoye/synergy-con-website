import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3">
      <Image
        src="/images/logo/logo.png"
        alt="SynergyCon Logo"
        width={44}
        height={44}
        priority
        className="h-11 w-auto object-contain"
      />

      {/* Optional text beside logo */}
      <span className="hidden sm:block text-lg font-extrabold tracking-wide text-black dark:text-white">
        SYNERGYCON
      </span>
    </Link>
  );
}