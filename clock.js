setInterval(setClock,1000)
const hourHand=document.querySelector("[data-hour-hand]")
const minuteHand=document.querySelector("[data-minute-hand]")
const secoundHand=document.querySelector("[data-secound-hand]")


function setClock(){
    const currentDate=new Date()
    const secoundRatio=  currentDate.getSeconds()/60
    const minuteRation= (secoundRatio+ currentDate.getMinutes())/60
    const  hourRatio= (minuteRation+currentDate.getHours())/12
    setRotation(secoundHand,secoundRatio);
    setRotation(minuteHand,minuteRation);
    setRotation(hourHand,hourRatio)
}


function setRotation(element,rotationRatio){
    element.style.setProperty('--rotation',rotationRatio*360)
}


setClock()
