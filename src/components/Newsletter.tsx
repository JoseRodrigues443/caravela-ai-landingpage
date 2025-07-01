import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { Mail, SendHorizontal } from "lucide-react";

export default function Newsletter() {
  const { t } = useLanguage();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !email.includes("@")) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("https://formspree.io/f/xblywvwl", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        toast({
          title: t.newsletter.success,
          description: t.newsletter.successDescription,
        });
        setEmail("");
      } else {
        toast({
          title: "Error",
          description: t.newsletter.subscriptionFailed,
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: t.newsletter.networkError,
        description: t.newsletter.tryAgainLater,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="newsletter"
      className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-caravela-teal/10 dark:bg-caravela-teal/20 rounded-full filter blur-3xl opacity-60"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto glass rounded-2xl p-8 sm:p-12 shadow-lg border border-white/20 dark:border-white/10">
          <div className="flex flex-col md:flex-row md:items-center gap-8">
            <div className="flex-1 reveal opacity-0">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-caravela-teal/20 mb-6">
                <Mail className="h-8 w-8 text-caravela-teal" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gradient">
                {t.newsletter.title}
              </h2>
              <p className="text-muted-foreground">
                {t.newsletter.description}
              </p>
            </div>

            <div className="flex-1 reveal opacity-0">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex flex-col space-y-2">
                  <Input
                    type="email"
                    placeholder={t.newsletter.placeholder}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full py-6 bg-background/50 border-white/20 dark:border-white/10"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full py-6 bg-caravela-teal hover:bg-caravela-teal-dark text-white"
                >
                  {loading ? (
                    <span className="flex items-center">
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Processing...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      {t.newsletter.button}
                      <SendHorizontal className="ml-2 h-5 w-5" />
                    </span>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
