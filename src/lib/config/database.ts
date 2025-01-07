export type Database = {
  public: {
    Tables: {
      [key: string]: any
    }
  }
}

export interface DatabaseConfig {
    url: string
    anonKey: string
    serviceRole?: string
  }
  
  export class DatabaseConnection {
    private static instance: DatabaseConnection;
    private config: DatabaseConfig;
  
    private constructor(config: DatabaseConfig) {
      this.config = config;
    }
  
    public static initialize(config: DatabaseConfig) {
      if (!DatabaseConnection.instance) {
        DatabaseConnection.instance = new DatabaseConnection(config);
      }
      return DatabaseConnection.instance;
    }
  
    public static getInstance(): DatabaseConnection {
      if (!DatabaseConnection.instance) {
        throw new Error('Database connection not initialized. Call initialize() first.');
      }
      return DatabaseConnection.instance;
    }
  
    public getConfig(): DatabaseConfig {
      return this.config;
    }
  }