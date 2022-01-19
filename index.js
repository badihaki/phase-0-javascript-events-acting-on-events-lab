// Your code here
// get the dodger
const dodger=document.getElementById("dodger");
function moveDodgerLeft(){
    // gets the current value of style.left, and parses that by 10
    const leftNumbers=dodger.style.left.replace("px","");
    const left=parseInt(leftNumbers,10);

    // ensure dodger's edge doesn't meet edge of the game window
    if(left>0){
        dodger.style.left=`${left-1}px`;
    }
}
function moveDodgerRight(){
    const rightNumbers=dodger.style.left.replace("px","");
    const right=parseInt(rightNumbers,10);

    if(right<360){
        dodger.style.left=`${right+1}px`;
    }
}

document.addEventListener('keydown',function(e){
    // console.log(e);
    
    if(e.key==="ArrowLeft"){
        moveDodgerLeft();
    }
    else if (e.key==="ArrowRight"){
        moveDodgerRight();
    }
});
