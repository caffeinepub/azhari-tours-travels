import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { MonthSlotPicker } from './MonthSlotPicker';
import { useCreateBookingMutation } from '../hooks/useCreateBookingMutation';
import { Loader2, CheckCircle2 } from 'lucide-react';
import { toast } from 'sonner';

export function BookingForm() {
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [selectedMonth, setSelectedMonth] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const { mutate: createBooking, isPending, isError, error } = useCreateBookingMutation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!clientName.trim()) {
      toast.error('Please enter your name');
      return;
    }

    if (!clientPhone.trim()) {
      toast.error('Please enter your phone number');
      return;
    }

    if (!selectedMonth) {
      toast.error('Please select a month');
      return;
    }

    createBooking(
      { clientName: clientName.trim(), clientPhone: clientPhone.trim(), selectedMonth },
      {
        onSuccess: () => {
          setShowSuccess(true);
          toast.success('Booking submitted successfully!');
          // Reset form
          setClientName('');
          setClientPhone('');
          setSelectedMonth('');
          // Hide success message after 5 seconds
          setTimeout(() => setShowSuccess(false), 5000);
        },
        onError: (err) => {
          toast.error(err instanceof Error ? err.message : 'Failed to submit booking');
        }
      }
    );
  };

  return (
    <Card className="mb-6 shadow-medium">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Book Your Journey</CardTitle>
        <CardDescription>Fill in your details to reserve your Hajj or Umrah package</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="clientName">
              Your Name <span className="text-destructive">*</span>
            </Label>
            <Input
              id="clientName"
              type="text"
              placeholder="Enter your full name"
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
              disabled={isPending}
              className="h-12"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="clientPhone">
              Phone Number <span className="text-destructive">*</span>
            </Label>
            <Input
              id="clientPhone"
              type="tel"
              placeholder="Enter your phone number"
              value={clientPhone}
              onChange={(e) => setClientPhone(e.target.value)}
              disabled={isPending}
              className="h-12"
            />
          </div>

          <MonthSlotPicker selectedMonth={selectedMonth} onMonthSelect={setSelectedMonth} />

          {isError && error && (
            <div className="p-4 rounded-lg bg-destructive/10 border border-destructive/20">
              <p className="text-sm text-destructive font-medium">
                {error instanceof Error ? error.message : 'An error occurred. Please try again.'}
              </p>
            </div>
          )}

          {showSuccess && (
            <div className="p-4 rounded-lg bg-primary/10 border border-primary/20 flex items-center gap-3">
              <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
              <p className="text-sm text-primary font-medium">
                Your booking has been submitted successfully! We will contact you soon.
              </p>
            </div>
          )}

          <Button type="submit" size="lg" className="w-full h-14 text-base font-semibold" disabled={isPending}>
            {isPending ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Submitting...
              </>
            ) : (
              'Submit Booking'
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
