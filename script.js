// ======= Smooth Scroll for Navigation =======
document.querySelectorAll('.navigation li').forEach(item => {
  item.addEventListener('click', () => {
    const section = document.getElementById(item.textContent.trim().toLowerCase());
    if (section) section.scrollIntoView({ behavior: 'smooth' });
  });
});

// ======= Dynamic Active Nav on Scroll =======
const sections = document.querySelectorAll('main section');
const navItems = document.querySelectorAll('.navigation li');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const top = window.scrollY;
    const offset = section.offsetTop - 100;
    const height = section.offsetHeight;
    if (top >= offset && top < offset + height) {
      current = section.getAttribute('id');
    }
  });
  
  navItems.forEach(li => {
    li.classList.remove('active');
    if (li.textContent.trim().toLowerCase() === current) {
      li.classList.add('active');
    }
  });
});

// ======= Reservation Form Validation =======
document.querySelector('form').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('Name').value.trim();
  const email = document.getElementById('Email').value.trim();
  const datetime = document.getElementById('Date&time').value;
  
  if (!name || !email || !datetime) {
    alert('Please fill all fields!');
    return;
  }
  
  if (!/^\d{10}$/.test(email)) {
    alert('Enter a valid 10-digit phone number in Email field!');
    return;
  }
  
  alert(`Thank you ${name}, your table has been reserved for ${datetime}.`);
  this.reset();
});

// ======= Hero Button Scroll to Reservation =======
document.querySelector('.book-now').addEventListener('click', () => {
  const reserve = document.getElementById('reservation');
  reserve.scrollIntoView({ behavior: 'smooth' });
});

// ======= Fade In Sections on Scroll =======
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
    }
  });
}, {
  threshold: 0.1
});

sections.forEach(section => observer.observe(section));
window.onload = function() {
  alert("This is satyam singh");
};