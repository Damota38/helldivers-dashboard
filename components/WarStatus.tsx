type WarStatusData = {
    factions: string[]
    statistics: {
        missionsWon: number
        missionsLost: number
        deaths: number
        playerCount: number
        missionsSuccessRate: number
    }
}

type Props = {
    data: WarStatusData
}

export default function WarStatus({ data }: Props) {
    const { statistics } = data

    return (
        <div className="bg-[#111111] border border-gray-700 rounded-lg p-6 mb-8">

            {/* Titre */}
            <h2 className="text-yellow-400 font-bold text-xl mb-4">
                État de la guerre galactique
            </h2>

            {/* Stats globales */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">

                <div className="flex flex-col">
                    <span className="text-gray-400 text-xs uppercase tracking-wide">Helldivers actifs</span>
                    <span className="text-white font-bold text-lg">
                        {statistics.playerCount.toLocaleString()}
                    </span>
                </div>

                <div className="flex flex-col">
                    <span className="text-gray-400 text-xs uppercase tracking-wide">Missions réussies</span>
                    <span className="text-green-400 font-bold text-lg">
                        {statistics.missionsWon.toLocaleString()}
                    </span>
                </div>

                <div className="flex flex-col">
                    <span className="text-gray-400 text-xs uppercase tracking-wide">Missions échouées</span>
                    <span className="text-red-400 font-bold text-lg">
                        {statistics.missionsLost.toLocaleString()}
                    </span>
                </div>

                <div className="flex flex-col">
                    <span className="text-gray-400 text-xs uppercase tracking-wide">Taux de succès</span>
                    <span className="text-yellow-400 font-bold text-lg">
                        {statistics.missionsSuccessRate}%
                    </span>
                </div>

            </div>

            {/* Factions */}
            <div className="mt-4 flex gap-2 flex-wrap">
                {data.factions.map((faction) => {
                    const color =
                        faction === "Automatons" || faction === "Automaton"
                            ? "border-red-500 text-red-400"
                            : faction === "Terminids"
                                ? "border-yellow-500 text-yellow-400"
                                : faction === "Illuminate"
                                    ? "border-purple-500 text-purple-400"
                                    : "border-blue-500 text-blue-400"

                    return (
                        <span
                            key={faction}
                            className={`border rounded px-2 py-1 text-xs font-semibold ${color}`}
                        >
                            {faction}
                        </span>
                    )
                })}
            </div>

        </div>
    )
}