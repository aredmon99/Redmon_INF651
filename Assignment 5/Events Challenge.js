const nameInput = document.getElementById('nameInput'); 
const submitButton = document.getElementById('submitButton'); 
const outputDiv = document.getElementById('outputDiv'); 


submitButton.addEventListener('click', () => {
    const name = nameInput.value.trim();
    if (name) { 
        outputDiv.textContent = `Welcome, ${name}!`; 
        outputDiv.style.backgroundColor = 'green';
        outputDiv.style.color = 'white';
    } else { 
        outputDiv.textContent = 'Error: Please enter a name.';
        outputDiv.style.backgroundColor = 'white'; 
        outputDiv.style.color = 'red';
    }
});

const mouseTracker = document.getElementById('mouseTracker');
const coordinates = document.getElementById('coordinates'); 

mouseTracker.addEventListener('mousemove', (event) => {
    const rect = mouseTracker.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top; 
    coordinates.textContent = `Mouse Coordinates: X: ${x}, Y: ${y}`;
});

nameInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault();
        submitButton.click(); 
    }
});
