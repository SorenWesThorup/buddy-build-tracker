import { useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Lock } from 'lucide-react';

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const { user, isLoading, signInAnonymously } = useAuth();

  useEffect(() => {
    // Auto sign-in anonymously for this demo app
    if (!isLoading && !user) {
      signInAnonymously().catch(console.error);
    }
  }, [isLoading, user, signInAnonymously]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-hero flex items-center justify-center">
        <div className="text-center space-y-4">
          <Shield className="h-12 w-12 text-primary animate-pulse mx-auto" />
          <div className="text-lg">Indlæser...</div>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-hero flex items-center justify-center p-4">
        <Card className="w-full max-w-md bg-gradient-card border-primary/20 shadow-elegant">
          <CardHeader className="text-center">
            <Lock className="h-12 w-12 text-primary mx-auto mb-4" />
            <CardTitle className="text-2xl bg-gradient-primary bg-clip-text text-transparent">
              Adgang Påkrævet
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <p className="text-muted-foreground">
              Denne app indeholder følsomme forretningsdata om PC komponenter og priser. 
              Klik for at få adgang.
            </p>
            <Button 
              onClick={signInAnonymously}
              className="w-full bg-gradient-primary shadow-glow hover:shadow-elegant"
            >
              <Shield className="mr-2 h-4 w-4" />
              Få Adgang
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return <>{children}</>;
};