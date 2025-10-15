
//allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo. 
//Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina 
//(il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo).



const fieldEta = document.getElementById('eta');
const fieldChilometri = document.getElementById('chilometri');
const button = document.querySelector('button');

const eta = fieldEta.value;
const chilometri = fieldChilometri.value;

button.addEventListener('click', ()=>{
    const eta = fieldEta.value;
    const chilometri = fieldChilometri.value;
    
    //il prezzo del biglietto è definito in base ai km (0.21 € al km)
    //Il numero di chilometri da percorrere
    let prezzo = chilometri *0.21;
    
    //Età del passeggero
    if (eta < 18) {
        prezzo = prezzo - (prezzo * 0.20);
        
        //va applicato uno sconto del 20% per i minorenni
    }else if (eta > 65) {
        //va applicato uno sconto del 40% per gli over 65.
        prezzo = prezzo - (prezzo * 0.40);
    }

    let spanPrezzo = document.createElement('span');
    let testoPrezzo = document.createTextNode(Math.round(prezzo)+ '€');
    spanPrezzo.appendChild(testoPrezzo);
    document.body.appendChild(spanPrezzo);

    let spanEta = document.createElement('span');
    let testoEta = document.createTextNode(eta + ' anni');
    spanEta.appendChild(testoEta);
    document.body.appendChild(spanEta);

    let spanChilometri = document.createElement('span');
    let testoChilometri = document.createTextNode(chilometri+ ' km');
    spanChilometri.appendChild(testoChilometri);
    document.body.appendChild(spanChilometri);

    console.log('Prezzo '+ prezzo); 
    console.log('Eta '+ eta);
    console.log('km '+ chilometri);
    
    

})