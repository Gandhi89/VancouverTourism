
  var submit_button = document.getElementById("btn_form");

  submit_button.addEventListener("click",()=>{
    var first_name = document.getElementById("form_firstname").value;
    var last_name = document.getElementById("form_lastName").value;
    var country_origin = document.getElementById("form_country").value;
    var arrival_date = document.getElementById("form_date").value;
    var package1 = document.getElementById("monthly_plan1").checked;
    var package2 = document.getElementById("monthly_plan2").checked;
    var package3 = document.getElementById("monthly_plan3").checked;

    var fieldValues = [];
    fieldValues.push(first_name);
    fieldValues.push(last_name);
    fieldValues.push(country_origin);
    fieldValues.push(arrival_date);
    var emptyData = "false";
    for(var i=0; i<fieldValues.length; i++){
      if(fieldValues[i] == ""){
        emptyData = "true";
      }
    }
    if(emptyData == "true"){
      alert("please fill all data first")
    }
    else{

        if(package1 && package2 && package3){
          alert("Thank you for choosing 15 days, 5 days and 7 days package. Charges are : $1000" );
        }
        else if(package3 && package1){
          alert("Thank you for choosing 5 days package and 15 days package. Charges are : $700" );
        }
        else if(package3 && package2){
          alert("Thank you for choosing 5 days package and 7 days package. Charges are : $500" );
        }
        else if(package1 && package2){
          alert("Thank you for choosing 15 days package and 7 days package. Charges are : $800" );
        }
        else if(package1){
          alert("Thank you for choosing 15 days package. Charges are : $500" );
        }
        else if(package2){
          alert("Thank you for choosing 7 days package. Charges are : $300" );
        }
        else if(package3){
          alert("Thank you for choosing 5 days package. Charges are : $200" );
        }
        else{
          alert("Select atleast one plan");
        }
      }
  })
