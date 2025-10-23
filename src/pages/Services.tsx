
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Star, Clock, Phone, Users, Wrench } from "lucide-react";
import { TopBar } from "@/components/TopBar";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useAppConfig } from "@/contexts/AppConfigContext";
import { useCachedData } from "@/hooks/useCachedData";
import { dataService } from "@/services/dataService";
import { ServicesData } from "@/interface/interface";

const Services = () => {
  const { appConfig } = useAppConfig();
  
  const [currentLanguage, setCurrentLanguage] = useState("es");
  const navigate = useNavigate();

  const { data: allServices, isLoading } = useCachedData<ServicesData[]>({
      cacheKey: 'featured-services',
      fetchFn: dataService.getServices
    });

  console.log(allServices)
  // const dataServices = await dataService.getAppConfig()

  /* const services = [
    {
      id: 1,
      name: "Transporte VIP Llanos",
      location: "Villavicencio",
      description: "Servicio de transporte ejecutivo y turístico con vehículos de lujo y conductores profesionales.",
      rating: 4.5,
      price: "Desde $50.000",
      phone: "+57 311 456 7890",
      schedule: "24 horas",
      capacity: "1-15 pasajeros",
      category: "Transporte",
      services: ["Traslados aeropuerto", "Tours personalizados", "Transporte empresarial", "Eventos especiales"],
      image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2",
      isVip: true
    },
    {
      id: 2,
      name: "Guías Turísticos Certificados",
      location: "Toda la región",
      description: "Servicio de guías turísticos especializados en cultura llanera, ecoturismo y aventura.",
      rating: 4.8,
      price: "$80.000/día",
      phone: "+57 320 123 4567",
      schedule: "6:00 AM - 8:00 PM",
      capacity: "1-20 personas",
      category: "Guías Turísticos",
      services: ["Tours culturales", "Ecoturismo", "Aventura", "Fotografía"],
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
    },
    {
      id: 3,
      name: "Alquiler de Equipos de Aventura",
      location: "Centro Comercial Unicentro",
      description: "Alquiler de equipos para actividades de aventura y deportes extremos en los llanos.",
      rating: 4.3,
      price: "Desde $25.000/día",
      phone: "+57 8 345 6789",
      schedule: "8:00 AM - 6:00 PM",
      capacity: "Equipos varios",
      category: "Equipos",
      services: ["Kayaks", "Bicicletas", "Equipo de camping", "Pesca deportiva"],
      image: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f"
    },
    {
      id: 4,
      name: "Servicio de Catering Llanero",
      location: "Villavicencio y alrededores",
      description: "Catering especializado en comida típica llanera para eventos corporativos y sociales.",
      rating: 4.6,
      price: "Desde $35.000/persona",
      phone: "+57 312 567 8901",
      schedule: "Lunes a Domingo",
      capacity: "10-500 personas",
      category: "Catering",
      services: ["Eventos corporativos", "Bodas", "Cumpleaños", "Festivales"],
      image: "https://images.unsplash.com/photo-1555244162-803834f70033"
    },
    {
      id: 5,
      name: "Fotografía y Video Turístico",
      location: "Estudio móvil",
      description: "Servicios profesionales de fotografía y video para capturar tus mejores momentos turísticos.",
      rating: 4.7,
      price: "$120.000/sesión",
      phone: "+57 301 234 5678",
      schedule: "Flexible",
      capacity: "Grupos familiares",
      category: "Fotografía",
      services: ["Sesiones familiares", "Videos promocionales", "Bodas", "Eventos corporativos"],
      image: "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a"
    },
    {
      id: 6,
      name: "Spa y Bienestar Llanos",
      location: "Hotel Orinoco Plaza",
      description: "Servicios de spa y bienestar con tratamientos inspirados en la naturaleza llanera.",
      rating: 4.4,
      price: "Desde $60.000",
      phone: "+57 8 456 7890",
      schedule: "9:00 AM - 7:00 PM",
      capacity: "8 cabinas",
      category: "Spa y Bienestar",
      services: ["Masajes terapéuticos", "Tratamientos faciales", "Aromaterapia", "Yoga"],
      image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef"
    }
  ]; */




  const openWaze = (location: string) => {
    window.open(`https://waze.com/ul?q=${encodeURIComponent(location)}`, '_blank');
  };

  const handleViewDetails = (serviceId: number) => {
    navigate(`/service/${serviceId}`);
  };

  return (
    <div className="min-h-screen bg-white">
      <TopBar currentLanguage={currentLanguage} onLanguageChange={setCurrentLanguage} />
      <Header activeSection="services" onSectionChange={() => {}} language={currentLanguage} />
      
      <main className="pt-24">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4 flex items-center justify-center gap-3">
              <Wrench className="w-10 h-10 text-green-600" />
              Servicios Turísticos
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Servicios especializados para hacer de tu experiencia en Villavicencio algo inolvidable
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allServices.map((service) => (
              <Card key={service.id} className={`group hover:shadow-xl transition-all duration-300 overflow-hidden ${service.isVip ? 'border-2 border-green-200 bg-gradient-to-br from-green-50 to-green-100/50' : 'bg-white'}`}>
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <Badge className="absolute top-4 right-4 bg-green-500 text-white">
                    {service.category}
                  </Badge>
                  <div className="absolute top-4 left-4 flex items-center bg-white/90 rounded-full px-2 py-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="ml-1 text-sm font-medium">{service.rating}</span>
                  </div>
                  {service.is_vip && (
                    <Badge className="absolute bottom-4 left-4 bg-green-600 text-white">
                      ⭐ VIP SPONSOR
                    </Badge>
                  )}
                </div>
                
                <CardHeader>
                  <CardTitle className="text-foreground group-hover:text-green-600 transition-colors">
                    {service.name}
                  </CardTitle>
                  <div className="space-y-1">
                    <div className="flex items-center text-muted-foreground">
                      <MapPin className="w-4 h-4 mr-1" />
                      {service.location}
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {service.schedule}
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        {service.capacity}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-medium mb-2">Servicios:</h4>
                    <div className="flex flex-wrap gap-1">
                      {service.services.slice(0, 3).map((item, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {item}
                        </Badge>
                      ))}
                      {service.services.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{service.services.length - 3} más
                        </Badge>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xl font-bold text-green-600">{service.price_range}</span>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Phone className="w-3 h-3 mr-1" />
                      {service.phone}
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => openWaze(service.location)}
                      className="flex items-center gap-1"
                    >
                      <img src="https://cdn.icon-icons.com/icons2/2699/PNG/512/waze_logo_icon_168210.png" alt="Waze" className="w-4 h-4" />
                      Ruta
                    </Button>
                    <Button 
                      size="sm" 
                      className="flex-1"
                      onClick={() => handleViewDetails(service.id)}
                    >
                      Ver Detalles
                    </Button>
                    <Button size="sm" variant="secondary" className="flex-1">Contactar</Button>
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

export default Services;
