/* ========================== GETTING REFERENCES ====================== */

const inputForm = document.querySelectorAll('.inputForm');
const inputPrice = inputForm[0];
const inputPeople = inputForm[1];

const validInfo = document.getElementById('validInfo');
const validPeople = document.getElementById('validPeople');
const validCustom = document.getElementById('validCustom');

// const tipPercentage = document.querySelectorAll('.tipPercent')
const tip = document.querySelector(".tip");
const customTip = document.querySelector('.customForm');

const outputRes = document.querySelectorAll('.price');
const tipTotalAmount = outputRes[0];
const totalAmount = outputRes[1];
const resetBtn = document.querySelector('.resetBtn');


/*========================= Validating Input Fields ================ */

   inputPrice.addEventListener('keyup', ()=> {
    let price = inputPrice.value;
    let regexInputPrice = /^[+]?([0-9]+(?:[\.][0-9]*)?|\.[0-9]+)$/
    let isPriceValid =  regexInputPrice.test(price);

    if (isPriceValid) {
        alertMsg('success', 'Price Valid', validInfo);

    } else {  // Error msg
        alertMsg('fail', 'Positive number or decimal only', validInfo);
    }
        

   });

   tip.addEventListener('click', (event) => {
    let child = event.target;
    let value = parseInt(child.textContent);
    // console.log(parseInt(value ));

    if (value == 5) {
        
    } else if (value == 10) {
        
    } else if (value == 15) {
       
    } else if (value == 25) {
       
    } else if (value == 50) {
        
    }

    });

    customTip.addEventListener('keyup', ()=>{
        let customTipValue = customTip.value;
        let regexCustomTip = /^[+]?([0-9]+(?:[\.][0-9]*)?|\.[0-9]+)$/
        let isCustomTipValid = regexCustomTip.test(customTipValue);
    
        if (isCustomTipValid) {
            alertMsg('success', 'Tip Valid', validCustom);
    
        } else {  // Error msg
            alertMsg('fail', '% in Numbers only', validCustom);
    
        }
 
    });

   inputPeople.addEventListener('keyup', ()=> { 
    let people = inputPeople.value;
    let regexInputPeople = /^[1-9]\d*$/
    let isPeopleValid = regexInputPeople.test(people);

    if (isPeopleValid) {
        alertMsg('success', 'Valid', validPeople);

    } else {  // Error msg
        alertMsg('fail', 'Positive # only', validPeople);

    }

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

}

// Calculating the tip
function calculateTip(price, interest, people) {
    let tipTotal;
    let total;

    tipTotal = price * (interest/100);
    total = (tipTotal + price)/people;

    displayResult(tipTotal, total);
}

// Displaying the result
function displayResult(tipTotal, total) {
    tipTotalAmount.textContent = `$${tipTotal}`;
    totalAmount.textContent = `$${total}`;

}
