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
                    black: '#000C24',
                    navy: '#001529',
                    charcoal: '#0A1F3D',
                    slate: '#132842',
                    gold: '#C59D5F',
                    'gold-light': '#D4B483',
                    'gold-muted': '#8E7040',
                    cream: '#E8E2D6',
                },
            },
            fontFamily: {
                sans: ['DM Sans', ...defaultTheme.fontFamily.sans],
                display: ['Cinzel', 'Cormorant Garamond', ...defaultTheme.fontFamily.serif],
            },
            backgroundImage: {
                'gold-gradient': 'linear-gradient(135deg, #C59D5F 0%, #8E7040 100%)',
                'hero-glow': 'radial-gradient(ellipse 80% 60% at 70% 40%, rgba(197, 157, 95, 0.14) 0%, transparent 70%)',
            },
            letterSpacing: {
                widest: '0.2em',
            },
        },
    },

    plugins: [forms],
};
