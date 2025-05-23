document.addEventListener("DOMContentLoaded", function () {
    const Foot = document.getElementById("footer");
    const colors = [
        "rgba(0, 31, 63, 0.8)",   // Navy Blue
        "rgba(25, 25, 112, 0.8)", // Midnight Blue
        "rgba(0, 51, 102, 0.8)",  // Dark Sapphire
        "rgba(3, 57, 108, 0.8)",  // Prussian Blue
        "rgba(15, 76, 129, 0.8)", // Ocean Blue
        "rgba(0, 0, 0, 0.8)",     // Black
        "rgba(5, 5, 20, 0.8)",    // Deep Black
        "rgba(10, 10, 35, 0.8)",  // Eclipse Blue
        "rgba(20, 20, 55, 0.8)",  // Dark Twilight Blue
        "rgba(35, 35, 70, 0.8)",  // Steely Blue
        "rgba(18, 33, 72, 0.8)",  // Space Blue
        "rgba(12, 41, 79, 0.8)",  // Abyssal Blue
        "rgba(24, 47, 84, 0.8)",  // Deep Ocean Blue
        "rgba(6, 21, 52, 0.8)",   // Midnight Navy
        "rgba(2, 20, 40, 0.8)",   // Shadow Blue
        "rgba(0, 43, 54, 0.8)",   // Blue Black
        "rgba(5, 15, 30, 0.8)",   // Deep Space Blue
        "rgba(4, 28, 44, 0.8)",   // Charcoal Blue
        "rgba(8, 24, 33, 0.8)"    // Phantom Blue
    ];
    
    
    
    let colorIndex = 0;

    function changeColor() {
        Foot.style.backgroundColor = colors[colorIndex];
        colorIndex = (colorIndex + 1) % colors.length;
    }

    // Set the color change interval
    setInterval(changeColor, 4000);
});
  