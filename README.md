# Development

Steps to run the app in dev mode.

1. Run the database

```
docker compose up -d
```

2. Rename .env.example
3. Replace the variables with your own.
4. Do an api call to "localhost:3000/api/seed" to populate the db with dummy data.

# Prisma Commands

```
npx prisma init
```

```
npx prisma migrate dev
```

```
npx prisma generate
```
