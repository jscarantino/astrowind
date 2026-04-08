import { getPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
          text: 'Home',
          href: getPermalink('/'),
        },
        {
          text: 'About',
          href: getPermalink('/about'),
        },
//    {
//      text: 'Garden',
//      links: [
//        {
//          text: 'Mental Models',
//          href: getPermalink('/garden/models'),
//        },
//        {
//          text: 'Article',
//          href: getPermalink('get-started-website-with-astro-tailwind-css', 'post'),
//        },
//        {
//          text: 'Category Page',
//          href: getPermalink('tutorials', 'category'),
//        },
//        {
//          text: 'Tag Page',
//          href: getPermalink('astro', 'tag'),
//        },
//      ],
//    },
    {
          text: 'Contact',
          href: getPermalink('/contact'),
        },
  ],
  actions: [{ text: 'Hire Me', href: '/contact', icon:'tabler:chevrons-right' }],
};

export const footerData = {
  links: [
    {
      title: '',
      links: [
        { text: '', href: '' },
      ],
    },
    {
      title: '',
      links: [
        { text: '', href: '' },
      ],
    },
    {
      title: '',
      links: [
        { text: '', href: '' },
      ],
    },
    {
      title: '',
      links: [
        { text: 'Home', href: '/' },
        { text: 'About', href: '/about' },
        { text: 'Contact', href: '/contact' },
      ],
    },
  ],
  socialLinks: [
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/in/josefscarantino/', target:'_blank' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/jscarantinophotography', target:'_blank' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/jscarantino', target:'_blank' },
    { ariaLabel: 'Buy Me a Coffee', icon: 'tabler:coffee', href: 'buymeacoffee.com/josefscarantino', target:'_blank' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  ],
  footNote: `
    &copy; 2026 - Josef Scarantino
  `,
};
