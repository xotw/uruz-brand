import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

/**
 * Compose des classes en résolvant les conflits Tailwind.
 *
 * `twMerge` est ce qui rend les recettes utilisables : sans lui,
 * `cn(cta.solid, "px-4")` donnerait `px-7 px-4` et la dernière règle du
 * fichier CSS gagnerait, pas la dernière écrite ici. Avec lui, `px-4` remplace
 * bien `px-7` comme on l'attend.
 *
 * Le piège, découvert sur l'app : tailwind-merge ne connaît pas nos
 * utilitaires maison. Il lit `text-display` et `text-balance-safe` comme des
 * classes de taille de texte, donc en conflit avec `text-3xl`, et n'en garde
 * qu'une seule. Résultat, `cn(heading.h1Page, "mt-3")` rendait un titre en
 * minuscules et en graisse normale, sans la moindre erreur.
 *
 * On lui déclare donc chaque utilitaire comme un groupe à part, qui n'entre
 * en conflit qu'avec lui-même.
 */
type UruzGroup =
  | "uruz-display"
  | "uruz-wrap"
  | "uruz-kicker"
  | "uruz-texture"
  | "uruz-tap"
  | "uruz-section"
  | "uruz-thumb"
  | "uruz-depth";

const twMerge = extendTailwindMerge<UruzGroup>({
  extend: {
    classGroups: {
      "uruz-display": ["text-display"],
      "uruz-wrap": ["text-balance-safe"],
      "uruz-kicker": ["kicker"],
      "uruz-texture": ["textured", "textured-veil"],
      "uruz-tap": ["tap-target"],
      "uruz-section": ["section", "section-lg"],
      "uruz-thumb": ["pb-thumb-nav"],
      // Les deux profondeurs s'excluent : une carte posée ou une chose qui
      // flotte, jamais les deux empilées.
      "uruz-depth": ["card-depth", "float-depth"],
    },
  },
});

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
