document.addEventListener('DOMContentLoaded', init);
var myInterval1 = setInterval(showNewSlide, 4000);
var myInterval2 = setInterval(showNewSlides, 4000);


// prepare for interaction
function init() {
    
    

    const container = document.querySelector('.pictures');

    const containertwo = document.querySelector('.gallery');

    const slideshow = document.querySelector(".slideshow");

    const presentation = slideshow.querySelectorAll("img");

    const slideshowtwo = document.querySelector(".slideshowtwo");

    const presentationtwo = slideshowtwo.querySelectorAll("img");

    const show = container.querySelectorAll("figure");
    //console.log(presentation);

    // createslide controls


    const controlsDiv = document.createElement("div");

    controlsDiv.className = 'controls';

    controlsDiv.innerHTML = '<button><a href="#" class="backbutton">Back</a></button><button><a href="#" class="nextbutton">Next</a></button>';


    //add controls to page

    container.append(controlsDiv);


    const backBtn = controlsDiv.querySelector(".backbutton");
    const nextBtn = controlsDiv.querySelector(".nextbutton");

    //add interactivity 

    backBtn.addEventListener('click', showNewSlide);
    nextBtn.addEventListener('click', showNewSlide);

    
    
    const controlsDivTwo = document.createElement("div");

    controlsDivTwo.className = 'controlstwo';

    controlsDivTwo.innerHTML = '<a href="#" class="backbuttontwo">Soccerballs</a><a href="#" class="nextbuttontwo">Jerseys, Cleats and Flags</a>';


    //add controls to page

    containertwo.append(controlsDivTwo);


    const backBtnTwo = controlsDivTwo.querySelector(".backbuttontwo");
    const nextBtnTwo = controlsDivTwo.querySelector(".nextbuttontwo");

    //add interactivity 
    backBtnTwo.addEventListener('click', switchAlbum);
    nextBtnTwo.addEventListener('click', switchAlbum);


    
    
    
    //setup slides, first hide slides except first one

    presentation.forEach((pic) => {

        pic.classList.add("hide");
        presentation[0].classList.remove("hide");

    });

    

    show.forEach((figure) => {

        figure.classList.add("hide");
        show[0].classList.remove("hide");

    });


    presentationtwo.forEach((pictwo) => {

        pictwo.classList.add("hide");
        presentationtwo[0].classList.remove("hide");

    });
    
    backBtn.addEventListener('click', showNewSlides);
    nextBtn.addEventListener('click', showNewSlides);

    
     //let currentImageCounter = 0;

     //nextUp[currentImageCounter].style.opacity = 1;

   

}






function showNewSlide(e) {

    if (e){

        e.preventDefault();
        window.clearInterval(myInterval1);
    }

    const controlsDiv = document.querySelector(".controls");
    const currentSlide = document.querySelector('.now');
    const container = document.querySelector('.pictures');
    const backBtn = controlsDiv.querySelector(".backbutton");
    const nextBtn = controlsDiv.querySelector(".nextbutton");
    const slideshow = document.querySelector(".slideshow");

    const presentation = slideshow.querySelectorAll("img");

   


    //checkto see which button was clicked
    if(e){
        
        var myButton = e.target;
        console.log("test", e);
        }
    //const showing =
    let nextUp = ""

    if (!e || myButton.classList.contains('backbutton')) {
        nextUp = currentSlide.previousElementSibling;
    } else {
        nextUp = currentSlide.nextElementSibling;
    }



    if (nextUp === null) {
        let index = presentation.length - 1;
        nextUp = presentation[index];
    }

    //nextbutton logic


    //console.log(nextUp.nodeName);
    if (nextUp.nodeName == 'FIGCAPTION') {
        nextUp = presentation[0];

    }

    currentSlide.classList.toggle('hide');
    currentSlide.classList.toggle('now');

    nextUp.classList.toggle('hide');
    nextUp.classList.toggle('now');


    

    //changecaption

    
    

    const txt = nextUp.alt;
    const caption = slideshow.querySelector('Figcaption');
    caption.textContent = txt;

    
    



   // nextBtn.addEventListener("click", showNewSlide);
    //backBtn.addEventListener("click", showNewSlide);

    
    console.log (nextUp,nextUp.previousElementSibling);
    

  


}


function switchAlbum(e) {

    e.preventDefault(); 

    const albumone = document.querySelector('.slideshow');
    const albumtwo = document.querySelector('.slideshowtwo');
   

    if(e.target.classList.contains("backbuttontwo")){

        albumone.classList.add('hide');
 
        albumtwo.classList.remove('hide');
        
    } else {
        albumone.classList.remove('hide');
        albumtwo.classList.add('hide');
    }

    
   
}


    function newShow(y) {

    y.preventDefault(); 

    const controlsDivTwo = document.querySelector(".controlstwo");
    const currentShow = document.querySelector('.nowtwo');
    const containertwo = document.querySelector('.gallery');
    const backBtnTwo = controlsDivTwo.querySelector(".backbuttontwo");
    const nextBtnTwo = controlsDivTwo.querySelector(".nextbuttontwo");
    const container = document.querySelector(".pictures");

    const show = container.querySelectorAll("figure");

   


    //checkto see which button was clicked
    const myButtonTwo = y.target;
    //const showing =
    let nextUpTwo = ""

    if (myButtonTwo.classList.contains('backbuttontwo')) {
        nextUpTwo = currentShow.previousElementSibling;
    } else {
        nextUpTwo = currentShow.nextElementSibling;
    }



    if (nextUpTwo === null) {
        let index = show.length - 1;
        nextUpTwo = show[index];
    }

    if (nextUpTwo.nodeName == 'P') {
        nextUpTwo = show[0];

    }

    if (myButtonTwo.classList.contains('backbuttontwo')) {
        backBtnTwo.classList.add('currentBtn');
        nextBtnTwo.classList.remove('currentBtn');
    }
    else {
        backBtnTwo.classList.remove('currentBtn');
        nextBtnTwo.classList.add('currentBtn');
    } 
    



    //nextbutton logic


    //console.log(nextUp.nodeName);
    

    currentShow.classList.toggle('hide');
    currentShow.classList.toggle('nowtwo');

    nextUpTwo.classList.toggle('hide');
    nextUpTwo.classList.toggle('nowtwo');

    
    

    //changecaption

    
    

    nextBtnTwo.addEventListener("click", newShow);
    backBtnTwo.addEventListener("click", newShow);

    console.log (nextUpTwo);

  


}

function showNewSlides(e) {
    if (e){

        e.preventDefault();
        window.clearInterval(myInterval2);
    }
    

    const controlsDiv = document.querySelector(".controls");
    const currentSlideTwo = document.querySelector('.nowslidetwo');
    const container = document.querySelector('.pictures');
    const backBtn = controlsDiv.querySelector(".backbutton");
    const nextBtn = controlsDiv.querySelector(".nextbutton");
    const slideshowtwo = document.querySelector(".slideshowtwo");

    const presentationtwo = slideshowtwo.querySelectorAll("img");

   


    //checkto see which button was clicked
    if(e){
        
    var myButton = e.target;
    console.log("test", e);
    }

    
    //const showing =
    let nextUpOne = ""

    if (!e || myButton.classList.contains('backbutton')) {
        nextUpOne = currentSlideTwo.previousElementSibling;
    } else {
        nextUpOne = currentSlideTwo.nextElementSibling;
    }



    if (nextUpOne === null) {
        let index = presentationtwo.length - 1;
        nextUpOne = presentationtwo[index];
    }

    //nextbutton logic


    //console.log(nextUp.nodeName);
    if (nextUpOne.nodeName == 'FIGCAPTION') {
        nextUpOne = presentationtwo[0];

    }

    currentSlideTwo.classList.toggle('hide');
    currentSlideTwo.classList.toggle('nowslidetwo');

    nextUpOne.classList.toggle('hide');
    nextUpOne.classList.toggle('nowslidetwo');


    

    //changecaption
    const txt = nextUpOne.alt;
    const caption = slideshowtwo.querySelector('figcaption');
    caption.textContent = txt;



    //nextBtn.addEventListener("click", showNewSlides);
    //backBtn.addEventListener("click", showNewSlides);

    

    console.log (nextUpOne,nextUpOne.previousElementSibling);

  


}


//AUTOPLAY

//const nextImageDelay = 5000;
//let currentImageCounter = 0;

//nextUp[currentImageCounter].style.opacity = 1;

//setInterval(nextimage, nextImageDelay);

function nextImage(index) {
    nextUp[i].style.opacity = 0;

    //currentImageCounter = (currentImageCounter+1) % presentation.length;

    console.log (index);
}