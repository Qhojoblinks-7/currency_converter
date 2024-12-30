module.exports = {
  darkMode: 'class', // Enable dark mode by adding a 'dark' class content: 
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  rollupOptions: {
      external: ['react-router-dom']
    },
  theme: {
    extend: {
      
    },
  },
  plugins: [],
}
