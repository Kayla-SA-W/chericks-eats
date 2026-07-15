import * as React from "react";
import { createGlobalStyle } from 'styled-components';
import "@fontsource/dancing-script";
import "@fontsource/libre-caslon-display";
import styled from 'styled-components';
import { Nav } from "../components/nav";
import { SiteHead } from '../components/site-head';
import CardBg from '../images/food/card.jpg';
import SalmonImg from '../images/food/single-meal.png';
import MealPrepImg from '../images/food/meal-prep.png';
import LomeinImg from '../images/food/meal-prep-2.png';
import DessertImg from '../images/food/cupcakes.jpeg';
import TableImg from '../images/food/full-meal-prep.png';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #1a0e07;
    margin: 0;
    font-family: "Libre Caslon Display";
    color: #f5edd8;
  }
`

// ─── Hero ────────────────────────────────────────────────────────────────────

const Hero = styled.section<{ $bg: string }>`
  position: relative;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 80px 20px;
  background-image: url(${p => p.$bg});
  background-size: cover;
  background-position: center;
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(12, 5, 1, 0.75);
  }
`

const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`

const HeroTitle = styled.h1`
  font-family: "Dancing Script";
  font-size: 96px;
  color: #d4a843;
  margin: 0;
  line-height: 1;
  text-shadow: 0 2px 30px rgba(212, 168, 67, 0.35);
  @media screen and (max-width: 1024px) { font-size: 58px; }
`

const HeroSubtitle = styled.p`
  font-family: "Libre Caslon Display";
  font-size: 20px;
  color: #f5edd8;
  margin: 0;
  letter-spacing: 0.06em;
  @media screen and (max-width: 1024px) { font-size: 15px; }
`

const HeroLocation = styled.p`
  font-family: "Libre Caslon Display";
  font-size: 14px;
  color: #d4a843;
  margin: 0;
  letter-spacing: 0.2em;
  text-transform: uppercase;
`

const HeroButtons = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 12px;
  @media screen and (max-width: 1024px) { flex-direction: column; align-items: center; }
`

const HeroButton = styled.a`
  text-decoration: none;
  color: #f5edd8;
  border: 1px solid #f5edd8;
  padding: 14px 40px;
  font-family: "Libre Caslon Display";
  font-size: 15px;
  letter-spacing: 0.04em;
  transition: background-color 0.25s, color 0.25s, border-color 0.25s;
  &:hover {
    background-color: #d4a843;
    border-color: #d4a843;
    color: #1a0e07;
  }
`

// ─── Rustic / Refined ────────────────────────────────────────────────────────

const RusticSection = styled.section`
  background-color: #1a0e07;
  padding: 80px 6%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr;
    padding: 60px 5%;
    gap: 0;
  }
`

const RusticImage = styled.img`
  width: 100%;
  max-height: 520px;
  object-fit: cover;
  display: block;
`

const ParchmentCard = styled.div`
  background-color: #f0e2c0;
  color: #2a1506;
  padding: 56px 48px;
  @media screen and (max-width: 1024px) { padding: 40px 28px; }
`

const ParchmentHeading = styled.h2`
  font-family: "Libre Caslon Display";
  font-size: 34px;
  margin: 0 0 24px;
  color: #2a1506;
  @media screen and (max-width: 1024px) { font-size: 24px; }
`

const ParchmentText = styled.p`
  font-family: "Libre Caslon Display";
  font-size: 16px;
  line-height: 1.85;
  margin: 0 0 20px;
  color: #3d1f0a;
`

const ParchmentChecklist = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-family: "Libre Caslon Display";
  font-size: 16px;
  color: #3d1f0a;
  line-height: 1.6;
`

// ─── Featured Menu ───────────────────────────────────────────────────────────

const FeaturedSection = styled.section`
  background-color: #130803;
  padding: 80px 6%;
`

const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 50px;
  justify-content: center;
`

const Divider = styled.span`
  flex: 1;
  max-width: 140px;
  height: 1px;
  background-color: #d4a843;
`

const SectionTitle = styled.h2`
  font-family: "Libre Caslon Display";
  font-size: 26px;
  color: #f5edd8;
  margin: 0;
  white-space: nowrap;
  letter-spacing: 0.05em;
  @media screen and (max-width: 1024px) { font-size: 20px; }
`

const MenuGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  margin-bottom: 50px;
  @media screen and (max-width: 1024px) { grid-template-columns: repeat(2, 1fr); }
`

const MenuTile = styled.a`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border: 1px solid #3d1f0a;
  &:hover img { transform: scale(1.05); }
`

const MenuTileImage = styled.img`
  width: 100%;
  height: 220px;
  object-fit: cover;
  transition: transform 0.4s ease;
  display: block;
  @media screen and (max-width: 1024px) { height: 160px; }
`

const MenuTileLabel = styled.div`
  background-color: #1a0e07;
  padding: 16px;
  font-family: "Libre Caslon Display";
  font-size: 14px;
  color: #f5edd8;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  letter-spacing: 0.03em;
`

const GoldDot = styled.span`
  width: 6px;
  height: 6px;
  background-color: #d4a843;
  border-radius: 50%;
  display: block;
`

const CenteredButton = styled.a`
  display: block;
  width: fit-content;
  margin: 0 auto;
  text-decoration: none;
  color: #f5edd8;
  border: 1px solid #f5edd8;
  padding: 14px 52px;
  font-family: "Libre Caslon Display";
  font-size: 15px;
  letter-spacing: 0.04em;
  transition: background-color 0.25s, color 0.25s, border-color 0.25s;
  &:hover {
    background-color: #d4a843;
    border-color: #d4a843;
    color: #1a0e07;
  }
`

// ─── How It Works teaser ──────────────────────────────────────────────────────

const HiwSection = styled.section`
  background-color: #130803;
  padding: 90px 8%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  border-top: 1px solid #3d1f0a;
  border-bottom: 1px solid #3d1f0a;
`

const HiwQuote = styled.p`
  font-family: "Dancing Script";
  font-size: 68px;
  color: #d4a843;
  margin: 0;
  line-height: 1.2;
  text-shadow: 0 2px 24px rgba(212, 168, 67, 0.2);
  @media screen and (max-width: 1024px) { font-size: 40px; }
`

const HiwSubtext = styled.p`
  font-family: "Libre Caslon Display";
  font-size: 16px;
  color: #c4a882;
  margin: 0;
  letter-spacing: 0.04em;
`

const HiwButton = styled.a`
  text-decoration: none;
  color: #f5edd8;
  border: 1px solid #d4a843;
  padding: 14px 44px;
  font-family: "Libre Caslon Display";
  font-size: 15px;
  letter-spacing: 0.04em;
  margin-top: 12px;
  transition: background-color 0.25s, color 0.25s, border-color 0.25s;
  &:hover {
    background-color: #d4a843;
    border-color: #d4a843;
    color: #1a0e07;
  }
`

// ─── CTA ─────────────────────────────────────────────────────────────────────

const CtaSection = styled.section`
  background-color: #1a0e07;
  padding: 90px 8%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 36px;
`

const CtaText = styled.p`
  font-family: "Dancing Script";
  font-size: 58px;
  color: #d4a843;
  margin: 0;
  line-height: 1.25;
  text-shadow: 0 2px 24px rgba(212, 168, 67, 0.2);
  @media screen and (max-width: 1024px) { font-size: 34px; }
`

const CtaButton = styled.a`
  text-decoration: none;
  color: #1a0e07;
  background-color: #d4a843;
  padding: 18px 48px;
  font-family: "Libre Caslon Display";
  font-size: 17px;
  letter-spacing: 0.03em;
  transition: background-color 0.25s, color 0.25s;
  &:hover {
    background-color: #f5edd8;
  }
`

// ─── Reviews ─────────────────────────────────────────────────────────────────

const ReviewsSection = styled.section`
  background-color: #130803;
  padding: 80px 6%;
`

const ReviewsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  @media screen and (max-width: 1024px) { grid-template-columns: 1fr; }
`

const ReviewCard = styled.div`
  background-color: #f0e2c0;
  color: #2a1506;
  padding: 40px 32px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`

const Stars = styled.div`
  color: #c9922a;
  font-size: 18px;
  letter-spacing: 3px;
`

const ReviewText = styled.p`
  font-family: "Libre Caslon Display";
  font-size: 15px;
  line-height: 1.75;
  margin: 0;
  color: #3d1f0a;
  flex: 1;
`

const ReviewAttribution = styled.p`
  font-family: "Libre Caslon Display";
  font-size: 13px;
  margin: 0;
  color: #5a2d0a;
  font-style: italic;
`

// ─────────────────────────────────────────────────────────────────────────────

const GlobalStyleProxy: any = GlobalStyle;

const IndexPage = () => {
  return (
    <>
      <GlobalStyleProxy />
      <Nav header />

      <Hero $bg={CardBg}>
        <HeroContent>
          <HeroTitle>Cherick's Eats</HeroTitle>
          <HeroLocation>Meal Prep Services in Orlando</HeroLocation>
          <HeroSubtitle>Elevated Comfort. Crafted With Intention.</HeroSubtitle>
          <HeroButtons>
            <HeroButton href="/meal-prep">View Menu</HeroButton>
            <HeroButton href="/order">Order Now</HeroButton>
          </HeroButtons>
        </HeroContent>
      </Hero>

      <RusticSection>
        <RusticImage src={SalmonImg} alt="Cherick's Eats signature dish" />
        <ParchmentCard>
          <ParchmentHeading>Why Cherick's Eats?</ParchmentHeading>
          <ParchmentText>
            You don't need another boring meal prep service… you need something that actually tastes good and fits your lifestyle.
          </ParchmentText>
          <ParchmentChecklist>
            <li>✔ Fresh, never frozen</li>
            <li>✔ Bold flavors, clean ingredients</li>
            <li>✔ Saves you hours every week</li>
            <li>✔ Designed for real life (not just diets)</li>
          </ParchmentChecklist>
        </ParchmentCard>
      </RusticSection>

      <HiwSection>
        <HiwQuote>Fueling Taste. Elevating Standards.</HiwQuote>
        <HiwSubtext>Fresh meals. Bold flavor. Built for your life.</HiwSubtext>
        <HiwButton href="/how-it-works">See How It Works →</HiwButton>
      </HiwSection>

      <FeaturedSection>
        <SectionHeader>
          <Divider />
          <SectionTitle>Featured Menu</SectionTitle>
          <Divider />
        </SectionHeader>
        <MenuGrid>
          <MenuTile href="/meal-prep">
            <MenuTileImage src={MealPrepImg} alt="Meal Prep" />
            <MenuTileLabel>Meal Prep<GoldDot /></MenuTileLabel>
          </MenuTile>
          <MenuTile href="/desserts">
            <MenuTileImage src={DessertImg} alt="Desserts" />
            <MenuTileLabel>Desserts<GoldDot /></MenuTileLabel>
          </MenuTile>
          <MenuTile href="/flight-fuel">
            <MenuTileImage src={LomeinImg} alt="Flight Fuel" />
            <MenuTileLabel>Flight Fuel<GoldDot /></MenuTileLabel>
          </MenuTile>
          <MenuTile href="/order">
            <MenuTileImage src={TableImg} alt="Specialty Orders" />
            <MenuTileLabel>Specialty Orders<GoldDot /></MenuTileLabel>
          </MenuTile>
        </MenuGrid>
        <CenteredButton href="/meal-prep">Explore Full Menu</CenteredButton>
      </FeaturedSection>

      <CtaSection>
        <CtaText>Ready to stop stressing about food every week?</CtaText>
        <CtaButton href="/order">👉 Start Your Weekly Meal Prep 🔥</CtaButton>
      </CtaSection>

      <ReviewsSection>
        <SectionHeader>
          <Divider />
          <SectionTitle>What People Are Saying</SectionTitle>
          <Divider />
        </SectionHeader>
        <ReviewsGrid>
          <ReviewCard>
            <Stars>★★★★★</Stars>
            <ReviewText>"These meals saved me so much time during the week 🔥"</ReviewText>
          </ReviewCard>
          <ReviewCard>
            <Stars>★★★★★</Stars>
            <ReviewText>"Best meal prep I've had in Orlando, hands down."</ReviewText>
          </ReviewCard>
          <ReviewCard>
            <Stars>★★★★★</Stars>
            <ReviewText>"Flavor is crazy… not your average meal prep"</ReviewText>
          </ReviewCard>
        </ReviewsGrid>
      </ReviewsSection>

      <Nav header={false} />
    </>
  )
}

export default IndexPage
export const Head = () => <SiteHead path="/" />;
