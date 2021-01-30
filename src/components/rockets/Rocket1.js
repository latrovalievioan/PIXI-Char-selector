import Rocket from "../Rocket";

export default class Rocket1 extends Rocket {
  constructor() {
    super(
      {
        textureName: "rocket1",
        acceleration: 30,
        handling: 5,
        speed: 70,
        name: "rocket-1",
      },
      { fireX: 300, fireY: 250, fireRot: 3.6, fireScale: 1 }
    );
  }
}
