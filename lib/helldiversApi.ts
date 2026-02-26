const BASE = process.env.HELLDIVERS_API_BASE || "https://api.helldivers2.dev/api/v1"

const headers = {
  "Accept": "application/json",
  "Accept-Language": "fr-FR",
  "X-Super-Client": "helldivers-dashboard",
  "X-Super-Contact": "a.damota.dw@gmail.com",
}

export async function getPlanets() {
  const res = await fetch(`${BASE}/planets`, { headers, next: { revalidate: 10 } })
  if (!res.ok) throw new Error("Erreur API planètes")
  return res.json()
}

export async function getWarStatus() {
  const res = await fetch(`${BASE}/war`, { headers, next: { revalidate: 10 } })
  if (!res.ok) throw new Error("Erreur API guerre")
  return res.json()
}

export async function getCampaigns() {
  const res = await fetch(`${BASE}/campaigns`, { headers, next: { revalidate: 10 } })
  if (!res.ok) throw new Error("Erreur API campagnes")
  return res.json()
}