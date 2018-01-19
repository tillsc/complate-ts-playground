import Renderer from "complate-stream";

import WritableStream from "./stream";

import { main } from "./views";

function run() {
  let renderer = new Renderer();
  let stream = new WritableStream();

  renderer.registerView(main, "main");

  renderer.renderView("main", null, stream);

  return stream.read();
}

console.log(run());
