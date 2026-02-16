import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AlertCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

export function TroubleshootingPanel() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Card className="mt-6 border-warning/50 bg-warning/5">
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CardHeader className="pb-3">
          <CollapsibleTrigger asChild>
            <Button
              variant="ghost"
              className="w-full justify-between p-0 hover:bg-transparent"
            >
              <div className="flex items-start gap-3 text-left">
                <AlertCircle className="h-5 w-5 text-warning shrink-0 mt-0.5" />
                <div>
                  <CardTitle className="text-base">Having Trouble Opening the App?</CardTitle>
                  <CardDescription className="mt-1">
                    Tap to see troubleshooting steps
                  </CardDescription>
                </div>
              </div>
              {isOpen ? (
                <ChevronUp className="h-5 w-5 shrink-0" />
              ) : (
                <ChevronDown className="h-5 w-5 shrink-0" />
              )}
            </Button>
          </CollapsibleTrigger>
        </CardHeader>
        <CollapsibleContent>
          <CardContent className="pt-0 space-y-4">
            <div className="rounded-lg bg-background p-4 border border-border">
              <p className="font-semibold text-sm mb-2">
                Error: "Canister ID Not Resolved (Error 400)"
              </p>
              <p className="text-sm text-muted-foreground">
                This error means your device cannot reach the app's server. Follow the steps below to fix it.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex gap-3">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-semibold">
                  1
                </div>
                <div>
                  <p className="font-medium text-sm">Use the exact link from above</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Copy the link from the "Share This App" section and paste it in your browser.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-semibold">
                  2
                </div>
                <div>
                  <p className="font-medium text-sm">Try a different browser</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Open the link in Chrome, Safari, or Firefox instead.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-semibold">
                  3
                </div>
                <div>
                  <p className="font-medium text-sm">Switch your internet connection</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Try mobile data instead of Wi-Fi, or vice versa.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-semibold">
                  4
                </div>
                <div>
                  <p className="font-medium text-sm">Turn off VPN</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    If you're using a VPN, disable it and try again.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-semibold">
                  5
                </div>
                <div>
                  <p className="font-medium text-sm">Clear browser cache</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Clear your browser's cache and cookies, then try opening the link again.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-lg bg-muted p-3 mt-4">
              <p className="text-xs text-muted-foreground">
                <strong>Still having issues?</strong> Contact us via WhatsApp or phone (see contact details above).
              </p>
            </div>
          </CardContent>
        </CollapsibleContent>
      </Collapsible>
    </Card>
  );
}
