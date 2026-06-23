---
name: Artisanal Prime
colors:
  surface: '#f9f9f7'
  surface-dim: '#dadad8'
  surface-bright: '#f9f9f7'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f4f4f2'
  surface-container: '#eeeeec'
  surface-container-high: '#e8e8e6'
  surface-container-highest: '#e2e3e1'
  on-surface: '#1a1c1b'
  on-surface-variant: '#5b403f'
  inverse-surface: '#2f3130'
  inverse-on-surface: '#f1f1ef'
  outline: '#8f6f6e'
  outline-variant: '#e3bebb'
  surface-tint: '#b91a2a'
  primary: '#98001b'
  on-primary: '#ffffff'
  primary-container: '#be1e2d'
  on-primary-container: '#ffd3d1'
  inverse-primary: '#ffb3b0'
  secondary: '#8c4f00'
  on-secondary: '#ffffff'
  secondary-container: '#fd9923'
  on-secondary-container: '#663800'
  tertiary: '#4a4949'
  on-tertiary: '#ffffff'
  tertiary-container: '#626161'
  on-tertiary-container: '#dfdddc'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdad8'
  primary-fixed-dim: '#ffb3b0'
  on-primary-fixed: '#410006'
  on-primary-fixed-variant: '#930019'
  secondary-fixed: '#ffdcbf'
  secondary-fixed-dim: '#ffb874'
  on-secondary-fixed: '#2d1600'
  on-secondary-fixed-variant: '#6b3b00'
  tertiary-fixed: '#e5e2e1'
  tertiary-fixed-dim: '#c8c6c5'
  on-tertiary-fixed: '#1c1b1b'
  on-tertiary-fixed-variant: '#474746'
  background: '#f9f9f7'
  on-background: '#1a1c1b'
  surface-variant: '#e2e3e1'
typography:
  display-xl:
    fontFamily: Hanken Grotesk
    fontSize: 48px
    fontWeight: '800'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-lg-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
  title-md:
    fontFamily: Hanken Grotesk
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Manrope
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
  max-width: 1280px
---

## Brand & Style

The design system is rooted in the "Crafted by Farmers" ethos, blending the raw, organic energy of a local butchery with the sophisticated precision of a premium digital storefront. It targets discerning food enthusiasts who value transparency, quality, and origin.

The visual style is **Corporate / Modern** with a **Tactile** edge. It utilizes expansive white space to denote cleanliness and professional standards, while using bold, high-contrast accents to evoke the heat of the flame and the richness of the product. The interface must feel reliable and institutional, yet warm and inviting, mirroring the trust found in a community-driven supply chain.

## Colors

The palette is derived directly from the primal elements of the brand: meat, fire, and charcoal.

- **Primary (Bold Red):** Used for primary actions and key brand moments. It represents the quality and freshness of the meat.
- **Secondary (Vibrant Fire Orange):** Used for highlights, badges, and secondary buttons to inject energy and warmth.
- **Charcoal Black:** Used for primary typography and deep grounding elements to ensure high legibility and a premium feel.
- **Neutral / White Space:** A combination of pure white (#FFFFFF) for surfaces and a soft "Paper" gray (#F4F4F2) for backgrounds to keep the UI feeling airy and hygienic.

## Typography

This design system uses a triple-font approach to balance impact and utility:
- **Headlines:** `Hanken Grotesk` provides a sharp, contemporary, and geometric presence. Extra-bold weights are used for price points and product names to ensure they command attention.
- **Body:** `Manrope` offers a modern, balanced, and highly legible reading experience for product descriptions and farm stories.
- **Labels:** `JetBrains Mono` is used sparingly for technical data (weight, SKU, "Halal" certification, temperature) to provide a "butcher’s tag" or industrial receipt aesthetic.

## Layout & Spacing

The layout follows a **Fixed Grid** model on desktop to maintain a premium, editorial feel, while transitioning to a **Fluid Grid** on mobile for ease of use.

- **Desktop:** 12-column grid with a 1280px max-width. Use generous 64px margins to allow the photography to breathe.
- **Mobile:** 4-column grid with 16px margins. 
- **Rhythm:** An 8px base unit governs all spacing. Vertical rhythm should be loose, prioritizing "pockets" of white space between product categories to avoid a cluttered "discount" look.

## Elevation & Depth

To maintain a "Premium" and "Modern" feel, the system avoids heavy shadows. Depth is communicated through:
- **Tonal Layers:** Using the light neutral gray (#F4F4F2) for the background and pure white for cards to create a subtle lift.
- **Low-contrast Outlines:** 1px borders in a soft gray (#E0E0E0) define product cards and input fields without adding visual weight.
- **Tactile Shadows:** When interaction is required (e.g., hovering over a product), use a very soft, diffused charcoal shadow with 4% opacity to simulate the item being slightly raised from the table.

## Shapes

The shape language is **Soft (0.25rem)**. This subtle rounding provides a professional and structural feel that aligns with industrial food packaging while remaining approachable. 

- **Primary Buttons:** Use the standard 0.25rem (4px) radius.
- **Product Image Containers:** Can utilize a slightly larger `rounded-lg` (8px) to soften the impact of high-contrast photography.
- **Badges/Chips:** Use a full pill-shape to distinguish them from actionable buttons.

## Components

### Buttons
- **Primary:** Solid Red (#BE1E2D) with white Hanken Grotesk Bold text. High-contrast and immediate.
- **Secondary:** Transparent with a 2px Charcoal border.
- **Tertiary/Ghost:** Fire Orange text for subtle calls to action like "View Details."

### Cards
Product cards should feature a large aspect-ratio image at the top. Use a simple white background with a light 1px border. Information hierarchy: Title (Hanken Grotesk), Metadata (JetBrains Mono Label), Price (Hanken Grotesk Bold).

### Input Fields
Clean, white backgrounds with 1px soft gray borders. Labels should be small, all-caps JetBrains Mono for a professional, precise appearance.

### Chips & Badges
Use Fire Orange for status indicators like "In Stock" or "New Arrival." These should be pill-shaped and use the label-sm typography level.

### Iconography
Linear, 2px stroke icons in Charcoal Black. The style should be functional and clear (e.g., a simple cleaver icon for "Beef," a flame icon for "Grilling Tips").