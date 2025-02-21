import { DarkmodeSwitch } from "@/components/darkmode-switch";

import Image from "next/image";

export default function page() {
  return (
    <div className="flex h-full w-full items-center justify-center gap-8">
      <div className="flex flex-col items-center justify-center gap-8">
        <Image
          src="/icons/kokiri.svg"
          alt=""
          width={128}
          height={128}
          className="dark:invert"
        />
        <DarkmodeSwitch />
        <div className="flex flex-col items-center justify-center gap-4">
          <p className="text-3xl font-light">kokiri.social</p>
          <p className="font-light">Tell me what you wanna say.</p>
        </div>
      </div>
    </div>
  );
}
