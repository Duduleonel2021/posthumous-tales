
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import BiographyDetail from "./pages/BiographyDetail";
import BiographyEdit from "./pages/BiographyEdit";
import BiographyPost from "./pages/BiographyPost";
import CategoryPage from "./pages/CategoryPage";
import AlphabeticalBiographies from "./pages/AlphabeticalBiographies";
import DeathsOnThisDay from "./pages/DeathsOnThisDay";
import TagPage from "./pages/TagPage";
import AuthorsList from "./pages/AuthorsList";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/biografia/:id" element={<BiographyDetail />} />
          <Route path="/biografia/:id/editar" element={<BiographyEdit />} />
          <Route path="/postar-biografia" element={<BiographyPost />} />
          <Route path="/categoria/:slug" element={<CategoryPage />} />
          <Route path="/biografias" element={<AlphabeticalBiographies />} />
          <Route path="/mortes-neste-dia" element={<DeathsOnThisDay />} />
          <Route path="/autor/:id" element={<BiographyDetail />} />
          <Route path="/autores" element={<AuthorsList />} />
          <Route path="/tag/:slug" element={<TagPage />} />
          
          {/* Legacy routes for backward compatibility */}
          <Route path="/biography/:id" element={<BiographyDetail />} />
          <Route path="/biography/:id/edit" element={<BiographyEdit />} />
          <Route path="/post-biography" element={<BiographyPost />} />
          <Route path="/category/:slug" element={<CategoryPage />} />
          <Route path="/biographies" element={<AlphabeticalBiographies />} />
          <Route path="/deaths-on-this-day" element={<DeathsOnThisDay />} />
          <Route path="/authors" element={<AuthorsList />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
