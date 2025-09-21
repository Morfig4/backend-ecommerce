import { MongoMemoryServer } from 'mongodb-memory-server';

async function createMongoMemoryServer() {
    return await MongoMemoryServer.create();
}

export default createMongoMemoryServer;