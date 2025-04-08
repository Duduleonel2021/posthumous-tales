
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Save, Plus, X, Image, Video, Link as LinkIcon, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const BiographyPost = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState('basic');
  
  const [formData, setFormData] = useState({
    name: "",
    fullName: "",
    mainImage: "",
    birthDate: "",
    birthPlace: "",
    deathDate: "",
    deathPlace: "",
    causeOfDeath: "",
    category: "",
    tags: [] as string[],
    summary: "",
    content: "",
    images: [] as { src: string; alt: string; caption?: string }[],
    video: "",
    website: "",
    socialLinks: [] as { platform: string; url: string }[]
  });

  const [newTag, setNewTag] = useState("");
  const [newSocialPlatform, setNewSocialPlatform] = useState("");
  const [newSocialUrl, setNewSocialUrl] = useState("");
  const [newImageUrl, setNewImageUrl] = useState("");
  const [newImageAlt, setNewImageAlt] = useState("");
  const [newImageCaption, setNewImageCaption] = useState("");
  const [newQuote, setNewQuote] = useState("");
  const [newQuoteAuthor, setNewQuoteAuthor] = useState("");
  
  const categories = [
    "Arte", "Política", "Cinema & TV", "Música", "Negócios", "Literatura", 
    "Jornalismo", "Internet", "Educação", "Ciência", "Crime", "Saúde", 
    "Moda", "Esportes", "Outros"
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCategoryChange = (value: string) => {
    setFormData(prev => ({ ...prev, category: value }));
  };

  const handleAddTag = () => {
    if (newTag.trim() && !formData.tags.includes(newTag.trim())) {
      setFormData(prev => ({ 
        ...prev, 
        tags: [...prev.tags, newTag.trim()] 
      }));
      setNewTag("");
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setFormData(prev => ({
      ...prev,
      tags: prev.tags.filter(tag => tag !== tagToRemove)
    }));
  };

  const handleAddSocialLink = () => {
    if (newSocialPlatform.trim() && newSocialUrl.trim()) {
      setFormData(prev => ({
        ...prev,
        socialLinks: [...prev.socialLinks, {
          platform: newSocialPlatform.trim(),
          url: newSocialUrl.trim()
        }]
      }));
      setNewSocialPlatform("");
      setNewSocialUrl("");
    }
  };

  const handleRemoveSocialLink = (index: number) => {
    setFormData(prev => ({
      ...prev,
      socialLinks: prev.socialLinks.filter((_, i) => i !== index)
    }));
  };

  const handleAddImage = () => {
    if (newImageUrl.trim() && newImageAlt.trim()) {
      setFormData(prev => ({
        ...prev,
        images: [...prev.images, {
          src: newImageUrl.trim(),
          alt: newImageAlt.trim(),
          caption: newImageCaption.trim() || undefined
        }]
      }));
      setNewImageUrl("");
      setNewImageAlt("");
      setNewImageCaption("");
    }
  };

  const handleRemoveImage = (index: number) => {
    setFormData(prev => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index)
    }));
  };

  const insertTemplate = (templateType: string) => {
    let template = "";
    
    switch (templateType) {
      case "header":
        template = "\n## Título da Seção\n\nTexto da seção aqui.\n";
        break;
      case "quote":
        template = `\n> ${newQuote || "Insira uma citação aqui."}\n> — ${newQuoteAuthor || "Autor da citação"}\n`;
        setNewQuote("");
        setNewQuoteAuthor("");
        break;
      case "list":
        template = "\n- Item 1\n- Item 2\n- Item 3\n";
        break;
      default:
        return;
    }
    
    setFormData(prev => ({
      ...prev,
      content: prev.content + template
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    const requiredFields = ["name", "mainImage", "birthDate", "birthPlace", "category", "summary", "content"];
    const missingFields = requiredFields.filter(field => !formData[field as keyof typeof formData]);
    
    if (missingFields.length > 0) {
      toast({
        title: "Campos obrigatórios faltando",
        description: "Por favor, preencha todos os campos marcados com *",
        variant: "destructive"
      });
      return;
    }
    
    // In a real app, this would send data to an API
    console.log("Submitting biography data:", formData);
    
    toast({
      title: "Biografia Enviada",
      description: "Sua biografia foi enviada com sucesso e está aguardando aprovação.",
    });
    
    // Navigate to the home page
    navigate("/");
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="mb-6 flex justify-between items-center">
          <Button variant="outline" asChild>
            <Link to="/" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" /> Voltar ao Início
            </Link>
          </Button>
        </div>
        
        <div className="bg-posthumous-navy text-white rounded-xl shadow-xl p-8 mb-10">
          <h1 className="text-3xl md:text-4xl font-bold font-playfair">Enviar Nova Biografia</h1>
          <p className="text-gray-300 mt-2">Compartilhe a história de uma personalidade que impactou o mundo.</p>
        </div>
        
        <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid grid-cols-4 mb-8">
              <TabsTrigger value="basic">Informações Básicas</TabsTrigger>
              <TabsTrigger value="details">Detalhes Biográficos</TabsTrigger>
              <TabsTrigger value="media">Mídia</TabsTrigger>
              <TabsTrigger value="content">Conteúdo</TabsTrigger>
            </TabsList>
            
            <TabsContent value="basic" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="name">Nome <span className="text-red-500">*</span></Label>
                    <Input 
                      id="name" 
                      name="name" 
                      value={formData.name} 
                      onChange={handleInputChange} 
                      placeholder="Ex: Marie Curie" 
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="fullName">Nome Completo</Label>
                    <Input 
                      id="fullName" 
                      name="fullName" 
                      value={formData.fullName} 
                      onChange={handleInputChange} 
                      placeholder="Ex: Maria Salomea Skłodowska-Curie" 
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="mainImage">URL da Imagem Principal <span className="text-red-500">*</span></Label>
                    <Input 
                      id="mainImage" 
                      name="mainImage" 
                      value={formData.mainImage} 
                      onChange={handleInputChange} 
                      placeholder="https://exemplo.com/imagem.jpg" 
                    />
                    {formData.mainImage && (
                      <div className="mt-2">
                        <img 
                          src={formData.mainImage} 
                          alt="Imagem principal" 
                          className="h-32 object-cover rounded-md" 
                        />
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="category">Categoria <span className="text-red-500">*</span></Label>
                    <Select 
                      value={formData.category} 
                      onValueChange={handleCategoryChange}
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
                  
                  <div>
                    <Label>Tags</Label>
                    <div className="flex flex-wrap gap-2 mb-2">
                      {formData.tags.map((tag, index) => (
                        <div key={index} className="flex items-center gap-1 bg-gray-100 px-3 py-1 rounded-md">
                          <span>{tag}</span>
                          <button
                            type="button"
                            onClick={() => handleRemoveTag(tag)}
                            className="text-gray-400 hover:text-red-500"
                          >
                            <X className="h-3 w-3" />
                          </button>
                        </div>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <Input
                        placeholder="Adicionar tag"
                        value={newTag}
                        onChange={(e) => setNewTag(e.target.value)}
                      />
                      <Button type="button" onClick={handleAddTag} size="sm">
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="summary">Resumo <span className="text-red-500">*</span></Label>
                    <Textarea 
                      id="summary" 
                      name="summary" 
                      value={formData.summary} 
                      onChange={handleInputChange} 
                      placeholder="Breve descrição sobre a personalidade" 
                      rows={3}
                    />
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="details" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="birthDate">Data de Nascimento <span className="text-red-500">*</span></Label>
                    <Input 
                      id="birthDate" 
                      name="birthDate" 
                      value={formData.birthDate} 
                      onChange={handleInputChange} 
                      placeholder="Ex: 7 de novembro de 1867" 
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="birthPlace">Local de Nascimento <span className="text-red-500">*</span></Label>
                    <Input 
                      id="birthPlace" 
                      name="birthPlace" 
                      value={formData.birthPlace} 
                      onChange={handleInputChange} 
                      placeholder="Ex: Varsóvia, Polônia" 
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="website">Website</Label>
                    <Input 
                      id="website" 
                      name="website" 
                      value={formData.website} 
                      onChange={handleInputChange} 
                      placeholder="https://exemplo.com" 
                    />
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="deathDate">Data de Falecimento</Label>
                    <Input 
                      id="deathDate" 
                      name="deathDate" 
                      value={formData.deathDate} 
                      onChange={handleInputChange} 
                      placeholder="Ex: 4 de julho de 1934" 
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="deathPlace">Local de Falecimento</Label>
                    <Input 
                      id="deathPlace" 
                      name="deathPlace" 
                      value={formData.deathPlace} 
                      onChange={handleInputChange} 
                      placeholder="Ex: Passy, França" 
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="causeOfDeath">Causa do Falecimento</Label>
                    <Input 
                      id="causeOfDeath" 
                      name="causeOfDeath" 
                      value={formData.causeOfDeath} 
                      onChange={handleInputChange} 
                      placeholder="Ex: Anemia aplástica" 
                    />
                  </div>
                </div>
              </div>
              
              <div>
                <Label>Links Sociais e Sites Oficiais</Label>
                <div className="space-y-2 mb-2">
                  {formData.socialLinks.map((link, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <span className="font-medium">{link.platform}:</span>
                      <span className="text-sm text-blue-600 truncate flex-1">{link.url}</span>
                      <button
                        type="button"
                        onClick={() => handleRemoveSocialLink(index)}
                        className="text-gray-400 hover:text-red-500"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-5 gap-2">
                  <Input
                    placeholder="Plataforma"
                    className="col-span-2"
                    value={newSocialPlatform}
                    onChange={(e) => setNewSocialPlatform(e.target.value)}
                  />
                  <Input
                    placeholder="URL"
                    className="col-span-2"
                    value={newSocialUrl}
                    onChange={(e) => setNewSocialUrl(e.target.value)}
                  />
                  <Button 
                    type="button" 
                    onClick={handleAddSocialLink} 
                    size="sm" 
                    className="col-span-1"
                    variant="outline"
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="media" className="space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <Image className="h-5 w-5 text-posthumous-navy" />
                        <Label className="text-lg font-medium">Galeria de Imagens</Label>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mb-4">
                        {formData.images.map((image, index) => (
                          <div key={index} className="bg-gray-50 p-2 rounded-lg">
                            <div className="relative">
                              <img 
                                src={image.src} 
                                alt={image.alt}
                                className="w-full h-32 object-cover rounded-md mb-2" 
                              />
                              <button
                                type="button"
                                onClick={() => handleRemoveImage(index)}
                                className="absolute top-1 right-1 bg-white p-1 rounded-full text-gray-400 hover:text-red-500"
                              >
                                <X className="h-4 w-4" />
                              </button>
                            </div>
                            <p className="text-sm font-medium truncate">{image.alt}</p>
                            {image.caption && (
                              <p className="text-xs text-gray-500 truncate">{image.caption}</p>
                            )}
                          </div>
                        ))}
                        
                        {formData.images.length === 0 && (
                          <div className="col-span-full flex flex-col items-center justify-center p-8 border-2 border-dashed border-gray-200 rounded-lg">
                            <Image className="h-10 w-10 text-gray-300 mb-2" />
                            <p className="text-gray-500">Nenhuma imagem adicionada</p>
                          </div>
                        )}
                      </div>
                      
                      <div className="grid grid-cols-12 gap-2">
                        <Input
                          placeholder="URL da Imagem"
                          className="col-span-4"
                          value={newImageUrl}
                          onChange={(e) => setNewImageUrl(e.target.value)}
                        />
                        <Input
                          placeholder="Texto Alternativo"
                          className="col-span-3"
                          value={newImageAlt}
                          onChange={(e) => setNewImageAlt(e.target.value)}
                        />
                        <Input
                          placeholder="Legenda (opcional)"
                          className="col-span-4"
                          value={newImageCaption}
                          onChange={(e) => setNewImageCaption(e.target.value)}
                        />
                        <Button 
                          type="button" 
                          onClick={handleAddImage} 
                          size="sm" 
                          className="col-span-1"
                          variant="outline"
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    
                    <div className="mt-8">
                      <div className="flex items-center gap-2 mb-4">
                        <Video className="h-5 w-5 text-posthumous-navy" />
                        <Label htmlFor="video" className="text-lg font-medium">Vídeo</Label>
                      </div>
                      <Input 
                        id="video" 
                        name="video" 
                        value={formData.video} 
                        onChange={handleInputChange} 
                        placeholder="URL do vídeo do YouTube (ex: https://www.youtube.com/embed/XXXX)" 
                      />
                      {formData.video && (
                        <div className="mt-4 aspect-w-16 aspect-h-9">
                          <iframe 
                            src={formData.video} 
                            title="Preview do vídeo"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen
                            className="w-full h-[300px] rounded-lg"
                          ></iframe>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="content" className="space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="mb-4 flex flex-wrap gap-2">
                    <Button 
                      type="button" 
                      variant="outline" 
                      onClick={() => insertTemplate("header")}
                      className="flex items-center gap-1"
                    >
                      <span className="font-bold">H</span> Título
                    </Button>
                    
                    <div className="flex gap-2 items-center">
                      <Button 
                        type="button" 
                        variant="outline" 
                        onClick={() => insertTemplate("quote")}
                        className="flex items-center gap-1"
                      >
                        <Quote className="h-4 w-4" /> Citação
                      </Button>
                      <Input
                        placeholder="Texto da citação"
                        className="w-32"
                        value={newQuote}
                        onChange={(e) => setNewQuote(e.target.value)}
                      />
                      <Input
                        placeholder="Autor"
                        className="w-24"
                        value={newQuoteAuthor}
                        onChange={(e) => setNewQuoteAuthor(e.target.value)}
                      />
                    </div>
                    
                    <Button 
                      type="button" 
                      variant="outline" 
                      onClick={() => insertTemplate("list")}
                      className="flex items-center gap-1"
                    >
                      • Lista
                    </Button>
                  </div>
                  
                  <div>
                    <Label htmlFor="content">Conteúdo da Biografia (Markdown) <span className="text-red-500">*</span></Label>
                    <Textarea 
                      id="content" 
                      name="content" 
                      value={formData.content} 
                      onChange={handleInputChange} 
                      placeholder="Escreva aqui o conteúdo completo da biografia..." 
                      rows={15}
                      className="font-mono text-sm"
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      Use markdown para formatar o texto. ## para títulos de seção, **texto** para negrito, 
                      *texto* para itálico, > para citações, - para listas.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
          
          <div className="flex justify-between items-center mt-8">
            <div className="flex gap-4">
              {activeTab !== "basic" && (
                <Button 
                  type="button" 
                  variant="outline"
                  onClick={() => {
                    const tabs = ["basic", "details", "media", "content"];
                    const currentIndex = tabs.indexOf(activeTab);
                    setActiveTab(tabs[currentIndex - 1]);
                  }}
                >
                  Anterior
                </Button>
              )}
              
              {activeTab !== "content" && (
                <Button 
                  type="button"
                  onClick={() => {
                    const tabs = ["basic", "details", "media", "content"];
                    const currentIndex = tabs.indexOf(activeTab);
                    setActiveTab(tabs[currentIndex + 1]);
                  }}
                >
                  Próximo
                </Button>
              )}
            </div>
            
            <Button 
              type="submit" 
              className="bg-posthumous-navy hover:bg-posthumous-gold hover:text-posthumous-navy flex items-center gap-2"
            >
              <Save className="h-4 w-4" /> Enviar Biografia
            </Button>
          </div>
        </form>
      </main>
      
      <Footer />
    </div>
  );
};

export default BiographyPost;
