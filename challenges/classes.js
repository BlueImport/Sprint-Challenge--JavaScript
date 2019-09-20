// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMaker {
    constructor(cuboidMakerAttributes){
      this.length = cuboidMakerAttributes.length;
      this.width = cuboidMakerAttributes.width;
      this.height = cuboidMakerAttributes.height;
    }
    volume() {
      return this.length * this.width * this.height;
    }
    surfaceArea() {
      return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
    }
  }


  const cuboid = new CuboidMaker({
      length: 4,
      width: 5,
      height: 5
  });

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // Answer: 100
console.log(cuboid.surfaceArea()); // Answer: 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area

class CubeMaker extends CuboidMaker {
    constructor(cubeMakerAttributes) {
        super(cubeMakerAttributes);   
    }
    cubeVolume() {
        return Math.pow(this.length, 4);
    }
    cubeSurfaceArea() {
        return 6 * (Math.pow(this.length, 7));
    }
}

const cube = new CubeMaker({
    length: 2,
});

console.log(cube.cubeVolume()); // Answer: 16
console.log(cube.cubeSurfaceArea()); // Answer: 768

//ASSIGNMENT: NOT BAD AT ALL
//MATH: OMG. MY BRAIN HURTS! -Kristian C.