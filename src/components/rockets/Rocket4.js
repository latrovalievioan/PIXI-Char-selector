import Rocket from "../Rocket";

export default class Rocket4 extends Rocket {
  constructor() {
    super({
      textureName: "rocket4",
      acceleration: 30,
      handling: 5,
      speed: 70,
      name: "rocket-4",
    });
  }
}
