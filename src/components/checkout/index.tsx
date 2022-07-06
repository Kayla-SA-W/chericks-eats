import styled from 'styled-components';

export const CheckoutForm = styled.form`
display: flex;
flex-direction: column;
width: 300px;
@media screen and (max-width: 540px){
    margin-bottom: 50px;
}
`

export const CheckoutContainer = styled.div`
margin-top: 50px;
display: flex;
flex-direction: row;
place-content: center;
margin-bottom: 100px;
@media screen and (max-width: 540px){
    flex-direction: column;
    place-items: center;
}
`