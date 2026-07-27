export function AIVisibilityScore() {
  const competitors = [
    { name: 'Alphainsights', percentage: 38 },
    { name: 'FitVision', percentage: 27 },
    { name: 'DataRoom', percentage: 16 },
    { name: 'Quantis', percentage: 4 },
    { name: 'Others', percentage: 8 },
  ]

  return (
    <div className="bg-card border border-border rounded-2xl p-8 max-w-sm">
      {/* Circular Score */}
      <div className="flex items-center justify-center mb-8">
        <div className="relative w-32 h-32">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 120 120">
            {/* Background circle */}
            <circle cx="60" cy="60" r="54" fill="none" stroke="#2d3748" strokeWidth="8" />
            {/* Progress circle */}
            <circle
              cx="60"
              cy="60"
              r="54"
              fill="none"
              stroke="#7c3aed"
              strokeWidth="8"
              strokeDasharray={`${(86 / 100) * 340} 340`}
              strokeLinecap="round"
              className="transition-all duration-1000"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="text-4xl font-bold text-foreground">86</div>
            <div className="text-xs text-muted-foreground">/100</div>
          </div>
        </div>
      </div>

      {/* Label */}
      <div className="text-center mb-6">
        <h3 className="text-lg font-semibold text-foreground">Strong Visibility</h3>
      </div>

      {/* Competitors */}
      <div className="space-y-3">
        <div className="text-xs text-muted-foreground uppercase font-semibold mb-4">Top Competitors Mentioned</div>
        {competitors.map((competitor) => (
          <div key={competitor.name} className="space-y-1">
            <div className="flex items-center justify-between text-sm">
              <span className="text-foreground">{competitor.name}</span>
              <span className="text-primary font-semibold">{competitor.percentage}%</span>
            </div>
            <div className="w-full bg-secondary rounded-full h-1.5">
              <div
                className="bg-primary h-1.5 rounded-full transition-all duration-500"
                style={{ width: `${competitor.percentage}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
