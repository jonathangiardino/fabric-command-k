import React from "react";
import clsx from "clsx";
import * as Tooltip from "@radix-ui/react-tooltip";

export default function Button({
  children,
  onClick,
  tooltipText,
  command,
  icon,
}: React.HTMLProps<HTMLButtonElement> & {
  tooltipText: string;
  command?: string;
  icon?: React.ReactNode;
}) {
  return (
    <Tooltip.Provider>
      <Tooltip.Root delayDuration={200}>
        <Tooltip.Trigger asChild>
          <button
            type="button"
            onClick={onClick}
            className={clsx(
              "h-9 w-9 flex items-center justify-center rounded-lg hover:bg-quaternary gap-2 transition-colors"
            )}
          >
            {children}
            {icon ? icon : null}
          </button>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content
            className="data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade select-none rounded-xl bg-black px-3 py-2 will-change-[transform,opacity] text-quaternary font-medium border-2 border-secondary text-sm"
            sideOffset={6}
            side="right"
          >
            <div className="flex items-center gap-2">
              {tooltipText}
              {command ? (
                <span className="text-secondary">{command}</span>
              ) : null}
            </div>
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}
