// Google Analytics 4 type declarations
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (
      command: string,
      targetId: string,
      config?: {
        page_path?: string;
        [key: string]: any;
      }
    ) => void;
  }
}

export {};
