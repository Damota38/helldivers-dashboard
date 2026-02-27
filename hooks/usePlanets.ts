import useSWR from "swr"
import { Planet } from "@/types/helldivers"

const fetcher = (url: string) => fetch(url).then(r => r.json())

export function usePlanets() {
    const { data, error, isLoading } = useSWR<Planet[]>("/api/planets", fetcher, {
        refreshInterval: 10000,
    })
    return { planets: data, error, isLoading }
}