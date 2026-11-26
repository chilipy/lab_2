import { useEffect, useState } from 'react';

function Footer() {
    const [systemInfo, setSystemInfo] = useState('');

    useEffect(() => {
        const info = {
            platform: navigator.platform,
            userAgent: navigator.userAgent,
        };

        localStorage.setItem('systemInfo', JSON.stringify(info));

        const savedInfo = JSON.parse(localStorage.getItem('systemInfo'));
        if (savedInfo) {
            setSystemInfo(`ОС: ${savedInfo.platform} | Браузер: ${savedInfo.userAgent}`);
        }
    }, []);

    return (
        <footer className="text-center text-slate-500 dark:text-slate-400 text-sm py-6 mt-8 border-t border-slate-200 dark:border-slate-700">
            <p>© 2026 Олег Войценко. Створено з використанням React та Tailwind CSS.</p>
            {systemInfo && (
                <p className="mt-2 text-xs text-slate-400 dark:text-slate-500 break-all px-4">
                    {systemInfo}
                </p>
            )}
        </footer>
    );
}

export default Footer;