/*
Store the data in hash table
    key is card_holder
    value object with LIMIT and BALANCE and ERROR_FLAG

Add
    Validate card number, no need to store it
    BONUS use Luhn
    
    Validating the card
        check if length is 12 to 16
        check if every character is a number
    If the validation fails, add an ERROR entry
    otherwise Add the cardholder into hash table with limit and balance of 0
    
Charge
    If there is no valid card, return
    
    Check if current amount + existing balance is under or equal LIMIT
        if it is, update the balance with the new amount
        
Credit
    Very similar to Charge, but 0 instead of LIMIT

Bonus for using: https://en.wikipedia.org/wiki/Luhn_algorithm

*/

const ADD = "Add"
const CHARGE = "Charge"
const CREDIT = "Credit"

function solution(operations) {
    const cardHolders = {}
    
    operations.forEach(operation => {
        const [command, card_holder, numberToProcess, limit] = operation
        
        switch(command) {
            case ADD:
                add(cardHolders, card_holder, numberToProcess, limit)
                break
            case CHARGE:
                charge(cardHolders, card_holder, numberToProcess)
                break
            case CREDIT:
                credit(cardHolders, card_holder, numberToProcess)
                break
            default:
                // Do nothing
                break
        }
        
    })
    
    // console.log(JSON.stringify(cardHolders))
    
    return formatOutput(cardHolders)
}

function converNumberIntoValue (number) {
    return Number(number.slice(1))
}

function add(cardHolders, newCardHolderName, creditCardNumber, limit) {
    if (validateCardNumber(creditCardNumber)) {
            cardHolders[newCardHolderName] = {
            error: false,
            limit: converNumberIntoValue(limit),
            balance: 0,
        }
    } else {
        cardHolders[newCardHolderName] = {
            error: true,
            limit: 0,
            balance: 0,
        }
    }
}

function validateCardNumber(creditCardNumber) {
    if (creditCardNumber.length < 12 || creditCardNumber.length > 16) return false   
    
    // Check if all characters are numbers
    return creditCardNumber.match(/^\d+$/)
}


function charge(cardHolders, cardHolderName, charge) {
    const amount = converNumberIntoValue(charge)
    // console.log("existing user ", !cardHolders[cardHolderName])
    // console.log("limit check ", cardHolders[cardHolderName].balance + amount > cardHolders[cardHolderName].limit)
    if (
        !cardHolders[cardHolderName] ||
        cardHolders[cardHolderName].balance + amount > cardHolders[cardHolderName].limit
    ) return
    
    cardHolders[cardHolderName].balance += amount
}

function credit(cardHolders, cardHolderName, credit) {
    const amount = converNumberIntoValue(credit)
    
    if (!cardHolders[cardHolderName]) return
    
    cardHolders[cardHolderName].balance -= amount
}

function formatOutput(cardHolders) {
    console.log("Tom > Lisa", "Tom" > "Lisa")
    console.log("Tom > Lis", "Tom" > "Lis")
    console.log("a > b", "a" > "b")
    // THIIIIIS was the problem! I was doing "a - b", which works for NUMBERS
    // String comparison is TRUE or FALSE. So I had to write the actual formula!
    // Or use a.localeCompare(b) !
    console.log(Object.keys(cardHolders).sort((a, b) => {
        // console.log(`Comparing ${a} with ${b} = ${a.localeCompare(b)}`)
        // return a.localeCompare(b)

        return a > b ? 1 : (a === b ? 0 : -1)
    }))
    // return Object.keys(cardHolders).sort((a, b) => a - b).map(cardHolder => {
    return Object.keys(cardHolders).sort((a, b) => a > b ? 1 : (a === b ? 0 : -1)).map(cardHolder => {
        const result = cardHolders[cardHolder].error ? "error" : `$${cardHolders[cardHolder].balance}`
        return [cardHolder, result]
    })
}

const input = [
    [ADD, "Tom", "1352462462156", "$1000"],
    [ADD, "Lisa", "1352462461526", "$3000"],
    [ADD, "Quincy", "134", "$5000"],
    [CHARGE, "Tom", "$500"],
    [CHARGE, "Tom", "$800"],
    [CHARGE, "Lisa", "$7"],
    [CHARGE, "Quincy", "$100"],
    [CREDIT, "Lisa", "$100"],

]
console.log(solution(input))