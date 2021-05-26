console.log('code matching');
// let start=document.getElementById('btn');
// start.addEventListener('click',btn);

let screen=document.getElementById('screen');
let buttons=document.querySelectorAll('button');
let screenvalue='';

//create a random number
class RANDOM{
    static random(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
      }
}

for(item of buttons){
    
    item.addEventListener('click',sub)
    function sub(e){
         
        let see=RANDOM.random(1000,9999);
      let buttontext= e.target.innerText;
       if(buttontext=='X'){
        buttontext='*'
       screenvalue += buttontext
       screen.value=screenvalue
    }
   else if(buttontext=='Start'){
        buttontext=''
         
        document.getElementById("para").innerHTML =see;
       
    }
    else if(buttontext=='C'){
       screenvalue = ''
       screen.value=screenvalue   
    }
    
    
    
    else if(buttontext=='='){
        
        
       
       
       let feel=document.getElementById("para").innerHTML
       
         screen.value =eval(screenvalue);
         
        if(screen.value==feel){
            screenvalue='Code Matched'
            screen.value=screenvalue;
        }
        else{
            screenvalue='Code did not Mtached'
            screen.value=screenvalue;
        }
    }
 
    else {
       screenvalue += buttontext
       screen.value=screenvalue
    }
    }
    
}

















































