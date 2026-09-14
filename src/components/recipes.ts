/**
 * URUZ — recettes de classes
 *
 * Sur le site, ces chaînes sont recopiées à la main dans chaque fichier. Deux
 * conséquences : elles divergent lentement (un `px-7` devient `px-8` à un
 * endroit), et personne ne sait laquelle fait foi.
 *
 * Nommées ici, elles se corrigent une fois pour les deux projets.
 *
 * S'utilisent avec `cn()` pour composer :
 *   <button className={cn(cta.solid, "mt-8 w-full")}>
 */

/* ── Les trois règles non écrites du système ─────────────────────────────────
 *
 * 1. AUCUN ARRONDI. Tout est anguleux, bordure franche. `--radius` vaut 2px
 *    uniquement pour ne pas casser les composants tiers qui l'attendent.
 * 2. LE JAUNE EST RARE. Un bloc plein, un filet, un accent. Jamais un dégradé,
 *    jamais deux fois dans le même champ de vision.
 * 3. LA MICRO-TYPO EST EN CAPITALES ESPACÉES. tracking 0.2em à 0.3em, taille
 *    text-xs. C'est la signature.
 */

/** Appels à l'action. */
export const cta = {
  /** L'action principale. Bloc jaune plein. Un seul par écran. */
  solid:
    "group inline-flex items-center justify-center gap-3 bg-primary px-7 py-4 " +
    "text-xs font-semibold uppercase tracking-[0.25em] text-primary-foreground " +
    "transition-opacity hover:opacity-90 disabled:opacity-60 " +
    "disabled:cursor-not-allowed tap-target",

  /** Variante plus large et plus lisible, pour les fins de page. */
  solidLarge:
    "group inline-flex items-center justify-center gap-2 bg-primary px-8 py-3.5 " +
    "text-sm font-semibold uppercase tracking-[0.2em] text-primary-foreground " +
    "transition-opacity hover:opacity-90 disabled:opacity-60 tap-target",

  /** Action secondaire. Filet jaune qui se remplit au survol. */
  outline:
    "group inline-flex items-center justify-center gap-3 border border-primary " +
    "px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.25em] text-primary " +
    "transition-colors hover:bg-primary hover:text-primary-foreground tap-target",

  /** Action tertiaire, discrète. Filet neutre. */
  quiet:
    "inline-flex items-center justify-center gap-3 border border-border px-7 py-4 " +
    "text-xs font-semibold uppercase tracking-[0.25em] text-foreground " +
    "transition-colors hover:border-primary hover:text-primary tap-target",

  /** Compact, pour une barre de navigation. */
  compact:
    "inline-flex items-center gap-2 bg-primary px-4 py-2.5 text-xs font-semibold " +
    "uppercase tracking-[0.2em] text-primary-foreground transition-opacity " +
    "hover:opacity-90 tap-target",
} as const;

/** La flèche qui glisse au survol, dans un CTA `group`. */
export const ctaArrow = "transition-transform group-hover:translate-x-1";

/** Conteneurs et rythme vertical. */
export const layout = {
  /** Le conteneur standard. */
  container: "mx-auto max-w-7xl px-5 md:px-8",
  /** Conteneur avec son rythme vertical, le cas le plus fréquent. */
  section: "mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28",
  /** Rythme resserré. */
  sectionTight: "mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24",
  /** Colonne de lecture, pour du texte suivi. */
  prose: "mx-auto max-w-3xl px-5 md:px-8",
  /** Colonne étroite centrée, pour une fin de page. */
  narrow: "mx-auto max-w-4xl px-5 text-center md:px-8",
} as const;

/**
 * La grille à filets.
 *
 * L'astuce : le parent prend la couleur de bordure EN FOND, les enfants ont le
 * fond de la page, et l'écart d'un pixel laisse voir le parent. On obtient des
 * séparateurs parfaits d'un pixel sans gérer quelle cellule porte quelle
 * bordure. Les enfants doivent impérativement porter `cell`.
 */
export const hairlineGrid = {
  two: "grid gap-px border border-border bg-border md:grid-cols-2",
  three: "grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3",
  four:
    "grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4",
  /** À poser sur CHAQUE enfant, sans quoi la grille vire au bloc plein. */
  cell: "bg-background p-6 md:p-8",
} as const;

/** Surfaces. */
export const surface = {
  /** Carte standard. */
  card: "border border-border bg-surface",
  /** Carte avec la texture métal. */
  cardTextured: "border border-border bg-surface textured",
  /** Carte cliquable : l'image grandit et s'éclaircit au survol. */
  cardInteractive:
    "group relative block overflow-hidden border border-border bg-surface " +
    "transition-colors hover:border-primary/40",
  /** Voile dégradé sur une image, pour que le texte reste lisible dessus. */
  imageScrim:
    "pointer-events-none absolute inset-0 bg-gradient-to-t " +
    "from-background via-background/40 to-transparent",
} as const;

/** Échelle typographique. Toujours combinée avec `text-display`. */
export const heading = {
  h1: "text-display text-balance-safe text-4xl sm:text-5xl md:text-6xl lg:text-7xl",
  h1Page: "text-display text-balance-safe text-3xl sm:text-4xl md:text-5xl",
  h2: "text-display text-balance-safe text-3xl md:text-5xl",
  h3: "text-display text-balance-safe text-xl sm:text-2xl",
  h4: "text-display text-balance-safe text-lg sm:text-xl",
  /** Micro-titre en jaune, pour une section dense. */
  micro: "text-xs font-semibold uppercase tracking-[0.25em] text-primary",
  /** Micro-titre neutre. */
  microMuted:
    "text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground",
} as const;

/** Texte courant. */
export const body = {
  lead: "text-balance-safe max-w-xl text-base text-muted-foreground md:text-lg",
  base: "text-balance-safe text-base leading-relaxed text-muted-foreground",
  small: "text-balance-safe text-sm leading-relaxed text-muted-foreground",
  /** Une donnée chiffrée qu'on veut voir de loin : une charge, un compteur. */
  figure: "text-3xl font-bold text-primary md:text-5xl",
  figureLabel:
    "mt-2 text-[0.65rem] uppercase tracking-[0.18em] text-muted-foreground md:text-xs",
} as const;

/** Formulaires. */
export const field = {
  label:
    "text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground",
  /** `text-base` et non `text-sm` : en dessous de 16px, iOS zoome tout seul
   *  quand le champ prend le focus, ce qui décale la page entière. */
  input:
    "w-full border border-border bg-transparent px-4 py-3 text-base text-foreground " +
    "outline-none transition-colors placeholder:text-muted-foreground/60 " +
    "focus:border-primary disabled:opacity-50 tap-target",
  error: "mt-2 block text-sm text-destructive",
  errorBanner:
    "border border-destructive/50 px-4 py-3 text-sm text-destructive",
  successBanner: "border border-success/50 px-4 py-3 text-sm text-success",
} as const;

/**
 * Barre de navigation au pouce, propre à l'app.
 *
 * Elle est en bas et pas en haut parce qu'un athlète tient son téléphone d'une
 * main, souvent debout entre deux séries. Le haut de l'écran est hors de portée
 * du pouce sur un téléphone moderne.
 *
 * Le `env(safe-area-inset-bottom)` évite que la barre passe sous la barre
 * d'accueil des iPhone récents.
 */
export const thumbNav = {
  bar:
    "fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 " +
    "textured backdrop-blur pb-[env(safe-area-inset-bottom)] md:hidden",
  list: "mx-auto flex max-w-lg items-stretch justify-around",
  item:
    "flex flex-1 flex-col items-center justify-center gap-1 py-2.5 " +
    "text-[0.6rem] font-semibold uppercase tracking-[0.15em] tap-target",
  itemActive: "text-primary",
  itemIdle: "text-muted-foreground",
} as const;

/** Pastilles d'état. */
export const badge = {
  base:
    "inline-flex items-center gap-1.5 border px-2.5 py-1 text-[0.65rem] " +
    "font-semibold uppercase tracking-[0.15em]",
  done: "border-success/40 text-success",
  pending: "border-border text-muted-foreground",
  late: "border-destructive/50 text-destructive",
  accent: "border-primary/40 text-primary",
} as const;

/** Le losange jaune qui sert de puce dans toute l'identité. */
export const brandBullet = "h-1.5 w-1.5 rotate-45 bg-primary shrink-0";
