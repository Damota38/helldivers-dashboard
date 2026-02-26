import { Planet } from "@/types/helldivers"
import { getLiberationStatus, estimateTimeToLiberation } from "@/lib/utils"

type Props = {
  planet: Planet
}

export default function PlanetCard({ planet }: Props) {
  const status = getLiberationStatus(planet.liberation)

  const liberationColor =
    status === "critical"
      ? "bg-red-500"
    : status === "contested"
      ? "bg-orange-400"
      : "bg-green-500"

  const factionColor =
    planet.faction === "Automatons"
      ? "text-red-400"
      : planet.faction === "Terminids"
      ? "text-yellow-400"
      : "text-purple-400"

  return (
    <div className="bg-[#1a1a1a] border border-gray-700 rounded-lg p-4 flex flex-col gap-3">
      
      {/* Nom + Faction */}
      <div className="flex justify-between items-center">
        <h2 className="text-white font-bold text-lg">{planet.name}</h2>
        <span className={`text-sm font-semibold ${factionColor}`}>
          {planet.faction}
        </span>
      </div>

      {/* Secteur */}
      <p className="text-gray-400 text-sm">Secteur {planet.sector}</p>

      {/* Barre de libération */}
      <div>
        <div className="flex justify-between text-xs text-gray-400 mb-1">
          <span>Libération</span>
          <span>{planet.liberation.toFixed(1)}%</span>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-2">
          <div
            className={`h-2 rounded-full ${liberationColor}`}
            style={{ width: `${planet.liberation}%` }}
          />
        </div>
      </div>

      {/* Joueurs actifs */}
      <p className="text-gray-300 text-sm">
        {planet.players.toLocaleString()} helldivers actifs
      </p>

      {/* Temps estimé */}
      <p className="text-gray-500 text-xs">
        {estimateTimeToLiberation(planet)}
      </p>

    </div>
  )
}