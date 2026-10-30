/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        tulyo: {
          bg: '#080C14',
          card: '#0F172A',
          glass: 'rgba(15, 23, 42, 0.75)',
          border: 'rgba(255, 255, 255, 0.1)',
          indigo: '#4F46E5',
          indigoLight: '#6366F1',
          jade: '#10B981',
          jadeLight: '#34D399',
          amber: '#F59E0B',
          amberLight: '#FDE68A',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'prism-glow': 'radial-gradient(circle at 50% 0%, rgba(79, 70, 229, 0.25) 0%, rgba(16, 185, 129, 0.15) 35%, transparent 70%)',
      },
      boxShadow: {
        'glass-glow': '0 0 50px -10px rgba(79, 70, 229, 0.3)',
        'jade-glow': '0 0 35px -5px rgba(16, 185, 129, 0.25)',
        'amber-glow': '0 0 30px -5px rgba(245, 158, 11, 0.25)',
      },
    },
  },
  plugins: [],
};
