import { useEffect, useState } from 'react';

function Reviews() {
    const [reviews, setReviews] = useState([]);
    const VARIANT_NUMBER = 6;

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${VARIANT_NUMBER}/comments`)
            .then((res) => res.json())
            .then((data) => setReviews(data))
            .catch((err) => console.error('Помилка завантаження відгуків:', err));
    }, []);

    return (
        <section className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Відгуки попередніх роботодавців</h2>
            <div className="space-y-3">
                {reviews.map((item) => (
                    <div
                        key={item.id}
                        className="p-4 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-sm"
                    >
                        <h3 className="font-semibold text-base">
                            {item.name}{' '}
                            <span className="text-xs font-normal text-slate-500 dark:text-slate-400">
                                ({item.email})
                            </span>
                        </h3>
                        <p className="mt-1 text-sm text-slate-700 dark:text-slate-300">{item.body}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Reviews;