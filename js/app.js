function getPin() {

    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    } else {
        return getPin();

    }
};

function generatePin() {
    const pin = getPin();

    // console.log(pin);
    document.getElementById('display-input').value = pin;
};


// calculator er jonno re vai 

document.getElementById('key-pad').addEventListener('click', function (event) {

    const number = event.target.innerText;
    const calcInput = document.getElementById('typed-numbers');


    if (isNaN(number)) {
        if(number=='C'){
            calcInput.value='';
            console.log('ami hotash');
        }
    } 
    else {
        const previousInput = calcInput.value;
        const newCalc = previousInput + number;
        calcInput.value = newCalc;
        console.log('ami hotash');
    }
});


function verifyPin(){
    // console.log('hayre nana');
    const pin =document.getElementById('display-input').value;
    const typed =document.getElementById('typed-numbers').value;
    const successNotification =document.getElementById('notify-success');
    const failNotification =document.getElementById('notify-failure');

    if(pin==typed){
        // console.log('yehaa');
     
        successNotification.style.display='block';
        failNotification.style.display='none';

    }
    else{
        failNotification.style.display='block';
        successNotification.style.display='none';

    }

}