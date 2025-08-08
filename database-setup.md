# Database Setup Guide

## Step 1: Connect to Supabase

1. Open MCP popover and connect to Supabase
2. Create a new project called "myuniverse-casino"
3. Get your project URL and anon key

## Step 2: Set Environment Variables in Netlify

Go to your Netlify project settings and add these environment variables:

```
SUPABASE_URL=https://your-project-id.supabase.co
SUPABASE_ANON_KEY=your-anon-key-here
```

## Step 3: Run Database Schema

In your Supabase project dashboard:

1. Go to SQL Editor
2. Paste and run the contents of `server/schema.sql`
3. This will create the users, deposits, and withdrawals tables

## Step 4: Test the Database

After deployment, test these endpoints:

- Signup: POST /api/auth/signup
- Login: POST /api/auth/login
- View data: GET /api/admin/data

## Database Tables Created:

### Users Table

- id (UUID, primary key)
- username (unique)
- email (unique)
- password (hashed in production)
- created_at (timestamp)

### Deposits Table

- id (UUID, primary key)
- user_id (foreign key to users)
- username
- game (VBLink, Ultra Panda, etc.)
- amount (decimal)
- cashapp_tag
- timestamp
- status (pending/completed)

### Withdrawals Table

- id (UUID, primary key)
- user_id (foreign key to users)
- username
- amount (decimal)
- cashtag (user's CashApp tag)
- notes (optional)
- timestamp
- status (pending/completed)

## Features:

✅ Persistent data storage
✅ Automatic UUID generation
✅ Foreign key relationships
✅ Indexes for performance
✅ Row Level Security
✅ Full admin access via API
