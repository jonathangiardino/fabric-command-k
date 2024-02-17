import clsx from "clsx";
import React from "react";

export default function Icon({
  name,
  size,
}: {
  name: string;
  size?: "small" | "large";
}) {
  switch (name) {
    case "search":
      return (
        <svg
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          width="24px"
          height="24px"
          className={clsx("text-secondary", { ["scale-75"]: size === "small" })}
        >
          <circle
            cx="7.6"
            cy="7.6"
            r="4.85"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
          ></circle>
          <path
            d="M11.334 11.3335L15.0673 15.0668"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
          ></path>
        </svg>
      );
    case "timeline":
      return (
        <svg
          width="24px"
          height="24px"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={clsx("text-secondary", { ["scale-75"]: size === "small" })}
        >
          <path
            d="M1.5 9a7.5 7.5 0 1 0 1.79-4.864"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
          ></path>
          <path
            d="M9 4.5V9l3.5 3.5"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
          ></path>
        </svg>
      );

    case "spaces":
      return (
        <svg
          width="24px"
          height="24px"
          viewBox="0 0 18 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={clsx("text-secondary", { ["scale-75"]: size === "small" })}
        >
          <rect
            x="8.75"
            y="0.75"
            width="8.5"
            height="10.5"
            rx="1.25"
            fill="#fff"
            stroke="currentColor"
            strokeWidth="1.5"
          ></rect>
          <rect
            x="4.75"
            y="4.75"
            width="8.5"
            height="10.5"
            rx="1.25"
            fill="#fff"
            stroke="currentColor"
            strokeWidth="1.5"
          ></rect>
          <rect
            x="0.75"
            y="8.75"
            width="8.5"
            height="10.5"
            rx="1.25"
            fill="#fff"
            stroke="currentColor"
            strokeWidth="1.5"
          ></rect>
        </svg>
      );

    case "link":
      return (
        <svg
          width="24px"
          height="24px"
          viewBox="0 0 19 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={clsx("text-secondary", { ["scale-75"]: size === "small" })}
        >
          <g fill="currentColor">
            <path
              d="M8.25 5.545a.569.569 0 0 0 .805 0l3.1-3.1a2.758 2.758 0 0 1 3.9 3.9l-3.1 3.1a.569.569 0 0 0 .804.804l3.1-3.099a3.896 3.896 0 0 0-5.51-5.509l-3.099 3.1a.569.569 0 0 0 0 .804ZM5.573 9.026a.569.569 0 1 0-.804-.804L2.14 10.85a3.896 3.896 0 1 0 5.51 5.509l2.627-2.628a.569.569 0 0 0-.804-.804l-2.628 2.628a2.758 2.758 0 1 1-3.9-3.9l2.627-2.629Z"
              strokeWidth="0.5"
            ></path>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.578 12.627a.994.994 0 0 0-1.406 0l-2.628 2.627a2.333 2.333 0 0 1-3.299-3.3l2.628-2.627a.994.994 0 0 0-1.406-1.405L1.84 10.55a4.32 4.32 0 1 0 6.11 6.11l2.628-2.628a.994.994 0 0 0 0-1.405Zm-.692.134a.567.567 0 0 0-.413.166l-2.628 2.628a2.758 2.758 0 1 1-3.9-3.9l2.627-2.628a.569.569 0 0 0-.804-.805L2.14 10.85a3.896 3.896 0 1 0 5.51 5.51l2.627-2.629a.569.569 0 0 0-.391-.97Zm3.068-2.511a.567.567 0 0 0 .805 0l3.1-3.1a3.896 3.896 0 0 0-5.51-5.509l-3.1 3.1a.569.569 0 1 0 .805.804l3.1-3.1a2.758 2.758 0 0 1 3.9 3.901l-3.1 3.1a.569.569 0 0 0 0 .804Zm-.5-7.504-3.1 3.1A.994.994 0 0 1 7.95 4.44l3.1-3.1a4.32 4.32 0 0 1 6.11 6.11l-3.1 3.1a.994.994 0 1 1-1.405-1.405l3.1-3.1a2.333 2.333 0 0 0-3.3-3.299Z"
              strokeWidth="1"
            ></path>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.4 5.919a1.062 1.062 0 0 1 0 1.502l-4.55 4.55a1.063 1.063 0 0 1-1.502-1.502l4.55-4.55a1.063 1.063 0 0 1 1.503 0Z"
              strokeWidth="0.5"
            ></path>
          </g>
        </svg>
      );

    case "upload":
      return (
        <svg
          width="24px"
          height="24px"
          viewBox="0 0 16 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={clsx("text-secondary", { ["scale-75"]: size === "small" })}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1 16.5a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H2a1 1 0 0 1-1-1ZM7.294.793a1 1 0 0 1 1.414 0l6.364 6.364a1 1 0 1 1-1.414 1.414L9 3.914V12.5a1 1 0 1 1-2 0V3.914L2.344 8.571A1 1 0 0 1 .93 7.157L7.294.793Z"
            fill="currentColor"
            strokeWidth="0.5"
          ></path>
        </svg>
      );

    case "note":
      return (
        <svg
          width="24px"
          height="24px"
          viewBox="0 0 19 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={clsx("text-secondary", { ["scale-75"]: size === "small" })}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1 4.832a2 2 0 0 1 0-2.828L2.093.91a2 2 0 0 1 2.828 0l6.214 6.214.654 4.575-4.575-.654L1 4.832Zm2.507-2.507L2.414 3.418l5.743 5.743 1.275.182-.182-1.275-5.743-5.743Z"
            fill="currentColor"
            strokeWidth="0.5"
          ></path>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.5 5.918V15.5a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2v-11a2 2 0 0 0-2-2h-11c-.126 0-.25.012-.37.034L7.096 4.5H16.5v11h-11V7.918l-2-2Z"
            fill="currentColor"
            strokeWidth="0.5"
          ></path>
        </svg>
      );

    case "folder":
      return (
        <svg
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={clsx("text-secondary", { ["scale-75"]: size === "small" })}
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0" />

          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          />

          <g id="SVGRepo_iconCarrier">
            <path
              d="M3 8.2C3 7.07989 3 6.51984 3.21799 6.09202C3.40973 5.71569 3.71569 5.40973 4.09202 5.21799C4.51984 5 5.0799 5 6.2 5H9.67452C10.1637 5 10.4083 5 10.6385 5.05526C10.8425 5.10425 11.0376 5.18506 11.2166 5.29472C11.4184 5.4184 11.5914 5.59135 11.9373 5.93726L12.0627 6.06274C12.4086 6.40865 12.5816 6.5816 12.7834 6.70528C12.9624 6.81494 13.1575 6.89575 13.3615 6.94474C13.5917 7 13.8363 7 14.3255 7H17.8C18.9201 7 19.4802 7 19.908 7.21799C20.2843 7.40973 20.5903 7.71569 20.782 8.09202C21 8.51984 21 9.0799 21 10.2V15.8C21 16.9201 21 17.4802 20.782 17.908C20.5903 18.2843 20.2843 18.5903 19.908 18.782C19.4802 19 18.9201 19 17.8 19H6.2C5.07989 19 4.51984 19 4.09202 18.782C3.71569 18.5903 3.40973 18.2843 3.21799 17.908C3 17.4802 3 16.9201 3 15.8V8.2Z"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              stroke="currentColor"
            />{" "}
          </g>
        </svg>
      );

    case "file":
      return (
        <svg
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={clsx("text-secondary", { ["scale-75"]: size === "small" })}
        >
          <path
            d="M13 3H8.2C7.0799 3 6.51984 3 6.09202 3.21799C5.71569 3.40973 5.40973 3.71569 5.21799 4.09202C5 4.51984 5 5.0799 5 6.2V17.8C5 18.9201 5 19.4802 5.21799 19.908C5.40973 20.2843 5.71569 20.5903 6.09202 20.782C6.51984 21 7.0799 21 8.2 21H12M13 3L19 9M13 3V7.4C13 7.96005 13 8.24008 13.109 8.45399C13.2049 8.64215 13.3578 8.79513 13.546 8.89101C13.7599 9 14.0399 9 14.6 9H19M19 9V12M17 19H21M19 17V21"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
        </svg>
      );

    case "clipboard":
      return (
        <svg
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={clsx("text-secondary", { ["scale-75"]: size === "small" })}
        >
          <path
            d="M8 5.00005C7.01165 5.00082 6.49359 5.01338 6.09202 5.21799C5.71569 5.40973 5.40973 5.71569 5.21799 6.09202C5 6.51984 5 7.07989 5 8.2V17.8C5 18.9201 5 19.4802 5.21799 19.908C5.40973 20.2843 5.71569 20.5903 6.09202 20.782C6.51984 21 7.07989 21 8.2 21H15.8C16.9201 21 17.4802 21 17.908 20.782C18.2843 20.5903 18.5903 20.2843 18.782 19.908C19 19.4802 19 18.9201 19 17.8V8.2C19 7.07989 19 6.51984 18.782 6.09202C18.5903 5.71569 18.2843 5.40973 17.908 5.21799C17.5064 5.01338 16.9884 5.00082 16 5.00005M8 5.00005V7H16V5.00005M8 5.00005V4.70711C8 4.25435 8.17986 3.82014 8.5 3.5C8.82014 3.17986 9.25435 3 9.70711 3H14.2929C14.7456 3 15.1799 3.17986 15.5 3.5C15.8201 3.82014 16 4.25435 16 4.70711V5.00005"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
        </svg>
      );

    default:
      return null;
  }
}
