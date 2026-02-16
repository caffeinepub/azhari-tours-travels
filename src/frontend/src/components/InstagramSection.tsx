import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { SiInstagram } from 'react-icons/si';

export function InstagramSection() {
  const instagramUrl = 'https://www.instagram.com/_azhari_hajj_umrah_ziyarat?igsh=dDA1dnFva2VmY3Bi';

  return (
    <Card className="mb-6 shadow-soft bg-gradient-to-br from-card to-accent/10">
      <CardContent className="pt-6">
        <Button asChild variant="default" size="lg" className="w-full">
          <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
            <SiInstagram className="h-5 w-5 mr-2" />
            Follow us on Instagram
          </a>
        </Button>
      </CardContent>
    </Card>
  );
}
