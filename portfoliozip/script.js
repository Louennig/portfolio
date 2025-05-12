window.addEventListener("scroll", function () {
    let scrollValue = window.scrollY;

    document.querySelectorAll(".ink").forEach((stain, index) => {
        let directionX = (index % 2 === 0 ? 1 : -1);
        let directionY = (index % 3 === 0 ? -1 : 1);
        let speed = (index + 1) * 0.5;

        let moveX = scrollValue * 0.1 * directionX * speed;
        let moveY = scrollValue * 0.15 * directionY * speed;

        stain.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });
});

window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

  function createCircle(container, pourcentage, label, color) {
    const radius = 50;
    const stroke = 8;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference * (1 - pourcentage / 100);

    container.innerHTML = `
      <svg width="120" height="120">
        <circle class="bg" cx="60" cy="60" r="${radius}" stroke="#eee" stroke-width="${stroke}" fill="none" />
        <circle class="fg" cx="60" cy="60" r="${radius}" stroke="${color}" stroke-width="${stroke}" fill="none"
          stroke-dasharray="${circumference}"
          stroke-dashoffset="${circumference}" />
      </svg>
      <div class="text">
        <strong>${pourcentage}%</strong><br>${label}
      </div>
    `;
  }

  function animateSkills() {
    const elements = document.querySelectorAll('.competence');
    elements.forEach(el => {
      const pct = parseInt(el.getAttribute('data-pourcentage'));
      const label = el.getAttribute('data-label');
      const color = el.getAttribute('data-color');
      createCircle(el, pct, label, color);
    });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const fg = entry.target.querySelector('.fg');
          const pct = parseInt(entry.target.getAttribute('data-pourcentage'));
          const radius = 50;
          const circumference = 2 * Math.PI * radius;
          const offset = circumference * (1 - pct / 100);
          fg.style.strokeDashoffset = offset;
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.6 });

    elements.forEach(el => observer.observe(el));
  }

  document.addEventListener('DOMContentLoaded', animateSkills);





  function playSound() {
    const audio = document.getElementById("tkt");
    audio.currentTime = 0;
    audio.play();
  }

function toggleRessource(card) {
  card.classList.toggle('expanded');
}


function openOverlay(id) {
  document.getElementById(`overlay-${id}`).style.display = 'flex';
}

function closeOverlay(id) {
  document.getElementById(`overlay-${id}`).style.display = 'none';
}



