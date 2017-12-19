declare type elementGenerator = Function;

declare function createElement(
  element: string | Function,
  params: Object,
  ...children
): elementGenerator;

declare function safe(str: string): Renderer.HTMLString;

declare class Renderer {
    constructor(doctype?: string);

    renderView(
      view: elementGenerator | string,
      params: Object,
      stream: Renderer.Stream,
      { fragment: boolean }?,
      callback?: () => void
    ): void;

    registerView(
      macro: () => elementGenerator,
      name?: string,
      replace?: boolean
    ): string;
}

declare namespace Renderer {
    export interface Stream {
      write(msg: string): void;
      writeln(msg: string): void;
      flush(): void;
    }
    export class HTMLString {

     }
  }

export default Renderer;

export { createElement, safe };
