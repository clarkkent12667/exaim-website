import dynamic from 'next/dynamic'
import { FileText } from 'lucide-react'

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
            <FileText className="w-8 h-8 md:w-10 md:h-10 text-white" />
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Terms and Conditions
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-700 mb-8 leading-relaxed">
            Effective Date: 1st March 2025 | Last Updated: 1st March 2025
          </p>
        </div>
      </div>
    </section>
  )
}

// Terms Content Section - Server Component
function TermsContentSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-wrapper max-w-4xl">
        <div className="prose prose-lg max-w-none">
          {/* Introduction */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">1. Introduction</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              These Terms and Conditions ("Terms") govern your access to and use of the AI-driven grading and assessment platform and related services ("Platform") provided by ExAIm Limited ("ExAIm," "we," "our," or "us"). ExAIm is registered in England and Wales and operates internationally, including Dubai, UAE, under a valid Technology License.
            </p>
            <p className="text-gray-700 leading-relaxed">
              By accessing or using the Platform, educational institutions ("Institutions") and their authorised administrators, teachers, and students (collectively, "Users") expressly agree to comply fully with these Terms.
            </p>
          </div>

          {/* Definitions */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">2. Definitions</h2>
            <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
              <li><strong>Institution:</strong> Educational institution subscribing to ExAIm services.</li>
              <li><strong>User(s):</strong> Authorised individuals (administrators, teachers, students) utilising the Platform.</li>
              <li><strong>Services:</strong> AI-based grading, feedback, analytics, and associated management services provided by ExAIm.</li>
            </ul>
          </div>

          {/* Access and Use of the Platform */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">3. Access and Use of the Platform</h2>
            <p className="text-gray-700 leading-relaxed">
              ExAIm grants Institutions and Users a limited, non-exclusive, non-transferable license to use the Platform strictly for educational purposes, in accordance with these Terms.
            </p>
          </div>

          {/* User and Institutional Responsibilities */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">4. User and Institutional Responsibilities</h2>
            
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4 mt-6">Users agree to:</h3>
            <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-6 space-y-2">
              <li>Utilise the Platform solely for lawful, educational purposes.</li>
              <li>Maintain confidentiality of account credentials and promptly report unauthorised usage or security concerns.</li>
              <li>Avoid activities compromising Platform security, functionality, or integrity.</li>
            </ul>

            <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4 mt-6">Institutions agree to:</h3>
            <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
              <li>Ensure compliance of Users with these Terms.</li>
              <li>Accurately manage user accounts and permissions.</li>
              <li>Clearly communicate the purpose and nature of data collection and processing to all Users, obtaining necessary consents or verifying alternative lawful bases for processing student data, particularly minors, as detailed in our Privacy Policy.</li>
            </ul>
          </div>

          {/* Data Protection & Privacy */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">5. Data Protection & Privacy</h2>
            <p className="text-gray-700 leading-relaxed">
              ExAIm strictly adheres to the UK General Data Protection Regulation (UK GDPR) and UAE Federal Decree-Law No. 45 of 2021 (UAE PDPL). These Terms explicitly incorporate ExAIm's Privacy Policy, which details our data protection practices, user rights, and responsibilities. Institutions are responsible for compliance as Data Controllers. Users' specific rights regarding their personal data are detailed in our Privacy Policy.
            </p>
          </div>

          {/* Intellectual Property */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">6. Intellectual Property</h2>
            <p className="text-gray-700 leading-relaxed">
              All intellectual property rights related to the Platform including software, AI algorithms, databases, analytics, and generated content remain the exclusive property of ExAIm. Users shall not copy, alter, distribute, sell, or reverse-engineer any part of the Platform without explicit prior written permission from ExAIm.
            </p>
          </div>

          {/* AI-driven Assessment */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">7. AI-driven Assessment</h2>
            <p className="text-gray-700 leading-relaxed">
              The Platform uses advanced AI technology for automated assessment grading and analytics. Although designed for accuracy, all AI-generated results must be reviewed and validated by teachers or administrators. ExAIm explicitly disclaims liability for institutional decisions made solely based on AI-generated outcomes without appropriate human oversight.
            </p>
          </div>

          {/* Fees and Payment Terms */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">8. Fees and Payment Terms</h2>
            <p className="text-gray-700 leading-relaxed">
              Institutions agree to pay subscription fees as detailed in their contracts. Payments must be made according to the agreed schedule (annually or monthly). Non-payment or delayed payment may lead to suspension or termination of services following prior written notification.
            </p>
          </div>

          {/* Platform Availability & Maintenance */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">9. Platform Availability & Maintenance</h2>
            <p className="text-gray-700 leading-relaxed">
              ExAIm aims to provide consistent Platform availability but does not guarantee uninterrupted access. Scheduled maintenance activities will be communicated to Institutions at least 48 hours in advance. ExAIm is not responsible for interruptions caused by circumstances beyond reasonable control.
            </p>
          </div>

          {/* Limitation of Liability */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">10. Limitation of Liability</h2>
            <p className="text-gray-700 leading-relaxed">
              ExAIm shall not be liable for indirect, incidental, consequential, or punitive damages arising from use of the Platform. The total liability of ExAIm shall not exceed subscription fees paid by the Institution within the previous twelve months.
            </p>
          </div>

          {/* Termination */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">11. Termination</h2>
            <p className="text-gray-700 leading-relaxed">
              Either party may terminate this agreement with a minimum of 30 days' written notice. Following termination, ExAIm will securely delete or return all User data within 60 days, consistent with our Privacy Policy.
            </p>
          </div>

          {/* Jurisdiction and Governing Law */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">12. Jurisdiction and Governing Law</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              For Institutions based in the United Kingdom or other international jurisdictions, these Terms are governed exclusively by the laws of England and Wales, with disputes subject exclusively to English courts.
            </p>
            <p className="text-gray-700 leading-relaxed">
              For Institutions based in the United Arab Emirates, these Terms are governed exclusively by the laws of Dubai and the UAE, with disputes subject exclusively to Dubai courts.
            </p>
          </div>

          {/* Data Processing Agreements (DPA) & Subprocessors */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">13. Data Processing Agreements (DPA) & Subprocessors</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              ExAIm maintains formal Data Processing Agreements (DPAs) with subprocessors handling personal data, specifically:
            </p>
            
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4 mt-6">Google Cloud Platform (GCP):</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Infrastructure hosting, database storage (MySQL), and computing services. Google's official GDPR-compliant DPA is explicitly accepted by ExAIm and can be reviewed <a href="https://cloud.google.com/terms/data-processing-addendum" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700 underline">here</a>.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Institutions may request an updated list of subprocessors at any time. ExAIm will provide email notifications at least 30 days in advance of any changes to subprocessors.
            </p>
          </div>

          {/* Amendments */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">14. Amendments</h2>
            <p className="text-gray-700 leading-relaxed">
              ExAIm reserves the right to amend these Terms. Institutions will be informed via email at least 30 days in advance of any material changes taking effect.
            </p>
          </div>

          {/* Contact Information */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">15. Contact Information</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              For questions or clarifications about these Terms, contact:
            </p>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">ExAIm Limited</h3>
              <p className="text-gray-700 mb-2">2 Crossways Business Centre,</p>
              <p className="text-gray-700 mb-2">Bicester Road, Kingswood,</p>
              <p className="text-gray-700 mb-2">Aylesbury, HP18 0RA,</p>
              <p className="text-gray-700 mb-4">United Kingdom</p>
              <p className="text-gray-700">
                Email: <a href="mailto:support@exaim.ai" className="text-primary-600 hover:text-primary-700 underline">support@exaim.ai</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function TermsAndConditionsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <div className="border-b border-gray-100 my-0"></div>
      <TermsContentSection />
      <Footer />
    </main>
  )
}

