export function getLiberationStatus(pct: number): "critical" | "contested" | "winning" {
    if (pct < 30) return "critical"
    if (pct > 30) return "contested"
    return "winning"
}

export function estimateTimeToLiberation(planet: { health: number, regenPerSecond: number }): string {
    const remaining = planet.health
    const netRegen = planet.regenPerSecond

    if (netRegen <= 0) return "Propagation de la Démocratie Controlée..."

    const seconds = remaining / netRegen
    const hours = Math.floor(seconds / 3600)
    const minutes = Math.floor((seconds % 3600) / 60)

    if (hours > 0) return `~${hours}h restantes avant libération`
    if (minutes > 0) return `~${minutes}min restantes avant libération`
    return "Moins d'1 minute avant libération"
}

export function getDefenseTimeLeft(endTime: string): string {
    const end = new Date(endTime).getTime()
    const now = Date.now()
    const diff = Math.max(0, end - now)
    const hours = Math.floor(diff / 3600000)
    const minutes = Math.floor((diff % 3600000) / 60000)
    if (hours > 0) return `~${hours}h restantes`
    if (minutes > 0) return `~${minutes}min restantes`
    return "Défense terminée"
}