document.getElementById("advice-btn").addEventListener("click", async function() {
    try {
        const response = await fetch('https://api.adviceslip.com/advice');
        
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();

        document.getElementById("advice-id").textContent = data.slip.id;
        document.getElementById("advice-text").textContent = `"${data.slip.advice}"`;
        
    } catch (error) {
        console.log('Error:', error);
    }
});
