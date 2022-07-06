import emailjs from 'emailjs-com';

export interface customerInformation {
    firstName: string;
    surname: string;
    emailAddress: string;
    address: string;
}

export const sendConfirmationEmail = ({
    customerInformation,
    cartWithQuantities,
}: {
    customerInformation: customerInformation;
    cartWithQuantities: JSX.Element[];
}) => {
    const name = `${customerInformation.firstName} ${customerInformation.surname}`;
    const email = customerInformation.emailAddress;
    // customer email
    emailjs.send("service_vzhglwp", "template_ycy5pid", {
        to_name: name,
        message: cartWithQuantities,
        to_email: email
    }, 'user_nY97bkcJucuzmbFNnsTFY');
};

export const sendNewOrderEmail = ({
    customerInformation,
    cartWithQuantities,
    total,
    selectedShipping,
}: {
    customerInformation: customerInformation;
    cartWithQuantities: JSX.Element[];
    total: string;
    selectedShipping: string;
}) => {
    const name = `${customerInformation.firstName} ${customerInformation.surname}`;
    const address = customerInformation.address;
    const email = customerInformation.emailAddress;
    // consumer email
    emailjs.send("service_vzhglwp", "template_5x0wcwe", {
        to_name: name,
        order: cartWithQuantities,
        shipping: selectedShipping || 'pick up',
        address,
        to_email: email,
        total: `$ ${total}`
    }, 'user_nY97bkcJucuzmbFNnsTFY');
}