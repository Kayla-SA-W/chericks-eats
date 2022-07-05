export const calculateShipping = (selectedShipping: string) => {
    let shippingCost = 0
    if (selectedShipping === 'Delivery - Orlando Only') {
        shippingCost = 10
    } else if (selectedShipping === 'Priority') {
        shippingCost = 16.25
    } else if (selectedShipping === 'Priority Express') {
        shippingCost = 28.80
    } else {
        shippingCost = 0
    }
    return shippingCost;
}