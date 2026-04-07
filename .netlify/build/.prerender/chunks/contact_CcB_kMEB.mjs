import { c as createComponent } from './consts_Y_N4nI3i.mjs';
import 'piccolore';
import { r as renderComponent, a as renderTemplate } from './prerender_BCITZfbm.mjs';
import { $ as $$PageLayout } from './PageLayout_pgfiskAR.mjs';
import { $ as $$HeroText } from './HeroText_DrfJPPo0.mjs';
import { $ as $$CallToAction } from './CallToAction_DkGHSROU.mjs';

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  const metadata = {
    title: "Contact"
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": metadata }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "HeroText", $$HeroText, { "tagline": "Contact", "title": "Let's Connect" })} ${renderComponent($$result2, "CallToAction", $$CallToAction, { "title": "", "subtitle": "Reach me by email <b>hello at josef.co</b>." })} ` })}`;
}, "/Users/josefscarantino/Documents/_Josef.co/astrowind/src/pages/contact.astro", void 0);

const $$file = "/Users/josefscarantino/Documents/_Josef.co/astrowind/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
