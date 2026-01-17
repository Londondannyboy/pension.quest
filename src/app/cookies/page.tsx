import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description: 'Pension Quest cookie policy - how we use cookies and similar technologies.',
};

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Cookie Policy</h1>
        <p className="text-slate-400 mb-8">Last updated: January 2025</p>

        <div className="prose prose-invert prose-slate max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">What Are Cookies?</h2>
            <p className="text-slate-300 mb-4">
              Cookies are small text files stored on your device when you visit websites. They help websites remember your preferences and improve your experience.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">How We Use Cookies</h2>

            <h3 className="text-xl font-medium mb-2 text-white">Essential Cookies</h3>
            <p className="text-slate-300 mb-4">
              Required for the website to function. These cannot be disabled.
            </p>
            <ul className="list-disc pl-6 text-slate-300 mb-4">
              <li>Session management</li>
              <li>Security features</li>
              <li>Cookie consent preferences</li>
            </ul>

            <h3 className="text-xl font-medium mb-2 text-white">Analytics Cookies</h3>
            <p className="text-slate-300 mb-4">
              Help us understand how visitors use our site.
            </p>
            <ul className="list-disc pl-6 text-slate-300 mb-4">
              <li>Pages visited and time spent</li>
              <li>How you found our site</li>
              <li>Device and browser information</li>
            </ul>

            <h3 className="text-xl font-medium mb-2 text-white">Functionality Cookies</h3>
            <p className="text-slate-300 mb-4">
              Remember your preferences for a better experience.
            </p>
            <ul className="list-disc pl-6 text-slate-300 mb-4">
              <li>Calculator inputs</li>
              <li>Display preferences</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">Third-Party Cookies</h2>
            <p className="text-slate-300 mb-4">
              Some cookies are placed by third-party services we use:
            </p>
            <ul className="list-disc pl-6 text-slate-300 mb-4">
              <li><strong>Vercel Analytics</strong> - Website performance</li>
              <li><strong>Google Analytics</strong> - Usage statistics (if enabled)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">Managing Cookies</h2>
            <p className="text-slate-300 mb-4">
              You can control cookies through:
            </p>
            <ul className="list-disc pl-6 text-slate-300 mb-4">
              <li>Our cookie consent banner</li>
              <li>Your browser settings</li>
              <li>Third-party opt-out tools</li>
            </ul>
            <p className="text-slate-300 mb-4">
              Note: Disabling cookies may affect website functionality.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">Contact</h2>
            <p className="text-slate-300 mb-4">
              For questions about our cookie policy, contact privacy@pension.quest
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
