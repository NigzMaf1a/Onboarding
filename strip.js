document.addEventListener("DOMContentLoaded", function () {
    const topStrip = document.getElementById("top-strip");
    const colors = [
        "rgba(30, 100, 80, 0.8)",  
        "rgba(40, 120, 100, 0.8)", 
        "rgba(50, 140, 120, 0.8)",  
        "rgba(60, 160, 140, 0.8)", 
        "rgba(70, 180, 160, 0.8)",  
        "rgba(80, 200, 180, 0.8)",  
        "rgba(90, 180, 200, 0.8)", 
        "rgba(80, 160, 220, 0.8)",  
        "rgba(70, 140, 210, 0.8)",  
        "rgba(60, 120, 200, 0.8)",  
        "rgba(50, 100, 190, 0.8)",  
        "rgba(40, 90, 170, 0.8)",  
        "rgba(30, 80, 150, 0.8)",   
        "rgba(20, 70, 130, 0.8)", 
        "rgba(30, 100, 110, 0.8)", 
        "rgba(40, 130, 90, 0.8)",  
        "rgba(50, 160, 70, 0.8)",   
        "rgba(60, 190, 60, 0.8)",  
        "rgba(70, 210, 80, 0.8)", 
        "rgba(80, 230, 100, 0.8)"  
    ];



   
    
    let colorIndex = 0;

    function changeColor() {
        topStrip.style.backgroundColor = colors[colorIndex];
        colorIndex = (colorIndex + 1) % colors.length;
    }

    // Set the color change interval
    setInterval(changeColor, 5000);
});
  
