import React, { useContext } from 'react';
import styled from 'styled-components';
import "@fontsource/libre-caslon-display";
import "@fontsource/dancing-script";
import { MealPrepCartContext, MealPrepOrder } from '../context/meal-prep-cart';

const CartWrapper = styled.div`
  max-width: 700px;
  margin: 30px auto;
  padding: 0 20px;
  font-family: "Libre Caslon Display";
`;

const Title = styled.div`
  display: flex;
  font-size: 48px;
  font-family: "Dancing Script";
  justify-content: center;
  margin: 0 0 15px;
`;

const EmptyMessage = styled.div`
  text-align: center;
  font-size: 18px;
  margin: 40px 0;
  color: #666;
`;

const OrderCard = styled.div`
  border: 2px dotted #c4e2e8;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 16px;
`;

const OrderHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const OrderTitle = styled.div`
  font-family: "Dancing Script";
  font-size: 22px;
`;

const RemoveButton = styled.button`
  background: none;
  border: none;
  color: #c44;
  font-family: "Libre Caslon Display";
  font-size: 14px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const OrderDetail = styled.div`
  font-size: 15px;
  line-height: 1.8;
  color: #333;
`;

const OrderTotal = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-top: 10px;
  text-align: right;
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid #c4e2e8;
  margin: 20px 0;
`;

const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 20px;
  margin-bottom: 8px;
`;

const GrandTotal = styled(SummaryRow)`
  font-size: 24px;
  font-family: "Dancing Script";
  margin-top: 10px;
`;

const ActionRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-top: 30px;
  flex-wrap: wrap;
`;

const ActionButton = styled.button`
  background-color: rgba(55, 69, 119, 0.23);
  border-radius: 25px;
  padding: 12px 30px;
  font-size: 20px;
  border: none;
  font-family: 'Dancing Script';
  cursor: pointer;
  color: black;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #c4e2e8;
  }
`;

const OrderItem = ({ order, onRemove }: { order: MealPrepOrder; onRemove: () => void }) => {
  const s = order.selections;
  return (
    <OrderCard>
      <OrderHeader>
        <OrderTitle>
          {s.plateType === 'protein' ? 'Protein Plate' : 'Pasta Plate'} — {s.days} days
        </OrderTitle>
        <RemoveButton onClick={onRemove}>Remove</RemoveButton>
      </OrderHeader>
      <OrderDetail>
        {s.plateType === 'protein' ? (
          <div>Protein: {s.protein}</div>
        ) : (
          <>
            <div>Pasta: {s.pasta}</div>
            {s.pastaProtein && s.pastaProtein !== 'none' && <div>Add-on: {s.pastaProtein}</div>}
          </>
        )}
        <div>Base: {s.base}</div>
        <div>Veggie: {s.veggie}</div>
        <div>Sauce: {s.sauce}</div>
      </OrderDetail>
      <OrderTotal>${order.total}</OrderTotal>
    </OrderCard>
  );
};

export const MealPrepCartContent = () => {
  const { orders, removeOrder, clearCart } = useContext(MealPrepCartContext);

  const grandTotal = orders.reduce((sum, o) => sum + o.total, 0);

  if (orders.length === 0) {
    return (
      <CartWrapper>
        <Title>Your Cart</Title>
        <EmptyMessage>
          Your cart is empty. Head to Meal Prep to build your order!
        </EmptyMessage>
        <ActionRow>
          <ActionButton onClick={() => { window.location.href = '/order'; }}>
            Go to Meal Prep
          </ActionButton>
        </ActionRow>
      </CartWrapper>
    );
  }

  return (
    <CartWrapper>
      <Title>Your Cart</Title>
      {orders.map((order) => (
        <OrderItem key={order.id} order={order} onRemove={() => removeOrder(order.id)} />
      ))}
      <Divider />
      <GrandTotal>
        <span>Total</span>
        <span>${grandTotal}</span>
      </GrandTotal>
      <ActionRow>
        <ActionButton onClick={() => { window.location.href = '/order'; }}>
          Add More
        </ActionButton>
        <ActionButton onClick={clearCart}>
          Clear Cart
        </ActionButton>
        <ActionButton onClick={() => { window.location.href = '/checkout'; }}>
          Checkout
        </ActionButton>
      </ActionRow>
    </CartWrapper>
  );
};
