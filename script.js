const billField = document.querySelector("#bill-field")
const tipOption = document.querySelectorAll(".tip-input")
const tipCustomField = document.querySelector("#tip-input-custom");
const peopleField = document.querySelector("#people-number")
const tipPerPersonField = document.querySelector(".tip-per-person")
const tipTotalField = document.querySelector(".tip-total")
const button = document.querySelector(".reset-button")

calculateTip()

function calculateTip()
{
    let tip, bill, people, tipValue

    billField.addEventListener("input", () => {
        bill = parseFloat(billField.value)
        showTip()
    })

    peopleField.addEventListener("input", () => {
        people = parseInt(peopleField.value)
        showTip()
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
    tipCustomField.addEventListener("input", () => {
        tip = parseInt(tipCustomField.value)
        showTip()
    })

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
    tip = 0
    bill = 0
    people = 0
    tipValue = 0
    
    tipTotalField.textContent = "0"
    tipPerPersonField.textContent = "0"
    
    billField.value = ""
    peopleField.value = ""
    tipCustomField.value = ""
    tipOption.forEach(option => {
        option.removeAttribute("checked")
    })

})
