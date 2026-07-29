/* @ds-bundle: {"format":4,"namespace":"PetitComitDesignSystem_f0a37c","components":[{"name":"InfoBlock","sourcePath":"components/actions/InfoBlock.jsx"},{"name":"ScrollTopButton","sourcePath":"components/actions/ScrollTopButton.jsx"},{"name":"WhatsappFab","sourcePath":"components/actions/WhatsappFab.jsx"},{"name":"AmberCard","sourcePath":"components/cards/AmberCard.jsx"},{"name":"PhotoCard","sourcePath":"components/cards/PhotoCard.jsx"},{"name":"TestimonialCard","sourcePath":"components/cards/TestimonialCard.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Divider","sourcePath":"components/core/Divider.jsx"},{"name":"SectionHeading","sourcePath":"components/core/SectionHeading.jsx"},{"name":"StarRating","sourcePath":"components/core/StarRating.jsx"},{"name":"GalleryGrid","sourcePath":"components/layout/GalleryGrid.jsx"},{"name":"HeroSlider","sourcePath":"components/layout/HeroSlider.jsx"},{"name":"PageHero","sourcePath":"components/layout/PageHero.jsx"},{"name":"SiteFooter","sourcePath":"components/layout/SiteFooter.jsx"},{"name":"SiteHeader","sourcePath":"components/layout/SiteHeader.jsx"}],"sourceHashes":{"components/actions/InfoBlock.jsx":"bb37036c4b1b","components/actions/ScrollTopButton.jsx":"bc6353f24681","components/actions/WhatsappFab.jsx":"ebb97d99abd2","components/cards/AmberCard.jsx":"0f7d907480b9","components/cards/PhotoCard.jsx":"c01ccffb6b46","components/cards/TestimonialCard.jsx":"37ad848328f8","components/core/Button.jsx":"20c0e7e89571","components/core/Divider.jsx":"35c5fffc7fac","components/core/SectionHeading.jsx":"34d71cc7dfc6","components/core/StarRating.jsx":"e8ae0fe873da","components/layout/GalleryGrid.jsx":"548cd8a14814","components/layout/HeroSlider.jsx":"dcfcbb733a12","components/layout/PageHero.jsx":"289c15d71cf4","components/layout/SiteFooter.jsx":"1fb1020598c0","components/layout/SiteHeader.jsx":"1028380ffc82","ui_kits/website/CartaScreen.jsx":"e90fe518969b","ui_kits/website/ContactoScreen.jsx":"7cde5bd4ef25","ui_kits/website/GaleriaScreen.jsx":"0f2a01c5c314","ui_kits/website/HomeScreen.jsx":"ce4f89cedc17","ui_kits/website/ServiciosScreen.jsx":"cd18d037d0b3","ui_kits/website/shell.jsx":"e17ba5ce4167"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.PetitComitDesignSystem_f0a37c = window.PetitComitDesignSystem_f0a37c || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/actions/InfoBlock.jsx
try { (() => {
/* Contact page detail block: amber Font Awesome glyph, Oswald label, then
   plain Poppins lines. Intentional addition — the live Contacto page builds
   this from separate heading + text widgets. */
function InfoBlock({
  icon,
  label,
  lines = [],
  tone = 'light',
  align = 'center'
}) {
  const onDark = tone === 'dark';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: align
    }
  }, icon ? /*#__PURE__*/React.createElement("i", {
    className: icon,
    style: {
      fontSize: 27,
      color: 'var(--accent)',
      display: 'block',
      marginBottom: 10
    }
  }) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-eyebrow)',
      fontSize: 'var(--fs-eyebrow)',
      fontWeight: 'var(--fw-medium)',
      letterSpacing: 'var(--ls-eyebrow)',
      color: onDark ? 'var(--pc-white)' : 'var(--text-heading)',
      marginBottom: 12
    }
  }, label), lines.map((line, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-body)',
      lineHeight: 'var(--lh-body)',
      color: onDark ? 'var(--pc-white)' : 'var(--text-body)'
    }
  }, line)));
}
Object.assign(__ds_scope, { InfoBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/InfoBlock.jsx", error: String((e && e.message) || e) }); }

// components/actions/ScrollTopButton.jsx
try { (() => {
/* Amber square scroll-to-top, fixed bottom-right (40/30px), fades in after
   800px of scroll, turns charcoal on hover. Square corners. */
function ScrollTopButton({
  threshold = 800,
  target
}) {
  const [show, setShow] = React.useState(false);
  const [hover, setHover] = React.useState(false);
  React.useEffect(() => {
    const el = target || window;
    const read = () => target ? target.scrollTop : window.scrollY;
    const onScroll = () => setShow(read() > threshold);
    el.addEventListener('scroll', onScroll);
    onScroll();
    return () => el.removeEventListener('scroll', onScroll);
  }, [threshold, target]);
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Volver arriba",
    onClick: () => target ? target.scrollTo({
      top: 0,
      behavior: 'smooth'
    }) : window.scrollTo({
      top: 0,
      behavior: 'smooth'
    }),
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      position: 'fixed',
      right: 40,
      bottom: 30,
      zIndex: 9998,
      padding: 15,
      border: 'none',
      borderRadius: 'var(--radius-none)',
      background: hover ? 'var(--pc-charcoal-600)' : 'var(--accent)',
      color: 'var(--pc-white-pure)',
      fontSize: 14,
      lineHeight: 1,
      cursor: 'pointer',
      opacity: show ? 1 : 0,
      visibility: show ? 'visible' : 'hidden',
      transition: 'all var(--dur-base) var(--ease)'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-chevron-up"
  }));
}
Object.assign(__ds_scope, { ScrollTopButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/ScrollTopButton.jsx", error: String((e && e.message) || e) }); }

// components/actions/WhatsappFab.jsx
try { (() => {
/* The Chaty WhatsApp channel button: 44px green circle, fixed bottom-left
   25px in, with a white tooltip on hover. Present on every page. */
function WhatsappFab({
  phone = '34633419116',
  message = 'Hola, me gustaría reservar una mesa en Petit Comité.',
  tooltip = 'WhatsApp',
  position = 'left'
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      bottom: 'var(--fab-offset)',
      [position]: 'var(--fab-offset)',
      zIndex: 9998,
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      flexDirection: position === 'left' ? 'row' : 'row-reverse'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
    target: "_blank",
    rel: "noreferrer",
    "aria-label": tooltip,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: 'var(--fab-size)',
      height: 'var(--fab-size)',
      borderRadius: 'var(--radius-round)',
      background: 'var(--pc-whatsapp)',
      color: 'var(--pc-white-pure)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 22,
      textDecoration: 'none',
      boxShadow: 'var(--shadow-fab)'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fab fa-whatsapp"
  })), tooltip ? /*#__PURE__*/React.createElement("span", {
    style: {
      background: 'var(--pc-white-pure)',
      color: '#202020',
      fontFamily: 'var(--font-body)',
      fontSize: 12,
      padding: '6px 10px',
      whiteSpace: 'nowrap',
      opacity: hover ? 1 : 0,
      transition: 'opacity var(--dur-base) var(--ease)',
      pointerEvents: 'none'
    }
  }, tooltip) : null);
}
Object.assign(__ds_scope, { WhatsappFab });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/WhatsappFab.jsx", error: String((e && e.message) || e) }); }

// components/cards/AmberCard.jsx
try { (() => {
/* The amber "reserva / carta" card: photo under a 90% amber wash that flips to
   a charcoal wash on hover. Cormorant 42px title + Poppins 21px light lead. */
function AmberCard({
  image,
  title,
  description,
  action,
  minHeight = 'var(--amber-card-min-height)'
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      position: 'relative',
      overflow: 'hidden'
    }
  }, image ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      backgroundImage: `url("${image}")`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      transition: 'var(--transition-image)',
      transform: hover ? 'var(--image-zoom)' : 'none'
    }
  }) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: hover ? 'var(--overlay-amber-hover)' : 'var(--overlay-amber)',
      transition: 'background-color var(--dur-slow) var(--ease)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 15,
      right: 15,
      bottom: 15,
      left: 15,
      border: 'var(--border-white-strong)',
      opacity: hover ? 1 : 0,
      transition: 'opacity var(--dur-slow) var(--ease)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      minHeight,
      padding: 'var(--space-6)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-display)',
      fontWeight: 'var(--fw-semibold)',
      color: 'var(--pc-white-pure)',
      margin: '0 0 10px'
    }
  }, title), description ? /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-lead)',
      fontWeight: 'var(--fw-light)',
      color: 'var(--pc-white-pure)',
      margin: '0 0 var(--space-6)'
    }
  }, description) : null, action));
}
Object.assign(__ds_scope, { AmberCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/AmberCard.jsx", error: String((e && e.message) || e) }); }

// components/cards/PhotoCard.jsx
try { (() => {
/* Elementor "promo box": full-bleed photo, warm grey overlay that fades out on
   hover while the photo zooms, amber hairline frame revealed on hover, and a
   centred Cormorant title over Poppins copy. */
function PhotoCard({
  image,
  eyebrow,
  title,
  description,
  href,
  minHeight = 'var(--card-min-height)',
  padding = 'var(--space-8)',
  children
}) {
  const [hover, setHover] = React.useState(false);
  const Tag = href ? 'a' : 'div';
  return /*#__PURE__*/React.createElement(Tag, {
    href: href,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      position: 'relative',
      display: 'block',
      overflow: 'hidden',
      borderRadius: 'var(--radius-none)',
      textDecoration: 'none',
      cursor: href ? 'pointer' : 'default'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      backgroundImage: `url("${image}")`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      transform: hover ? 'var(--image-zoom)' : 'none',
      transition: 'var(--transition-image)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: hover ? 'var(--overlay-photo-card-hover)' : 'var(--overlay-photo-card)',
      transition: 'var(--transition-overlay)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 15,
      right: 15,
      bottom: 15,
      left: 15,
      border: 'var(--border-amber)',
      opacity: hover ? 1 : 0,
      transition: 'opacity var(--dur-slowest) var(--ease)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      minHeight,
      padding,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center'
    }
  }, eyebrow ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-eyebrow)',
      fontSize: 'var(--fs-body-sm)',
      letterSpacing: 'var(--ls-eyebrow)',
      color: 'var(--accent)',
      marginBottom: 10
    }
  }, eyebrow) : null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-title)',
      fontWeight: 'var(--fw-bold)',
      lineHeight: 'var(--lh-title)',
      color: 'var(--pc-white)',
      margin: 0
    }
  }, title), description ? /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-body-sm)',
      fontWeight: 'var(--fw-regular)',
      lineHeight: 'var(--lh-body)',
      color: 'var(--pc-white-pure)',
      margin: '14px 0 0',
      maxWidth: 320
    }
  }, description) : null, children ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-6)'
    }
  }, children) : null));
}
Object.assign(__ds_scope, { PhotoCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/PhotoCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Petit Comité button. Three variants seen on the live site:
   - primary  : solid amber, white label, 2px radius (hero slider CTA)
   - ghost    : transparent, 1px amber border, white label (hero secondary)
   - outline  : transparent, 2px white border, white label (amber promo card) */
const base = {
  display: 'inline-block',
  fontFamily: 'var(--font-body)',
  fontSize: 'var(--fs-body-sm)',
  fontWeight: 'var(--fw-regular)',
  lineHeight: 1.4,
  textDecoration: 'none',
  textAlign: 'center',
  cursor: 'pointer',
  borderRadius: 'var(--radius-btn)',
  transitionDuration: 'var(--dur-slowest)',
  transitionProperty: 'background-color, color, border-color',
  transitionTimingFunction: 'var(--ease)'
};
const variants = {
  primary: {
    background: 'var(--accent)',
    color: 'var(--accent-ink)',
    border: 'none',
    padding: 'var(--btn-padding)'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--pc-white-pure)',
    border: 'var(--border-amber)',
    padding: 'var(--btn-padding-ghost)'
  },
  outline: {
    background: 'transparent',
    color: 'var(--pc-white-pure)',
    border: 'var(--border-white-strong)',
    padding: 'var(--btn-padding-outline)',
    transitionDuration: 'var(--dur-fast)'
  }
};
function Button({
  children,
  variant = 'primary',
  href,
  onClick,
  disabled = false,
  icon = null,
  style,
  ...rest
}) {
  const Tag = href && !disabled ? 'a' : 'button';
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    onClick: disabled ? undefined : onClick,
    disabled: Tag === 'button' ? disabled : undefined,
    style: {
      ...base,
      ...variants[variant],
      ...(disabled ? {
        opacity: 0.45,
        pointerEvents: 'none'
      } : null),
      ...style
    }
  }, rest), children, icon ? /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 8,
      fontSize: 13
    }
  }, icon) : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Divider.jsx
try { (() => {
/* The 3px amber rule that sits between the Oswald eyebrow and the Cormorant
   title on every section. 8% of its container, centred. */
function Divider({
  color = 'var(--divider)',
  width = 'var(--divider-width)',
  align = 'center'
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: align,
      paddingTop: 2,
      paddingBottom: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      width,
      borderTop: `var(--border-divider) solid ${color}`,
      verticalAlign: 'middle'
    }
  }));
}
Object.assign(__ds_scope, { Divider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Divider.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionHeading.jsx
try { (() => {
/* Eyebrow (Oswald, tracked) → amber rule → Cormorant title → Poppins body.
   This exact stack repeats on every section of the live site. */
function SectionHeading({
  eyebrow,
  title,
  body,
  tone = 'light',
  align = 'center',
  eyebrowSize = 'var(--fs-eyebrow)',
  children
}) {
  const onAmber = tone === 'amber';
  const onDark = tone === 'dark' || onAmber;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: align
    }
  }, eyebrow ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-eyebrow)',
      fontSize: eyebrowSize,
      fontWeight: 'var(--fw-medium)',
      letterSpacing: 'var(--ls-eyebrow)',
      color: onAmber ? 'var(--pc-white)' : 'var(--text-eyebrow)',
      margin: 0
    }
  }, eyebrow) : null, /*#__PURE__*/React.createElement(__ds_scope.Divider, {
    color: onDark ? 'var(--pc-white)' : 'var(--divider)',
    align: align
  }), title ? /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-display)',
      fontWeight: 'var(--fw-bold)',
      lineHeight: 1.1,
      color: onDark ? 'var(--pc-white)' : 'var(--text-heading)',
      margin: '10px 0 0'
    }
  }, title) : null, body ? /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-body)',
      fontWeight: 'var(--fw-regular)',
      lineHeight: 'var(--lh-body)',
      color: onDark ? 'var(--pc-white)' : 'var(--text-body)',
      margin: '18px 0 0',
      textWrap: 'pretty'
    }
  }, body) : null, children);
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/core/StarRating.jsx
try { (() => {
/* Amber Font Awesome stars, empty stars in #d8d8d8. The live site shows a
   flat "Valorado con 5 de 5" rating in the Opiniones block. */
function StarRating({
  value = 5,
  max = 5,
  size = 22,
  label
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 3,
      justifyContent: 'center'
    }
  }, Array.from({
    length: max
  }).map((_, i) => /*#__PURE__*/React.createElement("i", {
    key: i,
    className: "fas fa-star",
    style: {
      fontSize: size,
      color: i < value ? 'var(--accent)' : 'var(--pc-grey-250)'
    }
  })), label ? /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 10,
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-quote)',
      color: 'var(--text-muted-on-dark)'
    }
  }, label) : null);
}
Object.assign(__ds_scope, { StarRating });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/StarRating.jsx", error: String((e && e.message) || e) }); }

// components/cards/TestimonialCard.jsx
try { (() => {
/* Opiniones card: translucent dark panel (#2F2F2F at 62%), 10px radius —
   the only rounded surface in the kit — amber stars, italic Poppins quote. */
function TestimonialCard({
  quote,
  author,
  date,
  rating = 5
}) {
  return /*#__PURE__*/React.createElement("figure", {
    style: {
      background: 'var(--surface-card-dark)',
      borderRadius: 'var(--radius-card)',
      padding: '35px 30px 10px',
      margin: 0,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.StarRating, {
    value: rating,
    size: 22
  }), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-quote)',
      fontWeight: 'var(--fw-light)',
      fontStyle: 'italic',
      letterSpacing: 'var(--ls-quote)',
      lineHeight: 1.7,
      color: 'var(--pc-white-pure)',
      margin: '14px 0 0',
      padding: '0 25px 25px'
    }
  }, quote), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      paddingBottom: 20
    }
  }, author ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-body-sm)',
      color: 'var(--pc-white-pure)',
      marginBottom: 3
    }
  }, author) : null, date ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-quote)',
      color: 'var(--text-muted-on-dark)'
    }
  }, date) : null));
}
Object.assign(__ds_scope, { TestimonialCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/TestimonialCard.jsx", error: String((e && e.message) || e) }); }

// components/layout/GalleryGrid.jsx
try { (() => {
/* Square-cornered, zero-gutter photo grid — the Galería page. Photos are real
   phone shots of the bar; they get no overlay until hovered. */
function GalleryGrid({
  images = [],
  columns = 4,
  gap = 0,
  onSelect
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: `repeat(${columns}, 1fr)`,
      gap
    }
  }, images.map((img, i) => {
    const src = typeof img === 'string' ? img : img.src;
    const alt = typeof img === 'string' ? '' : img.alt || '';
    return /*#__PURE__*/React.createElement("button", {
      key: src + i,
      type: "button",
      onClick: () => onSelect && onSelect(i),
      style: {
        position: 'relative',
        padding: 0,
        border: 'none',
        background: 'var(--pc-charcoal-900)',
        aspectRatio: '3 / 4',
        overflow: 'hidden',
        cursor: onSelect ? 'pointer' : 'default'
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: src,
      alt: alt,
      style: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        display: 'block',
        transition: 'var(--transition-image), filter var(--dur-base) var(--ease)'
      },
      onMouseEnter: e => {
        e.currentTarget.style.transform = 'var(--image-zoom)';
      },
      onMouseLeave: e => {
        e.currentTarget.style.transform = 'none';
      }
    }));
  }));
}
Object.assign(__ds_scope, { GalleryGrid });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/GalleryGrid.jsx", error: String((e && e.message) || e) }); }

// components/layout/HeroSlider.jsx
try { (() => {
/* Home slider: full-bleed photograph, light charcoal wash (28%), centred
   Cormorant 75px title, Poppins description, amber CTA, amber square arrows
   and 8px dots. Auto-advances; arrows and dots are the only chrome. */
function HeroSlider({
  slides = [],
  interval = 6000,
  height = 'var(--hero-min-height)'
}) {
  const [i, setI] = React.useState(0);
  const n = slides.length;
  React.useEffect(() => {
    if (!n || !interval) return undefined;
    const t = setInterval(() => setI(p => (p + 1) % n), interval);
    return () => clearInterval(t);
  }, [n, interval]);
  if (!n) return null;
  const slide = slides[i];
  const arrow = {
    width: 44,
    height: 44,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'transparent',
    border: 'none',
    color: 'var(--accent)',
    fontSize: 16,
    cursor: 'pointer',
    transitionDuration: 'var(--dur-slowest)'
  };
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      minHeight: height,
      overflow: 'hidden'
    }
  }, slides.map((s, idx) => /*#__PURE__*/React.createElement("div", {
    key: s.image + idx,
    style: {
      position: 'absolute',
      inset: 0,
      backgroundImage: `url("${s.image}")`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      opacity: idx === i ? 1 : 0,
      transition: 'opacity var(--dur-slowest) var(--ease)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--overlay-hero)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      minHeight: height,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Anterior",
    onClick: () => setI(p => (p - 1 + n) % n),
    style: {
      ...arrow,
      position: 'absolute',
      left: 20
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-chevron-left"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1124,
      margin: '0 auto',
      padding: '10px 50px 50px',
      textAlign: 'center'
    }
  }, slide.eyebrow ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-eyebrow)',
      fontSize: 'var(--fs-eyebrow)',
      letterSpacing: 'var(--ls-eyebrow)',
      color: 'var(--pc-white-pure)',
      padding: '5px 10px',
      margin: '0 0 5px'
    }
  }, slide.eyebrow) : null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-hero)',
      fontWeight: 'var(--fw-semibold)',
      lineHeight: 'var(--lh-hero)',
      color: 'var(--pc-white-pure)',
      margin: '0 0 30px'
    }
  }, slide.title), slide.description ? /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-body-sm)',
      color: 'var(--pc-white-pure)',
      padding: '5px 10px',
      margin: '0 auto 30px',
      maxWidth: 640
    }
  }, slide.description) : null, slide.action), /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Siguiente",
    onClick: () => setI(p => (p + 1) % n),
    style: {
      ...arrow,
      position: 'absolute',
      right: 20
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-chevron-right"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: '4%',
      left: 0,
      right: 0,
      display: 'flex',
      justifyContent: 'center',
      gap: 7
    }
  }, slides.map((s, idx) => /*#__PURE__*/React.createElement("button", {
    key: 'dot' + idx,
    type: "button",
    "aria-label": `Ir a ${idx + 1}`,
    onClick: () => setI(idx),
    style: {
      width: 8,
      height: 8,
      padding: 0,
      border: 'none',
      borderRadius: 'var(--radius-round)',
      background: idx === i ? 'var(--accent)' : 'var(--pc-charcoal-600)',
      cursor: 'pointer'
    }
  })))));
}
Object.assign(__ds_scope, { HeroSlider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/HeroSlider.jsx", error: String((e && e.message) || e) }); }

// components/layout/PageHero.jsx
try { (() => {
/* Interior page hero: full-bleed photograph, charcoal overlay, one big
   Cormorant title centred. Used by Servicios / Carta / Galería / Contacto. */
function PageHero({
  image,
  title,
  subtitle,
  height = 520,
  overlay = 'var(--overlay-band)'
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      minHeight: height,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      backgroundImage: `url("${image}")`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: overlay,
      opacity: 0.76
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      textAlign: 'center',
      padding: '0 20px'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-hero)',
      fontWeight: 'var(--fw-semibold)',
      lineHeight: 'var(--lh-hero)',
      color: 'var(--pc-white-pure)',
      margin: 0
    }
  }, title), subtitle ? /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-body-sm)',
      color: 'var(--pc-white-pure)',
      margin: '30px 0 0'
    }
  }, subtitle) : null));
}
Object.assign(__ds_scope, { PageHero });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/PageHero.jsx", error: String((e && e.message) || e) }); }

// components/layout/SiteFooter.jsx
try { (() => {
/* Near-black footer with one line of tiny tracked Poppins and white links. */
function SiteFooter({
  note = 'Política privacidad',
  copyright = '© 2023 Petit Comité',
  credit = 'Design by Amievastudio'
}) {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--surface-footer)',
      padding: '50px 20px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      textAlign: 'center',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-footer)',
      fontWeight: 'var(--fw-light)',
      letterSpacing: 'var(--ls-footer)',
      color: 'var(--pc-white-pure)'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: 'var(--pc-white-pure)',
      textDecoration: 'none'
    }
  }, note), ' ', copyright, " \u2013 ", credit));
}
Object.assign(__ds_scope, { SiteFooter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/SiteFooter.jsx", error: String((e && e.message) || e) }); }

// components/layout/SiteHeader.jsx
try { (() => {
/* Charcoal bar, 100px tall, logo left, uppercase Poppins nav right.
   Inactive items are amber; the current page is white and underlined. */
function SiteHeader({
  logo = 'assets/logo.png',
  items = [],
  active,
  onNavigate,
  sticky = false
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: sticky ? 'sticky' : 'relative',
      top: 0,
      zIndex: 9999,
      background: 'var(--surface-header)',
      minHeight: 'var(--header-height)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      minHeight: 'var(--header-height)',
      padding: '0 20px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNavigate && onNavigate(items[0]?.id);
    },
    style: {
      display: 'block',
      lineHeight: 0
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: logo,
    alt: "Petit Comit\xE9",
    style: {
      height: 130,
      width: 'auto',
      display: 'block'
    }
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--nav-item-gap)'
    }
  }, items.map(item => {
    const isActive = item.id === active;
    return /*#__PURE__*/React.createElement("a", {
      key: item.id,
      href: item.href || '#',
      onClick: e => {
        if (onNavigate) {
          e.preventDefault();
          onNavigate(item.id);
        }
      },
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--fs-nav)',
        fontWeight: 'var(--fw-regular)',
        lineHeight: 'var(--lh-nav)',
        letterSpacing: 'var(--ls-nav)',
        textTransform: 'uppercase',
        padding: 'var(--nav-item-padding)',
        color: isActive ? 'var(--pc-white)' : 'var(--accent)',
        textDecoration: isActive ? 'underline' : 'none',
        textUnderlineOffset: 6,
        transitionDuration: 'var(--dur-base)',
        transitionProperty: 'color'
      }
    }, item.label);
  }))));
}
Object.assign(__ds_scope, { SiteHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/SiteHeader.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/CartaScreen.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  PageHero,
  SectionHeading,
  AmberCard,
  TestimonialCard,
  Button,
  StarRating
} = window.PetitComitDesignSystem_f0a37c;

/* Carta on the live site is a downloadable PDF, not typeset HTML — this screen
   reproduces that: hero, amber card, download row, Opiniones band. */
function CartaScreen() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHero, {
    image: PC_IMG.manos,
    title: "Carta"
  }), /*#__PURE__*/React.createElement(Section, {
    narrow: true
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "CARTA 2026",
    title: "Vinos y c\xF3cteles",
    body: "Nuestra carta se actualiza cada temporada. Desc\xE1rgala en PDF o preg\xFAntanos en barra."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      gap: 14,
      marginTop: 30
    }
  }, /*#__PURE__*/React.createElement(Button, {
    href: "https://www.petitcomitevalencia.com/wp-content/uploads/2025/11/carta-petit-comite-2026.pdf",
    icon: /*#__PURE__*/React.createElement("i", {
      className: "fas fa-file-pdf"
    })
  }, "Descargar carta"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    style: {
      color: 'var(--accent)',
      borderColor: 'var(--accent)'
    },
    href: "https://wa.me/34633419116"
  }, "Preguntar por WhatsApp"))), /*#__PURE__*/React.createElement(Section, {
    padding: "0 20px var(--space-9)"
  }, /*#__PURE__*/React.createElement(AmberCard, {
    image: PC_IMG.barista,
    title: "Prueba los mejores vinos y c\xF3cteles",
    description: "De martes a domingo, desde las 17:00",
    action: /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      href: "https://wa.me/34633419116"
    }, "Reservar mesa")
  })), /*#__PURE__*/React.createElement(Band, {
    image: PC_IMG.camarero,
    minHeight: "520px"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginBottom: 30
    }
  }, /*#__PURE__*/React.createElement(StarRating, {
    value: 5
  }), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-title)',
      fontWeight: 'var(--fw-bold)',
      color: 'var(--pc-white-pure)',
      margin: '14px 0 0'
    }
  }, "Opiniones")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 15
    }
  }, PC_REVIEWS.map(r => /*#__PURE__*/React.createElement(TestimonialCard, _extends({
    key: r.author
  }, r))))));
}
Object.assign(window, {
  CartaScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/CartaScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ContactoScreen.jsx
try { (() => {
const {
  PageHero,
  SectionHeading,
  InfoBlock,
  AmberCard,
  Button
} = window.PetitComitDesignSystem_f0a37c;
function ContactoScreen() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHero, {
    image: PC_IMG.local[4],
    title: "Contacto"
  }), /*#__PURE__*/React.createElement(Section, {
    narrow: true
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "\xA1GRACIAS POR VISITARNOS!",
    title: "Esperamos verte pronto",
    body: "Esperamos que haya tenido una gran experiencia en Petit Comit\xE9. A continuaci\xF3n se muestran nuestros detalles de contacto y horarios."
  })), /*#__PURE__*/React.createElement(Section, {
    padding: "0 20px var(--space-9)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement(InfoBlock, {
    icon: "fas fa-clock",
    label: "Horario",
    lines: ['Martes – Jueves: 17:00 – 01:00', 'Viernes – Sábado: 17:00 – 02:00', 'Domingo: 17:00 – 01:00']
  }), /*#__PURE__*/React.createElement(InfoBlock, {
    icon: "fas fa-map-marker-alt",
    label: "Direcci\xF3n",
    lines: ['C/ de Moratín, 11', '46002 València, Valencia']
  }), /*#__PURE__*/React.createElement(InfoBlock, {
    icon: "fab fa-whatsapp",
    label: "WhatsApp",
    lines: [/*#__PURE__*/React.createElement("a", {
      key: "w",
      href: "https://wa.me/34633419116",
      style: {
        color: 'var(--text-link)',
        textDecoration: 'none'
      }
    }, "+34 633 41 91 16"), 'Reservas y consultas']
  }))), /*#__PURE__*/React.createElement(Section, {
    padding: "0 20px var(--space-9)"
  }, /*#__PURE__*/React.createElement(AmberCard, {
    image: PC_IMG.local[0],
    title: "Reserva por WhatsApp",
    description: "Dinos d\xEDa, hora y cu\xE1ntos sois",
    action: /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      href: "https://wa.me/34633419116"
    }, "Escribir ahora")
  })));
}
Object.assign(window, {
  ContactoScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ContactoScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/GaleriaScreen.jsx
try { (() => {
const {
  PageHero,
  GalleryGrid
} = window.PetitComitDesignSystem_f0a37c;
function GaleriaScreen() {
  const [open, setOpen] = React.useState(null);
  const photos = [...PC_IMG.local, ...PC_IMG.local, ...PC_IMG.local.slice(0, 2)];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHero, {
    image: PC_IMG.local[2],
    title: "Galer\xEDa"
  }), /*#__PURE__*/React.createElement(GalleryGrid, {
    columns: 4,
    images: photos,
    onSelect: setOpen
  }), open !== null ? /*#__PURE__*/React.createElement("div", {
    onClick: () => setOpen(null),
    style: {
      position: 'fixed',
      inset: 0,
      background: 'rgba(35,34,34,.92)',
      zIndex: 10000,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 40,
      cursor: 'zoom-out'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: photos[open],
    alt: "",
    style: {
      maxHeight: '100%',
      maxWidth: '100%',
      display: 'block'
    }
  }), /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Cerrar",
    onClick: () => setOpen(null),
    style: {
      position: 'absolute',
      top: 24,
      right: 24,
      padding: 15,
      background: 'var(--accent)',
      color: '#fff',
      border: 'none',
      fontSize: 14,
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-times"
  }))) : null);
}
Object.assign(window, {
  GaleriaScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/GaleriaScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HomeScreen.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  HeroSlider,
  SectionHeading,
  PhotoCard,
  AmberCard,
  TestimonialCard,
  GalleryGrid,
  Button,
  StarRating
} = window.PetitComitDesignSystem_f0a37c;
function HomeScreen({
  setPage
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(HeroSlider, {
    height: "620px",
    slides: [{
      image: PC_IMG.camarero,
      title: 'Let the music play!',
      description: 'Descubre nuestra selección de éxitos de los 80 y 90',
      action: /*#__PURE__*/React.createElement(Button, {
        onClick: () => setPage('carta')
      }, "Ver carta")
    }, {
      image: PC_IMG.manos,
      title: 'Vinos y cócteles',
      description: 'Clásicos bien hechos y alguna sorpresa de la casa',
      action: /*#__PURE__*/React.createElement(Button, {
        onClick: () => setPage('carta')
      }, "Ver carta")
    }, {
      image: PC_IMG.barista,
      title: 'C/ de Moratín, 11',
      description: 'En pleno centro de València, de martes a domingo',
      action: /*#__PURE__*/React.createElement(Button, {
        onClick: () => setPage('contacto')
      }, "C\xF3mo llegar")
    }]
  }), /*#__PURE__*/React.createElement(Section, {
    narrow: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      minHeight: 281,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '40px 30px',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      backgroundImage: `url("${PC_IMG.camarero}")`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--pc-charcoal-900)',
      opacity: 0.55
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--accent)',
      opacity: 'var(--overlay-amber-wash)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    tone: "amber",
    eyebrowSize: "var(--fs-eyebrow-lg)",
    eyebrow: "Let the music play!",
    title: "Descubre nuestra selecci\xF3n de \xE9xitos de los 80 y 90",
    body: "Ven a Petit Comit\xE9 a disfrutar de nuestra selecci\xF3n de \xE9xitos de los 80 y 90. Transp\xF3rtate a otra \xE9poca al ritmo de Cyndi Lauper, Wham, Eurythmics, Hall & Oates, Erasure, Alphaville y mucho m\xE1s!"
  })))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-band)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)'
    }
  }, /*#__PURE__*/React.createElement(PhotoCard, {
    image: PC_IMG.manos,
    title: "C\xF3cteles",
    description: "Cl\xE1sicos de siempre y creaciones de la casa.",
    href: "#",
    padding: "18px"
  }), /*#__PURE__*/React.createElement(PhotoCard, {
    image: PC_IMG.barista,
    title: "Vinos",
    description: "Una carta corta, elegida copa a copa.",
    href: "#",
    padding: "18px"
  }), /*#__PURE__*/React.createElement(PhotoCard, {
    image: PC_IMG.local[3],
    title: "M\xFAsica",
    description: "80 y 90 toda la noche, sin pausa.",
    href: "#",
    padding: "18px"
  }), /*#__PURE__*/React.createElement(PhotoCard, {
    image: PC_IMG.local[1],
    title: "El local",
    description: "Peque\xF1o, c\xE1lido y en el centro de Val\xE8ncia.",
    href: "#",
    padding: "18px"
  }))), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement(AmberCard, {
    image: PC_IMG.barista,
    title: "Prueba los mejores vinos y c\xF3cteles",
    description: "Nuestra carta 2026 ya est\xE1 aqu\xED",
    action: /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      onClick: () => setPage('carta')
    }, "Ver carta")
  })), /*#__PURE__*/React.createElement(Band, {
    image: PC_IMG.local[2]
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    tone: "dark",
    eyebrow: "NUESTRO LOCAL",
    title: "Galer\xEDa",
    body: "Fotos reales de las noches de Petit Comit\xE9."
  })), /*#__PURE__*/React.createElement(GalleryGrid, {
    columns: 4,
    images: PC_IMG.local.slice(0, 4),
    onSelect: () => setPage('galeria')
  }), /*#__PURE__*/React.createElement(Band, {
    image: PC_IMG.camarero,
    minHeight: "560px"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginBottom: 30
    }
  }, /*#__PURE__*/React.createElement(StarRating, {
    value: 5
  }), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-title)',
      fontWeight: 'var(--fw-bold)',
      color: 'var(--pc-white-pure)',
      margin: '14px 0 0'
    }
  }, "Valorado con 5 de 5")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 15
    }
  }, PC_REVIEWS.map(r => /*#__PURE__*/React.createElement(TestimonialCard, _extends({
    key: r.author
  }, r))))));
}
Object.assign(window, {
  HomeScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ServiciosScreen.jsx
try { (() => {
const {
  PageHero,
  SectionHeading,
  PhotoCard
} = window.PetitComitDesignSystem_f0a37c;

/* The live Servicios page carries only its title, so this screen keeps the
   hero and shows the three service tiles with one-word labels. */
function ServiciosScreen() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHero, {
    image: PC_IMG.camarero,
    title: "Servicios"
  }), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "QU\xC9 ENCONTRAR\xC1S",
    title: "Cocteler\xEDa, vinos y m\xFAsica",
    body: "Petit Comit\xE9 es un bar peque\xF1o: barra, buena m\xFAsica y una carta corta bien elegida."
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)'
    }
  }, /*#__PURE__*/React.createElement(PhotoCard, {
    image: PC_IMG.manos,
    title: "Cocteler\xEDa",
    description: "Cl\xE1sicos de siempre y creaciones de la casa."
  }), /*#__PURE__*/React.createElement(PhotoCard, {
    image: PC_IMG.barista,
    title: "Vinos",
    description: "Selecci\xF3n corta, servida por copas."
  }), /*#__PURE__*/React.createElement(PhotoCard, {
    image: PC_IMG.local[3],
    title: "M\xFAsica 80 \xB7 90",
    description: "Cyndi Lauper, Wham, Eurythmics, Erasure\u2026"
  })), /*#__PURE__*/React.createElement(Section, null));
}
Object.assign(window, {
  ServiciosScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ServiciosScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/shell.jsx
try { (() => {
const {
  SiteHeader,
  SiteFooter,
  WhatsappFab,
  ScrollTopButton
} = window.PetitComitDesignSystem_f0a37c;
const PC_NAV = [{
  id: 'home',
  label: 'Home'
}, {
  id: 'servicios',
  label: 'Servicios'
}, {
  id: 'carta',
  label: 'Carta'
}, {
  id: 'galeria',
  label: 'Galería'
}, {
  id: 'contacto',
  label: 'Contacto'
}];
const PC_IMG = {
  barista: '../../assets/img/coctel-barista.jpg',
  camarero: '../../assets/img/camarero-coctel.jpg',
  manos: '../../assets/img/manos-cocteles.jpg',
  local: ['../../assets/img/local-01.jpg', '../../assets/img/local-02.jpg', '../../assets/img/local-03.jpg', '../../assets/img/local-04.jpg', '../../assets/img/local-05.jpg']
};
const PC_REVIEWS = [{
  quote: 'Ambientazo, buena música de los 80 y cócteles de diez. Volveremos.',
  author: 'Marta G.',
  date: 'Mayo 2023'
}, {
  quote: 'Un sitio pequeño y acogedor en el centro. El trato, inmejorable.',
  author: 'Javier R.',
  date: 'Marzo 2023'
}, {
  quote: 'La mejor selección musical de Valencia. Y los vinos, muy bien elegidos.',
  author: 'Lucía P.',
  date: 'Julio 2023'
}];

/* Band = a full-bleed photograph under the kit's grey wash, used to separate
   sections of the home page. */
function Band({
  image,
  children,
  minHeight = 'var(--band-min-height)'
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      minHeight,
      display: 'flex',
      alignItems: 'center',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      backgroundImage: `url("${image}")`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--overlay-band)',
      opacity: 0.76
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: '100%',
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: '60px 20px'
    }
  }, children));
}
function Section({
  children,
  narrow = false,
  padding = 'var(--space-9) 20px'
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: narrow ? 'var(--container-narrow)' : 'var(--container)',
      margin: '0 auto'
    }
  }, children));
}
function SiteChrome({
  page,
  setPage,
  scroller,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-page)'
    }
  }, /*#__PURE__*/React.createElement(SiteHeader, {
    logo: "../../assets/logo.png",
    items: PC_NAV,
    active: page,
    onNavigate: setPage,
    sticky: true
  }), children, /*#__PURE__*/React.createElement(SiteFooter, null), /*#__PURE__*/React.createElement(WhatsappFab, null), /*#__PURE__*/React.createElement(ScrollTopButton, {
    target: scroller,
    threshold: 400
  }));
}
Object.assign(window, {
  PC_NAV,
  PC_IMG,
  PC_REVIEWS,
  Band,
  Section,
  SiteChrome
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/shell.jsx", error: String((e && e.message) || e) }); }

__ds_ns.InfoBlock = __ds_scope.InfoBlock;

__ds_ns.ScrollTopButton = __ds_scope.ScrollTopButton;

__ds_ns.WhatsappFab = __ds_scope.WhatsappFab;

__ds_ns.AmberCard = __ds_scope.AmberCard;

__ds_ns.PhotoCard = __ds_scope.PhotoCard;

__ds_ns.TestimonialCard = __ds_scope.TestimonialCard;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Divider = __ds_scope.Divider;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.StarRating = __ds_scope.StarRating;

__ds_ns.GalleryGrid = __ds_scope.GalleryGrid;

__ds_ns.HeroSlider = __ds_scope.HeroSlider;

__ds_ns.PageHero = __ds_scope.PageHero;

__ds_ns.SiteFooter = __ds_scope.SiteFooter;

__ds_ns.SiteHeader = __ds_scope.SiteHeader;

})();
