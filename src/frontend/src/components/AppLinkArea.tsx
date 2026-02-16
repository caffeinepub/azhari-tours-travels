import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Copy, Check } from 'lucide-react';
import { toast } from 'sonner';

export function AppLinkArea() {
  const [copied, setCopied] = useState(false);
  const appUrl = window.location.origin;

  const handleCopy = async () => {
    try {
      // Try modern clipboard API first
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(appUrl);
        setCopied(true);
        toast.success('Link copied to clipboard!');
        setTimeout(() => setCopied(false), 2000);
      } else {
        // Fallback: select text for manual copy
        const input = document.getElementById('app-link-input') as HTMLInputElement;
        if (input) {
          input.select();
          input.setSelectionRange(0, 99999); // For mobile devices
          toast.info('Link selected. Press Ctrl+C (or Cmd+C) to copy.');
        }
      }
    } catch (err) {
      // Fallback for any errors
      const input = document.getElementById('app-link-input') as HTMLInputElement;
      if (input) {
        input.select();
        input.setSelectionRange(0, 99999);
        toast.info('Link selected. Press Ctrl+C (or Cmd+C) to copy.');
      }
    }
  };

  return (
    <Card className="mt-6">
      <CardHeader>
        <CardTitle className="text-lg">Share This App</CardTitle>
        <CardDescription>
          Copy this link to share with others or open on another device
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex gap-2">
          <Input
            id="app-link-input"
            type="text"
            value={appUrl}
            readOnly
            className="font-mono text-sm"
          />
          <Button
            onClick={handleCopy}
            variant="outline"
            size="icon"
            className="shrink-0"
            aria-label="Copy link"
          >
            {copied ? (
              <Check className="h-4 w-4 text-success" />
            ) : (
              <Copy className="h-4 w-4" />
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
