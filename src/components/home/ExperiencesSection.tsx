
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Clock, Users, Eye, Loader2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useCachedData } from "@/hooks/useCachedData";
import { dataService } from "@/services/dataService";

interface Experience {
  id: string;
  name: string;
  category: string;
  duration: string;
  rating: number;
  price: string;
  maxPeople: number;
  image: string;
  description: string;
}

interface ExperiencesSectionProps {
  language: string;
}

export const ExperiencesSection = ({ language }: ExperiencesSectionProps) => {
  const navigate = useNavigate();

  const { data: featuredExperiences, isLoading } = useCachedData<Experience[]>({
    cacheKey: 'featured-experiences',
    fetchFn: dataService.getExperiences
  });

  if (isLoading) {
    return (
      <section className="py-16 bg-green-100/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Experiencias Únicas
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Vive aventuras inolvidables y descubre la auténtica cultura llanera con nuestras experiencias especializadas
            </p>
          </div>
          <div className="flex justify-center">
            <Loader2 className="w-8 h-8 animate-spin text-primary" />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-green-100/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Experiencias Únicas
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Vive aventuras inolvidables y descubre la auténtica cultura llanera con nuestras experiencias especializadas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredExperiences?.map((experience) => (
            <Card key={experience.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden bg-white">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={experience.image} 
                  alt={experience.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-green-500 text-white">
                    {experience.category}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4 flex items-center bg-white/90 rounded-full px-3 py-1">
                  <Star className="w-4 h-4 text-yellow-500 fill-current mr-1" />
                  <span className="font-bold text-sm">{experience.rating}</span>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl text-foreground group-hover:text-green-600 transition-colors">
                  {experience.name}
                </CardTitle>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {experience.duration}
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    Máx. {experience.maxPeople}
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  {experience.description}
                </p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xl font-bold text-green-600">{experience.price}</span>
                  <span className="text-sm text-muted-foreground">por persona</span>
                </div>
                <Button 
                  className="w-full bg-green-500 hover:bg-green-600"
                  onClick={() => navigate('/experiences')}
                >
                  <Eye className="w-4 h-4 mr-2" />
                  Ver Experiencias
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button 
            variant="outline" 
            className="border-green-500 text-green-600 hover:bg-green-50"
            onClick={() => navigate('/experiences')}
          >
            Ver Todas las Experiencias
          </Button>
        </div>
      </div>
    </section>
  );
};
