# Chashma Water — Phase 1 MVP

Pure water, delivered fresh. A Next.js 15 + TypeScript + Tailwind CSS website
for a bottled water delivery company.

## What's included (Phase 1)

- **Home page** — hero, why choose us, delivery process, subscription plans,
  coverage area checker, testimonials, FAQ, CTA banner
- **Products page** — search, category filters (cans / bottles / packages),
  price sorting
- **Product detail pages** — specs, quantity selector, related products,
  reviews
- **Cart & checkout** — quantity controls, delivery fee calculation, COD /
  bank transfer, order confirmation
- **Order tracking** — timeline UI with driver info
- **Admin dashboard** — orders (with status updates), products, customers,
  daily stats
- **WhatsApp ordering** — floating button + WhatsApp links throughout
- SEO: dynamic metadata, Open Graph, sitemap.xml, robots.txt
- Accessible: semantic HTML, keyboard focus states, reduced-motion support
- Mobile-first responsive design

## Getting started

### 1. Install Node.js

You need Node.js 18.18 or later. Check with:

```bash
node -v
```

If you don't have it, install via [nvm](https://github.com/nvm-sh/nvm):

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
nvm install --lts
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for production

```bash
npm run build
npm start
```

## Project structure

```
chashma-water/
├── src/
│   ├── app/
│   │   ├── page.tsx              # Home page
│   │   ├── layout.tsx            # Root layout (navbar, footer, providers)
│   │   ├── globals.css
│   │   ├── products/
│   │   │   ├── page.tsx          # Products listing
│   │   │   └── [slug]/page.tsx   # Product detail
│   │   ├── cart/page.tsx         # Cart + checkout
│   │   ├── track/page.tsx        # Order tracking
│   │   ├── contact/page.tsx      # Contact page
│   │   ├── admin/page.tsx        # Admin dashboard
│   │   ├── api/
│   │   │   ├── products/route.ts
│   │   │   └── orders/route.ts
│   │   ├── sitemap.ts
│   │   ├── robots.ts
│   │   ├── not-found.tsx
│   │   └── error.tsx
│   ├── components/
│   │   ├── layout/                # Navbar, Footer
│   │   ├── sections/               # Home page sections
│   │   └── ui/                     # Buttons, cards, toast, etc.
│   ├── lib/
│   │   ├── products.ts            # Product data
│   │   ├── cart-context.tsx       # Cart state (localStorage)
│   │   └── utils.ts
│   └── types/index.ts
├── public/
├── tailwind.config.ts
├── package.json
└── .env.example
```

## Customizing

- **WhatsApp number**: edit `WHATSAPP_NUMBER` in `src/lib/utils.ts`
- **Products & prices**: edit `src/lib/products.ts`
- **Delivery areas**: edit `DELIVERY_AREAS` in `src/lib/utils.ts`
- **Colors**: edit `tailwind.config.ts` (primary = #0284C7, cyan = #06B6D4, dark = #0F172A)

## Next steps (Phase 2+)

This MVP uses static product data and an in-memory order store. To go to
production:

1. Add **PostgreSQL + Prisma** for persistent products, orders, customers
2. Add **NextAuth** for customer accounts and admin login
3. Add **Stripe** for online payments
4. Add **Nodemailer** for order confirmation emails
5. Add subscription scheduling, driver assignment, and SMS notifications

## Deployment

This project deploys easily to [Vercel](https://vercel.com):

```bash
npm install -g vercel
vercel
```

Or connect your Git repository to Vercel for automatic deployments.
