
interface BiographyContentProps {
  content: string;
}

const BiographyContent = ({ content }: BiographyContentProps) => {
  const markdownToHtml = (markdown: string) => {
    // First, split the content by paragraphs to handle the first paragraph
    const paragraphs = markdown.split(/^## .*$|^\n+/gm).filter(p => p.trim());
    
    let processedContent = markdown;
    
    // Add drop cap to the first real paragraph (after any headers)
    if (paragraphs.length > 0) {
      const firstParagraph = paragraphs[0].trim();
      if (firstParagraph.length > 0) {
        const firstLetter = firstParagraph.charAt(0);
        const restOfParagraph = firstParagraph.substring(1);
        const replacedParagraph = `<p><span class="float-left text-7xl font-serif font-bold mr-2 mt-1 text-posthumous-gold">${firstLetter}</span>${restOfParagraph}</p>`;
        processedContent = processedContent.replace(firstParagraph, replacedParagraph);
      }
    }
    
    // Process the rest of the markdown
    return processedContent
      .replace(/^## (.*$)/gm, '<h2 class="text-2xl font-bold mt-8 mb-4">$1</h2>')
      .replace(/\n\n/g, '</p><p>') // Handle paragraphs
      .replace(/\n/g, '<br />');
  };
  
  return (
    <div 
      className="biography-content my-8 leading-relaxed text-gray-800"
      dangerouslySetInnerHTML={{ __html: markdownToHtml(content) }}
    />
  );
};

export default BiographyContent;
