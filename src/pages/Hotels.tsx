import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MapPin, Star, Wifi, Car, Utensils, Dumbbell } from "lucide-react";
import { TopBar } from "@/components/TopBar";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HotelDetail } from "@/components/HotelDetail";
import { useNavigate } from "react-router-dom";
import { useCachedData } from "@/hooks/useCachedData";
import { Business } from "@/interface/interface";
import { dataService } from "@/services/dataService";

const Hotels = () => {
  const [currentLanguage, setCurrentLanguage] = useState("es");
  const navigate = useNavigate();

  const { data: allHotels, isLoading } = useCachedData<Business[]>({
    cacheKey: 'featured-hotels',
    fetchFn: dataService.getHotels
  });

  console.log(allHotels)

  const accommodations = {
    hoteles: [
      {
        id: 1,
        name: "Hotel Orinoco Plaza",
        location: "Centro, Villavicencio",
        description: "Hotel de lujo con vista panorámica a los llanos orientales.",
        rating: 4.8,
        price: "$150.000",
        amenities: ["Wifi", "Parking", "Restaurante", "Gimnasio"],
        image: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
        phone: "+57 8 123 4567",
        email: "reservas@orinoco.com",
        website: "www.hotelorinoco.com"
      },
      {
        id: 2,
        name: "GHL Hotel Villavicencio",
        location: "Zona Rosa, Villavicencio",
        description: "Hotel ejecutivo con todas las comodidades modernas.",
        rating: 4.6,
        price: "$120.000",
        amenities: ["Wifi", "Parking", "Restaurante"],
        image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716",
        phone: "+57 8 234 5678",
        email: "info@ghl.com",
        website: "www.ghl.com"
      }
    ],
    glamping: [
      {
        id: 3,
        name: "Llanos Glamping Experience",
        location: "Vereda El Carmen",
        description: "Experiencia de glamping en medio de la naturaleza llanera.",
        rating: 4.9,
        price: "$80.000",
        amenities: ["Wifi", "Desayuno"],
        image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
        phone: "+57 310 123 4567",
        email: "glamping@llanos.com"
      }
    ],
    cabanas: [
      {
        id: 4,
        name: "Cabañas Rio Guatiquía",
        location: "Río Guatiquía",
        description: "Cabañas rústicas junto al río con vista espectacular.",
        rating: 4.5,
        price: "$60.000",
        amenities: ["Parking", "Restaurante"],
        image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9",
        phone: "+57 320 234 5678",
        email: "cabanas@guatiquia.com"
      }
    ],
    fincas: [
      {
        id: 5,
        name: "Finca Los Llanos",
        location: "Vereda Apiay",
        description: "Finca turística con actividades de agroturismo.",
        rating: 4.7,
        price: "$100.000",
        amenities: ["Wifi", "Parking", "Desayuno"],
        image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86",
        phone: "+57 315 345 6789",
        email: "finca@llanos.com"
      }
    ]
  };

  console.log(accommodations);

  const getAmenityIcon = (amenity: string) => {
    switch (amenity) {
      case "Wifi": return <Wifi className="w-4 h-4" />;
      case "Parking": return <Car className="w-4 h-4" />;
      case "Restaurante": return <Utensils className="w-4 h-4" />;
      case "Gimnasio": return <Dumbbell className="w-4 h-4" />;
      default: return null;
    }
  };

  const AccommodationCard = ({ item }: { item: any }) => (
    <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
      <div className="relative h-48 overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute top-4 right-4 flex items-center bg-white/90 rounded-full px-2 py-1">
          <Star className="w-4 h-4 text-yellow-500 fill-current" />
          <span className="ml-1 text-sm font-medium">{item.rating}</span>
        </div>
      </div>

      <CardHeader>
        <CardTitle className="text-foreground group-hover:text-primary transition-colors">
          {item.name}
        </CardTitle>
        <div className="flex items-center text-muted-foreground">
          <MapPin className="w-4 h-4 mr-1" />
          {item.location}
        </div>
      </CardHeader>

      <CardContent>
        <p className="text-muted-foreground mb-4">{item.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {item.amenities.map((amenity: string, index: number) => (
            <Badge key={index} variant="outline" className="flex items-center gap-1">
              {getAmenityIcon(amenity)}
              {amenity}
            </Badge>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-primary">{item.price}/noche</span>
          <Button size="sm" onClick={() => navigate(`/hotel/${item.id}`)}>
            Ver Detalles
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // Desplaza la ventana al inicio (arriba izquierda)
  }, []); // Se ejecuta cada vez que el ID o la ruta cambian


  return (
    <div className="min-h-screen bg-background">
      <TopBar currentLanguage={currentLanguage} onLanguageChange={setCurrentLanguage} />
      <Header activeSection="businesses" onSectionChange={() => { }} language={currentLanguage} />

      <main className="pt-24">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Alojamiento en Villavicencio
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Encuentra el lugar perfecto para tu estadía en los llanos orientales
            </p>
          </div>

          <Tabs defaultValue="hoteles" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="hoteles">Hoteles</TabsTrigger>
              <TabsTrigger value="glamping">Glamping</TabsTrigger>
              <TabsTrigger value="cabanas">Cabañas</TabsTrigger>
              <TabsTrigger value="fincas">Fincas</TabsTrigger>
            </TabsList>

            <TabsContent value="hoteles" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {accommodations.hoteles.map((hotel) => (
                  <AccommodationCard key={hotel.id} item={hotel} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="glamping" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {accommodations.glamping.map((glamping) => (
                  <AccommodationCard key={glamping.id} item={glamping} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="cabanas" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {accommodations.cabanas.map((cabana) => (
                  <AccommodationCard key={cabana.id} item={cabana} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="fincas" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {accommodations.fincas.map((finca) => (
                  <AccommodationCard key={finca.id} item={finca} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Hotels;
