import * as complate from "complate-stream";

let SimpleComponent = ({foo, bar}: {foo: string, bar: number}) => {
  return <div>Foo is {foo}, bar is {bar}</div>;
}

export default SimpleComponent;
