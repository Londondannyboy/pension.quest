import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Pension Quest privacy policy - how we collect, use, and protect your personal information.',
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <p className="text-slate-400 mb-8">Last updated: January 2025</p>

        <div className="prose prose-invert prose-slate max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">1. Introduction</h2>
            <p className="text-slate-300 mb-4">
              Pension Quest ("we", "our", "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website pension.quest.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">2. Information We Collect</h2>
            <h3 className="text-xl font-medium mb-2 text-white">Personal Information</h3>
            <p className="text-slate-300 mb-4">
              We may collect personal information that you voluntarily provide, including:
            </p>
            <ul className="list-disc pl-6 text-slate-300 mb-4">
              <li>Name and email address (if you create an account)</li>
              <li>Information you provide when using our calculators</li>
              <li>Communications you send to us</li>
            </ul>

            <h3 className="text-xl font-medium mb-2 text-white">Automatically Collected Information</h3>
            <ul className="list-disc pl-6 text-slate-300 mb-4">
              <li>Device and browser information</li>
              <li>IP address and location data</li>
              <li>Pages visited and time spent</li>
              <li>Cookies and similar technologies</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">3. How We Use Your Information</h2>
            <p className="text-slate-300 mb-4">We use collected information to:</p>
            <ul className="list-disc pl-6 text-slate-300 mb-4">
              <li>Provide and improve our services</li>
              <li>Personalise your experience</li>
              <li>Analyse usage patterns</li>
              <li>Send updates if you've opted in</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">4. Cookies</h2>
            <p className="text-slate-300 mb-4">
              We use cookies to enhance your browsing experience. See our <a href="/cookies" className="text-emerald-400 hover:text-emerald-300">Cookie Policy</a> for more details.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">5. Data Sharing</h2>
            <p className="text-slate-300 mb-4">
              We do not sell your personal information. We may share data with:
            </p>
            <ul className="list-disc pl-6 text-slate-300 mb-4">
              <li>Service providers who assist our operations</li>
              <li>Legal authorities when required by law</li>
              <li>Analytics partners (in aggregated, anonymised form)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">6. Your Rights</h2>
            <p className="text-slate-300 mb-4">Under UK GDPR, you have the right to:</p>
            <ul className="list-disc pl-6 text-slate-300 mb-4">
              <li>Access your personal data</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to processing</li>
              <li>Data portability</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">7. Contact Us</h2>
            <p className="text-slate-300 mb-4">
              For privacy-related enquiries, please contact us at privacy@pension.quest
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
