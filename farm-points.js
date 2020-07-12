window.onload = () => {
    console.log('Points clicker loaded');
    setInterval(() => {
        const btn = document.querySelector('.tw-button.tw-button--success.tw-interactive');
        if (btn) {
            btn.click();
        }
    }, 10000);
};