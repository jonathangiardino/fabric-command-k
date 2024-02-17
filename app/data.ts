import useCommandMenuStore from "./store";

export default function useCommands() {
  const { setPage } = useCommandMenuStore((state) => ({
    ...state,
  }));

  return {
    groups: {
      actions: {
        label: "",
        items: [
          {
            id: "add-link",
            label: "Add new link",
            icon: "link",
            onSelected: () => setPage("Add new link"),
            items: [
              {
                id: "manual",
                label: "Add new link manually",
                icon: "link",
                onSelected: () => setPage("Home"),
              },
              {
                id: "paste",
                label: "Paste from clipboard",
                icon: "clipboard",
                onSelected: () => setPage("Home"),
              },
            ],
          },
          {
            id: "add-new-upload",
            label: "Add new upload",
            icon: "upload",
            onSelected: () => setPage("Add new upload"),
            items: [
              {
                id: "upload-file",
                label: "Upload file",
                icon: "file",
                onSelected: () => setPage("Home"),
              },
              {
                id: "upload-folder",
                label: "Upload folder",
                icon: "folder",
                onSelected: () => setPage("Home"),
              },
            ],
          },
          {
            id: "add-new-note",
            label: "Add new note",
            icon: "note",
          },
        ],
      },
      favorites: {
        label: "Favorites",
        items: [
          {
            id: "design-inspo",
            label: "Design inspo",
            icon: "spaces",
            onSelected: () => setPage("Design inspo"),
            items: [
              {
                id: "new-fabric-website",
                label: "New Fabric website",
                icon: "link",
                onSelected: () => setPage("Home"),
              },
              {
                id: "command-k-menu-from-linear",
                label: "Command K menu from Linear",
                icon: "link",
                onSelected: () => setPage("Home"),
              },
            ],
          },
          {
            id: "tweets",
            label: "Tweets",
            icon: "spaces",
            onSelected: () => setPage("Tweets"),
            items: [
              {
                id: "tweet-rauno-freiberg",
                label:
                  "Tweet from Rauno Freiberg: New design systems in SwiftUI",
                icon: "link",
                onSelected: () => setPage("Home"),
              },
              {
                id: "tweet-ryan-florence",
                label: "Tweet from Ryan Florence: New React features",
                icon: "link",
                onSelected: () => setPage("Home"),
              },
              {
                id: "tweet-sara-soueidan",
                label: "Tweet from Sara Soueidan: New CSS features",
                icon: "link",
                onSelected: () => setPage("Home"),
              },
              {
                id: "how-to-design-systems",
                label: "How to build design systems",
                icon: "link",
                onSelected: () => setPage("Home"),
              },
              {
                id: "animating-svg",
                label: "Animating SVGs",
                icon: "link",
                onSelected: () => setPage("Home"),
              },
              {
                id: "framer-motion-handbook",
                label: "Framer Motion Handbook",
                icon: "link",
                onSelected: () => setPage("Home"),
              },
            ],
          },
          {
            id: "work-documents",
            label: "Work documents",
            icon: "spaces",
            onSelected: () => setPage("Work documents"),
            items: [
              {
                id: "pdf-2022-q1-roadmap",
                label: "PDF: 2022 Q1 roadmap",
                icon: "file",
                onSelected: () => setPage("Home"),
              },
              {
                id: "pdf-2022-q2-roadmap",
                label: "PDF: 2022 Q2 roadmap",
                icon: "file",
                onSelected: () => setPage("Home"),
              },
              {
                id: "pdf-2022-q3-roadmap",
                label: "PDF: 2022 Q3 roadmap",
                icon: "file",
                onSelected: () => setPage("Home"),
              },
            ],
          },
        ],
      },
      recentItems: {
        label: "Recent items",
        items: [
          {
            id: "command-k-menu-from-linear",
            label: "Command K menu from Linear",
            space: "Design inspo",
            icon: "timeline",
          },
          {
            id: "tweet-rauno-freiberg",
            label: "Tweet from Rauno Freiberg: New design systems in SwiftUI",
            space: "Tweets",
            icon: "timeline",
          },
          {
            id: "pdf-2022-q1-roadmap",
            label: "PDF: 2022 Q1 roadmap",
            space: "Work documents",
            icon: "timeline",
          },
          {
            id: "new-fabric-website",
            label: "New Fabric website",
            space: "Design inspo",
            icon: "timeline",
          },
        ],
      },
    },
    pages: [
      {
        id: "home",
        label: "Home",
        icon: "home",
      },
      {
        id: "add-new-link",
        label: "Add new link",
        icon: "link",
      },
      {
        id: "add-new-upload",
        label: "Add new upload",
        icon: "upload",
      },
    ],
  };
}
