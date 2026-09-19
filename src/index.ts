/**
 * URUZ — brand book
 *
 * Le CSS s'importe à part, une seule fois dans l'app hôte :
 *   @import "tailwindcss";
 *   @import "@uruz/brand/brand.css";
 *
 * L'ordre compte : après Tailwind, jamais avant.
 */

export { cn } from "./cn";
export { BrandWatermark } from "./components/BrandWatermark";

export {
  cta,
  ctaArrow,
  layout,
  hairlineGrid,
  surface,
  heading,
  body,
  field,
  thumbNav,
  badge,
  brandBullet,
} from "./components/recipes";

/**
 * Les valeurs de marque, pour les rares cas où une classe CSS ne suffit pas :
 * une balise theme-color, un canvas, un e-mail transactionnel.
 *
 * Toujours préférer les jetons CSS. Ces constantes sont un pis-aller, et
 * chaque usage est un endroit de plus à corriger si la marque évolue.
 */
export const BRAND = {
  name: "Uruz Athletic Factory",
  /** Le jaune acide, en hexadécimal pour les contextes sans oklch. */
  primaryHex: "#F6F561",
  /** L'anthracite du fond. */
  backgroundHex: "#231F20",
  fontFamily: '"Jost", system-ui, sans-serif',
  googleFontsHref:
    "https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100..900;1,100..900&display=swap",
} as const;
