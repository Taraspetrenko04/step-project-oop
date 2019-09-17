'use strict';
window.onload = () => { //START


    if (localStorage.getItem('applications') !== null) {
        createAllCards();
    }





    function createAllCards() {

        JSON.parse(localStorage.getItem('applications')).forEach((element, index) => {
            let cardStore = document.getElementsByClassName('section__store')[0];
            let cross = document.createElement('div');
            cross.id = element.id;
            cross.classList.add('modal__remove');
            cross.innerText = "X";
            let card = document.createElement('div');
            card.id = element.id;
            card.classList.add('modal__card');
            let p = document.createElement('p');
            let p2 = document.createElement('p');
            p.innerHTML = `${element.name}`;
            p2.innerHTML = `${element.doctor}`;
            card.appendChild(p);
            card.appendChild(p2);
            // card.innerHTML = `${element.name} \n ${element.doctor}`;
            let showMore = document.createElement('div');
            showMore.innerText = ("Show more...");
            showMore.classList.add('modal__showMore');
            showMore.id = element.id;
            card.appendChild(showMore);
            card.appendChild(cross);
            // card.setAttribute('datd-index', index);//set data-index 
            cardStore.appendChild(card);
        });
    }


    function addNoItems() { // Add no Items
        let store = document.getElementsByClassName('section__store')[0];
        let p = document.createElement('p');
        var text = document.createTextNode('No Items have been added');
        p.appendChild(text);
        store.appendChild(p);
        store.classList.add('section__store--noItems');
    }


    function removeNoItems() { // Remove no Items
        document.getElementsByClassName('section__store')[0].remove('p');
    }


    function toggleForm() {
        document.getElementsByClassName('modal')[0].classList.toggle('active--modal');
    }

    // Button Hide Form
    document.getElementsByClassName('button')[0].addEventListener('click', function () {
        toggleForm();
    });

    document.getElementsByClassName('modal')[0].addEventListener('click', function (event) {

        let target = event.target;

        if (target.className == 'modal__close' || target.className == 'modal active--modal') {
            toggleForm();
        }
        // else if( target.className == 'modal__submit'){
        //     console.log("Hi Jack");
        // }
    });

    // Modal doctor's select
    document.getElementsByClassName('modal__select')[0].addEventListener('change', function () {
        let colection = document.getElementsByTagName('input');
        let value = document.getElementsByClassName('modal__select')[0].value;


        for (let elem of colection) {
            elem.classList.add('hide'); //hide evere input


            if (elem.name.includes(value)) { //show evere input
                elem.classList.remove('hide');
            }
        }
    })


    // Submit modal window button
    document.getElementsByClassName('modal__submit')[0].addEventListener('click', function () {

        let doctor = document.getElementsByTagName('select')[0].value;

        //  Create patien
        let patient = new Patient(name);
        // 
        saveToLocal(patient);
        toggleForm();
        createCard()
    })


    // Class Visit
    class Visit {
        constructor() {
            this.doctor = document.getElementsByTagName('select')[0].value;
            this.purpose = document.getElementsByClassName('purpose')[0].value;
            this.lastVisitDate = document.getElementsByClassName('lastVisitDate')[0].value;
            this.name = document.getElementsByClassName('name')[0].value;
        }
    }

    class Patient extends Visit {
        constructor(name) {
            super(name)
            this.text = document.getElementsByClassName('modal__textaria')[0].value;
            this.id = idGenerator();
        }

    }
    // Function save to Local storage
    function saveToLocal(obj) {
        let arr = [];


        if (localStorage.getItem('applications') !== null) {

            // save LS data to arr
            JSON.parse(localStorage.getItem('applications')).forEach((item) => {
                arr.push(item);
            });
            arr.push(JSON.parse(JSON.stringify(obj))); // save new obj to arr 


            localStorage.removeItem('applications');

            // set LS data with new obj
            localStorage.setItem('applications', JSON.stringify(arr));


        } else {
            arr.push(obj);
            localStorage.setItem('applications', JSON.stringify(arr));
        }
    }

    function createCard() {


        let arr = JSON.parse(localStorage.getItem('applications'));
        let element = arr[arr.length - 1];
        let cardStore = document.getElementsByClassName('section__store')[0];
        let cross = document.createElement('div');
        cross.id = element.id;
        cross.classList.add('modal__remove');
        cross.innerText = "X";
        let card = document.createElement('div');
        card.id = element.id;
        card.classList.add('modal__card');
        let p = document.createElement('p');
        let p2 = document.createElement('p');
        p.innerHTML = `${element.name}`;
        p2.innerHTML = `${element.doctor}`;
        card.appendChild(p);
        card.appendChild(p2);
        // card.innerHTML = ` ${element.name} '\n'  ${element.doctor}`;
        let showMore = document.createElement('div');
        showMore.innerText = ("Show more...");
        showMore.classList.add('modal__showMore');
        showMore.id = element.id;
        card.appendChild(showMore);
        card.appendChild(cross);
        // card.setAttribute('datd-index', index);//set data-index 
        cardStore.appendChild(card);
    }


    function idGenerator() { //Generates 5 chars ID fron 1 to 9;
        let itemId = '';
        let num = 1;


        for (let i = 1; i < 6; i++) {
            itemId += Math.floor(Math.random() * (9 - 1) + 1);
        }
        return itemId;
    }



    document.getElementsByClassName('section__store')[0].addEventListener('click', function (event) {
        let target = event.target;
        // console.log(target.getAttribute('id'));
        if (target.className == 'modal__remove') {
            let id = target.getAttribute('id')
            removeCard(id);
        } else if (target.className == 'modal__showMore') {
            let err = document.createElement('div');
            err.classList.add('modal__error');
            err.innerText = ("Sorry it doesn't work today");
            document.getElementsByTagName('body')[0].appendChild(err);

            setTimeout(() => {
                err.classList.add('hide');
            }, 1500);
        }

    });


    // Remove card from desktop && from localStor
    function removeCard(id) {
        // desktop remove
        document.getElementById(id).remove();


        let curId = id; // LS remove
        let arr = [];
        arr = JSON.parse(localStorage.getItem('applications')).filter((item) =>
            item.id !== curId
        );


        localStorage.removeItem('applications');

        // set LS data without
        if (arr.length != 0) {
            localStorage.setItem('applications', JSON.stringify(arr));
        } else {
            localStorage.removeItem('applications');
        }

    }


    // END onload

}