import { c as createComponent } from './consts_Lk1RniJ-.mjs';
import 'piccolore';
import { r as renderComponent, a as renderTemplate } from './prerender_N0dXcbyA.mjs';
import { $ as $$PageLayout } from './PageLayout_Do_cWonv.mjs';
import { $ as $$HeroText } from './HeroText_Dmbz07N9.mjs';
import { $ as $$CallToAction } from './CallToAction_iaBWd4BY.mjs';

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
