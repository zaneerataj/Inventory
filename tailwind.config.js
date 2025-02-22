// tailwind.config.js

const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  darkMode: ['class'], // Enable dark mode based on the 'class' attribute

  content: [
    './pages/**/*.{ts,tsx}', // Paths to TypeScript and TypeScript React files in the pages directory
    './components/**/*.{ts,tsx}', // Paths to TypeScript and TypeScript React files in the components directory
    './app/**/*.{ts,tsx}', // Paths to TypeScript and TypeScript React files in the app directory
    './src/**/*.{ts,tsx}', // Paths to TypeScript and TypeScript React files in the src directory
  ],

  prefix: '', // Optional: Prefix for all generated classes, leave empty if not needed

  theme: {
    container: {
      center: true, // Center the content within the container
      padding: '2rem', // Add padding of 2rem to all container elements
      screens: {
        '2xl': '1400px', // Custom screen size for 2xl screens
      },
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))', // Custom border color
        input: 'hsl(var(--input))', // Custom input color
        ring: 'hsl(var(--ring))', // Custom ring color
        background: 'hsl(var(--background))', // Custom background color
        foreground: 'hsl(var(--foreground))', // Custom foreground color
        primary: {
          DEFAULT: 'hsl(var(--primary))', // Default primary color
          foreground: 'hsl(var(--primary-foreground))', // Custom primary foreground color
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))', // Default secondary color
          foreground: 'hsl(var(--secondary-foreground))', // Custom secondary foreground color
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))', // Default destructive color
          foreground: 'hsl(var(--destructive-foreground))', // Custom destructive foreground color
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))', // Default muted color
          foreground: 'hsl(var(--muted-foreground))', // Custom muted foreground color
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))', // Default accent color
          foreground: 'hsl(var(--accent-foreground))', // Custom accent foreground color
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))', // Default popover color
          foreground: 'hsl(var(--popover-foreground))', // Custom popover foreground color
        },
        card: {
          DEFAULT: 'hsl(var(--card))', // Default card color
          foreground: 'hsl(var(--card-foreground))', // Custom card foreground color
        },
      },
      borderRadius: {
        lg: `var(--radius)`, // Large border radius using custom CSS variable
        md: `calc(var(--radius) - 2px)`, // Medium border radius using custom CSS variable
        sm: 'calc(var(--radius) - 4px)', // Small border radius using custom CSS variable
      },
      fontFamily: {
        sans: ['var(--font-sans)', ...fontFamily.sans], // Custom sans-serif font using a CSS variable
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' }, // Animation keyframes for accordion-down effect
          to: { height: 'var(--radix-accordion-content-height)' }, // Animation keyframes for accordion-down effect
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' }, // Animation keyframes for accordion-up effect
          to: { height: '0' }, // Animation keyframes for accordion-up effect
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out', // Animation definition for accordion-down effect
        'accordion-up': 'accordion-up 0.2s ease-out', // Animation definition for accordion-up effect
      },
    },
  },

  plugins: [
    require('tailwindcss-animate'), // Include the tailwindcss-animate plugin for additional animations
  ],
};
