import {
  Dispatch,
  Fragment,
  KeyboardEvent as ReactKeyboardEvent,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import clsx from "clsx";
import { Command } from "cmdk";
import { CommandMenuProps, Group, Item } from "@/app/types";
import useStore from "@/app/store";
import useCommands from "@/app/data";

import Logo from "@/app/components/shared/Logo";
import CommandItem from "@/app/components/global/CommandMenu/CommandItem";

export default function CommandMenu({ open, setOpen }: CommandMenuProps) {
  const { page, search, setPage, setSearch } = useStore((state) => state);
  const commands = useCommands();
  const groups = Object.entries(commands.groups).map(([id, group]) => ({
    ...group,
    id,
  }));

  function handleKeyDown(e: ReactKeyboardEvent<HTMLDivElement>) {
    const escOrDelete =
      e.key === "Escape" || (e.key === "Backspace" && !search);
    if (escOrDelete) {
      page === "Home" ? setOpen(false) : resetMenu(e);
    }
  }

  function resetMenu(e: ReactKeyboardEvent<HTMLDivElement>) {
    e.preventDefault();
    setPage("Home");
    setSearch("");
  }

  useEffect(() => {
    const handleShortcut = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", handleShortcut);
    return () => document.removeEventListener("keydown", handleShortcut);
  }, [page, setOpen]);

  useEffect(() => {
    if (search) {
      setSearch("");
    }
  }, [page]);

  return (
    <Command.Dialog
      open={open}
      onOpenChange={setOpen}
      label="Global search"
      loop
      className={clsx(
        "fixed left-1/2 top-2 z-50 w-full max-w-[95%] -translate-x-1/2 rounded-xl shadow-inner backdrop-blur-[50px] md:top-[120px]",
        "border-2 bg-white font-medium shadow-sm md:max-w-[641px]",
      )}
      onKeyDown={handleKeyDown}
    >
      <div className="relative flex h-[39px] gap-2 pl-4 pt-4">
        <span className="rounded-full bg-brand/5 px-2 py-1 text-xs text-primary">
          Home
        </span>

        {page !== "Home" && (
          <Fragment>
            <span className="animate-slideRightAndFade text-primary">/</span>
            <span className="animate-slideLeftAndFade rounded-full bg-brand/5 px-2 py-1 text-xs text-primary">
              {page}
            </span>
          </Fragment>
        )}
        {page !== "Home" ? (
          <div className="absolute bottom-1 right-3 hidden items-center gap-2 text-[10px] text-brand md:flex">
            Go back
            <span
              className={clsx(
                "flex items-center justify-center rounded-[4px] bg-brand/5 px-1 py-[2px] text-[8px]",
              )}
            >
              Esc
            </span>
          </div>
        ) : null}
      </div>

      <Command.Input
        enterKeyHint="enter"
        value={search}
        onValueChange={setSearch}
        autoFocus
        className={clsx(
          "h-[62px] w-full rounded-t-xl border-b-2 border-solid border-b-quaternary bg-transparent p-4 text-lg leading-[22px]",
          "active:ring-none text-primary caret-brand placeholder:text-tertiary focus:outline-none focus:ring-0",
        )}
        placeholder="What are you looking for?"
      />
      <Command.List className={clsx("scroll-p-[6px] overflow-auto p-[6px]")}>
        <Command.Empty className="flex h-[176px] w-full items-center justify-center gap-2 text-secondary">
          <Logo size="small" className="animate-bounce text-secondary" /> No
          results found
        </Command.Empty>
        <AllGroups page={page} groups={groups} />

        <AddNewLinkGroup
          page={page}
          items={commands.groups.actions.items[0].items!}
        />

        <UploadGroup
          page={page}
          items={commands.groups.actions.items[1].items!}
        />

        {commands.groups.favorites.items.map((favorite) => (
          <FavoritesSubGroup
            key={favorite.id}
            page={favorite.label}
            currentPage={page}
            items={favorite.items}
          />
        ))}
      </Command.List>

      <CommandMenuFooter setOpen={setOpen} />
    </Command.Dialog>
  );
}

function AllGroups({ page, groups }: { page: string; groups: Group[] }) {
  return page === "Home"
    ? groups.map((group) => (
        <Command.Group key={group.id} heading={group.label}>
          {group.items.map((item: Item) => (
            <CommandItem key={item.id} item={item} />
          ))}
        </Command.Group>
      ))
    : null;
}

function AddNewLinkGroup({ page, items }: { page: string; items: Item[] }) {
  return page === "Add new link" ? (
    <Command.Group>
      {items.map((item: Item) => (
        <CommandItem key={item.id} item={item} />
      ))}
    </Command.Group>
  ) : null;
}

function UploadGroup({ page, items }: { page: string; items: Item[] }) {
  return page === "Add new upload" ? (
    <Command.Group>
      {items.map((item: Item) => (
        <CommandItem key={item.id} item={item} />
      ))}
    </Command.Group>
  ) : null;
}

function FavoritesSubGroup({
  page,
  currentPage,
  items,
}: {
  page: string;
  currentPage: string;
  items: Item[];
}) {
  return currentPage === page ? (
    <Command.Group>
      {items.map((item: Item) => (
        <CommandItem key={item.id} item={item} />
      ))}
    </Command.Group>
  ) : null;
}

function CommandMenuFooter({
  setOpen,
}: {
  setOpen?: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <div className="flex w-full items-center justify-between rounded-b-xl border-t-2 border-solid border-t-quaternary bg-background p-[6px]">
      <Logo size="small" />
      <button
        className="rounded-md bg-brand px-2 py-1 text-xs text-white md:hidden"
        onClick={() => setOpen?.(false)}
      >
        ↓ Tap here to close
      </button>
    </div>
  );
}

function Overlay({ open }: { open: boolean }) {
  return (
    <div
      className={clsx(
        "fixed inset-0 z-40 h-full w-full bg-quaternary/90 backdrop-blur transition-all duration-200",
        {
          "animate-fadeIn pointer-events-auto opacity-100": open,
          "animate-fadeOut pointer-events-none opacity-0": !open,
        },
      )}
    />
  );
}

CommandMenu.Overlay = Overlay;
