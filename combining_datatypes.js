//********************************** */
// SECTION 2: COMBINING DATATYPES
//********************************** */

//*************************************** */
// COMBINE OBJECTS, ARRAYS, AND FUNCTIONS
//*************************************** */

//Create an object, called crayonBox, that has a property that is an array. The array should have the names of some crayons. Log one of the elements of that array.

const crayonBox = {
    colors: ["blue", "purple", "pink", "green"]
}

console.log(crayonBox.colors[2])

//Create an object bottle that has a property that is an object: cap. cap can have properties like material: 'metal' or 'plastic', color: blue or white etc. Log one of the properties of that inner object.

const bottle = {
    cap: {
        material: "metal",
        color: "black",
        logo: "Burial"
    }
}

console.log(bottle.cap.logo)

//Create an array called receipt that has at least one object in it. The inner objects should be items that have a name and a price. Log one of the properties of that inner object.

const receipt = [{name: "tofu", price: 8}, {name: "egg nog", price: 5}, {name: "yogurt", price: 7}, {name: "beer", price: 30}]

console.log(receipt[3].name)

//Create an array called apartmentBuilding that has an array as one of its elements, the inner array should be the names of the tenants. Log one of the elements of the inner array.

const apartmentBuilding = [
    "Dennis",
    ["Mackenzie", "Caleb", "Loki"],
    "Maryanne",
    ["Rob", "Tish", "Izzy", "Penny"]
]

console.log(apartmentBuilding[1][2])

//***************************************************************** */
// COMBINE OBJECTS, ARRAYS, AND FUNCTIONS MORE THAN ONE LEVEL DEEP
//***************************************************************** */

// Create a function knit that returns an object that has the following kinds of properties item: scarf, size : 6ft etc. Log a value of that object (hint: call the function and then call a property on the return value).
const knit = (type, length, shade, amount) => {
    return {
        item: type,
        size: length,
        color: shade,
        cost: amount
    }
}

console.log(knit("scarf", "5ft", "blue", 15).item)

// Create a function crayonSelector that returns an object that has an array (you can reuse your crayonBox object). Log one of the elements of that array.
const crayonSelector = () => {
    return {
        colors: ["blue", "purple", "pink", "green"]
    }
}

console.log(crayonSelector().colors[3])

// Create a function powerButton that returns a function called options - options should console.log a simple message like select a song. Call that inner function

const powerButton = () => {
    return function options() {
        console.log("OOf I'm tired.")
    }
}

powerButton()()