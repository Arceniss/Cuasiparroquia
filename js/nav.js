fetch('nav.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('nav-placeholder').innerHTML = data;   
        const menuToggle = document.getElementById("menu-toggle");
        const navBar = document.getElementById('nav-bar');
        const dropdownToggles = document.querySelectorAll(".dropdown-toggle");
        const menuClose = document.getElementById('menu-close');
        
        function toggleMenu() {
            navBar.classList.toggle('active');
        }

        menuClose.addEventListener('click', () => {
            navBar.classList.remove('active');
        });
     
        menuToggle.addEventListener("click", toggleMenu);

        dropdownToggles.forEach(toggle => {
            toggle.addEventListener("click", function(event) {
              event.preventDefault();

              const dropdownContent = this.nextElementSibling;
              dropdownContent.classList.toggle("show");
            });
        });
    });
