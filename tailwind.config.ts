import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			primary: {
  				blue: '#00AEEF',
  				navy: '#002B5C',
  				cyan: '#18FFFF',
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				orange: '#FF8C00',
  				yellow: '#FFD700',
  				grey: '#A9B0B8',
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			accent: {
  				pink: '#FF1493',
  				purple: '#8A2BE2',
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			neutral: {
  				silver: '#EAEAEA',
  				charcoal: '#2C2C2C',
  				offwhite: '#F5F5F5'
  			},
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;

// theme: {
//   extend: {
//     colors: {
//       background: "var(--background)",
//       foreground: "var(--foreground)",
//       primary: "#111533", // Deep blue, for sidebar background and header
//       secondary: "#FDC63D", // Bright yellow, for buttons and accents
//       accent: "#5a5a61", // Light blue for text highlights
//       light: "#F5F5F5", // Light background for cards or sections
//       textPrimary: "#FFFFFF", // White, for main text on dark backgrounds
//       textSecondary: "#757575", // Grey text for secondary information
//     },
//   },
// },
// plugins: [],
// };

// Vivid Blue (#00AEEF) - Matches the holographic displays and robot accents.
// Deep Navy Blue (#002B5C) - Provides depth and contrast to the vivid blue.
// Cyan (#18FFFF) - For highlights or interactive elements like buttons and links.
// Secondary Colors:
// Warm Orange (#FF8C00) - Complements the sunset tones in the image.
// Golden Yellow (#FFD700) - Highlights to add brightness and tie into the warm environment.
// Cool Grey (#A9B0B8) - Neutral tones for backgrounds and subtle accents.
// Accent Colors:
// Neon Pink (#FF1493) - Adds futuristic energy and contrasts nicely with the blue.
// Electric Purple (#8A2BE2) - To enhance a tech-savvy aesthetic.
// Neutral Backgrounds:
// Light Silver (#EAEAEA) - Softens the vivid elements and balances the design.
// Charcoal Grey (#2C2C2C) - Sleek and modern for darker sections.
// Off-White (#F5F5F5) - Keeps it clean and professional.
// Tips for Usage:
// Use the vivid blue (#00AEEF) for CTAs, headings, and key elements.
// Use warm orange or golden yellow sparingly to guide attention or highlight calls to action.
// Keep neutral tones like light silver or off-white for most backgrounds to avoid overwhelming users with intense colors.
// Apply deep navy blue or charcoal grey for footer, header, or darker sections.
