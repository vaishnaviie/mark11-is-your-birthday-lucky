var dateOfBirth=document.querySelector("#dob");
var luckyNumber=document.querySelector("#lucky-number");
var button=document.querySelector("#btn");
var outputBox=document.querySelector("#output-box");


function comparison(sum,luckyNumber){
    if(luckyNumber===""){
        outputBox.innerText = "Please Enter lucky number";
    }
    else if(luckyNumber<0){
        outputBox.innerText = "Please Enter positive value";
    }
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
    if(dob && sum){
        comparison(sum,luckyNumber.value);
    }
    else{
        outputBox.innerText = "Please Enter both the fields";
    }
}

button.addEventListener("click",isItLucky);