export const dynamic = 'force-dynamic';
export const dynamicParams = true;

function AuthNotConfigured() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-stone-950">
      <div className="text-center p-8">
        <h1 className="text-2xl font-bold text-white mb-2">Auth Not Configured</h1>
        <p className="text-stone-400">Set NEON_AUTH_BASE_URL to enable authentication.</p>
      </div>
    </main>
  );
}

export default async function AuthPage({ params }: { params: Promise<{ path: string }> }) {
  const hasNeonAuth = !!process.env.NEON_AUTH_BASE_URL;

  if (!hasNeonAuth) {
    return <AuthNotConfigured />;
  }

  const { path } = await params;

  // Dynamic import to avoid build errors when NEON_AUTH_BASE_URL not set
  const { AuthView } = require('@neondatabase/auth/react');

  return (
    <main className="min-h-screen flex items-center justify-center bg-stone-950">
      <AuthView path={path} />
    </main>
  );
}
