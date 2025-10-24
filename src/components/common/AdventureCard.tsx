
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, MapPin, Clock, Receipt, Percent, Car, Navigation } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Experience } from "@/interface/interface";
import { useState } from "react";

export const AdventureCard = ({ 
  id,
  image,
  name,
  category,
  rating,
  difficulty,
  location,
  duration,
  price,
  tax_percentage,
  description,
  max_people,
  experience,
}: Experience) => {
  const navigate = useNavigate();
  const [selectedPoint, setSelectedPoint]  = useState();

  const handleViewMore = () => {
    navigate(`/experiences/${id}`);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Fácil": return "bg-green-100 text-green-800";
      case "Intermedio": return "bg-yellow-100 text-yellow-800";
      case "Difícil": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={`/images/experiences/${image}`} 
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
          {category}
        </Badge>
        <div className="absolute bottom-4 left-4 text-white flex items-center">
          <Clock className="w-4 h-4 mr-1" />
          <span className="text-sm">{duration}</span>
        </div>
        <div className="absolute bottom-4 right-4 flex items-center bg-white/90 rounded-full px-3 py-1">
          <Star className="w-4 h-4 text-yellow-500 fill-current mr-1" />
          <span className="font-medium text-sm">{rating}</span>
        </div>
      </div>
      
      <CardHeader>
        <CardTitle className="text-foreground group-hover:text-primary transition-colors">
          {name}
        </CardTitle>
        <div className="flex items-center text-muted-foreground">
          <MapPin className="w-4 h-4 mr-1" />
          {location}
        </div>
      </CardHeader>
      
      <CardContent>
        <p className="text-muted-foreground mb-4">{description}</p>
        
        <div className="flex items-center gap-2 mb-4">
          <Badge className={getDifficultyColor(difficulty)}>
            Dificultad: {difficulty}
          </Badge>
        </div>

        {/* Precio e impuestos */}
        <div className="bg-accent/20 rounded-lg p-3 mb-4">
          <div className="flex justify-between items-center">
            <span className="text-lg font-bold text-primary">{price}</span>
            <div className="text-right">
              {/* <div className="flex items-center text-sm text-muted-foreground">
                <Receipt className="w-3 h-3 mr-1" />
                <span>Impuestos: ${taxes.toLocaleString()}</span>
              </div> */}
              <div className="flex items-center text-sm text-muted-foreground">
                <Percent className="w-3 h-3 mr-1" />
                <span>{tax_percentage}</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex gap-2 mb-4">
          <Button 
            size="sm" 
            variant="outline"
            onClick={() => window.open(`https://waze.com/ul?q=${encodeURIComponent(location)}`, '_blank')}
            className="flex items-center gap-1 hover:bg-green-50 border-green-500 text-green-700"
          >
          <Navigation className="w-4 h-4 mr-2" />
            Ver Waze
          </Button>
          <Button 
            size="sm"
            onClick={() => console.log(`Reservar ${name}`)}
            className="flex-1"
          >
            Reservar
          </Button>
        </div>
        
        <Button 
        onClick={() => setSelectedPoint(experience)}
        variant="outline" className="w-full border-primary text-primary">
          Ver Detalles
        </Button>
      </CardContent>
    </Card>
  );
};
