import React from "./react";
import { safe } from "./complate";

let MyComponent = (props: { header: string }) => {
  return <div><h1>{props.header}</h1></div>
};

export default () => {
  return <html>
    <body>
      {/* The following should be an error (32 is not a string) */}
      <MyComponent header={32} />
      {/* In "plain TS" the compliler acually inferrs the generic and type checking works... */}
      {React.createElement(MyComponent, {header: 32})}
    </body>
  </html>
}
