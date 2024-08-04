let inputs = document.getElementById("scrn");
let btn = document.querySelectorAll("button");
let strng = "";

let arr=Array.from(btn);
arr.forEach(button => {
    button.addEventListener('click',(e) =>{
        if (e.target.innerHTML == '=') {
            strng = eval(strng);
            inputs.value = strng;            
        }
        else if (e.target.innerHTML == 'AC') {
                strng ="";
                inputs.value = strng;

        }
        else if (e.target.innerHTML == 'DEL') {
                strng=strng.substring(0,strng.length-1);
                inputs.value = strng;
        }
        else{
            strng += e.target.innerHTML ;
            inputs.value = strng;
        }
    })
})
