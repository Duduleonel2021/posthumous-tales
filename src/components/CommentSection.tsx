
import { useState } from "react";
import { User, MessageSquare, Send, ThumbsUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";

interface Comment {
  id: string;
  author: string;
  authorImage?: string;
  content: string;
  date: string;
  likes: number;
}

interface CommentSectionProps {
  comments: Comment[];
  biographyId: string;
}

// Mock comments data for demonstration
const mockComments: Comment[] = [
  {
    id: "1",
    author: "Carlos Silva",
    content: "Biografia muito bem escrita. Adorei aprender mais sobre esta pessoa notável.",
    date: "2 dias atrás",
    likes: 5
  },
  {
    id: "2",
    author: "Ana Souza",
    authorImage: "https://i.pravatar.cc/150?img=29",
    content: "Muito interessante! Não sabia desses detalhes sobre a vida dela. Obrigada por compartilhar.",
    date: "1 semana atrás",
    likes: 12
  }
];

const CommentSection = ({ biographyId }: CommentSectionProps) => {
  const [comments, setComments] = useState<Comment[]>(mockComments);
  const [newComment, setNewComment] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (newComment.trim() === "") return;
    
    // In a real app, this would send the comment to a backend
    const comment: Comment = {
      id: Date.now().toString(),
      author: "Usuário Atual", // Would be the logged-in user's name
      content: newComment,
      date: "Agora",
      likes: 0
    };
    
    setComments([comment, ...comments]);
    setNewComment("");
  };

  const handleLike = (commentId: string) => {
    setComments(
      comments.map(comment => 
        comment.id === commentId 
          ? { ...comment, likes: comment.likes + 1 } 
          : comment
      )
    );
  };

  const loginDemo = () => setIsLoggedIn(true);

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 my-8">
      <h3 className="text-xl font-bold font-playfair text-posthumous-navy mb-6 flex items-center gap-2">
        <MessageSquare className="h-5 w-5" />
        Comentários ({comments.length})
      </h3>
      
      <Separator className="mb-6" />

      {!isLoggedIn ? (
        <div className="bg-posthumous-lightgold/30 p-4 rounded-lg mb-6">
          <p className="text-posthumous-navy mb-4">
            Entre para deixar seu comentário
          </p>
          <div className="flex flex-wrap gap-3">
            <Button 
              onClick={loginDemo}
              className="bg-[#4285F4] hover:bg-[#3367d6] text-white"
            >
              <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="currentColor"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="currentColor"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="currentColor"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
                <path fill="none" d="M1 1h22v22H1z" />
              </svg>
              Entrar com Google
            </Button>
            <Button 
              onClick={loginDemo}
              className="bg-[#1877F2] hover:bg-[#166fe5] text-white"
            >
              <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9.19795 21.5H13.198V13.4901H16.8021L17.198 9.50977H13.198V7.5C13.198 6.94772 13.6457 6.5 14.198 6.5H17.198V2.5H14.198C11.4365 2.5 9.19795 4.73858 9.19795 7.5V9.50977H7.19795L6.80206 13.4901H9.19795V21.5Z" />
              </svg>
              Entrar com Facebook
            </Button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleCommentSubmit} className="mb-8">
          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 rounded-full bg-posthumous-lightgold flex items-center justify-center">
                <User className="h-5 w-5 text-posthumous-navy" />
              </div>
            </div>
            <div className="flex-grow">
              <Textarea
                placeholder="Deixe seu comentário..."
                className="w-full min-h-[100px] p-3"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
              />
              <div className="mt-2 flex justify-end">
                <Button type="submit" className="flex items-center gap-2">
                  <Send className="h-4 w-4" />
                  Publicar Comentário
                </Button>
              </div>
            </div>
          </div>
        </form>
      )}

      {/* Comments list */}
      <div className="space-y-6">
        {comments.map((comment) => (
          <div key={comment.id} className="flex gap-4">
            <div className="flex-shrink-0">
              {comment.authorImage ? (
                <img 
                  src={comment.authorImage} 
                  alt={comment.author} 
                  className="w-10 h-10 rounded-full object-cover"
                />
              ) : (
                <div className="w-10 h-10 rounded-full bg-posthumous-lightgold flex items-center justify-center">
                  <User className="h-5 w-5 text-posthumous-navy" />
                </div>
              )}
            </div>
            <div className="flex-grow">
              <div className="bg-posthumous-gray p-3 rounded-lg">
                <div className="flex justify-between items-center">
                  <p className="font-medium text-posthumous-navy">{comment.author}</p>
                  <span className="text-xs text-gray-500">{comment.date}</span>
                </div>
                <p className="mt-2 text-gray-700">{comment.content}</p>
              </div>
              <div className="mt-2 flex items-center text-sm text-gray-500">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="flex items-center gap-1 text-xs"
                  onClick={() => handleLike(comment.id)}
                >
                  <ThumbsUp className="h-3 w-3" />
                  {comment.likes > 0 && <span>{comment.likes}</span>}
                  Curtir
                </Button>
                <span className="mx-2">•</span>
                <Button variant="ghost" size="sm" className="text-xs">
                  Responder
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentSection;
