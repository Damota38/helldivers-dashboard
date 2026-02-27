import useSWR from "swr"
import { Campaign } from "@/types/helldivers"

const fetcher = (url: string) => fetch(url).then(r => r.json())

export function useCampaigns() {
    const { data, error, isLoading } = useSWR<Campaign[]>("/api/campaigns", fetcher, {
        refreshInterval: 10000,
    })
    return { campaigns: data, error, isLoading }
}