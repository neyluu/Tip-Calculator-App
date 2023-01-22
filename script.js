const billField = document.querySelector("#bill-field")
const tipOption = document.querySelectorAll(".tip-input")
const tipCustomField = document.querySelector("#tip-input-custom");
const peopleField = document.querySelector("#people-number")
const tipPerPersonField = document.querySelector(".tip-per-person")
const tipTotalField = document.querySelector(".tip-total")
const button = document.querySelector(".reset-button")

const warningBillField = document.querySelector(".bill-input-warning")
const warningPeopleField = document.querySelector(".people-input-warning")

let tip, bill, people, tipValue

let form = document.querySelector(".tips-grid")
form.addEventListener("submit", e => {
    e.preventDefault() 
})

calculateTip()

function calculateTip()
{
    billField.addEventListener("input", () => {
        if(validateInput(billField.value))
        {
            warningBillField.textContent = ""
            billField.classList.remove("input-warning")
            bill = parseFloat(billField.value)
            showTip()
        }
        else
        {
            warningBillField.textContent = "Can`t be less than 0"
            billField.classList.add("input-warning")
            clearSummary()
        }
    })

    peopleField.addEventListener("input", () => {
        if(validateInput(peopleField.value - 1))
        {
            warningPeopleField.textContent = ""
            peopleField.classList.remove("input-warning")
            people = parseInt(peopleField.value)
            showTip()
        }
        else
        {
            warningPeopleField.textContent = "Can`t be less than 1"
            peopleField.classList.add("input-warning")
            clearSummary()
        }
    })

    tipOption.forEach(option => {
        addEventListener("click", () => {
            if(option.checked)
            {
                tip = parseInt(option.value)
                showTip()
            }
        })
    })
    tipCustomField.addEventListener("input", e => {
        // tip = parseInt(tipCustomField.value)
        // showTip()
        if(parseInt(tipCustomField.value) < 1)
        {
            tipCustomField.classList.add("input-warning")
            clearSummary()
        }
        else
        {
            tipCustomField.classList.remove("input-warning")
            tip = parseInt(tipCustomField.value)
            showTip()
        }
    })

    function validateInput(value)
    {
        if(value < 0) return false
        return true
    }

    function clearSummary()
    {
        tipPerPersonField.textContent = "0"
        tipTotalField.textContent = "0"
    }

    function showTip()
    {
        tipValue = bill * (tip / 100)

        if((bill != undefined && !isNaN(bill)) && (tip != undefined && !isNaN(tip)) && (people != undefined && !isNaN(people)))
        {
            tipTotalField.textContent = Math.round(tipValue * 100) / 100
            tipPerPersonField.textContent = Math.round((tipValue / people) * 100) / 100
        }
    }
}

button.addEventListener("click", () => {
    console.log("Reset")
    tip = undefined
    bill = undefined
    people = undefined
    tipValue = undefined
    
    tipPerPersonField.textContent = "0"
    tipTotalField.textContent = "0"
    
    billField.value = ""
    peopleField.value = ""
    tipCustomField.value = ""
   
    let inputs = document.querySelectorAll(".tip-input")
    inputs.forEach(input => {
        input.checked = false;
    })

    warningBillField.textContent = ""
    warningPeopleField.textContent = ""
    billField.classList.remove("input-warning")
    peopleField.classList.remove("input-warning")

    calculateTip()
})