/**
 * 3D model for a reduced-size badge holder.
 * Compile into STL using https://openjscad.org/
 *
 * This work, "Cool Kid Badge" is a derivative of "Badge Holder" by rip1980
 * (https://www.thingiverse.com/thing:867049), used under CC BY-NC-SA. This work
 * is licensed under CC BY-NC-SA by Scott Wegner.
 */

/* jshint esversion:6 */
const badgeThickness = 1;
const badgeWidth = 56;
const badgeHeight = 97;

const holderWallSize = 2;
const holderBezelSize = holderWallSize + 3;

const holderHeight = badgeHeight + (holderWallSize * 2);
const holderWidth = badgeWidth + (holderWallSize * 2);
const holderThickness = badgeThickness + (holderWallSize * 2);
const holderRadius = 4;

const clipHoleWidth = 15;
const clipHoleHeight = 4;

 function main() {
    return CSG.union([
      placeholder(), // TODO
      placeholder() // TODO
    ]);
 }

/** Placeholder function until the real thing is ready. */
function placeholder() {
  return cube(1);
}
