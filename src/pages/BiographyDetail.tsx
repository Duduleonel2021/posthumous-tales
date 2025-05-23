import React from 'react';
import { useParams } from 'react-router-dom';
import BiographyLayout from '@/components/biography/BiographyLayout';
import BiographyContentContainer from '@/components/biography/BiographyContentContainer';
import MainContent from '@/components/biography/MainContent';
import SidebarContent from '@/components/biography/SidebarContent';
import BiographyExtras from '@/components/biography/BiographyExtras';

// Mock data for this biography
const mockBiography = {
  id: "marie-curie",
  title: "Marie Curie: Pioneira da Radioatividade",
  publishDate: "12 de março de 2023",
  lastUpdate: "15 de abril de 2023",
  author: {
    id: "historia-cientifica",
    name: "Equipe História Científica",
    image: "https://i.pravatar.cc/150?img=32",
    bio: "Especialistas em biografias de cientistas importantes e suas contribuições para a história da ciência."
  },
  category: "Ciência",
  tags: ["Física", "Química", "Radioatividade", "Mulheres na Ciência", "Prêmio Nobel"],
  heroImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Marie_Curie_c1920.jpg/1280px-Marie_Curie_c1920.jpg",
  featuredImages: [
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Marie_Curie_c1920.jpg/800px-Marie_Curie_c1920.jpg",
      alt: "Marie Curie em seu laboratório, 1920",
      caption: "Marie Curie trabalhando em seu laboratório, aproximadamente em 1920."
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Pierre_and_Marie_Curie.jpg/800px-Pierre_and_Marie_Curie.jpg",
      alt: "Marie e Pierre Curie",
      caption: "Marie e Pierre Curie, uma das mais importantes parcerias científicas da história."
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Marie_Sklodowska_Curie_c1898.jpg/800px-Marie_Sklodowska_Curie_c1898.jpg",
      alt: "Marie Curie jovem",
      caption: "Marie Skłodowska Curie em 1898, início de sua carreira científica."
    }
  ],
  fullName: "Maria Salomea Skłodowska-Curie",
  birthDate: "7 de novembro de 1867",
  birthPlace: "Varsóvia, Polônia",
  deathDate: "4 de julho de 1934",
  deathPlace: "Passy, França",
  causeOfDeath: "Anemia aplástica causada por exposição prolongada à radiação",
  website: "https://www.curie.fr/",
  socialLinks: [
    {
      platform: "Instituto Curie",
      url: "https://www.curie.fr/"
    },
    {
      platform: "Museu Curie",
      url: "https://musee.curie.fr/"
    }
  ],
  video: "https://www.youtube.com/embed/dCXbUl5x0cI",
  birthYear: 1867,
  deathYear: 1934,
  content: `
## A Infância e a Educação

Maria Skłodowska nasceu em 7 de novembro de 1867 em Varsóvia, Polônia, então parte do Império Russo. Filha de professores, Maria cresceu em um ambiente que valorizava o conhecimento e a educação, apesar das dificuldades financeiras da família.

Desde cedo, demonstrou extraordinária memória e fascínio pelo aprendizado. No entanto, na Polônia do século XIX, o acesso das mulheres à educação superior era extremamente limitado. Maria e sua irmã Bronisława fizeram um pacto: cada uma trabalharia para financiar os estudos da outra.

## Mudança para Paris e o Início da Carreira Científica

Em 1891, Maria, agora com o nome francês Marie, mudou-se para Paris para estudar física e matemática na Universidade de Sorbonne. Vivendo em condições precárias, frequentemente se alimentando apenas de pão e chá, dedicou-se intensamente aos estudos, graduando-se como a melhor aluna de sua turma.

Em 1894, conheceu Pierre Curie, um físico reconhecido que trabalhava na Escola Superior de Física e Química Industriais. Compartilhando o amor pela ciência, casaram-se em 1895, formando uma das mais importantes parcerias científicas da história.

## A Descoberta da Radioatividade e o Primeiro Prêmio Nobel

Inspirada pelos recentes trabalhos de Henri Becquerel sobre os raios emitidos pelo urânio, Marie decidiu investigar esse fenômeno para seu doutorado. Trabalhando em condições improvisadas em um galpão sem isolamento adequado, ela descobriu que o tório também emitia radiações similares.

Mais importante ainda, percebeu que a pechblenda (minério de urânio) emitia radiações mais intensas do que o urânio puro, sugerindo a existência de elementos desconhecidos. Junto com Pierre, isolou dois novos elementos: o polônio (nomeado em homenagem à sua terra natal) e o rádio.

Em 1903, Marie, Pierre e Henri Becquerel receberam o Prêmio Nobel de Física pelo estudo das radiações. Marie tornou-se a primeira mulher a receber esse prêmio.

## Tragédia Pessoal e Continuidade do Trabalho

Em 1906, Pierre morreu tragicamente atropelado por uma carruagem em Paris. Devastada, Marie assumiu a cadeira de física na Sorbonne, tornando-se a primeira mulher professora na instituição. Criando sozinha suas duas filhas, Irène e Ève, continuou seu trabalho científico com determinação redobrada.

## Segundo Prêmio Nobel e a Primeira Guerra Mundial

Em 1911, Marie recebeu seu segundo Prêmio Nobel, desta vez em Química, pelo isolamento do rádio puro, tornando-se a primeira pessoa a receber o prêmio em duas áreas científicas distintas.

Durante a Primeira Guerra Mundial, Marie desenvolveu unidades móveis de radiografia, conhecidas como "Petites Curies", para diagnosticar ferimentos dos soldados no front. Estima-se que mais de um milhão de soldados foram tratados com ajuda dessas unidades.

## Legado e Últimos Anos

Após a guerra, Marie fundou o Instituto do Rádio em Paris (hoje Instituto Curie), dedicado à pesquisa médica e ao tratamento do câncer. Sua filha Irène seguiu seus passos, e junto com o marido Frédéric Joliot, também recebeu um Prêmio Nobel de Química em 1935.

Anos de exposição à radiação sem proteção adequada (na época os efeitos nocivos eram desconhecidos) comprometeram seriamente a saúde de Marie. Ela faleceu em 4 de julho de 1934, aos 66 anos, devido a uma anemia aplástica provavelmente causada pela exposição prolongada.

Marie Curie foi sepultada ao lado de Pierre no cemitério de Sceaux. Em 1995, seus restos mortais foram transferidos para o Panteão em Paris, tornando-se a primeira mulher a receber esta honra por seus méritos próprios.

Seu legado inclui não apenas suas descobertas científicas revolucionárias, mas também a inspiração para gerações de cientistas, especialmente mulheres, que enfrentaram barreiras de gênero na ciência. Os elementos que ela descobriu e o fenômeno da radioatividade transformaram a física moderna e abriram caminho para avanços na medicina, energia e inúmeras outras áreas.
  `,
  quotes: [
    {
      text: "Nada na vida deve ser temido, somente compreendido. Agora é hora de compreender mais para temer menos.",
      author: "Marie Curie"
    },
    {
      text: "Você não pode esperar construir um mundo melhor sem melhorar as pessoas. Cada um de nós deve trabalhar para o seu próprio aperfeiçoamento.",
      author: "Marie Curie"
    }
  ]
};

// Mock data for related biographies
const relatedBiographies = [
  {
    id: "albert-einstein",
    name: "Albert Einstein",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Albert_Einstein_Head.jpg",
    birthYear: 1879,
    deathYear: 1955,
    category: "Ciência",
    summary: "Físico teórico alemão que desenvolveu a teoria da relatividade, um dos pilares da física moderna."
  },
  {
    id: "niels-bohr",
    name: "Niels Bohr",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Niels_Bohr.jpg",
    birthYear: 1885,
    deathYear: 1962,
    category: "Ciência",
    summary: "Físico dinamarquês que fez contribuições fundamentais para a compreensão da estrutura atômica e da mecânica quântica."
  },
  {
    id: "isaac-newton",
    name: "Isaac Newton",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/39/GodfreyKneller-IsaacNewton-1689.jpg",
    birthYear: 1643,
    deathYear: 1727,
    category: "Ciência",
    summary: "Matemático, físico, astrônomo e autor inglês, amplamente reconhecido como um dos cientistas mais influentes de todos os tempos."
  },
  {
    id: "rosalind-franklin",
    name: "Rosalind Franklin",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/ec/Rosalind_Franklin_%28crop%29.jpg",
    birthYear: 1920,
    deathYear: 1958,
    category: "Ciência",
    summary: "Química e cristalógrafa de raios-X cujo trabalho foi central para a compreensão da estrutura do DNA."
  }
];

const BiographyDetail = () => {
  const { id } = useParams();
  const biography = mockBiography; // In a real app, you would fetch this based on the ID
  
  // In a production app, this would be the full URL of the current page
  const pageUrl = `https://meusite.com.br/biografia/${id}`;

  // Main content including the main article and extras
  const mainContentSection = (
    <>
      {/* Main Content */}
      <MainContent biography={biography} pageUrl={pageUrl} />
      
      {/* Comments and Related Biographies */}
      <BiographyExtras 
        biographyId={biography.id}
        categoryName={biography.category}
        relatedBiographies={relatedBiographies}
      />
    </>
  );

  return (
    <BiographyLayout
      heroImage={biography.heroImage}
      title={biography.title}
      publishDate={biography.publishDate}
      category={biography.category}
    >
      <BiographyContentContainer
        mainContent={mainContentSection}
        sidebarContent={<SidebarContent biography={biography} />}
      />
    </BiographyLayout>
  );
};

export default BiographyDetail;
