'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const faqs = [
  {
    question: "How does the AI-powered resume builder work?",
    answer: "Our AI-powered resume builder uses advanced natural language processing to help you create a professional resume. Simply chat with our AI assistant, provide your information, and it will generate a tailored resume based on your input and industry best practices."
  },
  {
    question: "Is my data safe and secure?",
    answer: "Yes, we take data security very seriously. All your information is encrypted and stored securely. We do not share your personal data with third parties. You have full control over your data and can delete it at any time."
  },
  {
    question: "Can I customize the generated resume?",
    answer: "While our AI creates a great starting point, you have full control to edit, rearrange, and customize your resume. You can change fonts, colors, and layouts to match your personal style."
  },
  {
    question: "How do I know if my resume is ATS-friendly?",
    answer: "All our templates are designed to be ATS (Applicant Tracking System) friendly. Our AI also optimizes your content for ATS by using industry-standard formatting and relevant keywords based on the job descriptions you're targeting."
  },
  {
    question: "Can I create multiple versions of my resume?",
    answer: "Yes, you can create multiple versions of your resume for different job applications. Our platform allows you to save and manage multiple resumes, making it easy to tailor your application for each opportunity."
  },
  {
    question: "Is there a limit to how many resumes I can create?",
    answer: "With our free plan, you can create a limited number of resumes. For unlimited resume creation and advanced features, check out our premium plans."
  }
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-[#D2DCFF]">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter text-center sm:text-4xl md:text-5xl">
          Frequently Asked Questions
        </h2>
        <div className="mx-auto mt-8 max-w-3xl space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200">
              <button
                className="flex w-full items-center justify-between py-4 text-left text-lg font-medium"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-gray-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                )}
              </button>
              {openIndex === index && (
                <div className="pb-4 text-gray-500">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

