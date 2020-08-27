import { UseBusinessesArr } from "./BusinessProvider.js"
import { BusinessComponent } from "./Business.js"

const contentTarget = document.querySelector(".businessList--newYork");

const newYorkArray = UseBusinessesArr();
newYorkArray.filter(busObj => {
    if(busObj.addressStateCode === "NY") {
        return true;
    }
})

export const nYBusinessListComponent = () => {
    contentTarget.innerHTML = "<h1>New York Businesses</h1>";

    newYorkArray.forEach(busObj => 
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
