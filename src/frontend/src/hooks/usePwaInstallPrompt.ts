import { useState, useEffect } from 'react';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

interface UsePwaInstallPromptReturn {
  isInstallable: boolean;
  isIos: boolean;
  isStandalone: boolean;
  promptInstall: () => Promise<void>;
  dismissPrompt: () => void;
}

export function usePwaInstallPrompt(): UsePwaInstallPromptReturn {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isInstallable, setIsInstallable] = useState(false);
  const [isIos, setIsIos] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);

  useEffect(() => {
    // Check if running in standalone mode
    const standalone = window.matchMedia('(display-mode: standalone)').matches ||
      (window.navigator as any).standalone === true;
    setIsStandalone(standalone);

    // Detect iOS
    const ios = /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream;
    setIsIos(ios);

    // If already installed or iOS (which doesn't support beforeinstallprompt), don't show Android prompt
    if (standalone) {
      setIsInstallable(false);
      return;
    }

    // iOS devices can always show the install instructions (unless already installed)
    if (ios) {
      setIsInstallable(true);
      return;
    }

    // Listen for the beforeinstallprompt event (Android/Chrome)
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      const promptEvent = e as BeforeInstallPromptEvent;
      setDeferredPrompt(promptEvent);
      setIsInstallable(true);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const promptInstall = async () => {
    if (!deferredPrompt) {
      return;
    }

    try {
      await deferredPrompt.prompt();
      const choiceResult = await deferredPrompt.userChoice;
      
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the install prompt');
      }
      
      setDeferredPrompt(null);
      setIsInstallable(false);
    } catch (error) {
      console.error('Error showing install prompt:', error);
    }
  };

  const dismissPrompt = () => {
    setIsInstallable(false);
    setDeferredPrompt(null);
  };

  return {
    isInstallable,
    isIos,
    isStandalone,
    promptInstall,
    dismissPrompt,
  };
}
