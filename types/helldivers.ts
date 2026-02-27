export interface Planet {
  index: number
  name: string
  sector: string
  health: number
  maxHealth: number
  currentOwner: string
  regenPerSecond: number
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