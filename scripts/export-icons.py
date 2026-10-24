"""Export generated transparent originals for the web. Needs Pillow; not used by Pages build."""
from pathlib import Path
from PIL import Image

root = Path(__file__).resolve().parent.parent
source = root / 'design' / 'generated'
target = root / 'public' / 'assets'
for name in ('profiles', 'connection', 'backup'):
    image = Image.open(source / f'{name}.png').convert('RGBA')
    assert image.getchannel('A').getextrema()[0] == 0, f'{name}: transparency missing'
    image.thumbnail((384, 384), Image.Resampling.LANCZOS)
    image.save(target / f'{name}.webp', quality=90, method=6)

lighthouse = Image.open(source / 'lighthouse.png').convert('RGBA')
assert lighthouse.getchannel('A').getextrema()[0] == 0, 'Lighthouse transparency missing'
for size in (64, 128, 180):
    icon = lighthouse.copy()
    icon.thumbnail((size, size), Image.Resampling.LANCZOS)
    canvas = Image.new('RGBA', (size, size))
    canvas.alpha_composite(icon, ((size - icon.width) // 2, (size - icon.height) // 2))
    canvas.save(target / f'lighthouse-{size}.png', optimize=True)
print('Exported 3 WebP illustrations and 3 transparent PNG logo sizes.')
