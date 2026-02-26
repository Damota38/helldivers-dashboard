import { getWarStatus } from "@/lib/helldiversApi";

export async function GET() {
    try {
        const data = await getWarStatus()
        return Response.json(data)
    } catch {
        return Response.json({ error: "Erreur lors du fetch du status de guerre" }, { status: 500 })
    }
}