import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import { AppConfigProvider } from "@/contexts/AppConfigContext";
import Index from "./pages/Index";
import Contact from "./pages/Contact";
import News from "./pages/News";
import Institutional from "./pages/Institutional";
import ExploreDestinations from "./pages/ExploreDestinations";
import Events from "./pages/Events";
import Hotels from "./pages/Hotels";
import HotelDetail from "./pages/HotelDetail";
import ReservationPage from "./pages/ReservationPage";
import Restaurants from "./pages/Restaurants";
import Experiences from "./pages/Experiences";
import Services from "./pages/Services";
import Adventures from "./pages/Adventures";
import Culture from "./pages/Culture";
import BusinessDetail from "./pages/BusinessDetail";
import FeaturedBusinessDetail from "./pages/FeaturedBusinessDetail";

import SponsorDetail from "./pages/SponsorDetail";
import DiscoverVillavicencio from "./pages/DiscoverVillavicencio";
import DiscoverHotels from "./pages/DiscoverHotels";
import DiscoverRestaurants from "./pages/DiscoverRestaurants";
import DiscoverAdventure from "./pages/DiscoverAdventure";
import DiscoverCulture from "./pages/DiscoverCulture";
import AdminDashboard from "./pages/AdminDashboard";
import TourOperatorDashboard from "./pages/TourOperatorDashboard";
import BusinessOwnerDashboard from "./pages/BusinessOwnerDashboard";
import UniqueExperiences from "./pages/UniqueExperiences";
import ChangePassword from "./pages/admin/ChangePassword";
import TechnicalSupport from "./pages/admin/TechnicalSupport";
import UserManual from "./pages/admin/UserManual";
import ConfigurationManual from "./pages/admin/ConfigurationManual";
import NotFound from "./pages/NotFound";
import AppConfig from "./pages/admin/AppConfig";
import ServiceDetail from "./pages/ServiceDetail";
import TouristDashboard from "./pages/TouristDashboard";
import GuestDashboard from "./pages/GuestDashboard";
import SystemManual from "./pages/SystemManual";
import TermsOfService from "./pages/TermsOfService";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import SustainableTourism from "./pages/SustainableTourism";
import ChildProtection from "./pages/ChildProtection";
import ReservationPolicies from "./pages/ReservationPolicies";
import CancellationPolicies from "./pages/CancellationPolicies";
import HabeasData from "./pages/HabeasData";
import PointsOfInterest from "./pages/PointsOfInterest";
import AgenciesOperators from "./pages/AgenciesOperators";
import Payment from "./pages/Payment";
import { TopBar } from "./components/TopBar";
import { Header } from "@radix-ui/react-accordion";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AppConfigProvider>
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
          
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/news" element={<News />} />
              <Route path="/institutional" element={<Institutional />} />
              <Route path="/explore-destinations" element={<ExploreDestinations />} />
              <Route path="/events" element={<Events />} />
              <Route path="/hotels" element={<Hotels />} />
              <Route path="/hotel/:id" element={<HotelDetail />} />
              <Route path="/hotel/:hotelId/reservation/:roomId" element={<ReservationPage />} />
              <Route path="/payment" element={<Payment />} />
              <Route path="/restaurants" element={<Restaurants />} />
              <Route path="/experiences" element={<Experiences />} />
              <Route path="/unique-experiences" element={<UniqueExperiences />} />
              <Route path="/services" element={<Services />} />
              <Route path="/service/:id" element={<ServiceDetail />} />
              <Route path="/adventures" element={<Adventures />} />
              <Route path="/culture" element={<Culture />} />
              <Route path="/business/:id" element={<BusinessDetail />} />
              <Route path="/sponsor/:id" element={<SponsorDetail />} />
              <Route path="/discover" element={<DiscoverVillavicencio />} />
              <Route path="/discover/hotels" element={<DiscoverHotels />} />
              <Route path="/discover/restaurants" element={<DiscoverRestaurants />} />
              <Route path="/discover/adventure" element={<DiscoverAdventure />} />
              <Route path="/discover/culture" element={<DiscoverCulture />} />
              <Route path="/featured-business/:id" element={<FeaturedBusinessDetail />} />              
              {/* New Routes */}
              <Route path="/points-of-interest" element={<PointsOfInterest />} />
              <Route path="/agencies-operators" element={<AgenciesOperators />} />
              
              {/* Dashboard Routes */}
              <Route path="/admin/dashboard" element={<AdminDashboard />} />
              <Route path="/tour-operator/dashboard" element={<TourOperatorDashboard />} />
              <Route path="/business-owner/dashboard" element={<BusinessOwnerDashboard />} />
              <Route path="/admin/change-password" element={<ChangePassword />} />
              <Route path="/admin/technical-support" element={<TechnicalSupport />} />
              <Route path="/admin/user-manual" element={<UserManual />} />
              <Route path="/admin/configuration-manual" element={<ConfigurationManual />} />
              <Route path="/admin/app-config" element={<AppConfig />} />
              <Route path="/tourist/dashboard" element={<TouristDashboard />} />
              <Route path="/guest/dashboard" element={<GuestDashboard />} />
              <Route path="/system-manual" element={<SystemManual />} />
              
              {/* Legal and Policy Pages */}
              <Route path="/terms-of-service" element={<TermsOfService />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/sustainable-tourism" element={<SustainableTourism />} />
              <Route path="/child-protection" element={<ChildProtection />} />
              <Route path="/reservation-policies" element={<ReservationPolicies />} />
              <Route path="/cancellation-policies" element={<CancellationPolicies />} />
              <Route path="/habeas-data" element={<HabeasData />} />
              
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </AuthProvider>
    </AppConfigProvider>
  </QueryClientProvider>
);

export default App;
