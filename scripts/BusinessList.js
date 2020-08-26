import { UseBusinessesArr } from "./BusinessProvider.js"
import { BusinessComponent } from "./Business.js"

const contentTarget = document.querySelector(".businesses");

export const BusinessListComponent = () => {
    const businessArr = UseBusinessesArr();
    contentTarget.innerHTML = "<h1>Businesses</h1>";
    
    businessArr.forEach(
        (busObj) => {
            contentTarget.innerHTML += BusinessComponent(busObj)
        }
    );
}
