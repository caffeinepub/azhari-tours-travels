import { useState } from 'react';
import { usePwaInstallPrompt } from '../hooks/usePwaInstallPrompt';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { X, Download, Share } from 'lucide-react';

export function PwaInstallPrompt() {
  const { isInstallable, isIos, isStandalone, promptInstall, dismissPrompt } = usePwaInstallPrompt();
  const [isDismissed, setIsDismissed] = useState(false);

  // Don't show if already installed, not installable, or user dismissed
  if (isStandalone || !isInstallable || isDismissed) {
    return null;
  }

  const handleDismiss = () => {
    setIsDismissed(true);
    dismissPrompt();
  };

  const handleInstall = async () => {
    if (!isIos) {
      await promptInstall();
    }
  };

  return (
    <Card className="relative mb-6 border-primary/20 bg-primary/5">
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-2 top-2 h-6 w-6"
        onClick={handleDismiss}
        aria-label="Dismiss install prompt"
      >
        <X className="h-4 w-4" />
      </Button>

      <CardHeader className="pb-3">
        <CardTitle className="text-lg flex items-center gap-2">
          <Download className="h-5 w-5 text-primary" />
          Install App
        </CardTitle>
        <CardDescription>
          {isIos
            ? 'Add Azhari Tours to your home screen for quick access'
            : 'Install Azhari Tours for a better mobile experience'}
        </CardDescription>
      </CardHeader>

      <CardContent>
        {isIos ? (
          <div className="space-y-3 text-sm">
            <p className="font-medium">To install on iOS:</p>
            <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="mt-0.5">1.</span>
                <span>
                  Tap the <Share className="inline h-4 w-4 mx-1" /> Share button at the bottom of Safari
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5">2.</span>
                <span>Scroll down and tap "Add to Home Screen"</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5">3.</span>
                <span>Tap "Add" to confirm</span>
              </li>
            </ol>
          </div>
        ) : (
          <Button onClick={handleInstall} className="w-full" size="lg">
            <Download className="mr-2 h-4 w-4" />
            Install Now
          </Button>
        )}
      </CardContent>
    </Card>
  );
}
