const locationId = process.env.GATSBY_LOCATION_ID;

export const initializeCard = async (payments: { card: () => any; }) => {
    const card = await payments.card();
    await card.attach('#card-container');
    return card;
}

export const createPayment = async (token: any) => {
    const body = JSON.stringify({
        locationId,
        sourceId: token,
        amountMoney: {
            amount: 1,
            currency: 'USD'
        },
    });

    const paymentResponse = await fetch('/payment', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body,
    });

    if (paymentResponse.ok) {
        return paymentResponse.json();
    }

    const errorBody = await paymentResponse.text();
    throw new Error(errorBody);
}

export const tokenize = async (paymentMethod: { tokenize: () => any; }) => {
    const tokenResult = await paymentMethod.tokenize();
    if (tokenResult.status === 'OK') {
        return tokenResult.token;
    } else {
        let errorMessage = `Tokenization failed with status: ${tokenResult.status}`;
        if (tokenResult.errors) {
            errorMessage += ` and errors: ${JSON.stringify(
                tokenResult.errors
            )}`;
        }

        throw new Error(errorMessage);
    }
}

export const displayPaymentResults = (status: string) => {
    const statusContainer = document.getElementById(
        'payment-status-container'
    );
    if (status === 'SUCCESS') {
        statusContainer?.classList.remove('is-failure');
        statusContainer?.classList.add('is-success');
    } else {
        statusContainer?.classList.remove('is-success');
        statusContainer?.classList.add('is-failure');
    }

    statusContainer?.style.visibility == 'visible';
}

export const handlePaymentMethodSubmission = async (event: { preventDefault: () => void; }, paymentMethod: { tokenize: () => any; }) => {
    event.preventDefault();
    const cardButton = <HTMLInputElement> document.getElementById('card-button');

    try {
      // disable the submit button as we await tokenization and make a payment request.
      cardButton.disabled = true;
      const token = await tokenize(paymentMethod);
      const paymentResults = await createPayment(token);
      displayPaymentResults('SUCCESS');

      console.debug('Payment Success', paymentResults);
    } catch (e) {
      cardButton.disabled = false;
      displayPaymentResults('FAILURE');
      console.error(e.message);
    }
  }