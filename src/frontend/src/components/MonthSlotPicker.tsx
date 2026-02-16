import { useState } from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';

interface MonthSlotPickerProps {
  selectedMonth: string;
  onMonthSelect: (month: string) => void;
}

const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

export function MonthSlotPicker({ selectedMonth, onMonthSelect }: MonthSlotPickerProps) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-foreground">
        Select Month <span className="text-destructive">*</span>
      </label>
      <ScrollArea className="h-48 rounded-lg border border-input bg-card">
        <div className="p-2 space-y-1">
          {MONTHS.map((month) => (
            <button
              key={month}
              type="button"
              onClick={() => onMonthSelect(month)}
              className={cn(
                'w-full text-left px-4 py-3 rounded-md transition-all',
                'hover:bg-accent hover:text-accent-foreground',
                'focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
                selectedMonth === month
                  ? 'bg-primary text-primary-foreground font-semibold shadow-sm'
                  : 'bg-background text-foreground'
              )}
            >
              {month}
            </button>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
