
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Save, Plus, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/components/ui/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { sampleBiography } from "@/data/mockData";

const BiographyEdit = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [loading, setLoading] = useState(true);
  const [biography, setBiography] = useState<any>(null);
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

  const categories = [
    "Arts", "Politics", "Cinema & TV", "Music", "Business", "Literature", 
    "Journalism", "Internet", "Education", "Science", "Crime", "Health", 
    "Fashion", "Others"
  ];

  useEffect(() => {
    // In a real app, this would fetch from an API based on the ID
    // For now, we're using mock data
    setTimeout(() => {
      const data = sampleBiography;
      setBiography(data);
      setFormData({
        name: data.name || "",
        fullName: data.fullName || "",
        mainImage: data.mainImage || "",
        birthDate: data.birthDate || "",
        birthPlace: data.birthPlace || "",
        deathDate: data.deathDate || "",
        deathPlace: data.deathPlace || "",
        causeOfDeath: data.causeOfDeath || "",
        category: data.category || "",
        tags: data.tags || [],
        summary: data.summary || "",
        content: data.content || "",
        images: data.images || [],
        video: data.video || "",
        website: data.website || "",
        socialLinks: data.socialLinks || []
      });
      setLoading(false);
    }, 300);
  }, [id]);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send data to an API
    console.log("Submitting biography data:", formData);
    
    toast({
      title: "Biography Saved",
      description: "Your changes have been successfully saved.",
    });
    
    // Navigate back to the biography detail page
    navigate(`/biography/${id}`);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          <div className="flex justify-center items-center h-96">
            <div className="animate-pulse h-8 w-32 bg-gray-200 rounded"></div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!biography) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Biography not found</h2>
            <Link to="/" className="text-blue-600 hover:underline">
              Return to home page
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="mb-6 flex justify-between items-center">
          <Button variant="outline" asChild>
            <Link to={`/biography/${id}`} className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" /> Back to Biography
            </Link>
          </Button>
        </div>
        
        <h1 className="text-3xl font-bold mb-8 text-posthumous-navy">Edit Biography</h1>
        
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input 
                  id="name" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleInputChange} 
                  required 
                />
              </div>
              
              <div>
                <Label htmlFor="fullName">Full Name</Label>
                <Input 
                  id="fullName" 
                  name="fullName" 
                  value={formData.fullName} 
                  onChange={handleInputChange} 
                  required 
                />
              </div>
              
              <div>
                <Label htmlFor="mainImage">Main Image URL</Label>
                <Input 
                  id="mainImage" 
                  name="mainImage" 
                  value={formData.mainImage} 
                  onChange={handleInputChange} 
                  required 
                />
                {formData.mainImage && (
                  <div className="mt-2">
                    <img 
                      src={formData.mainImage} 
                      alt="Main" 
                      className="h-32 object-cover rounded-md" 
                    />
                  </div>
                )}
              </div>
              
              <div>
                <Label htmlFor="summary">Summary</Label>
                <Textarea 
                  id="summary" 
                  name="summary" 
                  value={formData.summary} 
                  onChange={handleInputChange} 
                  required 
                  rows={3}
                />
              </div>
              
              <div>
                <Label htmlFor="category">Category</Label>
                <Select 
                  value={formData.category} 
                  onValueChange={handleCategoryChange}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a category" />
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
                    placeholder="Add a tag"
                    value={newTag}
                    onChange={(e) => setNewTag(e.target.value)}
                  />
                  <Button type="button" onClick={handleAddTag} size="sm">
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="birthDate">Birth Date</Label>
                  <Input 
                    id="birthDate" 
                    name="birthDate" 
                    value={formData.birthDate} 
                    onChange={handleInputChange} 
                    required 
                  />
                </div>
                
                <div>
                  <Label htmlFor="birthPlace">Birth Place</Label>
                  <Input 
                    id="birthPlace" 
                    name="birthPlace" 
                    value={formData.birthPlace} 
                    onChange={handleInputChange} 
                    required 
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="deathDate">Death Date</Label>
                  <Input 
                    id="deathDate" 
                    name="deathDate" 
                    value={formData.deathDate} 
                    onChange={handleInputChange} 
                    required 
                  />
                </div>
                
                <div>
                  <Label htmlFor="deathPlace">Death Place</Label>
                  <Input 
                    id="deathPlace" 
                    name="deathPlace" 
                    value={formData.deathPlace} 
                    onChange={handleInputChange} 
                    required 
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor="causeOfDeath">Cause of Death</Label>
                <Input 
                  id="causeOfDeath" 
                  name="causeOfDeath" 
                  value={formData.causeOfDeath} 
                  onChange={handleInputChange} 
                  required 
                />
              </div>
              
              <div>
                <Label htmlFor="website">Website</Label>
                <Input 
                  id="website" 
                  name="website" 
                  value={formData.website} 
                  onChange={handleInputChange} 
                />
              </div>
              
              <div>
                <Label>Social Links</Label>
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
                    placeholder="Platform"
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
                  <Button type="button" onClick={handleAddSocialLink} size="sm" className="col-span-1">
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <div>
                <Label htmlFor="video">Video URL (YouTube embed)</Label>
                <Input 
                  id="video" 
                  name="video" 
                  value={formData.video} 
                  onChange={handleInputChange} 
                />
              </div>
            </div>
          </div>
          
          <div>
            <Label>Images Gallery</Label>
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
            </div>
            <div className="grid grid-cols-12 gap-2">
              <Input
                placeholder="Image URL"
                className="col-span-4"
                value={newImageUrl}
                onChange={(e) => setNewImageUrl(e.target.value)}
              />
              <Input
                placeholder="Alt Text"
                className="col-span-3"
                value={newImageAlt}
                onChange={(e) => setNewImageAlt(e.target.value)}
              />
              <Input
                placeholder="Caption (optional)"
                className="col-span-4"
                value={newImageCaption}
                onChange={(e) => setNewImageCaption(e.target.value)}
              />
              <Button type="button" onClick={handleAddImage} size="sm" className="col-span-1">
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <div>
            <Label htmlFor="content">Biography Content (Markdown)</Label>
            <Textarea 
              id="content" 
              name="content" 
              value={formData.content} 
              onChange={handleInputChange} 
              required 
              rows={10}
              className="font-mono text-sm"
            />
          </div>
          
          <div className="flex justify-end">
            <Button type="submit" className="flex items-center gap-2 bg-posthumous-navy hover:bg-posthumous-gold hover:text-posthumous-navy">
              <Save className="h-4 w-4" /> Save Biography
            </Button>
          </div>
        </form>
      </main>
      
      <Footer />
    </div>
  );
};

export default BiographyEdit;
