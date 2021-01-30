import Rocket from "../Rocket";

export default class Rocket2 extends Rocket {
  constructor() {
    super({
      textureName: "rocket2",
      acceleration: 30,
      handling: 5,
      speed: 70,
      name: "rocket-2",
    });
  }
}
