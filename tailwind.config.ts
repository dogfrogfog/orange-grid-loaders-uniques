import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
					glow: 'hsl(var(--primary-glow))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'spin-slow': {
					from: { transform: 'rotate(0deg)' },
					to: { transform: 'rotate(360deg)' }
				},
				'pulse-glow': {
					'0%, 100%': { 
						transform: 'scale(1)', 
						boxShadow: '0 0 20px hsl(var(--primary-glow) / 0.5)' 
					},
					'50%': { 
						transform: 'scale(1.2)', 
						boxShadow: '0 0 40px hsl(var(--primary-glow) / 0.8)' 
					}
				},
				'bounce-soft': {
					'0%, 100%': { transform: 'translateY(0%) rotate(0deg)' },
					'25%': { transform: 'translateY(-15%) rotate(-5deg)' },
					'50%': { transform: 'translateY(-25%) rotate(0deg)' },
					'75%': { transform: 'translateY(-15%) rotate(5deg)' }
				},
				'slide-rotate': {
					'0%': { transform: 'translateX(-100%) rotate(0deg)' },
					'50%': { transform: 'translateX(0%) rotate(180deg)' },
					'100%': { transform: 'translateX(100%) rotate(360deg)' }
				},
				'morph': {
					'0%, 100%': { borderRadius: '50%' },
					'25%': { borderRadius: '25% 75%' },
					'50%': { borderRadius: '75% 25%' },
					'75%': { borderRadius: '40% 60%' }
				},
				'wave': {
					'0%, 100%': { transform: 'scaleY(1)' },
					'50%': { transform: 'scaleY(1.5)' }
				},
				'fire-flicker': {
					'0%, 100%': { 
						transform: 'scale(1) rotate(0deg)',
						filter: 'hue-rotate(0deg) brightness(1)'
					},
					'25%': { 
						transform: 'scale(1.1) rotate(-2deg)',
						filter: 'hue-rotate(10deg) brightness(1.2)'
					},
					'50%': { 
						transform: 'scale(1.15) rotate(0deg)',
						filter: 'hue-rotate(-5deg) brightness(1.1)'
					},
					'75%': { 
						transform: 'scale(1.05) rotate(2deg)',
						filter: 'hue-rotate(15deg) brightness(1.3)'
					}
				},
				'rocket-launch': {
					'0%': { 
						transform: 'translateY(0px) rotate(0deg) scale(1)',
						filter: 'brightness(1)'
					},
					'25%': { 
						transform: 'translateY(-8px) rotate(-10deg) scale(1.1)',
						filter: 'brightness(1.2)'
					},
					'50%': { 
						transform: 'translateY(-15px) rotate(0deg) scale(1.2)',
						filter: 'brightness(1.3)'
					},
					'75%': { 
						transform: 'translateY(-8px) rotate(10deg) scale(1.1)',
						filter: 'brightness(1.2)'
					},
					'100%': { 
						transform: 'translateY(0px) rotate(0deg) scale(1)',
						filter: 'brightness(1)'
					}
				},
				'lightning-zap': {
					'0%, 100%': { 
						transform: 'scale(1) rotate(0deg)',
						filter: 'brightness(1) saturate(1)'
					},
					'10%': { 
						transform: 'scale(1.3) rotate(-5deg)',
						filter: 'brightness(2) saturate(1.5)'
					},
					'20%': { 
						transform: 'scale(1) rotate(0deg)',
						filter: 'brightness(1) saturate(1)'
					},
					'30%': { 
						transform: 'scale(1.2) rotate(3deg)',
						filter: 'brightness(1.8) saturate(1.3)'
					},
					'40%, 90%': { 
						transform: 'scale(1) rotate(0deg)',
						filter: 'brightness(1) saturate(1)'
					}
				},
				'star-twinkle': {
					'0%, 100%': { 
						transform: 'scale(1) rotate(0deg)',
						filter: 'brightness(1)'
					},
					'20%': { 
						transform: 'scale(1.2) rotate(72deg)',
						filter: 'brightness(1.5)'
					},
					'40%': { 
						transform: 'scale(0.9) rotate(144deg)',
						filter: 'brightness(0.8)'
					},
					'60%': { 
						transform: 'scale(1.3) rotate(216deg)',
						filter: 'brightness(1.8)'
					},
					'80%': { 
						transform: 'scale(1.1) rotate(288deg)',
						filter: 'brightness(1.2)'
					}
				},
				'heart-beat': {
					'0%, 100%': { 
						transform: 'scale(1)',
						filter: 'hue-rotate(0deg)'
					},
					'14%': { 
						transform: 'scale(1.2)',
						filter: 'hue-rotate(10deg)'
					},
					'28%': { 
						transform: 'scale(1)',
						filter: 'hue-rotate(0deg)'
					},
					'42%': { 
						transform: 'scale(1.2)',
						filter: 'hue-rotate(10deg)'
					},
					'70%': { 
						transform: 'scale(1)',
						filter: 'hue-rotate(0deg)'
					}
				},
				'hourglass-flip': {
					'0%, 50%': { 
						transform: 'rotate(0deg) scale(1)',
						filter: 'brightness(1)'
					},
					'25%': { 
						transform: 'rotate(90deg) scale(1.1)',
						filter: 'brightness(1.2)'
					},
					'75%': { 
						transform: 'rotate(270deg) scale(1.1)',
						filter: 'brightness(1.2)'
					},
					'100%': { 
						transform: 'rotate(360deg) scale(1)',
						filter: 'brightness(1)'
					}
				},
				'gear-spin': {
					'0%': { 
						transform: 'rotate(0deg) scale(1)',
						filter: 'brightness(1)'
					},
					'25%': { 
						transform: 'rotate(90deg) scale(1.05)',
						filter: 'brightness(1.1)'
					},
					'50%': { 
						transform: 'rotate(180deg) scale(1.1)',
						filter: 'brightness(1.2)'
					},
					'75%': { 
						transform: 'rotate(270deg) scale(1.05)',
						filter: 'brightness(1.1)'
					},
					'100%': { 
						transform: 'rotate(360deg) scale(1)',
						filter: 'brightness(1)'
					}
				},
				'diamond-sparkle': {
					'0%, 100%': { 
						transform: 'scale(1) rotate(0deg)',
						filter: 'brightness(1) saturate(1)'
					},
					'25%': { 
						transform: 'scale(1.15) rotate(15deg)',
						filter: 'brightness(1.4) saturate(1.3)'
					},
					'50%': { 
						transform: 'scale(1.3) rotate(0deg)',
						filter: 'brightness(1.8) saturate(1.5)'
					},
					'75%': { 
						transform: 'scale(1.15) rotate(-15deg)',
						filter: 'brightness(1.4) saturate(1.3)'
					}
				},
				'zombie-walk': {
					'0%, 100%': { 
						transform: 'translateX(0px) rotate(0deg) scale(1)',
						filter: 'hue-rotate(0deg)'
					},
					'25%': { 
						transform: 'translateX(-3px) rotate(-2deg) scale(1.05)',
						filter: 'hue-rotate(10deg)'
					},
					'50%': { 
						transform: 'translateX(0px) rotate(0deg) scale(1.1)',
						filter: 'hue-rotate(20deg)'
					},
					'75%': { 
						transform: 'translateX(3px) rotate(2deg) scale(1.05)',
						filter: 'hue-rotate(10deg)'
					}
				},
				'pumpkin-glow': {
					'0%, 100%': { 
						transform: 'scale(1)',
						filter: 'brightness(1) saturate(1) drop-shadow(0 0 10px rgba(255,165,0,0.5))'
					},
					'50%': { 
						transform: 'scale(1.15)',
						filter: 'brightness(1.3) saturate(1.4) drop-shadow(0 0 25px rgba(255,140,0,0.8))'
					}
				},
				'stock-rise': {
					'0%': { 
						transform: 'translateY(10px) rotate(-5deg) scale(0.9)',
						filter: 'brightness(1)'
					},
					'50%': { 
						transform: 'translateY(-15px) rotate(2deg) scale(1.1)',
						filter: 'brightness(1.3)'
					},
					'100%': { 
						transform: 'translateY(-25px) rotate(5deg) scale(1.2)',
						filter: 'brightness(1.5)'
					}
				},
				'pizza-spin': {
					'0%': { 
						transform: 'rotate(0deg) scale(1)',
						filter: 'brightness(1)'
					},
					'50%': { 
						transform: 'rotate(180deg) scale(1.1)',
						filter: 'brightness(1.2) saturate(1.2)'
					},
					'100%': { 
						transform: 'rotate(360deg) scale(1)',
						filter: 'brightness(1)'
					}
				},
				'cat-bounce': {
					'0%, 100%': { 
						transform: 'translateY(0px) rotate(0deg)',
						filter: 'brightness(1)'
					},
					'25%': { 
						transform: 'translateY(-8px) rotate(-3deg)',
						filter: 'brightness(1.1)'
					},
					'50%': { 
						transform: 'translateY(-15px) rotate(0deg)',
						filter: 'brightness(1.2)'
					},
					'75%': { 
						transform: 'translateY(-8px) rotate(3deg)',
						filter: 'brightness(1.1)'
					}
				},
				'rainbow-wave': {
					'0%': { 
						transform: 'scale(1) rotate(0deg)',
						filter: 'hue-rotate(0deg) brightness(1)'
					},
					'25%': { 
						transform: 'scale(1.1) rotate(5deg)',
						filter: 'hue-rotate(90deg) brightness(1.2)'
					},
					'50%': { 
						transform: 'scale(1.2) rotate(0deg)',
						filter: 'hue-rotate(180deg) brightness(1.3)'
					},
					'75%': { 
						transform: 'scale(1.1) rotate(-5deg)',
						filter: 'hue-rotate(270deg) brightness(1.2)'
					},
					'100%': { 
						transform: 'scale(1) rotate(0deg)',
						filter: 'hue-rotate(360deg) brightness(1)'
					}
				},
				'ufo-hover': {
					'0%, 100%': { 
						transform: 'translateY(0px) rotate(0deg) scale(1)',
						filter: 'brightness(1)'
					},
					'25%': { 
						transform: 'translateY(-5px) rotate(2deg) scale(1.05)',
						filter: 'brightness(1.2)'
					},
					'50%': { 
						transform: 'translateY(-10px) rotate(0deg) scale(1.1)',
						filter: 'brightness(1.4)'
					},
					'75%': { 
						transform: 'translateY(-5px) rotate(-2deg) scale(1.05)',
						filter: 'brightness(1.2)'
					}
				},
				'party-burst': {
					'0%, 100%': { 
						transform: 'scale(1) rotate(0deg)',
						filter: 'brightness(1) saturate(1)'
					},
					'20%': { 
						transform: 'scale(1.3) rotate(20deg)',
						filter: 'brightness(1.5) saturate(1.4)'
					},
					'40%': { 
						transform: 'scale(0.9) rotate(-10deg)',
						filter: 'brightness(0.8) saturate(0.8)'
					},
					'60%': { 
						transform: 'scale(1.2) rotate(15deg)',
						filter: 'brightness(1.4) saturate(1.3)'
					},
					'80%': { 
						transform: 'scale(1.1) rotate(-5deg)',
						filter: 'brightness(1.1) saturate(1.1)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'spin-slow': 'spin-slow 3s linear infinite',
				'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
				'bounce-soft': 'bounce-soft 1.5s ease-in-out infinite',
				'slide-rotate': 'slide-rotate 3s ease-in-out infinite',
				'morph': 'morph 4s ease-in-out infinite',
				'wave': 'wave 1s ease-in-out infinite',
				'fire-flicker': 'fire-flicker 1.8s ease-in-out infinite',
				'rocket-launch': 'rocket-launch 2.2s ease-in-out infinite',
				'lightning-zap': 'lightning-zap 1.6s ease-in-out infinite',
				'star-twinkle': 'star-twinkle 3.2s ease-in-out infinite',
				'heart-beat': 'heart-beat 1.4s ease-in-out infinite',
				'hourglass-flip': 'hourglass-flip 2.8s ease-in-out infinite',
				'gear-spin': 'gear-spin 2.4s ease-in-out infinite',
				'diamond-sparkle': 'diamond-sparkle 2.6s ease-in-out infinite',
				'zombie-walk': 'zombie-walk 2s ease-in-out infinite',
				'pumpkin-glow': 'pumpkin-glow 2.2s ease-in-out infinite',
				'stock-rise': 'stock-rise 2.5s ease-in-out infinite',
				'pizza-spin': 'pizza-spin 2s ease-in-out infinite',
				'cat-bounce': 'cat-bounce 1.8s ease-in-out infinite',
				'rainbow-wave': 'rainbow-wave 3s ease-in-out infinite',
				'ufo-hover': 'ufo-hover 2.5s ease-in-out infinite',
				'party-burst': 'party-burst 1.5s ease-in-out infinite'
			},
			backgroundImage: {
				'gradient-warm': 'var(--gradient-warm)',
				'gradient-sunset': 'var(--gradient-sunset)',
				'gradient-glow': 'var(--gradient-glow)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
