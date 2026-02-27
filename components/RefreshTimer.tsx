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
}