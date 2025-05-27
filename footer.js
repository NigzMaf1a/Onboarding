document.addEventListener("DOMContentLoaded", function () {
    const Foot = document.getElementById("footer");
    const colors = [
        "rgba(0, 31, 63, 0.8)",   
        "rgba(25, 25, 112, 0.8)", 
        "rgba(0, 51, 102, 0.8)",  
        "rgba(3, 57, 108, 0.8)", 
        "rgba(15, 76, 129, 0.8)", 
        "rgba(0, 0, 0, 0.8)",    
        "rgba(5, 5, 20, 0.8)",   
        "rgba(10, 10, 35, 0.8)", 
        "rgba(20, 20, 55, 0.8)",  
        "rgba(35, 35, 70, 0.8)", 
        "rgba(18, 33, 72, 0.8)", 
        "rgba(12, 41, 79, 0.8)", 
        "rgba(24, 47, 84, 0.8)",  
        "rgba(6, 21, 52, 0.8)",   
        "rgba(2, 20, 40, 0.8)",  
        "rgba(0, 43, 54, 0.8)",   
        "rgba(5, 15, 30, 0.8)",   
        "rgba(4, 28, 44, 0.8)",   
        "rgba(8, 24, 33, 0.8)"    
    ];
    
    
    
    let colorIndex = 0;

    function changeColor() {
        Foot.style.backgroundColor = colors[colorIndex];
        colorIndex = (colorIndex + 1) % colors.length;
    }

    // Set the
    setInterval(changeColor, 4000);
});
  
