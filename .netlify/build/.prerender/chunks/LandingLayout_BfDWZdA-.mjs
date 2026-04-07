import { c as createComponent } from './consts_Y_N4nI3i.mjs';
import 'piccolore';
import { r as renderComponent, a as renderTemplate, F as Fragment, c as renderSlot } from './prerender_BCITZfbm.mjs';
import { $ as $$PageLayout, a as $$Header, h as headerData } from './PageLayout_pgfiskAR.mjs';

const $$LandingLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$LandingLayout;
  const { metadata } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "PageLayout", $$PageLayout, { "metadata": metadata }, { "default": ($$result2) => renderTemplate`  ${renderSlot($$result2, $$slots["default"])} `, "header": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "header" }, { "default": ($$result3) => renderTemplate` ${renderSlot($$result3, $$slots["header"], renderTemplate` ${renderComponent($$result3, "Header", $$Header, { "links": headerData?.links[2] ? [headerData.links[2]] : void 0, "actions": [
    {
      text: "Download",
      href: "https://github.com/arthelokyo/astrowind"
    }
  ], "showToggleTheme": true, "position": "right" })} `)} ` })}` })}`;
}, "/Users/josefscarantino/Documents/_Josef.co/astrowind/src/layouts/LandingLayout.astro", void 0);

export { $$LandingLayout as $ };
