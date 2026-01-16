import dotenv from 'dotenv';
import { neon } from '@neondatabase/serverless';

dotenv.config({ path: '.env.local' });

const sql = neon(process.env.DATABASE_URL);

// Education data for each country
const educationData = {
  cyprus: {
    education_data: {
      system: {
        type: 'European/British influenced',
        compulsoryAges: '5-15',
        schoolYear: 'Sept - June',
        mainLanguage: 'Greek/English',
        englishAvailability: 'Excellent',
      },
      schools: [
        { name: 'The English School', type: 'british', city: 'Nicosia', annualFeeEur: 8500, curriculum: 'British GCSE/A-Levels', ages: '11-18', rating: 4.8 },
        { name: 'American Academy', type: 'american', city: 'Limassol', annualFeeEur: 12000, curriculum: 'American AP', ages: '3-18', rating: 4.7 },
        { name: 'Foley\'s School', type: 'british', city: 'Limassol', annualFeeEur: 9500, curriculum: 'British', ages: '3-18', rating: 4.6 },
        { name: 'Pascals English School', type: 'british', city: 'Larnaca', annualFeeEur: 7500, curriculum: 'British', ages: '3-18', rating: 4.5 },
        { name: 'Heritage Private School', type: 'international', city: 'Paphos', annualFeeEur: 8000, curriculum: 'British', ages: '3-18', rating: 4.4 },
      ],
      universities: [
        { name: 'University of Cyprus', city: 'Nicosia', ranking: 'Top 600 Global', type: 'Public' },
        { name: 'Cyprus University of Technology', city: 'Limassol', ranking: 'Top 800 Global', type: 'Public' },
        { name: 'University of Nicosia', city: 'Nicosia', ranking: 'Private', type: 'Private' },
        { name: 'European University Cyprus', city: 'Nicosia', ranking: 'Private', type: 'Private' },
      ],
      notes: [
        'English-medium international schools widely available',
        'Many British curriculum schools due to colonial history',
        'Lower fees compared to Western Europe',
      ],
    },
  },
  malta: {
    education_data: {
      system: {
        type: 'British-based',
        compulsoryAges: '5-16',
        schoolYear: 'Sept - June',
        mainLanguage: 'English/Maltese',
        englishAvailability: 'Excellent',
      },
      schools: [
        { name: 'St. Edwards College', type: 'british', city: 'Cottonera', annualFeeEur: 6500, curriculum: 'British', ages: '5-18', rating: 4.7 },
        { name: 'Verdala International School', type: 'ib', city: 'Pembroke', annualFeeEur: 18000, curriculum: 'IB', ages: '3-18', rating: 4.8 },
        { name: 'San Anton School', type: 'british', city: 'Mgarr', annualFeeEur: 5500, curriculum: 'British', ages: '3-16', rating: 4.5 },
        { name: 'Chiswick House School', type: 'british', city: 'St Julians', annualFeeEur: 7000, curriculum: 'British', ages: '3-16', rating: 4.6 },
      ],
      universities: [
        { name: 'University of Malta', city: 'Msida', ranking: 'Top 1000 Global', type: 'Public' },
        { name: 'MCAST', city: 'Paola', ranking: 'Vocational', type: 'Public' },
      ],
      notes: [
        'English is an official language - all schools teach in English',
        'Free public education available',
        'Small class sizes in private schools',
      ],
    },
  },
  portugal: {
    education_data: {
      system: {
        type: 'European',
        compulsoryAges: '6-18',
        schoolYear: 'Sept - June',
        mainLanguage: 'Portuguese',
        englishAvailability: 'Good in cities',
      },
      schools: [
        { name: 'St. Julians School', type: 'british', city: 'Lisbon', annualFeeEur: 18000, curriculum: 'British', ages: '3-18', rating: 4.8 },
        { name: 'Carlucci American Int\'l School', type: 'american', city: 'Lisbon', annualFeeEur: 25000, curriculum: 'American/IB', ages: '3-18', rating: 4.9 },
        { name: 'Oporto British School', type: 'british', city: 'Porto', annualFeeEur: 12000, curriculum: 'British', ages: '3-18', rating: 4.7 },
        { name: 'Deutsche Schule Lissabon', type: 'international', city: 'Lisbon', annualFeeEur: 8500, curriculum: 'German/IB', ages: '3-18', rating: 4.6 },
        { name: 'Nobel International School', type: 'ib', city: 'Algarve', annualFeeEur: 14000, curriculum: 'British/IB', ages: '3-18', rating: 4.5 },
      ],
      universities: [
        { name: 'University of Lisbon', city: 'Lisbon', ranking: 'Top 250 Global', type: 'Public' },
        { name: 'University of Porto', city: 'Porto', ranking: 'Top 300 Global', type: 'Public' },
        { name: 'Nova University', city: 'Lisbon', ranking: 'Top 350 Global', type: 'Public' },
        { name: 'Catholic University', city: 'Lisbon', ranking: 'Top 500 Global', type: 'Private' },
      ],
      notes: [
        'International schools concentrated in Lisbon and Cascais',
        'Growing number of bilingual options',
        'Public schools teach in Portuguese only',
      ],
    },
  },
  spain: {
    education_data: {
      system: {
        type: 'European',
        compulsoryAges: '6-16',
        schoolYear: 'Sept - June',
        mainLanguage: 'Spanish (+ regional)',
        englishAvailability: 'Moderate',
      },
      schools: [
        { name: 'British Council School', type: 'british', city: 'Madrid', annualFeeEur: 15000, curriculum: 'British', ages: '3-18', rating: 4.8 },
        { name: 'American School of Barcelona', type: 'american', city: 'Barcelona', annualFeeEur: 20000, curriculum: 'American/IB', ages: '3-18', rating: 4.9 },
        { name: 'King\'s College Madrid', type: 'british', city: 'Madrid', annualFeeEur: 18000, curriculum: 'British', ages: '2-18', rating: 4.7 },
        { name: 'Sotogrande International School', type: 'ib', city: 'Sotogrande', annualFeeEur: 22000, curriculum: 'IB', ages: '3-18', rating: 4.8 },
        { name: 'British School of Valencia', type: 'british', city: 'Valencia', annualFeeEur: 10000, curriculum: 'British', ages: '2-18', rating: 4.6 },
      ],
      universities: [
        { name: 'University of Barcelona', city: 'Barcelona', ranking: 'Top 200 Global', type: 'Public' },
        { name: 'Autonomous University of Madrid', city: 'Madrid', ranking: 'Top 200 Global', type: 'Public' },
        { name: 'IE University', city: 'Madrid', ranking: 'Top Business School', type: 'Private' },
        { name: 'ESADE', city: 'Barcelona', ranking: 'Top Business School', type: 'Private' },
      ],
      notes: [
        'Regional languages in Catalonia, Basque Country, Galicia',
        'Many British and American school options',
        'Public education in Spanish only',
      ],
    },
  },
  thailand: {
    education_data: {
      system: {
        type: 'Thai Ministry',
        compulsoryAges: '6-15',
        schoolYear: 'May - March',
        mainLanguage: 'Thai',
        englishAvailability: 'Good in international schools',
      },
      schools: [
        { name: 'Bangkok Patana School', type: 'british', city: 'Bangkok', annualFeeEur: 25000, curriculum: 'British/IB', ages: '3-18', rating: 4.9 },
        { name: 'NIST International School', type: 'ib', city: 'Bangkok', annualFeeEur: 28000, curriculum: 'IB', ages: '3-18', rating: 4.9 },
        { name: 'ISB International School Bangkok', type: 'american', city: 'Bangkok', annualFeeEur: 30000, curriculum: 'American/IB', ages: '3-18', rating: 4.9 },
        { name: 'Phuket International Academy', type: 'ib', city: 'Phuket', annualFeeEur: 18000, curriculum: 'IB', ages: '3-18', rating: 4.6 },
        { name: 'Chiang Mai International School', type: 'american', city: 'Chiang Mai', annualFeeEur: 12000, curriculum: 'American', ages: '3-18', rating: 4.5 },
      ],
      universities: [
        { name: 'Chulalongkorn University', city: 'Bangkok', ranking: 'Top 250 Global', type: 'Public' },
        { name: 'Mahidol University', city: 'Bangkok', ranking: 'Top 300 Global', type: 'Public' },
        { name: 'Thammasat University', city: 'Bangkok', ranking: 'Top 600 Global', type: 'Public' },
      ],
      notes: [
        'International schools in Bangkok are world-class',
        'School year runs May to March',
        'Wide range of fees available',
      ],
    },
  },
  uae: {
    education_data: {
      system: {
        type: 'Multiple curricula',
        compulsoryAges: '6-18',
        schoolYear: 'Sept - June',
        mainLanguage: 'Arabic/English',
        englishAvailability: 'Excellent',
      },
      schools: [
        { name: 'Dubai British School', type: 'british', city: 'Dubai', annualFeeEur: 15000, curriculum: 'British', ages: '3-18', rating: 4.7 },
        { name: 'GEMS Wellington', type: 'british', city: 'Dubai', annualFeeEur: 18000, curriculum: 'British/IB', ages: '3-18', rating: 4.8 },
        { name: 'American School of Dubai', type: 'american', city: 'Dubai', annualFeeEur: 25000, curriculum: 'American', ages: '4-18', rating: 4.8 },
        { name: 'Dubai International Academy', type: 'ib', city: 'Dubai', annualFeeEur: 20000, curriculum: 'IB', ages: '3-18', rating: 4.7 },
        { name: 'Brighton College Abu Dhabi', type: 'british', city: 'Abu Dhabi', annualFeeEur: 22000, curriculum: 'British', ages: '3-18', rating: 4.8 },
      ],
      universities: [
        { name: 'NYU Abu Dhabi', city: 'Abu Dhabi', ranking: 'Top 200 Global', type: 'Private' },
        { name: 'UAE University', city: 'Al Ain', ranking: 'Top 300 Global', type: 'Public' },
        { name: 'American University of Sharjah', city: 'Sharjah', ranking: 'Top 400 Global', type: 'Private' },
        { name: 'Khalifa University', city: 'Abu Dhabi', ranking: 'Top 200 Global', type: 'Public' },
      ],
      notes: [
        'Over 200 international schools in Dubai alone',
        'Multiple curricula: British, American, IB, Indian, French',
        'KHDA ratings provide quality assurance',
      ],
    },
  },
  greece: {
    education_data: {
      system: {
        type: 'European',
        compulsoryAges: '5-15',
        schoolYear: 'Sept - June',
        mainLanguage: 'Greek',
        englishAvailability: 'Good in Athens',
      },
      schools: [
        { name: 'American Community Schools', type: 'american', city: 'Athens', annualFeeEur: 18000, curriculum: 'American/IB', ages: '3-18', rating: 4.8 },
        { name: 'St. Catherine\'s British School', type: 'british', city: 'Athens', annualFeeEur: 14000, curriculum: 'British', ages: '3-18', rating: 4.7 },
        { name: 'Campion School', type: 'british', city: 'Athens', annualFeeEur: 12000, curriculum: 'British', ages: '3-18', rating: 4.6 },
        { name: 'International School of Athens', type: 'ib', city: 'Athens', annualFeeEur: 15000, curriculum: 'IB', ages: '3-18', rating: 4.5 },
      ],
      universities: [
        { name: 'National Technical University', city: 'Athens', ranking: 'Top 400 Global', type: 'Public' },
        { name: 'University of Athens', city: 'Athens', ranking: 'Top 500 Global', type: 'Public' },
        { name: 'Aristotle University', city: 'Thessaloniki', ranking: 'Top 500 Global', type: 'Public' },
      ],
      notes: [
        'International schools mostly in Athens',
        'Free public education but in Greek',
        'Lower costs than Northern Europe',
      ],
    },
  },
  italy: {
    education_data: {
      system: {
        type: 'European',
        compulsoryAges: '6-16',
        schoolYear: 'Sept - June',
        mainLanguage: 'Italian',
        englishAvailability: 'Limited outside int\'l schools',
      },
      schools: [
        { name: 'American Overseas School of Rome', type: 'american', city: 'Rome', annualFeeEur: 28000, curriculum: 'American/IB', ages: '3-18', rating: 4.8 },
        { name: 'St. George\'s British School', type: 'british', city: 'Rome', annualFeeEur: 20000, curriculum: 'British', ages: '3-18', rating: 4.7 },
        { name: 'American School of Milan', type: 'american', city: 'Milan', annualFeeEur: 30000, curriculum: 'American/IB', ages: '3-18', rating: 4.9 },
        { name: 'British School of Milan', type: 'british', city: 'Milan', annualFeeEur: 22000, curriculum: 'British', ages: '3-18', rating: 4.7 },
        { name: 'International School of Florence', type: 'ib', city: 'Florence', annualFeeEur: 18000, curriculum: 'IB', ages: '3-18', rating: 4.6 },
      ],
      universities: [
        { name: 'Politecnico di Milano', city: 'Milan', ranking: 'Top 150 Global', type: 'Public' },
        { name: 'Bocconi University', city: 'Milan', ranking: 'Top Business School', type: 'Private' },
        { name: 'Sapienza University', city: 'Rome', ranking: 'Top 150 Global', type: 'Public' },
        { name: 'University of Bologna', city: 'Bologna', ranking: 'Top 200 Global', type: 'Public' },
      ],
      notes: [
        'International schools expensive but high quality',
        'Public schools Italian-only',
        'University fees very low compared to UK/US',
      ],
    },
  },
  singapore: {
    education_data: {
      system: {
        type: 'British-influenced',
        compulsoryAges: '6-15',
        schoolYear: 'Jan - Nov',
        mainLanguage: 'English',
        englishAvailability: 'Excellent',
      },
      schools: [
        { name: 'Singapore American School', type: 'american', city: 'Singapore', annualFeeEur: 35000, curriculum: 'American', ages: '3-18', rating: 4.9 },
        { name: 'United World College', type: 'ib', city: 'Singapore', annualFeeEur: 40000, curriculum: 'IB', ages: '11-18', rating: 4.9 },
        { name: 'Tanglin Trust School', type: 'british', city: 'Singapore', annualFeeEur: 32000, curriculum: 'British/IB', ages: '3-18', rating: 4.9 },
        { name: 'Australian International School', type: 'international', city: 'Singapore', annualFeeEur: 28000, curriculum: 'Australian/IB', ages: '2-18', rating: 4.7 },
        { name: 'Stamford American School', type: 'american', city: 'Singapore', annualFeeEur: 30000, curriculum: 'American/IB', ages: '2-18', rating: 4.8 },
      ],
      universities: [
        { name: 'National University of Singapore', city: 'Singapore', ranking: 'Top 20 Global', type: 'Public' },
        { name: 'Nanyang Technological University', city: 'Singapore', ranking: 'Top 30 Global', type: 'Public' },
        { name: 'Singapore Management University', city: 'Singapore', ranking: 'Top Business School', type: 'Public' },
        { name: 'INSEAD Singapore', city: 'Singapore', ranking: 'Top Business School', type: 'Private' },
      ],
      notes: [
        'World-class education system',
        'English is medium of instruction',
        'Very competitive local schools',
        'International schools have waitlists',
      ],
    },
  },
  indonesia: {
    education_data: {
      system: {
        type: 'Indonesian National',
        compulsoryAges: '7-15',
        schoolYear: 'July - June',
        mainLanguage: 'Indonesian',
        englishAvailability: 'Good in int\'l schools',
      },
      schools: [
        { name: 'Jakarta International School', type: 'american', city: 'Jakarta', annualFeeEur: 30000, curriculum: 'American/IB', ages: '3-18', rating: 4.8 },
        { name: 'British International School Jakarta', type: 'british', city: 'Jakarta', annualFeeEur: 25000, curriculum: 'British', ages: '3-18', rating: 4.7 },
        { name: 'Bali Island School', type: 'ib', city: 'Bali', annualFeeEur: 15000, curriculum: 'IB', ages: '3-18', rating: 4.5 },
        { name: 'Green School Bali', type: 'international', city: 'Bali', annualFeeEur: 18000, curriculum: 'Holistic/IB', ages: '3-18', rating: 4.7 },
        { name: 'Canggu Community School', type: 'international', city: 'Bali', annualFeeEur: 12000, curriculum: 'Cambridge', ages: '3-15', rating: 4.4 },
      ],
      universities: [
        { name: 'University of Indonesia', city: 'Jakarta', ranking: 'Top 300 Global', type: 'Public' },
        { name: 'Bandung Institute of Technology', city: 'Bandung', ranking: 'Top 300 Global', type: 'Public' },
        { name: 'Gadjah Mada University', city: 'Yogyakarta', ranking: 'Top 400 Global', type: 'Public' },
      ],
      notes: [
        'Green School Bali famous for eco-education',
        'International schools concentrated in Jakarta and Bali',
        'Wide range of fees and quality',
      ],
    },
  },
};

async function seedEducationData() {
  console.log('Starting education data seed...');

  // First add the column if it doesn't exist
  try {
    await sql`
      ALTER TABLE destinations
      ADD COLUMN IF NOT EXISTS education_data JSONB
    `;
    console.log('✅ education_data column added/verified');
  } catch (error) {
    console.error('Error adding column:', error.message);
  }

  for (const [slug, data] of Object.entries(educationData)) {
    try {
      await sql`
        UPDATE destinations
        SET education_data = ${JSON.stringify(data.education_data)}::jsonb
        WHERE slug = ${slug}
      `;
      console.log(`✅ Updated education data for ${slug}`);
    } catch (error) {
      console.error(`❌ Failed to update ${slug}:`, error.message);
    }
  }

  console.log('✅ Education data seed complete!');
}

seedEducationData().catch(console.error);
