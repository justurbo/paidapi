# Running React.js and Node.js concurrently
1. Make sure you are in paidapi\ directory
2. Run application with the command: npm run dev

# PyCharm local environment setup
1. Download [Node 14.5.5](https://nodejs.org/en/download/releases/)
2. Add npm configuration to run frontend and backend applications
3. If database is not setup, skip to **Mongo database setup**
4. Run the application

# Mongo database setup
In order to run `npm run server` link Mongo database, local or production, by using `.env[.local]` files.

## Run Mongo locally using docker-compose
Run docker-compose to start mongo and mongo-express containers.
> docker-compose up -d

Create `paidapi_local` database using [mongo-express](http://localhost:8081).
