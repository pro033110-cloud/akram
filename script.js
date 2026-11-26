// 1. Находим кнопку в HTML по её уникальному ID
const toggleButton = document.getElementById('theme-toggle');

// 2. Слушаем клик по этой кнопке
toggleButton.addEventListener('click', function() {
    
    // 3. Переключаем (добавляем/удаляем) класс dark-theme у тега body
    document.body.classList.toggle('dark-theme');
    
    // 4. Меняем текст на самой кнопке в зависимости от темы
    if (document.body.classList.contains('dark-theme')) {
        toggleButton.textContent = 'Включить светлую тему';
    } else {
        toggleButton.textContent = 'Включить темную тему';
    }
});
// ВАЛИДАЦИЯ ФОРМЫ ОБРАТНОЙ СВЯЗИ
// 1. Находим форму и поля ввода по их ID или тегам
const contactForm = document.getElementById('contact-form');
const userNameInput = document.getElementById('name');
const userMessageInput = document.getElementById('message');

// 2. Слушаем событие отправки формы (submit)
contactForm.addEventListener('submit', function(event) {
    
    // Предотвращаем стандартное поведение (перезагрузку страницы)
    event.preventDefault();
    
    // Получаем значения, которые ввёл пользователь, и убираем лишние пробелы (trim)s
    const nameValue = userNameInput.value.trim();
    const messageValue = userMessageInput.value.trim();
    
    // 3. Проверяем условие: например, сообщение должно быть длиннее 5 символов
    if (messageValue.length < 5) {
        alert('Пожалуйста, напишите более подробное сообщение (минимум 5 символов).');
        return; // Останавливаем выполнение функции, форму не отправляем
    }
    
    // 4. Если проверка пройдена, показываем окно успеха
    alert(`Спасибо, ${nameValue}! Ваше сообщение успешно отправлено.`);
    
    // Очищаем форму для нового ввода
    contactForm.reset();
});
// УПРАВЛЕНИЕ ТЕМНОЙ ТЕМОЙ С ЛОКАЛЬНЫМ ХРАНИЛИЩЕ
// 1. ПРОВЕРКА ПРИ ЗАГРУЗКЕ: Проверяем, сохранена ли уже темная тема в памяти
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-theme');
    toggleButton.textContent = 'Включить светлую тему';
}

// 2. КЛИК ПО КНОПКЕ: Слушаем нажатие на переключатель
toggleButton.addEventListener('click', function() {
    
    // Переключаем класс темы
    document.body.classList.toggle('dark-theme');
    
    // 3. СОХРАНЕНИЕ В ПАМЯТЬ: Проверяем, какая тема сейчас включилась, и записываем это
    if (document.body.classList.contains('dark-theme')) {
        toggleButton.textContent = 'Включить светлую тему';
        localStorage.setItem('theme', 'dark'); // Записываем в память ключ "theme" со значением "dark"
    } else {
        toggleButton.textContent = 'Включить темную тему';
        localStorage.setItem('theme', 'light'); // Записываем значение "light"
    }
});
// ДИНАМИЧЕСКИЙ СЧЕТЧИК СИМВОЛОВ
// 1. Находим textarea и блок счетчика в HTML
const messageArea = document.getElementById('message');
const counterDisplay = document.getElementById('char-counter');

// Задаем максимальный лимит символов
const maxChars = 200;

// 2. Слушаем событие ввода текста (input)
messageArea.addEventListener('input', function() {
    
    // Получаем текущую длину введенного текста
    const currentLength = messageArea.value.length;
    
    // Считаем, сколько символов осталось
    const charsLeft = maxChars - currentLength;
    
    // 3. Обновляем текст на странице в реальном времени
    counterDisplay.textContent = `Осталось символов: ${charsLeft}`;
    
    // 4. Добавляем визуальное предупреждение, если лимит исчерпан
    if (charsLeft <= 20) {
        counterDisplay.style.color = '#e74c3c'; // Текст станет красным, если осталось мало места
    } else {
        counterDisplay.style.color = '#7f8c8d'; // Возвращаем стандартный серый цвет
    }
    
    // Обрезаем текст, если пользователь пытается ввести больше лимита
    if (currentLength > maxChars) {
        messageArea.value = messageArea.value.substring(0, maxChars);
        counterDisplay.textContent = `Осталось символов: 0`;
    }
});