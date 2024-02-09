let kolonaElementi = document.querySelectorAll('#kolona > div');

kolonaElementi.forEach(element => {
    // Spremanje originalne boje elementa
    let originalnaBoja = window.getComputedStyle(element).backgroundColor;

    // Niz boja koje će se koristiti pri prelasku miša
    let boje = ['yellow', 'lightblue', 'pink', 'orange'];

    // Postavljanje event listenera za mouseover događaj
    element.addEventListener('mouseover', () => {
        // Generiranje slučajnog indeksa za odabir boje iz niza
        let randomIndex = Math.floor(Math.random() * boje.length);
        // Postavljanje slučajno odabrane boje pozadine
        element.style.backgroundColor = boje[randomIndex];
    });

    // Postavljanje event listenera za mouseout događaj
    element.addEventListener('mouseout', () => {
        element.style.backgroundColor = originalnaBoja; // Vraćanje originalne boje
    });
});


 // Pronalazak naslova
 let naslovElement = document.getElementById("naslov");
        
 // Povećanje veličine teksta naslova za 1, 2, 3, 4, 5, 6, 7 koraka
 for (let i = 1; i <= 7; i++) {
     setTimeout(() => {
         naslovElement.style.fontSize = `${i * 10}px`; // Povećanje veličine teksta za 10 piksela
     }, i * 1000); // Povećanje veličine teksta svake sekunde
 }



 let brojeviDiv = document.getElementById("brojevi");
 
 // Dodavanje event listenera na klik dugmeta
 (document.getElementById("dugme")).addEventListener("click", () => {
     // Brisanje prethodno prikazanih brojeva
     brojeviDiv.innerHTML = "";
     
     // Generiranje brojeva od 1 do 100 i dodavanje u div
     for (let i = 1; i <= 100; i++) {
         let tekst = document.createTextNode(i + " ");
         brojeviDiv.appendChild(tekst);
     }
 });
// Funkcija za promjenu boje elementa na klik
function changeColor(element) {
    // Generiranje slučajne boje u hexadecimalnom formatu
    let randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    // Postavljanje boje pozadine elementa na slučajno generiranu boju
    element.style.backgroundColor = randomColor;
}
