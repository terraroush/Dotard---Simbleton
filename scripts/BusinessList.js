import { UseBusinessesArr } from "./BusinessProvider.js"
import { BusinessComponent } from "./Business.js"

const contentTarget = document.querySelector(".businessList--newYork");

const newYorkArray = UseBusinessesArr();
const newArray = newYorkArray.filter(busObj => {
    if(busObj.addressStateCode === "NY") {
        return true;
    } 
})
// console.log(newArray)

export const nYBusinessListComponent = () => {
    contentTarget.innerHTML = "<h1>New York Businesses</h1>";

    newArray.forEach(busObj => 
        contentTarget.innerHTML += BusinessComponent(busObj)
    )
}



// const contentTarget = document.querySelector(".businesses");

// export const BusinessListComponent = () => {
//     const businessArr = UseBusinessesArr();
//     contentTarget.innerHTML = "<h1>Active Businesses</h1>";
    
//         }
//     );
// }
