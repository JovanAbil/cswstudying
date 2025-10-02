import { useNavigate } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { GraduationCap, Microscope } from 'lucide-react';

const Index = () => {
  const navigate = useNavigate();
  
  const precalcUnits = [
    { id: 'polynomial', name: 'Polynomial Functions' },
    { id: 'rational', name: 'Rational Functions' },
    { id: 'exponential', name: 'Exponential Functions' },
    { id: 'logarithmic', name: 'Logarithmic Functions' },
    { id: 'trigonometric', name: 'Trigonometric Functions' },
    { id: 'polar', name: 'Polar Functions' },
    { id: 'parametric', name: 'Parametric Functions' },
    { id: 'vectorsMatrices', name: 'Vectors and Matrices' },
  ];

  const biologyUnits = [
    { id: 'biochemistry', name: 'Biochemistry' },
    { id: 'cellstructure', name: 'Cell Structure & Function' },
    { id: 'cellenergetics', name: 'Cell Energetics & Photosynthesis & Cell Resp' },
    { id: 'cellgrowth', name: 'Cell Growth & Divison' },
    { id: 'genetics', name: 'Genetics' },
    { id: 'molecular', name: 'Molecular Biology' },
    { id: 'evolution', name: 'Darwins Theory of Evolution' },
    { id: 'ecology', name: 'Ecology' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-primary">
            Practice Hub
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Master Classes with interactive practice tests and daily exercises!
          </p>
        </div>

        {/* AP Precalc Section */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
              <GraduationCap className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-3xl font-bold mb-2 text-primary">AP Precalculus</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {precalcUnits.map((unit) => (
              <Card
                key={unit.id}
                className="p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer border-2 hover:border-primary group"
                onClick={() => navigate(`/unit/precalc/${unit.id}`)}
              >
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2 text-primary group-hover:scale-110 transition-transform">
                    {unit.id.toUpperCase()}
                  </div>
                  <p className="text-sm text-muted-foreground">{unit.name}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Biology Section */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-success/10 rounded-full mb-4">
              <Microscope className="w-8 h-8 text-success" />
            </div>
            <h2 className="text-3xl font-bold mb-2 text-success">Biology</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {biologyUnits.map((unit) => (
              <Card
                key={unit.id}
                className="p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer border-2 hover:border-success group"
                onClick={() => navigate(`/unit/biology/${unit.id}`)}
              >
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2 text-success group-hover:scale-110 transition-transform">
                    {unit.id.replace('bio', 'Unit ')}
                  </div>
                  <p className="text-sm text-muted-foreground">{unit.name}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Info Cards */}
        <div className="mt-16 max-w-3xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 bg-secondary/20 border-secondary">
              <h3 className="text-lg font-semibold mb-2 text-secondary">📚 Daily Practice</h3>
              <p className="text-sm text-muted-foreground">
                Quick 10-question sessions to keep your skills sharp
              </p>
            </Card>
            <Card className="p-6 bg-accent/20 border-accent">
              <h3 className="text-lg font-semibold mb-2 text-accent">📝 Full Tests</h3>
              <p className="text-sm text-muted-foreground">
                Comprehensive 25-30 question assessments to test your mastery
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
