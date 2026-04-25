// JavaScript для Kray.html

document.addEventListener('DOMContentLoaded', function() {
    
    // Эффект увеличения изображения при наведении
    const updateVisualsMain = document.querySelector('.update-visuals-main img');
    if (updateVisualsMain) {
        updateVisualsMain.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.1)';
            this.style.filter = 'grayscale(0) brightness(0.9)';
        });
        updateVisualsMain.addEventListener('mouseout', function() {
            this.style.transform = 'scale(1)';
            this.style.filter = 'grayscale(0.3) brightness(0.7)';
        });
    }
    
    // Эффект для кнопки скачивания
    const downloadBtn = document.querySelector('.download-btn');
    if (downloadBtn) {
        downloadBtn.addEventListener('mouseover', function() {
            this.style.transform = 'translateY(-8px)';
        });
        downloadBtn.addEventListener('mouseout', function() {
            this.style.transform = 'translateY(0)';
        });
    }
    
});
