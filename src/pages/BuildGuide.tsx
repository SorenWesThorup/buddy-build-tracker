import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, AlertCircle, Wrench, Zap, Monitor, Home } from "lucide-react";
import { Link } from "react-router-dom";

const BuildGuide = () => {
  const buildSteps = [
    {
      step: 1,
      title: "Forbered arbejdsområdet",
      description: "Find et rent, statisk-sikkert arbejdsområde med god belysning",
      tips: ["Brug anti-statisk armbånd", "Hold alle skruer organiseret", "Læs manualer først"],
      difficulty: "Nem"
    },
    {
      step: 2,
      title: "Installer PSU (Power Supply)",
      description: "Monter strømforsyningen i kabinet med viften vendende nedad",
      tips: ["Sørg for at PSU switch er slukket", "Brug de medfølgende skruer", "Tjek at kabinet understøtter PSU størrelse"],
      difficulty: "Nem"
    },
    {
      step: 3,
      title: "Installer moderkort I/O shield",
      description: "Indsæt det metalskjold der følger med moderkortet i kabinettets bagpanel",
      tips: ["Tryk det helt i hjørnerne", "Pas på skarpe kanter", "Sørg for det sidder lige"],
      difficulty: "Nem"
    },
    {
      step: 4,
      title: "Forbered moderkortet",
      description: "Installer CPU, RAM og M.2 SSD på moderkortet før det monteres",
      tips: ["CPU skal sidde helt let i soklen", "RAM skal klikke på plads", "M.2 SSD skrues fast med lille skrue"],
      difficulty: "Mellem"
    },
    {
      step: 5,
      title: "Installer CPU køler",
      description: "Monter CPU-køleren på moderkortet efter fabrikantens instruktioner",
      tips: ["Fjern plastik fra kølerens bund", "Brug termisk pasta hvis ikke forudpåsat", "Sørg for jævnt tryk"],
      difficulty: "Mellem"
    },
    {
      step: 6,
      title: "Installer moderkort i kabinet",
      description: "Skru moderkortet fast på standoffs i kabinetet",
      tips: ["Brug alle monteringspunkter", "Stram ikke skruerne for meget", "Tjek at I/O porte passer til skjoldet"],
      difficulty: "Mellem"
    },
    {
      step: 7,
      title: "Installer grafikkort",
      description: "Indsæt grafikkortet i den øverste PCIe x16 slot og skru det fast",
      tips: ["Fjern relevante slot-covers fra kabinet", "Tryk kortet helt ned", "Sørg for PCIe klemme klikker på plads"],
      difficulty: "Nem"
    },
    {
      step: 8,
      title: "Tilslut kabler",
      description: "Forbind alle strøm- og datakabler til komponenter",
      tips: ["24-pin til moderkort", "8-pin CPU strøm", "PCIe strøm til grafikkort", "SATA til lagerenheder"],
      difficulty: "Svær"
    },
    {
      step: 9,
      title: "Tilslut front panel kabler",
      description: "Forbind power button, LED'er og USB fra kabinettets front panel",
      tips: ["Følg moderkortet manual nøje", "Positive og negative ben er vigtige", "Test power button virker"],
      difficulty: "Svær"
    },
    {
      step: 10,
      title: "Sidste tjek og test",
      description: "Dobbelttjek alle forbindelser og start computeren for første gang",
      tips: ["Tjek alle kabler sidder fast", "Sørg for RAM er helt inde", "Start op i BIOS først"],
      difficulty: "Mellem"
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Nem": return "bg-green-500/10 text-green-600 border-green-500/20";
      case "Mellem": return "bg-yellow-500/10 text-yellow-600 border-yellow-500/20";
      case "Svær": return "bg-red-500/10 text-red-600 border-red-500/20";
      default: return "bg-gray-500/10 text-gray-600 border-gray-500/20";
    }
  };

  const getDifficultyIcon = (difficulty: string) => {
    switch (difficulty) {
      case "Nem": return <CheckCircle className="w-4 h-4" />;
      case "Mellem": return <Wrench className="w-4 h-4" />;
      case "Svær": return <Zap className="w-4 h-4" />;
      default: return <AlertCircle className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-hero relative">
      {/* Animated background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-32 left-20 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-float" style={{animationDelay: "3s"}}></div>
      </div>

      <header className="border-b border-primary/20 backdrop-blur-sm bg-background/80">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Monitor className="h-8 w-8 text-primary animate-pulse-glow" />
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-lg animate-pulse"></div>
              </div>
              <div>
                <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">PC Byggevejledning</h1>
                <p className="text-muted-foreground text-sm">Trin for trin guide til dit gaming setup</p>
              </div>
            </div>
            <Link to="/dashboard">
              <Button variant="outline" className="border-primary/50 hover:bg-primary/10">
                <Home className="mr-2 h-4 w-4" />
                Tilbage til Dashboard
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent mb-4">
              PC Byggevejledning
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Følg denne trin-for-trin guide for at bygge din første gaming PC sikkert og korrekt
            </p>
          </div>

          <div className="grid gap-6">
            {buildSteps.map((step) => (
              <Card key={step.step} className="overflow-hidden border border-border/50 hover:border-border transition-colors">
                <CardHeader className="bg-muted/30">
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                        {step.step}
                      </div>
                      {step.title}
                    </CardTitle>
                    <Badge variant="outline" className={getDifficultyColor(step.difficulty)}>
                      {getDifficultyIcon(step.difficulty)}
                      {step.difficulty}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="text-muted-foreground mb-4 text-lg">
                    {step.description}
                  </p>
                  <div className="space-y-2">
                    <h4 className="font-medium text-sm uppercase tracking-wide text-muted-foreground">
                      Vigtige tips:
                    </h4>
                    <ul className="space-y-1">
                      {step.tips.map((tip, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mt-8 border-primary/20 bg-primary/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-primary" />
                Sikkerhedstips
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-muted-foreground">
                • Sluk altid for strømmen og tag stikket ud før du arbejder på computeren
              </p>
              <p className="text-sm text-muted-foreground">
                • Brug anti-statisk armbånd for at beskytte elektroniske komponenter
              </p>
              <p className="text-sm text-muted-foreground">
                • Vær forsigtig med skruer - overtramning kan ødelægge gevind
              </p>
              <p className="text-sm text-muted-foreground">
                • Tag billeder af kabelforbindelser før du fjerner dem
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default BuildGuide;