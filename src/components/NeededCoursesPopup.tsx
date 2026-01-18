import { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { AlertTriangle } from 'lucide-react';

export type CategoryType = 'math' | 'science' | 'social' | 'english' | 'other';

// Editable lists of needed courses for each category
// Modify these arrays to add/remove needed courses
export const NEEDED_COURSES: Record<CategoryType, string[]> = {
  math: [
    'Calculus AB/BC',
    'Statistics',
    'Algebra 2',
    'Geometry',
    'AP Precalculus Units 3-4 (Trigonometric, Polar, Parametric, Vectors)',
  ],
  science: [
    'Physics',
    'AP Biology',
    'AP Chemistry',
    'Environmental Science',
    'Biology Units 5-8 (Genetics, Molecular, Evolution, Ecology)',
  ],
  social: [
    'AP US History',
    'AP Government',
    'AP Economics',
    'Psychology',
    'World History Units 5-11',
  ],
  english: [
    'AP English Literature',
    'AP English Language',
    'Creative Writing',
    'Journalism',
  ],
  other: [
    'Computer Science',
    'Art History',
    'Music Theory',
    'Foreign Languages',
  ],
};

interface NeededCoursesPopupProps {
  category: CategoryType;
  isOpen: boolean;
  onClose: () => void;
}

export const NeededCoursesPopup = ({ 
  category,
  isOpen,
  onClose,
}: NeededCoursesPopupProps) => {
  const courses = NEEDED_COURSES[category] || [];
  
  const categoryNames: Record<CategoryType, string> = {
    math: 'Mathematics',
    science: 'Science',
    social: 'Social Studies',
    english: 'English',
    other: 'Other',
  };

  const categoryColors: Record<CategoryType, string> = {
    math: 'text-math',
    science: 'text-science',
    social: 'text-social',
    english: 'text-english',
    other: 'text-other',
  };

  if (courses.length === 0) {
    return null;
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-xl">
            <AlertTriangle className="h-5 w-5 text-yellow-500" />
            Courses Needed for {categoryNames[category]}
          </DialogTitle>
          <DialogDescription className="text-base pt-2">
            These courses are missing or incomplete. Consider adding them!
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-4 pt-4">
          <ul className="space-y-2">
            {courses.map((course, index) => (
              <li 
                key={index} 
                className={`flex items-center gap-2 p-2 rounded-lg bg-muted/50`}
              >
                <span className={`w-2 h-2 rounded-full bg-yellow-500`} />
                <span className="text-sm font-medium">{course}</span>
              </li>
            ))}
          </ul>
          <p className="text-xs text-muted-foreground">
            Head to the <span className="font-semibold">Other</span> category to create custom units and help your classmates!
          </p>
          <Button onClick={onClose} className="w-full">
            Got it!
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
