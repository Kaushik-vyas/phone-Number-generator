const btn = document.getElementById("btn");
const put = document.getElementById("put");
const Number = [1,2,3,4,5,6,7,8,9,0];

btn.addEventListener('click',getmake);

function getmake(){
    let code = "+91 ";

    for(i=0;i<10;i++){
        let random = Math.floor(Math.random()*Number.length);
        code += Number[random];
    }
    put.innerHTML=code;
}