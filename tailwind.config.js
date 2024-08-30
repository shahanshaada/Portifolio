/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-dark': 'rgb(25, 25, 36)',
        'custom-blue': 'rgb(133, 76, 230)',
        'custom-violet': 'rgb(156, 39, 176)',
        'custom-black':'rgb(23, 23, 33)'
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
    },
    boxShadow: {
      customblue: 'rgba(23, 92, 230, 0.15) 0px 4px 24px',
      customblack:'rgba(0, 0, 0, 0.4) 0px 0px 12px 4px',
      customSkill:'rgba(23, 92, 230, 0.15) 0px 4px 24px'
    },
    },
  },
  plugins: [],
}

