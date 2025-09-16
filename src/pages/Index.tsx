import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TrendingDown, TrendingUp, Cpu, HardDrive, Zap, Wifi } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold">PC Bygge Pris Tracker</h1>
          <p className="text-muted-foreground mt-2">Hold øje med priserne på PC komponenter til dit drømme-byg</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Tabs defaultValue="dashboard" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            <TabsTrigger value="components">Komponenter</TabsTrigger>
            <TabsTrigger value="guides">Byggevejledning</TabsTrigger>
            <TabsTrigger value="gallery">Vores Byg</TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Samlet Budget</CardTitle>
                  <Zap className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">4.500 DKK</div>
                  <p className="text-xs text-muted-foreground">
                    <span className="text-green-600">-433 DKK</span> under budget
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Aktuelle Priser</CardTitle>
                  <TrendingDown className="h-4 w-4 text-green-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">4.067 DKK</div>
                  <p className="text-xs text-muted-foreground">
                    2 komponenter på tilbud
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Pris Alerts</CardTitle>
                  <TrendingUp className="h-4 w-4 text-orange-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">1</div>
                  <p className="text-xs text-muted-foreground">
                    Komponent under target pris
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Komponenter</CardTitle>
                  <Cpu className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">8</div>
                  <p className="text-xs text-muted-foreground">
                    Nødvendige komponenter
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Seneste Pris Updates</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 rounded-lg border">
                    <div className="flex items-center space-x-3">
                      <Cpu className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium">Ryzen 5 5600G</p>
                        <p className="text-sm text-muted-foreground">Elgiganten</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold">980 DKK</p>
                      <Badge variant="secondary">På target</Badge>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 rounded-lg border">
                    <div className="flex items-center space-x-3">
                      <HardDrive className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium">Gigabyte B550M DS3H</p>
                        <p className="text-sm text-muted-foreground">Proshop</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold">687 DKK</p>
                      <Badge variant="default" className="bg-green-600">-163 DKK</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="components">
            <Card>
              <CardHeader>
                <CardTitle>Komponenter & Priser</CardTitle>
                <p className="text-muted-foreground">Administrer komponenter og modtag pris alerts</p>
              </CardHeader>
              <CardContent>
                <p className="text-center text-muted-foreground py-8">
                  Komponent administration kommer snart...
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="guides">
            <Card>
              <CardHeader>
                <CardTitle>Byggevejledning</CardTitle>
                <p className="text-muted-foreground">Step-by-step guide til at bygge din PC</p>
              </CardHeader>
              <CardContent>
                <p className="text-center text-muted-foreground py-8">
                  Byggevejledning kommer når vi har alle komponenterne...
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="gallery">
            <Card>
              <CardHeader>
                <CardTitle>Vores PC Byg</CardTitle>
                <p className="text-muted-foreground">Billeder og oplevelser fra vores byggeproces</p>
              </CardHeader>
              <CardContent>
                <p className="text-center text-muted-foreground py-8">
                  Galleri kommer når byggeriet går i gang...
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Index;
