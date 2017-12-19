import React from "./react";
import { safe } from "./complate";

export default () => {
  return <html>
    <body>
      <MyComponent header={{foo: "This should not work"}} />
    </body>
  </html>
}

let MyComponent =  ({ header }: { header: string }) => <div><h1>{header}</h1></div>;
