document.addEventListener("DOMContentLoaded", () => {
    const elementsBg = document.querySelectorAll(".bg");
    const elementsText = document.querySelectorAll(".text");
    const btn = document.querySelector(".btn");
    
    // Получение сохраненной темы из localStorage при загрузке страницы
    let blackTheme = localStorage.getItem('theme') === 'true';
    
    // Применение сохраненной темы при загрузке страницы
    elementsBg.forEach(el => {
        el.style.background = blackTheme ? "#000" : "#fff";
    });

    elementsText.forEach(el => {
        el.style.color = blackTheme ? "#fff" : "#000";
    });

    btn.addEventListener("click", () => {
        blackTheme = !blackTheme;

        elementsBg.forEach(el => {
            el.style.background = blackTheme ? "#000" : "#fff";
        });

        elementsText.forEach(el => {
            el.style.color = blackTheme ? "#fff" : "#000";
        });

        // Сохранение текущей темы в localStorage
        localStorage.setItem('theme', blackTheme.toString());
    });
});