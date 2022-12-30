import Redis from 'ioredis'

const redis = new Redis("rediss://default:cb0a59a9a1714b32a9a18d21a2e6aefc@us1-flexible-caribou-37989.upstash.io:37989");

export default redis;