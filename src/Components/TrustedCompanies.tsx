import Image from 'next/image'

export default function TrustedCompanies() {
  const companies = [
    { name: 'Aceternity UI', logo: '/Work/yellow-labs.png' },
    { name: 'Gamity', logo: '/placeholder.svg?height=50&width=200' },
    { name: 'Host IT', logo: '/placeholder.svg?height=50&width=200' },
    { name: 'Asteroid Kit', logo: '/placeholder.svg?height=50&width=200' },
  ]

  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-b from-gray-900 via-gray-600 to-gray-900">
          Trusted by the best companies
        </h2>
        <p className="text-xl text-gray-600 text-center mb-12">
          Companies that have been using our product from the very start.
        </p>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {companies.map((company) => (
            <div key={company.name} className="col-span-1 flex justify-center items-center">
              <Image
                src={company.logo}
                alt={`${company.name} logo`}
                width={200}
                height={50}
                className="max-h-12 w-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}