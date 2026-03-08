import sharp from "sharp";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const input = resolve(__dirname, "../../logos/Theweddinglogo-04.png");
const out = resolve(__dirname, "../public/logo.png");
const outDark = resolve(__dirname, "../public/logo-dark.png");

const inputDark = resolve(__dirname, "../../logos/Theweddinglogo-06.png");

async function cropLogo(src, dest) {
  const img = sharp(src);
  const { data, info } = await img.raw().toBuffer({ resolveWithObject: true });

  const { width, height, channels } = info;

  let minX = width, maxX = 0, minY = height, maxY = 0;

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = (y * width + x) * channels;
      const alpha = channels === 4 ? data[idx + 3] : 255;
      const r = data[idx], g = data[idx + 1], b = data[idx + 2];
      const isWhiteOrTransparent =
        alpha < 20 || (r > 240 && g > 240 && b > 240 && alpha < 200);
      if (!isWhiteOrTransparent) {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }
  }

  const pad = 20;
  const left = Math.max(0, minX - pad);
  const top = Math.max(0, minY - pad);
  const cropWidth = Math.min(width, maxX + pad) - left;
  const cropHeight = Math.min(height, maxY + pad) - top;

  console.log(`Cropping: ${src}`);
  console.log(`  Original: ${width}×${height}`);
  console.log(`  Artwork bounds: x=${minX}-${maxX}, y=${minY}-${maxY}`);
  console.log(`  Crop region: left=${left}, top=${top}, w=${cropWidth}, h=${cropHeight}`);

  await sharp(src)
    .extract({ left, top, width: cropWidth, height: cropHeight })
    .toFile(dest);

  console.log(`  Saved: ${dest}`);
}

await cropLogo(input, out);
await cropLogo(inputDark, outDark);
console.log("Done.");
