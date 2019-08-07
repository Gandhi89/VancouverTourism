
  // Get the modal
  var model = document.getElementById("model");
  // get book buttons
  var btn_book = document.getElementById("book");
  var btn_book1 = document.getElementById("book1");
  var btn_book2 = document.getElementById("book2");
  var btn_book3 = document.getElementById("book3");
  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];
  var btn_form = document.getElementById("btn_form");


  // When the user clicks book button(sky diving)

  btn_book.addEventListener("click",()=>{
    model.style.display = "block";
  })
  btn_book1.addEventListener("click",()=>{
    model.style.display = "block";
  })
  btn_book2.addEventListener("click",()=>{
    model.style.display = "block";
  })
  btn_book3.addEventListener("click",()=>{
    model.style.display = "block";
  })

  // When the user clicks submit button(skydiving)
  btn_form.addEventListener("click",()=>{
    // first name
    var model_firstName = document.getElementById("model_firstname").value;
    // last name
    var model_lastName = document.getElementById("model_lastName").value;
    // age
    var model_age = document.getElementById("model_age").value;
    // checkbox
    var model_checkBox = document.getElementById("cb").checked;
    // date
    var model_date = document.getElementById("date").value;

    // check if checkbox is ticked or note
    if(model_checkBox){
      if((model_lastName=="") || (model_firstName=="") || (model_age=="") || (model_date == "")){
        alert("please fill all fields");
      }
      else{
        if(!isNaN(model_age)){
          if(model_age<20){
            alert("name: "+model_firstName+" "+model_lastName+"\n"+"age: "+model_age+"\n"+"date: "+model_date+"\n"+"fees: 150$");
            model.style.display = "none";
            document.getElementById("model_firstname").value = "";
            document.getElementById("model_lastName").value = "";
            document.getElementById("model_age").value = "";
            document.getElementById("date").value = "";

          }
          else if(model_age>20){
            alert("name: "+model_firstName+" "+model_lastName+"\n"+"age: "+model_age+"\n"+"date: "+model_date+"\n"+"fees: 250$");
            model.style.display = "none";
            document.getElementById("model_firstname").value = "";
            document.getElementById("model_lastName").value = "";
            document.getElementById("model_age").value = "";
            document.getElementById("date").value = "";
          }
        }
        else{
          alert("please enter correct age")
        }
      }
    }
    else{
      alert("please confirm by checking checkbox");
    }
  })

  // When the user clicks on <span> (x), close the modal
  span.addEventListener("click",()=>{
    model.style.display = "none";
  })
