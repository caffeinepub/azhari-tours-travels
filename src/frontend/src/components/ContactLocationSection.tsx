import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Phone, MessageCircle, MapPin, ExternalLink } from 'lucide-react';

export function ContactLocationSection() {
  const phoneNumber = '+919926408385';
  const address = 'Naya Mohalla near Khalid Apartment, Jabalpur, Madhya Pradesh';
  const mapsLink = 'https://maps.app.goo.gl/ozeP3Y9UqdHacrCy6';

  return (
    <Card className="mb-6 shadow-soft">
      <CardHeader>
        <CardTitle className="text-xl font-semibold">Contact & Location</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-start gap-3">
          <Phone className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
          <div className="flex-1">
            <p className="text-sm text-muted-foreground mb-1">Phone</p>
            <a
              href={`tel:${phoneNumber}`}
              className="text-base font-medium text-foreground hover:text-primary transition-colors"
            >
              {phoneNumber}
            </a>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <MessageCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
          <div className="flex-1">
            <p className="text-sm text-muted-foreground mb-1">WhatsApp</p>
            <a
              href={`https://wa.me/${phoneNumber.replace(/\+/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-base font-medium text-foreground hover:text-primary transition-colors"
            >
              {phoneNumber}
            </a>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
          <div className="flex-1">
            <p className="text-sm text-muted-foreground mb-2">Address</p>
            <p className="text-base text-foreground mb-3">{address}</p>
            <Button asChild variant="outline" size="sm" className="w-full sm:w-auto">
              <a href={mapsLink} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4 mr-2" />
                View on Google Maps
              </a>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
