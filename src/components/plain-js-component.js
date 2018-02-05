import * as complate from "complate-stream";

let PlainJsComponent = ({ foo, bar }) => {
  return complate.createElement("div", {foo, bar});
}

export default PlainJsComponent;
