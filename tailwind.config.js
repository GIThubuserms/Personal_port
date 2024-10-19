/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        translateX: {
          "0%": {
            transform: 'translateX(100%)', // Start off-screen to the right
          },
          "100%": {
            transform: 'translateX(-100%)', // Move to off-screen to the left
          },
        },
      },
      animation: {
        translation: "translateX 7s linear infinite",
        'ping-once': 'bounce 1s ease-in-out 1',
      },
    },
  },
  plugins: [],
}
