import { c as createComponent, d as getBlogPermalink, a as getPermalink } from './consts_Y_N4nI3i.mjs';
import 'piccolore';
import { r as renderComponent, a as renderTemplate, m as maybeRenderHead, u as unescapeHTML, F as Fragment } from './prerender_BCITZfbm.mjs';
import { b as $$Button, $ as $$PageLayout, a as $$Header } from './PageLayout_pgfiskAR.mjs';
import { $ as $$Hero } from './Hero_DUZbECK8.mjs';
import { $ as $$Content } from './Content_Dufv39xD.mjs';
import { $ as $$CallToAction } from './CallToAction_DkGHSROU.mjs';
import { $ as $$Features3 } from './Features3_CrQ3DOwB.mjs';
import { $ as $$Testimonials } from './Testimonials_DbhDs2sk.mjs';
import { $ as $$Steps } from './Steps_CrPFxUJ-.mjs';
import { $ as $$Grid } from './Grid_DQ5O_cyw.mjs';
import { f as findLatestPosts } from './blog_9lYgwSO5.mjs';
import { $ as $$WidgetWrapper } from './WidgetWrapper_BDyMmnSj.mjs';

const $$BlogLatestPosts = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$BlogLatestPosts;
  const {
    title = await Astro2.slots.render("title"),
    linkText = "View all posts",
    linkUrl = getBlogPermalink(),
    information = await Astro2.slots.render("information"),
    count = 4,
    id,
    isDark = false,
    classes = {},
    bg = await Astro2.slots.render("bg")
  } = Astro2.props;
  const posts = await findLatestPosts({ count }) ;
  return renderTemplate`${renderTemplate`${renderComponent($$result, "WidgetWrapper", $$WidgetWrapper, { "id": id, "isDark": isDark, "containerClass": classes?.container, "bg": bg }, { "default": async ($$result2) => renderTemplate`${maybeRenderHead()}<div class="flex flex-col lg:justify-between lg:flex-row mb-8">${title && renderTemplate`<div class="md:max-w-sm"><h2 class="text-3xl font-bold tracking-tight sm:text-4xl sm:leading-none group font-heading mb-2">${unescapeHTML(title)}</h2>${linkText && linkUrl && renderTemplate`${renderComponent($$result2, "Button", $$Button, { "variant": "link", "href": linkUrl }, { "default": async ($$result3) => renderTemplate`${" "}${linkText} »
` })}`}</div>`}${information && renderTemplate`<p class="text-muted dark:text-slate-400 lg:text-sm lg:max-w-md">${unescapeHTML(information)}</p>`}</div>${renderComponent($$result2, "Grid", $$Grid, { "posts": posts })}` })}` }`;
}, "/Users/josefscarantino/Documents/_Josef.co/astrowind/src/components/widgets/BlogLatestPosts.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const metadata = {
    title: "Personal Homepage Demo"
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": metadata }, { "announcement": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "announcement" })}`, "default": ($$result2) => renderTemplate`    ${renderComponent($$result2, "Hero", $$Hero, { "id": "hero", "title": "Sarah Johnson", "tagline": "Personal Web Demo", "actions": [{ variant: "primary", text: "Hire me", href: getPermalink("/contact#form") }] }, { "subtitle": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "subtitle" }, { "default": ($$result4) => renderTemplate`
I'm a Graphic Designer passionate about crafting visual stories. ${maybeRenderHead()}<br> With 5 years of experience and a degree from
      New York University's School of Design. I infuse vitality into brands and designs, transforming concepts into captivating
      realities.
` })}` })}  ${renderComponent($$result2, "Content", $$Content, { "id": "about", "columns": 3, "items": [
    {
      icon: "tabler:brand-dribbble",
      callToAction: {
        target: "_blank",
        text: "Dribbble",
        href: "#"
      }
    },
    {
      icon: "tabler:brand-behance",
      callToAction: {
        target: "_blank",
        text: "Behance",
        href: "#"
      }
    },
    {
      icon: "tabler:brand-pinterest",
      callToAction: {
        target: "_blank",
        text: "Pinterest",
        href: "#"
      }
    }
  ], "image": {
    src: "",
    alt: "Colorful Image",
    loading: "eager"
  } }, { "bg": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "bg" }, { "default": ($$result4) => renderTemplate` <div class="absolute inset-0 bg-blue-50 dark:bg-transparent"></div> ` })}`, "content": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "content" }, { "default": ($$result4) => renderTemplate` <h2 class="text-2xl font-bold tracking-tight dark:text-white sm:text-3xl mb-2">About me</h2> <p>
Welcome to my creative journey. My work is a testament to my commitment to bringing ideas to life, where each
        pixel becomes a brushstroke in the canvas of imagination.
</p> <br> <p>
I find inspiration in the world around me, whether through the pages of a captivating novel, the intricate
        details of typography, or the vibrant hues of nature during my outdoor escapades.
</p> <br> <p>If you're curious to dive deeper into my work, you can follow me:</p> ` })}` })}  ${renderComponent($$result2, "Steps", $$Steps, { "id": "resume", "title": "Work experience", "items": [
    {
      title: 'Graphic Designer <br /> <span class="font-normal">ABC Design Studio, New York, NY</span> <br /> <span class="text-sm font-normal">2021 - Present</span>',
      description: `Collaborate with clients to understand design requirements and objectives. <br /> Develop branding solutions, including logos, color palettes, and brand guidelines. <br /> Design marketing materials such as brochures, posters, and digital assets. <br /> Create visually appealing user interfaces for websites and applications.`,
      icon: "tabler:briefcase"
    },
    {
      title: 'Junior Graphic Designer <br /> <span class="font-normal">XYZ Creative Agency, Los Angeles, CA</span> <br /> <span class="text-sm font-normal">2018 - 2021</span>',
      description: `Assisted senior designers in creating design concepts and visual assets. <br /> Contributed to the development of brand identities and marketing collateral. <br /> Collaborated with the marketing team to ensure consistent design across campaigns. <br /> Gained hands-on experience in various design software and tools.`,
      icon: "tabler:briefcase"
    }
  ], "classes": { container: "max-w-3xl" } })}  ${renderComponent($$result2, "Steps", $$Steps, { "id": "resume", "title": "Education", "items": [
    {
      title: `Master of Fine Arts in Graphic Design <br /> <span class="font-normal">New York University's School of Design</span> <br /> <span class="text-sm font-normal">2018 - 2020</span>`,
      icon: "tabler:school"
    },
    {
      title: `Bachelor of Arts in Graphic Design <br /> <span class="font-normal">New York University's School of Design</span> <br /> <span class="text-sm font-normal">2014 - 2018</span>`,
      icon: "tabler:school"
    }
  ], "classes": { container: "max-w-3xl" } })}  ${renderComponent($$result2, "Features3", $$Features3, { "title": "Skills", "subtitle": "Discover the proficiencies that allow me to bring imagination to life through design.", "columns": 3, "defaultIcon": "tabler:point-filled", "items": [
    {
      title: "Graphic design",
      description: "Proficient in crafting visually appealing designs that convey messages effectively."
    },
    {
      title: "Branding and identity",
      description: "Skilled at developing cohesive brand identities, including logos and brand guidelines."
    },
    {
      title: "User-centered design",
      description: "Experienced in creating user-friendly interfaces and optimizing user experiences."
    },
    {
      title: "Adobe Creative Suite",
      description: "Skilled in using Photoshop, Illustrator, and InDesign to create and edit visual elements."
    },
    {
      title: "Typography",
      description: "Adept in selecting and manipulating typefaces to enhance design aesthetics."
    },
    {
      title: "Color theory",
      description: "Proficient in using color to evoke emotions and enhance visual harmony."
    },
    {
      title: "Print and digital design",
      description: "Knowledgeable in designing for both print materials and digital platforms."
    },
    {
      title: "Attention to detail",
      description: "Diligent in maintaining precision and quality in all design work."
    },
    {
      title: "Adaptability",
      description: "Quick to adapt to new design trends, technologies, and client preferences."
    }
  ] })}  ${renderComponent($$result2, "Content", $$Content, { "id": "porfolio", "title": "Elevating visual narratives", "subtitle": "Embark on a design journey that surpasses pixels, entering a realm of imagination. Explore my portfolio, where passion and creativity converge to shape enthralling visual narratives.", "isReversed": true, "items": [
    {
      title: "Description:",
      description: "Developed a comprehensive brand identity for a tech startup, Tech Innovators, specializing in disruptive innovations. The goal was to convey a modern yet approachable image that resonated with both corporate clients and tech enthusiasts."
    },
    {
      title: "Role:",
      description: "Led the entire branding process from concept to execution. Created a dynamic logo that symbolized innovation, selected a vibrant color palette, and I designed corporate stationery, website graphics, and social media assets."
    }
  ], "image": {
    src: "",
    alt: "Tech Design Image"
  }, "callToAction": {
    target: "_blank",
    text: "Go to the project",
    icon: "tabler:chevron-right",
    href: "#"
  } }, { "bg": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "bg" }, { "default": ($$result4) => renderTemplate` <div class="absolute inset-0 bg-blue-50 dark:bg-transparent"></div> ` })}`, "content": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "content" }, { "default": ($$result4) => renderTemplate` <h3 class="text-2xl font-bold tracking-tight dark:text-white sm:text-3xl mb-2">
Project 1: <br><span class="text-2xl">Brand identity for tech innovators</span> </h3> ` })}` })}  ${renderComponent($$result2, "Content", $$Content, { "isReversed": true, "isAfterContent": true, "items": [
    {
      title: "Description:",
      description: 'Designed a captivating event poster for an art and music festival, "ArtWave Fusion," aiming to showcase the synergy between visual art and music genres.'
    },
    {
      title: "Role:",
      description: `Translated the festival's creative theme into a visually striking poster. Used bold typography, vibrant colors, and abstract elements to depict the fusion of art and music. Ensured the design captured the festival's vibrant atmosphere.`
    }
  ], "image": {
    src: "",
    alt: "Art and Music Poster Image"
  }, "callToAction": {
    target: "_blank",
    text: "Go to the project",
    icon: "tabler:chevron-right",
    href: "#"
  } }, { "bg": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "bg" }, { "default": ($$result4) => renderTemplate` <div class="absolute inset-0 bg-blue-50 dark:bg-transparent"></div> ` })}`, "content": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "content" }, { "default": ($$result4) => renderTemplate` <h3 class="text-2xl font-bold tracking-tight dark:text-white sm:text-3xl mb-2">
Project 2: <br><span class="text-2xl">Event poster for art & music festival</span> </h3> ` })}` })}  ${renderComponent($$result2, "Content", $$Content, { "isReversed": true, "isAfterContent": true, "items": [
    {
      title: "Description:",
      description: `Redesigned the e-commerce website for an eco-conscious fashion brand, GreenVogue. The objective was to align the brand's online presence with its sustainable ethos and improve user experience.`
    },
    {
      title: "Role:",
      description: `Conducted a thorough analysis of the brand's values and customer base to inform the design direction. Created a visually appealing interface with intuitive navigation, highlighting sustainable materials, and integrating a user-friendly shopping experience.`
    }
  ], "image": {
    src: "",
    alt: "Fashion e-commerce Image"
  }, "callToAction": {
    target: "_blank",
    text: "Go to the project",
    icon: "tabler:chevron-right",
    href: "#"
  } }, { "bg": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "bg" }, { "default": ($$result4) => renderTemplate` <div class="absolute inset-0 bg-blue-50 dark:bg-transparent"></div> ` })}`, "content": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "content" }, { "default": ($$result4) => renderTemplate` <h3 class="text-2xl font-bold tracking-tight dark:text-white sm:text-3xl mb-2">
Project 3: <br><span class="text-2xl">E-commerce website redesign for fashion brand</span> </h3> ` })}` })}  ${renderComponent($$result2, "Testimonials", $$Testimonials, { "title": "Client testimonials", "subtitle": "Discover what clients have to say about their experiences working with me.", "testimonials": [
    {
      testimonial: `She took our vague concept and turned it into a visual masterpiece that perfectly aligned with our goals. Her attention to detail and ability to translate ideas into compelling visuals exceeded our expectations.`,
      name: "Mark Thompson",
      job: "Creative director",
      image: {
        src: "",
        alt: "Mark Thompson Image"
      }
    }
  ] })}  ${renderComponent($$result2, "CallToAction", $$CallToAction, { "title": "Let's create together", "subtitle": "Ready to transform your vision into captivating designs?", "actions": [
    {
      variant: "primary",
      text: "Hire me",
      href: "/"
    }
  ] })}  ${renderComponent($$result2, "BlogLatestPosts", $$BlogLatestPosts, { "id": "blog", "title": "Explore my insightful articles on my blog", "information": `Dive into a realm of design wisdom and creative inspiration, where you'll find invaluable insights, practical tips, and captivating narratives that elevate and enrich your creative journey.` }, { "bg": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "bg" }, { "default": ($$result4) => renderTemplate` <div class="absolute inset-0 bg-blue-50 dark:bg-transparent"></div> ` })}` })} `, "header": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "header" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Header", $$Header, { "links": [
    { text: "Home", href: "#" },
    { text: "About", href: "#about" },
    { text: "Resume", href: "#resume" },
    { text: "Porfolio", href: "#porfolio" },
    { text: "Blog", href: "#blog" },
    { text: "Github", href: "https://github.com/arthelokyo" }
  ], "actions": [
    {
      text: "Hire me",
      href: "#"
    }
  ], "isSticky": true, "showToggleTheme": true })} ` })}` })}`;
}, "/Users/josefscarantino/Documents/_Josef.co/astrowind/src/pages/garden/index.astro", void 0);

const $$file = "/Users/josefscarantino/Documents/_Josef.co/astrowind/src/pages/garden/index.astro";
const $$url = "/garden";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
