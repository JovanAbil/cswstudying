import { Link } from 'react-router-dom';
import { Eye, Users } from 'lucide-react';

// Historical data offsets (data before Cloudflare tracking started)
// Last updated: Jan 19th, 2026 at 9:35 AM
const TOTAL_VISITORS = 236 + 18; // 254 total visitors
const TOTAL_PAGEVIEWS = 1700 + 101; // 1801 total pageviews
const LAST_UPDATED = "9:35 AM, Jan 19th 2026";

export const Footer = () => {
  return (
    <footer className="w-full border-t bg-muted/30">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col gap-2">
          {/* Main footer row */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-muted-foreground">
            <div className="flex flex-wrap items-center justify-center gap-2">
              <span>This website was made with the help of Lovable</span>
              <span className="text-muted-foreground/50">•</span>
              <div className="flex items-center gap-1 px-2 py-0.5 rounded bg-primary/10">
                <Users className="h-3 w-3 text-primary" />
                <span className="text-xs font-medium">{TOTAL_VISITORS.toLocaleString()}</span>
              </div>
              <div className="flex items-center gap-1 px-2 py-0.5 rounded bg-primary/10">
                <Eye className="h-3 w-3 text-primary" />
                <span className="text-xs font-medium">{TOTAL_PAGEVIEWS.toLocaleString()}</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Link to="/privacy" className="hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
            </div>
          </div>
          
          {/* Last updated */}
          <div className="text-center text-xs text-muted-foreground/60">
            Stats last updated: {LAST_UPDATED}
          </div>
        </div>
      </div>
    </footer>
  );
};