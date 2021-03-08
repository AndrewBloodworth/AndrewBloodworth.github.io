const refCon = (refInner) => {
    refInner.innerHTML = '';
}
let timeOut;
let button = document.getElementById("ref-button");
button.onclick = event => {
    if (timeOut) {
        clearTimeout(timeOut);
    }
    let ref = document.getElementById("reference");
    let count = ref.getElementsByClassName('h-item').length + 1;
    let lastReference = ref.lastElementChild
    lastReference.setAttribute('class','h-item');
    
    let newReference = document.createElement('div');
    newReference.setAttribute('class','h-item extra');
    newReference.innerHTML = `<div class="swipe-box"><h3>Reference #${count}</h3></div>`;
    ref.appendChild(newReference);


    let refInner = document.getElementById("add-ref-confirmation")
    refInner.innerHTML = `Reference #${count} created.`
    timeOut = setTimeout(function() { refCon(refInner) },2000);
};