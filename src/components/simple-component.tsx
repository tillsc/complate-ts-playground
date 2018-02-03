import * as complate from "complate-stream";

let SimpleComponent = (params: {foo: string, bar: number}) => {
  return <div>Foo is {params.foo}, bar is {params.bar}</div>;
}

export default SimpleComponent;
