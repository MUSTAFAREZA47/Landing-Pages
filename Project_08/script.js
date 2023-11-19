document.addEventListener("DOMContentLoaded", function() {
    const ball = document.querySelector(".ball");
  
    document.addEventListener("mousemove", function(e) {
      const xPos = e.clientX;
      const yPos = e.clientY;
  
      ball.style.transform = `translate(${xPos}px, ${yPos}px)`;
    });
  });
  