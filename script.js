const toggleButton = document.getElementById('darkModeToggle');
const navbar = document.querySelector('.navbar'); 
const logo = document.querySelector('#logo');
toggleButton.addEventListener('click', function() {
    const currentBackgroundColor = window.getComputedStyle(document.body).backgroundColor;

    if (currentBackgroundColor === 'rgb(0, 0, 0)') {
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
        navbar.style.boxShadow = '0 4px 4px -2px rgba(0, 0, 0, 0.5)'; 
        logo.style.borderRight = '2px solid black';

    } else {
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white';
        navbar.style.boxShadow = '0 4px 4px -2px rgba(255, 255, 255, 1)'; 
        logo.style.borderRight = '2px solid white';
    }
});


const sections = document.querySelectorAll(".section");

sections.forEach(section => {
  const answer = section.querySelector(".answer"); 
  section.addEventListener('click', () => { 
     answer.classList.toggle('active'); 
  });
});

