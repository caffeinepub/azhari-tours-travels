import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';

interface CreateBookingParams {
  clientName: string;
  clientPhone: string;
  selectedMonth: string;
}

export function useCreateBookingMutation() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ clientName, clientPhone, selectedMonth }: CreateBookingParams) => {
      if (!actor) {
        throw new Error('Backend connection not available');
      }

      const result = await actor.createBooking(clientName, clientPhone, selectedMonth);
      return result;
    },
    onSuccess: () => {
      // Invalidate any booking-related queries if needed in the future
      queryClient.invalidateQueries({ queryKey: ['bookings'] });
    }
  });
}
