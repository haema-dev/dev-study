// import { MongoClient } from 'mongodb';
//
// const uri = process.env.NEXT_PUBLIC_MONGODB_URI;
//
// let cachedClient = null;
// let cachedDb = null;
//
// if (!uri) {
//     throw new Error(
//         'Please define the NEXT_PUBLIC_MONGODB_URI environment variable inside .env.local'
//     );
// }
//
// export async function connectToDatabase() {
//     if (cachedClient && cachedDb) {
//         return { client: cachedClient, db: cachedDb };
//     }
//
//     const client = await MongoClient.connect(uri, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//     });
//
//     const db = client.db();
//
//     cachedClient = client;
//     cachedDb = db;
//
//     return { client, db };
// }