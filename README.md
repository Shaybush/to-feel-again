# TO-FEEL-AGAIN

A side job to my client, landing page with credit card payment

### Project Technologies -

<img src="https://skillicons.dev/icons?i=typescript,nextjs,tailwind,prisma,postgresql,docker,vscode&perline=7" />

## Installation + Running The Application

Steps:

1. Clone the repository to your local machine:
   ```sh
   git clone https://github.com/Shaybush/to-feel-again.git
   ```
2. Open folder:

   ```sh
   cd to-feel-again
   ```

3. Edit .env File :

   ```sh
    DB_HOST=
    DB_USER=
    DB_PASSWORD=
    DB_NAME=
    DB_PORT=

    PGADMIN_EMAIL=
    PGADMIN_PASSWORD=
   ```

4. Docker compose setup:
   ```sh
   docker-compose up -d --build
   ```
5. Setup prisma:

   ```sh
   # for dev migration (it loads migration.sql file)
   pnpx prisma migrate dev

   # generate the Prisma client
   pnpx prisma generate
   ```

6. Download Dependencies:
   ```sh
   pnpm i
   ```
7. Generate prisma:

   ```sh
   pnpx prisma generate
   ```

8. Run Project In Local:
   ```sh
   pnpm run dev
   ```

## Project Photos
