import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Compose des classes en résolvant les conflits Tailwind.
 *
 * `twMerge` est ce qui rend les recettes utilisables : sans lui,
 * `cn(cta.solid, "px-4")` donnerait `px-7 px-4` et la dernière règle du
 * fichier CSS gagnerait, pas la dernière écrite ici. Avec lui, `px-4` remplace
 * bien `px-7` comme on l'attend.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
