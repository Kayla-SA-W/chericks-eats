import React, { useState } from 'react';
import styled from 'styled-components';
import { flightFuelItems } from '../data/menu-items';
import "@fontsource/libre-caslon-display";
import { MenuSelection, SectionHeader, Title, Warning } from './menu-v2';
import { OrderNowButton } from './pill-button';

const FlightFuelOptions = styled.div`
  display: flex;
  flex-direction: column;
  margin: 15px 25px;
  justify-content: center;
  align-items: center;
  text-align: center;

  @media screen and (max-width: 1024px) {
    padding: 0 5px;
    width: auto;
    margin: 0 0 20px;
  }
`;


const ItemName = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
`;

const TitleWarning = styled(Warning)`
  color: blue;
  margin: 25px;
  text-align: center;
  font-size: 25px;
`;

const CenteredWarning = styled(Warning)`
  margin: 0 25px;
  text-align: center;

  @media screen and (max-width: 1024px) {
    margin: 0 10px;
  }
`;

const TierWarning = styled(Warning)`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0 25px;

  @media screen and (max-width: 1024px) {
    margin: 0 10px;
    flex-wrap: wrap;
  }
`;

const TierName = styled.p`
  font-weight: bold;
`;

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
`

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

const subscriptionTiers = [
    { name: 'Jetsetter Lite', details: '12 meals/month (3/week) - from $151' },
    { name: 'Cruise Class', details: '20 meals/month (5/week) - from $238' },
    { name: 'First Fuel Package', details: '28 meals/month (7/week)- from $364' },
];

const menuSections = ['Breakfast - Cleared for Takeoff', 'Lunch - Cruising Altitude', 'Dinner - Final Approach', 'Grab & Go / Snack Add Ons'];
const menuPricingCopy = ['$9 to $16', '$15 to $20', '$15 to $22', '$6 to $10'];

type TabName = 'Menu Items' | 'Crew Packs' | 'Subscriptions';

const FlightFuelMenu = () => {
    const [tab, setTab] = useState<TabName>('Crew Packs');

    const tabs: TabName[] = ['Menu Items', 'Crew Packs', 'Subscriptions'];

    return (
        <MenuWrapper>
            <Title>Flight Fuel</Title>

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
                {tab === 'Menu Items' && (
                    <>
                        {menuSections.map((section) => (
                            <React.Fragment key={section}>
                                <SectionHeader>{section}</SectionHeader>
                                <Warning style={{ color: 'blue' }}> Individual pricing ranges from {menuPricingCopy[menuSections.indexOf(section)]}</Warning>
                                {flightFuelItems
                                    .filter((option) => option.section === section)
                                    .map((option) => (
                                        <FlightFuelOptions key={option.name}>
                                            <ItemName>{option.name}</ItemName>
                                            <div>{option.description}</div>
                                            <div>Holds for {option.holdLength}</div>
                                        </FlightFuelOptions>
                                    ))}
                            </React.Fragment>
                        ))}
                    </>
                )}

                {tab === 'Crew Packs' && (
                    <>
                        <SectionHeader>Multi-Day Crew Packs</SectionHeader>
                        <div style={{ margin: '15px', textAlign: 'center' }}>
                            <ItemName> 3-Day Turnaround Pack</ItemName>
                            <div>Includes 3 breakfasts, 3 lunches, 3 dinners, and 2 snacks</div>
                            <div>Starting at $90</div>
                        </div>
                        <div style={{ margin: '15px', textAlign: 'center' }}>
                            <ItemName> 5-Day Reserve Crew Pack</ItemName>
                            <div>Includes 5 breakfasts, 5 lunches, 5 dinners, and 5 snacks</div>
                            <div>Starting at $145</div>
                        </div>
                        <div style={{ margin: '15px', textAlign: 'center' }}>
                            <ItemName> Layover Essentials Pack</ItemName>
                            <div>Includes 1 breakfast, 2 no-heat meals, and 2 snacks</div>
                            <div>Starting at $55</div>
                        </div>
                    </>
                )}

                {tab === 'Subscriptions' && (
                    <div>
                        <TitleWarning>Subscription Tiers (Discounted for Crew)</TitleWarning>
                        <CenteredWarning>
                            Contact us at cherickseats@gmail.com to set up your subscription and customize your meals.
                        </CenteredWarning>

                        {subscriptionTiers.map((tier) => (
                            <TierWarning key={tier.name}>
                                <TierName>{tier.name}</TierName>- {tier.details}
                            </TierWarning>
                        ))}

                        <CenteredWarning>
                            Save 10 - 20% on your first month - crew exclusive!
                            No long-term lock-in. Pause or adjust anytime.
                        </CenteredWarning>
                        <CenteredWarning>
                            Prioritized prep before busy travel days.
                            * Fuel your schedule, not just your appetite.
                        </CenteredWarning>
                    </div>
                )}
            </MenuSelection>
            <OrderNowButton location='order' text='Order Now' style={{ marginTop: '20px' }} />
        </MenuWrapper>
    );
};

export default FlightFuelMenu;