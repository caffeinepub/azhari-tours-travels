import { useEffect } from 'react';
import { BrandHeader } from './components/BrandHeader';
import { ContactLocationSection } from './components/ContactLocationSection';
import { HotelsDistanceSection } from './components/HotelsDistanceSection';
import { InstagramSection } from './components/InstagramSection';
import { BookingForm } from './components/BookingForm';
import { AppShell } from './components/AppShell';
import { PwaInstallPrompt } from './components/PwaInstallPrompt';
import { AppLinkArea } from './components/AppLinkArea';
import { TroubleshootingPanel } from './components/TroubleshootingPanel';
import { Toaster } from '@/components/ui/sonner';
import { registerServiceWorker } from './pwa/registerServiceWorker';
import { getAppSlug } from './lib/slugify';

function App() {
  useEffect(() => {
    registerServiceWorker();
  }, []);

  const deploymentSlug = getAppSlug();

  return (
    <AppShell>
      <Toaster />
      <BrandHeader />
      <PwaInstallPrompt />
      <AppLinkArea />
      <TroubleshootingPanel />
      <ContactLocationSection />
      <HotelsDistanceSection />
      <BookingForm />
      <InstagramSection />
      <footer className="mt-16 py-8 border-t border-border text-center text-sm text-muted-foreground space-y-2">
        <p>
          © {new Date().getFullYear()} Azhari Tours & Travels. Built with ❤️ using{' '}
          <a
            href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(
              window.location.hostname
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            caffeine.ai
          </a>
        </p>
        <p className="text-xs opacity-70">
          Deployment slug: <span className="font-mono">{deploymentSlug}</span>
        </p>
      </footer>
    </AppShell>
  );
}

export default App;
