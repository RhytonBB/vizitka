function copyEmail() {
    navigator.clipboard.writeText("cyber-ps@yandex.ru");
    alert("Email скопирован в буфер обмена: cyber-ps@yandex.ru");
}

function downloadPresentation() {
    const fileUrl = 'media/Аргус_КС.pdf';
    
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'Аргус_КС.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    console.log('Презентация скачана');
    
}