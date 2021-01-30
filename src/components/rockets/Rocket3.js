import Rocket from "../Rocket";

export default class Rocket3 extends Rocket {
  constructor() {
    super(
      {
        textureName: "rocket3",
        acceleration: 20,
        handling: 50,
        speed: 10,
        name: "rocket-3",
      },
      { fireX: 115, fireY: 100, fireRot: 4.2, fireScale: 0.4 }
    );
  }
}
