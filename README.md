This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Project Structure

```
my-react/
├── public/                  # Static assets
│   ├── bg.png               # Background image
│   ├── 0.jpg ... 20.jpg     # Product images
│   └── favicon.ico          # Site favicon
├── src/
│   └── app/                 # Next.js App Router directory
│       ├── (dashboard)/     # Dashboard route group
│       │   ├── layout.jsx
│       │   ├── blog/
│       │   │   └── page.jsx
│       │   ├── faq/
│       │   │   └── page.jsx
│       │   ├── forgot-password/
│       │   │   └── page.jsx
│       │   ├── login/
│       │   │   └── page.jsx
│       │   └── signup/
│       │       └── page.jsx
│       ├── about/
│       │   └── page.jsx
│       ├── components/      # React components
│       │   ├── AddCart.jsx
│       │   ├── AllProducts.jsx
│       │   ├── CartLink.jsx
│       │   ├── CreateTitle.jsx
│       │   ├── DesktopNavbar.jsx
│       │   ├── Footer.jsx
│       │   ├── FormButton.jsx
│       │   ├── InputData.jsx
│       │   ├── MobileNavbar.jsx
│       │   ├── Navbar.jsx
│       │   ├── NavbarLink.jsx
│       │   └── ProductCard.jsx
│       ├── contact/
│       │   └── page.jsx
│       ├── products/
│       │   └── [slug]/
│       │       └── page.jsx
│       ├── dummy.js         # Sample product data
│       ├── globals.css      # Global styles
│       ├── layout.jsx       # Root layout
│       ├── loading.jsx      # Loading component
│       ├── not-found.jsx    # 404 page
│       └── page.jsx         # Home page
├── .gitignore               # Git ignore rules
├── eslint.config.mjs        # ESLint configuration
├── jsconfig.json            # JavaScript configuration
├── next.config.js           # Next.js configuration
├── package.json             # Project dependencies
├── package-lock.json        # Lock file
├── postcss.config.mjs       # PostCSS configuration
└── README.md                # Project documentation
```

### Key Features:
- **Next.js 15.5.0** with App Router
- **React 19.1.0** with modern features
- **Tailwind CSS** for styling
- **React Icons** for iconography
- Product catalog system with sample data
- Multiple pages (Home, About, Contact, Products)
- Reusable components
- Responsive design
