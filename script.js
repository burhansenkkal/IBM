function compute(){
    var principal = document.getElementById("principal").value;

}
function compute(){
    var rate = document.getElementById("rate").value;

}
function compute(){
    var years = document.getElementById("years").value;
}
function compute(){
    var interest = principal * years * rate /100;
}
function compute(){
    var year = new Date().getFullYear()+parseInt(years);
}
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
