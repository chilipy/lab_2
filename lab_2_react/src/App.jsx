import { useEffect, useState } from 'react';
import Header from './components/Header';
import Experience from './components/Experience';
import Education from './components/Education';
import Reviews from './components/Reviews';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
    const [theme, setTheme] = useState('light');

    // Автоматичне визначення теми при завантаженні (07:00 - 21:00 -> light, інакше -> dark)
    useEffect(() => {
        const currentHour = new Date().getHours();
        if (currentHour >= 7 && currentHour < 21) {
            setTheme('light');
        } else {
            setTheme('dark');
        }
    }, []);

    // Застосування класу 'dark' до <html> або <body> для роботи стилів Tailwind CSS
    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
            document.body.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
            document.body.classList.remove('dark');
        }
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <div
            className={`min-h-screen py-8 px-4 transition-colors duration-300 ${theme === 'dark'
                    ? 'bg-slate-900 text-slate-100'
                    : 'bg-slate-100 text-slate-900'
                }`}
        >
            <div className="max-w-3xl mx-auto">
                <div className="flex justify-end mb-4">
                    <button
                        onClick={toggleTheme}
                        className="px-4 py-2 rounded-lg text-sm font-medium border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 hover:bg-slate-50 dark:hover:bg-slate-700 shadow-sm cursor-pointer transition"
                    >
                        {theme === 'light' ? '🌙 Нічний режим' : '☀️ Денний режим'}
                    </button>
                </div>

                <Header />

                <main>
                    <Experience />
                    <Reviews />
                    <Education />
                </main>

                <Footer />
                <ContactForm />
            </div>
        </div>
    );
}

export default App;