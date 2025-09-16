import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Gamepad2, Monitor, Zap, Eye, Star, Target } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-hero relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{animationDelay: "2s"}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary-glow/5 rounded-full blur-3xl animate-glow"></div>
      </div>

      {/* Header */}
      <header className="border-b border-primary/20 backdrop-blur-sm bg-background/80">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Gamepad2 className="h-8 w-8 text-primary animate-pulse-glow" />
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-lg animate-pulse"></div>
              </div>
              <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Gaming PC Builder
              </h1>
            </div>
            <Link to="/dashboard">
              <Button className="bg-gradient-primary shadow-glow hover:shadow-elegant transition-all duration-300">
                Gå til Dashboard
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-16">
        <div className="text-center space-y-8 mb-16">
          <div className="space-y-4">
            <Badge className="bg-gradient-primary text-primary-foreground shadow-glow animate-pulse-glow">
              🎮 Minecraft & Fortnite Ready
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Byg Din Ultimate{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent animate-glow">
                Gamer PC
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Følg med i vores rejse hvor vi bygger en fed gamer PC til Minecraft og Fortnite. 
              Med RGB LED blæsere og et gennemsigtigt fishtank kabinet der lyser op som en ægte gaming-rig!
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/dashboard">
              <Button size="lg" className="bg-gradient-primary shadow-glow hover:shadow-elegant transition-all duration-300 transform hover:scale-105">
                <Monitor className="mr-2 h-5 w-5" />
                Se Priser & Progress
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="border-primary/50 hover:bg-primary/10 transition-all duration-300">
              <Eye className="mr-2 h-5 w-5" />
              Følg Byggeriet
            </Button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="bg-gradient-card border-primary/20 shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-105 group">
            <CardHeader className="text-center">
              <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-4 group-hover:animate-pulse-glow">
                <Gamepad2 className="h-8 w-8 text-primary-foreground" />
              </div>
              <CardTitle className="text-primary">Gaming Performance</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <p className="text-muted-foreground">
                Optimeret til Minecraft og Fortnite med høj FPS og smooth gameplay
              </p>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Minecraft</span>
                  <Badge variant="secondary">120+ FPS</Badge>
                </div>
                <div className="flex justify-between">
                  <span>Fortnite</span>
                  <Badge variant="secondary">90+ FPS</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-primary/20 shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-105 group">
            <CardHeader className="text-center">
              <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-4 group-hover:animate-pulse-glow">
                <Eye className="h-8 w-8 text-primary-foreground" />
              </div>
              <CardTitle className="text-primary">RGB Fishtank Setup</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <p className="text-muted-foreground">
                Gennemsigtigt kabinet med RGB LED blæsere for det ultimate gaming look
              </p>
              <div className="space-y-2">
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" style={{animationDelay: "0.5s"}}></div>
                  <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse" style={{animationDelay: "1s"}}></div>
                  <span className="text-sm">RGB Effekter</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-primary/20 shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-105 group">
            <CardHeader className="text-center">
              <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-4 group-hover:animate-pulse-glow">
                <Target className="h-8 w-8 text-primary-foreground" />
              </div>
              <CardTitle className="text-primary">Smart Pris Tracking</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <p className="text-muted-foreground">
                AI-drevet prisovervågning finder de bedste tilbud på alle komponenter
              </p>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Budget</span>
                  <Badge className="bg-green-600">4.500 DKK</Badge>
                </div>
                <div className="flex justify-between">
                  <span>Aktuel pris</span>
                  <Badge variant="secondary">4.067 DKK</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center space-y-6">
          <div className="bg-gradient-card border border-primary/20 rounded-2xl p-8 shadow-elegant">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Star className="h-6 w-6 text-yellow-500 animate-pulse" />
              <h2 className="text-2xl font-bold">Følg Vores Gaming Journey</h2>
              <Star className="h-6 w-6 text-yellow-500 animate-pulse" />
            </div>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Fra komponent-shopping til det færdige gaming setup. Vi dokumenterer hele processen, 
              deler tips og tricks, og viser hvordan man bygger en fed gaming PC på budget.
            </p>
            <div className="grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
              <div className="text-center space-y-2">
                <div className="text-3xl font-bold text-primary">8</div>
                <div className="text-sm text-muted-foreground">Komponenter</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-3xl font-bold text-primary">4.500</div>
                <div className="text-sm text-muted-foreground">DKK Budget</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-3xl font-bold text-primary">∞</div>
                <div className="text-sm text-muted-foreground">Gaming Fun</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;