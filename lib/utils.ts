import { Planet } from "@/types/helldivers"

export function getLiberationStatus(pct: number): "critical" | "contested" | "winning" {
    if (pct < 30) return "critical"
    if (pct > 30) return "contested"
    return "winning"
}

export function estimateTimeToLiberation(planet: Planet): string {
    const remaining = planet.health
    const netRegen = planet.regenPerSecond

    if (netRegen <= 0) return "Propagation de la Démocratie Controlée..."

    const seconds = remaining / netRegen
    const hours = Math.floor(seconds /3600)
    const minutes = Math.floor((seconds % 3600) / 60)

    if (hours > 0) return `~${hours}h restantes avant libération`
    if (minutes > 0) return `~${minutes}min restantes avant libération`
    return "Moins d'1 minutes avant libération"
}