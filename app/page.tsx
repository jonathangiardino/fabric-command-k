"use client";

import Inspect from "inspx";
import { useState } from "react";
import Link from "next/link";

import Icon from "@/app/components/shared/Icon";
import Logo from "@/app/components/shared/Logo";
import Button from "@/app/components/shared/Button";
import CommandMenu from "@/app/components/global/CommandMenu";

export default function Home() {
  const [openCommandMenu, setOpenCommandMenu] = useState(false);

  return (
    <Inspect>
      <div className="flex h-svh max-h-full overflow-hidden">
        <aside className="flex h-full flex-col items-center justify-start gap-3 border-r-2 px-4 py-5">
          <Link href="/" className="mb-2">
            <Logo />
          </Link>
          <Button
            icon={<Icon name="search" />}
            tooltipText="Global search"
            command="⌘K"
            onClick={() => setOpenCommandMenu(true)}
          />
          <Button
            icon={<Icon name="timeline" />}
            tooltipText="Timeline"
            command="⌘E"
          />
          <Button
            icon={<Icon name="spaces" />}
            tooltipText="Spaces"
            command="⌘O"
          />
        </aside>
        <main className="w-full bg-background px-2 py-6 lg:p-10">
          <h1 className="pb-1 text-heading-1 font-extrabold -tracking-[.64px]">
            Welcome, Jonathan Giardino
          </h1>
        </main>

        <CommandMenu open={openCommandMenu} setOpen={setOpenCommandMenu} />
        <CommandMenu.Overlay open={openCommandMenu} />
      </div>
    </Inspect>
  );
}
