import { useEffect } from 'react';
import { BrandHeader } from './components/BrandHeader';
import { ContactLocationSection } from './components/ContactLocationSection';
import { HotelsDistanceSection } from './components/HotelsDistanceSection';
import { InstagramSection } from './components/InstagramSection';
import { BookingForm } from './components/BookingForm';
import { AppShell } from './components/AppShell';
import { PwaInstallPrompt } from './components/PwaInstallPrompt';
import { Toaster } from '@/components/ui/sonner';
import { registerServiceWorker } from './pwa/registerServiceWorker';

function App() {
  useEffect(() => {
    registerServiceWorker();
  }, []);

  return (
    <AppShell>
      <Toaster />
      <BrandHeader />
      <PwaInstallPrompt />
      <ContactLocationSection />
      <HotelsDistanceSection />
      <BookingForm />
      <InstagramSection />
      <footer className="mt-16 py-8 border-t border-border text-center text-sm text-muted-foreground">
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
      </footer>
    </AppShell>
  );
}

export default App;
