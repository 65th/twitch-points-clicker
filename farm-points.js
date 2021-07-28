window.onload = () => {
    console.log('Points clicker loaded');
    setInterval(() => {
        const btn = document.querySelector('.claimable-bonus__icon');
        if (btn) {
            btn.click();
        }
    }, 10000);
};
