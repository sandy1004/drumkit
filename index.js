var x=document.querySelectorAll('.drum').length;
for(var i=0;i<x;i++){
    document.querySelectorAll('.drum')[i].addEventListener('click',mouseClick);
}

document.addEventListener("keypress",function(event){
    keyClick(event.key);
});

function mouseClick(){
    var buttonInnerHTML = this.innerHTML;
 
   switch(buttonInnerHTML){

 case 's': var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;

 case 'a': var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;


 case 'n': var audio = new Audio("sounds/tom-3.mp3");
                audio.play();
                break;

                    
 case 'd': var audio = new Audio("sounds/tom-4.mp3");
                    audio.play();
                    break;

                        
 case 'e': var audio = new Audio("sounds/crash.mp3");
                        audio.play();
                        break;
                            
                            
 case 'e': var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;


 case 'p': var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
    

 default: alert("Wrong Button");
            break;
    
}
}


function keyClick(key){
    switch(key){

        case 's': var audio = new Audio("sounds/tom-1.mp3");
        audio.play();
        break;

case 'a': var audio = new Audio("sounds/tom-2.mp3");
        audio.play();
        break;


case 'n': var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;

                
case 'd': var audio = new Audio("sounds/tom-4.mp3");
                audio.play();
                break;

                    
case 'e': var audio = new Audio("sounds/crash.mp3");
                    audio.play();
                    break;
                        
                        
case 'e': var audio = new Audio("sounds/kick-bass.mp3");
        audio.play();
        break;


case 'p': var audio = new Audio("sounds/snare.mp3");
        audio.play();
        break;


default: alert("Wrong Button");
        break;

}
}
