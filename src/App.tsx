import { lazy, Suspense } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import { AnalyticsProvider } from "@/components/AnalyticsProvider";
import { FacebookPixelProvider } from "@/components/FacebookPixelProvider";
import Index from "./pages/Index";
import IndexEn from "./pages/IndexEn";
import IndexNew from "./pages/IndexNew";
import IndexNewEn from "./pages/IndexNewEn";
const SecuritySpecNew = lazy(() => import("@/pages/SecuritySpecNew"));
const SecuritySpecNewEn = lazy(() => import("@/pages/SecuritySpecNewEn"));
import Financial from "./pages/Financial";
import Defense from "./pages/Defense";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import TermsEn from "./pages/TermsEn";
import PrivacyEn from "./pages/PrivacyEn";
import SecuritySpec from "./pages/SecuritySpec";
import SecuritySpecEn from "./pages/SecuritySpecEn";
import Enterprise from "./pages/Enterprise";
import EnterpriseEn from "./pages/EnterpriseEn";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AnalyticsProvider>
      <FacebookPixelProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <HashRouter>
            <Suspense fallback={
              <div className="flex h-screen items-center justify-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900" />
              </div>
            }>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/new" element={<IndexNew />} />
                <Route path="/new/security-spec" element={<SecuritySpecNew />} />
                <Route path="/new/en" element={<IndexNewEn />} />
                <Route path="/new/en/security-spec" element={<SecuritySpecNewEn />} />
                <Route path="/en" element={<IndexEn />} />
                <Route path="/financial" element={<Financial />} />
                <Route path="/defense" element={<Defense />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/security-spec" element={<SecuritySpec />} />
                <Route path="/en/terms" element={<TermsEn />} />
                <Route path="/en/privacy" element={<PrivacyEn />} />
                <Route path="/en/security-spec" element={<SecuritySpecEn />} />
                <Route path="/enterprise" element={<Enterprise />} />
                <Route path="/en/enterprise" element={<EnterpriseEn />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </HashRouter>
        </TooltipProvider>
      </FacebookPixelProvider>
    </AnalyticsProvider>
  </QueryClientProvider>
);

export default App;
