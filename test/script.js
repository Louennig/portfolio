function createCircularSkill(el) {
    const percent = el.dataset.percent;
    const color = el.dataset.color;
    const label = el.dataset.label;
  
    const radius = 50;
    const circumference = 2 * Math.PI * radius;
  
    el.innerHTML = `
      <svg width="120" height="120">
        <circle class="bg" cx="60" cy="60" r="${radius}" />
        <circle class="progress" cx="60" cy="60" r="${radius}" stroke="${color}" />
      </svg>
      <span style="color: ${color}">
        ${label}<br>${percent}%
      </span>
    `;
  
    const circle = el.querySelector(".progress");
    circle.style.strokeDasharray = circumference;
    circle.style.strokeDashoffset = circumference;
  
    el.classList.add("hidden");
  }
  
  function animateSkill(el) {
    const percent = el.dataset.percent;
    const circle = el.querySelector(".progress");
    const radius = 50;
    const circumference = 2 * Math.PI * radius;
  
    const offset = circumference - (percent / 100) * circumference;
    circle.style.strokeDashoffset = offset;
  
    el.classList.remove("hidden");
  }
  
  document.querySelectorAll(".skill").forEach(createCircularSkill);
  
  // Animation au scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateSkill(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.6 });
  
  document.querySelectorAll(".skill").forEach(skill => {
    observer.observe(skill);
  });
  