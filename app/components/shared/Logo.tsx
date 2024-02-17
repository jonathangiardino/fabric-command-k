import React from "react";
import clsx from "clsx";

export default function Logo({
  size = "large",
  className,
}: {
  size?: "large" | "small";
  className?: string;
}) {
  return (
    <svg
      width="30"
      viewBox="0 0 37 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ cursor: "pointer" }}
      className={clsx(
        { ["scale-75"]: size === "small" },
        "text-brand",
        className,
      )}
    >
      <path
        d="M3 6a3 3 0 0 1 3-3h6.653a1 1 0 0 1 .818.424l2.066 2.932a1 1 0 0 0 .818.424H31a3 3 0 0 1 3 3V27a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Z"
        fill="currentColor"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M.438 6A5.563 5.563 0 0 1 6 .437h6.653c1.159 0 2.245.564 2.912 1.51l1.6 2.27H31a5.562 5.562 0 0 1 5.563 5.563V27A5.562 5.562 0 0 1 31 32.563H6A5.562 5.562 0 0 1 .437 27V6ZM6 5.562A.438.438 0 0 0 5.562 6v21c0 .242.196.438.438.438h25a.438.438 0 0 0 .438-.438V9.78A.438.438 0 0 0 31 9.342H16.355a3.563 3.563 0 0 1-2.912-1.51l-1.6-2.27H6Z"
        fill="currentColor"
      ></path>
      <path
        d="M3 6a3 3 0 0 1 3-3h6.653a1 1 0 0 1 .818.424l2.066 2.932a1 1 0 0 0 .818.424H31a3 3 0 0 1 3 3V27a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Z"
        fill="cu"
      ></path>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M2.25 6A3.75 3.75 0 0 1 6 2.25h6.653a1.75 1.75 0 0 1 1.43.742l2.067 2.932a.25.25 0 0 0 .205.106H31a3.75 3.75 0 0 1 3.75 3.75V27A3.75 3.75 0 0 1 31 30.75H6A3.75 3.75 0 0 1 2.25 27V6ZM6 3.75A2.25 2.25 0 0 0 3.75 6v21A2.25 2.25 0 0 0 6 29.25h25A2.25 2.25 0 0 0 33.25 27V9.78A2.25 2.25 0 0 0 31 7.53H16.355a1.75 1.75 0 0 1-1.43-.742l-2.067-2.932a.25.25 0 0 0-.205-.106H6Z"
        fill="#fff"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24.31 22.656a7.75 7.75 0 0 1-11.301-.001l1.078-1.079a6.225 6.225 0 0 0 9.144.001l1.078 1.08ZM13.362 11.694l-.362.361a7.885 7.885 0 0 1 .362-.361Z"
        fill="#fff"
      ></path>
      <path
        d="M11.502 12.5h1.75v4h-1.75v-4ZM18.502 13.5h1.5v5h-1.5v-5ZM17.002 18.5h3V20h-3v-1.5ZM23.752 12.5h1.75v4h-1.75v-4Z"
        fill="#fff"
      ></path>
      <path
        d="M3.75 6A2.25 2.25 0 0 1 6 3.75h6.68a.25.25 0 0 1 .195.094l2.607 3.278"
        fill="currentColor"
      ></path>
    </svg>
  );
}
