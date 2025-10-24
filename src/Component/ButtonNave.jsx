import { Home, User, Code2, FolderOpen, Mail } from 'lucide-react';

const BottomNav = ({ activeTab, onTabChange }) => {
  const navItems = [
    { id: 'home', label: 'Home', icon: Home, href: '#home' },
    { id: 'about', label: 'About', icon: User, href: '#about' },
    { id: 'skills', label: 'Skills', icon: Code2, href: '#skills' },
    { id: 'projects', label: 'Projects', icon: FolderOpen, href: '#projects' },
    { id: 'contact', label: 'Contact', icon: Mail, href: '#contact' }
  ];

  const handleNavClick = (item) => {
    onTabChange(item.id);
    document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-xl border-t border-border shadow-lg">
      <div className="flex items-center justify-around px-2">
        {navItems.map((item) => {
          const isActive = activeTab === item.id;
          const IconComponent = item.icon;
          
          return (
            <button
              key={item.id}
              onClick={() => handleNavClick(item)}
              className={`relative flex flex-col items-center justify-center py-2 px-3 min-h-[64px] transition-all duration-300 ${
                item.highlight && !isActive
                  ? 'text-secondary'
                  : isActive 
                  ? 'text-secondary' 
                  : 'text-foreground/60 hover:text-foreground'
              } ${isActive ? 'scale-110' : 'scale-100'}`}
              aria-label={item.label}
            >
              {/* Active indicator */}
              {isActive && (
                <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-10 h-1 bg-gradient-to-r from-secondary to-accent rounded-full" />
              )}
              
              {/* Highlight effect */}
              {item.highlight && !isActive && (
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/10 to-transparent rounded-xl" />
              )}
              
              <div className={`relative ${isActive && item.highlight ? 'animate-pulse' : ''}`}>
                <IconComponent className={`w-6 h-6 mb-1 transition-transform ${isActive ? 'scale-110' : ''}`} />
                {item.highlight && (
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-secondary rounded-full animate-pulse" />
                )}
              </div>
              <span className={`text-xs font-medium ${isActive ? 'font-semibold' : ''}`}>
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;