/*Add the JavaScript here for the function billingFunction().  
It is responsible for setting and clearing the fields in Billing Information */
function billingFunction() {
    if (document.getElementById("same").checked) {
        document.getElementById("billingName").value = document.getElementById("shippingName").value;
       document.getElementById("billingZip").value = document.getElementById("shippingZip").value;
    }
    else {
      document.getElementById("billingName").value = "";
      document.getElementById("billingZip").value = "";
    }
      }
      function checkFunction() {
        let s1 = document.getElementById("shippingName").value;
        let b1 = document.getElementById("billingName").value
        let s2 =  document.getElementById("shippingZip").value
        let b2 = document.getElementById("billingZip").value
        
        if(s1==b1 && s2==b2){
            alert("The info is the same");
        
        }
        else{
            alert("Oops! The Billing Info is different from the shipping Info");
          
        }
          }
          function myFunction() {
            alert("ALERT!");
          }