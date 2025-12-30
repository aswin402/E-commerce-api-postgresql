# simple e-commerce api with Node.js + Express + Prisma + PostgreSQL

## Project Structure
```
simple-ecommerce-prisma/
├── prisma/
│   ├── schema.prisma
│   └── migrations/
│
├── src/
│   ├── server.js
│   ├── config/
│   │   └── prisma.js       
│   ├── routes/
│   │   ├── product.routes.js
│   │   └── order.routes.js
│   └── controllers/
│       ├── product.controller.js
│       └── order.controller.js
│
├── .env
└── package.json

```

## Why this architecture is PRO
Layer	                Responsibility
server.js	           App start & middleware
routes/              	API endpoints
controllers/	        Business logic
config/prisma.js	    DB connection
schema.prisma	         DB structure

## Benefits
✔ Clean
✔ Scalable
✔ Prisma best practice
✔ Express industry style

No db.js anymore — Prisma handles that.

### What changes now?
Before	                 Now
Raw SQL queries	         Prisma Client (type-safe)
Manual table handling	 Prisma schema
pg pool	                 Prisma manages connection
Runtime SQL errors	     Compile-time safety


Think of Prisma like Mongoose but for SQL (you already sensed this earlier ✔️).

## setup
### Install dependencies:
```bash
npm install express prisma @prisma/client dotenv
```
### Dev dependency:
```bash
npx prisma init
```

then first create a database in your postgresql and then add the credentials to `.env` file.
then define the models in `schema.prisma` file.
then
### Create Tables (Migration)
```bash
npx prisma migrate dev --name init
```


### This:

Creates tables

Generates Prisma Client

Keeps migrations tracked

## Explains what happened
### prisma/schema.prisma

This is where you define your data model. It's written in Prisma Schema Language, which looks similar to GraphQL or TypeScript. Prisma will create:

* products

* orders

* order_items

### src/config/prisma.js

Creates ONE Prisma client (important!)
* Prevents DB connection leaks

* Used across controllers


now in my opinion using prisma is better than using sequelize because it has more features and also it is easier to use.
but node.js+express.js+prisma+postgresql is really easy but in working with code i get some compile time errors and testing api in post man i got some errors so its because of i didn't get any runtime error while coding. its really make me sick to debugging these errors.