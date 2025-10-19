
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Hotel, Utensils, Plus, Home } from "lucide-react";
import { useTranslations } from "@/utils/translations";
import { useAppConfig } from "@/contexts/AppConfigContext";

interface CategoriesSectionProps {
  language: string;
}

export const CategoriesSection = ({ language }: CategoriesSectionProps) => {
  const t = useTranslations(language);
  const { appCategoriesStats } = useAppConfig();

   const categories = appCategoriesStats || [];

  //  console.log(categories);


  /* const categories = [
    {
      name: t.categories.hotels.name,
      description: t.categories.hotels.description,
      icon: Hotel,
      count: 25
    },
    {
      name: t.categories.restaurants.name,
      description: t.categories.restaurants.description,
      icon: Utensils,
      count: 40
    },
    {
      name: t.categories.adventure.name,
      description: t.categories.adventure.description,
      icon: Plus,
      count: 15
    },
    {
      name: t.categories.culture.name,
      description: t.categories.culture.description,
      icon: Home,
      count: 20
    }
  ]; */

  return (
    <section className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
        {t.sections.discover}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category, index) => (
          <Card key={index} className="group hover:shadow-lg transition-all duration-300 cursor-pointer animate-fade-in border-border/50">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                {/* {category.icon} */}
                {/* <category.icon className="w-8 h-8 text-primary-foreground" /> */}
              </div>
              <h3 className="font-semibold text-foreground mb-2">{category.name}</h3>
              <p className="text-muted-foreground text-sm">{category.description}</p>
              <Badge variant="secondary" className="mt-3">
                {category.count} {t.buttons.places}
              </Badge>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
