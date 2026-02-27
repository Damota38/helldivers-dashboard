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