import convert from "color-convert";

export type ColorPaletteType = "complementary" | "analogous" | "triadic";

export const generateColorPalette = (
  baseColor: string,
  type: ColorPaletteType
): string[] => {
  const hsl = convert.hex.hsl(baseColor);
  let palette: string[] = [];
  palette.push(baseColor);

  switch (type) {
    case "complementary":
      let complementaryHue = (hsl[0] + 180) % 360;
      palette.push(convert.hsl.hex(complementaryHue, hsl[1], hsl[2]));
      break;
    case "analogous":
      let analogousHue1 = (hsl[0] + 30) % 360;
      let analogousHue2 = (hsl[0] - 30 + 360) % 360;
      palette.push(convert.hsl.hex(analogousHue1, hsl[1], hsl[2]));
      palette.push(convert.hsl.hex(analogousHue2, hsl[1], hsl[2]));
      break;
    case "triadic":
      let triadicHue1 = (hsl[0] + 120) % 360;
      let triadicHue2 = (hsl[0] - 120 + 360) % 360;
      palette.push(convert.hsl.hex(triadicHue1, hsl[1], hsl[2]));
      palette.push(convert.hsl.hex(triadicHue2, hsl[1], hsl[2]));
      break;
    default:
      throw new Error("Invalid palette type");
  }
  return palette;
};
