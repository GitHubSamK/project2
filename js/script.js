document.addEventListener('DOMContentLoaded', init);


function init() {

    
  const nextbtn = document.querySelector(".nextbutton");
  const frame = document.querySelector(".frame");
  const backbtn = document.querySelector(".backbutton");
  const presentation = frame.querySelectorAll("img");

 
  
 
  

  
  
  
  presentation.forEach((pic) => {
    pic.classList.add("hide");
  });
  
 
  presentation[0].classList.remove("hide");

  
  
  

   


   nextbtn.addEventListener("click",switchpic);
   backbtn.addEventListener("click", switchpic);


   

  
}

const controlsDiv = document.createElement('div');
   controlsDiv.className = 'controls';
   
   const backBtn = document.createElement('a');
   backBtn.href = '#';
   backBtn.className = 'backutton';
   backBtn.innerText = 'Back';
   
   const nextBtn = document.createElement('a');
   nextBtn.href = '#';
   nextBtn.className = 'nextbutton';
   nextBtn.innerText = 'Next';
   
   controlsDiv.appendChild(backBtn);
   controlsDiv.appendChild(nextBtn);
 
   const figure = document.querySelector('figure');
   figure.insertAdjacentElement('afterend', div);




function switchpic(e) {
  
   
    e.preventDefault();
    
  
    const frame = document.querySelector(".frame");
    const presentation = frame.querySelectorAll("img");
    let now = document.querySelector(".now");
    let nextUp = "";

    
  
   
    if(e.target.className == 'nextbutton') {
      nextUp = now.nextElementSibling;
    }
  
    if(e.target.className == 'backbutton') {
      nextUp = now.previousElementSibling;
    }
    
  
    now.classList.toggle("hide");
    now.classList.toggle("now");
    
    
    if (!nextUp) {
      nextUp = presentation[presentation.length - 1];
    }
  
   
    if (nextUp.nodeName !== "IMG") {
      nextUp = presentation[0];
    }
  
   
    nextUp.classList.remove("hide");
    nextUp.classList.add("now");
  }


