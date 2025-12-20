/// <reference types="react-scripts" />

declare module '*.png' {
  const value: string;
  export default value;
}

declare module '*.jpg' {
  const value: string;
  export default value;
}

declare module '*.jpeg' {
  const value: string;
  export default value;
}

declare module '*.svg' {
  const value: string;
  export default value;
}

declare module '*.gif' {
  const value: string;
  export default value;
}

declare module '*.webp' {
  const value: string;
  export default value;
}

// Declare dotlottie-player custom element
declare namespace JSX {
  interface IntrinsicElements {
    'dotlottie-player': React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement> & {
        src?: string;
        background?: string;
        speed?: string | number;
        loop?: boolean;
        autoplay?: boolean;
      },
      HTMLElement
    >;
  }
}

