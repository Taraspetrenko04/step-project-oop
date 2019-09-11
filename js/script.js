'use strict';

window.onload = () => { //START
    
function addNoItems (){ // Add no Items
    let store = document.getElementsByClassName('section__store')[0];
    let p = document.createElement('p');
    var text = document.createTextNode('No Items have been added');
    p.appendChild(text);
    store.appendChild(p);
    store.classList.add('section__store--noItems');
}
addNoItems();

// Button Create Form
// function showForm() {
//     document.getElementsByClassName('modal')[0].classList.add('active');
// }
// function hideForm() {
//     document.getElementsByClassName('modal')[0].classList.remove('active');
// }
function toggleForm() {
    document.getElementsByClassName('modal')[0].classList.toggle('active');
}
// document.getElementsByClassName('header__button')[0].addEventListener('click', function() {
//     document.getElementsByClassName('modal')[0].classList.add('active');

// })
// Button Hide Form
document.getElementsByClassName('button')[0].addEventListener('click', function() {
        toggleForm();
});
   
document.getElementsByClassName('modal')[0].addEventListener('click', function(event) {
    let target = event.target;
    console.log(target.className);

    
    if (target.className == 'modal__close' || target.className == 'modal active'){
        toggleForm();
    }
});



// document.getElementsByTagName('body')[0].addEventListener('click', function(event) {
//     let target = event.target;
//     console.log(target.className);


//     if (target.className == 'button'){
//         toggleForm();
//     }else if (target.className == 'modal active' || target.className == 'modal__close' ){
//         toggleForm();
//     } else if(target.className == 'modal__submit button '){
//         toggleForm();
//         // createCard()
//     } else{}
    
// })

// END onload
}