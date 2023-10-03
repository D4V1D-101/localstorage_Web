function store(){ //stores items in the localStorage
    var jelszo = document.getElementById('jelszo').value;
    var key = document.getElementById('key').value;

    const adat = {
        jelszo: jelszo,
    }

    window.localStorage.setItem(key,JSON.stringify(adat));  
    //converting object to string
}
function removeItem(){ /* az key megadásával törlés a localstoragebol */
    var key = document.getElementById('torl').value; 
    localStorage.removeItem(key) 
}

function clearStorage(){ /* az összes törlése a local storagebol */
    localStorage.clear()
}
window.onload =function(){ 
    document.getElementById("adatok").onsubmit = store
    document.getElementById("clearButton").onclick = clearStorage
    document.getElementById("torlgomb").onclick = removeItem
}