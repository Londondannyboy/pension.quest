import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Disclaimer',
  description: 'Pension Quest disclaimer - important information about our content and services.',
};

export default function Disclaimer() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Disclaimer</h1>
        <p className="text-slate-400 mb-8">Last updated: January 2025</p>

        <div className="bg-amber-900/30 border border-amber-700/50 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-amber-400">Important Notice</h2>
          <p className="text-amber-200 text-lg">
            Pension Quest provides general pension information for educational purposes only.
            We are <strong>NOT</strong> financial advisers and our content does <strong>NOT</strong> constitute financial,
            tax, or legal advice.
          </p>
        </div>

        <div className="prose prose-invert prose-slate max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">Not Financial Advice</h2>
            <p className="text-slate-300 mb-4">
              The information on Pension Quest is for general informational and educational purposes.
              It should not be considered as:
            </p>
            <ul className="list-disc pl-6 text-slate-300 mb-4">
              <li>Personal financial advice</li>
              <li>Investment recommendations</li>
              <li>Tax advice</li>
              <li>Legal advice</li>
              <li>A substitute for professional consultation</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">Seek Professional Advice</h2>
            <p className="text-slate-300 mb-4">
              Before making any decisions about your pension, we strongly recommend:
            </p>
            <ul className="list-disc pl-6 text-slate-300 mb-4">
              <li>Consulting a qualified, FCA-regulated financial adviser</li>
              <li>Checking official government sources (GOV.UK, HMRC)</li>
              <li>Using the free Pension Wise guidance service (for over 50s)</li>
              <li>Contacting your pension provider directly</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">Accuracy and Currency</h2>
            <p className="text-slate-300 mb-4">
              While we strive to keep our information accurate and up-to-date:
            </p>
            <ul className="list-disc pl-6 text-slate-300 mb-4">
              <li>Pension rules and rates change frequently</li>
              <li>We cannot guarantee all information is current</li>
              <li>Errors and omissions may occur</li>
              <li>Always verify critical information with official sources</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">Calculator Limitations</h2>
            <p className="text-slate-300 mb-4">
              Our pension calculators:
            </p>
            <ul className="list-disc pl-6 text-slate-300 mb-4">
              <li>Provide estimates only, not guarantees</li>
              <li>Use simplified assumptions</li>
              <li>May not reflect your specific circumstances</li>
              <li>Should not be the sole basis for financial decisions</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">No Liability</h2>
            <p className="text-slate-300 mb-4">
              Pension Quest accepts no liability for:
            </p>
            <ul className="list-disc pl-6 text-slate-300 mb-4">
              <li>Decisions made based on our content</li>
              <li>Financial losses of any kind</li>
              <li>Errors or omissions in our information</li>
              <li>Third-party content or links</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">Official Resources</h2>
            <p className="text-slate-300 mb-4">
              For authoritative pension information, please consult:
            </p>
            <ul className="list-disc pl-6 text-slate-300 mb-4">
              <li><a href="https://www.gov.uk/browse/working/state-pension" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:text-emerald-300">GOV.UK - State Pension</a></li>
              <li><a href="https://www.moneyhelper.org.uk" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:text-emerald-300">MoneyHelper</a></li>
              <li><a href="https://www.thepensionsregulator.gov.uk" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:text-emerald-300">The Pensions Regulator</a></li>
              <li><a href="https://www.pensionwise.gov.uk" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:text-emerald-300">Pension Wise (free guidance)</a></li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
