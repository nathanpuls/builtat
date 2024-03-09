import { c as create_ssr_component } from "../../chunks/ssr.js";
const css = {
  code: "brand.svelte-s9vug5{display:flex;flex-direction:row;justify-content:center;align-items:center}img.svelte-s9vug5{margin-top:.15rem}h1.svelte-s9vug5{font-size:2rem;font-family:'Outfit', sans-serif}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<head data-svelte-h="svelte-16ct5qf"><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap"> <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Urbanist:ital,wght@0,100..900;1,100..900&display=swap"></head> <brand class="svelte-s9vug5" data-svelte-h="svelte-gvhcmk"> <img src="/built-logo.jpeg" alt="" width="40rem" class="svelte-s9vug5"> <h1 class="svelte-s9vug5">Built.at</h1> </brand>`;
});
export {
  Page as default
};
