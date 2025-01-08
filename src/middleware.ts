import { initializeDatabase } from "./lib/config/init-database";
import { NextResponse } from "next/server";

// Initialize database once
initializeDatabase();

export default function middleware() {
  return NextResponse.next();
}
