import { c as createComponent } from './consts_Y_N4nI3i.mjs';
import 'piccolore';
import { m as maybeRenderHead, r as renderComponent, a as renderTemplate } from './prerender_BCITZfbm.mjs';
import { $ as $$Image } from './_astro_assets_BmLuMCAg.mjs';

const $$Logo = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<span class="self-center ml-2 rtl:ml-0 rtl:mr-2 text-2xl md:text-xl font-bold text-gray-900 whitespace-nowrap dark:text-white"> ${renderComponent($$result, "Image", $$Image, { "src": "/src/assets/images/logo.svg", "alt": "", "width": "60", "height": "71" })} </span>`;
}, "/Users/josefscarantino/Documents/_Josef.co/astrowind/src/components/Logo.astro", void 0);

export { $$Logo as $ };
