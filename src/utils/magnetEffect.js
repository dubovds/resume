import { gsap } from 'gsap';

// Idea from here https://codepen.io/tdesero/pen/RmoxQg

function moveMagnet(event, strength) {
  const magnetButton = event.currentTarget;
  const bounding = magnetButton.getBoundingClientRect();

  gsap.to(magnetButton, {
    duration: 1,
    x: (((event.clientX - bounding.left) / magnetButton.offsetWidth) - 0.5) * strength,
    y: (((event.clientY - bounding.top) / magnetButton.offsetHeight) - 0.5) * strength,
    ease: "power4.out"
  });
}

export function applyMagneticEffect(selector, strength = 20) {
  if (window.innerWidth > 1200) {
    const magnets = document.querySelectorAll(selector);

    magnets.forEach((magnet) => {
      magnet.addEventListener('mousemove', (event) => moveMagnet(event, strength));
      magnet.addEventListener('mouseout', function (event) {
        gsap.to(event.currentTarget, {
            duration: 1,
            x: 0,
            y: 0,
            
            ease: "elastic.out(1, 0.3)" // Elastic easing for bounce effect
          });
      });
    });
  }
}