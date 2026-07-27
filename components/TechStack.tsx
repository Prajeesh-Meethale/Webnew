import { BarChart3, TrendingUp } from 'lucide-react'

export function TechStack() {
  const tools = [
    { name: 'Analytics', icon: '📊' },
    { name: 'Automation', icon: '⚙️' },
    { name: 'PingBot', icon: '🤖' },
    { name: 'Monitor', icon: '👁️' },
    { name: 'NoRa Explorer', icon: '🔍' },
    { name: 'NoBots', icon: '🚫' },
    { name: 'Stateless', icon: '◻️' },
    { name: 'Automation', icon: '⚡' },
    { name: 'Crawler', icon: '🕷️' },
    { name: '+5 more', icon: '••' },
  ]

  const metrics = [
    { label: 'Strong Visibility', value: '86', max: 100, color: '#7c3aed' },
    { label: 'Visibility Over Time', value: '41', change: 'from 0% to 41%', percentChange: true },
    { label: 'Avg Report Score', value: '64', description: 'points avg' },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <p className="text-xs text-primary uppercase tracking-widest font-semibold mb-4">BUILT ON INFERENCE. BACKED BY EVIDENCE.</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Powered by the <span className="text-primary">ArchDrift Investigation Engine</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Every investigation is generated using our proprietary platform—not manual prompting or spreadsheets.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Tools Grid */}
          <div>
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-4">Integration & Infrastructure</h3>
            <div className="grid grid-cols-2 gap-3">
              {tools.map((tool, index) => (
                <div key={index} className="bg-card border border-border rounded-lg p-4 flex items-center gap-3 hover:border-primary/30 transition-colors">
                  <span className="text-2xl">{tool.icon}</span>
                  <span className="text-sm font-medium text-foreground">{tool.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Metrics */}
          <div>
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-4">Key Metrics</h3>
            <div className="space-y-4">
              {metrics.map((metric, index) => (
                <div key={index} className="bg-card border border-border rounded-lg p-6 space-y-3">
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-muted-foreground font-medium">{metric.label}</p>
                    <div className="text-right">
                      <p className="text-3xl font-bold text-primary">{metric.value}</p>
                      {metric.percentChange && (
                        <p className="text-xs text-muted-foreground">{metric.change}</p>
                      )}
                      {metric.description && (
                        <p className="text-xs text-muted-foreground">{metric.description}</p>
                      )}
                    </div>
                  </div>
                  {metric.max && (
                    <div className="w-full bg-secondary rounded-full h-2">
                      <div
                        className="bg-primary h-2 rounded-full transition-all"
                        style={{ width: `${(metric.value / metric.max) * 100}%` }}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Visibility Chart */}
        <div className="bg-card border border-border rounded-xl p-8">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-foreground">Visibility Over Time</h3>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <TrendingUp className="w-4 h-4 text-green-500" />
                <span>4-week trend</span>
              </div>
            </div>

            {/* Simple Line Chart Visualization */}
            <div className="relative h-48 flex items-end justify-between gap-4">
              {[0, 25, 32, 41].map((value, index) => (
                <div key={index} className="flex-1 flex flex-col items-center gap-2">
                  <div
                    className="w-full bg-gradient-to-t from-primary to-primary/60 rounded-t"
                    style={{ height: `${(value / 41) * 100}%` }}
                  />
                  <div className="text-xs text-muted-foreground text-center">
                    <div>Week {index + 1}</div>
                    <div className="text-primary font-semibold">{value}%</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
