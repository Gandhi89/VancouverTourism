
// Get the modal
var modal_weather = document.getElementById("model_weather");
var modal_geography = document.getElementById("model_geography");
var modal_culture = document.getElementById("model_culture");

// Get the button that opens the modal
var btn = document.getElementById("myBtn_weather");
var myBtn_geography = document.getElementById("myBtn_geography");
var myBtn_culture = document.getElementById("myBtn_culture");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var span1 = document.getElementsByClassName("close")[1];
var span2 = document.getElementsByClassName("close")[2];

// When the user clicks the button, open the modal

btn.addEventListener("click",() => {
  modal_weather.style.display = "block";
})


// When the user clicks the button, open the modal(geography)

myBtn_geography.addEventListener("click",() =>{
  modal_geography.style.display = "block";
})

// When the user clicks the button, open the modal(culture)

myBtn_culture.addEventListener("click",() => {
  modal_culture.style.display = "block";
})

// When the user clicks on <span> (x), close the modal

span.addEventListener("click",() => {
  modal_weather.style.display = "none";
})
// When the user clicks on <span> (x), close the modal

span1.addEventListener("click",()=>{
  modal_geography.style.display = "none";
})

// When the user clicks on <span> (x), close the modal

span2.addEventListener("click",()=>{
  modal_culture.style.display = "none";
})

// When the user clicks anywhere outside of the modal, close it
window.addEventListener("click",(event)=>{
  if (event.target == modal_weather) {
    modal_weather.style.display = "none";
  }
  if (event.target == modal_geography) {
    modal_geography.style.display = "none";
  }
  if (event.target == modal_culture) {
    modal_culture.style.display = "none";
  }
})
