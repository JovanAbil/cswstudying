import { Link, useNavigate } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Sparkles, Trophy, Brain, Target } from 'lucide-react';
import useWrongAnswers from '@/hooks/useWrongAnswers';
import { Footer } from '@/components/Footer';
import { AdPlaceholder } from '@/components/AdPlaceholder';

const OtherCategory = () => {
  const navigate = useNavigate();
  const { getWrongAnswerCount, getAllWrongQuestionsForSubject } = useWrongAnswers();

  const builtInSubjects = [
    {
      id: 'memory',
      name: 'Memory Training',
      units: [
        { id: 'general', name: 'Polyatomic Ions - Chemistry' },
        { id: 'general2', name: 'Molecular Geometry - Chemistry' },
        { id: 'general3', name: 'Rates of Change - AP Precalc' },
      ],
    },
    {
      id: 'apcsp',
      name: 'AP Computer Science Principles',
      units: [
        { id: 'digital', name: 'Digital Information' },
      ],
    },
    {
      id: 'temporary',
      name: 'Temporary Practice',
      units: [
        { id: 'precalc3b', name: 'AP Precalc 3B' },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="container mx-auto px-4 py-8 flex-1 max-w-5xl">
        <Link to="/" className="inline-block mb-6">
          <Button variant="ghost">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>

        <div className="flex items-center gap-4 mb-8">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-other/10">
            <Sparkles className="w-7 h-7 text-other" />
          </div>
          <div>
            <h1 className="text-4xl font-display font-bold text-other">Other</h1>
            <p className="text-muted-foreground">Memory training, AP CSP, and miscellaneous</p>
          </div>
        </div>

        {/* Built-in subjects */}
        {builtInSubjects.map((subject) => {
          const wrongCount = getWrongAnswerCount(subject.id);
          
          return (
            <div key={subject.id} className="mb-12">
              <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
                <div className="flex items-center gap-2">
                  <Brain className="h-6 w-6 text-other" />
                  <h2 className="text-2xl font-display font-bold">{subject.name}</h2>
                </div>
                <div className="flex gap-2 flex-wrap">
                  {wrongCount > 0 && (
                    <Button
                      onClick={() => navigate(`/quiz/${subject.id}/wrong/cram`, { 
                        state: { wrongQuestions: getAllWrongQuestionsForSubject(subject.id) } 
                      })}
                      variant="outline"
                      className="border-destructive text-destructive hover:bg-destructive hover:text-destructive-foreground"
                    >
                      <Target className="mr-2 h-4 w-4" />
                      Targeted Practice ({wrongCount})
                    </Button>
                  )}
                  <Link to={`/course-challenge/${subject.id}`}>
                    <Button
                      variant="outline"
                      className="border-other text-other hover:bg-other hover:text-other-foreground"
                    >
                      <Trophy className="mr-2 h-4 w-4" />
                      Course Challenge
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {subject.units.map((unit) => (
                  <Link key={unit.id} to={`/unit/${subject.id}/${unit.id}`}>
                    <Card
                      className="p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer border-2 hover:border-other group"
                    >
                      <p className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                        {unit.name}
                      </p>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Ad Placeholder */}
      <div className="container mx-auto px-4 pb-8">
        <AdPlaceholder position="bottom" />
      </div>
      <Footer />
    </div>
  );
};

export default OtherCategory;
