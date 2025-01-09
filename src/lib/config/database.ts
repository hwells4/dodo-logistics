export type Database = {
  public: {
    Tables: Record<string, unknown>;
  };
};

export interface DatabaseConfig {
  url: string;
  anonKey: string;
  serviceRole?: string;
}

export class DatabaseConnection {
  private static instance: DatabaseConnection;
  private config: {
    url: string;
    anonKey: string;
  };
  private static isInitialized = false;

  private constructor(config: { url: string; anonKey: string }) {
    this.config = config;
  }

  public static initialize(config: { url: string; anonKey: string }) {
    if (!DatabaseConnection.isInitialized) {
      console.log("Creating new DatabaseConnection instance");
      DatabaseConnection.instance = new DatabaseConnection(config);
      DatabaseConnection.isInitialized = true;
    }
    return DatabaseConnection.instance;
  }

  public static getInstance(): DatabaseConnection {
    if (!DatabaseConnection.isInitialized) {
      const config = {
        url: process.env.NEXT_PUBLIC_SUPABASE_URL!,
        anonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      };
      if (config.url && config.anonKey) {
        return DatabaseConnection.initialize(config);
      }
      throw new Error(
        "Database connection not initialized and no environment variables available",
      );
    }
    return DatabaseConnection.instance;
  }

  public getConfig(): {
    url: string;
    anonKey: string;
  } {
    return this.config;
  }
}
