
import { createContext, useContext, useState } from "react";

type Language = "en" | "pt";

// English translations
const en = {
  nav: {
    home: "Home",
    features: "Features",
    integrations: "Integrations",
    about: "About"
  },
  hero: {
    title: "Organize Your Work, Amplify Your Productivity",
    subtitle: "Caravela AI connects all your tools in one place, summarizes your tasks, and helps you navigate your workflow effortlessly.",
    cta: "Get Early Access"
  },
  features: {
    title: "Why Choose Caravela AI",
    aggregateTitle: "Data Aggregation",
    aggregateDesc: "Connect all your work platforms in one centralized hub.",
    summarizeTitle: "Smart Summarization",
    summarizeDesc: "AI-powered summaries of what needs your attention.",
    notifyTitle: "Intelligent Notifications",
    notifyDesc: "Get alerted about missing work and upcoming deadlines.",
    automateTitle: "Workflow Automation",
    automateDesc: "Create and automate workflows across your integrated tools."
  },
  integrations: {
    title: "Seamless Integrations",
    description: "Caravela AI connects with all your essential work tools."
  },
  newsletter: {
    title: "Stay Updated",
    description: "Be the first to know when Caravela AI launches. Get early access and exclusive offers.",
    placeholder: "Your email address",
    button: "Subscribe",
    success: "Thank you for subscribing!",
    error: "Something went wrong. Please try again."
  },
  footer: {
    copyright: "© 2025 Caravela AI. All rights reserved.",
    privacy: "Privacy Policy",
    terms: "Terms of Service"
  }
};

// Portuguese translations
const pt = {
  nav: {
    home: "Início",
    features: "Funcionalidades",
    integrations: "Integrações",
    about: "Sobre Nós"
  },
  hero: {
    title: "Organize o Seu Trabalho, Aumente a Sua Produtividade",
    subtitle: "A Caravela AI liga todas as suas ferramentas num só local, resume as suas tarefas e ajuda-o a navegar no seu fluxo de trabalho sem esforço.",
    cta: "Obter Acesso Antecipado"
  },
  features: {
    title: "Porquê Escolher a Caravela AI",
    aggregateTitle: "Agregação de Dados",
    aggregateDesc: "Ligue todas as suas plataformas de trabalho num centro centralizado.",
    summarizeTitle: "Resumos Inteligentes",
    summarizeDesc: "Resumos potenciados por IA daquilo que necessita da sua atenção.",
    notifyTitle: "Notificações Inteligentes",
    notifyDesc: "Seja alertado sobre trabalhos em falta e prazos próximos.",
    automateTitle: "Automatização de Fluxos de Trabalho",
    automateDesc: "Crie e automatize fluxos de trabalho através das suas ferramentas integradas."
  },
  integrations: {
    title: "Integrações Perfeitas",
    description: "A Caravela AI liga-se a todas as suas ferramentas de trabalho essenciais."
  },
  newsletter: {
    title: "Mantenha-se Atualizado",
    description: "Seja o primeiro a saber quando a Caravela AI for lançada. Obtenha acesso antecipado e ofertas exclusivas.",
    placeholder: "O seu endereço de email",
    button: "Subscrever",
    success: "Obrigado pela sua subscrição!",
    error: "Algo correu mal. Por favor, tente novamente."
  },
  footer: {
    copyright: "© 2023 Caravela AI. Todos os direitos reservados.",
    privacy: "Política de Privacidade",
    terms: "Termos de Utilização"
  }
};

const translations = { en, pt };

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof en;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    const savedLang = localStorage.getItem("language");
    return (savedLang === "en" || savedLang === "pt") ? savedLang as Language : "en";
  });

  const toggleLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage: toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
