
import { useLanguage } from "../context/LanguageContext";
import { Layers, MessageSquare, Bell, Zap } from "lucide-react";

export default function Features() {
  const { t } = useLanguage();

  const features = [
    {
      icon: <Layers className="w-10 h-10 text-caravela-teal" />,
      title: t.features.aggregateTitle,
      description: t.features.aggregateDesc,
      delay: 'animate-fadeInDelay1'
    },
    {
      icon: <MessageSquare className="w-10 h-10 text-caravela-teal" />,
      title: t.features.summarizeTitle,
      description: t.features.summarizeDesc,
      delay: 'animate-fadeInDelay2'
    },
    {
      icon: <Bell className="w-10 h-10 text-caravela-teal" />,
      title: t.features.notifyTitle,
      description: t.features.notifyDesc,
      delay: 'animate-fadeInDelay1'
    },
    {
      icon: <Zap className="w-10 h-10 text-caravela-teal" />,
      title: t.features.automateTitle,
      description: t.features.automateDesc,
      delay: 'animate-fadeInDelay2'
    },
  ];

  return (
    <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -top-10 -right-10 w-64 h-64 bg-caravela-teal/10 dark:bg-caravela-teal/20 rounded-full filter blur-3xl opacity-70"></div>
        <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-caravela-blue/10 dark:bg-caravela-blue/20 rounded-full filter blur-3xl opacity-70"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16 reveal opacity-0">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gradient">{t.features.title}</h2>
          <div className="w-20 h-1 bg-caravela-teal mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`reveal opacity-0 glass rounded-xl p-6 transition-all duration-300 card-hover`}
            >
              <div className="mb-4 p-3 bg-caravela-teal/10 dark:bg-caravela-teal/20 inline-block rounded-lg">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
