import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

export default {
  content: [
    "./app/**/*.{html,js,ts,jsx,tsx}",
    "./components/**/*.{html,js,ts,jsx,tsx}",
    "./features/**/*.{html,js,ts,jsx,tsx}",
    "./public/**/*.{html,js}", // if you have HTML or JS files in the public folder
    "./styles/**/*.css",
  ],

  darkMode: "selector", // Enables dark mode via the 'dark' class on the <html> element
  theme: {
    extend: {
      colors: {
        // Background Colors (for different sections)
        "background-main": "#F9F9F9", // Slightly off-white - Main background (avoids bright white, soft, clean look)
        "background-secondary": "#F9F7F2", // Warm off-white - Secondary background (sections, subtle contrast, calm)

        // Dark Mode Backgrounds
        "background-main-dark": "#1e1e1e", // Dark gray - Main background
        "background-secondary-dark": "#333333", // Medium dark gray - Secondary background
        "background-tertiary-dark": "#121212", // Very dark gray - Tertiary background (cards, elevated elements)

        // 🌟 Primary Color (Brand color) - Used for logos, links, main UI accents
        primary: "#30638e", // Muted teal blue - Professional, modern feel
        "primary-dark": "#244f6c", // Darker variant of primary - for hover states or dark mode
        "primary-contrast": "#ffffff", // White - Ideal text color on primary color for high contrast

        // 🎨 Secondary Color (Supporting color) - Used for secondary buttons, borders, icons
        secondary: "#e0e0e0", // Light gray - Primary supporting color, used for secondary UI elements, borders, or backgrounds
        "secondary-dark": "#b8b8b8", // Medium gray - A darker, more defined shade for hover states, borders, or elements requiring more emphasis
        "secondary-contrast": "#333333", // Dark gray - For text or icons on secondary elements, ensuring readability and contrast

        // 🔥 Accent/Alert Color (CTA color) - Used only for CTA buttons, attention elements
        accent: "#2D2D2A", // Dark charcoal - Can be used for strong CTAs or important text
        "accent-dark": "#1c1c1b", // Darker variant of accent - for hover states or dark mode
        "accent-contrast": "#F9F9F9", // Slightly off-white - For text or icons on accent elements, ensuring readability

        // Border Colors
        border: "#e0e0e0", // Soft gray - Used for non-interactive borders (dividers, content separation)

        // Dark Mode Border Colors
        "border-dark": "#555555", // Lighter dark gray - Non-interactive borders (dividers, content separation)

        // 🌚 Light Mode and Dark Mode specific for Text
        strong: "#121212", // Darkest text for strong emphasis (headings) in light mode
        normal: "#333333", // Default text in light mode
        muted: "#666666", // Muted text in light mode
        subtle: "#999999", // Subtle text in light mode
        disabled: "#b0b0b0", // Disabled text in light mode

        // 🌑 Dark Mode Text Colors
        "strong-dark": "#ffffff", // Light text for strong emphasis in dark mode
        "normal-dark": "#e0e0e0", // Default text in dark mode
        "muted-dark": "#aaaaaa", // Muted text in dark mode
        "subtle-dark": "#cccccc", // Subtle text in dark mode
        "disabled-dark": "#888888", // Disabled text in dark mode
      },
      fontFamily: {
        primary: ["var(--font-lato)"], // Body text
        secondary: ["var(--font-league-spartan)", "sans-serif"], // Headings
        // secondary: ["var(--font-montserrat)"], // Headings
        accent: ["var(--font-archivo)"], // Accent font
      },

      spacing: {
        "site-header-height": "4rem", // 'h-16 or 64px'
        "site-header-height-sm": "5rem", // 'h-20 or 80px'
        "site-header-height-lg": "6rem", // 'h-24 or 96px'
      },
    },
  },

  plugins: [
    plugin(function ({ addVariant }) {
      // The 'light' and 'dark' classes are added to the <html> element
      // based on the theme selected via the useThemeToggle hook in your application.
      // The hook toggles between 'light' and 'dark' modes, and these classes are
      // applied to the root element of the page (document.documentElement).
      //
      // When 'light' mode is active, the class 'light' will be on <html>,
      // and any styles with the 'light:' prefix will be applied.
      // When 'dark' mode is active, the class 'dark' will be on <html>,
      // and any styles with the 'dark:' prefix will be applied.
      addVariant("light", ".light &");
      addVariant("dark", ".dark &");
    }),
  ],
} satisfies Config;

// Color Palette Breakdown:
// Primary Colors:

// Light: #4F46E5 — For lighter elements such as buttons, links, or accents.
// DEFAULT: #3B82F6 — The main brand color for calls to action, buttons, etc.
// Dark: #1E3A8A — For darker variants of the primary color (e.g., deep blue for hover or focus states).
// Secondary Colors:

// Light: #FACC15 — A light yellow for background highlights or soft accents.
// DEFAULT: #F59E0B — Your main secondary color (yellow), for buttons or key elements.
// Dark: #B45309 — A dark, burnt orange for hover states or emphasized text.
// Neutral Colors:

// Light: #F3F4F6 — Soft gray for light backgrounds.
// DEFAULT: #9CA3AF — Medium gray for text or borders.
// Dark: #374151 — Dark gray for headings or strong accents.
// Success, Error, Warning, and Info Colors:

// These are predefined colors for status messages like success, error, warnings, or informational messages.
// They have a light, DEFAULT, and dark shade for flexibility.
// Background Colors:

// Light: #F9FAFB — Light background for sections (great for light mode).
// DEFAULT: #FFFFFF — A clean, white background (default for most containers).
// Dark: #111827 — A dark background for dark mode.
