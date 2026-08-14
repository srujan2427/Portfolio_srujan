//script.js- First connection to portfolio !
 
//1. Check that JS is working
console.log("Javascript is connected!🚓");
 
//2.Display the current year in the footer
const footerYear = document.querySelector('.footer-year');
console.log(footerYear);
if(footerYear){
    footerYear.textContent = new Date().getFullYear();
}
 
//3. Greeting based on time of day
const getGreeting = () => {
    const hour = new Date().getHours();
    console.log(hour);
    if (hour < 12) return "Good Morning";
    if (hour < 17) return "Good Afternoon";
    return "Good Evening";
}
const heroTitle = document.querySelector('.hero-section h1');
console.log(heroTitle);
if(heroTitle){
    heroTitle.textContent = `${getGreeting()}, I'm P.Srujan 👋`;
}
 // ==== MOBILE MENU TOGGLE ===
 
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
 
menuToggle.addEventListener('click', () =>{
    navLinks.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded',navLinks.classList.contains('open'));
});
 
// === SCROLL-BASED NAVBAR STYLING ====
const header = document.querySelector('.site-header');
 
window.addEventListener('scroll', () =>{
    if (window.scrollY > 50){
        header.classList.add('scrolled')
    }
    else{
        header.classList.remove('scrolled')
    }
})
 
// === ACTIVE NAV LINK on scroll ====
const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('.nav-links a');
 
window.addEventListener('scroll', () =>{
    let current ='';
    sections.forEach(section =>{
        if(window.scrollY >= section.offsetTop-100){
            current=section.getAttribute('id');
        }
    })
    navItems.forEach(link =>{
        link.classList.remove('active');
        if(link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    })
})

 //Day 10 - Project Filter System
const projects =[
    { id: 1, name: "Weather App", category: "web", tech: ["React", "API"] },
    { id: 2, name: "Todo App", category: "web", tech: ["JavaScript"] },
    { id: 3, name: "Portfolio", category: "design", tech: ["HTML", "CSS"] },
    { id: 4, name: "Calculator", category: "web", tech: ["JavaScript"] },
 
];
 
function renderProjects(filter="all") {
    const grid = document.querySelector('.projects-grid');
    const filtered = filter === "all"
    ? projects
    : projects.filter(p => p.category === filter);
 
    grid.innerHTML = filtered.map(project =>
        `<article class="project-card">
        <div class="project-card-body">
        <h3>${project.name}</h3>
        <div class="project-tags">
        ${project.tech.map(t => `<span class="tag">${t}</span>`).join('')}      
        </div>
        <a href="#" class=" btn btn-primary">View Project</a>
        </div>
        </article>
        `).join('');
}
 
//Filter buttons
document.querySelectorAll('.filter-btn').forEach(btn =>{
    btn.addEventListener('click',()=>{
        document.querySelectorAll('.filter-btn').forEach(b =>
            b.classList.remove('active'));
            btn.classList.add('active')
            renderProjects(btn.dataset.filter);
});
    });
 
//Intial render
renderProjects();
 