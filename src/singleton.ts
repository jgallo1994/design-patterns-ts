// Singleton Pattern

class Database {
    private static instance: Database;

    private constructor() {
        console.log('Database connection established.');
    }

    public static getInstance(): Database {
        if (!Database.instance) {
            Database.instance = new Database();
        }
        return Database.instance;
    }

    public query(sql: string) {
        console.log(`Executing query: ${sql}`);
    }
}

// Usage
const db1 = Database.getInstance();
db1.query('SELECT * FROM users');

const db2 = Database.getInstance();
console.log(db1 === db2); // true
