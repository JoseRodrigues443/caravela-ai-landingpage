import { useLanguage } from "../context/LanguageContext";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-60 left-10 w-72 h-72 bg-caravela-teal/10 dark:bg-caravela-teal/20 rounded-full filter blur-3xl opacity-70"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-caravela-blue/10 dark:bg-caravela-blue/20 rounded-full filter blur-3xl opacity-70"></div>
      </div>
      
      <div className="container relative z-10 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          <div className="flex flex-col space-y-8 text-center lg:text-left">
            <div>
              <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wide text-caravela-teal bg-caravela-teal/10 rounded-full mb-4 opacity-0 animate-fadeIn">
                COMING SOON
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight opacity-0 animate-fadeInDelay1">
                <span className="text-gradient">{t.hero.title}</span>
              </h1>
              <p className="mt-6 text-xl text-muted-foreground opacity-0 animate-fadeInDelay2">
                {t.hero.subtitle}
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center lg:justify-start opacity-0 animate-fadeInDelay3">
              <Button 
                size="lg" 
                className="bg-caravela-teal hover:bg-caravela-teal-dark text-white py-6 text-lg group transition-all duration-300 hover:shadow-lg"
                onClick={() => {
                  const el = document.getElementById('newsletter');
                  if (el) {
                    el.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                {t.hero.cta}
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
          
          <div className="relative opacity-0 animate-fadeInDelay2">
            <div className="relative mx-auto w-full max-w-lg">
              {/* Terminal-like UI mockup */}
              <div className="glass border border-white/20 dark:border-white/10 rounded-xl shadow-2xl overflow-hidden animate-float">
                <div className="bg-slate-800 dark:bg-slate-900 px-4 py-2 flex items-center">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="mx-auto text-xs text-white/80 font-mono">
                    caravela-ai ~ main
                  </div>
                </div>
                <div className="bg-slate-900/90 dark:bg-black/80 p-4 h-64 font-mono text-xs text-green-500">
                  <p className="mb-2">$ caravela summary</p>
                  <p className="text-white/70">Fetching your workspace data...</p>
                  <p className="text-white/70 mt-2">Connecting to your integrations:</p>
                  <p className="text-white/70 mt-1">✓ Slack</p>
                  <p className="text-white/70">✓ GitHub</p>
                  <p className="text-white/70">✓ Jira</p>
                  <p className="text-white/70">✓ Google Calendar</p>
                  <p className="text-white/70 mt-2">Today's Summary:</p>
                  <p className="text-white/70">- 3 pull requests awaiting your review</p>
                  <p className="text-white/70">- 2 high priority Jira tasks due today</p>
                  <p className="text-white/70">- Meeting with Product team at 2:00 PM</p>
                  <p className="text-white/70">- 5 unread messages from the Dev channel</p>
                  <p className="mt-4 animate-pulse">_</p>
                </div>
              </div>
              
              {/* Desktop UI mockup overlay */}
              <div className="absolute -right-20 -bottom-14 glass border border-white/20 dark:border-white/10 rounded-xl shadow-2xl w-72 h-56 opacity-90 z-20 animate-float" style={{ animationDelay: "1s" }}>
                <div className="bg-white/90 dark:bg-slate-800/90 h-6 rounded-t-xl flex items-center px-3">
                  <div className="flex space-x-1.5">
                    <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  </div>
                </div>
                <div className="p-3 h-full">
                  <div className="text-xs font-semibold mb-2 text-caravela-teal">Workflow Automation</div>
                  <div className="bg-slate-100 dark:bg-slate-700/50 p-2 rounded-md mb-2">
                    <div className="text-xs">When: New GitHub PR</div>
                    <div className="text-xs text-muted-foreground">Then: Create Jira task</div>
                  </div>
                  <div className="bg-slate-100 dark:bg-slate-700/50 p-2 rounded-md">
                    <div className="text-xs">When: Calendar event created</div>
                    <div className="text-xs text-muted-foreground">Then: Notify Slack channel</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
