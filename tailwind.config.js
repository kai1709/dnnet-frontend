/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  mode: 'jit',
  content: ['./src/app/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      xs: '576',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px'
    },
    extend: {
      fontFamily: {
        primary: ['var(--font-primary)']
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      fontSize: {
        tiny: '0.625rem', // 10px
        xs: '0.75rem', // 12px
        sm: '0.875rem', // 14px
        base: '1rem', // 16px
        lg: '1.125rem', // 18px
        xl: '1.25rem', // 20px
        '2xl': '1.5rem', // 24px
        xxl: '1.75rem', // 28px
        '3xl': '1.875rem', // 30px
        '4xl': '2.25rem', // 36px
        '5xl': '3rem' // 48px
      },
      colors: {
        navi: 'var(--navi)',
        'grey-1': 'var(--grey-1)',
        'main-background': 'var(--main-background)',
        'head-line': 'var(--head-line)',
        'section-high-light': 'var(--section-high-light)',
        'head-line-title': 'var(--head-line-title)',
        'section-header': 'var(--section-header)',
        'section-header': 'var(--section-header)',
        'section-header-background': 'var(--section-header-background)',
        paragraph: 'var(--paragraph)',
        white: 'var(--white)',
        'section-border': 'var(--section-border)'
        // background: 'hsl(var(--background))',
        // foreground: 'hsl(var(--foreground))',
        // card: {
        //   DEFAULT: 'hsl(var(--card))',
        //   foreground: 'hsl(var(--card-foreground))'
        // },
        // popover: {
        //   DEFAULT: 'hsl(var(--popover))',
        //   foreground: 'hsl(var(--popover-foreground))'
        // },
        // primary: {
        //   DEFAULT: 'hsl(var(--primary))',
        //   foreground: 'hsl(var(--primary-foreground))'
        // },
        // secondary: {
        //   DEFAULT: 'hsl(var(--secondary))',
        //   foreground: 'hsl(var(--secondary-foreground))'
        // },
        // muted: {
        //   DEFAULT: 'hsl(var(--muted))',
        //   foreground: 'hsl(var(--muted-foreground))'
        // },
        // accent: {
        //   DEFAULT: 'hsl(var(--accent))',
        //   foreground: 'hsl(var(--accent-foreground))'
        // },
        // destructive: {
        //   DEFAULT: 'hsl(var(--destructive))',
        //   foreground: 'hsl(var(--destructive-foreground))'
        // },
        // border: 'hsl(var(--border))',
        // input: 'hsl(var(--input))',
        // ring: 'hsl(var(--ring))',
        // chart: {
        //   1: 'hsl(var(--chart-1))',
        //   2: 'hsl(var(--chart-2))',
        //   3: 'hsl(var(--chart-3))',
        //   4: 'hsl(var(--chart-4))',
        //   5: 'hsl(var(--chart-5))'
        // }
      }
    }
  },
  safelist: [{ pattern: /grid-cols-.+/ }],
  variants: {
    extend: {}
  },
  plugins: [require('tailwind-scrollbar'), require('tailwindcss-animate')]
}
