import * as complate from "complate-stream";

import SimpleComponent from "./components/simple-component"
import MyComponent from "./components/my-component"
import PlainJsComponent from "./components/plain-js-component"

export { main }

let main = () => {
  let contents = ["Don't <em>escape</em> me!", "foo", "lorem"];
  return <html>
    <body>
      <SimpleComponent foo="foo123" bar={42} />

      <MyComponent header="Simple title" contents={[]} />

      <MyComponent header={{ main: "Some title", sub: "Some more title" }} contents={contents} />

      <PlainJsComponent foo="Hello From" bar="JavaScript" />
    </body>
  </html>
}
