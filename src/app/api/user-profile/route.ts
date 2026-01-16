import { NextRequest, NextResponse } from 'next/server';
import { neon } from '@neondatabase/serverless';

const DATABASE_URL = process.env.DATABASE_URL;

// GET - Fetch user profile
export async function GET(request: NextRequest) {
  if (!DATABASE_URL) {
    return NextResponse.json({ error: 'Database not configured' }, { status: 500 });
  }

  // For demo purposes, use a demo user ID
  // In production, this would get the user ID from auth
  const userId = 'demo-user';

  try {
    const sql = neon(DATABASE_URL);
    const profiles = await sql`
      SELECT *
      FROM user_profiles
      WHERE user_id = ${userId}
    `;

    if (profiles.length === 0) {
      return NextResponse.json({ profile: null });
    }

    return NextResponse.json({ profile: profiles[0] });
  } catch (error: any) {
    console.error('Error fetching profile:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// POST - Create or update user profile
export async function POST(request: NextRequest) {
  if (!DATABASE_URL) {
    return NextResponse.json({ error: 'Database not configured' }, { status: 500 });
  }

  // For demo purposes, use a demo user ID
  const userId = 'demo-user';

  try {
    const body = await request.json();
    const sql = neon(DATABASE_URL);

    // Map frontend field names to database columns
    const updateData: any = {
      user_id: userId,
    };

    // Map camelCase to snake_case
    if (body.email !== undefined) updateData.email = body.email;
    if (body.full_name !== undefined) updateData.full_name = body.full_name;
    if (body.persona !== undefined) updateData.persona = body.persona;
    if (body.currentCountry !== undefined) updateData.current_country = body.currentCountry;
    if (body.timeline !== undefined) updateData.timeline = body.timeline;
    if (body.budgetMonthly !== undefined) updateData.budget_monthly = body.budgetMonthly;
    if (body.priorityTaxBenefits !== undefined) updateData.priority_tax_benefits = body.priorityTaxBenefits;
    if (body.priorityCostOfLiving !== undefined) updateData.priority_cost_of_living = body.priorityCostOfLiving;
    if (body.priorityClimate !== undefined) updateData.priority_climate = body.priorityClimate;
    if (body.targetDestinations !== undefined) updateData.target_destinations = body.targetDestinations;
    if (body.onboarding_step !== undefined) updateData.onboarding_step = body.onboarding_step;
    if (body.onboarding_completed !== undefined) updateData.onboarding_completed = body.onboarding_completed;
    if (body.recommended_destinations !== undefined) updateData.recommended_destinations = JSON.stringify(body.recommended_destinations);

    // Upsert - insert or update
    const profiles = await sql`
      INSERT INTO user_profiles (
        user_id,
        email,
        full_name,
        persona,
        current_country,
        timeline,
        budget_monthly,
        priority_tax_benefits,
        priority_cost_of_living,
        priority_climate,
        target_destinations,
        onboarding_step,
        onboarding_completed,
        recommended_destinations,
        updated_at
      )
      VALUES (
        ${updateData.user_id},
        ${updateData.email || null},
        ${updateData.full_name || null},
        ${updateData.persona || null},
        ${updateData.current_country || null},
        ${updateData.timeline || null},
        ${updateData.budget_monthly || null},
        ${updateData.priority_tax_benefits || null},
        ${updateData.priority_cost_of_living || null},
        ${updateData.priority_climate || null},
        ${updateData.target_destinations || null},
        ${updateData.onboarding_step || 0},
        ${updateData.onboarding_completed || false},
        ${updateData.recommended_destinations || '[]'},
        NOW()
      )
      ON CONFLICT (user_id) DO UPDATE SET
        email = COALESCE(EXCLUDED.email, user_profiles.email),
        full_name = COALESCE(EXCLUDED.full_name, user_profiles.full_name),
        persona = COALESCE(EXCLUDED.persona, user_profiles.persona),
        current_country = COALESCE(EXCLUDED.current_country, user_profiles.current_country),
        timeline = COALESCE(EXCLUDED.timeline, user_profiles.timeline),
        budget_monthly = COALESCE(EXCLUDED.budget_monthly, user_profiles.budget_monthly),
        priority_tax_benefits = COALESCE(EXCLUDED.priority_tax_benefits, user_profiles.priority_tax_benefits),
        priority_cost_of_living = COALESCE(EXCLUDED.priority_cost_of_living, user_profiles.priority_cost_of_living),
        priority_climate = COALESCE(EXCLUDED.priority_climate, user_profiles.priority_climate),
        target_destinations = COALESCE(EXCLUDED.target_destinations, user_profiles.target_destinations),
        onboarding_step = EXCLUDED.onboarding_step,
        onboarding_completed = EXCLUDED.onboarding_completed,
        recommended_destinations = COALESCE(EXCLUDED.recommended_destinations, user_profiles.recommended_destinations),
        updated_at = NOW()
      RETURNING *
    `;

    return NextResponse.json({ profile: profiles[0], success: true });
  } catch (error: any) {
    console.error('Error updating profile:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
