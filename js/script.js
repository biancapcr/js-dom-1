// Seleziono img della lampadina tramite il suo id
const bulbImg = document.getElementById('bulb');

// Seleziono button tramite il suo id
const toggleBtn = document.getElementById('toggle-btn');

// Aggiungo un listener sul click del bottone
toggleBtn.addEventListener('click', () =>{
    let isOn;
    // Controllo se il testo del bottone contiene "Accendi"
    if (toggleBtn.textContent.includes('Accendi')){
        // Se sì, "accesa"
        bulbImg.src = 'img/yellow_lamp.png';
        // Cambio il testo del bottone in "Spegni"
        toggleBtn.textContent = 'Spegni';
    }
    else{
        // Altrimenti ("Spegni"), ripristino la lampadina "spenta"
        bulbImg.src = 'img/white_lamp.png';
        // Cambio il testo del bottone in "Accendi"
        toggleBtn.textContent = 'Accendi';
    }
    // Stampa
    console.log(`Lampadina ${isOn ? 'accesa' : 'spenta'}`);
});