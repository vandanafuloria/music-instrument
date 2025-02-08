


const saEl = new Audio("assets/sa.mp3");
const reEl = new Audio('assets/re.mp3');
const gaEl = new Audio("assets/ga.mp3");
const maEl = new Audio('assets/ma.mp3');
const paEl = new Audio("assets/pa.mp3");
const dhaEl = new Audio('assets/dha.mp3');
const niEl = new Audio("assets/ni.mp3");

const saBox = document.querySelector('.sa');
const reBox = document.querySelector('.re');
const gaBox = document.querySelector('.ga');
const maBox = document.querySelector('.ma');
const paBox = document.querySelector('.pa');
const dhaBox = document.querySelector('.dha');
const niBox = document.querySelector('.ni');




function displayKey(event) {


    // console.log(event.code);
    console.log(event.key);

    switch (event.key) {
        case "a":
            saEl.play();
            saEl.currentTime = 0;
            saBox.style.transition = "0.5s ease-in-out";
            saBox.style.transform = "scale(1.2)";
            saBox.firstElementChild.style.transform = "rotate(-30deg)";
            saBox.firstElementChild.style.boxShadow = "2px 2px 10px 0.5px purple";


           

            setTimeout(() => {
                saBox.style.transform = "scale(1)";
                saBox.firstElementChild.style.transform = "rotate(0)";
                saBox.firstElementChild.style.boxShadow = "";

            }, 500);

            break;
        case "s":
            reEl.play();
            reEl.currentTime = 0;
            reBox.style.transition = " transform 0.5s ease-in-out";
            reBox.style.transform = "scale(1.2)";
            reBox.firstElementChild.style.transform = "rotate(-30deg)";
            reBox.firstElementChild.style.boxShadow = "2px 2px 10px 0.5px purple";




            setTimeout(() => {
                reBox.style.transform = "scale(1)";
                reBox.firstElementChild.style.transform = "rotate(0)";
                reBox.firstElementChild.style.boxShadow = "";

            }, 500);
            break;
        case "d":

            gaEl.play();
            gaEl.currentTime = 0;
            gaBox.style.transition = " transform 0.5s ease-in-out";
            gaBox.style.transform = "scale(1.2)";
            gaBox.firstElementChild.style.transform = "rotate(-30deg)";
            gaBox.firstElementChild.style.boxShadow = "2px 2px 10px 0.5px purple";



            setTimeout(() => {
                gaBox.style.transform = "scale(1)";
                gaBox.firstElementChild.style.transform = "rotate(0)";
                gaBox.firstElementChild.style.boxShadow = "";

            }, 500);
            break;
        case "f":
            maEl.currentTime = 0;

        maEl.play();
        maBox.style.transition = " transform 0.5s ease-in-out";
        maBox.style.transform = "scale(1.2)";
        maBox.firstElementChild.style.transform = "rotate(-30deg)";
        maBox.firstElementChild.style.boxShadow = "2px 2px 10px 0.5px purple";



        setTimeout(() => {
            maBox.style.transform = "scale(1)";
            maBox.firstElementChild.style.transform = "rotate(0)";
            maBox.firstElementChild.style.boxShadow = "";


        }, 500);
            break;

        case "g":
            paEl.play();
            paEl.currentTime = 0;
            paBox.style.transition = " transform 0.5s ease-in-out";
        paBox.style.transform = "scale(1.2)";
        paBox.firstElementChild.style.transform = "rotate(-30deg)";
        paBox.firstElementChild.style.boxShadow = "2px 2px 10px 0.5px purple";
        



        setTimeout(() => {
            paBox.style.transform = "scale(1)";
            paBox.firstElementChild.style.transform = "rotate(0)";
            paBox.firstElementChild.style.boxShadow = "";

        }, 500);
            break;
        case "h":
            dhaEl.play();
            dhaEl.currentTime = 0;
            dhaBox.style.transition = " transform 0.5s ease-in-out";
        dhaBox.style.transform = "scale(1.2)";
        dhaBox.firstElementChild.style.transform = "rotate(-30deg)";
        dhaBox.firstElementChild.style.boxShadow = "2px 2px 10px 0.5px purple";



        setTimeout(() => {
            dhaBox.style.transform = "scale(1)";
            dhaBox.firstElementChild.style.transform = "rotate(0)";
            dhaBox.firstElementChild.style.boxShadow = "";

        }, 500);
            break;
        case "j":
            niEl.play();
            niEl.currentTime = 0;
            niBox.style.transition = " transform 0.5s ease-in-out";
        niBox.style.transform = "scale(1.2)";
        niBox.firstElementChild.style.transform = "rotate(-30deg)";
        // niBox.style.boxShadow = "2px 2px 10px 0.5px white";
        niBox.firstElementChild.style.boxShadow = "2px 2px 10px 0.5px purple";



        setTimeout(() => {
            niBox.style.transform = "scale(1)";
            niBox.firstElementChild.style.transform = "rotate(0)";
           
            niBox.firstElementChild.style.boxShadow = "";

        }, 500);
            break;

    }

}


addEventListener('keypress', displayKey);