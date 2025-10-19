
import { useState } from "react";
import { TopBar } from "@/components/TopBar";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Star, Camera } from "lucide-react";

const PointsOfInterest = () => {
  const [currentLanguage, setCurrentLanguage] = useState("es");

  const pointsOfInterest = [
    {
      id: 1,
      name: "Bioparque Los Ocarros",
      description: "Parque zoológico y de conservación con especies nativas de los Llanos Orientales",
      category: "Naturaleza",
      image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0",
      rating: 4.6,
      openingHours: "8:00 AM - 5:00 PM",
      location: "Restrepo, Meta"
    },
    {
      id: 2,
      name: "Catedral Nuestra Señora del Carmen",
      description: "Hermosa catedral de arquitectura colonial en el centro de la ciudad",
      category: "Religioso",
      image: "https://images.unsplash.com/photo-1520637836862-4d197d17c41a",
      rating: 4.4,
      openingHours: "6:00 AM - 7:00 PM",
      location: "Centro, Villavicencio"
    },
    {
      id: 3,
      name: "Parque de Los Fundadores",
      description: "Parque histórico con monumentos y espacios recreativos",
      category: "Histórico",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
      rating: 4.2,
      openingHours: "24 horas",
      location: "Centro, Villavicencio"
    },
    {
      id: 4,
      name: "Malecón de los Llanos",
      description: "Paseo ribereño con vista al río Guatiquía y actividades recreativas",
      category: "Recreativo",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4",
      rating: 4.5,
      openingHours: "6:00 AM - 10:00 PM",
      location: "Villavicencio"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <TopBar currentLanguage={currentLanguage} onLanguageChange={setCurrentLanguage} />
      <Header activeSection="points-of-interest" onSectionChange={() => {}} language={currentLanguage} />
      
      <main className="pt-24">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">Puntos de Interés</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Descubre los lugares más emblemáticos y atractivos de Villavicencio y el Meta
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pointsOfInterest.map((point) => (
              <Card key={point.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={point.image} 
                    alt={point.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
                    {point.category}
                  </Badge>
                  <div className="absolute bottom-4 right-4 flex items-center bg-white/90 rounded-full px-3 py-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-current mr-1" />
                    <span className="font-medium text-sm">{point.rating}</span>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-foreground group-hover:text-primary transition-colors">
                    {point.name}
                  </CardTitle>
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="w-4 h-4 mr-1" />
                    {point.location}
                  </div>
                </CardHeader>
                
                <CardContent>
                  <p className="text-muted-foreground mb-4">{point.description}</p>
                  
                  <div className="flex items-center text-sm text-muted-foreground mb-4">
                    <Clock className="w-4 h-4 mr-2" />
                    {point.openingHours}
                  </div>
                  
                  <Button className="w-full">
                    <Camera className="w-4 h-4 mr-2" />
                    Ver más detalles
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PointsOfInterest;
