import { Check, Clock, Lock } from 'lucide-react'

export function FooterCTA() {
  return (
    <section className="py-24 bg-background border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 mb-16">
          
          {/* Left Side: Text and Badges */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-medium text-white mb-3">
              Ready to see how AI sees your business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Request your AI Visibility Investigation.
            </p>
            
            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-gray-400" />
                <span className="text-sm text-gray-400">No commitment</span>
              </div>
              <div className="flex items-center gap-2">
                <Lock className="w-5 h-5 text-gray-400" />
                <span className="text-sm text-gray-400">Confidential</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-gray-400" />
                <span className="text-sm text-gray-400">Delivered in 48-72 hours</span>
              </div>
            </div>
          </div>

          {/* Right Side: Button */}
          <div className="shrink-0">
            <button className="px-8 py-4 bg-[#6366F1] hover:bg-indigo-600 text-white rounded-lg font-medium transition-colors inline-flex items-center gap-2">
              Request Investigation →
            </button>
          </div>

        </div>
      </div>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 pt-12 border-t border-border">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">ArchDrift</h3>
            <p className="text-sm text-muted-foreground">
              AI Visibility Investigation & Execution for enterprises.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold text-foreground mb-4 text-sm">Product</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">How It Works</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Features</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Pricing</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-foreground mb-4 text-sm">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Blog</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-foreground mb-4 text-sm">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Privacy</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Terms</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Cookies</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 ArchDrift. All rights reserved.
          </p>
        </div>
      </footer>
    </section>
  )
}
