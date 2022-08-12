
let Hamburger = document.querySelector(".hamburger");
let slideDown = document.querySelector(".slide-down");
let Button = document.querySelector(".button");




// ADDING THE TOGGLE BAR
Hamburger.addEventListener("click", function(){

    slideDown.classList.toggle("slide-in");
})



// REMOVING CODE OF THE TOGGLE BAR

Button.addEventListener("click", function(){
    
    slideDown.classList.remove("slide-in");
})
alert("Hello i am back to using js")




// SLIDE PRODUCTS................

let slideIndex = 1;
showSlides(slideIndex)


function dots(n){
    showSlides(slideIndex = n);
}

function showSlides(n){
    let i;
    let slides = document.getElementsByClassName("myslides");
    let dote = document.getElementsByClassName("dot");


setInterval((showSlides) => {
        
    if ( n > slides.length){slideIndex = 1}
    if (n < 1){slideIndex = slides.length}

   
    for (i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
  }
        for (i=0; i < dote.length; i++){
            dote[i].className = dote[i].className.replace("active", "")
      
    }
 

       slides[slideIndex-1].style.display="block" ;
    dote[slideIndex-1].className += " active";

        for ( i = 0; i < slides[i].length; i++){
      if (slideIndex-1){
        i++
      }
    }
    
  }, 1000);

    
}





  