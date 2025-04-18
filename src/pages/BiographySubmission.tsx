
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
  ArrowLeft, Save, BookOpen, FileText, 
  User, Calendar, MapPin, MessageSquareQuote, 
  Image, Tag, FileVideo, Globe 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const BiographySubmission = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: "",
    fullName: "",
    birthDate: "",
    birthPlace: "",
    deathDate: "",
    deathPlace: "",
    causeOfDeath: "",
    summary: "",
    content: "",
    category: "",
    mainImage: "",
    video: "",
    tags: "",
    quotes: "",
  });

  const categories = [
    "Arts", "Politics", "Cinema & TV", "Music", 
    "Business", "Literature", "Science", "Sports"
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted biography:", formData);
    
    toast({
      title: "Biografia Enviada",
      description: "Sua biografia foi enviada com sucesso e está em análise.",
    });
    
    setTimeout(() => {
      navigate("/");
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <Button 
          variant="outline" 
          onClick={() => navigate(-1)} 
          className="mb-6 flex items-center gap-2"
        >
          <ArrowLeft className="h-4 w-4" /> Voltar
        </Button>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-playfair text-posthumous-navy flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-posthumous-gold" />
                  Enviar Nova Biografia
                </CardTitle>
                <CardDescription>
                  Compartilhe a história de uma figura histórica notável. Todas as submissões passam por revisão.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="flex items-center gap-1">
                          <User className="h-4 w-4" /> Nome
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Ex: Albert Einstein"
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="fullName" className="flex items-center gap-1">
                          <FileText className="h-4 w-4" /> Nome Completo
                        </Label>
                        <Input
                          id="fullName"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          placeholder="Ex: Albert Einstein"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="birthDate" className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" /> Data de Nascimento
                        </Label>
                        <Input
                          id="birthDate"
                          name="birthDate"
                          value={formData.birthDate}
                          onChange={handleInputChange}
                          placeholder="Ex: 14 de março de 1879"
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="birthPlace" className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" /> Local de Nascimento
                        </Label>
                        <Input
                          id="birthPlace"
                          name="birthPlace"
                          value={formData.birthPlace}
                          onChange={handleInputChange}
                          placeholder="Ex: Ulm, Alemanha"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="deathDate" className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" /> Data de Falecimento
                        </Label>
                        <Input
                          id="deathDate"
                          name="deathDate"
                          value={formData.deathDate}
                          onChange={handleInputChange}
                          placeholder="Ex: 18 de abril de 1955"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="deathPlace" className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" /> Local de Falecimento
                        </Label>
                        <Input
                          id="deathPlace"
                          name="deathPlace"
                          value={formData.deathPlace}
                          onChange={handleInputChange}
                          placeholder="Ex: Princeton, New Jersey, EUA"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="causeOfDeath" className="flex items-center gap-1">
                        <FileText className="h-4 w-4" /> Causa da Morte
                      </Label>
                      <Input
                        id="causeOfDeath"
                        name="causeOfDeath"
                        value={formData.causeOfDeath}
                        onChange={handleInputChange}
                        placeholder="Ex: Aneurisma de aorta"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="category" className="flex items-center gap-1">
                        <Tag className="h-4 w-4" /> Categoria
                      </Label>
                      <Select 
                        value={formData.category} 
                        onValueChange={(value) => handleSelectChange("category", value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione uma categoria" />
                        </SelectTrigger>
                        <SelectContent>
                          {categories.map((category) => (
                            <SelectItem key={category} value={category}>
                              {category}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="summary" className="flex items-center gap-1">
                        <FileText className="h-4 w-4" /> Resumo
                      </Label>
                      <Textarea
                        id="summary"
                        name="summary"
                        value={formData.summary}
                        onChange={handleInputChange}
                        placeholder="Breve resumo sobre a biografia..."
                        rows={3}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="content" className="flex items-center gap-1">
                        <FileText className="h-4 w-4" /> Conteúdo Completo
                      </Label>
                      <Textarea
                        id="content"
                        name="content"
                        value={formData.content}
                        onChange={handleInputChange}
                        placeholder="Conteúdo detalhado da biografia..."
                        rows={10}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="mainImage" className="flex items-center gap-1">
                        <Image className="h-4 w-4" /> URL da Imagem Principal
                      </Label>
                      <Input
                        id="mainImage"
                        name="mainImage"
                        value={formData.mainImage}
                        onChange={handleInputChange}
                        placeholder="URL da imagem principal"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="video" className="flex items-center gap-1">
                        <FileVideo className="h-4 w-4" /> URL do Vídeo (YouTube)
                      </Label>
                      <Input
                        id="video"
                        name="video"
                        value={formData.video}
                        onChange={handleInputChange}
                        placeholder="URL do vídeo relacionado (embed)"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="tags" className="flex items-center gap-1">
                        <Tag className="h-4 w-4" /> Tags (separadas por vírgula)
                      </Label>
                      <Input
                        id="tags"
                        name="tags"
                        value={formData.tags}
                        onChange={handleInputChange}
                        placeholder="Ex: física, ciência, relatividade"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="quotes" className="flex items-center gap-1">
                        <MessageSquareQuote className="h-4 w-4" /> Citações (uma por linha)
                      </Label>
                      <Textarea
                        id="quotes"
                        name="quotes"
                        value={formData.quotes}
                        onChange={handleInputChange}
                        placeholder="Citações importantes da pessoa biografada..."
                        rows={4}
                      />
                    </div>
                  </div>
                  
                  <Button type="submit" className="w-full bg-posthumous-navy hover:bg-posthumous-gold hover:text-posthumous-navy transition-colors flex items-center justify-center gap-2">
                    <Save className="h-4 w-4" /> Enviar Biografia
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
          
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-playfair text-posthumous-navy">
                  Diretrizes de Submissão
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium mb-1">Foco em Figuras Notáveis</h4>
                  <p className="text-sm text-gray-600">Biografias devem ser sobre pessoas que fizeram contribuições significativas em suas áreas.</p>
                </div>
                
                <div>
                  <h4 className="font-medium mb-1">Veracidade Histórica</h4>
                  <p className="text-sm text-gray-600">Todas as informações devem ser verificáveis e baseadas em fontes confiáveis.</p>
                </div>
                
                <div>
                  <h4 className="font-medium mb-1">Imagens e Vídeos</h4>
                  <p className="text-sm text-gray-600">Use apenas mídias com direitos de uso apropriados ou em domínio público.</p>
                </div>
                
                <div>
                  <h4 className="font-medium mb-1">Estilo de Escrita</h4>
                  <p className="text-sm text-gray-600">Mantenha um tom objetivo e informativo, evitando opiniões pessoais.</p>
                </div>
                
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-sm text-gray-500 italic">Todas as submissões passarão por um processo de revisão antes da publicação.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BiographySubmission;
