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


function toggleRessource(card) {
  card.classList.toggle('expanded');
}


function openOverlay(id) {
  document.getElementById(`overlay-${id}`).style.display = 'flex';
}

function closeOverlay(id) {
  document.getElementById(`overlay-${id}`).style.display = 'none';
}




/*animation*/

document.addEventListener("DOMContentLoaded", () => {
    const faders = document.querySelectorAll('.fade-in-section');

    const appearOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });
});



