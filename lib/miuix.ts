/**
 * Miuix — Xiaomi's HyperOS design language, transcribed from the Compose library
 * `top.yukonga.miuix.kmp` v0.9.4 (Apache-2.0). That library is the reference implementation the
 * canvas' "Miuix" design axis is drawn from; every number below is read off it rather than
 * eyeballed, and each one carries the `file:line` it came from.
 *
 * Sources, all under `commonMain/top/yukonga/miuix/kmp` of `miuix-ui-android-0.9.4-sources.jar`
 * (a local copy lives at `/root/miuix-src`), plus the `miuix-squircle` artifact for the corner:
 *   theme/Colors.kt:341 lightColorScheme, :451 darkColorScheme
 *   theme/TextStyles.kt:145-231
 *   squircle/SquirclePath.kt:17-30 and :58-81
 *   basic/Button.kt:158,164,169,174   basic/IconButton.kt:84,89,94
 *   basic/FloatingActionButton.kt:39,69,72,75   basic/Card.kt:190
 *   basic/Switch.kt:87,143,156   basic/NavigationBar.kt:442,445,448
 *   basic/TopAppBar.kt:400,406   basic/SearchBar.kt:104,318   basic/Slider.kt:1352
 *   basic/TabRow.kt:511,516,521   basic/Component.kt:161   basic/Snackbar.kt:497
 *   layout/DialogContentLayout.kt:457   layout/BottomSheetContentLayout.kt:878
 *   utils/PressFeedback.kt:32   utils/MiuixIndication.kt:25-28   anim/MiuixEasing.kt:19-30
 *
 * Only types come from `./tokens`, and only as types, so this module adds no run-time import
 * cycle: `tokens` imports this file, this file imports nothing from it at run time.
 */
import type { Kind, Palette } from "./tokens";

/* ------------------------------------------------------------------ colour */

/**
 * `lightColorScheme()` with every default left alone (theme/Colors.kt:341-394).
 *
 * A handful of roles are filled from a Miuix token of a *different* name, because m3e-canvas asks
 * a role a question Miuix does not, or asks it with a different expectation. Each swap is called
 * out below; no value is invented and nothing else is moved.
 *
 * Miuix names 53 tokens; the ones with no m3e-canvas counterpart (the `disabled*` family,
 * `windowDimming`, `slider*`, the per-container `on*` pairs) are legitimately unused rather than
 * dropped by oversight.
 */
export const MIUIX_LIGHT: Palette = {
  key: "miuix",
  label: "Miuix",
  /** the seed Miuix ships as `primary` */
  seed: "#3482FF",
  primary: "#3482FF",
  onPrimary: "#FFFFFF",
  primaryContainer: "#5D9BFF",
  onPrimaryContainer: "#FFFFFF",
  /** `onPrimaryVariant` — the pale blue Miuix prints on a primary-washed ground */
  inversePrimary: "#AECDFF",
  /** `secondary` — also the unselected switch track (Switch.kt:230-238) */
  secondary: "#E6E6E6",
  /** `secondaryVariant` — a Miuix tonal button's fill (Button.kt:180) */
  secondaryContainer: "#F0F0F0",
  /** `onSecondaryVariant` (Button.kt:181). NOT Miuix's `onSecondaryContainer`, which is #A9A9A9 —
   *  that is a *muted* foreground and would be illegible as a selected chip's label. */
  onSecondaryContainer: "#303030",
  tertiaryContainer: "#EAF2FF",
  onTertiaryContainer: "#3482FF",
  /** `surface` — the page grey; a Miuix card sits white on top of it */
  surface: "#F7F7F7",
  /** `surfaceContainer` — the card fill (Card.kt:202) */
  surfaceContainerLow: "#FFFFFF",
  surfaceContainer: "#FFFFFF",
  surfaceContainerHigh: "#E8E8E8",
  surfaceContainerHighest: "#E8E8E8",
  onSurface: "#000000",
  /** `onSurfaceVariantSummary` — HyperOS secondary text is a 60%-alpha black, and the library
   *  splits what M3 calls `onSurfaceVariant` into three alphas (Summary / Actions /
   *  onSurfaceSecondary). This is the Summary one. */
  onSurfaceVariant: "rgba(0, 0, 0, 0.6)",
  outline: "#D9D9D9",
  /** `dividerLine` (Divider.kt:76) — Miuix's hairlines use this, not `outline` */
  outlineVariant: "#E0E0E0",
  /** Miuix has no `inverse*` pair at all; its dark surface stands in, so a snackbar inverts right */
  inverseSurface: "#000000",
  inverseOnSurface: "#FFFFFF",
  error: "#E94634",
  onError: "#FFFFFF",
  errorContainer: "#FDF6F4",
  onErrorContainer: "#410002",
};

/** `darkColorScheme()` with every default left alone (theme/Colors.kt:451-504). Miuix does not
 *  derive dark from light — it is a second hand-written palette — so these are read, not computed. */
export const MIUIX_DARK: Palette = {
  key: "miuix",
  label: "Miuix",
  seed: "#277AF7",
  primary: "#277AF7",
  onPrimary: "#FFFFFF",
  primaryContainer: "#338FE4",
  onPrimaryContainer: "#FFFFFF",
  inversePrimary: "#99C7F1",
  secondary: "#505050",
  secondaryContainer: "#434343",
  onSecondaryContainer: "#D9D9D9",
  tertiaryContainer: "#2B3B54",
  onTertiaryContainer: "#4788FF",
  surface: "#000000",
  surfaceContainerLow: "#242424",
  surfaceContainer: "#242424",
  surfaceContainerHigh: "#2D2D2D",
  surfaceContainerHighest: "#2D2D2D",
  onSurface: "#F2F2F2",
  onSurfaceVariant: "rgba(255, 255, 255, 0.5)",
  outline: "#404040",
  outlineVariant: "#393939",
  inverseSurface: "#F2F2F2",
  inverseOnSurface: "#000000",
  error: "#F12522",
  onError: "#FFFFFF",
  errorContainer: "#2E0603",
  onErrorContainer: "#FFDAD6",
};

/* -------------------------------------------------------------- typography */

/**
 * The HyperOS type scale, in sp, under Miuix's own style names (theme/TextStyles.kt:145-231).
 *
 * Two things make it read differently from M3. It is *compressed*: the top is 32 sp where M3
 * reaches 57, and the body sits at 17 rather than 14. And it is *flat*: Miuix declares 14 styles
 * but only one weight (bold `subtitle`), one line height (`paragraph`, 1.2em) and no letter
 * spacing or font family anywhere in the file.
 */
/** Every colour role the canvas can name, minus the three fields a palette carries that are not
 *  colours. Spelled out so a role added to `Palette` cannot be left unmapped without a type error. */
export type PaletteRole = Exclude<keyof Palette, "key" | "label" | "seed">;

/**
 * Which Miuix token carries each role the canvas names (Colors.kt, 53 tokens).
 *
 * Miuix's scheme is not Material 3's, so a name the canvas uses has to be resolved before it
 * reaches a Compose reader or the result will not compile. Miuix has no `tertiary`, no
 * `onSurfaceVariant`, no `surfaceContainerLow`, no `scrim` and no `inverse*` pair: what M3 folds
 * into one `onSurfaceVariant` is three alpha roles here, separators read `dividerLine` rather
 * than `outline`, and the inverse ground a snackbar stands on is `onSecondaryVariant` with
 * `secondaryVariant` for the text on it (basic/Snackbar.kt:513-514).
 */
export const MIUIX_ROLES: Record<PaletteRole, string> = {
  primary: "primary",
  onPrimary: "onPrimary",
  primaryContainer: "primaryContainer",
  onPrimaryContainer: "onPrimaryContainer",
  /** Miuix prints this pale blue on a primary-washed ground; there is no inverse pair. */
  inversePrimary: "onPrimaryVariant",
  secondary: "secondary",
  /** a tonal button's fill (Button.kt:180). */
  secondaryContainer: "secondaryVariant",
  onSecondaryContainer: "onSecondaryVariant",
  tertiaryContainer: "tertiaryContainer",
  onTertiaryContainer: "onTertiaryContainer",
  surface: "surface",
  /** Miuix has one card ground, so both of M3's container steps land on it. */
  surfaceContainerLow: "surfaceContainer",
  surfaceContainer: "surfaceContainer",
  surfaceContainerHigh: "surfaceContainerHigh",
  surfaceContainerHighest: "surfaceContainerHighest",
  onSurface: "onSurface",
  /** HyperOS secondary text is a 60%-alpha black; Miuix splits M3's role into three alphas. */
  onSurfaceVariant: "onSurfaceVariantSummary",
  outline: "outline",
  /** hairlines (Divider.kt:76). */
  outlineVariant: "dividerLine",
  inverseSurface: "onSecondaryVariant",
  inverseOnSurface: "secondaryVariant",
  error: "error",
  onError: "onError",
  errorContainer: "errorContainer",
  onErrorContainer: "onErrorContainer",
};

export const MIUIX_TYPE = {
  /** :211 — the largest title, used for a large app bar (TopAppBar.kt:763) */
  title1: 32,
  /** :217 */
  title2: 24,
  /** :223 — a collapsed app-bar title (TopAppBar.kt:732) */
  title3: 20,
  /** :229 */
  title4: 18,
  /** :146 `Main` — standard body */
  main: 17,
  /** :151 `Paragraph` — the only style Miuix gives an explicit line height, 1.2em */
  paragraph: 17,
  /** :156 — a TabRow label (TabRow.kt:389) */
  body1: 16,
  /** :161 — a summary under a title (TopAppBar.kt:770) */
  body2: 14,
  /** :171 — a button label, body-sized rather than a size down */
  button: 17,
  /** :176 `Footnote1` */
  footnote1: 13,
  /** :186 `Footnote2` — the smallest */
  footnote2: 11,
  /** :166 `Headline1` */
  headline1: 17,
  /** :191 `Headline2` */
  headline2: 16,
  /** :201 `Subtitle` — the one bold style */
  subtitle: 14,
  /**
   * Not part of `TextStyles`: the bottom bar hardcodes its own label size
   * (`NavigationBarDefaults.LabelFontSize = 12.sp`, NavigationBar.kt:448), and a rail uses 12 sp
   * collapsed / 16 sp expanded (NavigationRail.kt:624,627). Kept here so the canvas quotes one
   * table, with the exception stated rather than hidden.
   */
  navLabel: 12,
  navRailExpandedLabel: 16,
};

/**
 * Miuix sets **no** `FontFamily` anywhere in `TextStyles.kt` — it asks the platform for the system
 * face, which on a HyperOS device is MiSans. The canvas runs in a browser with no MiSans, so the
 * stack below reproduces what that platform default resolves to and degrades to the system UI
 * font. It is a faithful stand-in for "the platform font", not a face the library names.
 */
export const MIUIX_FONT_FAMILY = "'MiSans VF', MiSans, 'HarmonyOS Sans SC', system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif";

/* ------------------------------------------------------------------ layout */

/** `Component`'s InsideMargin is 16dp and its `heightIn(min = 56.dp)` (basic/Component.kt:161),
 *  while `SmallTitleDefaults.InsideMargin` and `TopAppBarDefaults.TitlePadding` are wider still
 *  (28 / 26 dp). HyperOS keeps a roomier page margin than M3's 16dp, so a Miuix screen holds a
 *  little less per row than an M3 one. */
export const MIUIX_PAGE_MARGIN = 28;

/* ---------------------------------------------------------------- squircle */

/**
 * Miuix draws boxes with a *squircle* — continuous curvature rather than a circular arc — and in
 * 0.9.4 that is the **default**, not an option: 16 source files apply it, and a plain
 * `RoundedCornerShape` appears only on the fallback path taken when `LocalSquircleEnabled` is
 * false or the runtime shader is unavailable (squircle/LocalSquircleEnabled.kt:17-27).
 *
 * `Extension` inflates the corner tile to 1.1x and `SQUIRCLE_CONTROL` places the cubic handles
 * (squircle/SquirclePath.kt:17-30).
 */
export const SQUIRCLE_EXTENSION = 1.1;
export const SQUIRCLE_CONTROL = 0.643;

/**
 * The silhouette `Path.addSquircleRect` appends, as an SVG path over a `w x h` box
 * (squircle/SquirclePath.kt:58-81).
 *
 * The original computes `tile = (cornerRadius * extension).coerceAtMost(min(w,h)/2)` and then, at
 * :81, a handle offset of `tile * (1 - SQUIRCLE_CONTROL)` = `tile * 0.357` — that is what makes the
 * corner continuous instead of a quarter-circle (whose handle would sit at `r * 0.552`). Both
 * clamps are reproduced here, so an over-rounded part degrades exactly as it does at run time.
 */
export function squirclePath(w: number, h: number, r: number): string {
  if (!(w > 0) || !(h > 0)) return "";
  const tile = Math.max(0, r * Math.min(Math.max(SQUIRCLE_EXTENSION, 1), 2));
  const t = Math.min(tile, Math.min(w, h) / 2);
  if (t <= 0) return `M 0 0 H ${w} V ${h} H 0 Z`;
  const c = t * (1 - SQUIRCLE_CONTROL);
  const n = (v: number) => Number(v.toFixed(2));
  return [
    `M ${n(t)} 0`,
    `H ${n(w - t)}`,
    `C ${n(w - c)} 0 ${n(w)} ${n(c)} ${n(w)} ${n(t)}`,
    `V ${n(h - t)}`,
    `C ${n(w)} ${n(h - c)} ${n(w - c)} ${n(h)} ${n(w - t)} ${n(h)}`,
    `H ${n(t)}`,
    `C ${n(c)} ${n(h)} 0 ${n(h - c)} 0 ${n(h - t)}`,
    `V ${n(t)}`,
    `C 0 ${n(c)} ${n(c)} 0 ${n(t)} 0`,
    "Z",
  ].join(" ");
}

/**
 * A CSS `clip-path` carrying the squircle, or `undefined` when `border-radius` has to do.
 *
 * Only an all-equal corner set can be expressed: the magnet tweens a connected run's four corners
 * independently and one path cannot follow that. A zero radius is a rectangle already, so it is
 * left to `border-radius` too.
 */
export function squircleClip(w: number, h: number, radii: { tl: number; tr: number; bl: number; br: number }): string | undefined {
  const { tl, tr, bl, br } = radii;
  if (tl <= 0 || tl !== tr || tl !== bl || tl !== br) return undefined;
  if (!(w > 0) || !(h > 0)) return undefined;
  /* A capsule or a circle is what the library asks for with `CircleShape` — the FAB
     (basic/FloatingActionButton.kt:39) and the search bar (basic/SearchBar.kt:141). Those are
     already exact in `border-radius`, so the squircle is only drawn where Compose would take a
     real rounded-corner shape. */
  if (tl >= Math.min(w, h) / 2) return undefined;
  return `path("${squirclePath(w, h, tl)}")`;
}

/* --------------------------------------------------------------- component */

export type MiuixMetric = {
  /** a width the design fixes, where the panel does not size the part */
  w?: number;
  /** a height the design fixes */
  h?: number;
  /**
   * The corner radius Miuix draws, before the document's shape scale multiplies it. Left off
   * wherever Miuix derives the radius from the part's own size (icon buttons, sliders, progress).
   */
  radius?: number;
  /** the horizontal inset the part keeps inside its box */
  padX?: number;
  /** the label size, from `MIUIX_TYPE` */
  font?: number;
  /**
   * The system window inset the canvas draws *in addition* to this height: a status bar above an
   * app bar, a gesture bar below a navigation bar. Miuix measures the bar alone, so the canvas
   * adds the inset the same way the Material 3 path does.
   */
  inset?: "status" | "nav";
};

/**
 * Miuix's own metrics for the parts the canvas draws. Anything absent keeps m3e-canvas's M3
 * default, so a kind Miuix has no opinion about (a carousel, a date picker) is left unchanged
 * rather than invented.
 */
/**
 * What each part is made of under Miuix, straight from the library's `*Defaults` objects.
 *
 * Wired to a renderer today: `w`, `h` and `inset` through `sizeOf`, and `radius` through
 * `baseRadii` — those are the four the canvas lays parts out with, and they are what makes a
 * Miuix screen measure differently from a Material 3 one.
 *
 * Not yet wired: `padX` and `font`. A part's inside padding and its label size still come from
 * the Material 3 formulas in `lib/tokens.ts`, so they are the next thing to hook up on the way
 * to covering the remaining parts. They are recorded here, with their sources, rather than
 * dropped, because re-deriving them means re-reading the jar.
 */
export const MIUIX_METRICS: Partial<Record<Kind, MiuixMetric>> = {
  /** ButtonDefaults: MinWidth 58, MinHeight 40, CornerRadius 16, InsideMargin 16x13 (Button.kt:158,164,169,174) */
  button: { h: 40, radius: 16, padX: 16, font: MIUIX_TYPE.button },
  /** IconButtonDefaults: MinWidth 40, MinHeight 40, CornerRadius 40 — a capsule, so the radius
   *  tracks the height rather than a fixed corner (IconButton.kt:84,89,94) */
  iconButton: { w: 40, h: 40, radius: 40 }, // IconButtonDefaults.CornerRadius = 40.dp (IconButton.kt:94); on the 40dp box it clamps to a circle, the same way in Compose and in CSS
  /** FloatingActionButtonDefaults: MinWidth/MinHeight 60 and the shape default is `CircleShape`
   *  (FloatingActionButton.kt:39,69,72), so the radius is half the size — 30dp. */
  fab: { w: 60, h: 60, radius: 30 },
  /** CardDefaults.CornerRadius 16, InsideMargin 0, and no shadow parameter at all — a Miuix card
   *  is flat where an M3 one is elevated (Card.kt:190,195) */
  card: { radius: 16 },
  /** a 49x28 track holding a 20dp thumb, both capsules; the thumb travels x 4->25dp,
   *  `spring(dampingRatio = 0.7f, stiffness = 987f)` (Switch.kt:87,143,156) */
  switch: { w: 49, h: 28, radius: 14 },
  /** TopAppBarDefaults: CollapsedHeight 52, TitlePadding 26 (TopAppBar.kt:400,406) */
  topAppBar: { h: 52, padX: 26, font: MIUIX_TYPE.title3, inset: "status" },
  /** NavigationBarDefaults: ItemHeight 64, IconSize 26, LabelFontSize 12; items are `weight(1f)`
   *  so they are equal-width, and selection is a colour tint plus a bold label — there is no pill
   *  indicator the way M3 has one (NavigationBar.kt:442,445,448) */
  bottomNav: { h: 64, padX: 12, font: MIUIX_TYPE.navLabel, inset: "nav" },
  /** SearchBarDefaults: InputFieldMinHeight 45, InputFieldFontSize 17 (SearchBar.kt:318,321).
   *  There is no corner token because the field is a *capsule*, not a rounded rect: it clips to
   *  `capsuleShape = CircleShape` (SearchBar.kt:104 and the local at :141), hence h/2 = 22.5. */
  searchBar: { h: 45, radius: 22.5, padX: 16, font: MIUIX_TYPE.main },
  /** SliderDefaults.MinHeight 28 (Slider.kt:1352) */
  slider: { h: 28, radius: 14 }, // the track is clip(CircleShape) (Slider.kt:846,959), so at SliderDefaults.MinHeight 28.dp (Slider.kt:1352) it is a capsule
  /** TabRowDefaults: TabRowHeight 42, TabRowCornerRadius 12, TabMinWidth 76, and the selected
   *  label goes bold (TabRow.kt:511,516,521,384) */
  tabs: { h: 42, radius: 12, padX: 12, font: MIUIX_TYPE.body1 },
  /** a preference row: `heightIn(min = 56.dp)`, a 17sp value and a 14sp summary (Component.kt:161) */
  /* BasicComponent declares no corner of its own (Component.kt): the Card the rows sit in does (CardDefaults.CornerRadius = 16.dp, Card.kt:190). The canvas draws a row free-standing, so it wears the container's corner. */
  listItem: { h: 56, radius: 16, padX: 16, font: MIUIX_TYPE.main },
  /** DialogDefaults.CornerRadius 32 (DialogContentLayout.kt:457). On a phone Miuix instead derives
   *  a bottom-anchored sheet's radius from the screen corner, clamped to 32-48dp (:299-306); the
   *  canvas draws the centred desktop-style dialog, so the token applies. */
  dialog: { radius: 32 },
  /** BottomSheetDefaults.cornerRadius 28 (BottomSheetContentLayout.kt:878) */
  bottomSheet: { radius: 28 },
  /** SnackbarDefaults.CornerRadius 16 (Snackbar.kt:497); its action pill is a separate 50dp */
  snackbar: { radius: 16, font: MIUIX_TYPE.body2 },
};

/** a metric, or nothing when Miuix does not fix one for the kind */
export const miuixMetricOf = (kind: Kind): MiuixMetric | undefined => MIUIX_METRICS[kind];

/* ------------------------------------------------------------------ motion */

/**
 * Miuix's spring factory is `folmeSpring(damping, response)`, which expands to
 * `stiffness = (2pi / response)^2` and `dampingRatio = damping` (anim/MiuixEasing.kt:19-30). The
 * MIUI Folme parameterisation is kept here so call sites can quote the library's own numbers and
 * let the conversion happen in one place. `response` is in seconds; `damping` is the ratio zeta.
 */
export function folmeSpring(damping: number, response: number) {
  const stiffness = Math.pow((2 * Math.PI) / response, 2);
  // framer-motion wants a damping *coefficient*: c = 2*sqrt(k*m)*zeta
  const c = 2 * Math.sqrt(stiffness * 1) * damping;
  return { type: "spring" as const, stiffness: Number(stiffness.toFixed(2)), damping: Number(c.toFixed(2)), mass: 1 };
}

/** the switch thumb's travel, `spring(dampingRatio = 0.7f, stiffness = 987f)` (Switch.kt:87) */
export const MIUIX_SWITCH_SPRING = { type: "spring" as const, stiffness: 987, damping: 44, mass: 1 };

/** Miuix's own press springs: enter `folmeSpring(1.0, 0.2)`, exit `folmeSpring(0.95, 0.35)`
 *  (utils/MiuixIndication.kt:30-31) */
export const MIUIX_PRESS_IN = folmeSpring(1.0, 0.2);
export const MIUIX_PRESS_OUT = folmeSpring(0.95, 0.35);

/**
 * Press feedback is *two* things in Miuix, and neither is M3's 0.97 scale.
 *
 * There is a sink — `sinkAmount` defaults to 0.94, with a `spring(0.8f, 600f)`
 * (utils/PressFeedback.kt:32-33) — and there is an `Indication` overlay: a full-size `drawRect`
 * with no corner radius, tinted `onBackground`, fading in by `PRESS_ALPHA_DELTA = 0.10`
 * (utils/MiuixIndication.kt:25-28, drawn at :130-136). The overlay is why a HyperOS button dims
 * uniformly instead of showing a bounded ripple.
 */
export const MIUIX_PRESS_SCALE = 0.94;
export const MIUIX_PRESS_ALPHA = 0.1;
