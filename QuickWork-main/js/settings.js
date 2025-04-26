// 🌟 Icon loader
lucide.createIcons();

// 🌙 Toggle Dark Mode
function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
  const isDark = document.body.classList.contains('dark-mode');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');

  updateDarkModeText(isDark);
}

// 🧠 Load preference from localStorage
window.onload = () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    document.getElementById('darkModeToggle').checked = true;
    updateDarkModeText(true);
  } else {
    updateDarkModeText(false);
  }
};

function updateDarkModeText(isDark) {
  const textElement = document.getElementById('darkModeText');
  if (isDark) {
    textElement.textContent = 'Switch to Light Mode';
  } else {
    textElement.textContent = 'Switch to Dark Mode';
  }
}
// Load mode on page load
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('theme-toggle');
  const savedMode = localStorage.getItem('theme') || 'light';
  
  if (savedMode === 'dark') {
    document.body.classList.add('dark-mode');
    toggle.checked = true;
  } else {
    document.body.classList.add('light-mode');
  }

  toggle.addEventListener('change', () => {
    if (toggle.checked) {
      document.body.classList.remove('light-mode');
      document.body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark-mode');
      document.body.classList.add('light-mode');
      localStorage.setItem('theme', 'light');
    }
  });
});