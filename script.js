var dateOfBirth=document.querySelector("#dob");
var luckyNumber=document.querySelector("#lucky-number");
var button=document.querySelector("#btn");
var outputBox=document.querySelector("#output-box");


function comparison(sum,luckyNumber){
    if(sum%luckyNumber===0){
        outputBox.innerText=("booomm!! your date of birth is lucky");
    }
    else{
        outputBox.innerText=("oh oh! your date of birth is not so lucky!");
    }
}

function helper(dob){
    let sum=0;

    dob=dob.replaceAll("-","");

    for(var i=0;i<dob.length;i++){
        sum+=Number(dob.charAt(i));
    }
    return sum;
}

function isItLucky(){
    var dob=dateOfBirth.value;
    var sum=helper(dob);
    comparison(sum,luckyNumber.value);
}

button.addEventListener("click",isItLucky);