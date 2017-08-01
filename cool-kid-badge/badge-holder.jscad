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
    return [
      thing1(),
      placeholder() // TODO
    ];
 }

// TODO: Rename
function thing1() {
  // TODO: This should be "hull"
  return union([
    body(),
    topCornerCylinder().translate([holderHeight - holderRadius, holderRadius, 0]),
    topCornerCylinder().translate([holderHeight - holderRadius, holderWidth - holderRadius, 0]),
  ]).subtract([
    badgeCardSlot(),
    thing2(),
  ]);
}

/** The main body shape of the model. Pieces are cut away from this. */
function body() {
  return cube({
    size: [holderHeight - holderRadius, holderWidth, holderThickness]
  });
}

/** Cylinder shape which defines the top corner of the body */
function topCornerCylinder() {
  return cylinder({
    r: holderRadius,
    h: holderThickness,
    fn: 200,
  });
}

/** Badge card slot to subtract away from model. */
function badgeCardSlot() {
  return cube({
    size: [badgeHeight, badgeWidth, badgeThickness]
  }).translate([holderWallSize, holderWallSize, holderWallSize]);
}

// TODO: Rename
function thing2() {
  return cube({
    size: [badgeHeight / 2.25, badgeWidth, holderThickness * 2]
  }).translate([holderWallSize, holderWallSize, holderWallSize]);
}

/** Placeholder function until the real thing is ready. */
function placeholder() {
  return cube(1);
}
