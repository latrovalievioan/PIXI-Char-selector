import Rocket from "../Rocket";

export default class Rocket4 extends Rocket {
  constructor() {
    super(
      {
        textureName: "rocket4",
        acceleration: 30,
        handling: 5,
        speed: 70,
        name: "rocket-4",
      },
      { fireX: 100, fireY: 150, fireRot: 4.6, fireScale: 0.4 }
    );
  }
}
