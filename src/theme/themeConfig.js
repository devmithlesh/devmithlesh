export const THEME_STORAGE_KEY = "portfolio-theme";
export const DEFAULT_THEME = "white";

const sharedVariables = {
  "--yellow": "#ffbf00",
  "--yellow-1": "rgb(255, 230, 0)",
  "--white": "#ffffff",
  "--white-1": "#fff",
  "--black": "#171717",
  "--black-2": "#404040",
  "--black-3": "#111827",
  "--black-4": "#171717",
  "--black-5": "rgba(0, 0, 0, 0.5)",
  "--black-6": "#171717",
  "--black-7": "#171717",
  "--scroll": "#ffbf00",
  "--grey": "#f5f5f5",
  "--grey-1": "gray",
  "--blue": "rgb(47, 84, 150)",
  "--lightblacktext": "#333333",
  "--app-bg": "#eeecec",
  "--app-bg-soft": "#f7f5f2",
  "--surface-soft": "#e9e7e3",
  "--theme-soft": "rgba(255, 191, 0, 0.08)",
  "--theme-soft-strong": "rgba(255, 191, 0, 0.22)",
  "--theme-glow-1": "rgba(255, 191, 0, 0.18)",
  "--theme-glow-2": "rgba(47, 84, 150, 0.08)",
  "--surface-border": "rgba(255, 191, 0, 0.16)",
  "--panel-shadow": "rgba(155, 120, 0, 0.08)",
};

export const themes = {
  white: {
    name: "white",
    variables: sharedVariables,
  },
  dark: {
    name: "dark",
    variables: {
      ...sharedVariables,
      "--white": "#171717",
      "--white-1": "#262626",
      "--black": "#ffffff",
      "--black-3": "#404040",
      "--black-4": "#ffffff",
      "--black-5": "#404040",
      "--black-6": "#ffffff",
      "--black-7": "#ffffff",
      "--grey": "#1f2937",
      "--grey-1": "#525252",
      "--scroll": "#404040",
      "--lightblacktext": "#e5e7eb",
      "--app-bg": "#111318",
      "--app-bg-soft": "#171a20",
      "--surface-soft": "#20242d",
      "--theme-soft": "rgba(255, 191, 0, 0.08)",
      "--theme-soft-strong": "rgba(255, 191, 0, 0.2)",
      "--theme-glow-1": "rgba(255, 191, 0, 0.14)",
      "--theme-glow-2": "rgba(255, 255, 255, 0.06)",
      "--surface-border": "rgba(255, 191, 0, 0.14)",
      "--panel-shadow": "rgba(0, 0, 0, 0.28)",
    },
  },
  green: {
    name: "green",
    variables: {
      ...sharedVariables,
      "--yellow": "#50b154",
      "--yellow-1": "#6bc46f",
      "--scroll": "#50b154",
      "--blue": "#50b154",
      "--black-6": "#ffffff",
      "--black-7": "#ffffff",
      "--app-bg": "#edf4ee",
      "--app-bg-soft": "#f7fbf7",
      "--surface-soft": "#e3efe5",
      "--theme-soft": "rgba(80, 177, 84, 0.1)",
      "--theme-soft-strong": "rgba(80, 177, 84, 0.22)",
      "--theme-glow-1": "rgba(80, 177, 84, 0.18)",
      "--theme-glow-2": "rgba(37, 122, 62, 0.08)",
      "--surface-border": "rgba(80, 177, 84, 0.16)",
      "--panel-shadow": "rgba(53, 111, 56, 0.08)",
    },
  },
  purple: {
    name: "purple",
    variables: {
      ...sharedVariables,
      "--yellow": "#634db5",
      "--yellow-1": "#8571cd",
      "--scroll": "#634db5",
      "--blue": "#634db5",
      "--black-6": "#ffffff",
      "--black-7": "#ffffff",
      "--app-bg": "#f1eef7",
      "--app-bg-soft": "#faf8fc",
      "--surface-soft": "#e8e2f4",
      "--theme-soft": "rgba(99, 77, 181, 0.1)",
      "--theme-soft-strong": "rgba(99, 77, 181, 0.22)",
      "--theme-glow-1": "rgba(99, 77, 181, 0.18)",
      "--theme-glow-2": "rgba(145, 116, 211, 0.08)",
      "--surface-border": "rgba(99, 77, 181, 0.16)",
      "--panel-shadow": "rgba(84, 67, 142, 0.08)",
    },
  },
  blue: {
    name: "blue",
    variables: {
      ...sharedVariables,
      "--yellow": "#0b48d3",
      "--yellow-1": "#3a6ce0",
      "--scroll": "#0b48d3",
      "--blue": "#0b48d3",
      "--black-6": "#ffffff",
      "--black-7": "#ffffff",
      "--app-bg": "#edf2fb",
      "--app-bg-soft": "#f7f9fe",
      "--surface-soft": "#e1eafc",
      "--theme-soft": "rgba(11, 72, 211, 0.1)",
      "--theme-soft-strong": "rgba(11, 72, 211, 0.22)",
      "--theme-glow-1": "rgba(11, 72, 211, 0.18)",
      "--theme-glow-2": "rgba(58, 108, 224, 0.08)",
      "--surface-border": "rgba(11, 72, 211, 0.16)",
      "--panel-shadow": "rgba(11, 72, 211, 0.08)",
    },
  },
};

export const themeOptions = [
  { key: "dark", label: "Dark Mode", group: "Dark Theme", swatch: "#121212" },
  { key: "green", label: "Green", group: "Accent Colors", swatch: "#50b154" },
  { key: "purple", label: "Purple", group: "Accent Colors", swatch: "#634db5" },
  { key: "blue", label: "Blue", group: "Accent Colors", swatch: "#0b48d3" },
];

export function getThemeByKey(themeKey) {
  return themes[themeKey] || themes[DEFAULT_THEME];
}

export function getStoredThemeKey() {
  if (typeof window === "undefined") {
    return DEFAULT_THEME;
  }

  const storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
  return storedTheme && themes[storedTheme] ? storedTheme : DEFAULT_THEME;
}
