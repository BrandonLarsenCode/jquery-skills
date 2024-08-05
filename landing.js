document.addEventListener('DOMContentLoaded', () => {
    const themeToggleSwitch = document.getElementById('themeToggleSwitch');
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme) {
        document.body.classList.add(currentTheme);
        themeToggleSwitch.checked = currentTheme === 'dark';
    } else {
        document.body.classList.add('light');
    }

    themeToggleSwitch.addEventListener('change', () => {
        document.body.classList.toggle('dark', themeToggleSwitch.checked);
        document.body.classList.toggle('light', !themeToggleSwitch.checked);

        localStorage.setItem('theme', themeToggleSwitch.checked ? 'dark' : 'light');
    });
});
