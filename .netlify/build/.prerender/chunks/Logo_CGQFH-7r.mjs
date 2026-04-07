import { c as createComponent } from './consts_C7ylOX09.mjs';
import 'piccolore';
import { m as maybeRenderHead, r as renderComponent, a as renderTemplate } from './prerender_BemVM9ED.mjs';
import { $ as $$Image } from './_astro_assets_KLVvdhKM.mjs';

const $$Logo = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<span class="self-center ml-2 rtl:ml-0 rtl:mr-2 text-2xl md:text-xl font-bold text-gray-900 whitespace-nowrap dark:text-white"> ${renderComponent($$result, "Image", $$Image, { "src": "/src/assets/images/logo.svg", "alt": "", "width": "60", "height": "71" })} </span>`;
}, "/Users/josefscarantino/Documents/_Josef.co/astrowind/src/components/Logo.astro", void 0);

export { $$Logo as $ };
