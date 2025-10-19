import { Home } from "lucide-react";
import { useAppConfig } from "@/contexts/AppConfigContext";
import TitleWithLineBreak from "@/utils/TitleWithLineBreak";

interface LogoSectionProps {
  onHomeClick: () => void;
}

export const LogoSection = ({ onHomeClick }: LogoSectionProps) => {
  const { appConfig } = useAppConfig();
  return (
    <div 
      className="flex items-center gap-3 cursor-pointer group flex-shrink-0"
      onClick={onHomeClick}
    >
      <div className="w-12 h-12 bg-gray rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform duration-300 pulse-glow">
        <img src={`./images/${appConfig?.app_logo_url}`} alt="" />

      </div>
      <div className="hidden md:block">
          <h1 className="text-xl font-bold text-red-900 transition-colors uppercase leading-5">
            { appConfig?.company_name &&
              <TitleWithLineBreak text={appConfig?.company_name} />

            }
          </h1>
      </div>
      <div className="hidden md:block">
      </div>
    </div>
  );
};