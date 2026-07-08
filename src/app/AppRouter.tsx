import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AppLayout } from "./layout/AppLayout";
import { AuthLayout } from "./layout/AuthLayout";
import { AuthProvider } from "./auth/AuthProvider";
import { RequireAuth } from "./auth/RequireAuth";
import { Toaster } from "@/components/ui/sonner";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import DashboardPage from "./pages/DashboardPage";
import LeadsPage from "./pages/LeadsPage";
import LeadDetailPage from "./pages/LeadDetailPage";
import NewLeadPage from "./pages/NewLeadPage";
import OrganizationsPage from "./pages/OrganizationsPage";
import CompaniesPage from "./pages/CompaniesPage";
import UsersPage from "./pages/UsersPage";
import CountriesPage from "./pages/CountriesPage";
import StatesPage from "./pages/StatesPage";
import CitiesPage from "./pages/CitiesPage";
import ServiceCategoriesPage from "./pages/ServiceCategoriesPage";
import LeadSourcesPage from "./pages/LeadSourcesPage";
import MarketplacePage from "./pages/MarketplacePage";
import ContractorsPage from "./pages/ContractorsPage";
import SettingsPage from "./pages/SettingsPage";
import NotFoundPage from "./pages/NotFoundPage";

export function AppRouter() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<AuthLayout />}>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
          </Route>
          <Route element={<RequireAuth><AppLayout /></RequireAuth>}>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/leads" element={<LeadsPage />} />
            <Route path="/leads/new" element={<NewLeadPage />} />
            <Route path="/leads/:id" element={<LeadDetailPage />} />
            <Route path="/marketplace" element={<MarketplacePage />} />
            <Route path="/contractors" element={<ContractorsPage />} />
            <Route path="/organizations" element={<OrganizationsPage />} />
            <Route path="/companies" element={<CompaniesPage />} />
            <Route path="/users" element={<UsersPage />} />
            <Route path="/admin/countries" element={<CountriesPage />} />
            <Route path="/admin/states" element={<StatesPage />} />
            <Route path="/admin/cities" element={<CitiesPage />} />
            <Route path="/admin/service-categories" element={<ServiceCategoriesPage />} />
            <Route path="/admin/lead-sources" element={<LeadSourcesPage />} />
            <Route path="/settings" element={<SettingsPage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Toaster />
      </BrowserRouter>
    </AuthProvider>
  );
}
