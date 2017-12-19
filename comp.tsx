import React from "./react";
import { safe } from "./complate";

export default () => {
  return <html>
    <body>
      <MyComponent header="Some Title" content="Don't <em>escape</em> me!" />
    </body>
  </html>
}

let MyComponent =  ({ header, content }: { header: string, content: string }) => <div><h1>{header}</h1><p>{safe(content)}</p></div>;
