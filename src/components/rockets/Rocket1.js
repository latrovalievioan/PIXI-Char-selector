import Rocket from "../Rocket";

export default class Rocket1 extends Rocket {
  constructor() {
    super(
      {
        textureName: "rocket1",
        acceleration: 20,
        handling: 50,
        speed: 10,
        name: "rocket-1",
      },
      { fireX: 300, fireY: 250, fireRot: 3.6, fireScale: 1 }
    );
  }
}
