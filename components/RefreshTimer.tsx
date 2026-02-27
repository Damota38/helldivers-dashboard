"use client"

import { useState, useEffect } from "react"

type Props = {
    intervalSeconds: number
}

export default function RefreshTimer({ intervalSeconds }: Props) {
    const [secondsLeft, setSecondsLeft] = useState(intervalSeconds)

    useEffect(() => {
        const timer = setInterval(() => {
            setSecondsLeft((prev) => {
                if (prev <= 1) return intervalSeconds
                return prev - 1
            })
        }, 1000)

        return () => clearInterval(timer)
    }, [intervalSeconds])

    return (
        <div className="flex items-center gap-2 text-gray-500 text-xs">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span>Actualisation dans {secondsLeft}s</span>
        </div>
    )
}