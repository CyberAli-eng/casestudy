import Link from 'next/link'

export default function CaseStudiesPage() {
  return (
    <main className="max-w-4xl mx-auto py-20 px-6 text-center">
      <h1 className="text-4xl font-bold mb-8">Case Studies</h1>
      <p className="text-gray-600 mb-12">
        Explore how leading companies transformed with PrimeRole.
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-6">
        <Link href="/case-studies/lambdatest" className="bg-primary px-6 py-3 rounded-lg shadow hover:bg-secondary transition">
          LambdaTest Case Study
        </Link>
        <Link href="/case-studies/whatfix" className="bg-primary px-6 py-3 rounded-lg shadow hover:bg-secondary transition">
          Whatfix Case Study
        </Link>
      </div>
    </main>
  )
}