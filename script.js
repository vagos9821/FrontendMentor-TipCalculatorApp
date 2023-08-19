// Tip Buttons =-=-=-==-=-=-=-=-=-==-=-=-=-=-=-

function tip_button(x) {
    var bill_amount = document.getElementById("amount").value
    var people_value = document.getElementById("peopleInput").value
    var tip_person = document.getElementById("resultTipAmount")
    var total_person = document.getElementById("resultTotalAmount")
    var tip_per_person = Math.round((((bill_amount * (x / 100)) / people_value)) * 100) / 100
    var total_per_person = Math.round((tip_per_person + (bill_amount / people_value)) * 100) / 100

    if (people_value * 1 <= 0) {
        document.getElementById("peopleInput").style.border = "2px solid #EF3E36"
        document.getElementById("error").style.opacity = 1
    } else {
        tip_person.innerHTML = "$" + tip_per_person.toFixed(2).toString()
        total_person.innerHTML = "$" + total_per_person.toFixed(2).toString()
        document.getElementById("peopleInput").style.outline = "2px solid #26C2AD;"
        document.getElementById("peopleInput").style.border = "none"
        document.getElementById("error").style.opacity = 0
    }

}

// Custom Tip =-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-

function custom_tip(ele) {
    var custom_tip = document.getElementById("custom")
    var bill_amount = document.getElementById("amount").value
    var people_value = document.getElementById("peopleInput").value
    var tip_person = document.getElementById("resultTipAmount")
    var total_person = document.getElementById("resultTotalAmount")

    var tip_per_person = Math.round((((bill_amount * (ele.value / 100)) / people_value)) * 100) / 100
    var total_per_person = Math.round((tip_per_person + (bill_amount / people_value)) * 100) / 100

    if (event.key === 'Enter' || custom_tip.focus) {
        if (people_value * 1 <= 0) {
            document.getElementById("peopleInput").style.border = "2px solid #EF3E36"
            document.getElementById("error").style.opacity = 1
        } else {
            tip_person.innerHTML = "$" + tip_per_person.toFixed(2).toString()
            total_person.innerHTML = "$" + total_per_person.toFixed(2).toString()
            document.getElementById("peopleInput").style.outline = "2px solid #26C2AD"
            document.getElementById("peopleInput").style.border = "none"
            document.getElementById("error").style.opacity = 0
        }
    }
}


// Reset Button --=--=--=-=-=-==-=-=-
function reset() {
    var tip_person = document.getElementById("resultTipAmount")
    var total_person = document.getElementById("resultTotalAmount")
    tip_person.innerHTML = "$" + "0.00"
    total_person.innerHTML = "$" + "0.00"
}


// =-=-=-=-=-=-=-=-=-Mobile version =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

if (window.innerWidth < 701) {
    var card = document.getElementById("card")
    var splitter = document.getElementById("splitter")
    var billCard = document.getElementById("billCard")
    var resultCard = document.getElementById("resultCard")
    var body = document.getElementById("body")

    card.style = "flex-direction: column; width:375px; height:fit-content; align-items:center;gap:2em; padding-right:0; padding-left:0; right:0"

    splitter.style = "margin:2em"

    body.style = "margin:0"

    billCard.style = "flex-direction: column; width:300px; height:fit-content; align-items:center"

    resultCard.style = "display:flex; gap:5em; width:300px; position:relative; margin-left:0"

    console.log("mobile")
}