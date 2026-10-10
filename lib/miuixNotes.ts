import type { Lang } from "./i18n";
import type { Kind } from "./tokens";

/**
 * The per-part style notes for Miuix, in place of the Material 3 ones.
 *
 * `lib/prompt.ts` prints one bullet per kind that the document uses, and prints them from
 * `STYLE_NOTES` — which describes Material 3. Under Miuix every one of those notes would be wrong:
 * a different library, different components, different tokens. So the Miuix versions live here and
 * replace them kind for kind, in the same place in the prompt and in the same shape.
 *
 * Every number below is read off `miuix-ui` 0.9.4 (`basic/*.kt`, `theme/TextStyles.kt`) and the
 * `*Defaults` object it belongs to is named, so an agent can check it rather than guess. Where Miuix
 * has no component for a kind, the note says so and says what to use instead — it never dresses a
 * Material 3 number up as a Miuix one.
 */
export const STYLE_NOTES_MIUIX: Record<Lang, Partial<Record<Kind, string>>> = {
  ja: {
    button:
      "ボタン: Miuix の `Button`（塗りつぶし）／`TextButton`（文字のみ）を使い、`ButtonDefaults` の MinWidth 58dp・MinHeight 40dp・CornerRadius 16dp・InsideMargin 16×13dp にそのまま従う。高さやパディングを手で書かない。ラベルは 17sp（`TextStyles.button`）。トーナル／アウトラインの組み込みバリアントは無いので、`ButtonDefaults.buttonColors()` に `secondary`／`outline` を渡して作る。連結ボタングループという表現は無い。",
    iconButton:
      "アイコンボタン: `IconButton` を使う。40dp の円で、`IconButtonDefaults.CornerRadius 40dp` が高さと一致して丸くなる。連結したアイコンボタン群という表現は無い。",
    fab: "FAB: `FloatingActionButton` のみ。60dp の円（`FloatingActionButtonDefaults` の MinWidth/MinHeight 60dp、形状は `CircleShape`）で、影は 4dp。Miuix に拡張 FAB は無い。",
    extendedFab:
      "拡張 FAB: Miuix に該当部品は無い。ラベル付きの浮遊アクションが要るなら `Button`（MinHeight 40dp）を `Surface` に載せるか、`FloatingToolbar` にまとめる。M3 の拡張 FAB の寸法は使わない。",
    splitButton:
      "スプリットボタン: Miuix に該当部品は無い。`Button` の隣に `IconButton` を並べるか、メニュー側を `ListPopup` にする。M3 のセグメント構成は再現しない。",
    fabMenu:
      "FAB メニュー: `FloatingActionButton` から `ListPopup`（`ListPopupColumn`）を開く。開いたメニューの行は `DropdownDefaults` の MinHeight 56dp・MinWidth 200dp・InsideHorizontalPadding 20dp、角は 16dp。行は上ではなく下に展開する。",
    chip:
      "チップ: Miuix にチップは無い。`Button`（MinHeight 40dp・CornerRadius 16dp）か、選択状態なら `TextButton` を使う。M3 の 32dp・角丸 8dp は使わない。",
    topAppBar:
      "トップアプリバー: `SmallTopAppBar`（タイトル 1 行）と `TopAppBar`（`largeTitle` と `subtitle` を取る大型形）を使う。畳んだ高さは `TopAppBarDefaults.CollapsedHeight` 52dp、タイトルの左右余白は `TitlePadding` 26dp、ナビゲーション／アクションアイコンの余白は各 16dp、題字は 20sp（`TextStyles.title3`）。背景は `surface`、題字は `onSurface`、サブタイトルは `onSurfaceVariantSummary`。",
    bottomNav:
      "ナビゲーションバー: 貼り付く通常版は `NavigationBar` と `RowScope.NavigationBarItem`、`NavigationBarDefaults` の ItemHeight 64dp・IconSize 26dp・LabelFontSize 12sp。項目は `weight(1f)` で等幅。選択は色の変化とラベルの太字だけで、M3 のようなピル型インジケータは無い。",
    navRail:
      "ナビゲーションレール: `NavigationRail` と `NavigationRailItem`。`NavigationRailDefaults` の MinWidth 80dp（展開時 ExpandedWidth 240dp）、VerticalPadding 24dp、IconSize 28dp、IconTextSpacing 4dp、ItemVerticalPadding 12dp、LabelFontSize 12sp（展開時 16sp）、展開項目の角は 16dp。本文はレールの右に置く。",
    toolbar:
      "フローティングツールバー: `FloatingToolbar`。`FloatingToolbarDefaults` の CornerRadius 50dp（高さと一致して丸くなる）、OutSidePadding 12×8dp。Miuix は高さのトークンを持たないので 40dp のアイコンボタンと 8dp の上下余白で組む。中のアイコンは 24dp。",
    tabs:
      "タブ: `TabRow`（輪郭付きなら `TabRowWithContour`）とその `TabRowItem`。`TabRowDefaults` の TabRowHeight 42dp・TabRowCornerRadius 12dp・TabMinWidth 76dp。選択中のラベルは太字になり、色は `primary` 側へ移る。M3 の 3dp インジケータは無い。",
    searchBar:
      "検索バー: `InputField` を `SearchBar` で包む。入力欄の最小高さは `SearchBarDefaults.InputFieldMinHeight` 45dp、文字は 17sp（`TextStyles.main`）。角丸トークンは無く、`InputField` は `CircleShape`（＝高さの半分 22.5dp のカプセル）で切られる。背景は `surfaceContainerHigh`。",
    card:
      "カード: `Card`。`CardDefaults.CornerRadius` 16dp、InsideMargin 0、影のパラメータは無く平ら（M3 のような elevation は無い）。背景は `surfaceContainerHigh`。内側余白はカード自身ではなく中身側で取る。",
    listItem:
      "リスト項目: `BasicComponent`（preference の行）を使う。`heightIn(min = 56.dp)` で、値は 17sp・要約は 14sp。`BasicComponent` 自身は角を持たず、行を包む `Card` の 16dp が角になる。区切りは `HorizontalDivider`。",
    box:
      "ボックス: `Surface`。`SurfaceDefaults.Shape` は `RectangleShape`、影は 0。背景色だけを指定する入れ物として使い、独自の形や挙動は足さない。",
    bottomSheet:
      "ボトムシート: `OverlayBottomSheet`（`Scaffold` の祖先が要る）または `WindowBottomSheet`。`BottomSheetDefaults.cornerRadius` 28dp。スマートフォンでは角は画面の角からも導かれ 32〜48dp に収まる。",
    dialog:
      "ダイアログ: `OverlayDialog`（`Scaffold` の祖先が要る）または `WindowDialog`。`DialogDefaults.CornerRadius` 32dp。",
    snackbar:
      "スナックバー: `Snackbar` を `SnackbarHost` に載せて出す。`SnackbarDefaults.CornerRadius` 16dp、ラベルは 14sp。操作のピルは別部品で 50dp。",
    textField:
      "テキスト入力: `TextField`。`TextFieldDefaults` の CornerRadius 16dp・InsideMargin 16×16dp・BorderWidth 2dp。浮いたラベルは 10sp、通常のラベルは 17sp。高さのトークンは無いので MinHeight 56dp で組む。",
    select:
      "ドロップダウン: `OverlayDropdownPreference`（独立ウィンドウなら `WindowDropdownPreference`）を使う。`DropdownDefaults` の MinHeight 56dp・MinWidth 200dp・InsideHorizontalPadding 20dp・チェックアイコン 20dp。一覧は `ListPopup` で開き、選択中の項目に `Check` を出す。",
    switch:
      "スイッチ: `Switch`（行なら `SwitchPreference`）。トラックは 49×28dp で `SwitchDefaults` の `CornerRadius` 14dp、つまみは 20dp のカプセルで 4→25dp を動く。`spring(dampingRatio = 0.7f, stiffness = 987f)` で動く。ラベルは左、スイッチは右端。",
    checkbox:
      "チェックボックス: `Checkbox`（行なら `CheckboxPreference`）。`requiredSize(26.dp)` の 26dp で、`capsuleShape` で切られて丸くなる。ラベルはこの 26dp の外側に置く。",
    radio:
      "ラジオボタン: `RadioButton`（行なら `RadioButtonPreference`）。`requiredSize(26.dp)` の 26dp の円。選択は `primary` の枠と中央の点、未選択は `onSurfaceVariant` 側の枠。",
    slider:
      "スライダー: `Slider`（行なら `SliderPreference`）。最小高さは `SliderDefaults.MinHeight` 28dp で、トラックは `clip(CircleShape)` のカプセル。Miuix には Material 3 Expressive の縦長ハンドルは無い。",
    datePicker:
      "日付ピッカー: Miuix に日付ピッカーの部品は無い。`NumberPicker`（`NumberPickerDefaults.ItemHeight` 45dp）を年月日のぶん並べ、`OverlayDialog` の中に置く。カレンダーのグリッドは無い。",
    timePicker:
      "時刻ピッカー: Miuix に時刻ピッカーの部品は無い。`NumberPicker`（`NumberPickerDefaults.ItemHeight` 45dp）を時・分（必要なら AM/PM）のぶん並べ、`OverlayDialog` の中に置く。時計盤は無い。",
    text: "テキスト: `Text` と `MiuixTheme.textStyles` を使う。14 のスタイルは main・paragraph・body1・body2・button・footnote1・footnote2・headline1・headline2・subtitle・title1〜title4。行間を明示しているのは `paragraph`（1.2em）だけ。指定された大きさはこの尺度に寄せる。",
    image:
      "画像: Miuix は画像そのものを描かない。Coil の `AsyncImage` などホスト側のビューをこの領域に置き、角は上下左右の指定どおり 16dp の連続曲率（squircle）で切る。プレースホルダーは `surfaceContainerHigh`。",
    carousel:
      "カルーセル: Miuix にカルーセルの部品は無い。`LazyRow` などホスト側の横スクロールで組み、カードは `Card`（16dp）を並べる。M3 の hero／multi-browse の寸法は使わない。",
    camera:
      "カメラプレビュー: Miuix はカメラそのものを描かない。CameraX の `PreviewView` などをこの領域に置き、角は 16dp の連続曲率で切る。権限が無い間は `inverseSurface` の面にカメラアイコンを置く。",
    map:
      "地図: Miuix は地図そのものを描かない。地図 SDK のビューをこの領域に置き、角は 16dp の連続曲率で切る。読み込み中は `surfaceContainerHigh` に地図アイコンを置く。",
    divider:
      "区切り線: `HorizontalDivider`／`VerticalDivider` を使う。`DividerDefaults.Thickness` 0.75dp で、色は `dividerLine` を読む（M3 の `outlineVariant` ではない）。左右の余白は画面端の 28dp に合わせる。",
    loadingIndicator:
      "ローディング表示: `InfiniteProgressIndicator` を使う。`ProgressIndicatorDefaults` の InfiniteSize 20dp・InfiniteStrokeWidth 2dp・InfiniteOrbitingDotSize 2dp で、点が回りながら軌道を描く。Material 3 Expressive の多角形モーフは無い。",
    linearProgress:
      "リニアプログレス: `LinearProgressIndicator`。`ProgressIndicatorDefaults.LinearHeight` 6dp で、端は丸い。トラックは `secondaryContainer` 側、進捗は `primary`。波形スタイルは無い。",
    circularProgress:
      "サーキュラープログレス: `CircularProgressIndicator`。`ProgressIndicatorDefaults.CircularSize` 30dp・CircularStrokeWidth 4dp。不定形なら `InfiniteProgressIndicator` を使う。波形スタイルは無い。",
  },
  en: {
    button:
      "Buttons: use Miuix's `Button` (filled) or `TextButton` (text only), and let `ButtonDefaults` decide the geometry — MinWidth 58dp, MinHeight 40dp, CornerRadius 16dp, InsideMargin 16x13dp. Do not write a height or a padding by hand. The label is 17sp (`TextStyles.button`). There is no built-in tonal or outlined variant: make one by handing `secondary` or `outline` to `ButtonDefaults.buttonColors()`. There is no connected button group.",
    iconButton:
      "Icon buttons: use `IconButton` — a 40dp circle, since `IconButtonDefaults.CornerRadius` is 40dp and matches the 40dp height. There is no connected run of icon buttons.",
    fab: "FAB: use `FloatingActionButton`, a 60dp circle (`FloatingActionButtonDefaults` MinWidth/MinHeight 60dp, shape `CircleShape`) at 4dp of shadow. Miuix has no extended FAB.",
    extendedFab:
      "Extended FAB: Miuix has no such component. For a labelled floating action, put a `Button` (MinHeight 40dp) on a `Surface`, or gather the actions into a `FloatingToolbar`. Do not use the Material 3 extended-FAB metrics.",
    splitButton:
      "Split button: Miuix has no such component. Put an `IconButton` beside a `Button`, or open a `ListPopup` for the menu half; do not recreate the Material 3 segment geometry.",
    fabMenu:
      "FAB menu: open a `ListPopup` (`ListPopupColumn`) from the `FloatingActionButton`. Its rows take `DropdownDefaults` — MinHeight 56dp, MinWidth 200dp, InsideHorizontalPadding 20dp, corners 16dp. The menu unfolds downward.",
    chip:
      "Chip: Miuix has no chip. Use a `Button` (MinHeight 40dp, CornerRadius 16dp), or a `TextButton` when it is selected; the Material 3 32dp chip with its 8dp corner is not used.",
    topAppBar:
      "Top app bar: use `SmallTopAppBar` for a single title line and `TopAppBar` for the large form, which takes a `largeTitle` and a `subtitle`. The collapsed height is `TopAppBarDefaults.CollapsedHeight` 52dp, the title's side padding is `TitlePadding` 26dp, the navigation and action icons take 16dp each, and the title is 20sp (`TextStyles.title3`). The bar is `surface`, the title `onSurface`, the subtitle `onSurfaceVariantSummary`.",
    bottomNav:
      "Navigation bar: the flush one is `NavigationBar` with `RowScope.NavigationBarItem` — `NavigationBarDefaults` ItemHeight 64dp, IconSize 26dp, LabelFontSize 12sp. Items are `weight(1f)`, so they are equal width, and selection is a colour change plus a bold label; there is no pill indicator the way Material 3 has one.",
    navRail:
      "Navigation rail: `NavigationRail` with `NavigationRailItem`. `NavigationRailDefaults` gives MinWidth 80dp (ExpandedWidth 240dp when expanded), VerticalPadding 24dp, IconSize 28dp, IconTextSpacing 4dp, ItemVerticalPadding 12dp, LabelFontSize 12sp (16sp expanded) and a 16dp corner on the expanded item. Body content sits to the right of the rail.",
    toolbar:
      "Floating toolbar: `FloatingToolbar` — `FloatingToolbarDefaults` CornerRadius 50dp (a capsule against its own height) and OutSidePadding 12x8dp. Miuix has no height token for it, so build it from 40dp icon buttons with 8dp above and below; the icons inside are 24dp.",
    tabs:
      "Tabs: `TabRow` (or `TabRowWithContour` for the contoured style) with its items — `TabRowDefaults` TabRowHeight 42dp, TabRowCornerRadius 12dp, TabMinWidth 76dp. The selected label goes bold and shifts to the `primary` side; there is no 3dp Material 3 indicator.",
    searchBar:
      "Search bar: an `InputField` wrapped in `SearchBar`. The field's minimum height is `SearchBarDefaults.InputFieldMinHeight` 45dp and its text is 17sp (`TextStyles.main`). There is no corner token because the field clips to `CircleShape` — a capsule at half its height, 22.5dp. The field is `surfaceContainerHigh`.",
    card:
      "Card: use `Card` — `CardDefaults.CornerRadius` 16dp and InsideMargin 0. There is no shadow parameter at all: a Miuix card is flat, where a Material 3 one is elevated. The container is `surfaceContainerHigh`, and the padding inside is taken by the content, not by the card.",
    listItem:
      "List item: use `BasicComponent`, Miuix's preference row, `heightIn(min = 56.dp)` with a 17sp value and a 14sp summary. `BasicComponent` declares no corner of its own — the `Card` around it does, at 16dp — and rows are separated by `HorizontalDivider`.",
    box: "Box: a `Surface`. `SurfaceDefaults.Shape` is `RectangleShape` and the shadow is 0; use it as a plain coloured container and add no shape or behaviour of your own.",
    bottomSheet:
      "Bottom sheet: `OverlayBottomSheet` (which needs a `Scaffold` ancestor) or `WindowBottomSheet`, with `BottomSheetDefaults.cornerRadius` 28dp. On a phone Miuix also derives the corner from the screen corner, clamped to 32-48dp.",
    dialog:
      "Dialog: `OverlayDialog` (which needs a `Scaffold` ancestor) or `WindowDialog`, with `DialogDefaults.CornerRadius` 32dp.",
    snackbar:
      "Snackbar: show a `Snackbar` through a `SnackbarHost`. `SnackbarDefaults.CornerRadius` is 16dp and the label is 14sp; the action pill is a separate 50dp component.",
    textField:
      "Text field: `TextField` — `TextFieldDefaults` gives CornerRadius 16dp, InsideMargin 16x16dp and BorderWidth 2dp. The floating label is 10sp and the resting label 17sp. There is no height token, so build it at MinHeight 56dp.",
    select:
      "Dropdown: `OverlayDropdownPreference` (or `WindowDropdownPreference` for the window form). `DropdownDefaults` gives MinHeight 56dp, MinWidth 200dp, InsideHorizontalPadding 20dp and a 20dp check icon; the list opens as a `ListPopup` and the chosen row carries a `Check`.",
    switch:
      "Switch: `Switch` (`SwitchPreference` when it is a row). The track is 49 x 28dp with `SwitchDefaults` CornerRadius 14dp, and the 20dp capsule thumb runs from 4dp to 25dp on `spring(dampingRatio = 0.7f, stiffness = 987f)`. Label on the left, switch on the right.",
    checkbox:
      "Checkbox: `Checkbox` (`CheckboxPreference` when it is a row). It is `requiredSize(26.dp)` — 26dp, clipped to `capsuleShape`, so it is a circle. The label sits outside that 26dp box.",
    radio:
      "Radio button: `RadioButton` (`RadioButtonPreference` when it is a row), `requiredSize(26.dp)` — a 26dp circle. Selected is a `primary` ring with a centre dot, unselected an `onSurfaceVariant`-side ring.",
    slider:
      "Slider: `Slider` (`SliderPreference` when it is a row). Its minimum height is `SliderDefaults.MinHeight` 28dp and the track is `clip(CircleShape)`, a capsule. Miuix has no Material 3 Expressive vertical handle.",
    datePicker:
      "Date picker: Miuix has no date-picker component. Lay out `NumberPicker` columns (`NumberPickerDefaults.ItemHeight` 45dp) for the year, month and day inside an `OverlayDialog`. There is no calendar grid.",
    timePicker:
      "Time picker: Miuix has no time-picker component. Lay out `NumberPicker` columns (`NumberPickerDefaults.ItemHeight` 45dp) for hour and minute (and AM/PM) inside an `OverlayDialog`. There is no clock face.",
    text: "Text: use `Text` with `MiuixTheme.textStyles`. Its 14 styles are main, paragraph, body1, body2, button, footnote1, footnote2, headline1, headline2, subtitle and title1-title4; only `paragraph` names a line height (1.2em). A size the author named is mapped onto that scale.",
    image:
      "Image: Miuix does not draw the image itself. Put the host view there — Coil's `AsyncImage` — and cut it to the corner that was asked for as a continuous 16dp squircle. The placeholder is `surfaceContainerHigh`.",
    carousel:
      "Carousel: Miuix has no carousel. Build the sideways scroller with the host (`LazyRow`) and lay `Card`s (16dp) along it; the Material 3 hero and multi-browse metrics are not used.",
    camera:
      "Camera preview: Miuix does not draw the preview. Put the CameraX `PreviewView` there and cut it to a continuous 16dp squircle; while the permission is missing, an `inverseSurface` panel with a camera icon stands in.",
    map: "Map: Miuix does not draw the map. Put the map SDK's view there and cut it to a continuous 16dp squircle; while it loads, `surfaceContainerHigh` with a map icon stands in.",
    divider:
      "Divider: `HorizontalDivider` / `VerticalDivider`, at `DividerDefaults.Thickness` 0.75dp, reading the `dividerLine` role — not Material 3's `outlineVariant`. Its side margins follow the 28dp screen margin.",
    loadingIndicator:
      "Loading indicator: `InfiniteProgressIndicator` — `ProgressIndicatorDefaults` InfiniteSize 20dp, InfiniteStrokeWidth 2dp and InfiniteOrbitingDotSize 2dp, a dot travelling its orbit. Miuix has no morphing Material 3 Expressive polygon.",
    linearProgress:
      "Linear progress: `LinearProgressIndicator` at `ProgressIndicatorDefaults.LinearHeight` 6dp with rounded ends. The track is the `secondaryContainer` side and the progress is `primary`; there is no wavy style.",
    circularProgress:
      "Circular progress: `CircularProgressIndicator` at `ProgressIndicatorDefaults.CircularSize` 30dp and CircularStrokeWidth 4dp; use `InfiniteProgressIndicator` when it is indeterminate. There is no wavy style.",
  },
  zh: {
    button:
      "按钮：用 Miuix 的 `Button`（填充）或 `TextButton`（纯文字），尺寸完全交给 `ButtonDefaults`——MinWidth 58dp、MinHeight 40dp、CornerRadius 16dp、InsideMargin 16×13dp，不要手写高度和内边距。标签 17sp（`TextStyles.button`）。Miuix 没有内置的 tonal／outlined 变体：把 `secondary`／`outline` 传给 `ButtonDefaults.buttonColors()` 自己做。没有「连接按钮组」这种表现。",
    iconButton:
      "图标按钮：用 `IconButton`，40dp 的圆——`IconButtonDefaults.CornerRadius` 是 40dp，和 40dp 的高度一致所以是正圆。没有连接成一排的图标按钮组。",
    fab: "FAB：只有 `FloatingActionButton`，60dp 的圆（`FloatingActionButtonDefaults` 的 MinWidth/MinHeight 60dp，形状 `CircleShape`），阴影 4dp。Miuix 没有扩展 FAB。",
    extendedFab:
      "扩展 FAB：Miuix 没有这个构件。需要带文字的悬浮操作就用 `Button`（MinHeight 40dp）放在 `Surface` 上，或者把操作收进 `FloatingToolbar`。不要套用 Material 3 扩展 FAB 的尺寸。",
    splitButton:
      "分裂按钮：Miuix 没有这个构件。把 `IconButton` 放在 `Button` 旁边，或者菜单那半边用 `ListPopup`；不要复刻 Material 3 的分段几何。",
    fabMenu:
      "FAB 菜单：从 `FloatingActionButton` 打开 `ListPopup`（`ListPopupColumn`）。展开后的行取 `DropdownDefaults`——MinHeight 56dp、MinWidth 200dp、InsideHorizontalPadding 20dp、圆角 16dp。菜单向下展开。",
    chip:
      "chip：Miuix 没有 chip。用 `Button`（MinHeight 40dp、CornerRadius 16dp），选中态可以用 `TextButton`；不采用 Material 3 的 32dp／圆角 8dp。",
    topAppBar:
      "顶部应用栏：单行标题用 `SmallTopAppBar`，大字形态用 `TopAppBar`（它接受 `largeTitle` 和 `subtitle`）。收起高度取 `TopAppBarDefaults.CollapsedHeight` 52dp，标题左右留白 `TitlePadding` 26dp，导航图标和操作图标各 16dp，标题 20sp（`TextStyles.title3`）。栏底色 `surface`，标题 `onSurface`，副标题 `onSurfaceVariantSummary`。",
    bottomNav:
      "底部导航栏：贴底形态用 `NavigationBar` 加 `RowScope.NavigationBarItem`——`NavigationBarDefaults` 的 ItemHeight 64dp、IconSize 26dp、LabelFontSize 12sp。各项是 `weight(1f)` 等宽；选中只靠颜色变化加标签加粗，没有 Material 3 那种药丸形指示器。",
    navRail:
      "导航栏轨：`NavigationRail` 加 `NavigationRailItem`。`NavigationRailDefaults`：MinWidth 80dp（展开时 ExpandedWidth 240dp）、VerticalPadding 24dp、IconSize 28dp、IconTextSpacing 4dp、ItemVerticalPadding 12dp、LabelFontSize 12sp（展开时 16sp）、展开项圆角 16dp。正文放在轨的右侧。",
    toolbar:
      "悬浮工具栏：`FloatingToolbar`——`FloatingToolbarDefaults` 的 CornerRadius 50dp（相对自身高度就是胶囊）、OutSidePadding 12×8dp。Miuix 没有给它高度 token，所以用 40dp 的图标按钮加 8dp 上下留白拼出来，内部图标 24dp。",
    tabs:
      "标签页：`TabRow`（带轮廓的用 `TabRowWithContour`）及其项——`TabRowDefaults` 的 TabRowHeight 42dp、TabRowCornerRadius 12dp、TabMinWidth 76dp。选中项标签加粗并转向 `primary` 一侧；没有 Material 3 的 3dp 指示条。",
    searchBar:
      "搜索栏：`InputField` 外面包 `SearchBar`。输入框最小高度取 `SearchBarDefaults.InputFieldMinHeight` 45dp，文字 17sp（`TextStyles.main`）。没有圆角 token，因为输入框裁成 `CircleShape`——也就是高度一半 22.5dp 的胶囊。底色 `surfaceContainerHigh`。",
    card:
      "卡片：用 `Card`——`CardDefaults.CornerRadius` 16dp、InsideMargin 0。它根本没有阴影参数：Miuix 的卡片是平的，Material 3 的是带高度的。容器色 `surfaceContainerHigh`，内边距由内容自己取，不由卡片给。",
    listItem:
      "列表项：用 `BasicComponent`，也就是 Miuix 的 preference 行，`heightIn(min = 56.dp)`，值 17sp、摘要 14sp。`BasicComponent` 自身没有圆角——外面那层 `Card` 有，16dp——行之间用 `HorizontalDivider` 分隔。",
    box:
      "盒子：用 `Surface`。`SurfaceDefaults.Shape` 是 `RectangleShape`，阴影 0；把它当作纯色容器，不要自己加形状或行为。",
    bottomSheet:
      "底部面板：`OverlayBottomSheet`（需要有 `Scaffold` 作为祖先）或 `WindowBottomSheet`，`BottomSheetDefaults.cornerRadius` 28dp。在手机上 Miuix 还会按屏幕圆角推导，收敛在 32–48dp。",
    dialog:
      "对话框：`OverlayDialog`（需要有 `Scaffold` 作为祖先）或 `WindowDialog`，`DialogDefaults.CornerRadius` 32dp。",
    snackbar:
      "snackbar：用 `SnackbarHost` 弹出 `Snackbar`。`SnackbarDefaults.CornerRadius` 16dp，标签 14sp；操作药丸是另一个 50dp 的构件。",
    textField:
      "文本输入：`TextField`——`TextFieldDefaults` 的 CornerRadius 16dp、InsideMargin 16×16dp、BorderWidth 2dp。浮起标签 10sp，常态标签 17sp。没有高度 token，按 MinHeight 56dp 拼。",
    select:
      "下拉选择：`OverlayDropdownPreference`（独立窗口形态用 `WindowDropdownPreference`）。`DropdownDefaults` 的 MinHeight 56dp、MinWidth 200dp、InsideHorizontalPadding 20dp、勾选图标 20dp；列表用 `ListPopup` 打开，选中行带 `Check`。",
    switch:
      "开关：`Switch`（作为一行时用 `SwitchPreference`）。轨道 49×28dp，`SwitchDefaults` 的 CornerRadius 14dp；20dp 的胶囊滑块从 4dp 走到 25dp，动画是 `spring(dampingRatio = 0.7f, stiffness = 987f)`。标签在左，开关在右。",
    checkbox:
      "复选框：`Checkbox`（作为一行时用 `CheckboxPreference`）。`requiredSize(26.dp)`，26dp，裁成 `capsuleShape`，所以是圆的。标签放在这个 26dp 盒子外面。",
    radio:
      "单选：`RadioButton`（作为一行时用 `RadioButtonPreference`），`requiredSize(26.dp)`，26dp 的圆。选中是 `primary` 的圈加中心点，未选中是 `onSurfaceVariant` 一侧的圈。",
    slider:
      "滑块：`Slider`（作为一行时用 `SliderPreference`）。最小高度取 `SliderDefaults.MinHeight` 28dp，轨道 `clip(CircleShape)`，是胶囊。Miuix 没有 Material 3 Expressive 那种竖长手柄。",
    datePicker:
      "日期选择器：Miuix 没有日期选择器构件。用 `NumberPicker` 列（`NumberPickerDefaults.ItemHeight` 45dp）分别排年、月、日，放进 `OverlayDialog`。没有日历网格。",
    timePicker:
      "时间选择器：Miuix 没有时间选择器构件。用 `NumberPicker` 列（`NumberPickerDefaults.ItemHeight` 45dp）排时和分（需要时加 AM/PM），放进 `OverlayDialog`。没有表盘。",
    text: "文本：用 `Text` 配 `MiuixTheme.textStyles`。14 个字阶是 main、paragraph、body1、body2、button、footnote1、footnote2、headline1、headline2、subtitle 和 title1〜title4；只有 `paragraph` 明写了行高（1.2em）。作者指定的字号往这套尺度上靠。",
    image:
      "图片：Miuix 不画图片本身。把宿主视图（Coil 的 `AsyncImage`）放进这块区域，按要求的角切 16dp 连续曲率（squircle）。占位底色 `surfaceContainerHigh`。",
    carousel:
      "轮播：Miuix 没有轮播。用宿主侧的横向滚动（`LazyRow`）拼，里面依次放 `Card`（16dp）；不采用 Material 3 的 hero／multi-browse 尺寸。",
    camera:
      "相机预览：Miuix 不画预览。把 CameraX 的 `PreviewView` 放进这块区域，切 16dp 连续曲率；没有权限时用 `inverseSurface` 的面加相机图标占位。",
    map: "地图：Miuix 不画地图。把地图 SDK 的视图放进这块区域，切 16dp 连续曲率；加载中用 `surfaceContainerHigh` 加地图图标占位。",
    divider:
      "分隔线：`HorizontalDivider`／`VerticalDivider`，粗细取 `DividerDefaults.Thickness` 0.75dp，颜色读 `dividerLine` 角色——不是 Material 3 的 `outlineVariant`。两侧留白跟屏幕边距 28dp 走。",
    loadingIndicator:
      "加载指示器：`InfiniteProgressIndicator`——`ProgressIndicatorDefaults` 的 InfiniteSize 20dp、InfiniteStrokeWidth 2dp、InfiniteOrbitingDotSize 2dp，一个点沿轨道绕行。Miuix 没有 Material 3 Expressive 的变形多边形。",
    linearProgress:
      "线性进度：`LinearProgressIndicator`，高度取 `ProgressIndicatorDefaults.LinearHeight` 6dp，两端是圆的。轨道走 `secondaryContainer` 一侧，进度是 `primary`；没有波形样式。",
    circularProgress:
      "环形进度：`CircularProgressIndicator`，`ProgressIndicatorDefaults` 的 CircularSize 30dp、CircularStrokeWidth 4dp；不确定态改用 `InfiniteProgressIndicator`。没有波形样式。",
  },
  ko: {
    button:
      "버튼: Miuix의 `Button`(채움) 또는 `TextButton`(글자만)을 쓰고, 크기는 `ButtonDefaults`에 맡긴다 — MinWidth 58dp, MinHeight 40dp, CornerRadius 16dp, InsideMargin 16×13dp. 높이와 패딩을 직접 쓰지 않는다. 라벨은 17sp(`TextStyles.button`). tonal/outlined 내장 변형은 없으므로 `ButtonDefaults.buttonColors()`에 `secondary`/`outline`을 넘겨 만든다. 연결형 버튼 그룹은 없다.",
    iconButton:
      "아이콘 버튼: `IconButton`을 쓴다. 40dp 원이며 `IconButtonDefaults.CornerRadius`가 40dp라 높이와 맞아떨어진다. 아이콘 버튼을 이어 붙인 그룹은 없다.",
    fab: "FAB: `FloatingActionButton`뿐이다. 60dp 원(`FloatingActionButtonDefaults` MinWidth/MinHeight 60dp, 모양 `CircleShape`)이고 그림자는 4dp. Miuix에는 확장 FAB가 없다.",
    extendedFab:
      "확장 FAB: Miuix에 그런 컴포넌트가 없다. 라벨이 있는 떠 있는 동작이 필요하면 `Button`(MinHeight 40dp)을 `Surface`에 올리거나 `FloatingToolbar`에 모은다. Material 3 확장 FAB 수치는 쓰지 않는다.",
    splitButton:
      "분할 버튼: Miuix에 그런 컴포넌트가 없다. `Button` 옆에 `IconButton`을 두거나 메뉴 쪽을 `ListPopup`으로 만든다. Material 3의 분절 구조를 재현하지 않는다.",
    fabMenu:
      "FAB 메뉴: `FloatingActionButton`에서 `ListPopup`(`ListPopupColumn`)을 연다. 펼쳐진 행은 `DropdownDefaults`를 따른다 — MinHeight 56dp, MinWidth 200dp, InsideHorizontalPadding 20dp, 모서리 16dp. 메뉴는 아래로 펼쳐진다.",
    chip:
      "칩: Miuix에 칩이 없다. `Button`(MinHeight 40dp, CornerRadius 16dp)을 쓰고 선택 상태면 `TextButton`을 쓴다. Material 3의 32dp/8dp 모서리는 쓰지 않는다.",
    topAppBar:
      "상단 앱 바: 한 줄 제목에는 `SmallTopAppBar`, 큰 형태에는 `largeTitle`과 `subtitle`을 받는 `TopAppBar`를 쓴다. 접힌 높이는 `TopAppBarDefaults.CollapsedHeight` 52dp, 제목 좌우 여백은 `TitlePadding` 26dp, 내비게이션/액션 아이콘은 각 16dp, 제목은 20sp(`TextStyles.title3`). 배경은 `surface`, 제목은 `onSurface`, 부제는 `onSurfaceVariantSummary`.",
    bottomNav:
      "내비게이션 바: 붙는 형태는 `NavigationBar`와 `RowScope.NavigationBarItem` — `NavigationBarDefaults` ItemHeight 64dp, IconSize 26dp, LabelFontSize 12sp. 항목은 `weight(1f)`라 같은 너비이고, 선택은 색 변화와 라벨 굵기로만 표시한다. Material 3 같은 알약 표시기는 없다.",
    navRail:
      "내비게이션 레일: `NavigationRail`과 `NavigationRailItem`. `NavigationRailDefaults`는 MinWidth 80dp(펼치면 ExpandedWidth 240dp), VerticalPadding 24dp, IconSize 28dp, IconTextSpacing 4dp, ItemVerticalPadding 12dp, LabelFontSize 12sp(펼치면 16sp), 펼친 항목 모서리 16dp. 본문은 레일 오른쪽에 둔다.",
    toolbar:
      "플로팅 툴바: `FloatingToolbar` — `FloatingToolbarDefaults` CornerRadius 50dp(자기 높이에 대해 캡슐), OutSidePadding 12×8dp. Miuix에는 높이 토큰이 없으므로 40dp 아이콘 버튼과 위아래 8dp로 조립하고, 안쪽 아이콘은 24dp.",
    tabs:
      "탭: `TabRow`(윤곽형은 `TabRowWithContour`)와 그 항목 — `TabRowDefaults` TabRowHeight 42dp, TabRowCornerRadius 12dp, TabMinWidth 76dp. 선택된 라벨은 굵어지고 `primary` 쪽으로 간다. Material 3의 3dp 표시선은 없다.",
    searchBar:
      "검색 바: `InputField`를 `SearchBar`로 감싼다. 입력 필드 최소 높이는 `SearchBarDefaults.InputFieldMinHeight` 45dp, 글자는 17sp(`TextStyles.main`). 모서리 토큰은 없고 필드가 `CircleShape`로 잘리므로 높이의 절반인 22.5dp 캡슐이 된다. 배경은 `surfaceContainerHigh`.",
    card:
      "카드: `Card`를 쓴다 — `CardDefaults.CornerRadius` 16dp, InsideMargin 0. 그림자 파라미터가 아예 없다: Miuix 카드는 평평하고 Material 3 카드는 떠 있다. 컨테이너는 `surfaceContainerHigh`이고 안쪽 여백은 카드가 아니라 내용이 가져간다.",
    listItem:
      "목록 항목: Miuix의 preference 행인 `BasicComponent`를 쓴다. `heightIn(min = 56.dp)`에 값 17sp, 요약 14sp. `BasicComponent` 자체에는 모서리가 없고 — 감싸는 `Card`에 16dp가 있다 — 행 사이는 `HorizontalDivider`로 나눈다.",
    box:
      "박스: `Surface`. `SurfaceDefaults.Shape`는 `RectangleShape`이고 그림자는 0이다. 단색 컨테이너로만 쓰고 모양이나 동작을 덧붙이지 않는다.",
    bottomSheet:
      "바텀 시트: `OverlayBottomSheet`(`Scaffold` 조상 필요) 또는 `WindowBottomSheet`, `BottomSheetDefaults.cornerRadius` 28dp. 휴대폰에서는 화면 모서리에서도 유도해 32~48dp로 제한한다.",
    dialog:
      "다이얼로그: `OverlayDialog`(`Scaffold` 조상 필요) 또는 `WindowDialog`, `DialogDefaults.CornerRadius` 32dp.",
    snackbar:
      "스낵바: `SnackbarHost`로 `Snackbar`를 띄운다. `SnackbarDefaults.CornerRadius` 16dp, 라벨 14sp. 액션 알약은 별도의 50dp 컴포넌트다.",
    textField:
      "텍스트 필드: `TextField` — `TextFieldDefaults` CornerRadius 16dp, InsideMargin 16×16dp, BorderWidth 2dp. 떠 있는 라벨은 10sp, 평소 라벨은 17sp. 높이 토큰이 없으므로 MinHeight 56dp로 만든다.",
    select:
      "드롭다운: `OverlayDropdownPreference`(창 형태는 `WindowDropdownPreference`). `DropdownDefaults` MinHeight 56dp, MinWidth 200dp, InsideHorizontalPadding 20dp, 체크 아이콘 20dp. 목록은 `ListPopup`으로 열고 선택된 행에 `Check`를 둔다.",
    switch:
      "스위치: `Switch`(행이면 `SwitchPreference`). 트랙은 49×28dp이고 `SwitchDefaults` CornerRadius 14dp, 20dp 캡슐 손잡이가 4→25dp를 움직이며 `spring(dampingRatio = 0.7f, stiffness = 987f)`로 움직인다. 라벨은 왼쪽, 스위치는 오른쪽.",
    checkbox:
      "체크박스: `Checkbox`(행이면 `CheckboxPreference`). `requiredSize(26.dp)`인 26dp이고 `capsuleShape`로 잘려 원이 된다. 라벨은 그 26dp 상자 밖에 둔다.",
    radio:
      "라디오 버튼: `RadioButton`(행이면 `RadioButtonPreference`), `requiredSize(26.dp)`인 26dp 원. 선택은 `primary` 테두리와 가운데 점, 미선택은 `onSurfaceVariant` 쪽 테두리.",
    slider:
      "슬라이더: `Slider`(행이면 `SliderPreference`). 최소 높이는 `SliderDefaults.MinHeight` 28dp이고 트랙은 `clip(CircleShape)`인 캡슐이다. Miuix에는 Material 3 Expressive의 세로 손잡이가 없다.",
    datePicker:
      "날짜 선택기: Miuix에 날짜 선택기 컴포넌트가 없다. `NumberPicker` 열(`NumberPickerDefaults.ItemHeight` 45dp)을 연·월·일로 놓고 `OverlayDialog` 안에 넣는다. 달력 격자는 없다.",
    timePicker:
      "시간 선택기: Miuix에 시간 선택기 컴포넌트가 없다. `NumberPicker` 열(`NumberPickerDefaults.ItemHeight` 45dp)을 시·분(필요하면 오전/오후)으로 놓고 `OverlayDialog` 안에 넣는다. 시계판은 없다.",
    text: "텍스트: `Text`와 `MiuixTheme.textStyles`를 쓴다. 14개 스타일은 main, paragraph, body1, body2, button, footnote1, footnote2, headline1, headline2, subtitle, title1~title4이고 줄 높이를 밝힌 것은 `paragraph`(1.2em)뿐이다. 지정된 크기는 이 척도에 맞춘다.",
    image:
      "이미지: Miuix는 이미지 자체를 그리지 않는다. 호스트 뷰(Coil의 `AsyncImage`)를 이 영역에 두고 요청된 모서리를 16dp 연속 곡률(squircle)로 자른다. 자리 표시자는 `surfaceContainerHigh`.",
    carousel:
      "캐러셀: Miuix에 캐러셀이 없다. 호스트의 가로 스크롤(`LazyRow`)로 만들고 `Card`(16dp)를 나란히 둔다. Material 3의 hero/multi-browse 수치는 쓰지 않는다.",
    camera:
      "카메라 프리뷰: Miuix는 프리뷰를 그리지 않는다. CameraX `PreviewView`를 이 영역에 두고 16dp 연속 곡률로 자른다. 권한이 없는 동안은 `inverseSurface` 면에 카메라 아이콘을 둔다.",
    map: "지도: Miuix는 지도를 그리지 않는다. 지도 SDK 뷰를 이 영역에 두고 16dp 연속 곡률로 자른다. 불러오는 동안은 `surfaceContainerHigh`에 지도 아이콘을 둔다.",
    divider:
      "구분선: `HorizontalDivider`/`VerticalDivider`, 두께는 `DividerDefaults.Thickness` 0.75dp이고 색은 `dividerLine` 역할을 읽는다 — Material 3의 `outlineVariant`가 아니다. 좌우 여백은 화면 여백 28dp를 따른다.",
    loadingIndicator:
      "로딩 표시기: `InfiniteProgressIndicator` — `ProgressIndicatorDefaults` InfiniteSize 20dp, InfiniteStrokeWidth 2dp, InfiniteOrbitingDotSize 2dp로 점이 궤도를 돈다. Miuix에는 Material 3 Expressive의 변형 다각형이 없다.",
    linearProgress:
      "선형 진행: `LinearProgressIndicator`, 높이는 `ProgressIndicatorDefaults.LinearHeight` 6dp이고 끝은 둥글다. 트랙은 `secondaryContainer` 쪽, 진행은 `primary`. 물결 스타일은 없다.",
    circularProgress:
      "원형 진행: `CircularProgressIndicator`, `ProgressIndicatorDefaults` CircularSize 30dp, CircularStrokeWidth 4dp. 불확정이면 `InfiniteProgressIndicator`를 쓴다. 물결 스타일은 없다.",
  },
};
