"use client"

import { useCampaigns } from "@/hooks/useCampaigns"
import { useWarStatus } from "@/hooks/useWarStatus"
import PlanetCard from "@/components/PlanetCard"
import WarStatus from "@/components/WarStatus"

export default function Home() {
  const { campaigns, error, isLoading } = useCampaigns()
  const { warStatus, isLoading: warLoading } = useWarStatus()

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white p-8">
      <h1 className="text-3xl font-bold text-yellow-400 mb-2">
        Helldivers 2 — War Dashboard
      </h1>

      <div className="flex justify-between items-center mb-8">
        <p className="text-gray-400">État de la guerre galactique</p>
      </div>

      {/* Bandeau guerre */}
      {warLoading && <p className="text-gray-400 animate-pulse mb-8">Chargement...</p>}
      {warStatus && <WarStatus data={warStatus} />}

      {/* Campagnes actives */}
      <h2 className="text-white font-bold text-xl mb-4">
        Campagnes de libération ou de défense actuelles ({campaigns?.length ?? 0})
      </h2>

      {isLoading && <p className="text-gray-400 animate-pulse">Chargement des campagnes...</p>}
      {error && <p className="text-red-400">Erreur lors du chargement des campagnes.</p>}

      {campaigns && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {campaigns.map((campaign) => (
            <PlanetCard key={campaign.id} planet={campaign.planet} isDefense={campaign.type === 4} />
          ))}
        </div>
      )}
    </main>
  )
}