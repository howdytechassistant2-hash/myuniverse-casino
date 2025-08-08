import { createClient } from "@supabase/supabase-js";

// Database configuration
const supabaseUrl =
  process.env.SUPABASE_URL || "https://your-project.supabase.co";
const supabaseKey = process.env.SUPABASE_ANON_KEY || "your-anon-key";

export const supabase = createClient(supabaseUrl, supabaseKey);

// Database types
export interface User {
  id: string;
  username: string;
  email: string;
  password: string;
  created_at: string;
}

export interface Deposit {
  id: string;
  user_id: string;
  username: string;
  game: string;
  amount: number;
  cashapp_tag: string;
  timestamp: string;
  status: string;
}

export interface Withdrawal {
  id: string;
  user_id: string;
  username: string;
  amount: number;
  cashtag: string;
  notes?: string;
  timestamp: string;
  status: string;
}

// Initialize database tables if they don't exist
export async function initializeDatabase() {
  try {
    // Create users table
    const { error: usersError } = await supabase.rpc("create_users_table");
    if (usersError && !usersError.message.includes("already exists")) {
      console.log("Users table creation:", usersError);
    }

    // Create deposits table
    const { error: depositsError } = await supabase.rpc(
      "create_deposits_table",
    );
    if (depositsError && !depositsError.message.includes("already exists")) {
      console.log("Deposits table creation:", depositsError);
    }

    // Create withdrawals table
    const { error: withdrawalsError } = await supabase.rpc(
      "create_withdrawals_table",
    );
    if (
      withdrawalsError &&
      !withdrawalsError.message.includes("already exists")
    ) {
      console.log("Withdrawals table creation:", withdrawalsError);
    }

    console.log("Database initialization completed");
  } catch (error) {
    console.error("Database initialization error:", error);
  }
}

// User operations
export async function createUser(
  username: string,
  email: string,
  password: string,
): Promise<User | null> {
  try {
    const { data, error } = await supabase
      .from("users")
      .insert([
        {
          username,
          email,
          password, // In production, hash this!
          created_at: new Date().toISOString(),
        },
      ])
      .select()
      .single();

    if (error) {
      console.error("Create user error:", error);
      return null;
    }

    return data;
  } catch (error) {
    console.error("Create user error:", error);
    return null;
  }
}

export async function findUserByEmail(email: string): Promise<User | null> {
  try {
    const { data, error } = await supabase
      .from("users")
      .select("*")
      .eq("email", email)
      .single();

    if (error) {
      return null;
    }

    return data;
  } catch (error) {
    return null;
  }
}

export async function findUserByEmailAndPassword(
  email: string,
  password: string,
): Promise<User | null> {
  try {
    const { data, error } = await supabase
      .from("users")
      .select("*")
      .eq("email", email)
      .eq("password", password)
      .single();

    if (error) {
      return null;
    }

    return data;
  } catch (error) {
    return null;
  }
}

// Deposit operations
export async function createDeposit(
  depositData: Omit<Deposit, "id">,
): Promise<Deposit | null> {
  try {
    const { data, error } = await supabase
      .from("deposits")
      .insert([depositData])
      .select()
      .single();

    if (error) {
      console.error("Create deposit error:", error);
      return null;
    }

    return data;
  } catch (error) {
    console.error("Create deposit error:", error);
    return null;
  }
}

// Withdrawal operations
export async function createWithdrawal(
  withdrawalData: Omit<Withdrawal, "id">,
): Promise<Withdrawal | null> {
  try {
    const { data, error } = await supabase
      .from("withdrawals")
      .insert([withdrawalData])
      .select()
      .single();

    if (error) {
      console.error("Create withdrawal error:", error);
      return null;
    }

    return data;
  } catch (error) {
    console.error("Create withdrawal error:", error);
    return null;
  }
}

// Admin operations
export async function getAllData() {
  try {
    const [usersResult, depositsResult, withdrawalsResult] = await Promise.all([
      supabase.from("users").select("id, username, email, created_at"),
      supabase.from("deposits").select("*"),
      supabase.from("withdrawals").select("*"),
    ]);

    return {
      users: usersResult.data || [],
      deposits: depositsResult.data || [],
      withdrawals: withdrawalsResult.data || [],
    };
  } catch (error) {
    console.error("Get all data error:", error);
    return {
      users: [],
      deposits: [],
      withdrawals: [],
    };
  }
}
