const subscribe = document.querySelector(".subscribe")
const inputDiv = document.querySelector(".inputDiv")
const inputMail = document.querySelector("[mailIp]")
const errorMsg = document.querySelector(".errorMsg")
const thanksContainer = document.querySelector(".thanksContainer")
const container = document.querySelector(".container")
const mailText = document.querySelector("[mailText]")
const dismiss = document.querySelector(".dismiss")


let mailcheck=["!","#","$","%","^","&","*","(",")","/","[","]","{","}","|",","," " , "-" , "=" , "+"]
let flag=1
let mail=""

container.classList.add("active")

function error(){
    inputDiv.style.cssText="background-color:hsl(4, 100%, 67%,0.5)"
    errorMsg.innerText="Valid email required"
    errorMsg.style.cssText="color:hsl(4, 100%, 67%)"
    // inputDiv.value.cssText="color:hsl(4, 100%, 67%)"
}


function setMail(value){
    mailText.innerText=value
    mailText.style.cssText="font-weight:bold"
}
function showOther(){
    console.log("Entered")
    container.classList.toggle("active")
    
    thanksContainer.classList.toggle("active")
}
function checkmail(){
    if(inputMail.value == null || inputMail.value.trim().length == 0 || !inputMail.value.endsWith("@gmail.com") || inputMail.value!= inputMail.value.toLowerCase()){
        flag=0
        error()
    }
    else{
        let arr = inputMail.value.split('')
        arr.forEach(element => {
            for(let i=0;i<mailcheck.length;i++){
                if(element==mailcheck[i]){
                    flag=0
                    error()
                }
            }
        })
        if(flag==1){
            mail=inputMail.value
            setMail(mail)
            showOther()
        }

    }
}



inputMail.value=""

subscribe.addEventListener("click",checkmail)
inputMail.addEventListener("input",()=>{
    inputDiv.style.cssText="background-color:white"
    errorMsg.innerText=""
    flag=1
})

dismiss.addEventListener("click",()=>{
    inputMail.value=""
    showOther()
})