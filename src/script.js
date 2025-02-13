document.getElementById("rollButton").addEventListener("click", function() {
    const diceFaces = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];
    const randomIndex = Math.floor(Math.random() * 6);
    
    // Update the dice result with an emoji instead of an image
    document.getElementById("diceResult").textContent = diceFaces[randomIndex];
});