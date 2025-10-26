import { useParams, useNavigate, Navigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Star, Clock, Phone, Users, Globe, Mail, Calendar, ArrowLeft, Receipt, Percent } from "lucide-react";
import { TopBar } from "@/components/TopBar";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useState } from "react";
import { Business, FeaturedBusiness } from "@/interface/interface"
import { useCachedData } from "@/hooks/useCachedData";
import { dataService } from "@/services/dataService";

/* interface FeaturedBusiness {
  id: string;
  name: string;
  category: string;
  address: string;
  rating: number;
  review_count: number;
  price: string;
  taxes: number;
  tax_percentage: number;
  phone: string;
  email: string;
  website: string;
  address: string;
  schedule: string;
  capacity: string;
  images: string[];
  amenities: string[];
  description: string;
  isSponsor: boolean;
} */

const FeaturedBusinessDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentLanguage, setCurrentLanguage] = useState("es");

  const { data: allFeaturedBusinesses, isLoading } = useCachedData<Business[]>({
    cacheKey: 'featured-businesses',
    fetchFn: dataService.getBusinesses
  });
  console.log(allFeaturedBusinesses);
  
  // const businessId: number = Number(id);
  /* 
  */
//  console.log(id);
 console.log(id) 
  // const business = allFeaturedBusinesses?.find(b => b.id == id);
  // console.log(business);

  // Datos de empresas destacadas - en una app real vendrían del backend
  /* const featuredBusinesses: Record<string, Business> = {
    "1": {
      id: 1,
      name: "Hotel Orinoco Plaza",
      category: "Hotel",
      address: "Centro, Villavicencio",
      rating: 4.8,
      review_count: 256,
      price: "Desde $150.000/noche",
      taxes: 28500,
      tax_percentage: 19,
      phone: "+57 8 123 4567",
      email: "reservas@hotelorinoco.com",
      website: "www.hotelorinoco.com",
      address: "Carrera 30 #15-45, Centro, Villavicencio",
      schedule: "Check-in: 3:00 PM | Check-out: 12:00 PM",
      capacity: "120 huéspedes",
      images: [
        "https://images.unsplash.com/photo-1566073771259-6a8506099945",
        "https://images.unsplash.com/photo-1564501049412-61c2a3083791",
        "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9"
      ],
      amenities: ["WiFi gratuito", "Piscina", "Spa", "Restaurante", "Parqueadero", "Centro de convenciones", "Gimnasio", "Room Service 24h"],
      description: "Hotel boutique en el corazón de la ciudad con todas las comodidades modernas. Ofrece habitaciones elegantes, restaurante gourmet, spa, piscina y centro de convenciones. Ideal para viajeros de negocios y turistas que buscan comodidad y ubicación privilegiada en Villavicencio.",
      isSponsor: true
    },
    "2": {
      id: 2,
      name: "Restaurante El Llano",
      category: "Restaurante",
      address: "Av. 40, Villavicencio",
      rating: 4.6,
      review_count: 189,
      price: "Desde $35.000/persona",
      taxes: 6650,
      tax_percentage: 19,
      phone: "+57 311 234 5678",
      email: "info@restauranteellano.com",
      website: "www.restauranteellano.com",
      address: "Avenida 40 #25-30, Villavicencio",
      schedule: "Lunes a Domingo: 11:00 AM - 10:00 PM",
      capacity: "80 personas",
      images: [
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
        "https://images.unsplash.com/photo-1552566626-52f8b828add9",
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0"
      ],
      amenities: ["Terraza", "Aire acondicionado", "Música en vivo", "Parqueadero", "WiFi", "Reservas online", "Menú infantil"],
      description: "Auténtica gastronomía llanera en un ambiente tradicional. Especialistas en carne a la llanera, mamona, y platos típicos de la región. Ambiente familiar con presentaciones de música llanera los fines de semana.",
      isSponsor: true
    },
    "3": {
      id: 3,
      name: "Safari Los Ocarros",
      category: "Aventura",
      address: "Bioparque Los Ocarros",
      rating: 4.9,
      review_count: 342,
      price: "Desde $45.000/persona",
      taxes: 8550,
      tax_percentage: 19,
      phone: "+57 320 456 7890",
      email: "tours@safarillocarros.com",
      website: "www.safarillocarros.com",
      address: "Km 3 Vía Puerto López, Villavicencio",
      schedule: "Martes a Domingo: 9:00 AM - 5:00 PM",
      capacity: "30 personas por tour",
      images: [
        "https://images.unsplash.com/photo-1433086966358-54859d0ed716",
        "https://images.unsplash.com/photo-1564760055775-d63b17a55c44",
        "https://images.unsplash.com/photo-1535083783855-76ae62b2914e"
      ],
      amenities: ["Guía profesional", "Transporte incluido", "Refrigerio", "Equipo de seguridad", "Fotografía", "Seguro"],
      description: "Aventura de avistamiento de fauna llanera en su hábitat natural. Recorrido por el bioparque con la oportunidad de observar especies nativas como chigüiros, anacondas, y aves exóticas. Experiencia educativa y emocionante para toda la familia.",
      isSponsor: true
    }
  }; */

  const business = featuredBusinesses[id as string];
  console.log(business)

  if (!business) {
    return <Navigate to="/404" replace />;
  }

  const openWaze = () => {
    window.open(`https://waze.com/ul?q=${encodeURIComponent(business.address)}`, '_blank');
  };

  const handleCall = () => {
    window.address.href = `tel:${business.phone}`;
  };

  const handleEmail = () => {
    window.address.href = `mailto:${business.email}`;
  };

  const handleReservation = () => {
    console.log("Iniciar proceso de reserva para:", business.name);
  };

  return (
    <div className="min-h-screen bg-background">
      <TopBar currentLanguage={currentLanguage} onLanguageChange={setCurrentLanguage} />
      <Header activeSection="home" onSectionChange={() => { }} language={currentLanguage} />

      <main className="pt-24">
        <div className="container mx-auto px-4 py-8">
          <Button
            variant="ghost"
            className="mb-6"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver
          </Button>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="md:col-span-2 relative h-64 md:h-96 overflow-hidden rounded-lg">
              <img
                src={business.images[0]}
                alt={`${business.name} - Principal`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-1 gap-4">
              {business.images.slice(1, 3).map((image, index) => (
                <div key={index} className="relative h-32 md:h-[182px] overflow-hidden rounded-lg">
                  <img
                    src={image}
                    alt={`${business.name} - ${index + 2}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <div>
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <h1 className="text-3xl md:text-4xl font-bold text-foreground">{business.name}</h1>
                  {business.is_sponsor && (
                    <Badge className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground px-3 py-1">
                      ⭐ VIP SPONSOR
                    </Badge>
                  )}
                </div>

                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <Badge variant="outline" className="text-base px-3 py-1">
                    {business.category}
                  </Badge>
                  <div className="flex items-center">
                    <Star className="w-5 h-5 text-yellow-500 fill-current mr-1" />
                    <span className="font-bold text-lg">{business.rating}</span>
                    <span className="text-muted-foreground ml-2">({business.review_count} reseñas)</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span>{business.address}</span>
                  </div>
                </div>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  {business.description}
                </p>
              </div>

              <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
                <CardHeader>
                  <CardTitle className="text-xl">Información de Precios</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-primary">{business.price}</span>
                    </div>
                    <div className="pt-3 border-t border-primary/20">
                      <div className="flex justify-between items-center mb-2">
                        <div className="flex items-center text-muted-foreground">
                          <Receipt className="w-4 h-4 mr-2" />
                          <span>Impuestos incluidos:</span>
                        </div>
                        <span className="font-semibold">${business.taxes.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center text-muted-foreground">
                          <Percent className="w-4 h-4 mr-2" />
                          <span>Porcentaje de impuestos:</span>
                        </div>
                        <span className="font-semibold">{business.tax_percentage}%</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Servicios y Amenidades</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {business.amenities.map((amenity, index) => (
                      <div key={index} className="flex items-center p-3 bg-accent/10 rounded-lg hover:bg-accent/20 transition-colors">
                        <span className="text-sm font-medium">✓ {amenity}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Phone className="w-5 h-5" />
                    Información de Contacto
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <a
                      href={`tel:${business.phone}`}
                      className="flex items-center gap-2 p-2 rounded-lg hover:bg-accent/10 transition-colors"
                    >
                      <Phone className="w-4 h-4 text-primary" />
                      <span className="text-sm">{business.phone}</span>
                    </a>
                    <a
                      href={`mailto:${business.email}`}
                      className="flex items-center gap-2 p-2 rounded-lg hover:bg-accent/10 transition-colors"
                    >
                      <Mail className="w-4 h-4 text-primary" />
                      <span className="text-sm break-all">{business.email}</span>
                    </a>
                    <a
                      href={`https://${business.website}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 p-2 rounded-lg hover:bg-accent/10 transition-colors"
                    >
                      <Globe className="w-4 h-4 text-primary" />
                      <span className="text-sm">{business.website}</span>
                    </a>
                    <div className="flex items-start gap-2 p-2">
                      <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{business.address}</span>
                    </div>
                  </div>

                  <Button
                    className="w-full"
                    onClick={openWaze}
                  >
                    <img
                      src="https://cdn.icon-icons.com/icons2/2699/PNG/512/waze_logo_icon_168210.png"
                      alt="Waze"
                      className="w-4 h-4 mr-2"
                    />
                    Ver Ruta en Waze
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    Información Operativa
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <span className="text-sm text-muted-foreground block mb-1">Horario:</span>
                    <span className="font-medium">{business.schedule}</span>
                  </div>
                  <div className="flex items-center justify-between pt-2 border-t">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-primary" />
                      <span className="text-sm text-muted-foreground">Capacidad:</span>
                    </div>
                    <span className="font-medium">{business.capacity}</span>
                  </div>
                </CardContent>
              </Card>

              <div className="space-y-3">
                <Button
                  className="w-full"
                  size="lg"
                  onClick={handleReservation}
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  Reservar Ahora
                </Button>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={handleCall}
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Llamar Directamente
                </Button>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={handleEmail}
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Enviar Email
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default FeaturedBusinessDetail;