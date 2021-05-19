window.onload = () => {
    console.log('Points clicker loaded');
    setInterval(() => {
        const btn = document.querySelector('.community-points-summary button[class*="ScCoreButtonSuccess-"]');
        if (btn) {
            btn.click();
        }
    }, 10000);
};
