import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Pension Quest terms of service - the rules and guidelines for using our website.',
};

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        <p className="text-slate-400 mb-8">Last updated: January 2025</p>

        <div className="prose prose-invert prose-slate max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">1. Acceptance of Terms</h2>
            <p className="text-slate-300 mb-4">
              By accessing Pension Quest (pension.quest), you agree to be bound by these Terms of Service. If you do not agree, please do not use our website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">2. Not Financial Advice</h2>
            <div className="bg-amber-900/20 border border-amber-700/30 rounded-lg p-4 mb-4">
              <p className="text-amber-200 font-medium">
                IMPORTANT: Pension Quest provides general information only. We are NOT regulated financial advisers. Our content does NOT constitute financial, tax, or legal advice.
              </p>
            </div>
            <p className="text-slate-300 mb-4">
              Before making any financial decisions about your pension, you should:
            </p>
            <ul className="list-disc pl-6 text-slate-300 mb-4">
              <li>Consult official sources (GOV.UK, HMRC)</li>
              <li>Seek advice from an FCA-regulated financial adviser</li>
              <li>Consider your personal circumstances carefully</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">3. Use of Calculators</h2>
            <p className="text-slate-300 mb-4">
              Our pension calculators provide estimates only. They are based on assumptions and simplified models. Actual outcomes may differ significantly. Do not rely solely on calculator results for financial planning.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">4. Accuracy of Information</h2>
            <p className="text-slate-300 mb-4">
              While we strive for accuracy, pension rules and rates change frequently. We cannot guarantee that all information is current or complete. Always verify important details with official sources.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">5. Limitation of Liability</h2>
            <p className="text-slate-300 mb-4">
              Pension Quest is provided "as is" without warranties of any kind. We are not liable for any losses arising from your use of our website or reliance on our content.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">6. Intellectual Property</h2>
            <p className="text-slate-300 mb-4">
              All content on Pension Quest is our property or used under licence. You may not reproduce, distribute, or modify our content without permission.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">7. External Links</h2>
            <p className="text-slate-300 mb-4">
              We link to external websites for your convenience. We are not responsible for the content or practices of these sites.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">8. Changes to Terms</h2>
            <p className="text-slate-300 mb-4">
              We may update these terms at any time. Continued use of the site constitutes acceptance of the updated terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">9. Governing Law</h2>
            <p className="text-slate-300 mb-4">
              These terms are governed by English law. Any disputes will be subject to the exclusive jurisdiction of the English courts.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">10. Contact</h2>
            <p className="text-slate-300 mb-4">
              For questions about these terms, contact us at legal@pension.quest
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
