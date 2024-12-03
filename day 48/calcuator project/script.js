const btns=document.querySelectorAll(".btn")
const screen =document.getElementById("output-screen")
btns.forEach(btn=> {
    if (e.target.innerHTML===="="){
        screen.value='';
    }
    else if(e.target.innerHTML==="CL"){
        screen.value='';
    }
    else if(addEventListener.target.innerHTML==="DL"){
screen.value=screen.value.slice(0,-1)
    }
    else{
        screen.value+= e.target.innerHTML;
    }
})
