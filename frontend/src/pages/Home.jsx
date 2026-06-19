import { Link } from "react-router-dom"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* HERO SECTION */}
      <section className="text-center py-20 bg-white">

        <h1 className="text-5xl font-bold text-green-600">
          GreenHarvest System
        </h1>

        <p className="mt-4 text-gray-600 text-lg">
          Smart Agriculture Supply Chain Platform for Farmers, Markets & Restaurants
        </p>

        <div className="mt-6 flex justify-center gap-4">

          <Link to="/login">
            <button className="bg-green-600 text-white px-6 py-2 rounded">
              Get Started
            </button>
          </Link>

          <Link to="/dashboard">
            <button className="border px-6 py-2 rounded">
              Dashboard
            </button>
          </Link>

        </div>

      </section>

      {/* FEATURES */}
      <section className="py-16 px-10 grid md:grid-cols-3 gap-6">

        <div className="bg-white p-6 rounded shadow">
          <h2 className="font-bold">Smart Pricing</h2>
          <p>Dynamic pricing based on demand and supply</p>
        </div>

        <div className="bg-white p-6 rounded shadow">
          <h2 className="font-bold">Demand Forecast</h2>
          <p>Predict future demand for better planning</p>
        </div>

        <div className="bg-white p-6 rounded shadow">
          <h2 className="font-bold">Fast Delivery</h2>
          <p>Optimized logistics for restaurants & markets</p>
        </div>

      </section>

      {/* HOW IT WORKS */}
      <section className="bg-gray-100 py-16 text-center">

        <h2 className="text-3xl font-bold mb-6">
          How It Works
        </h2>

        <p className="max-w-2xl mx-auto text-gray-600">
          Farmers list products → System predicts demand → Orders processed →
          Delivery centers handle logistics → Restaurants receive fresh goods
        </p>

      </section>

      {/* CTA */}
      <section className="py-20 text-center bg-green-600 text-white">

        <h2 className="text-3xl font-bold">
          Start Using GreenHarvest Today
        </h2>

        <Link to="/login">
          <button className="mt-6 bg-white text-green-600 px-6 py-2 rounded">
            Login Now
          </button>
        </Link>

      </section>

    </div>
  )
}