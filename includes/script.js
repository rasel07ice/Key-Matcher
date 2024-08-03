
let generatedSecretKey = document.querySelector(".left-part input");
let inputValue = document.querySelector(".right-part-top input");
let pMessage = document.querySelector(".message");
const messages = {
    succes: `<i class="fa-regular fa-face-smile"></i>&nbsp;Congratulations! Key is matched`,
    fail: `<i class="fa-regular fa-face-sad-tear"></i>&nbsp;Ops! Key did not match. Please try again`,
     inputNull: `<i class="fa-regular fa-face-angry"></i>&nbsp;Please enter PIN first`,
      generatedSecretKeyNull: `<i class="fa-regular fa-face-angry"></i>&nbsp;See left! Press Generate key first`
}

const css_variables = {
    succeass: "--primary-theme-color",
    fail: "--fail-message-color"
}

let txt = "";


document.querySelector(".btnGenerate").addEventListener("click", ()=>{
   let randomNumber = getRndInteger(100000, 999999);
   console.log(randomNumber);
   generatedSecretKey.value = randomNumber;
   console.log(generatedSecretKey.value);
  })

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

  document.querySelector(".right-part-middle").addEventListener("click", (e)=>{     
    if(e.target.classList.contains('box-cross') || e.target.classList.contains('fa-solid')){
        if(txt.length <= 6 && txt.length > 0){
            txt = txt.slice(0,txt.length-1);
            inputValue.value = txt;
        
            console.log(txt);
        }
    
    }else if(e.target.classList.contains('box-clear')){
        txt = "";
        inputValue.value = txt;
    }else if(e.target.classList.contains('box-submit')){
        console.log(generatedSecretKey.value);
        console.log(txt);
        if(generatedSecretKey.value !== "" && txt !== ""){
            if(generatedSecretKey.value === txt){
                popup(messages["succes"]);
                pMessage.parentElement.style.backgroundColor = myFunction_get(pMessage.parentElement,css_variables["succeass"] )
            } else{
                popup(messages["fail"]);
                pMessage.parentElement.style.backgroundColor = myFunction_get(pMessage.parentElement,css_variables["fail"] )
            }
        }
        else{
            let msg = txt == "" ? messages["inputNull"] : messages["generatedSecretKeyNull"];
            popup(msg);
        }
        
    }else{
        if(txt.length < 6){
            let pressedNumber = e.target.textContent;
            txt +=pressedNumber;
            inputValue.value = txt;
        
            console.log(txt);
        }
    }
 

  })
//show message div
  function popup(message){
    pMessage.innerHTML = message;
    pMessage.parentElement.style.visibility = "visible";
    setTimeout(() => {
        pMessage.parentElement.style.visibility = "hidden";
    }, 3000);
}
//get root variable
function myFunction_get(element, variableName) {  
    var rs = getComputedStyle(element);
    return rs.getPropertyValue(variableName)
  }


