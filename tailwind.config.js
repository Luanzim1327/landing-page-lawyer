/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  theme: {
    container: {
      center: true,
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
        'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'header-background' : "url('https://i.pinimg.com/564x/5a/83/72/5a83723dfeb4308269f86b9755812a81.jpg')",
        'contact-background' : "url('https://i.pinimg.com/564x/6b/1b/d2/6b1bd2b750f92767288e326610668b1c.jpg')",
      },
    },
  },
  plugins: [],
}
