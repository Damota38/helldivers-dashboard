const BASE = process.env.HELLDIVERS_API_BASE || "https://api.helldivers2.dev/api/v1"

export async function getPlanets() {
  const res = await fetch(`${BASE}/planets`, { next: { revalidate: 10 } })
  if (!res.ok) throw new Error("Erreur API planètes")
  return res.json()
}

export async function getWarStatus() {
  const res = await fetch(`${BASE}/war`, { next: { revalidate: 10 } })
  if (!res.ok) throw new Error("Erreur API guerre")
  return res.json()
}

export async function getCampaigns() {
  const res = await fetch(`${BASE}/campaigns`, { next: { revalidate: 10 } })
  if (!res.ok) throw new Error("Erreur API campagnes")
  return res.json()
}