/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'custom-soft-red': 'hsl(10, 79%, 65%)',
        'custom-cyan': 'hsl(186, 34%, 60%)',
        'custom-dark-brown': 'hsl(25, 47%, 15%)',
        'custom-medium-brown': 'hsl(28, 10%, 53%)',
        'custom-cream': 'hsl(27, 66%, 92%)',
        'custom-very-pale-orange': 'hsl(33, 100%, 98%)',
      },
      fontFamily: {
        'custom': "DM Sans",
      }
    },
  },
  plugins: [],
}

