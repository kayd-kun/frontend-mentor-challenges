/* ========================== GETTING REFERENCES ====================== */

const inputForm = document.querySelectorAll('.inputForm');
const inputPrice = inputForm[0];
const inputPeople = inputForm[1];

const validInfo = document.getElementById('validInfo');
const validPeople = document.getElementById('validPeople');
const validCustom = document.getElementById('validCustom');
const resetClass = document.querySelectorAll('.resetClass');

// const tipPercentage = document.querySelectorAll('.tipPercent')
const tip = document.querySelector(".tip");
const tipBtns = document.querySelectorAll('.tipPercent');
const customTip = document.querySelector('.customForm');

const outputRes = document.querySelectorAll('.price');
const tipTotalAmount = outputRes[0];
const totalAmount = outputRes[1];
const resetBtn = document.querySelector('.resetBtn');

/* ======== Variables to check and calculate ======  */
let priceTF = true;
let priceVal = 0;
let peopleTF = false;
let peopleVal = 0;
let tipBtnTF = true;
let tipValue = 0;
let customTF = true;

/*========================= Validating Input Fields ================ */

   inputPrice.addEventListener('keyup', ()=> {
    let price = inputPrice.value;
    let regexInputPrice = /^[+]?([0-9]+(?:[\.][0-9]*)?|\.[0-9]+)$/
    let isPriceValid =  regexInputPrice.test(price);

    if (isPriceValid) {
        priceTF = true;
        priceVal = price;
        alertMsg('success', 'Price Valid', validInfo);
    } else {  // Error msg
        priceTF = false;
        alertMsg('fail', 'Positive number or decimal only', validInfo);

    }

   });

    

       tip.addEventListener('click', (event) => {
           let child = event.target;
           
           // resetting the tip btn style
            tipBtns.forEach((items)=>{
                items.classList.remove('tipPercentSelected');
            });

           let value = parseInt(child.textContent);
           if (value == 5) {
               assignTipVariables(true, 5, child);
            } else if (value == 10) {
                assignTipVariables(true, 10, child);
            } else if (value == 15) {
                assignTipVariables(true, 15, child);
            } else if (value == 25) {
                assignTipVariables(true, 25, child);
            } else if (value == 50) {
                assignTipVariables(true, 50, child);
            } else {
                assignTipVariables(false, 0, null);
            }
            alertMsg('success', `${value}% Selected`, validCustom);
        });
        
        function assignTipVariables(tf, value, element) {
            tipBtnTF = tf;
            customTF = false;
            tipValue = value;
            element.classList.add('tipPercentSelected');
        }
        
        customTip.addEventListener('keyup', ()=>{
            let customTipValue = customTip.value;
            let regexCustomTip = /^[+]?([0-9]+(?:[\.][0-9]*)?|\.[0-9]+)$/
            let isCustomTipValid = regexCustomTip.test(customTipValue);
            
            if (isCustomTipValid) {
                customTF = true;
                tipBtnTF = false;
                tipValue = customTipValue;     
                alertMsg('success', 'Tip Valid', validCustom);
            } else {  // Error msg
                tipValue = 0;
                alertMsg('fail', '% in Numbers only', validCustom);
            }
        });
    
   
   inputPeople.addEventListener('keyup', ()=> { 
    let people = inputPeople.value;
    let regexInputPeople = /^[1-9]\d*$/
    let isPeopleValid = regexInputPeople.test(people);

    if (isPeopleValid) {
        peopleTF = true;
        peopleVal = people;
        alertMsg('success', 'Valid', validPeople);

    } else {  // Error msg
        peopleTF = false;
        alertMsg('fail', 'Positive # only', validPeople);
    }

   });

   resetBtn.addEventListener('click', (event)=>{
    resetValues();
   });






   
/* ===================== Functions ============================== */

// The alert function
function alertMsg (status, message, element){

    if (status=='success') {
        element.classList.add('successMsg');
        element.textContent = `${message}`;
        setTimeout(()=>{
            element.classList.remove('successMsg');
            element.textContent='';
        }, 2* 1000);
    } else if (status == 'fail') {
        element.classList.add('errorMsg');
        element.textContent = `${message}`;
    }

/* Testing  */
console.log("Price Bool: " + priceTF);
console.log("TipBtn Bool: " + tipBtnTF);
console.log("Custom Bool: " + customTF);
console.log("People Bool: " + peopleTF);
console.log();


/* To Invoke the call  to calculate*/
if (priceTF == true && tipBtnTF == true && customTF == false && peopleTF == true) {
    calculateTip(priceVal, tipValue, peopleVal);
    console.log("With tip btn invoked");
} else if (priceTF == true && tipBtnTF == false && customTF == true && peopleTF == true) {
    calculateTip(priceVal, tipValue, peopleVal);
    console.log("With custom tip invoked");
}

}

// Calculating the tip
function calculateTip(price, interest, people) {
    price = parseFloat(price);
    people = parseInt(people);
    interest = parseFloat(interest);
    let tipTotal;
    let total;

    interest /= 100;
    
    if (interest == 0) {
        tipTotal = 0;
        total = (tipTotal + price)/people;
    } else {
        tipTotal = (price * interest)/people;
        total = (price + tipTotal)/people;

        console.log('interest: ' + interest);
        console.log('tiptotal: ' + tipTotal);
        console.log(" total: " + total);
        console.log(typeof(price));
        console.log(typeof(interest));
        console.log(typeof(people));
        
    }



    tipTotalAmount.textContent = `$${tipTotal.toFixed(2)}`;
    totalAmount.textContent = `$${total.toFixed(2)}`;
}

function resetValues() {
    inputPrice.value = 0;
    customTip.value = 0;
    inputPeople.value = 0;
    tipTotalAmount.textContent = '$0';
    totalAmount.textContent = '$0'
    
    resetClass.forEach((item)=>{
        item.classList.remove('errorMsg');
        item.classList.remove('successMsg');
        item.textContent = "";
    })
}


