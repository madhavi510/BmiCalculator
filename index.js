
function calculateBmi(){
    let height = parseInt(document.querySelector("#Height").value);
    let weight = parseInt(document.querySelector("#Weight").value);
    let bmiVal = document.querySelector("#bmiVal");

    

     if((height === "" || isNaN(height)) && (weight === "" || isNaN(weight)) ){
        bmiVal.innerHTML = "Invalid Values";
        bmiVal.style.color = "red";
        bmiVal.style.fontWeight = "700";
    }
    else{
        let bmi = (weight / ((height * height)/ 10000)).toFixed(2);

        if(bmi < 18.6){
            bmiVal.innerHTML = `Under Weight:<span>${bmi}</span>`
            bmiVal.style.color = "#FFA500";
            bmiVal.style.fontWeight = "500";
        }
        else if(bmi >= 18.6 && bmi < 24.9){
            bmiVal.innerHTML = `Normal Weight:<span>${bmi}</span>`
            bmiVal.style.color = "green";
            bmiVal.style.fontWeight = "500";
        }
        else{
            bmiVal.innerHTML = `Over Weight:<span>${bmi}</span>`
            bmiVal.style.color = "red";
            bmiVal.style.fontWeight = "500";
        }
    }

    document.querySelector("#bmiRules").style.display = "none";

}

function getRules(){
document.querySelector("#bmiRules").innerHTML = "Below 18.5 is UnderWeight <br> 18.5 -  24.9 is Normal Weight <br> 25 - 29.9 is OverWeight";


}
