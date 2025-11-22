import dynamic from 'next/dynamic'
import { Shield } from 'lucide-react'

const Navbar = dynamic(() => import('@/components/Navbar'), {
  loading: () => <div className="h-20" />,
})

const Footer = dynamic(() => import('@/components/Footer'), {
  loading: () => <div className="min-h-[200px]" />,
})

// Hero Section - Server Component
function HeroSection() {
  return (
    <section className="section-padding-lg pt-32 md:pt-40 lg:pt-44 bg-gradient-to-br from-primary-50 via-white to-secondary-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
      
      <div className="container-wrapper relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-primary-500 to-secondary-500 mb-8 shadow-lg">
            <Shield className="w-8 h-8 md:w-10 md:h-10 text-white" />
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Privacy Policy & GDPR Compliance
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-700 mb-8 leading-relaxed">
            Effective Date: 1st March 2025 | Last Updated: 1st March 2025
          </p>
        </div>
      </div>
    </section>
  )
}

// Privacy Policy Content Section - Server Component
function PrivacyPolicyContent() {
  return (
    <section className="section-padding bg-white">
      <div className="container-wrapper max-w-4xl">
        <div className="prose prose-lg max-w-none">
          {/* Introduction */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">1. Introduction</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              ExAIm Limited ("ExAIm," "we," "us," or "our") is registered in England and Wales (ICO Registration Number ZB842876) and operates internationally, including Dubai, UAE, holding a valid Technology License in Dubai. ExAIm is committed to safeguarding the privacy and security of our business-to-business (B2B) clients, educational institutions ("Institutions"), and their administrators, teachers, and students ("End Users").
            </p>
            <p className="text-gray-700 leading-relaxed">
              This Privacy Policy details how ExAIm collects, processes, shares, transfers, and retains personal data, outlining user rights under the UK General Data Protection Regulation (UK GDPR) and UAE Federal Decree-Law No. 45 of 2021 on Personal Data Protection ("UAE PDPL").
            </p>
          </div>

          {/* Scope of Policy */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">2. Scope of Policy</h2>
            <p className="text-gray-700 leading-relaxed">
              ExAIm serves as a Data Processor on behalf of educational Institutions, who act as Data Controllers. This policy applies to all data handled by ExAIm through our platform and related services across jurisdictions in which we operate.
            </p>
          </div>

          {/* Information We Collect */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">3. Information We Collect</h2>
            
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4 mt-6">Institutional Data:</h3>
            <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-6 space-y-2">
              <li>Institution name, address, and registration number</li>
              <li>Administrator's name, email, and telephone number</li>
              <li>Billing and payment details</li>
            </ul>

            <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4 mt-6">End User Data:</h3>
            <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
              <li>Name, date of birth, and class assignment</li>
              <li>Assessment responses, grades, and analytical insights</li>
            </ul>
          </div>

          {/* Purpose and Legal Basis */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">4. Purpose and Legal Basis of Data Processing</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              ExAIm processes personal data exclusively for:
            </p>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300 mb-6">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">Purpose of Processing</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">Legal Basis (UK GDPR and UAE PDPL)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">Automated grading & personalised feedback</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">Performance of contract (with Institution)</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">Educational performance analytics</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">Performance of contract</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">Technical support & troubleshooting</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">Performance of contract</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">Enhancing platform functionality & developing new features</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">Legitimate interests</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">Compliance with data protection & regulatory obligations</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">Legal obligation</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* AI-driven Assessment Transparency */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">5. AI-driven Assessment Transparency</h2>
            <p className="text-gray-700 leading-relaxed">
              ExAIm employs Artificial Intelligence (AI) to automate assessment grading, including open-ended responses. AI analyses End User responses solely to generate grades, personalised feedback, and insights. Human oversight is always provided, enabling teachers to review, verify, and modify AI-generated outcomes. Automated assessments never solely dictate academic outcomes without institutional review.
            </p>
          </div>

          {/* Special Categories & Children's Data */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">6. Special Categories & Children's Data</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              ExAIm does not collect or process special categories of personal data (e.g., special educational needs or health information).
            </p>
            
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4 mt-6">Children's Data:</h3>
            <p className="text-gray-700 leading-relaxed">
              ExAIm services involve processing data of students under 18 years of age. Institutions (Data Controllers) confirm responsibility for obtaining lawful consent or ensuring alternative lawful bases (such as educational obligations or parental authorisation), complying with UK GDPR Article 8 and UAE PDPL.
            </p>
          </div>

          {/* Data Sharing & International Transfers */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">7. Data Sharing & International Transfers</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              ExAIm does not sell or rent personal data. Data sharing occurs solely:
            </p>
            <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-6 space-y-2">
              <li>With subprocessors compliant with GDPR and UAE PDPL for essential services (hosting, analytics, support)</li>
              <li>Upon explicit direction by Institutions (e.g., reporting to parents or authorities)</li>
              <li>To comply with legal obligations or official regulatory requests</li>
            </ul>

            <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4 mt-6">Explicit Subprocessors:</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Google Cloud Platform (GCP): ExAIm maintains a formal Data Processing Agreement (DPA) with Google Cloud Platform (GCP) that incorporates appropriate safeguards, including Standard Contractual Clauses, ensuring compliance with GDPR and UAE PDPL. The complete Data Processing Addendum can be found <a href="#" className="text-primary-600 hover:text-primary-700 underline">here</a>.
            </p>

            <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4 mt-6">International Data Transfers:</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              ExAIm stores personal data on Google Cloud Platform, with data primarily hosted in the UK and/or EU. If data transfers occur outside these regions, we rely on SCCs and other appropriate safeguards.
            </p>

            <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4 mt-6">Subprocessor Updates:</h3>
            <p className="text-gray-700 leading-relaxed">
              Institutions will receive email notifications at least 30 days in advance of any changes to subprocessors. An updated subprocessor list can be requested at any time.
            </p>
          </div>

          {/* Data Retention Policy */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">8. Data Retention Policy</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Data is retained only as long as necessary for:
            </p>
            <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
              <li>Contractual obligations with Institutions</li>
              <li>Compliance with legal obligations or dispute resolution</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              After contract termination, personal data is securely deleted or returned within 60 days, per GDPR and UAE PDPL requirements.
            </p>
          </div>

          {/* Data Security & Breach Notification */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">9. Data Security & Breach Notification</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              ExAIm implements robust technical and organisational measures to protect personal data, including but not limited to:
            </p>

            <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4 mt-6">Encryption:</h3>
            <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-6 space-y-2">
              <li>Data encrypted at rest using industry-standard AES-256 encryption.</li>
              <li>Data encrypted in transit using Transport Layer Security (TLS) protocols.</li>
            </ul>

            <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4 mt-6">Access Controls and Authentication:</h3>
            <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-6 space-y-2">
              <li>Strict role-based access controls (RBAC) ensure users have only necessary privileges.</li>
              <li>Secure login mechanisms, including mandatory multi-factor authentication (MFA) for administrative accounts.</li>
            </ul>

            <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4 mt-6">Infrastructure Security:</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              All data storage and processing infrastructure hosted exclusively on Google Cloud Platform (GCP), which maintains compliance with industry-leading standards, including:
            </p>
            <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-6 space-y-2">
              <li>SOC 2 Type 2 certification</li>
              <li>ISO 27001 certification</li>
              <li>Compliance with GDPR requirements and UAE PDPL data protection standards.</li>
              <li>Regular independent audits and third-party certifications.</li>
            </ul>

            <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4 mt-6">Data Encryption:</h3>
            <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-6 space-y-2">
              <li>GCP provides encryption at rest by default using the Advanced Encryption Standard (AES-256).</li>
              <li>All data transferred to and from the platform is encrypted using Transport Layer Security (TLS) protocols.</li>
            </ul>

            <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4 mt-6">System Monitoring & Breach Response:</h3>
            <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
              <li>Continuous security monitoring and logging enabled it to detect unusual activities.</li>
              <li>Immediate notification procedures in place for identifying and addressing potential security breaches, with notification provided to Institutions within 72 hours as required by GDPR and UAE PDPL.</li>
            </ul>
          </div>

          {/* Responsibilities of Institutions */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">10. Responsibilities of Institutions (Data Controllers)</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Institutions agree to:
            </p>
            <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
              <li>Ensure lawful collection, processing, and sharing of personal data, including lawful consent for children's data.</li>
              <li>Inform End Users, parents, or guardians of processing practices.</li>
              <li>Comply fully with applicable local and international data protection laws.</li>
            </ul>
          </div>

          {/* User Rights */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">11. User Rights under GDPR & UAE PDPL</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Users have specific rights regarding their personal data. These rights include the ability to:
            </p>
            <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-6 space-y-2">
              <li>Access their personal data.</li>
              <li>Correct inaccurate or incomplete personal data.</li>
              <li>Request deletion of personal data when no longer necessary or processed unlawfully.</li>
              <li>Limit or object to specific types of data processing.</li>
              <li>Request portability of their personal data in a structured, machine-readable format.</li>
            </ul>

            <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4 mt-6">Exercising Your Rights:</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              End Users should direct their requests to the relevant Institution (Data Controller). ExAIm, as a Data Processor, will assist Institutions promptly, transparently, and in accordance with applicable data protection laws.
            </p>

            <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4 mt-6">Right to Lodge Complaints:</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Users have the right to lodge a complaint with the relevant data protection supervisory authority if they believe their rights have been infringed:
            </p>
            
            <div className="bg-gray-50 rounded-lg p-6 mb-4">
              <h4 className="text-xl font-semibold text-gray-900 mb-2">For UK Users:</h4>
              <p className="text-gray-700 mb-2">Information Commissioner's Office (ICO)</p>
              <p className="text-gray-700 mb-2">Website: <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700 underline">https://ico.org.uk</a></p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h4 className="text-xl font-semibold text-gray-900 mb-2">For UAE Users:</h4>
              <p className="text-gray-700 mb-2">Relevant Data Protection Authority under UAE Federal Decree-Law No. 45 of 2021 (UAE PDPL), typically the UAE Data Office or local Emirate data protection authorities. More information can be found via:</p>
              <p className="text-gray-700"><a href="https://u.ae/en" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700 underline">https://u.ae/en</a></p>
            </div>
          </div>

          {/* Jurisdiction and Governing Law */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">12. Jurisdiction and Governing Law</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              For UK-based or international Institutions, this Privacy Policy is governed exclusively by the laws of England and Wales, with disputes subject to English courts.
            </p>
            <p className="text-gray-700 leading-relaxed">
              For UAE-based Institutions, this Privacy Policy is governed exclusively by the laws of Dubai and the UAE, with disputes subject exclusively to Dubai Courts.
            </p>
          </div>

          {/* Dedicated Privacy Contact */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">13. Dedicated Privacy Contact</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              For privacy-related inquiries, complaints, or to exercise your data protection rights under the UK GDPR or UAE PDPL, please contact our designated Data Protection Officer (DPO):
            </p>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Data Protection Officer (DPO)</h3>
              <p className="text-gray-700 mb-2">ExAIm Limited</p>
              <p className="text-gray-700 mb-2">2 Crossways Business Centre,</p>
              <p className="text-gray-700 mb-2">Bicester Road, Kingswood,</p>
              <p className="text-gray-700 mb-2">Aylesbury, HP18 0RA,</p>
              <p className="text-gray-700 mb-4">United Kingdom</p>
              <p className="text-gray-700">
                Email: <a href="mailto:privacy@exaim.ai" className="text-primary-600 hover:text-primary-700 underline">privacy@exaim.ai</a>
              </p>
            </div>

            <p className="text-gray-700 leading-relaxed mt-6">
              <strong>Note:</strong> Our DPO is based in the United Kingdom and manages privacy compliance and inquiries for all jurisdictions, including the UK and UAE.
            </p>
          </div>

          {/* Policy Updates */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">14. Policy Updates</h2>
            <p className="text-gray-700 leading-relaxed">
              We regularly review and update this policy. Institutions will be notified via email at least 30 days in advance of significant changes.
            </p>
          </div>

          {/* Acceptance */}
          <div className="mb-12 pt-8 border-t border-gray-200">
            <p className="text-gray-700 leading-relaxed text-lg">
              By using ExAIm services, Institutions acknowledge and accept this Privacy Policy and our commitment to robust privacy and data protection standards across jurisdictions.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <div className="border-b border-gray-100 my-0"></div>
      <PrivacyPolicyContent />
      <Footer />
    </main>
  )
}

