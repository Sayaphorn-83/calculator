document.getElementById("calculator").addEventListener("click",function(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var sum = parseInt(num1)+parseInt(num2);
    document.getElementById("result").innerHTML = "SUM(+) : "+sum;
});
document.getElementById("calculator2").addEventListener("click",function(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var sum = parseInt(num1)-parseInt(num2);
    document.getElementById("result2").innerHTML = "SUM(-) : "+sum;
});
document.getElementById("calculator3").addEventListener("click",function(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var sum = parseInt(num1)*parseInt(num2);
    document.getElementById("result3").innerHTML = "SUM(*) : "+sum.toFixed(2);
});
document.getElementById("calculator4").addEventListener("click",function(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var sum = parseInt(num1)/parseInt(num2);
    document.getElementById("result4").innerHTML = "SUM(/) : "+sum.toFixed(2);
});
function myalert(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var sum = parseInt(num1)+parseInt(num2);
    var sum2 = parseInt(num1)-parseInt(num2);
    var sum3= parseInt(num1)*parseInt(num2);
    var sum4 = parseInt(num1)/parseInt(num2);
    alert(sum);
    alert(sum2);
    alert(sum3);
    alert(sum4);

}
function myalert1(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var sum = parseInt(num1)+parseInt(num2);
    alert(sum);

}
function myalert2(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var sum = parseInt(num1)-parseInt(num2);
    alert(sum);

}
function myalert3(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var sum = parseInt(num1)*parseInt(num2);
    alert(sum);

}
function myalert4(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var sum = parseInt(num1)/parseInt(num2);
    alert(sum);

}
function myalertbb(){
    var num1 = document.getElementById("weight").value;
    var num2 = document.getElementById("height").value;
    var sum = parseInt(num1)/ ((parseInt(num2)/100)**2);
    alert(sum.toFixed(2));

}
const img = document.createElement("img");
img.src = "img/pic.png"
img.style.width="250px"
document.getElementById("myDiv").appendChild(img);