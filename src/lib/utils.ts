// import { ClassValue, clsx } from 'clsx';
// import { twMerge } from 'tailwind-merge';

// // src/lib/utils.ts

// export function cn(...classes: (string | undefined | null | false)[]) {
//   return classes.filter(Boolean).join(' ')
// }

import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Utility function to merge Tailwind and conditional classes
export function cn(...classes: ClassValue[]) {
  return twMerge(clsx(classes));
}
