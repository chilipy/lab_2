function Experience() {
    return (
        <section className="bg-white p-6 rounded-xl shadow-md border border-slate-200 mt-6">
            <h2 className="text-xl font-bold text-slate-800 border-b pb-2 mb-4">Досвід та навички</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition">
                    <h3 className="font-semibold text-slate-700">Веб-розробка</h3>
                    <p className="text-sm text-slate-600 mt-1">HTML5, CSS3, React, Vite, Tailwind CSS</p>
                </div>
                <div className="p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition">
                    <h3 className="font-semibold text-slate-700">Програмування та Мережі</h3>
                    <p className="text-sm text-slate-600 mt-1">Python, C#, SQL, налаштування Cisco</p>
                </div>
            </div>
        </section>
    );
}
export default Experience;