import Renderer from "./complate";
import WritableStream from "./stream";

import comp from "./comp";

function run() {
  let renderer = new Renderer();
  let stream = new WritableStream();

  renderer.registerView(comp, "main");

  renderer.renderView("main", null, stream);

  return stream.read();
}

console.log(run());
