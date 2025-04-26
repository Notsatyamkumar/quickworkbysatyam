 // Initialize icons
 lucide.createIcons();
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