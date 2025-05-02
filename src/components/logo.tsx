import darkLogo from "@/assets/logos/dark.png";
import logo from "@/assets/logos/white.png";
import Image from "next/image";

export function Logo() {
  return (
    <div className="relative h-16 ">
      <h1 className="text-5xl font-extrabold tracking-tight text-green ">
        SolarSurge
      </h1>
      {/* <Image
        src={logo}
        fill
        className="dark:hidden"
        alt="NextAdmin logo"
        role="presentation"
        quality={100}
      />

      <Image
        src={darkLogo}
        fill
        className="hidden dark:block"
        alt="NextAdmin logo"
        role="presentation"
        quality={100}
      /> */}
    </div>
  );
}
