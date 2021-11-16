let boton=document.getElementById("button_start");
let image=document.getElementById("img");
let frase=document.getElementById("frase");

boton.addEventListener("click", () => {
    let random = Math.round(Math.random());
    console.log(random);
    if(random===1){
        image.src="cara.png";
        frase.innerHTML="Cara";
    
    }
    if (random!==1) {    
        image.src="cruz.png";
        frase.innerHTML="Cruz";
    }

    
})