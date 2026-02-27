"use client"

import { usePlanets } from "@/hooks/usePlanets"
import { useWarStatus } from "@/hooks/useWarStatus"
import PlanetCard from "@/components/PlanetCard"
import WarStatus from "@/components/WarStatus"
import RefreshTimer from "@/components/RefreshTimer"
<RefreshTimer intervalSeconds={3} />

export default function Home() {
  const { planets, error: planetsError, isLoading: planetsLoading } = usePlanets()
  const { warStatus, isLoading: warLoading } = useWarStatus()

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white p-8">
      <h1 className="text-3xl font-bold text-yellow-400 mb-2">
        Helldivers 2 — War Dashboard
      </h1>
      <p className="text-gray-400 mb-8">État de la guerre galactique</p>
      <RefreshTimer intervalSeconds={10} />

      {/* Bandeau guerre */}
      {warLoading && <p className="text-gray-400 animate-pulse mb-8">Chargement du statut de guerre...</p>}
      {warStatus && <WarStatus data={warStatus} />}

      {/* Planètes */}
      {planetsLoading && <p className="text-gray-400 animate-pulse">Chargement des planètes...</p>}
      {planetsError && <p className="text-red-400">Erreur lors du chargement des données.</p>}
      {planets && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {planets.map((planet) => (
            <PlanetCard key={planet.index} planet={planet} />
          ))}
        </div>
      )}
    </main>
  )
}