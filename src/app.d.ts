// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
  namespace App {
    // interface Error {}
    // interface Locals {}
    // interface PageData {}
    // interface Platform {}
  }
  interface ProjectOptions {
    title: string;
    src: string;
    img: string;
    url: string;
    description: string;
    tools: string;
  }

  interface HobbyOptions {
    title: string;
    description: string;
    img: string;
    date: string;
  }

  interface HobbyPageOptions {
    title: string;
    subtitle?: string;
    description: string;
    data: HobbyOptions[];
  }

  interface HobbyTextOptions {
    title: string;
    description: string;
    date: string;
  }
}

export {};
