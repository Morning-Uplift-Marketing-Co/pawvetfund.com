/// <reference types="vite/client" />

// vite-imagetools type definitions for srcset
declare module '*&as=srcset' {
  const src: string;
  export default src;
}

declare module '*&format=webp&as=srcset' {
  const src: string;
  export default src;
}

declare module '*&format=jpg&as=srcset' {
  const src: string;
  export default src;
}

// vite-imagetools type definitions for single image with width
declare module '*?w=1280' {
  const src: string;
  export default src;
}

declare module '*?w=640' {
  const src: string;
  export default src;
}

declare module '*?w=960' {
  const src: string;
  export default src;
}

declare module '*?w=1920' {
  const src: string;
  export default src;
}
