// FRAGMENT VERSION ---------------------/

const fragment = document.createDocumentFragment()

const component = (text) => { 
const message = document.createElement("section")
message.className = "message"
message.textContent = text
fragment.appendChild(message)
document.querySelector("#messages").appendChild(fragment)
}

component(`Are we doing fireworks this year, brah?`)
component(`After last year's "tree incident", should we?`)
component(`The fire fighters put it out in like a minute. Wasn't even a real fire.`)
component(`We can set them off in the street.`)
component(`Our neighbors' houses are flammable, too`)


// ORIGINAL VERSION ----------------------/

// const component = document.querySelector("#messages")

// const sectionComponent = (text) => { 
//     const sectionItem = document.createElement("section")
//     sectionItem.className = "message"
//     sectionItem.textContent = text
//     component.append(sectionItem)
// }

// sectionComponent(`Are we doing fireworks this year?`)
// sectionComponent(`After last year's "tree incident", should we?`)
// sectionComponent(`The fire fighters put it out in like a minute. Wasn't even a real fire.`)
// sectionComponent(`We can set them off in the street.`)
// sectionComponent(`Our neighbors' houses are flammable, too`)