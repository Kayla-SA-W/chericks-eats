import React, { useState } from 'react';
import styled from 'styled-components';
import {
  dessertBarClassics,
  chocolateWastedItems,
  infusedLiquorOptions,
  cakePopShooters,
  jarCakes,
  cakeFlavors,
  chocolateMousseFlavors,
  chocolateCoveredStrawberries,
} from '../data/menu-items';
import "@fontsource/libre-caslon-display";
import { MenuSelection, SectionHeader, Title, Warning } from './menu-v2';
import { OrderNowButton } from './pill-button';

const MenuWrapper = styled.div`
  width: 90vw;
  margin: 0 auto;
  padding: 30px 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;

  @media screen and (max-width: 1024px) {
    width: 100%;
    padding: 20px 10px;
  }
`;


const ItemName = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
`;

const ItemDetail = styled.div`
  font-size: 14px;
  color: #555;
`;

const ItemRow = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 25px;

  @media screen and (max-width: 1024px) {
    margin: 10px 10px;
  }
`;

const PricingNote = styled(Warning)`
  color: blue;
  margin: 10px 25px;
  text-align: center;

  @media screen and (max-width: 1024px) {
    margin: 10px;
  }
`;

const TabsContainer = styled.div`
  display: flex;
  flex-direction: row;
  row-gap: 15px;
  flex-wrap: wrap;
  justify-content: center;
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

const LastMenuTab = styled(MenuTab)`
  border-right: 4px dotted #c4e2e8;
`;

const FlavorColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FlavorTitle = styled(Warning)`
  text-decoration: underline blue;
  margin-bottom: 5px;
`;

const FlavorsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 50px;
  font-family: "Libre Caslon Display";
  margin-top: 15px;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    gap: 10px;
  }
`;

type TabName = 'Dessert Bar' | 'Chocolate Wasted' | 'Cake Pops & Jars' | 'Strawberries';

const DessertsMenu = () => {
  const [tab, setTab] = useState<TabName>('Dessert Bar');
  const tabs: TabName[] = ['Dessert Bar', 'Chocolate Wasted', 'Cake Pops & Jars', 'Strawberries'];

  return (
    <MenuWrapper>
      <Title>Desserts</Title>
      <Warning>
        Guests can reach out to us about any custom orders, designs, or special requests.
      </Warning>

      <TabsContainer>
        {tabs.map((tabName, index) => {
          const TabComponent = index === tabs.length - 1 ? LastMenuTab : MenuTab;
          return (
            <TabComponent
              key={tabName}
              active={tab === tabName}
              onClick={() => setTab(tabName)}
            >
              {tabName}
            </TabComponent>
          );
        })}
      </TabsContainer>

      <MenuSelection>
        {tab === 'Dessert Bar' && (
          <>
            <SectionHeader>Dessert Bar Classics</SectionHeader>
            {dessertBarClassics.map((item) => (
              <ItemRow key={item.name}>
                <ItemName>{item.name}</ItemName>
                <ItemDetail>{item.count} — ${item.price}</ItemDetail>
              </ItemRow>
            ))}
          </>
        )}

        {tab === 'Chocolate Wasted' && (
          <>
            <SectionHeader>Truffles & Bon Bons</SectionHeader>
            {chocolateWastedItems.map((item) => (
              <ItemRow key={item.name}>
                <ItemName>{item.name}</ItemName>
                <ItemDetail>
                  {item.counts.map(c => `${c.count} — $${c.price}`).join(' | ')}
                </ItemDetail>
              </ItemRow>
            ))}
            <PricingNote>
              Infused liquor flavors available for truffles and bon bons
            </PricingNote>
            <FlavorsContainer>
              <FlavorColumn>
                <FlavorTitle>Infused Liquor Options</FlavorTitle>
                {infusedLiquorOptions.map((flavor) => (
                  <p key={flavor} style={{ margin: '2px 0' }}>{flavor}</p>
                ))}
              </FlavorColumn>
            </FlavorsContainer>
          </>
        )}

        {tab === 'Cake Pops & Jars' && (
          <>
            <SectionHeader>Cake Pop Shooters</SectionHeader>
            <ItemRow>
              <ItemDetail>
                {cakePopShooters.map(c => `${c.count} — $${c.price}`).join(' | ')}
              </ItemDetail>
            </ItemRow>

            <SectionHeader>6oz Jar Cakes</SectionHeader>
            <ItemRow>
              <ItemDetail>
                {jarCakes.map(c => `${c.count} — $${c.price}`).join(' | ')}
              </ItemDetail>
            </ItemRow>

            <FlavorsContainer>
              <FlavorColumn>
                <FlavorTitle>Cake Flavors</FlavorTitle>
                {cakeFlavors.map((flavor) => (
                  <p key={flavor} style={{ margin: '2px 0' }}>{flavor}</p>
                ))}
              </FlavorColumn>
              <FlavorColumn>
                <FlavorTitle>Chocolate Mousse Options (Jar Cakes)</FlavorTitle>
                {chocolateMousseFlavors.map((flavor) => (
                  <p key={flavor} style={{ margin: '2px 0' }}>{flavor}</p>
                ))}
              </FlavorColumn>
            </FlavorsContainer>
          </>
        )}

        {tab === 'Strawberries' && (
          <>
            <SectionHeader>Chocolate Covered Strawberries</SectionHeader>
            {chocolateCoveredStrawberries.map((item) => (
              <ItemRow key={item.name}>
                <ItemName>{item.name}</ItemName>
                <ItemDetail>
                  {item.counts.map(c => `${c.count} — $${c.price}`).join(' | ')}
                </ItemDetail>
              </ItemRow>
            ))}
            <PricingNote>
              Additional toppings (Sprinkles, Gold Flakes, etc.) available for an additional $5
            </PricingNote>
            <PricingNote>
              Infused options: Champagne or Moscato
            </PricingNote>
          </>
        )}
      </MenuSelection>
      <OrderNowButton location='order' text='Order Now' style={{ marginTop: '20px' }} />
    </MenuWrapper>
  );
};

export default DessertsMenu;
