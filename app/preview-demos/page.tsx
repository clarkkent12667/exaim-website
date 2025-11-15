'use client'

import AssignmentPreview from '@/components/exaim/AssignmentPreview'
import StudentExamPreview from '@/components/exaim/StudentExamPreview'
import AIMarkingPreview from '@/components/exaim/AIMarkingPreview'
import AnalyticsPreview from '@/components/exaim/AnalyticsPreview'

export default function PreviewDemosPage() {
  return (
    <main className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 space-y-12">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Preview Demos</h1>
          <p className="text-gray-600">Screenshot these components for the walkthrough section</p>
        </div>

        {/* Assignment Preview */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-900">1. Assignment Preview</h2>
          <div id="assignment-preview" className="bg-white p-4 rounded-lg shadow-lg">
            <AssignmentPreview />
          </div>
        </div>

        {/* Student Exam Preview */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-900">2. Student Exam Preview</h2>
          <div id="student-exam-preview" className="bg-white p-4 rounded-lg shadow-lg">
            <StudentExamPreview />
          </div>
        </div>

        {/* AI Marking Preview */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-900">3. AI Marking Preview</h2>
          <div id="ai-marking-preview" className="bg-white p-4 rounded-lg shadow-lg">
            <AIMarkingPreview />
          </div>
        </div>

        {/* Analytics Preview */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-900">4. Analytics Preview</h2>
          <div id="analytics-preview" className="bg-white p-4 rounded-lg shadow-lg">
            <AnalyticsPreview />
          </div>
        </div>
      </div>
    </main>
  )
}

