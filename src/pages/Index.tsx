import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TrendingDown, TrendingUp, Cpu, HardDrive, Zap, Wifi, Home, Gamepad2, Monitor, ExternalLink, MemoryStick, HardDriveIcon, PcCase, Router } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Link } from "react-router-dom";
import { useComponents } from "@/hooks/useComponents";

const Index = () => {
  const { components, isLoading, error } = useComponents();

  const totalCurrent = components.reduce((sum, comp) => sum + (comp.total_dkk || 0), 0);
  const totalTarget = components.reduce((sum, comp) => sum + (comp.target_dkk || 0), 0);
  const savings = totalTarget - totalCurrent;
  const alertComponents = components.filter(comp => comp.alert);

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
          <TabsList className="grid w-full grid-cols-4 bg-gradient-card border border-primary/20 rounded-lg p-1">
            <TabsTrigger value="dashboard" className="data-[state=active]:bg-gradient-primary data-[state=active]:text-primary-foreground">Dashboard</TabsTrigger>
            <TabsTrigger value="components" className="data-[state=active]:bg-gradient-primary data-[state=active]:text-primary-foreground">Komponenter</TabsTrigger>
            <Link to="/byggevejledning" className="flex items-center justify-center h-10 px-3 py-2 text-sm font-medium transition-all hover:bg-primary/10 rounded-md">
              Byggevejledning
            </Link>
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
                   <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">{totalTarget.toLocaleString()} DKK</div>
                   <p className="text-xs text-muted-foreground">
                     <span className="text-green-600 font-semibold">{savings > 0 ? `-${savings.toLocaleString()}` : `+${Math.abs(savings).toLocaleString()}`} DKK</span> {savings > 0 ? 'under budget' : 'over budget'}
                   </p>
                 </CardContent>
              </Card>

              <Card className="bg-gradient-card border-primary/20 shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-105">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Aktuelle Priser</CardTitle>
                  <TrendingDown className="h-4 w-4 text-green-600 animate-bounce" />
                </CardHeader>
                 <CardContent>
                   <div className="text-2xl font-bold text-green-600">{totalCurrent.toLocaleString()} DKK</div>
                   <p className="text-xs text-muted-foreground">
                     {alertComponents.length} komponenter på tilbud
                   </p>
                 </CardContent>
              </Card>

              <Card className="bg-gradient-card border-primary/20 shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-105">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Pris Alerts</CardTitle>
                  <TrendingUp className="h-4 w-4 text-accent animate-pulse" />
                </CardHeader>
                 <CardContent>
                   <div className="text-2xl font-bold text-accent">{alertComponents.length}</div>
                   <p className="text-xs text-muted-foreground">
                     Komponenter under target pris
                   </p>
                 </CardContent>
              </Card>

              <Card className="bg-gradient-card border-primary/20 shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-105">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Komponenter</CardTitle>
                  <Cpu className="h-4 w-4 text-primary animate-pulse" />
                </CardHeader>
                 <CardContent>
                   <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">{components.length}</div>
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
                 {isLoading ? (
                    <div className="text-center py-8">
                      <div className="animate-pulse">Indlæser prisdata...</div>
                    </div>
                  ) : error ? (
                    <div className="text-center py-8">
                      <div className="text-red-500">Fejl: {error}</div>
                    </div>
                  ) : (
                   <div className="space-y-4">
                      {components.slice(0, 4).map((comp, index) => {
                        const getIcon = (component) => {
                          if (component?.includes('CPU')) return Cpu;
                          if (component?.includes('Motherboard')) return Monitor;
                          if (component?.includes('RAM')) return HardDrive;
                          if (component?.includes('SSD')) return HardDrive;
                          if (component?.includes('PSU')) return Zap;
                          if (component?.includes('Case')) return Monitor;
                          if (component?.includes('Wi-Fi')) return Wifi;
                          return Cpu;
                        };
                        
                        const IconComponent = getIcon(comp.component);
                        const isUnderTarget = (comp.vs_target_dkk || 0) < 0;
                       
                       return (
                         <div key={index} className="flex items-center justify-between p-4 rounded-lg border border-primary/20 bg-gradient-card hover:shadow-glow transition-all duration-300 group">
                           <div className="flex items-center space-x-3">
                             <div className="p-2 rounded-full bg-gradient-primary">
                               <IconComponent className="h-5 w-5 text-primary-foreground" />
                             </div>
                              <div className="flex-1">
                                <p className="font-medium">{comp.model}</p>
                                <p className="text-sm text-muted-foreground flex items-center">
                                  {comp.store}
                                  {comp.url && (
                                    <a href={comp.url} target="_blank" rel="noopener noreferrer" className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                      <ExternalLink className="h-3 w-3" />
                                    </a>
                                  )}
                                </p>
                              </div>
                            </div>
                            <div className="text-right">
                              <p className={`font-bold ${isUnderTarget ? 'text-green-600' : 'text-primary'}`}>
                                {comp.total_dkk} DKK
                              </p>
                              {comp.alert ? (
                                <Badge className="bg-green-600 animate-pulse-glow">
                                  {comp.vs_target_dkk} DKK
                                </Badge>
                              ) : (
                                <Badge variant="secondary" className={isUnderTarget ? "text-green-600" : ""}>
                                  {(comp.vs_target_dkk || 0) > 0 ? '+' : ''}{comp.vs_target_dkk} DKK
                                </Badge>
                              )}
                           </div>
                         </div>
                       );
                     })}
                   </div>
                 )}
               </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="components">
            <div className="space-y-6">
              {/* Components Price Table */}
              <Card className="bg-gradient-card border-primary/20 shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Cpu className="h-5 w-5 text-primary" />
                    <span>Komponenter & Priser</span>
                  </CardTitle>
                  <p className="text-muted-foreground">Aktuelle priser på alle komponenter til gaming PC'en</p>
                </CardHeader>
                <CardContent>
                   {isLoading ? (
                     <div className="text-center py-8">
                       <div className="animate-pulse">Indlæser komponenter...</div>
                     </div>
                   ) : error ? (
                     <div className="text-center py-8">
                       <div className="text-red-500">Fejl: {error}</div>
                     </div>
                   ) : (
                    <div className="overflow-x-auto">
                      <Table>
                        <TableHeader>
                          <TableRow className="border-primary/20">
                            <TableHead className="text-primary">Komponent</TableHead>
                            <TableHead className="text-primary">Model</TableHead>
                            <TableHead className="text-primary">Butik</TableHead>
                            <TableHead className="text-primary text-right">Pris</TableHead>
                            <TableHead className="text-primary text-right">Fragt</TableHead>
                            <TableHead className="text-primary text-right">Total</TableHead>
                            <TableHead className="text-primary text-right">Target</TableHead>
                            <TableHead className="text-primary text-center">Status</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                           {components.map((comp, index) => {
                             const isUnderTarget = (comp.vs_target_dkk || 0) < 0;
                             const getIcon = (component) => {
                               if (component?.includes('CPU')) return Cpu;
                               if (component?.includes('Motherboard')) return Monitor;
                               if (component?.includes('RAM')) return MemoryStick;
                               if (component?.includes('SSD')) return HardDriveIcon;
                               if (component?.includes('PSU')) return Zap;
                               if (component?.includes('Case')) return PcCase;
                               if (component?.includes('Wi-Fi')) return Router;
                               return Cpu;
                             };
                             const IconComponent = getIcon(comp.component);
                            
                            return (
                              <TableRow key={index} className="border-primary/10 hover:bg-primary/5 transition-colors">
                                 <TableCell className="font-medium">
                                   <div className="flex items-center space-x-2">
                                     <IconComponent className="h-4 w-4 text-primary" />
                                     <span>{comp.component}</span>
                                   </div>
                                 </TableCell>
                                 <TableCell>
                                   <div className="flex items-center space-x-2">
                                     <span>{comp.model}</span>
                                     {comp.url && (
                                       <a href={comp.url} target="_blank" rel="noopener noreferrer" className="opacity-60 hover:opacity-100 transition-opacity">
                                         <ExternalLink className="h-3 w-3" />
                                       </a>
                                     )}
                                   </div>
                                 </TableCell>
                                 <TableCell className="text-muted-foreground">{comp.store}</TableCell>
                                 <TableCell className="text-right">{comp.price_dkk} DKK</TableCell>
                                 <TableCell className="text-right">{comp.shipping_dkk} DKK</TableCell>
                                 <TableCell className="text-right font-semibold">{comp.total_dkk} DKK</TableCell>
                                 <TableCell className="text-right text-muted-foreground">{comp.target_dkk} DKK</TableCell>
                                 <TableCell className="text-center">
                                   {comp.alert ? (
                                     <Badge className="bg-green-600 animate-pulse-glow">
                                       Tilbud! {comp.vs_target_dkk} DKK
                                     </Badge>
                                   ) : (
                                     <Badge variant={isUnderTarget ? "default" : "secondary"} className={isUnderTarget ? "text-green-600" : ""}>
                                       {(comp.vs_target_dkk || 0) > 0 ? '+' : ''}{comp.vs_target_dkk} DKK
                                     </Badge>
                                   )}
                                 </TableCell>
                              </TableRow>
                            );
                          })}
                        </TableBody>
                      </Table>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Component Overview */}
              <Card className="bg-gradient-card border-primary/20 shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Gamepad2 className="h-5 w-5 text-primary" />
                    <span>Komponent Oversigt</span>
                  </CardTitle>
                  <p className="text-muted-foreground">Hvad hver komponent gør for din gaming oplevelse</p>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {/* CPU */}
                    <div className="group p-6 rounded-lg border border-primary/20 bg-gradient-card hover:shadow-glow transition-all duration-300">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="p-3 rounded-full bg-gradient-primary">
                          <Cpu className="h-6 w-6 text-primary-foreground" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg">CPU/APU</h3>
                          <p className="text-sm text-muted-foreground">Ryzen 5 5600G</p>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Hjerten i din PC. Ryzen 5 5600G har integreret grafik, perfekt til Minecraft og let Fortnite gaming. 6 kerner sikrer smooth multitasking.
                      </p>
                    </div>

                    {/* Motherboard */}
                    <div className="group p-6 rounded-lg border border-primary/20 bg-gradient-card hover:shadow-glow transition-all duration-300">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="p-3 rounded-full bg-gradient-primary">
                          <Monitor className="h-6 w-6 text-primary-foreground" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg">Motherboard</h3>
                          <p className="text-sm text-muted-foreground">B550 mATX</p>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Forbinder alle komponenter. B550 chipset understøtter hurtige NVMe SSD'er og har HDMI output til dit display samt M.2 slot.
                      </p>
                    </div>

                    {/* RAM */}
                    <div className="group p-6 rounded-lg border border-primary/20 bg-gradient-card hover:shadow-glow transition-all duration-300">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="p-3 rounded-full bg-gradient-primary">
                          <MemoryStick className="h-6 w-6 text-primary-foreground" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg">RAM</h3>
                          <p className="text-sm text-muted-foreground">16GB DDR4-3200</p>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Systemets hukommelse. 16GB er rigeligt til gaming og multitasking. DDR4-3200 giver god hastighed til Ryzen processoren.
                      </p>
                    </div>

                    {/* SSD */}
                    <div className="group p-6 rounded-lg border border-primary/20 bg-gradient-card hover:shadow-glow transition-all duration-300">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="p-3 rounded-full bg-gradient-primary">
                          <HardDriveIcon className="h-6 w-6 text-primary-foreground" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg">SSD</h3>
                          <p className="text-sm text-muted-foreground">1TB NVMe</p>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Superfast lager. NVMe SSD sikrer lynhurtig bootning og loading af spil. 1TB er plads til Windows + mange spil.
                      </p>
                    </div>

                    {/* PSU */}
                    <div className="group p-6 rounded-lg border border-primary/20 bg-gradient-card hover:shadow-glow transition-all duration-300">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="p-3 rounded-full bg-gradient-primary">
                          <Zap className="h-6 w-6 text-primary-foreground" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg">PSU</h3>
                          <p className="text-sm text-muted-foreground">650W 80+ Gold</p>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Strømforsyning. 650W er rigeligt til dit system. 80+ Gold certificering betyder høj energieffektivitet og lavere strømregning.
                      </p>
                    </div>

                    {/* Case */}
                    <div className="group p-6 rounded-lg border border-primary/20 bg-gradient-card hover:shadow-glow transition-all duration-300">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="p-3 rounded-full bg-gradient-primary">
                          <PcCase className="h-6 w-6 text-primary-foreground" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg">Kabinet</h3>
                          <p className="text-sm text-muted-foreground">DUTZO Fishtank RGB</p>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Dit gaming showcase! Transparent fishtank design med ARGB LED blæsere skaber det ultimative gaming æstetik til dit setup.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
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
