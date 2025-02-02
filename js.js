function stikalo() {
    var trenutnaBarva = document.body.style.backgroundColor;
    var gumb = document.getElementById("stikalo");
    var main = document.querySelector("main");

    if (trenutnaBarva=='white' || trenutnaBarva=='') {
        document.body.style.color = 'white';
        document.body.style.backgroundColor = '#1a1a1a';
        main.style.backgroundColor = '#303030';
        gumb.textContent = "Vključi light mode";
    } else {
        document.body.style.color = 'black';
        document.body.style.backgroundColor = 'white';
        main.style.backgroundColor = 'white';
        gumb.textContent = "Vključi dark mode";
    }
}
function izpisiCas() {
    var trenutniCas = new Date();
    
    var ura = trenutniCas.getHours();
    var minute = trenutniCas.getMinutes();
    var sekunde = trenutniCas.getSeconds();

    var cas = "Trenutni čas: " + ura + ":" + minute + ":" + sekunde;

    document.getElementById("cas").innerText = cas;
}
setInterval(izpisiCas, 1000);