import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Building2 } from 'lucide-react';

export function HotelsDistanceSection() {
  return (
    <Card className="mb-6 shadow-soft">
      <CardHeader>
        <CardTitle className="text-xl font-semibold">Hotel Distances</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-start gap-3">
          <Building2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
          <div>
            <p className="font-medium text-foreground">Mecca Hotel</p>
            <p className="text-sm text-muted-foreground">500m to 1km from Haram</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <Building2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
          <div>
            <p className="font-medium text-foreground">Madina Hotel</p>
            <p className="text-sm text-muted-foreground">300m to 600m from Masjid Nabawi</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
