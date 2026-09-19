/**
 * Le logo gravé en fond de page.
 *
 * Signature visuelle d'Uruz, reprise du site. Elle vit ici et non dupliquée
 * dans chaque projet : c'est le seul moyen qu'elle reste identique partout.
 *
 * L'effet de gravure tient à trois calques superposés du même logo, et
 * l'illusion s'effondre si l'un manque ou si les valeurs bougent :
 *
 *   1. une ombre portée, décalée vers le bas à droite et noircie, qui creuse ;
 *   2. un liseré clair, décalé en sens inverse, qui donne l'arête éclairée ;
 *   3. la face, presque transparente.
 *
 * Les opacités sont volontairement minuscules (3,5 % pour la face). Au-delà,
 * le fond cesse d'être un fond et se met à concurrencer le contenu.
 *
 * Le masque radial fait disparaître le logo avant les bords de l'écran, ce
 * qui évite la découpe nette d'un logo tronqué par la fenêtre.
 *
 * À poser en premier enfant du conteneur de page, le contenu venant ensuite
 * dans un élément en `relative z-10`.
 */
export function BrandWatermark({ src }: { src: string }) {
  const mask = "radial-gradient(closest-side, #000 55%, transparent 100%)";

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 flex items-center justify-center overflow-hidden"
      style={{ maskImage: mask, WebkitMaskImage: mask }}
    >
      <div className="relative w-[115vw] max-w-[900px] sm:w-[90vw] md:w-[75vw] lg:w-[70vw]">
        {/* l'ombre qui creuse */}
        <img
          src={src}
          alt=""
          className="absolute inset-0 h-full w-full translate-x-[3px] translate-y-[3px] grayscale opacity-[0.10] blur-[1.5px] brightness-0"
        />
        {/* l'arête éclairée */}
        <img
          src={src}
          alt=""
          className="absolute inset-0 h-full w-full -translate-x-[2px] -translate-y-[2px] grayscale opacity-[0.055] blur-[0.5px] mix-blend-overlay"
        />
        {/* la face */}
        <img
          src={src}
          alt=""
          className="relative h-full w-full grayscale opacity-[0.035] mix-blend-overlay"
        />
      </div>
    </div>
  );
}
