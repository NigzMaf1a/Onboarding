document.addEventListener("DOMContentLoaded", function () {
    const topStrip = document.getElementById("top-strip");
    const colors = [
        "rgba(30, 100, 80, 0.8)",   // Deep Teal
        "rgba(40, 120, 100, 0.8)",  // Cool Jade
        "rgba(50, 140, 120, 0.8)",  // Sea Green
        "rgba(60, 160, 140, 0.8)",  // Tropical Lagoon
        "rgba(70, 180, 160, 0.8)",  // Soft Aqua
        "rgba(80, 200, 180, 0.8)",  // Gentle Mint Blue
        "rgba(90, 180, 200, 0.8)",  // Skywashed Blue
        "rgba(80, 160, 220, 0.8)",  // Ocean Breeze
        "rgba(70, 140, 210, 0.8)",  // Dusty Azure
        "rgba(60, 120, 200, 0.8)",  // Calm Blue
        "rgba(50, 100, 190, 0.8)",  // Slate Blue
        "rgba(40, 90, 170, 0.8)",   // Blue Pine
        "rgba(30, 80, 150, 0.8)",   // Dull Royal
        "rgba(20, 70, 130, 0.8)",   // Stormy Sea
        "rgba(30, 100, 110, 0.8)",  // Bluish Teal
        "rgba(40, 130, 90, 0.8)",   // Earthy Green
        "rgba(50, 160, 70, 0.8)",   // Vibrant Forest
        "rgba(60, 190, 60, 0.8)",   // Soft Emerald
        "rgba(70, 210, 80, 0.8)",   // Leaf Tint
        "rgba(80, 230, 100, 0.8)"   // Minty Fresh
    ];



   
    
    let colorIndex = 0;

    function changeColor() {
        topStrip.style.backgroundColor = colors[colorIndex];
        colorIndex = (colorIndex + 1) % colors.length;
    }

    // Set the color change interval
    setInterval(changeColor, 5000);
});
  