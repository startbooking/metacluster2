
import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Star, Clock, Calendar, Users, Camera } from "lucide-react";
import { TopBar } from "@/components/TopBar";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const Experiences = () => {
  const [currentLanguage, setCurrentLanguage] = useState("es");

  const experiences = [
    {
      id: 1,
      name: "Safari Fotográfico Los Ocarros",
      location: "Bioparque Los Ocarros",
      description: "Experiencia única de avistamiento y fotografía de fauna llanera en su hábitat natural. Incluye guía especializado y equipo fotográfico.",
      longDescription: "Recorrido de día completo por el Bioparque Los Ocarros con enfoque en fotografía de fauna silvestre. Incluye charla educativa sobre conservación, almuerzo típico y sesión de fotografía con animales emblemáticos de los llanos como el chigüiro, la anaconda y diversas aves exóticas.",
      rating: 4.9,
      duration: "8 horas",
      price: "$45.000",
      maxPeople: 15,
      category: "Naturaleza y Fauna",
      difficulty: "Fácil",
      includes: ["Transporte", "Guía especializado", "Almuerzo", "Equipo fotográfico", "Seguro"],
      image: "https://images.unsplash.com/photo-1549366021-9f761d040a94"
    },
    {
      id: 2,
      name: "Tour Gastronómico Llanero",
      location: "Centro de Villavicencio",
      description: "Recorrido culinario por los mejores restaurantes de comida típica llanera con degustación de platos tradicionales.",
      longDescription: "Experiencia gastronómica que incluye visita a 4 restaurantes tradicionales, mercado local, finca ganadera para conocer el proceso de la carne llanera, y taller de preparación de arepa de huevo y guarapo.",
      rating: 4.7,
      duration: "6 horas",
      price: "$65.000",
      maxPeople: 12,
      category: "Gastronomía",
      difficulty: "Fácil",
      includes: ["Degustaciones", "Transporte", "Guía gastronómico", "Recetas tradicionales", "Bebidas"],
      image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445"
    },
    {
      id: 3,
      name: "Aventura en Kayak Río Meta",
      location: "Puerto López",
      description: "Descenso en kayak por el río Meta con avistamiento de aves y pesca deportiva. Ideal para amantes de la aventura.",
      longDescription: "Aventura acuática de medio día navegando las aguas del río Meta. Incluye instrucción básica de kayak, avistamiento de aves acuáticas, pesca deportiva opcional y almuerzo a orillas del río.",
      rating: 4.8,
      duration: "5 horas",
      price: "$85.000",
      maxPeople: 8,
      category: "Aventura Acuática",
      difficulty: "Moderado",
      includes: ["Kayak y equipo", "Instructor", "Chaleco salvavidas", "Almuerzo", "Transporte", "Seguro"],
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5"
    },
    {
      id: 4,
      name: "Tour Cultural Joropo y Coleo",
      location: "Finca La Mapora",
      description: "Inmersión en la cultura llanera con espectáculo de joropo, demostración de coleo y actividades tradicionales.",
      longDescription: "Experiencia cultural completa en finca típica llanera. Incluye espectáculo de joropo con música en vivo, demostración de coleo profesional, ordeño de vacas, cabalgata corta y cena típica bajo las estrellas.",
      rating: 4.6,
      duration: "7 horas",
      price: "$75.000",
      maxPeople: 20,
      category: "Cultura y Tradición",
      difficulty: "Fácil",
      includes: ["Espectáculo joropo", "Cena típica", "Cabalgata", "Transporte", "Bebidas tradicionales"],
      image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91"
    },
    {
      id: 5,
      name: "Expedición Nocturna de Observación",
      location: "Reserva Natural El Tiestal",
      description: "Tour nocturno para observación de fauna nocturna con telescopios y equipos de visión nocturna.",
      longDescription: "Aventura nocturna única para observar la fauna que despierta cuando cae la noche en los llanos. Incluye observación astronómica, búsqueda de animales nocturnos y fogata con historias tradicionales.",
      rating: 4.5,
      duration: "4 horas",
      price: "$55.000",
      maxPeople: 10,
      category: "Ecoturismo Nocturno",
      difficulty: "Moderado",
      includes: ["Equipo de observación", "Guía especializado", "Transporte nocturno", "Refrigerio", "Seguro"],
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4"
    },
    {
      id: 6,
      name: "Ruta del Café Llanero",
      location: "Fincas Cafeteras",
      description: "Recorrido por fincas cafeteras locales con proceso completo desde el grano hasta la taza.",
      longDescription: "Tour especializado en café de los llanos orientales. Visita a 2 fincas cafeteras, proceso completo de producción, cata dirigida de diferentes variedades y taller de barismo básico.",
      rating: 4.4,
      duration: "6 horas",
      price: "$50.000",
      maxPeople: 15,
      category: "Agro-turismo",
      difficulty: "Fácil",
      includes: ["Visita a fincas", "Cata de café", "Taller de barismo", "Almuerzo campestre", "Transporte"],
      image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e"
    }
  ];

  const openWaze = (location: string) => {
    window.open(`https://waze.com/ul?q=${encodeURIComponent(location)}`, '_blank');
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // Desplaza la ventana al inicio (arriba izquierda)
  }, []); // Se ejecuta cada vez que el ID o la ruta cambian



  return (
    <div className="min-h-screen bg-white">
      <TopBar currentLanguage={currentLanguage} onLanguageChange={setCurrentLanguage} />
      <Header activeSection="experiences" onSectionChange={() => {}} language={currentLanguage} />
      
      <main className="pt-24">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4 flex items-center justify-center gap-3">
              <Camera className="w-10 h-10 text-green-600" />
              Experiencias Únicas
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Vive aventuras inolvidables y descubre la auténtica cultura llanera con nuestras experiencias especializadas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {experiences.map((experience) => (
              <Card key={experience.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden bg-white">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={experience.image} 
                    alt={experience.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <Badge className="absolute top-4 right-4 bg-green-500 text-white">
                    {experience.category}
                  </Badge>
                  <div className="absolute top-4 left-4 flex items-center bg-white/90 rounded-full px-2 py-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="ml-1 text-sm font-medium">{experience.rating}</span>
                  </div>
                  <Badge className="absolute bottom-4 left-4 bg-white/90 text-foreground">
                    {experience.difficulty}
                  </Badge>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-foreground group-hover:text-green-600 transition-colors">
                    {experience.name}
                  </CardTitle>
                  <div className="space-y-1">
                    <div className="flex items-center text-muted-foreground">
                      <MapPin className="w-4 h-4 mr-1" />
                      {experience.location}
                    </div>
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
                  </div>
                </CardHeader>
                
                <CardContent>
                  <p className="text-muted-foreground mb-4">{experience.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-medium mb-2">Incluye:</h4>
                    <div className="flex flex-wrap gap-1">
                      {experience.includes.slice(0, 3).map((item, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {item}
                        </Badge>
                      ))}
                      {experience.includes.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{experience.includes.length - 3} más
                        </Badge>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-green-600">{experience.price}</span>
                    <span className="text-sm text-muted-foreground">por persona</span>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => openWaze(experience.location)}
                      className="flex items-center gap-1"
                    >
                      <img src="https://cdn.icon-icons.com/icons2/2699/PNG/512/waze_logo_icon_168210.png" alt="Waze" className="w-4 h-4" />
                      Ruta
                    </Button>
                    <Button size="sm" className="flex-1">Ver Detalles</Button>
                    <Button size="sm" className="flex-1">
                      <Calendar className="w-4 h-4 mr-1" />
                      Reservar
                    </Button>
                  </div>
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

export default Experiences;
