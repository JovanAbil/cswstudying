import { Progress } from '@/components/ui/progress';
import { HardDrive } from 'lucide-react';

const STORAGE_KEY = 'custom-units-data';
const MAX_STORAGE_BYTES = 5 * 1024 * 1024; // 5MB typical localStorage limit

const getStorageUsage = (): { usedBytes: number; percentage: number } => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    const usedBytes = data ? new Blob([data]).size : 0;
    const percentage = Math.min((usedBytes / MAX_STORAGE_BYTES) * 100, 100);
    return { usedBytes, percentage };
  } catch {
    return { usedBytes: 0, percentage: 0 };
  }
};

const formatBytes = (bytes: number): string => {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
};

export const StorageUsageBar = () => {
  const { usedBytes, percentage } = getStorageUsage();
  
  const getColorClass = () => {
    if (percentage >= 90) return 'bg-destructive';
    if (percentage >= 70) return 'bg-yellow-500';
    return 'bg-other';
  };

  return (
    <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-muted/50 border border-border/50">
      <HardDrive className="h-3.5 w-3.5 text-muted-foreground shrink-0" />
      <div className="flex items-center gap-2">
        <div className="relative h-1.5 w-24 overflow-hidden rounded-full bg-secondary">
          <div 
            className={`h-full transition-all ${getColorClass()}`}
            style={{ width: `${percentage}%` }}
          />
        </div>
        <span className="text-xs text-muted-foreground whitespace-nowrap">
          {formatBytes(usedBytes)} / 5 MB
        </span>
      </div>
    </div>
  );
};
