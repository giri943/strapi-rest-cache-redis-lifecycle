const Redis = require('ioredis');

async function flushCache() {
    const redis = new Redis({
        host:process.env.REDIS_DATABASE_HOST,
        port:process.env.REDIS_DATABASE_PORT,
    });
    try {
        // Flushes all the cached data from redis
        await redis.flushall();
        console.log('Cache flushed successfully.');
    } catch (error) {
        console.error('Error flushing cache:', error.message);
    } finally {
        // Close the Redis connection
        redis.quit();
    }
}

module.exports = { flushCache };
