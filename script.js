function updateTimers() {
    const oraAttuale = new Date().getTime();
    
    // Seleziona tutti i blocchi "box-sorpresa"
    const blocchi = document.querySelectorAll('.box-sorpresa');

    blocchi.forEach(blocco => {
        // Legge la data dal tag HTML
        const dataTarget = new Date(blocco.getAttribute('data-date')).getTime();
        const countdownElement = blocco.querySelector('.countdown-timer');
        const contenuto = blocco.querySelector('.contenuto-segreto');

        const differenza = dataTarget - oraAttuale;

        if (differenza <= 0) {
            // TEMPO SCADUTO: Mostra contenuto, nascondi timer
            countdownElement.style.display = 'none';
            contenuto.style.display = 'block';
        } else {
            // CALCOLO TEMPO (Simile a divmod in Python)
            const giorni = Math.floor(differenza / (1000 * 60 * 60 * 24));
            const ore = Math.floor((differenza % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minuti = Math.floor((differenza % (1000 * 60 * 60)) / (1000 * 60));
            const secondi = Math.floor((differenza % (1000 * 60)) / 1000);

            countdownElement.innerHTML = `Mancano: ${giorni}g ${ore}h ${minuti}m ${secondi}s`;
        }
    });
}

// Avvia la funzione ogni secondo
setInterval(updateTimers, 1000);

// Eseguila una volta subito per evitare il "flash" di caricamento
updateTimers();