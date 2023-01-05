const {MongoClient} = require('mongodb');
const client = new MongoClient(uri);
await client.connect();
await listDatabases(client);
try {
    await client.connect();

    await listDatabases(client);
 
} catch (e) {
    console.error(e);
}
finally {
    await client.close();
}
main().catch(console.error);