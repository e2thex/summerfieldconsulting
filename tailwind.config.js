/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
        "./src/**/*.{html,js}",  // Only scan src directory
    ],
    theme: {
        extend: {
            colors: {
                'accent-1': '#4F46E5', // Darker indigo for better contrast
                'accent-2': '#6366F1',
                'off-white': '#f8f8f8',
                'off-black': '#121212',
                'dark-bg': '#121212',
                'dark-card': '#1E1E1E',
                'dark-hover': '#2A2A2A',
                'gray-text': '#6B7280', // Accessible gray for light mode
                'dark-gray-text': '#A1A1AA' // Accessible gray for dark mode
            },
            fontFamily: {
                'heading': ['Nunito', 'sans-serif'],
                'body': ['Inter', 'sans-serif'],
            }
        }
    },
    plugins: [],
} 