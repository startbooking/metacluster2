
import { Loader2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useCachedData } from "@/hooks/useCachedData";
import { dataService } from "@/services/dataService";
import { BusinessCard } from "@/components/common/BusinessCard";
import { useAppConfig } from "@/contexts/AppConfigContext";

interface Business {
  id: string;
  name: string;
  category: string;
  address: string;
  rating: number;
  image: string;
  amenities:string;
  specialties:string;
  description: string;
  is_sponsor: boolean;
  price?: string;
  taxes?: number;
  tax_percentage?: number;
}

interface FeaturedBusinessesSectionProps {
  language: string;
}

export const FeaturedBusinessesSection = ({ language }: FeaturedBusinessesSectionProps) => {
  const navigate = useNavigate();
  const { appTexts } = useAppConfig();

  const { data: featuredBusinesses, isLoading } = useCachedData<Business[]>({
    cacheKey: 'featured-businesses',
    fetchFn: dataService.getBusinesses
  });

  // Datos simulados con impuestos para mostrar la funcionalidad
  /* const handleViewDetails = (businessId: string) => {
    navigate(`/sponsor/${businessId}`);
  }; */

const handleViewDetails = (businessId: string) => {
    navigate(`/featured-business/${businessId}`);
  };

  if (isLoading) {
    return (
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              {appTexts?.featured_businesses_title || 'Empresas destacadas'}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Descubre nuestros socios destacados que ofrecen experiencias excepcionales en Villavicencio 
            </p>
          </div>
          <div className="flex justify-center">
            <Loader2 className="w-8 h-8 animate-spin text-primary" />
          </div>
        </div>
      </section>
    );
  }

  const businessesToShow = featuredBusinesses && featuredBusinesses.length > 0 ? featuredBusinesses : [];


  const featuredBusinessesToShow = businessesToShow.slice(0, 3);

    // const businessesToShow = featuredBusinesses && featuredBusinesses.length > 0 ? featuredBusinesses : mockBusinesses;

  // console.log(businessesToShow);

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            {appTexts?.featured_businesses_title || 'Clientes VIP - Sponsors'}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Descubre nuestros socios destacados que ofrecen experiencias excepcionales en Villavicencio y el Meta
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredBusinessesToShow.map((business) => (
            <BusinessCard
              key={business.id}
              id={business.id}
              name={business.name}
              category={business.category}
              address={business.address}
              amenities={business.amenities}
              specialties={business.specialties}
              rating={business.rating}
              image={business.image}
              description={business.description}
              is_sponsor={business.is_sponsor}
              price={business.price}
              taxes={business.taxes}
              tax_percentage={business.tax_percentage}
              onViewDetails={handleViewDetails}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
