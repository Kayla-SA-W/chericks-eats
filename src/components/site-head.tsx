import React from 'react';

const SITE_URL = 'https://www.cherickseats.com';
const DEFAULT_TITLE = "Cherick's Eats | Meal Prep & Catering in Orlando, FL";
const DEFAULT_DESCRIPTION = "Cherick's Eats is a home-based meal prep business in Orlando, FL. We offer a variety of healthy and delicious meals that are perfect for busy individuals and families. Our meals are made with fresh, high-quality ingredients and are designed to help you save time and eat well. Serving Orlando, FL & surrounding areas. We also offer Meal Prep Delivery in Orlando and Catering Services in Orlando.";
const OG_IMAGE = `${SITE_URL}/og-image.jpeg`;

const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'FoodEstablishment',
    name: "Cherick's Eats",
    description: DEFAULT_DESCRIPTION,
    url: SITE_URL,
    image: OG_IMAGE,
    address: {
        '@type': 'PostalAddress',
        addressLocality: 'Orlando',
        addressRegion: 'FL',
        addressCountry: 'US',
    },
    areaServed: [
        { '@type': 'City', name: 'Orlando' },
        { '@type': 'State', name: 'Florida' },
    ],
    servesCuisine: 'Meal Prep',
    priceRange: '$$',
};

interface SiteHeadProps {
    title?: string;
    description?: string;
    path?: string;
    noindex?: boolean;
}

export const SiteHead = ({
    title = DEFAULT_TITLE,
    description = DEFAULT_DESCRIPTION,
    path = '/',
    noindex = false,
}: SiteHeadProps) => {
    const canonicalUrl = `${SITE_URL}${path}`;

    return (
        <>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="robots" content={noindex ? 'noindex, nofollow' : 'index, follow'} />
            <title>{title}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={canonicalUrl} />

            {/* Open Graph */}
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content="Cherick's Eats" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:image" content={OG_IMAGE} />
            <meta property="og:image:alt" content="Cherick's Eats" />
            <meta property="og:locale" content="en_US" />

            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={OG_IMAGE} />

            {/* JSON-LD LocalBusiness */}
            <script type="application/ld+json">
                {JSON.stringify(localBusinessSchema)}
            </script>
        </>
    );
};
