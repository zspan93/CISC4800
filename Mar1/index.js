const bar = document.getElementById("bar");


document.addEventListener("keydown", function(event){
    if(event.keyCode === 37){
        moveLeft()
    }else if(event.keyCode === 39){
        moveRight();
    }
})



function moveLeft(){
   const bar = document.getElementById("bar");
   let left = positionToInteger(bar.style.left);   
   console.log(parseInt(left));
   
   if(left>=10){ 
          bar.style.left= `${left-=10}px`;
   }

}

function moveRight(){
    const bar = document.getElementById("bar");
    const background = document.getElementById("background");
    const backgroundWidth = positionToInteger(background.style.width);

    let left = positionToInteger(bar.style.left);   
    console.log(parseInt(left));
    console.log(background.style.width);
    
    if(left<450){ 
           bar.style.left= `${left+=10}px`;
    }
    
}

function positionToInteger(p) {
    return parseInt(p.split('px')[0]) || 0
  }