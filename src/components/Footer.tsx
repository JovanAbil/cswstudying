import { Link } from 'react-router-dom';

export const Footer = () => {
  const links = [
    { to: '/privacy', label: 'Privacy Policy' },
    { to: '/data', label: 'Data/Statistics' },
    { to: '/how-to-use', label: 'How to Use' },
    { to: '/updates', label: 'Update Tracker' },
    { to: '/contributors', label: 'Mentions' },
    { to: '/data/proof', label: 'Data Proof' },
  ];

  // Split links into columns of 2
  const columns: typeof links[] = [];
  for (let i = 0; i < links.length; i += 2) {
    columns.push(links.slice(i, i + 2));
  }

  return (
    <footer className="w-full border-t bg-muted/30 relative z-20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-end justify-between gap-4 text-xs text-muted-foreground">
          {/* Links in columns of 2 going left to right */}
          <div className="flex gap-6">
            {columns.map((col, ci) => (
              <div key={ci} className="flex flex-col gap-1">
                {col.map(link => (
                  <Link key={link.to} to={link.to} className="hover:text-foreground transition-colors">
                    {link.label}
                  </Link>
                ))}
              </div>
            ))}
          </div>

          {/* Bottom right */}
          <p className="text-muted-foreground/50 text-xs">
            Made with <span className="font-medium text-muted-foreground/60">Lovable</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
