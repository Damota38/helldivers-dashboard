import { getPlanets } from "@/lib/helldiversApi"

export async function GET() {
  try {
    const data = await getPlanets()
    return Response.json(data)
  } catch {
    return Response.json({ error: "Erreur lors du fetch des planètes" }, { status: 500 })
  }
}