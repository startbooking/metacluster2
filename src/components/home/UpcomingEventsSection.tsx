
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin } from "lucide-react";
import { useTranslations } from "@/utils/translations";

interface UpcomingEventsSectionProps {
  language: string;
}

export const UpcomingEventsSection = ({ language }: UpcomingEventsSectionProps) => {
  const t = useTranslations(language);

  const upcomingEvents = [
    {
      title: language === "en" 
        ? "Llanero Festival 2024"
        : language === "fr"
        ? "Festival Llanero 2024"
        : "Festival Llanero 2024",
      date: language === "en"
        ? "July 15-18, 2024"
        : language === "fr"
        ? "15-18 Juillet 2024"
        : "15-18 Julio 2024",
      description: language === "en"
        ? "The most important cultural event of the plains with joropo music, coleo and typical gastronomy."
        : language === "fr"
        ? "L'événement culturel le plus important des plaines avec musique joropo, coleo et gastronomie typique."
        : "El evento cultural más importante de los llanos con música joropo, coleo y gastronomía típica.",
      location: language === "en"
        ? "Founders Park"
        : language === "fr"
        ? "Parc des Fondateurs"
        : "Parque Los Fundadores",
      price: t.labels.free,
      isFree: true
    },
    {
      title: language === "en"
        ? "Los Ocarros Photographic Safari"
        : language === "fr"
        ? "Safari Photographique Los Ocarros"
        : "Safari Fotográfico Los Ocarros",
      date: language === "en"
        ? "June 25, 2024"
        : language === "fr"
        ? "25 Juin 2024"
        : "25 Junio 2024",
      description: language === "en"
        ? "Unique experience of wildlife watching and photography in their natural habitat."
        : language === "fr"
        ? "Expérience unique d'observation et de photographie de la faune dans son habitat naturel."
        : "Experiencia única de avistamiento y fotografía de fauna llanera en su hábitat natural.",
      location: "Bioparque Los Ocarros",
      price: "$45.000",
      isFree: false
    }
  ];

  return (
    <section className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
        {t.sections.upcoming}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {upcomingEvents.map((event, index) => (
          <Card key={index} className="group hover:shadow-lg transition-all duration-300 animate-fade-in border-border/50">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-foreground group-hover:text-primary transition-colors">
                    {event.title}
                  </CardTitle>
                  <CardDescription className="flex items-center mt-2">
                    <Calendar className="w-4 h-4 mr-1" />
                    {event.date}
                  </CardDescription>
                </div>
                <Badge variant={event.isFree ? "secondary" : "default"}>
                  {event.isFree ? t.labels.free : event.price}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">{event.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground flex items-center">
                  <MapPin className="w-3 h-3 mr-1" />
                  {event.location}
                </span>
                <Button variant="outline" size="sm" className="hover:bg-primary hover:text-primary-foreground transition-colors">
                  {t.buttons.moreInfo}
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
