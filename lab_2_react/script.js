// 1. Зберігання даних про ОС та браузер у localStorage і вивід у футер
const systemInfo = {
    platform: navigator.platform,
    userAgent: navigator.userAgent,
    language: navigator.language
};

localStorage.setItem('systemInfo', JSON.stringify(systemInfo));

const savedSystemInfo = JSON.parse(localStorage.getItem('systemInfo'));
const systemInfoContainer = document.getElementById('system-info');
if (systemInfoContainer && savedSystemInfo) {
    systemInfoContainer.textContent = `ОС: ${savedSystemInfo.platform} | Браузер: ${savedSystemInfo.userAgent}`;
}

// 2. Отримання коментарів із JSONPlaceholder
const VARIANT_NUMBER = 6;

async function fetchEmployerComments() {
    const container = document.getElementById('reviews-container');
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${VARIANT_NUMBER}/comments`);
        const comments = await response.json();

        container.innerHTML = '';
        comments.forEach((comment) => {
            const card = document.createElement('div');
            card.className = 'review-card';
            card.innerHTML = `
                <h4>${comment.name} <small style="font-weight: normal; opacity: 0.7;">(${comment.email})</small></h4>
                <p>${comment.body}</p>
            `;
            container.appendChild(card);
        });
    } catch (error) {
        container.textContent = 'Не вдалося завантажити коментарі.';
        console.error('Помилка отримання даних:', error);
    }
}

fetchEmployerComments();

// 3. Модальне вікно форми через 1 хвилину (60000 мс)
const feedbackModal = document.getElementById('feedback-modal');
const closeModalBtn = document.getElementById('close-modal');

setTimeout(() => {
    feedbackModal.classList.remove('hidden');
}, 60000);

closeModalBtn.addEventListener('click', () => {
    feedbackModal.classList.add('hidden');
});

// 4. Перемикання денної та нічної теми (автоматично за часом + вручну)
const themeToggleBtn = document.getElementById('theme-toggle');

function applyAutoTheme() {
    const currentHour = new Date().getHours();
    if (currentHour >= 7 && currentHour < 21) {
        document.body.classList.remove('dark-theme');
    } else {
        document.body.classList.add('dark-theme');
    }
}

applyAutoTheme();

themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
});
