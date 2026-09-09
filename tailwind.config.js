/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0B0A14", // near-black indigo, the night sky / castle dark
        parchment: "#EDE3C7", // aged paper text color
        gold: "#C9A227", // candlelight / gilded ink accent
        goldSoft: "#E7C873",
        violet: "#3B1E5E", // arcane violet, secondary panels
        violetDeep: "#1F1033",
        ember: "#7A2E2E", // dim wax-seal red, used sparingly
        emerald: "#12513A", // nod to the python crest without being neon
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "serif"],
        harryp: ["HarryP", "serif"],
      },
      backgroundImage: {
        parchmentTexture:
          "radial-gradient(circle at 20% 20%, rgba(201,162,39,0.06), transparent 40%), radial-gradient(circle at 80% 60%, rgba(59,30,94,0.18), transparent 45%)",
      },
      keyframes: {
        flicker: {
          "0%, 100%": { opacity: 1 },
          "45%": { opacity: 0.82 },
          "50%": { opacity: 0.95 },
          "55%": { opacity: 0.78 },
        },
        drift: {
          "0%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
          "100%": { transform: "translateY(0px)" },
        },
      },
      animation: {
        flicker: "flicker 4s ease-in-out infinite",
        drift: "drift 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
