# NHPP-api is a simple e-commerce api built with Node.js, Hono and PostgreSQL+prisma

## Project structure
```
ecommerce-hono/
├── prisma/
│   └── schema.prisma
├── src/
│   ├── index.js
│   ├── db/
│   │   └── prisma.js
│   ├── routes/
│   │   └── product.route.js
│   └── controllers/
│       └── product.controller.js
├── .env
└── package.json
```

## Why Hono + Prisma?

Hono provides explicit and predictable routing

Prisma offers type-safe database access

Fewer runtime surprises compared to Express

Cleaner debugging experience

Modern backend development workflow

balance all are same like express but hono is faster than express