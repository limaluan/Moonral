const initDb = {
    async init() {
        const Database = require('./config');

        const db = await Database();

        db.open();
        
        await db.exec(`CREATE TABLE posts(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT,
            desc TEXT
        )`);

        await db.close();
    }
}

initDb.init();
