/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Your accent color (orange) — used ONLY on buttons
        primary: {
          500: "#FF5C39",  // main accent
          600: "#E04D2E",  // slightly darker for hover states
        },
        // Your full palette mapped to semantic names
        background: "#EAE3D9",      // main page background
        card: "#111111",             // dark card background
        "text-on-bg": "#1A1A1A",     // text sitting on light background
        "text-on-card": "#F5F0E8",   // text sitting on dark card
        
        // Grays — kept minimal, mostly for fallbacks
        gray: {
          50: "#F5F0E8",    // light (your card text)
          100: "#EAE3D9",   // very light (your background)
          900: "#1A1A1A",   // dark (your text)
          950: "#111111",   // very dark (your card)
        },
      },
      fontFamily: {
        heading: ["Manrope", "sans-serif"],   // for h1, h2, h3
        body: ["IBM Plex Sans", "sans-serif"], // for paragraphs, regular text
      },
    },
    container: {
      padding: "2rem",
    },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [],
};

export default tailwindConfig;