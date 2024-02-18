import React from "react";
import clsx from "clsx";
import { Command } from "cmdk";
import { Item } from "@/app/types";

import Icon from "@/app/components/shared/Icon";

export default function CommandItem({ item }: { item: Item }) {
  return (
    <Command.Item
      onSelect={item.onSelected}
      key={item.id}
      className={clsx(
        "group flex items-center justify-between rounded-md px-[14px] py-3 text-primary",
        "aria-[selected]:bg-brand/5 aria-[selected]:shadow-inner text-sm lg:text-base",
      )}
    >
      <div className="flex items-center gap-2">
        <Icon name={item.icon} size="small" /> {item.label}
      </div>

      {item?.space ? (
        <span className="text-sm text-brand/50">{item.space}</span>
      ) : (
        ""
      )}
    </Command.Item>
  );
}
