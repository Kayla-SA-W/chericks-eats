import React, { useEffect } from 'react';

export const CardContainer = (onClick: any) => {
    return ( 
        <>
            <div id="card-container"></div>
            <button
                id="card-button"
                onClick={onClick}>Complete Order</button>
            <div id="payment-status-container"></div>
        </>
    )
}