/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/*INDEX*/
window.onscroll = scrollFunction;

function scrollFunction() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function topFunction1() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

/*TOTEM INTERACTIVE*/
/*array di n elementi quanti sono gli animali domanda e 
 * in base alla risposta il contatore indexRisposta viene 
 * incrementato di uno così da permettere di visualizzare 
 * alla fine il nome dell'animale a cui è associato il 
 * punteggio più alto*/

function gestore_inizializzaAnimali(){
    try{
        vetAnimali["Alce"] = 0;
        vetAnimali["Antilope"] = 0;
        vetAnimali["Aquila"] = 0;
        vetAnimali["Armadillo"] = 0;
        vetAnimali["Balena"] = 0;
        vetAnimali["Bisonte"] = 0;
        vetAnimali["Cane"] = 0;
        vetAnimali["Castoro"] = 0;
        vetAnimali["Cavallo"] = 0;
        vetAnimali["Cervo"] = 0;
        vetAnimali["Cigno"] = 0;
        vetAnimali["Colibrì"] = 0;
        vetAnimali["Coniglio"] = 0;
        vetAnimali["Coyote"] = 0;
        vetAnimali["Delfino"] = 0;
        vetAnimali["Donnola"] = 0;
        vetAnimali["Farfalla"] = 0;
        vetAnimali["Formica"] = 0;
        vetAnimali["Gallo"] = 0;
        vetAnimali["Lince"] = 0;
        vetAnimali["Lontra"] = 0;
        vetAnimali["Lucertola"] = 0;
        vetAnimali["Lupo"] = 0;
        vetAnimali["Opossum"] = 0;
        vetAnimali["Orso"] = 0;
        vetAnimali["Porcospino"] = 0;
        vetAnimali["Puma"] = 0;
        vetAnimali["Rospo"] = 0;
        vetAnimali["Scoiattolo"] = 0;
        vetAnimali["Serpente"] = 0;
        vetAnimali["Tacchino"] = 0;
        vetAnimali["Tartaruga"] = 0;
        vetAnimali["Tasso"] = 0;
        vetAnimali["Topo"] = 0;
        vetAnimali["Volpe"] = 0;
    }catch(e){
        alert("gestore_inizializzaAnimali" + e);
    }
}

/*switch indexDomanda che è l'indice che scorre l'array vetDomande*/
function gestoreRispostaSi(){
    try{
        switch(indexDomanda){
            case 1:
                vetAnimali["Aquila"]++;
                vetAnimali["Armadillo"]++;
                vetAnimali["Tasso"]++;
                vetAnimali["Tasso"]++;
                vetAnimali["Bisonte"]++;
                vetAnimali["Cane"]++;
                vetAnimali["Coniglio"]++;
                vetAnimali["Opossum"]++;
                vetAnimali["Opossum"]++;
                break;
            case 2:
                vetAnimali["Coyote"]++;
                vetAnimali["Formica"]++;
                vetAnimali["Lontra"]++;
                vetAnimali["Tasso"]++;
                vetAnimali["Tasso"]++;
                vetAnimali["Volpe"]++;
                vetAnimali["Bisonte"]++;
                vetAnimali["Coniglio"]++;
                vetAnimali["Donnola"]++;
                vetAnimali["Donnola"]++;
                break;
            case 3:
                vetAnimali["Alce"]++;
                vetAnimali["Aquila"]++;
                vetAnimali["Cavallo"]++;
                vetAnimali["Lupo"]++;
                vetAnimali["Puma"]++;
                vetAnimali["Puma"]++;
                vetAnimali["Colibrì"]++;
                vetAnimali["Volpe"]++;
                break;
            case 4:
                vetAnimali["Alce"]++;
                vetAnimali["Formica"]++;
                vetAnimali["Lontra"]++;
                vetAnimali["Tasso"]++;
                vetAnimali["Tasso"]++;
                vetAnimali["Cane"]++;
                vetAnimali["Coyote"]++;
                vetAnimali["Orso"]++;
                break;
            case 5:
                vetAnimali["Alce"]++;
                vetAnimali["Aquila"]++;
                vetAnimali["Bisonte"]++;
                vetAnimali["Cavallo"]++;
                vetAnimali["Lupo"]++;
                vetAnimali["Orso"]++;
                vetAnimali["Serpente"]++;
                vetAnimali["Serpente"]++;
                break;
            case 6:
                vetAnimali["Balena"]++;
                vetAnimali["Cervo"]++;
                vetAnimali["Opossum"]++;
                vetAnimali["Puma"]++;
                vetAnimali["Rospo"]++;
                vetAnimali["Serpente"]++;
                vetAnimali["Topo"]++;
                vetAnimali["Topo"]++;
                vetAnimali["Castoro"]++;
                vetAnimali["Coyote"]++;
                break;
            case 7:
                vetAnimali["Topo"]++;
                vetAnimali["Topo"]++;
                vetAnimali["Tartaruga"]++;
                vetAnimali["Tartaruga"]++;
                vetAnimali["Cigno"]++;
                vetAnimali["Colibrì"]++;
                vetAnimali["Delfino"]++;
                vetAnimali["Delfino"]++;
                vetAnimali["Delfino"]++;
                vetAnimali["Volpe"]++;
                break;
            case 8:
                vetAnimali["Alce"]++;
                vetAnimali["Antilope"]++;
                vetAnimali["Cane"]++;
                vetAnimali["Farfalla"]++;
                vetAnimali["Lince"]++;
                vetAnimali["Lucertola"]++;
                vetAnimali["Cigno"]++;
                vetAnimali["Serpente"]++;
                break;
            case 9:
                vetAnimali["Lince"]++;
                vetAnimali["Castoro"]++;
                vetAnimali["Cavallo"]++;
                vetAnimali["Lupo"]++;
                vetAnimali["Coyote"]++;
                vetAnimali["Donnola"]++;
                vetAnimali["Scoiattolo"]++;
                break;
            case 10:
                vetAnimali["Bisonte"]++;
                vetAnimali["Cavallo"]++;
                vetAnimali["Cigno"]++;
                vetAnimali["Farfalla"]++;
                vetAnimali["Lince"]++;
                vetAnimali["Lucertola"]++;
                vetAnimali["Orso"]++;
                vetAnimali["Cervo"]++;
                vetAnimali["Lontra"]++;
                break;
            case 11:
                vetAnimali["Alce"]++;
                vetAnimali["Cavallo"]++;
                vetAnimali["Antilope"]++;
                vetAnimali["Tacchino"]++;
                vetAnimali["Tartaruga"]++;
                vetAnimali["Tartaruga"]++;
                vetAnimali["Volpe"]++;
                vetAnimali["Lucertola"]++;
                vetAnimali["Farfalla"]++;
                vetAnimali["Coniglio"]++;
                vetAnimali["Opossum"]++;
                vetAnimali["Cervo"]++;
                break;
            case 12:
                vetAnimali["Castoro"]++;
                vetAnimali["Cigno"]++;
                vetAnimali["Coniglio"]++;
                vetAnimali["Coyote"]++;
                vetAnimali["Lince"]++;
                vetAnimali["Lupo"]++;
                vetAnimali["Rospo"]++;
                vetAnimali["Volpe"]++;
                vetAnimali["Serpente"]++;
                break;
            case 13:
                vetAnimali["Antilope"]++;
                vetAnimali["Cane"]++;
                vetAnimali["Cervo"]++;
                vetAnimali["Colibrì"]++;
                vetAnimali["Formica"]++;
                vetAnimali["Armadillo"]++;
                vetAnimali["Lupo"]++;
                vetAnimali["Rospo"]++;
                break;
            case 14:
                vetAnimali["Balena"]++;
                vetAnimali["Formica"]++;
                vetAnimali["Gallo"]++;
                vetAnimali["Armadillo"]++;
                vetAnimali["Lucertola"]++;
                vetAnimali["Lupo"]++;
                vetAnimali["Porcospino"]++;
                vetAnimali["Porcospino"]++;
                break;
            case 15:
                vetAnimali["Balena"]++;
                vetAnimali["Coniglio"]++;
                vetAnimali["Antilope"]++;
                vetAnimali["Bisonte"]++;
                vetAnimali["Colibrì"]++;
                vetAnimali["Coyote"]++;
                vetAnimali["Formica"]++;
                vetAnimali["Serpente"]++;
                break;
            case 16:
                vetAnimali["Aquila"]++;
                vetAnimali["Coyote"]++;
                vetAnimali["Puma"]++;
                vetAnimali["Serpente"]++;
                vetAnimali["Farfalla"]++;
                vetAnimali["Orso"]++;
                vetAnimali["Donnola"]++; 
                vetAnimali["Formica"]++;
                vetAnimali["Colibrì"]++;
                break;
            case 17:
                vetAnimali["Gallo"]++;
                vetAnimali["Tartaruga"]++;
                vetAnimali["Tartaruga"]++;
                vetAnimali["Castoro"]++;
                vetAnimali["Lupo"]++;
                vetAnimali["Lupo"]++;
                vetAnimali["Tacchino"]++;
                vetAnimali["Tacchino"]++;
                break;
            case 18:
                vetAnimali["Rospo"]++;
                vetAnimali["Tartaruga"]++;
                vetAnimali["Tartaruga"]++;
                vetAnimali["Tacchino"]++;    
                vetAnimali["Armadillo"]++;
                vetAnimali["Colibrì"]++;
                vetAnimali["Lupo"]++;
                vetAnimali["Porcospino"]++;
                break;
            case 19:
                vetAnimali["Cavallo"]++;
                vetAnimali["Aquila"]++;
                vetAnimali["Formica"]++;
                vetAnimali["Puma"]++;
                vetAnimali["Castoro"]++;
                vetAnimali["Coyote"]++;
                vetAnimali["Opossum"]++;
                vetAnimali["Scoiattolo"]++;
                break;
            case 20:
                vetAnimali["Antilope"]++;
                vetAnimali["Formica"]++;
                vetAnimali["Cigno"]++;
                vetAnimali["Colibrì"]++;
                vetAnimali["Coniglio"]++;
                vetAnimali["Tacchino"]++;
                vetAnimali["Cane"]++;   
                vetAnimali["Scoiattolo"]++;
                break;       
        }
        gestore_nextDomanda();
    }catch(e){
        alert("gestoreRispostaSi" + e);
    }
}

function gestoreRispostaNo(){
    try{
        switch(indexDomanda){
            case 1:
                vetAnimali["Alce"]++;
                vetAnimali["Antilope"]++;
                vetAnimali["Porcospino"]++;
                vetAnimali["Bisonte"]++;
                vetAnimali["Castoro"]++;
                vetAnimali["Cervo"]++;
                vetAnimali["Farfalla"]++;
                vetAnimali["Lontra"]++;
                vetAnimali["Lucertola"]++;
                break;
            case 2:
                vetAnimali["Alce"]++;
                vetAnimali["Antilope"]++;
                vetAnimali["Porcospino"]++;
                vetAnimali["Cane"]++;
                vetAnimali["Cervo"]++;
                vetAnimali["Tacchino"]++;
                vetAnimali["Rospo"]++;
                vetAnimali["Scoiattolo"]++;
                vetAnimali["Scoiattolo"]++;
                break;
            case 3:
                vetAnimali["Orso"]++;
                vetAnimali["Porcospino"]++;
                vetAnimali["Tacchino"]++;
                vetAnimali["Balena"]++;
                vetAnimali["Castoro"]++;
                vetAnimali["Coyote"]++;
                vetAnimali["Lontra"]++;
                vetAnimali["Lucertola"]++;
                vetAnimali["Serpente"]++;
                break;
            case 4:
                vetAnimali["Antilope"]++;
                vetAnimali["Armadillo"]++;
                vetAnimali["Delfino"]++;
                vetAnimali["Lince"]++;
                vetAnimali["Opossum"]++;
                vetAnimali["Delfino"]++;
                vetAnimali["Gallo"]++;
                vetAnimali["Lince"]++;
                vetAnimali["Topo"]++;
                break;
            case 5:
                vetAnimali["Coniglio"]++;
                vetAnimali["Donnola"]++;
                vetAnimali["Farfalla"]++;
                vetAnimali["Lucertola"]++;
                vetAnimali["Orso"]++;
                vetAnimali["Porcospino"]++;
                vetAnimali["Tartaruga"]++;
                vetAnimali["Tartaruga"]++;
                vetAnimali["Colibrì"]++;
                vetAnimali["Rospo"]++;
                break;
            case 6:
                vetAnimali["Bisonte"]++;
                vetAnimali["Topo"]++;
                vetAnimali["Volpe"]++;
                vetAnimali["Lontra"]++;
                vetAnimali["Gallo"]++;
                vetAnimali["Aquila"]++;
                vetAnimali["Cane"]++;
                vetAnimali["Scoiattolo"]++;
                break;
            case 7:
                vetAnimali["Scoiattolo"]++;
                vetAnimali["Orso"]++;
                vetAnimali["Aquila"]++;
                vetAnimali["Balena"]++;
                vetAnimali["Cavallo"]++;
                vetAnimali["Coniglio"]++;
                vetAnimali["Formica"]++;
                vetAnimali["Lontra"]++;
                break;
            case 8:
                vetAnimali["Bisonte"]++;
                vetAnimali["Armadillo"]++;
                vetAnimali["Gallo"]++;
                vetAnimali["Lince"]++;
                vetAnimali["Opossum"]++;
                vetAnimali["Delfino"]++;
                vetAnimali["Topo"]++;
                break;
            case 9:
                vetAnimali["Colibrì"]++;
                vetAnimali["Armadillo"]++;
                vetAnimali["Delfino"]++;
                vetAnimali["Gallo"]++;
                vetAnimali["Lince"]++;
                vetAnimali["Opossum"]++;
                vetAnimali["Topo"]++;
                vetAnimali["Cigno"]++;
                break;
            case 10:
                vetAnimali["Aquila"]++;
                vetAnimali["Armadillo"]++;
                vetAnimali["Colibrì"]++;
                vetAnimali["Delfino"]++;
                vetAnimali["Puma"]++;
                vetAnimali["Puma"]++;
                vetAnimali["Rospo"]++;
                vetAnimali["Formica"]++;
                vetAnimali["Lince"]++;
                break;
            case 11:
                vetAnimali["Castoro"]++;
                vetAnimali["Topo"]++;
                vetAnimali["Rospo"]++;
                vetAnimali["Scoiattolo"]++;
                vetAnimali["Puma"]++;
                vetAnimali["Donnola"]++;
                vetAnimali["Cigno"]++;
                vetAnimali["Lince"]++;
                break;
            case 12:
                vetAnimali["Donnola"]++;
                vetAnimali["Tasso"]++;
                vetAnimali["Volpe"]++;
                vetAnimali["Tasso"]++;
                vetAnimali["Scoiattolo"]++;
                vetAnimali["Porcospino"]++;
                vetAnimali["Cavallo"]++;
                vetAnimali["Farfalla"]++;
                break;
            case 13:
                vetAnimali["Gallo"]++;
                vetAnimali["Volpe"]++;
                vetAnimali["Orso"]++;
                vetAnimali["Aquila"]++;
                vetAnimali["Cavallo"]++;
                vetAnimali["Farfalla"]++;
                vetAnimali["Opossum"]++;
                break;
            case 14:
                vetAnimali["Castoro"]++;
                vetAnimali["Topo"]++;
                vetAnimali["Rospo"]++;
                vetAnimali["Scoiattolo"]++;
                vetAnimali["Puma"]++;
                vetAnimali["Donnola"]++;
                vetAnimali["Cigno"]++;
                vetAnimali["Cane"]++;
                break;
            case 15:
                vetAnimali["Gallo"]++;
                vetAnimali["Lontra"]++;
                vetAnimali["Armadillo"]++;
                vetAnimali["Alce"]++;
                vetAnimali["Cane"]++;
                vetAnimali["Cavallo"]++;
                vetAnimali["Cigno"]++;
                vetAnimali["Farfalla"]++;
                break;
            case 16:
                vetAnimali["Bisonte"]++;
                vetAnimali["Cervo"]++;
                vetAnimali["Castoro"]++;
                vetAnimali["Porcospino"]++;
                vetAnimali["Antilope"]++;
                vetAnimali["Lucertola"]++;
                vetAnimali["Lucertola"]++;
                vetAnimali["Tacchino"]++;
                vetAnimali["Volpe"]++;
                break;
            case 17:
                vetAnimali["Tasso"]++;
                vetAnimali["Tasso"]++;
                vetAnimali["Cigno"]++;
                vetAnimali["Cervo"]++;
                vetAnimali["Alce"]++;
                vetAnimali["Coyote"]++;
                vetAnimali["Donnola"]++;
                vetAnimali["Porcospino"]++;
                vetAnimali["Puma"]++;
                vetAnimali["Serpente"]++;
                break;
            case 18:
                vetAnimali["Coniglio"]++;
                vetAnimali["Tacchino"]++;
                vetAnimali["Alce"]++;       
                vetAnimali["Balena"]++;
                vetAnimali["Cane"]++;
                vetAnimali["Lucertola"]++;
                vetAnimali["Opossum"]++;
                vetAnimali["Orso"]++;
                vetAnimali["Serpente"]++;
                break;
            case 19:
                vetAnimali["Bisonte"]++;
                vetAnimali["Balena"]++;
                vetAnimali["Gallo"]++;
                vetAnimali["Coniglio"]++;
                vetAnimali["Farfalla"]++;
                vetAnimali["Lontra"]++;
                vetAnimali["Antilope"]++;
                vetAnimali["Armadillo"]++;
                vetAnimali["Cervo"]++;
                break;
            case 20:
                vetAnimali["Volpe"]++;
                vetAnimali["Rospo"]++;
                vetAnimali["Gallo"]++;
                vetAnimali["Orso"]++;
                vetAnimali["Aquila"]++;
                vetAnimali["Delfino"]++;
                vetAnimali["Cervo"]++;
                vetAnimali["Donnola"]++;
                vetAnimali["Lontra"]++;
                vetAnimali["Lupo"]++;
                break;         
        }
        gestore_nextDomanda();
    }catch(e){
        alert("gestoreRispostaNo" + e);
    }
}
/*finchè non si arriva all'ultima domanda (21 perchè indexDomanda parte da 1)
 * nodoElemento: li in html di tipo lista
 * nodoDom: Nodo che contiene l'attuale stringa del vetDomanda
 * nodoElemento.appendChild(nodoDOm) : concatenazione stringa domanda all'elemento della lista in html
 * domanda: nodo lista html
 * domanda.replaceChild : funzione che sostituisce via via la domanda attuale nodoDom così da evitare che tutte le domande del vettore si concatenino
 */
function gestore_nextDomanda(){
    try{
        if(indexDomanda === 21){
            gestoreLoader();
        }else{
            var nodoElemento = document.createElement("li");
            var nodoDom = document.createTextNode(vetDomanda[indexDomanda-1]);
            nodoElemento.appendChild(nodoDom);

            var domanda = document.getElementById("domanda");
            domanda.replaceChild(nodoElemento, domanda.childNodes[0]);
            
            indexDomanda++;
        }
    }catch(e){
        alert("gestore_nextDomanda" + e);
    }
}

function gestoreLoader(){
    document.getElementById("loader").style.display = "block";
    caricamento = setTimeout(showPage, 3000);
}

function showPage() {
    document.getElementById("loader").style.display = "none";
    gestore_animaleTrovato();
}

function gestore_nascondiDiv() {
    try{
        /*domanda nascosta*/
        var dom = document.getElementById("domanda");
        dom.style.display = "none";
        /*pulsanti nascosti*/
        var btn = document.querySelectorAll('.btnContainer'),
            i = 0,
            l = btn.length;
        for (i; i < l; i++) {
            btn[i].style.display = 'none';
        }
        /*hr native1 nascosto*/
        var hr = document.querySelectorAll('.native1'),
            i = 0,
            l = hr.length;
        for (i; i < l; i++) {
            hr[i].style.display = 'none';
        }
        /*div risultato mostrato*/
        var ris = document.querySelectorAll('.risultato'),
            i = 0,
            l = ris.length;
        for (i; i < l; i++) {
            ris[i].style.display = 'block';
        }
    }catch(e){
        alert("gestore_nascondiDiv" + e);
    }
}

/*for che scorre il vettore vetChiave che è inizializzato nel gestoreLoad()
 * il parseInt è necessario in JS, vetAnimali[vetChiave[key]] ritorna un interno che corrisponde al punteggio dell'animale usato come indice del vettore
 * animale: variabile stringa che prende il nome dell'animale che ha ottenuto più punti.
 * gestore_nascondiDiv(): pulizia del layout in html
 * nodoElemento: si crea un nodo tipo lista
 * nodoAnimaleGuida: nodo di tipo testo con la stringa 'animale' 
 * si esuegue una concatenazione tra il nodo lista e il nodo testo
 * si stampa nell'html con var animaledom, replaceChild obbligatoria per far si che non si ripeta più volte il nome dell'animale con punteggio più alto.
 */
function gestore_animaleTrovato(){
    try{
        var n = 0;
        var animale = '';
        for (var key in vetChiave) {
            if(parseInt(vetAnimali[vetChiave[key]]) > parseInt(n)){
                n = vetAnimali[vetChiave[key]];
                animale = vetChiave[key];
            }
        }
        gestore_nascondiDiv();
        var nodoElemento = document.createElement("li");
        var nodoAnimaleGuida = document.createTextNode(animale);
        nodoElemento.appendChild(nodoAnimaleGuida);

        var animaledom = document.getElementById("animaleGuida");
        animaledom.replaceChild(nodoElemento, animaledom.childNodes[0]);
        
    }catch(e){
        alert("gestore_animaleTrovato" + e);
    }
}

var indexDomanda;
var vetAnimali; 
var domandaAtt;
var animaleGuida;
var btnSi;
var btnNo;
var vetDomanda;
var vetChiave;
var caricamento;

function gestoreLoadTotem (){
    try{
        indexDomanda = 1;
        vetAnimali = new Array();
        vetDomanda = new Array();
        vetChiave = new Array();
        vetChiave = ["Alce", "Antilope", "Aquila", "Armadillo", "Balena", "Bisonte", "Cane", "Castoro", "Cavallo", "Cervo", "Cigno", "Colibrì", "Coniglio", "Coyote", "Delfino", "Donnola", "Farfalla", "Formica", "Gallo", "Lince", "Lontra", "Lucertola", "Lupo", "Opossum", "Orso", "Porcospino", "Puma", "Rospo", "Scoiattolo", "Serpente", "Tacchino", "Tartaruga", "Tasso", "Topo", "Volpe"];
        vetDomanda = ["Litighi spesso con qualcuno della tua famiglia?", "Sei mai stato irrispettoso/a nei confronti di un amico?", "Hai tanta stima di te stesso/a?", "Ti arrabbi spesso per motivi futili?", "Qualcuno ti ha mai detto di essere una persona coraggiosa?", "Credi di essere ingegnoso/a?", "Sei una persona un po' pignola e ordinata?", "Hai fiducia nel genere umano?", "Secondo il tuo parere studiare la storia permette di decifrare il presente?", "Ti piace sognare in grande?", "Credi che un giorno l'essere umano raggiungerà l'immortalità?", "Quando una situazione si fa pesante, cerchi di sdrammatizzarla?", "Pensi che tutti i tuoi amici siano leali con te?", "Credi nell'amore?", "Secondo te più si ha paura di una cosa e più aumentano le possibilità del fatto che quella cosa possa succedere?", "Ti piace passare tanto tempo da solo/a?", "Hai provato a fare meditazione?", "Pensi di poter insegnare tanto in generale alle persone?", "Pratichi attività fisica a livello agonistico?", "Ti hanno mai detto: 'Sei troppo buono/a con me!'?"];        
        btnNo = document.getElementById("btnNo");
        btnSi = document.getElementById("btnSi");
        btnNo.onclick = gestoreRispostaNo;
        btnSi.onclick = gestoreRispostaSi;
        gestore_inizializzaAnimali();
        gestore_nextDomanda();
    }catch (e){
        alert("gestoreLoadTotem" + e);
    }
}

//costumi
/*si oscurano tutti tranne divA*/
function gestore_copricapoA(){
    try{
        divA.style.display = "block";
        divB.style.display = "none";
        divVestito.style.display = "none";
        divScarpe.style.display = "none";
        divArco.style.display = "none";
        divTom.style.display = "none";
    }catch(e){
        alert("gestore_copricapoA" + e);
    }
}

/*si oscurano tutti tranne divB*/
function gestore_copricapoB(){
    try{
        divA.style.display = "none";
        divB.style.display = "block";
        divVestito.style.display = "none";
        divScarpe.style.display = "none";
        divArco.style.display = "none";
        divTom.style.display = "none";
    }catch(e){
        alert("gestore_copricapoB" + e);
    }
}

/*si oscurano tutti tranne divVestito*/
function gestore_vestito(){
    try{
        divA.style.display = "none";
        divB.style.display = "none";
        divVestito.style.display = "block";
        divScarpe.style.display = "none";
        divArco.style.display = "none";
        divTom.style.display = "none";
    }catch(e){
        alert("gestore_vestito" + e);
    }
}

/*si oscurano tutti tranne divScarpe*/
function gestore_scarpe(){
    try{
        divA.style.display = "none";
        divB.style.display = "none";
        divVestito.style.display = "none";
        divScarpe.style.display = "block";
        divArco.style.display = "none";
        divTom.style.display = "none";
    }catch(e){
        alert("gestore_scarpe" + e);
    }
}

/*si oscurano tutti tranne divArco*/
function gestore_arco(){
    try{
        divA.style.display = "none";
        divB.style.display = "none";
        divVestito.style.display = "none";
        divScarpe.style.display = "none";
        divArco.style.display = "block";
        divTom.style.display = "none";
    }catch(e){
        alert("gestore_arco" + e);
    }
}

/*si oscurano tutti tranne divTom*/
function gestore_tomahawk(){
    try{
        divA.style.display = "none";
        divB.style.display = "none";
        divVestito.style.display = "none";
        divScarpe.style.display = "none";
        divArco.style.display = "none";
        divTom.style.display = "block";
    }catch(e){
        alert("gestore_tomahawk" + e);
    }
}

var imgcopricapoA;
var imgcopricapoB;
var imgvestito;
var imgscarpe;
var imgarco;
var imgtomahawk;

var divA;
var divB;
var divVestito;
var divScarpe;
var divArco;
var divTom;

function gestoreLoadCostumi (){
    try{
        imgcopricapoA = document.getElementById("copricapoA");
        imgcopricapoA.onclick = gestore_copricapoA;
        imgcopricapoB = document.getElementById("copricapoB");
        imgcopricapoB.onclick = gestore_copricapoB;
        imgvestito = document.getElementById("vestito");
        imgvestito.onclick = gestore_vestito;
        imgscarpe = document.getElementById("scarpe");
        imgscarpe.onclick = gestore_scarpe;
        imgarco = document.getElementById("arco");
        imgarco.onclick = gestore_arco;
        imgtomahawk = document.getElementById("tomahawk");
        imgtomahawk.onclick = gestore_tomahawk;
        
        divA = document.getElementById("divA");
        divB = document.getElementById("divB");
        divVestito = document.getElementById("divVestito");
        divScarpe = document.getElementById("divScarpe");
        divArco = document.getElementById("divArco");
        divTom = document.getElementById("divTom");
    }catch (e){
        alert("gestoreLoadCostumi" + e);
    }
}
