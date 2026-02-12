import { cn } from '@/lib/utils';

export function Sheet({ open, className, children }: { open: boolean; className?: string; children: React.ReactNode }) {
  return (
    <div
      className={cn(
        open
          ? 'fixed inset-0 z-40 overflow-y-auto bg-background p-4 lg:static lg:z-auto lg:p-0'
          : 'hidden lg:block',
        className
      )}
    >
      {children}
    </div>
  );
}
