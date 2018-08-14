
function calculate() {
var distance=document.getElementById('distance').value; 
var weight=document.getElementById('weight').value;
var fragile = 0;
if (document.getElementById('fragile').value==='yes'){fragile=+20};
var length=document.getElementById('length').value;
length=parseFloat(length);
var width=document.getElementById('width').value;
width=parseFloat(width);
var height=document.getElementById('height').value;
height=parseFloat(height);
 var insurance = 0;
 if (document.getElementById('insurance').checked){insurance=+15};
 var expressDelivery = 0;
 if (document.getElementById('expressDelivery').checked){expressDelivery=+45};
 var packaging = 0;
 if (document.getElementById('packaging').checked){packaging=+5};
 var V=parseFloat(height)*parseFloat(width)*parseFloat(length);
 var total=V*parseFloat(distance)*parseFloat(weight)+parseFloat(fragile)+insurance+expressDelivery+packaging;
 document.getElementById("total").innerHTML = total+"$";
}


 