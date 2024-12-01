'use client'

import { Bot, FileText, Zap, Clock, Sparkles, Shield } from 'lucide-react'


export default function FeaturesSection() {
  return (
    <section className="w-full py-2 md:py-24 lg:py-32 bg-gradient-to-b to-white from-[#D2DCFF]  ">
      <div className="container px-4 md:px-6 ">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Powerful Features
            </h2>
            <p className="max-w-[900px] text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-zinc-400">
              Create the perfect resume with our AI-powered platform
            </p>
          </div>
        </div>
        <div className="mx-auto grid gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3 mt-12">
          <div className="flex flex-col items-center space-y-3 text-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-lg ">
              <Bot className="h-10 w-10 text-blue-950 " />
            </div>
            <h3 className="text-xl font-bold">AI-Powered Assistant</h3>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              Chat with our AI to create your perfect resume effortlessly
            </p>
          </div>
          <div className="flex flex-col items-center space-y-3 text-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-lg ">
              <FileText className="h-10 w-10 text-blue-950 " />
            </div>
            <h3 className="text-xl font-bold">Professional Templates</h3>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              Choose from a variety of ATS-friendly resume templates
            </p>
          </div>
          <div className="flex flex-col items-center space-y-3 text-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-lg ">
              <Zap className="h-10 w-10 text-blue-950 " />
            </div>
            <h3 className="text-xl font-bold">Instant Generation</h3>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              Generate your resume in seconds with our advanced AI technology
            </p>
          </div>
          <div className="flex flex-col items-center space-y-3 text-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-lg ">
              <Clock className="h-10 w-10 text-blue-950 " />
            </div>
            <h3 className="text-xl font-bold">Real-Time Updates</h3>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              Edit and update your resume in real-time with live preview
            </p>
          </div>
          <div className="flex flex-col items-center space-y-3 text-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-lg ">
              <Sparkles className="h-10 w-10 text-blue-950 " />
            </div>
            <h3 className="text-xl font-bold">Smart Formatting</h3>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              Automatically format your content for the best presentation
            </p>
          </div>
          <div className="flex flex-col items-center space-y-3 text-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-lg ">
              <Shield className="h-10 w-10 text-blue-950 " />
            </div>
            <h3 className="text-xl font-bold">ATS Optimized</h3>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              Ensure your resume passes Applicant Tracking Systems
            </p>
          </div>
        </div>
      </div>
      </section>
  )
}

