import useSWR from "swr"

const fetcher = (url: string) => fetch(url).then(r => r.json())

export function useWarStatus() {
    const { data, error, isLoading } = useSWR("/api/war", fetcher, {
        refreshInterval: 10000,
    })

    return { warStatus: data, error, isLoading }
}