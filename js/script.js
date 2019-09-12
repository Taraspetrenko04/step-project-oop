'use strict';

window.onload = () => { //START

    function addNoItems() { // Add no Items
        let store = document.getElementsByClassName('section__store')[0];
        let p = document.createElement('p');
        var text = document.createTextNode('No Items have been added');
        p.appendChild(text);
        store.appendChild(p);
        store.classList.add('section__store--noItems');
    }
    addNoItems();


    function toggleForm() {
        document.getElementsByClassName('modal')[0].classList.toggle('active');
    }

    // Button Hide Form
    document.getElementsByClassName('button')[0].addEventListener('click', function () {
        toggleForm();
    });

    document.getElementsByClassName('modal')[0].addEventListener('click', function (event) {
        let target = event.target;

        if (target.className == 'modal__close' || target.className == 'modal active') {
            toggleForm();
        }
    });

    // Modal doctor's select
    document.getElementsByClassName('modal__select')[0].addEventListener('change', function () {
        let colection = document.getElementsByTagName('input');
        let value = document.getElementsByClassName('modal__select')[0].value;


        for (let elem of colection) {
            elem.classList.add('hide');


            if (elem.name.includes(value)) {
                elem.classList.remove('hide');
            }
        }
    })




    // END onload
}