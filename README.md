## Install dependencies
```bash
npm i 
```

## Configure environments

environments file - `.env`

environments examples - `.env.example`

## Prisma migrations

After changing `prisma/schema.prisma`, apply a migration with the following command:
```bash
npx prisma migrate dev
npx prisma generate
```

After applying migration locally, **make sure** to commit and push it to git repository.

Note: when you run `npm run build`, migrations will be automatically applied
in the production mode (using `prisma migrate deploy`).

So, before building application, make sure to change `JAWSDB_URL` in .env to production. (nothing
bad will happen if you don't do that, but you will have to migrate production db manually)

Important rules:

- **Never** use `prisma migrate dev` for production database
- **Do not** modify production database directly. Do it only with the prisma schema and migrations
- **Always** push migrations to git repo
- **Avoid** editing or deleting the existing migrations (especially if a migration is already in git repo). Instead, create new migrations.
  (the only exception is if something is already broken and there is no other way to fix) 

Documentation for migrations is [here](https://www.prisma.io/docs/orm/prisma-migrate/workflows/development-and-production)

## Run
```bash
# run dev
npm run dev

# build and run production
npm run build
npm run start
```

Dev instance: [http://localhost:3000](http://localhost:3000)
