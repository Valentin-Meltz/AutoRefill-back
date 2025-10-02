module.exports = {
    // Network
    PORT: process.env.PORT,
    API_PREFIX: process.env.API_PREFIX,

    // Database configuration
    DATABASE_POSTGRES_URL: process.env.POSTGRES_DB_URL,
    DATABASE_POSTGRES_USER: process.env.POSTGRES_USER,
    DATABASE_POSTGRES_PASSWORD: process.env.POSTGRES_PASSWORD,
    DATABASE_POSTGRES_DB: process.env.POSTGRES_DB,
    DATABASE_POSTGRES_HOST: process.env.POSTGRES_HOST,
    DATABASE_POSTGRES_PORT: process.env.POSTGRES_PORT,

    // External API keys
    EXTERNAL_API_URL: process.env.EXTERNAL_API_URL,
    EXTERNAL_API_KEY: process.env.EXTERNAL_API_KEY,
};