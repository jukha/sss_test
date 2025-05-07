This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

1. Install dependencies
```bash
npm i 
```

2. Configure `.env` (example in `.env.example`) 

3. Migrate prisma & generate types
```bash
npx prisma migrate dev # or npx prisma migrate deploy
npx prisma generate
```

4. Run
```bash
# run dev
npm run dev

# build and run production
npm run build
npm run start
```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
