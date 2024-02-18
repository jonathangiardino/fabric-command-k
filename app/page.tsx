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
        <aside className="fixed bottom-0 flex w-full items-center justify-evenly gap-3 border-t-[1px] px-4 py-2 sm:relative sm:bottom-auto sm:h-full sm:w-auto sm:flex-col sm:justify-start sm:border-r-2 sm:border-t-0 sm:py-5">
          <Link href="/" className="sm:mb-2">
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
        <main className="w-full bg-background p-4 sm:p-10">
          <h1 className="text-heading-2 pb-1 font-extrabold -tracking-[.64px] sm:text-heading-1">
            Welcome, Jonathan Giardino
          </h1>
        </main>

        <CommandMenu open={openCommandMenu} setOpen={setOpenCommandMenu} />
        <CommandMenu.Overlay open={openCommandMenu} />
      </div>
    </Inspect>
  );
}
