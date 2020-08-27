export const BusinessComponent = (busObj) => {
    return `
    <h3>${busObj.companyName}</h3>
    <div>${busObj.addressFullStreet}</div>
    <div>${busObj.addressCity}, ${busObj.addressStateCode} ${busObj.addressZipCode}</div>
    <hr>
    `
}