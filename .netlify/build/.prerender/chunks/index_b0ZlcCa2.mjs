import { c as createComponent } from './consts_C7ylOX09.mjs';
import 'piccolore';
import { r as renderComponent, a as renderTemplate, F as Fragment, m as maybeRenderHead } from './prerender_BemVM9ED.mjs';
import { $ as $$PageLayout } from './PageLayout_BFWDp51i.mjs';
import { $ as $$Hero } from './Hero_Du5Ye0Pp.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const metadata = {
    title: "Josef.co - Personal site of Josef Scarantino",
    ignoreTitleTemplate: true
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": metadata }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Hero", $$Hero, {}, { "subtitle": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "subtitle" }, { "default": ($$result4) => renderTemplate`
Systems thinker, community-builder, &amp; accidental founder.${maybeRenderHead()}<br>Currently building the shared transformation
      economy at <a href="https://forwardkind.com" class="text-accent font-semibold">Forwardkind</a>.` })}`, "title": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "title" }, { "default": ($$result4) => renderTemplate`
Josef helps cultivate human<br>potential for <span class="text-accent dark:text-white">collective impact</span>.
` })}` })} ` })}`;
}, "/Users/josefscarantino/Documents/_Josef.co/astrowind/src/pages/index.astro", void 0);

const $$file = "/Users/josefscarantino/Documents/_Josef.co/astrowind/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
