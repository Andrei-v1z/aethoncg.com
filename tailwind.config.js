import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
    ],

    theme: {
        extend: {
            colors: {
                aethon: {
                    black: '#080808',
                    charcoal: '#141414',
                    slate: '#1e1e1e',
                    gold: '#C9A962',
                    'gold-light': '#E8D5A3',
                    'gold-muted': '#8B7340',
                    cream: '#F5F0E8',
                },
            },
            fontFamily: {
                sans: ['DM Sans', ...defaultTheme.fontFamily.sans],
                display: ['Cormorant Garamond', ...defaultTheme.fontFamily.serif],
            },
            backgroundImage: {
                'gold-gradient': 'linear-gradient(135deg, #C9A962 0%, #8B7340 100%)',
                'hero-glow': 'radial-gradient(ellipse 80% 60% at 70% 40%, rgba(201, 169, 98, 0.12) 0%, transparent 70%)',
            },
            letterSpacing: {
                widest: '0.2em',
            },
        },
    },

    plugins: [forms],
};
