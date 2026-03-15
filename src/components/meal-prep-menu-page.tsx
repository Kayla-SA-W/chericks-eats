import React, { useState } from 'react';
import styled from 'styled-components';
import "@fontsource/libre-caslon-display";
import "@fontsource/dancing-script";
import { proteins, bases, veggies, sauces, pastas, pastaProteinAddOns } from '../data/meal-prep';
import { MenuSelection, Title, Warning } from './menu-v2';

const MenuWrapper = styled.div`
  width: 90vw;
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

const SectionHeader = styled.div`
  font-size: 24px;
  display: flex;
  align-self: center;
  margin: 20px 0 10px;
`;

const ItemName = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
`;

const ItemRow = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 25px;

  @media screen and (max-width: 1024px) {
    margin: 10px 10px;
  }
`;

const ExtraCost = styled.span`
  font-size: 14px;
  color: #856e1e;
  margin-left: 8px;
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

const PricingNote = styled(Warning)`
  color: blue;
  margin: 10px 25px;
  text-align: center;

  @media screen and (max-width: 1024px) {
    margin: 10px;
  }
`;

const BundleCard = styled.div`
  margin: 15px 25px;

  @media screen and (max-width: 1024px) {
    margin: 15px 10px;
  }
`;

type TabName = 'Protein Plates' | 'Pasta Plates' | 'Bundles';

const MealPrepMenuPage = () => {
  const [tab, setTab] = useState<TabName>('Protein Plates');
  const tabs: TabName[] = ['Protein Plates', 'Pasta Plates', 'Bundles'];

  return (
    <MenuWrapper>
      <Title>Modern Meal Prep</Title>
      <Warning style={{ color: 'red' }}>
        Meal preparation services are only available in Orlando, Florida.
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
        {tab === 'Protein Plates' && (
          <>
            <PricingNote>Starting at $22/day (3-14 days)</PricingNote>

            <SectionHeader>Proteins</SectionHeader>
            {proteins.map((item) => (
              <ItemRow key={item.name}>
                <ItemName>
                  {item.name}
                  {item.extraCost && <ExtraCost>+${item.extraCost}/day</ExtraCost>}
                </ItemName>
              </ItemRow>
            ))}

            <SectionHeader>Bases</SectionHeader>
            {bases.map((item) => (
              <ItemRow key={item.name}>
                <ItemName>{item.name}</ItemName>
              </ItemRow>
            ))}

            <SectionHeader>Veggies</SectionHeader>
            {veggies.map((item) => (
              <ItemRow key={item.name}>
                <ItemName>{item.name}</ItemName>
              </ItemRow>
            ))}

            <SectionHeader>Sauces</SectionHeader>
            {sauces.map((item) => (
              <ItemRow key={item.name}>
                <ItemName>{item.name}</ItemName>
              </ItemRow>
            ))}
          </>
        )}

        {tab === 'Pasta Plates' && (
          <>
            <PricingNote>Starting at $22/day (3-14 days)</PricingNote>

            <SectionHeader>Pastas</SectionHeader>
            {pastas.map((item) => (
              <ItemRow key={item.name}>
                <ItemName>{item.name}</ItemName>
              </ItemRow>
            ))}

            <SectionHeader>Protein Add-Ons</SectionHeader>
            {pastaProteinAddOns.map((item) => (
              <ItemRow key={item.name}>
                <ItemName>
                  {item.name}
                  <ExtraCost>+${item.price}/day</ExtraCost>
                </ItemName>
              </ItemRow>
            ))}

            <SectionHeader>Bases</SectionHeader>
            {bases.map((item) => (
              <ItemRow key={item.name}>
                <ItemName>{item.name}</ItemName>
              </ItemRow>
            ))}

            <SectionHeader>Veggies</SectionHeader>
            {veggies.map((item) => (
              <ItemRow key={item.name}>
                <ItemName>{item.name}</ItemName>
              </ItemRow>
            ))}

            <SectionHeader>Sauces</SectionHeader>
            {sauces.map((item) => (
              <ItemRow key={item.name}>
                <ItemName>{item.name}</ItemName>
              </ItemRow>
            ))}
          </>
        )}

        {tab === 'Bundles' && (
          <>
            <SectionHeader>Meal Prep Bundles</SectionHeader>
            <BundleCard>
              <ItemName>Small Gatherings</ItemName>
              <div>Includes 2 pans of protein and 2 pans of bases.</div>
              <div>Feeds 10-15 people.</div>
              <div>Contact for pricing</div>
            </BundleCard>
            <BundleCard>
              <ItemName>Lifestyle Week - Option 1</ItemName>
              <div>Includes 5 protein plates and 2 pasta plates.</div>
              <div>$115</div>
            </BundleCard>
            <BundleCard>
              <ItemName>Lifestyle Week - Option 2</ItemName>
              <div>Includes 10 protein plates and 4 pasta plates.</div>
              <div>$215</div>
            </BundleCard>
            <BundleCard>
              <ItemName>Family Meal Prep</ItemName>
              <div>Includes 4 large entrees and 4 sides.</div>
              <div>$275</div>
            </BundleCard>
            <PricingNote>
              Email cherickseats@gmail.com to confirm your bundle order and schedule your prep date.
            </PricingNote>
          </>
        )}
      </MenuSelection>
    </MenuWrapper>
  );
};

export default MealPrepMenuPage;
