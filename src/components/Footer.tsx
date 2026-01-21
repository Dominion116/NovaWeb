export function Footer() {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex items-center gap-2">
            <a href="/" className="flex items-center gap-2 group">
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-400 to-primary group-hover:opacity-80 transition-opacity">
                NovaWeb
              </span>
            </a>
            <span className="text-sm text-muted-foreground ml-2">
              &copy; {new Date().getFullYear()} NovaWeb Services.
            </span>
          </div>
          <nav className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Contact
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
