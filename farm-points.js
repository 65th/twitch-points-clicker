window.onload = () => {
    console.log('Points clicker loaded');
    setInterval(() => {
        const btn = document.querySelector('.tw-button.tw-button--success');
        if (btn) {
            btn.click();
        }
    }, 10000);
};
