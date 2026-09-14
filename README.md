# @uruz/brand

Les jetons, utilitaires et recettes de classes d'Uruz Athletic Factory, partagés
par le site vitrine et l'app de coaching.

Il existe pour une raison simple : le site portait toutes ces valeurs en dur, et
les chaînes de classes y sont recopiées à la main dans chaque fichier. À deux
projets, elles auraient divergé en quelques semaines.

## Installation

```jsonc
// package.json de l'app hôte
{
  "dependencies": {
    "@uruz/brand": "file:../uruz-brand"
  }
}
```

Puis, dans la feuille de style principale :

```css
@import "tailwindcss";
@import "@uruz/brand/brand.css";
```

**L'ordre compte.** Importé avant Tailwind, le bloc `@theme` est ignoré et toutes
les couleurs retombent silencieusement sur les valeurs Tailwind par défaut. Rien
ne signale l'erreur, le site est juste gris.

Charge aussi la police dans le `<head>` :

```html
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100..900;1,100..900&display=swap" />
```

## Les trois règles

**Aucun arrondi.** Tout est anguleux, bordure franche. `--radius` vaut 2px
uniquement pour ne pas casser les composants tiers qui l'attendent, pas pour
être utilisé.

**Le jaune est rare.** Un bloc plein, un filet, un accent. Jamais un dégradé,
jamais deux fois dans le même champ de vision. Sa force vient de sa rareté.

**La micro-typo est en capitales espacées.** `text-xs`, approche de 0.2em à
0.3em. C'est la signature de la marque, plus reconnaissable que la couleur.

## Utilisation

```tsx
import { cn, cta, ctaArrow, layout, heading } from "@uruz/brand";

<section className={layout.section}>
  <p className="kicker">Aujourd'hui</p>
  <h1 className={heading.h1Page}>Séance du jour</h1>

  <button className={cn(cta.solid, "mt-8 w-full")}>
    Commencer
    <ArrowRight size={16} className={ctaArrow} />
  </button>
</section>
```

`cn()` résout les conflits Tailwind : `cn(cta.solid, "px-4")` donne bien `px-4`
et non `px-7 px-4`.

## Ce qu'il y a dedans

| | |
|---|---|
| `tokens.css` | couleurs, rayons, polices. Le bloc `@theme` EST la configuration Tailwind, il n'y a pas de `tailwind.config` |
| `utilities.css` | `text-display`, `kicker`, `section`, `textured`, `tap-target`, plus les garde-fous |
| `brand.css` | point d'entrée, importe les deux et pose la couche de base |
| `recipes.ts` | les chaînes de classes nommées : CTA, grilles, cartes, champs, barre au pouce |
| `assets/` | `metal-scratches.jpg`, la texture. Vraie dépendance binaire, pas un décor optionnel |

## Deux écarts volontaires avec le site

**`--accent` ne vaut plus `--primary`.** Sur le site, les deux sont identiques,
ce qui est une erreur héritée du thème de départ : dans la convention shadcn,
`--accent` est le fond *discret* du survol. Résultat, les boutons `outline` et
`ghost` se remplissent de jaune fluo au lieu du gris attendu. Ici `--accent`
reprend son rôle de gris relevé.

**Ajout de `--success`.** Le site n'en avait pas besoin. Une app qui montre une
séance faite, une série validée ou un paiement passé, si.

## Thème

Un seul, sombre. Uruz n'a pas de mode clair et n'en veut pas : le fond
anthracite et le jaune acide sont l'identité, un mode clair diluerait les deux.

Conséquence pratique : ne jamais définir une couleur uniquement dans un bloc
`@media` ou `[data-theme]`. Tout vit dans `:root`.

## Spécificités mobile

L'app est conçue pour être utilisée debout, d'une main, entre deux séries.

- `tap-target` impose 44px minimum. En dessous, on rate sa cible une fois sur
  trois avec les mains moites.
- `field.input` est en `text-base` et non `text-sm` : sous 16px, iOS zoome tout
  seul à la prise de focus et décale la page entière.
- `thumbNav` est en bas de l'écran, pas en haut. Le haut est hors de portée du
  pouce sur un téléphone moderne.
- `pb-thumb-nav` et `env(safe-area-inset-bottom)` évitent que le contenu passe
  sous la barre ou sous la zone d'accueil des iPhone.
