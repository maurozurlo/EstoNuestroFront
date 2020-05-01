export const getHex = (color1, color2, weight) => {
  //Convert to Hex to array
  color1 = hexToRGB(color1);
  color2 = hexToRGB(color2);
  weight = weight/10;

  var w1 = weight;
  var w2 = 1 - w1;
  var rgb = [Math.round(color1[0] * w1 + color2[0] * w2),
  Math.round(color1[1] * w1 + color2[1] * w2),
  Math.round(color1[2] * w1 + color2[2] * w2)];

  return rgbToHex(rgb[0],rgb[1],rgb[2]);
}

function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length === 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
  return componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function hexToRGB(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ?
    [parseInt(result[1], 16),
    parseInt(result[2], 16),
    parseInt(result[3], 16)]
    : null;
}

export default {
  getHex
}