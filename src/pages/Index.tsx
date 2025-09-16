import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TrendingDown, TrendingUp, Cpu, HardDrive, Zap, Wifi, Home, Gamepad2, Monitor } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
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
                <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">PC Bygge Dashboard</h1>
                <p className="text-muted-foreground text-sm">Gaming PC til Minecraft & Fortnite</p>
              </div>
            </div>
            <Link to="/">
              <Button variant="outline" className="border-primary/50 hover:bg-primary/10">
                <Home className="mr-2 h-4 w-4" />
                Tilbage til forsiden
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Tabs defaultValue="dashboard" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 bg-gradient-card border border-primary/20">
            <TabsTrigger value="dashboard" className="data-[state=active]:bg-gradient-primary data-[state=active]:text-primary-foreground">Dashboard</TabsTrigger>
            <TabsTrigger value="components" className="data-[state=active]:bg-gradient-primary data-[state=active]:text-primary-foreground">Komponenter</TabsTrigger>
            <TabsTrigger value="guides" className="data-[state=active]:bg-gradient-primary data-[state=active]:text-primary-foreground">Byggevejledning</TabsTrigger>
            <TabsTrigger value="gallery" className="data-[state=active]:bg-gradient-primary data-[state=active]:text-primary-foreground">Vores Byg</TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <Card className="bg-gradient-card border-primary/20 shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-105">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Samlet Budget</CardTitle>
                  <Zap className="h-4 w-4 text-primary animate-pulse" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">4.500 DKK</div>
                  <p className="text-xs text-muted-foreground">
                    <span className="text-green-600 font-semibold">-433 DKK</span> under budget
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card border-primary/20 shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-105">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Aktuelle Priser</CardTitle>
                  <TrendingDown className="h-4 w-4 text-green-600 animate-bounce" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-green-600">4.067 DKK</div>
                  <p className="text-xs text-muted-foreground">
                    2 komponenter på tilbud
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card border-primary/20 shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-105">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Pris Alerts</CardTitle>
                  <TrendingUp className="h-4 w-4 text-accent animate-pulse" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-accent">1</div>
                  <p className="text-xs text-muted-foreground">
                    Komponent under target pris
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card border-primary/20 shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-105">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Komponenter</CardTitle>
                  <Cpu className="h-4 w-4 text-primary animate-pulse" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">8</div>
                  <p className="text-xs text-muted-foreground">
                    Nødvendige komponenter
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-gradient-card border-primary/20 shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Gamepad2 className="h-5 w-5 text-primary" />
                  <span>Seneste Pris Updates</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 rounded-lg border border-primary/20 bg-gradient-card hover:shadow-glow transition-all duration-300">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 rounded-full bg-gradient-primary">
                        <Cpu className="h-5 w-5 text-primary-foreground" />
                      </div>
                      <div>
                        <p className="font-medium">Ryzen 5 5600G</p>
                        <p className="text-sm text-muted-foreground">Elgiganten</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-primary">980 DKK</p>
                      <Badge variant="secondary" className="animate-pulse">På target</Badge>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 rounded-lg border border-primary/20 bg-gradient-card hover:shadow-glow transition-all duration-300">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 rounded-full bg-gradient-primary">
                        <HardDrive className="h-5 w-5 text-primary-foreground" />
                      </div>
                      <div>
                        <p className="font-medium">Gigabyte B550M DS3H</p>
                        <p className="text-sm text-muted-foreground">Proshop</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-green-600">687 DKK</p>
                      <Badge className="bg-green-600 animate-pulse-glow">-163 DKK</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="components">
            <Card className="bg-gradient-card border-primary/20 shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Cpu className="h-5 w-5 text-primary" />
                  <span>Komponenter & Priser</span>
                </CardTitle>
                <p className="text-muted-foreground">Administrer komponenter og modtag pris alerts</p>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-4 animate-pulse-glow">
                    <Cpu className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Komponent administration kommer snart...
                  </p>
                  <Badge className="bg-gradient-primary">Kommer snart</Badge>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="guides">
            <Card className="bg-gradient-card border-primary/20 shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Monitor className="h-5 w-5 text-primary" />
                  <span>Byggevejledning</span>
                </CardTitle>
                <p className="text-muted-foreground">Step-by-step guide til at bygge din gaming PC</p>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-4 animate-pulse-glow">
                    <Monitor className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Byggevejledning kommer når vi har alle komponenterne...
                  </p>
                  <Badge className="bg-gradient-primary">Venter på komponenter</Badge>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="gallery">
            <Card className="bg-gradient-card border-primary/20 shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Gamepad2 className="h-5 w-5 text-primary" />
                  <span>Vores Gaming PC Byg</span>
                </CardTitle>
                <p className="text-muted-foreground">Billeder og oplevelser fra vores RGB fishtank gaming setup</p>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-4 animate-pulse-glow">
                    <Gamepad2 className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <p className="text-muted-foreground mb-4">
                    RGB fishtank gaming galleri kommer når byggeriet går i gang...
                  </p>
                  <Badge className="bg-gradient-primary">Venter på byggestart</Badge>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Index;
