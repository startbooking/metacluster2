
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, MapPin, Clock, Receipt, Percent } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface AdventureCardProps {
  id: string;
  name: string;
  location: string;
  description: string;
  rating: number;
  price: string;
  taxes: number;
  taxPercentage: number;
  duration: string;
  difficulty: string;
  image: string;
  category: string;
}

export const AdventureCard = ({ 
  id, 
  name, 
  location, 
  description, 
  rating, 
  price, 
  taxes,
  taxPercentage,
  duration, 
  difficulty, 
  image, 
  category 
}: AdventureCardProps) => {
  const navigate = useNavigate();

  const handleViewMore = () => {
    navigate(`/sponsor/${id}`);
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
          src={image} 
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
              <div className="flex items-center text-sm text-muted-foreground">
                <Receipt className="w-3 h-3 mr-1" />
                <span>Impuestos: ${taxes.toLocaleString()}</span>
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Percent className="w-3 h-3 mr-1" />
                <span>{taxPercentage}%</span>
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
            <img src="https://cdn.icon-icons.com/icons2/2699/PNG/512/waze_logo_icon_168210.png" alt="Waze" className="w-4 h-4" />
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
        
        <Button onClick={handleViewMore} variant="outline" className="w-full">
          Ver Detalles
        </Button>
      </CardContent>
    </Card>
  );
};
