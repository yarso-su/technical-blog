# Technical Blog with Astro + TailwindCSS

Simple technical blog where I post about software concepts, services and tooling.

> [!NOTE]  
> The content of this blog is in **Spanish** but obviously the code isn't.

## Motivations

The purpose of this blog is **1.** Provide an accessible lecture for those people who are trying to figure out a lot of concepts in their journey as Developers and **2.** Helping me to externalize the concepts that I learned at my own rhythm so I can improve the way that I explain things to others.

The content is in Spanish because there isn't the same amount of technical content in Spanish as in English and for this moment I don't feel that I can generate original content in the way that people like [Philip Flenker](https://philippflenker.com/articles/) or [Vorner's random stuff](https://vorner.github.io/) do (I love reading this kind of content).

### Are you looking for a template to create your own blog?

This is a public repo for a reason, feel free to fork the repository to create your own blog, just don't forget to replace the content in the project (texts, images, icons, metadata...).

> [!WARNING]  
> Don't forget to check the LICENSE if you are planning to use this repo as a template for your own blog.

## Technologies

This is a very simple static project that uses **Astro** as a Framework and **TailwindCSS** for the styles. It uses the **Content Collections** API from Astro to generate static pages from `.markdown` files.

The internal structure is very basic and only tries to group things by functionality.

```
/
├── public/                 # Static assets (robots.txt, manifest, etc.)
├── src/
│   ├── assets/             # Astro optimizes assets with sharp at build-time
│   ├── components/         # Astro components
│   ├── data/               # Here you should put your collections directories
│   │   └── blog/           # My posts collection
│   ├── layouts/            # Page layouts (only one in this case)
│   ├── pages/              # File-based routing
│   ├── styles/             # Global styles
│   └── content.config.ts   # Content collections configuration
└── astro.config.mjs        # Astro configuration
```

## Usage

This repository uses `pnpm` as a package manager (if you use `npm` I suggest you take this as an opportunity to try `pnpm`).

```bash
pnpm dev
pnpm build
```

The project is configured to use the **Cloudflare Adapter** because I use **Cloudflare Pages** to deploy my frontend apps, you can change this just by removing the adapter dependency and its use in the `astro.config.mjs`.

### Known Limitations

This is a custom implementation designed to suit specific requirements, so yeah, there are a lot of areas for improvement.

Feel free to fork, create issues or just complain about it.

### License

MIT License.
