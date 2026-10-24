# Generated website icons

Built-in `image_gen` was used. The existing `public/assets/harbor.png` was the style reference. The generated PNG originals are stored in `design/generated/`; web exports are stored in `public/assets/`.

## Shared prompt

Use case: illustration-story. Production website icon for CraftHarbor, Minecraft Java server manager. The attached harbor is STYLE REFERENCE ONLY, do not recreate the entire scene. Match its warm hand-crafted pixel/voxel illustration language, bold dark brown outlines, chunky readable forms, terracotta wood, moss green, warm cream highlights and lake blue. Draw ONE isolated centered icon on a genuinely transparent background, square canvas, object occupies about 85% of canvas, full object visible. Flat crisp pixel-art edges and restrained limited palette shading, no blur, no photoreal texture, no gradients, no background rectangle, no typography, no labels, no logos, no words. Readable when reduced to 96px.

## Subject prompts appended to the shared prompt

- **profiles.png**: A compact cluster of THREE wooden storage chests, one stacked on two, with simple brass latches and iron corner straps, sitting on a very small grassy dirt tile. Symbolizes separate server profiles. Slightly elevated front view, broad horizontal silhouette. No extra objects.
- **connection.png**: A tiny charming wooden footbridge linking TWO small grassy dirt blocks across a little patch of bright blue water. Two sturdy timber posts connected by rope, simple wooden plank deck. Symbolizes connecting friends. Elevated front view, broad horizontal silhouette. Only the small bridge vignette, no landscape.
- **backup.png**: A large blue floppy disk beside a small cream-faced clock with a terracotta wooden rim. Both rest on a very small grassy tile. Simple clear hands, NO numbers or letters. Symbolizes saving backups and history. Large clean silhouettes with few details.
- **lighthouse.png**: A simplified RED AND CREAM striped lighthouse with dark navy lantern frame, warm yellow light and terracotta roof, on a tiny green grassy base. Single bold centered upright silhouette, no sky, no sea, no rays outside lantern, no environment, minimal detail, designed as a LOGO ICON legible at 32px. Make lighthouse fill most of the square height and at least half width.

## Exports and use

`python scripts/export-icons.py` (Pillow required) makes responsive exports while retaining transparency and the complete composition. No image generation or Python installation runs during the Pages build.

- `public/assets/profiles.webp`, `connection.webp`, `backup.webp`: decorative feature illustrations, with adjacent text carrying their meaning.
- `public/assets/lighthouse-128.png`: header, footer, download section and 404 page.
- `public/assets/lighthouse-64.png`: browser favicon.
- `public/assets/lighthouse-180.png`: Apple touch icon.

This changes website assets only. The desktop application's icon and interface are unaffected.
