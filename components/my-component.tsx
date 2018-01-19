import * as complate from "complate-stream";

interface AdvancedHeader {
  main: string;
  sub: string;
}

interface MyCompontentInterface {
  header: string | AdvancedHeader;
  contents: string[];
}

let MyComponent = (params: MyCompontentInterface) => {
  return <div>
    <h3>
      { (typeof params.header === "string") ? params.header : [params.header.main, <small>{params.header.sub}</small>] }
    </h3>
    {params.contents.map(content => <p>{complate.safe(content)}</p>)}
  </div>;
}

export default MyComponent;
