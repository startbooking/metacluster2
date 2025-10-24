// src/pages/ExperienceDetailPage.tsx

import { useEffect } from "react";
import { useParams } from "react-router-dom"; // Asumiendo React Router
import { useCachedData } from "@/hooks/useCachedData";
import { dataService } from "@/services/dataService";
import { Experience } from "@/interface/interface";
import ExperienceDetail from "@/components/ExperienceDetail"; // Reutilizamos el componente de detalle
import { TopBar } from "@/components/TopBar";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MapPin } from "lucide-react";

const ExperienceDetailPage = ({ currentLanguage, setCurrentLanguage }) => {
  
  // 1. Obtener el ID de la URL. React Router siempre lo da como string.
  const { id } = useParams<{ id: string }>();

  // 2. Obtener la lista completa de experiencias (lo más eficiente si ya está en caché)
  const { data: allExperiences, isLoading } = useCachedData<Experience[]>({
    cacheKey: 'featured-experiences', // Usamos la misma clave de caché
    fetchFn: dataService.getExperiences // Función para cargar si no está en caché
  });
  
  // 3. Buscar la experiencia específica en la lista usando el ID de la URL
  const foundExperience = allExperiences?.find(exp => exp.id === id);

  // Efecto para desplazar al inicio al cargar la página
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]); 

  if (isLoading) {
    return <div>Cargando detalles de la experiencia...</div>;
  }

  if (!foundExperience) {
    return <div>Experiencia no encontrada o ID inválido.</div>;
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Asumiendo que TopBar y Header necesitan props de idioma */}
      <TopBar currentLanguage={currentLanguage} onLanguageChange={setCurrentLanguage} />
      <Header activeSection="experiences" onSectionChange={() => {}} language={currentLanguage} />
      
      <main className="pt-24">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-8">
             <h1 className="text-3xl font-bold text-foreground flex items-center justify-center gap-2">
               <MapPin className="w-6 h-6 text-green-600" />
               Detalle de {foundExperience.name}
             </h1>
          </div>
          
          {/* Reutiliza el componente ExperienceDetail, sin necesidad de modal/onClose */}
          <ExperienceDetail experience={foundExperience} /> 
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ExperienceDetailPage;