function copyEmail() {
    navigator.clipboard.writeText("cyber-ps@yandex.ru");
    alert("Email скопирован в буфер обмена: cyber-ps@yandex.ru");
}

function downloadPresentation() {
    // Здесь может быть ссылка на ваш PDF-файл
    const fileUrl = 'media/вариант.pdf';
    
    // Создаем временную ссылку для скачивания
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'вариант.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Можно добавить аналитику
    console.log('Презентация скачана');
    
}