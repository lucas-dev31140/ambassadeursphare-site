function updateDateTime() {
    const now = new Date();
    const dateTimeString = now.toLocaleString('fr-FR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
    document.getElementById('date-time').textContent = dateTimeString;
}

// Update date and time every minute
setInterval(updateDateTime, 60000);
updateDateTime();

function openWindow(id) {
    const windowElement = document.getElementById(id);
    windowElement.style.display = 'block';
    setActiveWindow(windowElement.querySelector('.window-title').textContent);
}

function closeWindow(id) {
    const windowElement = document.getElementById(id);
    windowElement.style.display = 'none';
    setActiveWindow('Bureau');
}

function maximizeWindow(id) {
    const windowElement = document.getElementById(id);
    if (windowElement.classList.contains('maximized')) {
        windowElement.classList.remove('maximized');
    } else {
        windowElement.classList.add('maximized');
    }
}

function setActiveWindow(title) {
    const activeWindowTitle = document.getElementById('active-window-title');
    activeWindowTitle.textContent = title;
}

function showDesktop() {
    const windows = document.querySelectorAll('.window');
    windows.forEach(window => {
        window.style.display = 'none';
    });
    setActiveWindow('Bureau');
}
