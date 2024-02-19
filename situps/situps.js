var countp1 = 0;
var countp2 = 0
var time_counter=60

function countdown() {
    const timer = setInterval(function() {
        time_counter--;        
        if(time_counter>0) {
            if (time_counter > 9){
          document.getElementById('counter').innerHTML = "00:"+time_counter;
            }
            else{
                document.getElementById('counter').innerHTML = "00:0"+time_counter;
            }
        }
        else {
            clearInterval(timer);            
            document.getElementById('counter').innerHTML = "00:00";
          }
      }, 1000);
      document.getElementById("start").disabled=true
      document.getElementById("start").style.backgroundColor = "#36342f"
}

function start(){
    countdown()   
    if (time_counter > 0) {
        document.addEventListener("keyup", event => { 
            if ((event.key === "a" || event.key === "A") && time_counter > 0) { 
                upOne();
            }
        });
        
        document.addEventListener("keyup", event => { 
            if ((event.key === "l" || event.key === "L") && time_counter > 0) { 
                upOneP2();
            }
        });        
    }
    
}


function reset() {
    countp1 = 0;
    if(time_counter===0){
        document.getElementById("start").style.backgroundColor = "#4CAF50"
    }
    time_counter=60
    document.getElementById("counter1").textContent = countp1
    countdown()
    
}

function reset2() {
    countp2=0
    document.getElementById("counter2").textContent = countp2;
}

function upOne() {
    countp1++;
    document.getElementById("counter1").textContent = countp1;
}

function upOneP2() {
    countp2++
    document.getElementById("counter2").textContent = countp2;
}