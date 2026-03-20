import React, { Dispatch, SetStateAction, useContext, useState } from 'react';
import { Cart, CartContext } from '../context';
import styled from 'styled-components';
import { meatLessItems, pastaItems, desserts, proteinItems, sideItems } from '../data/menu-items';
import { CounterButton, OrderNowButton, StyledPillButton } from './pill-button';
import { initialCartState } from '../context/initial-cart';
import "@fontsource/libre-caslon-display";

const MenuWrapper = styled.div`
  width: 100%;
  padding: 30px 0;
`;

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 25px 0px 25px;
  justify-content: center;
  padding: 0 5%;
`;

const MenuOptions = styled.div`
  display: grid;
  grid-template-columns: 49% 21%;
  margin-bottom: 15px;

  @media screen and (max-width: 1024px) {
    padding: 0;
    width: 100%;
    margin-bottom: 20px;
  }
`;

export const Title = styled.div`
  display: flex;
  font-size: 48px;
  justify-content: center;
  margin: 0px 0px 15px;

  @media screen and (max-width: 1024px) {
    margin-bottom: 25px;
  }
`;

export const Warning = styled.div`
  font-family: "Libre Caslon Display";
  display: flex;
  font-size: 20px;
  justify-content: center;
  margin: 15px 0px;

  @media screen and (max-width: 1024px) {
    text-align: center;
    padding: 0 10px;
    margin-bottom: 25px;
  }
`;

const ButtonWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 350px;
  place-items: center;
  margin: 20px auto 50px;
`;

export const MenuSelection = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-grow: 1;
  flex-direction: column;
  padding: 20px 50px;
  border: 4px dotted #c4e2e8;
  font-family: "Libre Caslon Display";
  width: 100%;
  box-sizing: border-box;

  @media screen and (max-width: 1024px) {
    padding: 20px 25px;
  }
`;

const Flavors = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 50px;
  font-family: "Libre Caslon Display";

  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;

const MenuTab = styled.div<{ active: boolean }>`
  cursor: pointer;
  text-decoration: ${props => (props.active ? 'underline' : 'none')};
  background-color: ${props => (props.active ? '#c4e2e8' : 'transparent')};
  border: 4px dotted #c4e2e8;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  padding: 10px 15px;
  height: fit-content;
  width: auto;
  font-size: 18px;
  border-radius: 5px;
  border-right: none;
  border-bottom: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #c4e2e8;
  }
`;

export const SectionHeader = styled.div`
  font-size: 26px;
  font-weight: bold;
  display: flex;
  align-self: center;
  margin: 20px 0 10px;
  padding-bottom: 6px;
  border-bottom: 3px dotted #c4e2e8;
`;

const ItemName = styled.div`
  display: flex;
`;

const MarkingStar = styled.span`
  color: blue;
`;

const WarningContainer = styled.div`
  margin: 0 25px;
  text-align: center;
`;

const FlavorColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const FlavorTitle = styled(Warning)`
  text-decoration: underline blue;
`;

export interface MenuItemSection {
  sectionName: string;
  options: {
    name: string;
  }[];
  singleItem?: boolean;
  cart: Cart;
  setOptionsCounter: Dispatch<SetStateAction<Cart>>;
}

const MenuItemSection = ({ sectionName, options, singleItem, cart, setOptionsCounter }: MenuItemSection) => {
  return (
    <MenuSelection>
      <SectionHeader>{sectionName}</SectionHeader>
      {options.map((option) => {
        const alcohol = cart[option.name].liqueur || cart[option.name].liquor;
        const hasSpecialMarking = cart[option.name].addOn || alcohol;

        return (
          <MenuOptions key={option.name} style={{ justifyContent: 'center' }}>
            <ItemName>
              {option.name} -- ${cart[option.name].price}
              {hasSpecialMarking && <MarkingStar> **</MarkingStar>}
            </ItemName>
            <div>
              <CounterButton
                updateCart={setOptionsCounter}
                currentProduct={{
                  ...cart[option.name],
                  name: option.name,
                  quantity: cart[option.name].quantity
                }}
                singleItem={singleItem}
              />
            </div>
          </MenuOptions>
        );
      })}
    </MenuSelection>
  );
};


const TabsContainer = styled.div`
  display: flex;
  flex-direction: row;
  row-gap: 15px;
`;

const LastMenuTab = styled(MenuTab)`
  border-right: 4px dotted #c4e2e8;
`;

const RedWarning = styled(Warning)`
  color: red;
`;

const BlueWarning = styled(Warning)`
  color: blue;
`;

type TabName = 'Pasta' | 'Veggie' | 'Protein' | 'Sides' | 'Desserts';

interface MenuTabConfig {
  name: TabName;
  sectionName: string;
  options: { name: string }[];
  singleItem?: boolean;
}

const menuTabs: MenuTabConfig[] = [
  { name: 'Pasta', sectionName: 'Pasta', options: pastaItems },
  { name: 'Veggie', sectionName: 'Veggie', options: meatLessItems },
  { name: 'Protein', sectionName: 'Protein', options: proteinItems },
  { name: 'Sides', sectionName: 'Sides', options: sideItems },
  { name: 'Desserts', sectionName: 'Desserts', options: desserts, singleItem: true },
];

const flavorCategories = [
  {
    title: 'Liquor',
    items: ['Captain Morgan', 'Bacardi', 'Vodka', 'Remy', 'Hennessy', 'Tequila', 'Crown Royal', 'Brandy VSOP'],
  },
  {
    title: 'Liqueurs',
    items: ['Amaretto', 'Grand Marnier', 'Banana Liqueur', 'Maraschino Liqueur', "Meyer's", "Bailey's", 'Kahlua'],
  },
  {
    title: 'Mousse Flavors',
    items: ['White Chocolate Mousse', 'Milk Chocolate Mousse', 'Dark Chocolate Mousse', 'Caramel Mousse'],
  },
  {
    title: 'Cake Flavors',
    items: ['Funfetti Cake', 'Vanilla Cake', 'Chocolate Cake'],
  },
];

export const MenuContent = () => {
  const { cart, setCart } = useContext(CartContext);
  const [tab, setTab] = useState<TabName>('Pasta');

  const activeTabConfig = menuTabs.find(t => t.name === tab);

  return (
    <MenuWrapper>
      <Title>Menu</Title>
      <WarningContainer>
        <RedWarning>
          Meal preperation services are only available to the Orlando Florida. All meal options are A La Carte and will be automatically set at 3 to meet the required 3 day meal prep minimum
        </RedWarning>
        {tab === 'Desserts' && (
          <Warning>Only cookies and brownies are available for shipment anywhere in the USA.</Warning>
        )}
        <Warning>
          Please contact us at cherickseats@gmail.com to let us know of any allergies or food sensitivities before placing your oder.
        </Warning>
      </WarningContainer>

      <Menu>
        <TabsContainer>
          {menuTabs.map((tabConfig, index) => {
            const TabComponent = index === menuTabs.length - 1 ? LastMenuTab : MenuTab;
            return (
              <TabComponent
                key={tabConfig.name}
                active={tab === tabConfig.name}
                onClick={() => setTab(tabConfig.name)}
              >
                {tabConfig.name}
              </TabComponent>
            );
          })}
        </TabsContainer>

        {activeTabConfig && (
          <MenuItemSection
            sectionName={activeTabConfig.sectionName}
            options={activeTabConfig.options}
            cart={cart}
            setOptionsCounter={setCart}
            singleItem={activeTabConfig.singleItem}
          />
        )}
      </Menu>
        <BlueWarning>
            **Once your order is confirmed and the depoist is paid we will reach out to you for Add On options (including cake and liquor flavors)
          </BlueWarning>
      {tab === 'Desserts' && (
        <WarningContainer>
          <Flavors>
            {flavorCategories.map((category) => (
              <FlavorColumn key={category.title}>
                <FlavorTitle>{category.title}</FlavorTitle>
                {category.items.map((item) => (
                  <p key={item}>{item}</p>
                ))}
              </FlavorColumn>
            ))}
          </Flavors>
        </WarningContainer>
      )}

      <ButtonWrapper>
        <StyledPillButton onClick={() => setCart(initialCartState)}>
          Empty Cart
        </StyledPillButton>
        <OrderNowButton location='cart' text='Go to Cart' style={{ width: '100px' }} />
      </ButtonWrapper>
    </MenuWrapper>
  );
};