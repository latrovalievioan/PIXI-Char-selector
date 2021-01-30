import Rocket from "../Rocket";

export default class Rocket3 extends Rocket {
  constructor() {
    super({
      textureName: "rocket3",
      acceleration: 30,
      handling: 5,
      speed: 70,
      name: "rocket-3",
    });
  }
}
