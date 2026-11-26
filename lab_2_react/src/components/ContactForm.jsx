import { useEffect, useState } from 'react';

function ContactForm() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsOpen(true);
        }, 60000); // 60000 мс = 1 хвилина

        return () => clearTimeout(timer);
    }, []);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
            <div className="bg-white dark:bg-slate-800 text-slate-900 dark:text-white rounded-xl max-w-md w-full p-6 relative shadow-xl border border-slate-200 dark:border-slate-700">
                <button
                    onClick={() => setIsOpen(false)}
                    className="absolute top-3 right-4 text-slate-500 hover:text-slate-800 dark:hover:text-white text-xl font-bold cursor-pointer"
                    title="Закрити"
                >
                    ✕
                </button>

                <h3 className="text-xl font-bold mb-4">Зворотний зв'язок</h3>

                <form
                    action="https://formspree.io/f/ВАШ_ЕНДПОЙНТ"
                    method="POST"
                    className="flex flex-col gap-3"
                >
                    <input
                        type="text"
                        name="name"
                        placeholder="Ім'я"
                        required
                        className="p-2.5 rounded border border-slate-300 dark:border-slate-600 bg-transparent"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        required
                        className="p-2.5 rounded border border-slate-300 dark:border-slate-600 bg-transparent"
                    />
                    <input
                        type="tel"
                        name="phone"
                        placeholder="Номер телефону"
                        required
                        className="p-2.5 rounded border border-slate-300 dark:border-slate-600 bg-transparent"
                    />
                    <textarea
                        name="message"
                        placeholder="Повідомлення"
                        rows="4"
                        required
                        className="p-2.5 rounded border border-slate-300 dark:border-slate-600 bg-transparent"
                    />
                    <button
                        type="submit"
                        className="mt-1 py-2.5 px-4 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded cursor-pointer"
                    >
                        Надіслати
                    </button>
                </form>
            </div>
        </div>
    );
}

export default ContactForm;