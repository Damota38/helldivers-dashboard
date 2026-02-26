import { getCampaigns } from "@/lib/helldiversApi";

export async function GET() {
    try {
        const data = await getCampaigns()
        return Response.json(data)
    } catch {
        return Response.json({ error: "Erreur lors du fetch des campagnes" }, { status: 500 })
    }
}