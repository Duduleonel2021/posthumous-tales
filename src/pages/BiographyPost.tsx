
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Save, Plus, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  fullName: z.string().min(2, { message: "Full name is required." }),
  mainImage: z.string().url({ message: "Please enter a valid URL." }),
  birthDate: z.string().min(2, { message: "Birth date is required." }),
  birthPlace: z.string().min(2, { message: "Birth place is required." }),
  deathDate: z.string().min(2, { message: "Death date is required." }),
  deathPlace: z.string().min(2, { message: "Death place is required." }),
  causeOfDeath: z.string().min(2, { message: "Cause of death is required." }),
  category: z.string().min(1, { message: "Please select a category." }),
  summary: z.string().min(10, { message: "Summary must be at least 10 characters." }),
  content: z.string().min(50, { message: "Content must be at least 50 characters." }),
});

const BiographyPost = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [tags, setTags] = useState<string[]>([]);
  const [newTag, setNewTag] = useState("");
  const [socialLinks, setSocialLinks] = useState<{ platform: string; url: string }[]>([]);
  const [newSocialPlatform, setNewSocialPlatform] = useState("");
  const [newSocialUrl, setNewSocialUrl] = useState("");
  const [images, setImages] = useState<{ src: string; alt: string; caption?: string }[]>([]);
  const [newImageUrl, setNewImageUrl] = useState("");
  const [newImageAlt, setNewImageAlt] = useState("");
  const [newImageCaption, setNewImageCaption] = useState("");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      fullName: "",
      mainImage: "",
      birthDate: "",
      birthPlace: "",
      deathDate: "",
      deathPlace: "",
      causeOfDeath: "",
      category: "",
      summary: "",
      content: "",
    },
  });

  const categories = [
    "Arts", "Politics", "Cinema & TV", "Music", "Business", "Literature", 
    "Journalism", "Internet", "Education", "Science", "Crime", "Health", 
    "Fashion", "Sports", "Others"
  ];

  const handleAddTag = () => {
    if (newTag.trim() && !tags.includes(newTag.trim())) {
      setTags(prev => [...prev, newTag.trim()]);
      setNewTag("");
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setTags(prev => prev.filter(tag => tag !== tagToRemove));
  };

  const handleAddSocialLink = () => {
    if (newSocialPlatform.trim() && newSocialUrl.trim()) {
      setSocialLinks(prev => [...prev, {
        platform: newSocialPlatform.trim(),
        url: newSocialUrl.trim()
      }]);
      setNewSocialPlatform("");
      setNewSocialUrl("");
    }
  };

  const handleRemoveSocialLink = (index: number) => {
    setSocialLinks(prev => prev.filter((_, i) => i !== index));
  };

  const handleAddImage = () => {
    if (newImageUrl.trim() && newImageAlt.trim()) {
      setImages(prev => [...prev, {
        src: newImageUrl.trim(),
        alt: newImageAlt.trim(),
        caption: newImageCaption.trim() || undefined
      }]);
      setNewImageUrl("");
      setNewImageAlt("");
      setNewImageCaption("");
    }
  };

  const handleRemoveImage = (index: number) => {
    setImages(prev => prev.filter((_, i) => i !== index));
  };

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    // In a real app, you would send data to an API
    console.log("Form submitted with:", {
      ...values,
      tags,
      socialLinks,
      images
    });
    
    toast({
      title: "Biography Submitted",
      description: "Your biography has been successfully submitted for review.",
    });
    
    // Navigate to home page
    navigate("/");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="mb-6 flex justify-between items-center">
          <Button variant="outline" asChild>
            <div onClick={() => navigate(-1)} className="flex items-center gap-2 cursor-pointer">
              <ArrowLeft className="h-4 w-4" /> Back
            </div>
          </Button>
        </div>
        
        <h1 className="text-3xl font-bold mb-8 text-posthumous-navy">Submit New Biography</h1>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g. Albert Einstein" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g. Albert Hermann Einstein" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="mainImage"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Main Image URL</FormLabel>
                      <FormControl>
                        <Input placeholder="https://example.com/image.jpg" {...field} />
                      </FormControl>
                      <FormMessage />
                      {field.value && (
                        <div className="mt-2">
                          <img 
                            src={field.value} 
                            alt="Main" 
                            className="h-32 object-cover rounded-md" 
                            onError={(e) => {
                              (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1519791883288-dc8bd696e667?q=80&w=1170&auto=format&fit=crop";
                            }}
                          />
                        </div>
                      )}
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="summary"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Summary</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Brief summary of the person's life and significance" 
                          {...field} 
                          rows={3}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="category"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Category</FormLabel>
                      <Select 
                        onValueChange={field.onChange} 
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a category" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {categories.map((category) => (
                            <SelectItem key={category} value={category}>
                              {category}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div>
                  <Label>Tags</Label>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {tags.map((tag, index) => (
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
                  <FormField
                    control={form.control}
                    name="birthDate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Birth Date</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g. March 14, 1879" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="birthPlace"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Birth Place</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g. Ulm, Germany" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="deathDate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Death Date</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g. April 18, 1955" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="deathPlace"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Death Place</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g. Princeton, NJ, USA" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="causeOfDeath"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Cause of Death</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g. Heart failure" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div>
                  <Label>Social Links</Label>
                  <div className="space-y-2 mb-2">
                    {socialLinks.map((link, index) => (
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
              </div>
            </div>
            
            <div>
              <Label>Images Gallery</Label>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mb-4">
                {images.map((image, index) => (
                  <div key={index} className="bg-gray-50 p-2 rounded-lg">
                    <div className="relative">
                      <img 
                        src={image.src} 
                        alt={image.alt}
                        className="w-full h-32 object-cover rounded-md mb-2" 
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1519791883288-dc8bd696e667?q=80&w=1170&auto=format&fit=crop";
                        }}
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
            
            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Biography Content (Markdown)</FormLabel>
                  <FormControl>
                    <Textarea 
                      {...field}
                      rows={10}
                      className="font-mono text-sm"
                      placeholder="Write the biography content using Markdown format..."
                    />
                  </FormControl>
                  <FormDescription>
                    You can use Markdown formatting: ## for headings, * for lists, etc.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <div className="flex justify-end">
              <Button type="submit" className="flex items-center gap-2 bg-posthumous-navy hover:bg-posthumous-gold hover:text-posthumous-navy">
                <Save className="h-4 w-4" /> Submit Biography
              </Button>
            </div>
          </form>
        </Form>
      </main>
      
      <Footer />
    </div>
  );
};

export default BiographyPost;
