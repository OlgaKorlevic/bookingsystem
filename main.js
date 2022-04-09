//Code to pick the trip type fight:
//1. returns the chosen type or message if none is chosen DONE

    function tripType() {         
        let selectedTrip='';
        if(document.getElementById('oneWay').checked) {
            //Code in green showed which buttons were chosen.
            //document.getElementById("disp").innerHTML
              //  = document.getElementById("oneWay").value
              //  + " radio button checked";
        selectedTrip=document.getElementById('oneWay').value;
        document.getElementById("disp").innerHTML = "";
        return selectedTrip;
        }
        else if(document.getElementById('return').checked) {
        selectedTrip=document.getElementById('return').value;
        document.getElementById("disp").innerHTML = ""
        return selectedTrip;
            }
        else {
        document.getElementById("disp").innerHTML = "Trip type is not selected";
        return selectedTrip;
              }
    }


//Code that hides return when One Way and shows it back when Return is chosen DONE
function hideReturn() {
    let ret = document.getElementById('ret');
    let retlb = document.getElementById('retlb');
        if (document.getElementById('oneWay').checked) {
          ret.style.display = 'none';
          retlb.style.display = 'none';
          document.getElementById("disp").innerHTML = "";
        }else if (document.getElementById('return').checked){
        ret.style.display = 'inline-block';
        retlb.style.display = 'inline-block';
        document.getElementById("disp").innerHTML = "";
        }
      }



//Code for choice of dates
//1.Checks that departure date is earlier than return===OPTIONAL, LATER
//2.Checks that both dates (or one if Return is not available) are chosen (needs to assign it to 
//Submit button) DONE


function flightDates (){
    let departureDate = document.getElementById('dep').value;
    let returnDate = document.getElementById('ret').value;
    let tripSelected=tripType();
    if (tripSelected==='') {
    document.getElementById("disp2").innerHTML = "Did you choose the trip type?";}
    else{
   if (departureDate===''){
    document.getElementById("disp2").innerHTML = "Select the date(s)";
    }  else if (tripSelected==='return' && returnDate===''){
    document.getElementById("disp2").innerHTML = "Select the date(s)";
} else if (tripSelected==='oneWay'){
    document.getElementById("disp2").innerHTML = "";
    returnDate="not applicable";
    return departureDate;
    return returnDate;
}
else {
    document.getElementById("disp2").innerHTML = "";
    //document.getElementById("disp2").innerHTML= 'departure'+departureDate+'return'+returnDate;//
    //Code to check which dates the function returns if it works
    return departureDate, returnDate};
};
}; 


