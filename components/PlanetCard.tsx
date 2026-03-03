import { Planet } from "@/types/helldivers"
import { estimateTimeToLiberation, getDefenseTimeLeft } from "@/lib/utils"

type Props = {
  planet: Planet
  isDefense?: boolean
}

export default function PlanetCard({ planet, isDefense = false }: Props) {
  const isDefenseMode = isDefense && planet.event !== null

  const currentHealth = isDefenseMode ? planet.event!.health : planet.health
  const maxHealth = isDefenseMode ? planet.event!.maxHealth : planet.maxHealth
  const liberation = ((1 - currentHealth / maxHealth) * 100)

  const liberationColor = isDefenseMode ? "bg-blue-500" : "bg-blue-500"

  const factionColor =
    planet.currentOwner === "Automaton"
      ? "text-red-400"
      : planet.currentOwner === "Terminids"
        ? "text-yellow-400"
        : planet.currentOwner === "Humans"
          ? "text-blue-400"
          : "text-purple-400"

  const attackerColor =
    planet.event?.faction === "Automaton"
      ? "text-red-400"
      : planet.event?.faction === "Terminids"
        ? "text-yellow-400"
        : "text-purple-400"

  const enemyFaction = isDefenseMode ? planet.event?.faction : planet.currentOwner

  const factionBgColor =
    enemyFaction === "Automaton" || enemyFaction === "Automatons"
      ? "bg-red-900"
      : enemyFaction === "Terminids"
        ? "bg-yellow-900"
        : enemyFaction === "Illuminate"
          ? "bg-purple-900"
          : "bg-gray-700"

  const defenseTimeLeft = isDefenseMode
    ? getDefenseTimeLeft(planet.event!.endTime)
    : null

  return (
    <div className={`bg-[#1a1a1a] border rounded-lg p-4 flex flex-col gap-3 ${isDefenseMode ? "border-orange-500" : "border-gray-700"
      }`}>

      {/* Badge défense */}
      {isDefenseMode && (
        <div className="flex items-center gap-2">
          <span className="bg-orange-500 text-black text-xs font-bold px-2 py-0.5 rounded">
            DÉFENSE
          </span>
          <span className={`text-xs font-semibold ${attackerColor}`}>
            Attaque : {planet.event!.faction}
          </span>
        </div>
      )}

      {/* Nom + Faction */}
      <div className="flex justify-between items-center">
        <h2 className="text-white font-bold text-lg">{planet.name}</h2>
        <span className={`text-sm font-semibold ${factionColor}`}>
          {planet.currentOwner}
        </span>
      </div>

      {/* Secteur */}
      <p className="text-gray-400 text-sm">Secteur : {planet.sector}</p>

      {/* Barre de progression */}
      <div>
        <div className="flex justify-between text-xs text-gray-400 mb-1">
          <span>{isDefenseMode ? "Progression ennemie" : "Libération"}</span>
          <span>{liberation.toFixed(1)}%</span>
        </div>
        <div className={`w-full rounded-full h-2 ${factionBgColor}`}>
          <div
            className={`h-2 rounded-full ${isDefenseMode ? "bg-blue-500" : liberationColor}`}
            style={{ width: `${liberation}%` }}
          />
        </div>
      </div>

      {/* Joueurs actifs */}
      <p className="text-gray-300 text-sm">
        {planet.statistics.playerCount.toLocaleString()} helldivers actifs
      </p>

      {/* Temps restant */}
      <p className="text-gray-500 text-xs italic">
        {isDefenseMode ? defenseTimeLeft : estimateTimeToLiberation(planet)}
      </p>

    </div>
  )
}