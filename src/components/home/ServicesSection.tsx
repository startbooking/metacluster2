
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Phone, Clock, Eye, Loader2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useCachedData } from "@/hooks/useCachedData";
import { dataService } from "@/services/dataService";

interface Service {
  id: string;
  name: string;
  category: string;
  schedule: string;
  rating: number;
  price: string;
  phone: string;
  image: string;
  description: string;
  isVip?: boolean;
}

interface ServicesSectionProps {
  language: string;
}

export const ServicesSection = ({ language }: ServicesSectionProps) => {
  const navigate = useNavigate();

  const { data: featuredServices, isLoading } = useCachedData<Service[]>({
    cacheKey: 'featured-services',
    fetchFn: dataService.getServices
  });

  const handleViewDetails = (serviceId: string) => {
    navigate(`/service/${serviceId}`);
  };

  if (isLoading) {
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Servicios Turísticos
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Servicios especializados para hacer de tu experiencia en Villavicencio algo inolvidable
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
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Servicios Turísticos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Servicios especializados para hacer de tu experiencia en Villavicencio algo inolvidable
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredServices?.map((service) => (
            <Card key={service.id} className={`group hover:shadow-xl transition-all duration-300 overflow-hidden ${service.isVip ? 'border-2 border-green-200 bg-gradient-to-br from-green-50 to-green-100/50' : 'bg-white'}`}>
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-green-500 text-white">
                    {service.category}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4 flex items-center bg-white/90 rounded-full px-3 py-1">
                  <Star className="w-4 h-4 text-yellow-500 fill-current mr-1" />
                  <span className="font-bold text-sm">{service.rating}</span>
                </div>
                {service.isVip && (
                  <div className="absolute bottom-4 left-4">
                    <Badge className="bg-green-600 text-white">
                      ⭐ VIP SPONSOR
                    </Badge>
                  </div>
                )}
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl text-foreground group-hover:text-green-600 transition-colors">
                  {service.name}
                </CardTitle>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {service.schedule}
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-3 h-3 mr-1" />
                    {service.phone}
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  {service.description}
                </p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xl font-bold text-green-600">{service.price}</span>
                </div>
                <Button 
                  className="w-full bg-green-500 hover:bg-green-600"
                  onClick={() => handleViewDetails(service.id)}
                >
                  <Eye className="w-4 h-4 mr-2" />
                  Ver Detalles
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button 
            variant="outline" 
            className="border-green-500 text-green-600 hover:bg-green-50"
            onClick={() => navigate('/services')}
          >
            Ver Todos los Servicios
          </Button>
        </div>
      </div>
    </section>
  );
};
