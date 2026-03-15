import React, { useContext } from 'react';
import styled from 'styled-components';
import "@fontsource/libre-caslon-display";
import "@fontsource/dancing-script";
import { MealPrepCartContext, CookbookItem } from '../context/meal-prep-cart';

// === Data ===

export const COOKBOOKS: CookbookItem[] = [
  {
    id: '7-day-meal-guide',
    title: '7-Day Meal Guide',
    price: 25,
    downloadPath: '/7-day-meal-guide.pdf',
  },
  {
    id: 'premium-cookbook',
    title: 'Premium Cookbook Edition',
    price: 45,
    downloadPath: '/premium-cookbook-edition.pdf',
  },
  {
    id: 'digital-cookbook',
    title: "Cherick's Eats Digital Cookbook",
    price: 55,
    downloadPath: '/chericks-eats-digital-cookbook.pdf',
  },
];

const DESCRIPTIONS: Record<string, string> = {
  '7-day-meal-guide': 'A week of curated recipes to kickstart your meal prep routine.',
  'premium-cookbook': 'An elevated collection of signature dishes and techniques.',
  'digital-cookbook': 'The complete digital cookbook — every recipe, tip, and secret.',
};

// === Styled Components ===

const PageWrapper = styled.div`
  width: 100%;
  padding: 30px 0;
`;

const Title = styled.div`
  display: flex;
  font-size: 48px;
  font-family: "Dancing Script";
  justify-content: center;
  margin: 0 0 10px;
`;

const Subtitle = styled.div`
  font-family: "Libre Caslon Display";
  font-size: 18px;
  text-align: center;
  color: #555;
  margin-bottom: 30px;
  padding: 0 20px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
  max-width: 960px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Card = styled.div`
  border: 2px dotted #c4e2e8;
  border-radius: 12px;
  padding: 30px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-family: "Libre Caslon Display";
`;

const BookTitle = styled.div`
  font-family: "Dancing Script";
  font-size: 26px;
  margin-bottom: 8px;
`;

const Price = styled.div`
  font-size: 22px;
  font-family: "Dancing Script";
  color: #374577;
  margin-bottom: 12px;
`;

const Description = styled.div`
  font-size: 15px;
  line-height: 1.6;
  color: #444;
  margin-bottom: 20px;
  flex: 1;
`;

const ActionButton = styled.button`
  background-color: rgba(55, 69, 119, 0.23);
  border-radius: 25px;
  padding: 10px 28px;
  font-size: 20px;
  border: none;
  font-family: "Dancing Script";
  cursor: pointer;
  color: black;
  transition: background-color 0.3s ease;
  width: 100%;

  &:hover {
    background-color: #c4e2e8;
  }
`;

const InCartLabel = styled.div`
  font-family: "Libre Caslon Display";
  font-size: 14px;
  color: #374577;
  margin-bottom: 10px;
`;

// === Component ===

const CookbookCard = ({ cookbook }: { cookbook: CookbookItem }) => {
  const { cookbooks, addCookbook } = useContext(MealPrepCartContext);
  const inCart = cookbooks.some((c) => c.id === cookbook.id);

  return (
    <Card>
      <BookTitle>{cookbook.title}</BookTitle>
      <Price>${cookbook.price}</Price>
      <Description>{DESCRIPTIONS[cookbook.id]}</Description>
      {inCart ? (
        <>
          <InCartLabel>Added to cart</InCartLabel>
          <ActionButton onClick={() => { window.location.href = '/cart'; }}>
            View Cart
          </ActionButton>
        </>
      ) : (
        <ActionButton onClick={() => addCookbook(cookbook)}>
          Add to Cart — ${cookbook.price}
        </ActionButton>
      )}
    </Card>
  );
};

export const CookbooksContent = () => {
  return (
    <PageWrapper>
      <Title>Cookbooks</Title>
      <Subtitle>
        Get your favorite recipes from Cherick's Eats — purchase a cookbook and download it instantly after checkout.
      </Subtitle>
      <Grid>
        {COOKBOOKS.map((book) => (
          <CookbookCard key={book.id} cookbook={book} />
        ))}
      </Grid>
    </PageWrapper>
  );
};
