import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import "@fontsource/dancing-script";
import "@fontsource/libre-caslon-display";
import { Nav } from '../components/nav';
import { SiteHead } from '../components/site-head';
import Salmon from '../images/food/lemon-salmon.jpg';
import MealPrep from '../images/food/meal-prep.jpeg';
import Lomein from '../images/food/lomein.jpg';
import TableMenu from '../images/food/cherick-table-menu.jpg';
import Cheesecake from '../images/food/cheesecake.jpg';
import Support2 from '../images/food/support2.jpg';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #1a0e07;
    margin: 0;
    font-family: "Libre Caslon Display";
    color: #f5edd8;
  }
`
const GlobalStyleProxy: any = GlobalStyle;

// ─── Shared layout ────────────────────────────────────────────────────────────

const PageWrapper = styled.div`
  width: 100%;
`

const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  justify-content: center;
  margin-bottom: 50px;
`

const Divider = styled.span`
  flex: 1;
  max-width: 120px;
  height: 1px;
  background-color: #d4a843;
`

const SectionTitle = styled.h2`
  font-family: "Libre Caslon Display";
  font-size: 13px;
  color: #d4a843;
  margin: 0;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  white-space: nowrap;
`

// ─── How It Works ─────────────────────────────────────────────────────────────

const HowItWorksSection = styled.section`
  background-color: #130803;
  padding: 80px 6%;
`

const PageTitle = styled.h1`
  font-family: "Dancing Script";
  font-size: 72px;
  color: #d4a843;
  text-align: center;
  margin: 0 0 60px;
  text-shadow: 0 2px 24px rgba(212, 168, 67, 0.2);
  @media screen and (max-width: 1024px) { font-size: 48px; margin-bottom: 40px; }
`

const StepsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  max-width: 1000px;
  margin: 0 auto;
  @media screen and (max-width: 1024px) { grid-template-columns: 1fr; max-width: 480px; }
`

const StepCard = styled.div`
  background-color: #2a1506;
  border: 1px solid #3d1f0a;
  padding: 40px 32px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  position: relative;
`

const StepNumber = styled.span`
  font-family: "Dancing Script";
  font-size: 52px;
  color: #3d1f0a;
  line-height: 1;
  position: absolute;
  top: 16px;
  right: 20px;
`

const StepEmoji = styled.div`
  font-size: 36px;
`

const StepHeading = styled.h3`
  font-family: "Libre Caslon Display";
  font-size: 20px;
  color: #d4a843;
  margin: 0;
`

const StepBody = styled.p`
  font-family: "Libre Caslon Display";
  font-size: 15px;
  color: #c4a882;
  line-height: 1.7;
  margin: 0;
`

// ─── Who This Is For ──────────────────────────────────────────────────────────

const WhoSection = styled.section`
  background-color: #1a0e07;
  padding: 80px 6%;
`

const WhoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  max-width: 1000px;
  margin: 0 auto;
  align-items: start;
  @media screen and (max-width: 1024px) { grid-template-columns: 1fr; gap: 40px; }
`

const WhoIntro = styled.p`
  font-family: "Libre Caslon Display";
  font-size: 17px;
  color: #c4a882;
  margin: 0 0 28px;
  line-height: 1.7;
`

const WhoList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 14px;
`

const WhoItem = styled.li`
  font-family: "Libre Caslon Display";
  font-size: 16px;
  color: #f5edd8;
  display: flex;
  align-items: center;
  gap: 12px;
  &::before {
    content: '✔';
    color: #d4a843;
    flex-shrink: 0;
  }
`

const PhotoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 200px 200px;
  gap: 8px;
  @media screen and (max-width: 1024px) { grid-template-rows: 160px 160px; }
`

const GridPhoto = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`

const GridPhotoLarge = styled(GridPhoto)`
  grid-row: span 2;
`

// ─── Quote banner ─────────────────────────────────────────────────────────────

const QuoteBanner = styled.section`
  background-color: #130803;
  padding: 70px 8%;
  text-align: center;
  border-top: 1px solid #3d1f0a;
  border-bottom: 1px solid #3d1f0a;
`

const QuoteText = styled.p`
  font-family: "Dancing Script";
  font-size: 52px;
  color: #d4a843;
  margin: 0;
  line-height: 1.3;
  text-shadow: 0 2px 20px rgba(212, 168, 67, 0.15);
  @media screen and (max-width: 1024px) { font-size: 32px; }
`

// ─── Catering ─────────────────────────────────────────────────────────────────

const CateringSection = styled.section`
  background-color: #1a0e07;
  padding: 80px 6%;
`

const CateringCard = styled.div`
  background-color: #f0e2c0;
  color: #2a1506;
  max-width: 800px;
  margin: 0 auto;
  padding: 56px 52px;
  @media screen and (max-width: 1024px) { padding: 40px 28px; }
`

const CateringHeading = styled.h2`
  font-family: "Libre Caslon Display";
  font-size: 32px;
  color: #2a1506;
  margin: 0 0 16px;
  @media screen and (max-width: 1024px) { font-size: 24px; }
`

const CateringBody = styled.p`
  font-family: "Libre Caslon Display";
  font-size: 16px;
  color: #3d1f0a;
  line-height: 1.8;
  margin: 0 0 24px;
`

const CateringList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 32px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`

const CateringItem = styled.li`
  font-family: "Libre Caslon Display";
  font-size: 15px;
  color: #3d1f0a;
  &::before {
    content: '— ';
    color: #856e1e;
  }
`

const CateringNote = styled.p`
  font-family: "Libre Caslon Display";
  font-size: 14px;
  color: #5a2d0a;
  font-style: italic;
  margin: 0 0 28px;
`

const CateringButton = styled.a`
  display: inline-block;
  text-decoration: none;
  background-color: #2a1506;
  color: #f5edd8;
  border: 1px solid #d4a843;
  padding: 14px 40px;
  font-family: "Libre Caslon Display";
  font-size: 15px;
  letter-spacing: 0.03em;
  transition: background-color 0.25s, color 0.25s;
  &:hover {
    background-color: #d4a843;
    color: #1a0e07;
  }
`

// ─── $10 Off CTA ──────────────────────────────────────────────────────────────

const OfferSection = styled.section`
  background-color: #130803;
  padding: 80px 6%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 32px;
  border-top: 1px solid #3d1f0a;
`

const OfferHeading = styled.h2`
  font-family: "Dancing Script";
  font-size: 58px;
  color: #d4a843;
  margin: 0;
  text-shadow: 0 2px 24px rgba(212, 168, 67, 0.2);
  @media screen and (max-width: 1024px) { font-size: 38px; }
`

const OfferSubheading = styled.p`
  font-family: "Libre Caslon Display";
  font-size: 16px;
  color: #c4a882;
  margin: 0;
  letter-spacing: 0.05em;
  text-transform: uppercase;
`

const OfferList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px 32px;
`

const OfferItem = styled.li`
  font-family: "Libre Caslon Display";
  font-size: 16px;
  color: #f5edd8;
  &::before {
    content: '✔ ';
    color: #d4a843;
  }
`

const OfferButton = styled.a`
  text-decoration: none;
  color: #1a0e07;
  background-color: #d4a843;
  padding: 18px 52px;
  font-family: "Libre Caslon Display";
  font-size: 16px;
  letter-spacing: 0.03em;
  transition: background-color 0.25s;
  &:hover { background-color: #f5edd8; }
`

// ─── Page ─────────────────────────────────────────────────────────────────────

const HowItWorksPage = () => {
  return (
    <>
      <GlobalStyleProxy />
      <Nav header />

      <PageWrapper>

        {/* How It Works */}
        <HowItWorksSection>
          <PageTitle>How It Works</PageTitle>
          <StepsGrid>
            <StepCard>
              <StepNumber>1</StepNumber>
              <StepEmoji>🍱</StepEmoji>
              <StepHeading>Pick Your Meals</StepHeading>
              <StepBody>Choose from our weekly menu built for flavor and balance.</StepBody>
            </StepCard>
            <StepCard>
              <StepNumber>2</StepNumber>
              <StepEmoji>👨🏽‍🍳</StepEmoji>
              <StepHeading>We Cook Fresh</StepHeading>
              <StepBody>Every meal is prepared with care using quality ingredients.</StepBody>
            </StepCard>
            <StepCard>
              <StepNumber>3</StepNumber>
              <StepEmoji>🚗</StepEmoji>
              <StepHeading>You Enjoy</StepHeading>
              <StepBody>Pickup or delivery available in Orlando — heat, eat, and go.</StepBody>
            </StepCard>
          </StepsGrid>
        </HowItWorksSection>

        {/* Who This Is For */}
        <WhoSection>
          <SectionHeader>
            <Divider />
            <SectionTitle>Who This Is For</SectionTitle>
            <Divider />
          </SectionHeader>
          <WhoGrid>
            <div>
              <WhoIntro>Perfect for:</WhoIntro>
              <WhoList>
                <WhoItem>Busy professionals who don't have time to cook</WhoItem>
                <WhoItem>Flight attendants &amp; airport staff ✈️</WhoItem>
                <WhoItem>Gym-goers &amp; fitness-focused lifestyles</WhoItem>
                <WhoItem>Families who want convenient, clean meals</WhoItem>
              </WhoList>
            </div>
            <PhotoGrid>
              <GridPhotoLarge src={MealPrep} alt="Meal prep" />
              <GridPhoto src={Salmon} alt="Lemon salmon" />
              <GridPhoto src={Lomein} alt="Lo mein" />
            </PhotoGrid>
          </WhoGrid>
        </WhoSection>

        {/* Quote */}
        <QuoteBanner>
          <QuoteText>"Meals that look good… and taste even better"</QuoteText>
        </QuoteBanner>

        {/* Catering */}
        <CateringSection>
          <SectionHeader>
            <Divider />
            <SectionTitle>Catering in Orlando</SectionTitle>
            <Divider />
          </SectionHeader>
          <CateringCard>
            <CateringHeading>Catering in Orlando</CateringHeading>
            <CateringBody>
              From private events to corporate lunches — Cherick's Eats brings bold flavor and clean presentation to every table.
            </CateringBody>
            <WhoIntro style={{ color: '#3d1f0a', margin: '0 0 12px' }}>Perfect for:</WhoIntro>
            <CateringList>
              <CateringItem>Birthdays</CateringItem>
              <CateringItem>Work events</CateringItem>
              <CateringItem>Private dinners</CateringItem>
              <CateringItem>Small gatherings</CateringItem>
            </CateringList>
            <CateringNote>Custom menus available</CateringNote>
            <CateringButton href="mailto:cherickseats@gmail.com?subject=Catering Quote Request">
              👉 Request Catering Quote
            </CateringButton>
          </CateringCard>
        </CateringSection>

        {/* $10 Off */}
        <OfferSection>
          <OfferHeading>Get $10 Off Your First Order</OfferHeading>
          <OfferSubheading>Who this is for</OfferSubheading>
          <OfferList>
            <OfferItem>Busy professionals</OfferItem>
            <OfferItem>Flight attendants ✈️</OfferItem>
            <OfferItem>Gym &amp; fitness clients</OfferItem>
            <OfferItem>Families</OfferItem>
          </OfferList>
          <OfferButton href="/order">👉 Claim Your Discount</OfferButton>
        </OfferSection>

      </PageWrapper>

      <Nav header={false} />
    </>
  );
};

export default HowItWorksPage;
export const Head = () => <SiteHead title="How It Works | Cherick's Eats" description="Learn how Cherick's Eats meal prep works — pick your meals, we cook fresh, you enjoy. Pickup and delivery available in Orlando, FL." path="/how-it-works" />;
