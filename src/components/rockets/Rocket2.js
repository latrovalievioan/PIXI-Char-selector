import Rocket from "../Rocket";

export default class Rocket2 extends Rocket {
  constructor() {
    super(
      {
        textureName: "rocket2",
        acceleration: 20,
        handling: 50,
        speed: 10,
        name: "rocket-2",
      },
      { fireX: 300, fireY: 250, fireRot: 3.5, fireScale: 1 }
    );
  }
}
