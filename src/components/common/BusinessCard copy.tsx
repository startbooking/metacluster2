
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, MapPin, Eye, Percent, Receipt } from "lucide-react";
import { useNavigate } from "react-router-dom";
import WordCountDisplay from "@/utils/WordCountDisplay";

interface BusinessCardProps {
  id: string;
  name: string;
  category: string;
  address: string;
  rating: number;
  image: string;
  description: string;
  is_sponsor?: boolean;
  price?: string;
  taxes?: number;
  tax_percentage?: number;
  specialties?: string[];
  amenities?: string[];
  onViewDetails?: (id: string) => void;
}

export const BusinessCard = ({
  id,
  name,
  category,
  address,
  rating,
  image,
  description,
  is_sponsor,
  price,
  taxes,
  tax_percentage,
  specialties,
  amenities,
  onViewDetails
}: BusinessCardProps) => {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    if (onViewDetails) {
      onViewDetails(id);
    } else if (is_sponsor) {
      navigate(`/sponsor/${id}`);
    } else {
      navigate(`/business/${id}`);
    }
  };
  

  const DISPLAY_LIMIT = 20;

  return (
    <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
      <div className="relative h-48 overflow-hidden">
        <img
          src={`images/businnesses/${image}`}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

        <div className="absolute top-4 left-4">
          <Badge className="bg-primary text-primary-foreground rounded-md">
            {category}
          </Badge>
        </div>

        <div className="absolute top-4 right-4 flex items-center bg-white/90 rounded-md px-3 py-1">
          <Star className="w-4 h-4 text-yellow-500 fill-current mr-1" />
          <span className="font-bold text-sm">{rating}</span>
        </div>

        {is_sponsor && (
          <div className="absolute bottom-4 left-4">
            <Badge variant="outline" className="bg-white/90 text-primary border-primary rounded-md">
              VIP Sponsor
            </Badge>
          </div>
        )}
      </div>

      <CardHeader>
        <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
          {name}
        </CardTitle>
        <div className="flex items-center text-muted-foreground">
          <MapPin className="w-4 h-4 mr-2" />
          <span className="text-sm">{address}</span>
        </div>
      </CardHeader>

      <CardContent>
        <WordCountDisplay
          text={description}
          wordLimit={DISPLAY_LIMIT}
        />
        {/* <p className="text-muted-foreground mb-4 text-justify">
          {description}
        </p> */}

        {/* Precio e impuestos */}
        {price && (
          <div className="bg-accent/20 rounded-lg p-3 mb-4">
            <div className="flex justify-between items-center">
              <span className="text-lg font-bold text-primary">{price}</span>
              {tax_percentage && (
                <div className="text-right">
                  {/* <div className="flex items-center text-sm text-muted-foreground">
                    <Receipt className="w-3 h-3 mr-1" />
                    <span>Impuestos: ${taxes.toLocaleString()}</span>
                  </div> */}
                  <div className="flex items-center text-sm text-muted-foreground">
                    Impuestos  
                    <span>{tax_percentage}</span>
                    <Percent className="w-3 h-3 mr-1" />
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Especialidades o amenidades */}
        {(specialties || amenities) && (
          <div className="mb-4">
            <div className="flex flex-wrap gap-1">
              {(specialties || amenities)?.slice(0, 3).map((item, index) => (
                <Badge key={index} variant="outline" className="text-xs">
                  {item}
                </Badge>
              ))}
              {(specialties || amenities) && (specialties || amenities).length > 3 && (
                <Badge variant="outline" className="text-xs">
                  +{(specialties || amenities).length - 3} más
                </Badge>
              )}
            </div>
          </div>
        )}

        <Button
          className="w-full"
          onClick={handleViewDetails}
        >
          <Eye className="w-4 h-4 mr-2" />
          Ver Detalles
        </Button>
      </CardContent>
    </Card>
  );
};
