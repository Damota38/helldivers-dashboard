export interface PlanetEvent {
  id: number
  eventType: number
  faction: string
  health: number
  maxHealth: number
  startTime: string
  endTime: string
}

export interface Planet {
  index: number
  name: string
  sector: string
  health: number
  maxHealth: number
  currentOwner: string
  regenPerSecond: number
  event: PlanetEvent | null
  statistics: {
    playerCount: number
  }
}

export interface Campaign {
  id: number
  planet: Planet
  type: number
  count: number
  faction: string
}