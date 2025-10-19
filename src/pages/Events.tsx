
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users, Clock } from "lucide-react";
import { TopBar } from "@/components/TopBar";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { EventDetailModal } from "@/components/EventDetailModal";

const Events = () => {
  const [currentLanguage, setCurrentLanguage] = useState("es");
  const [selectedEvent, setSelectedEvent] = useState<any>(null);

  const events = [
    {
      id: 1,
      title: "Festival Llanero 2024",
      date: "15-18 Julio 2024",
      time: "8:00 AM - 11:00 PM",
      description: "El evento cultural más importante de los llanos con música joropo, coleo y gastronomía típica. Una celebración que reúne a miles de personas para disfrutar de las tradiciones llaneras más auténticas.",
      location: "Parque Los Fundadores",
      price: "Gratis",
      isFree: true,
      capacity: 5000,
      category: "Cultural",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
      organizer: "Alcaldía de Villavicencio",
      includes: ["Presentaciones de joropo", "Competencias de coleo", "Gastronomía típica", "Artesanías"],
      requirements: ["Llevar protector solar", "Ropa cómoda", "Hidratación constante"]
    },
    {
      id: 2,
      title: "Safari Fotográfico Los Ocarros",
      date: "25 Junio 2024",
      time: "6:00 AM - 2:00 PM",
      description: "Experiencia única de avistamiento y fotografía de fauna llanera en su hábitat natural. Guiado por expertos biólogos y fotógrafos profesionales.",
      location: "Bioparque Los Ocarros",
      price: "$45.000",
      isFree: false,
      capacity: 30,
      category: "Aventura",
      image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716",
      organizer: "Bioparque Los Ocarros",
      includes: ["Guía especializado", "Equipo fotográfico básico", "Transporte interno", "Refrigerio"],
      requirements: ["Cámara fotográfica", "Ropa de colores neutros", "Calzado cómodo", "Binoculares (opcional)"]
    },
    {
      id: 3,
      title: "Noche de Gastronomía Llanera",
      date: "10 Agosto 2024",
      time: "7:00 PM - 12:00 AM",
      description: "Degustación de platos típicos preparados por los mejores chefs de la región. Una experiencia culinaria que celebra los sabores únicos de los llanos orientales.",
      location: "Plaza Los Libertadores",
      price: "$35.000",
      isFree: false,
      capacity: 200,
      category: "Gastronomía",
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
      organizer: "Asociación de Chefs Llaneros",
      includes: ["Degustación de 8 platos", "Bebidas típicas", "Show musical", "Certificado de participación"],
      requirements: ["Reserva previa", "Identificación", "No menores de 18 años para bebidas alcohólicas"]
    },
    {
      id: 4,
      title: "Torneo de Coleo Profesional",
      date: "5-7 Septiembre 2024",
      time: "2:00 PM - 8:00 PM",
      description: "Competencia oficial de coleo con los mejores jinetes de Colombia. Tres días de emoción y tradición llanera en el deporte más representativo de la región.",
      location: "Estadio de Coleo La Macarena",
      price: "$20.000",
      isFree: false,
      capacity: 1000,
      category: "Deportivo",
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9",
      organizer: "Federación de Coleo",
      includes: ["Entrada general", "Programa del evento", "Acceso a zona de comidas"],
      requirements: ["Boleta de entrada", "Protector solar", "Sombrero o gorra"]
    },
    {
      id: 5,
      title: "Cabalgata Llanera Tradicional",
      date: "12 Agosto 2024",
      time: "5:00 AM - 4:00 PM",
      description: "Recorrido a caballo por los paisajes más hermosos de los llanos orientales. Una aventura que conecta con la naturaleza y las tradiciones ecuestres.",
      location: "Hacienda El Paraíso",
      price: "$80.000",
      isFree: false,
      capacity: 50,
      category: "Aventura",
      image: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa",
      organizer: "Hacienda El Paraíso",
      includes: ["Caballo y equipo", "Guía experto", "Almuerzo típico", "Transporte de ida y vuelta"],
      requirements: ["Experiencia básica en equitación", "Ropa cómoda", "Botas cerradas", "Casco (incluido)"]
    },
    {
      id: 6,
      title: "Festival de Artesanías",
      date: "20-22 Agosto 2024",
      time: "9:00 AM - 6:00 PM",
      description: "Muestra de artesanías tradicionales llaneras y talleres participativos. Una oportunidad única para aprender técnicas ancestrales de nuestros artesanos.",
      location: "Centro Cultural",
      price: "$10.000",
      isFree: false,
      capacity: 300,
      category: "Cultural",
      image: "https://images.unsplash.com/photo-1452860606245-08befc0ff44b",
      organizer: "Casa de la Cultura",
      includes: ["Acceso a talleres", "Materiales básicos", "Certificado", "Muestra artesanal"],
      requirements: ["Inscripción previa", "Creatividad", "Ganas de aprender"]
    }
  ];

  const openWaze = (location: string) => {
    const wazeUrl = `https://waze.com/ul?q=${encodeURIComponent(location + " Villavicencio Meta")}`;
    window.open(wazeUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      <TopBar currentLanguage={currentLanguage} onLanguageChange={setCurrentLanguage} />
      <Header activeSection="events" onSectionChange={() => {}} language={currentLanguage} />
      
      <main className="pt-32">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Eventos y Actividades
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Participa en los eventos más emocionantes de la región llanera
            </p>
          </div>

          {/* Grid de 3 columnas */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event) => (
              <Card key={event.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden h-full flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <Badge className="absolute top-3 right-3 bg-primary text-primary-foreground text-xs">
                    {event.category}
                  </Badge>
                  <Badge 
                    variant={event.isFree ? "secondary" : "default"} 
                    className="absolute top-3 left-3 text-xs"
                  >
                    {event.isFree ? "Gratis" : event.price}
                  </Badge>
                </div>
                
                <CardHeader className="flex-grow">
                  <CardTitle className="text-foreground group-hover:text-primary transition-colors line-clamp-2 text-lg">
                    {event.title}
                  </CardTitle>
                  <div className="space-y-2">
                    <div className="flex items-center text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-2 flex-shrink-0" />
                      <span className="text-sm">{event.date}</span>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Clock className="w-4 h-4 mr-2 flex-shrink-0" />
                      <span className="text-sm">{event.time}</span>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <MapPin className="w-4 h-4 mr-2 flex-shrink-0" />
                      <span className="text-sm">{event.location}</span>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Users className="w-4 h-4 mr-2 flex-shrink-0" />
                      <span className="text-sm">Capacidad: {event.capacity}</span>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <p className="text-muted-foreground mb-4 text-sm line-clamp-2">{event.description}</p>
                  <div className="space-y-2">
                    <Button 
                      className="w-full"
                      onClick={() => setSelectedEvent(event)}
                    >
                      Más información
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full" 
                      onClick={() => openWaze(event.location)}
                    >
                      <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19.83 12.63c0-1.21-.31-2.4-.9-3.45l-7.86 7.86c1.05.59 2.24.9 3.45.9 4.02 0 7.29-3.27 7.29-7.29v1.98h-1.98zm-7.84-7.84c-1.21 0-2.4.31-3.45.9l7.86 7.86c-.59-1.05-.9-2.24-.9-3.45 0-4.02 3.27-7.29 7.29-7.29v1.98h1.98c0-1.21-.31-2.4-.9-3.45L12.01 4.8z"/>
                      </svg>
                      Ir con Waze
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />

      {selectedEvent && (
        <EventDetailModal 
          event={selectedEvent} 
          onClose={() => setSelectedEvent(null)} 
        />
      )}
    </div>
  );
};

export default Events;
