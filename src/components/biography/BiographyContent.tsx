
interface BiographyContentProps {
  content: string;
}

const BiographyContent = ({ content }: BiographyContentProps) => {
  const markdownToHtml = (markdown: string) => {
    // This is a simple markdown parser just for demonstration
    // In a real app, you would use a proper markdown library like marked or remark
    return markdown
      .replace(/^## (.*$)/gm, '<h2 class="text-2xl font-bold mt-8 mb-4">$1</h2>')
      .replace(/\n/g, '<br />');
  };
  
  return (
    <div 
      className="biography-content my-8"
      dangerouslySetInnerHTML={{ __html: markdownToHtml(content) }}
    />
  );
};

export default BiographyContent;
