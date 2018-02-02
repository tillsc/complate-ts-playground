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
    <dl>
      {params.contents.map(content => {
      return <>
        <dd>{complate.safe(content)}</dd>
        <dt>{content.length}</dt>
        </>;
      })}
    </dl>
  </div>;
}

export default MyComponent;
