/**
 * Create User Profiles Table
 *
 * Stores user relocation profile data collected during onboarding.
 * Run: node scripts/create-user-profiles.js
 */

const { neon } = require('@neondatabase/serverless');
const fs = require('fs');
const path = require('path');

// Load environment
function loadEnv() {
  const envPath = path.join(__dirname, '..', '.env.local');
  if (fs.existsSync(envPath)) {
    const envContent = fs.readFileSync(envPath, 'utf8');
    envContent.split('\n').forEach(line => {
      const [key, ...valueParts] = line.split('=');
      if (key && valueParts.length) {
        process.env[key.trim()] = valueParts.join('=').trim();
      }
    });
  }
}
loadEnv();

const DATABASE_URL = process.env.DATABASE_URL;
if (!DATABASE_URL) {
  console.error('ERROR: DATABASE_URL not set');
  process.exit(1);
}

const sql = neon(DATABASE_URL);

async function createTables() {
  console.log('Creating user profile tables...\n');

  try {
    // User profiles table
    await sql`
      CREATE TABLE IF NOT EXISTS user_profiles (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        user_id TEXT NOT NULL UNIQUE,
        email TEXT,
        full_name TEXT,

        -- Persona/Category
        persona TEXT CHECK (persona IN ('company', 'hnw', 'digital_nomad', 'lifestyle', 'family', 'retiree')),

        -- Basic Info
        current_country TEXT,
        current_city TEXT,
        nationality TEXT,
        age_range TEXT,
        family_size INTEGER DEFAULT 1,
        has_children BOOLEAN DEFAULT false,
        children_ages TEXT[],

        -- Relocation Goals
        target_destinations TEXT[],
        primary_reason TEXT,
        timeline TEXT,
        budget_monthly INTEGER,

        -- Work/Income
        employment_status TEXT,
        occupation TEXT,
        industry TEXT,
        remote_work_capable BOOLEAN DEFAULT false,
        annual_income_range TEXT,
        has_business BOOLEAN DEFAULT false,
        business_type TEXT,

        -- Priorities (1-5 scale or boolean)
        priority_tax_benefits INTEGER,
        priority_cost_of_living INTEGER,
        priority_climate INTEGER,
        priority_healthcare INTEGER,
        priority_education INTEGER,
        priority_safety INTEGER,
        priority_culture INTEGER,
        priority_language INTEGER,

        -- Lifestyle Preferences
        climate_preference TEXT,
        city_size_preference TEXT,
        beach_important BOOLEAN DEFAULT false,
        international_schools_needed BOOLEAN DEFAULT false,
        healthcare_quality_important BOOLEAN DEFAULT true,
        english_speaking_important BOOLEAN DEFAULT true,

        -- Financial
        property_budget INTEGER,
        has_investment_funds BOOLEAN DEFAULT false,
        investment_amount_range TEXT,
        interested_in_golden_visa BOOLEAN DEFAULT false,

        -- Onboarding Status
        onboarding_completed BOOLEAN DEFAULT false,
        onboarding_step INTEGER DEFAULT 0,
        onboarding_data JSONB DEFAULT '{}',

        -- AI Recommendations
        recommended_destinations JSONB DEFAULT '[]',
        recommended_visas JSONB DEFAULT '[]',
        ai_insights JSONB DEFAULT '{}',

        -- Timestamps
        created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
        updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
        last_active TIMESTAMP WITH TIME ZONE DEFAULT NOW()
      )
    `;
    console.log('✓ Created user_profiles table');

    // User conversations table (for AI memory)
    await sql`
      CREATE TABLE IF NOT EXISTS user_conversations (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        user_id TEXT NOT NULL REFERENCES user_profiles(user_id) ON DELETE CASCADE,
        session_id TEXT,
        message_type TEXT CHECK (message_type IN ('user', 'assistant', 'system')),
        content TEXT NOT NULL,
        metadata JSONB DEFAULT '{}',
        created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
      )
    `;
    console.log('✓ Created user_conversations table');

    // User saved items (destinations, articles, etc.)
    await sql`
      CREATE TABLE IF NOT EXISTS user_saved_items (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        user_id TEXT NOT NULL REFERENCES user_profiles(user_id) ON DELETE CASCADE,
        item_type TEXT CHECK (item_type IN ('destination', 'guide', 'visa', 'job', 'article')),
        item_slug TEXT NOT NULL,
        notes TEXT,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
        UNIQUE(user_id, item_type, item_slug)
      )
    `;
    console.log('✓ Created user_saved_items table');

    // Create indexes
    await sql`CREATE INDEX IF NOT EXISTS idx_user_profiles_user_id ON user_profiles(user_id)`;
    await sql`CREATE INDEX IF NOT EXISTS idx_user_profiles_persona ON user_profiles(persona)`;
    await sql`CREATE INDEX IF NOT EXISTS idx_user_conversations_user_id ON user_conversations(user_id)`;
    await sql`CREATE INDEX IF NOT EXISTS idx_user_saved_items_user_id ON user_saved_items(user_id)`;
    console.log('✓ Created indexes');

    console.log('\nDone! Tables created successfully.');
  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
}

createTables();
