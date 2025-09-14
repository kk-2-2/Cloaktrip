import React from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Compass, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navigationItems = [
  { title: "Home", url: createPageUrl("Home") },
  { title: "Price Comparison", url: createPageUrl("Comparison") },
  { title: "Rentals", url: createPageUrl("Rentals") },
  { title: "Guides (AI + Local)", url: createPageUrl("Guides") },
  { title: "Hidden Gems", url: createPageUrl("HiddenGems") },
  { title: "Activities", url: createPageUrl("Activities") },
  { title: "About Us", url: createPageUrl("About") },
];

export default function Layout({ children }) {
  const location = useLocation();
  const [open, setOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <style>{`
        :root {
          --primary-teal: #1ABC9C;
          --primary-navy: #0A1F44;
          --accent-orange: #FF7F50;
        }
        .brand-gradient { background: linear-gradient(135deg, #0A1F44 0%, #0f2a5d 50%, #1ABC9C 100%); }
        .nav-active { color: var(--primary-teal) !important; background: rgba(26, 188, 156, 0.1); }
      `}</style>

      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link to={createPageUrl("Home")} className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg brand-gradient flex items-center justify-center shadow-sm">
              <Compass className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-teal-600 to-teal-400 bg-clip-text text-transparent">
              CloakTrip
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navigationItems.map((item) => {
              const active = location.pathname === item.url;
              return (
                <Link
                  key={item.title}
                  to={item.url}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all hover:bg-gray-50 ${
                    active ? "nav-active" : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {item.title}
                </Link>
              );
            })}
          </nav>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" aria-label="Open Menu">
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-7 h-7 rounded-lg brand-gradient flex items-center justify-center">
                  <Compass className="w-4 h-4 text-white" />
                </div>
                <span className="text-lg font-bold">CloakTrip</span>
              </div>
              <nav className="space-y-2">
                {navigationItems.map((item) => {
                  const active = location.pathname === item.url;
                  return (
                    <Link
                      key={item.title}
                      to={item.url}
                      onClick={() => setOpen(false)}
                      className={`block px-4 py-3 rounded-xl transition-all ${
                        active ? "bg-teal-50 text-teal-600" : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                      }`}
                    >
                      {item.title}
                    </Link>
                  );
                })}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      <main>{children}</main>

      <footer className="bg-slate-900 text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg brand-gradient flex items-center justify-center">
                  <Compass className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-semibold">CloakTrip</span>
              </div>
              <p className="text-gray-400 text-sm">
                Compare prices, discover hidden gems, and craft smart itineraries across India.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Explore</h4>
              <div className="space-y-2 text-sm text-gray-300">
                <Link to={createPageUrl("Comparison")} className="block hover:text-teal-400">Price Comparison</Link>
                <Link to={createPageUrl("Guides")} className="block hover:text-teal-400">Local Guides</Link>
                <Link to={createPageUrl("HiddenGems")} className="block hover:text-teal-400">Hidden Gems</Link>
                <Link to={createPageUrl("Activities")} className="block hover:text-teal-400">Activities</Link>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Company</h4>
              <div className="space-y-2 text-sm text-gray-300">
                <Link to={createPageUrl("About")} className="block hover:text-teal-400">About Us</Link>
                <a className="block hover:text-teal-400" href="#">Partnerships</a>
                <a className="block hover:text-teal-400" href="#">Investors</a>
                <a className="block hover:text-teal-400" href="#">FAQs</a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Stay Updated</h4>
              <p className="text-gray-400 text-sm mb-3">Travel tips and hidden gems to your inbox.</p>
              <div className="space-y-2">
                <input className="w-full px-3 py-2 rounded-lg bg-gray-800 border border-gray-700 text-sm" placeholder="Your email" />
                <button className="w-full bg-teal-600 hover:bg-teal-700 text-white py-2 rounded-lg text-sm font-medium">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-10 pt-6 text-sm text-gray-400 flex flex-col sm:flex-row justify-between">
            <span>© 2024 CloakTrip. All rights reserved.</span>
            <div className="space-x-6">
              <a className="hover:text-teal-400" href="#">Privacy</a>
              <a className="hover:text-teal-400" href="#">Terms</a>
              <a className="hover:text-teal-400" href="#">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
