import PlanetCard from "@/components/PlanetCard"
import { mockPlanets } from "@/data/mockPlanets"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white p-8">
      <h1 className="text-3xl font-bold text-yellow-400 mb-2">
      Helldivers 2 — War Dashboard
      </h1>
      <p className="text-gray-400 mb-8">État de la guerre galactique</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {mockPlanets.map((planet) => (
          <PlanetCard key={planet.index} planet={planet} />
        ))}
      </div>
    </main>
  )
}