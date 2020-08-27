import { UseBusinessesArr } from "./BusinessProvider.js"
import { BusinessComponent } from "./Business.js"

const contentTarget = document.querySelector(".businessList--manufacturing");

const businessArray = UseBusinessesArr();
const newArray = businessArray.filter(busObj => {
    if(busObj.companyIndustry === "Manufacturing") {
        return true;
    } 
})

export const businessListComponent = () => {
    contentTarget.innerHTML = "<h1>Manufacturing Businesses</h1>";

    newArray.forEach(busObj => 
        contentTarget.innerHTML += BusinessComponent(busObj)
    )
}