import { BiographyCardProps } from "@/components/BiographyCard";

// Mock for featured biographies on the homepage
export const featuredBiographies = [
  {
    id: "albert-einstein",
    name: "Albert Einstein",
    image: "https://images.unsplash.com/photo-1621868910236-f9011ace5edb?q=80&w=1170&auto=format&fit=crop",
    years: "1879-1955",
    category: "Science",
    summary: "German-born theoretical physicist who developed the theory of relativity, one of the two pillars of modern physics (alongside quantum mechanics). His work is also known for its influence on the philosophy of science. He is best known to the general public for his mass–energy equivalence formula E = mc²."
  },
  {
    id: "marie-curie",
    name: "Marie Curie",
    image: "https://images.unsplash.com/photo-1521989996401-5aa6f852bdd1?q=80&w=1170&auto=format&fit=crop",
    years: "1867-1934",
    category: "Science",
    summary: "Polish and naturalized-French physicist and chemist who conducted pioneering research on radioactivity. She was the first woman to win a Nobel Prize, the first person to win a Nobel Prize twice, and the only person to win a Nobel Prize in two different scientific fields."
  },
  {
    id: "martin-luther-king",
    name: "Martin Luther King Jr.",
    image: "https://images.unsplash.com/photo-1597781914467-a5b53605311c?q=80&w=1170&auto=format&fit=crop",
    years: "1929-1968",
    category: "Politics",
    summary: "American Baptist minister and activist who became the most visible spokesperson and leader in the American civil rights movement from 1955 until his assassination in 1968. King advanced civil rights through nonviolence and civil disobedience, inspired by his Christian beliefs and the nonviolent activism of Mahatma Gandhi."
  }
];

// Mock for categories with biographies
export const categoryBiographies: Record<string, BiographyCardProps[]> = {
  arts: [
    {
      id: "vincent-van-gogh",
      name: "Vincent Van Gogh",
      image: "https://images.unsplash.com/photo-1647951867235-58a63dc3b131?q=80&w=1170&auto=format&fit=crop",
      birthYear: 1853,
      deathYear: 1890,
      category: "Arts",
      summary: "Dutch post-impressionist painter who posthumously became one of the most famous and influential figures in Western art history."
    },
    {
      id: "frida-kahlo",
      name: "Frida Kahlo",
      image: "https://images.unsplash.com/photo-1613177697412-b1b56eea5f29?q=80&w=1170&auto=format&fit=crop",
      birthYear: 1907,
      deathYear: 1954,
      category: "Arts",
      summary: "Mexican painter known for her many portraits, self-portraits, and works inspired by the nature and artifacts of Mexico."
    },
    {
      id: "salvador-dali",
      name: "Salvador Dalí",
      image: "https://images.unsplash.com/photo-1654106534703-172aa16c4c85?q=80&w=1074&auto=format&fit=crop",
      birthYear: 1904,
      deathYear: 1989,
      category: "Arts",
      summary: "Spanish surrealist artist renowned for his technical skill, precise draftsmanship, and the striking and bizarre images in his work."
    },
    {
      id: "pablo-picasso",
      name: "Pablo Picasso",
      image: "https://images.unsplash.com/photo-1652094936371-18031b0d3f91?q=80&w=1074&auto=format&fit=crop",
      birthYear: 1881,
      deathYear: 1973,
      category: "Arts",
      summary: "Spanish painter, sculptor, printmaker, ceramicist and theatre designer who spent most of his adult life in France."
    }
  ],
  politics: [
    {
      id: "winston-churchill",
      name: "Winston Churchill",
      image: "https://images.unsplash.com/photo-1625391567441-1120380aedc0?q=80&w=1170&auto=format&fit=crop",
      birthYear: 1874,
      deathYear: 1965,
      category: "Politics",
      summary: "British statesman, army officer, and writer who served as Prime Minister of the United Kingdom from 1940 to 1945, during the Second World War, and again from 1951 to 1955."
    },
    {
      id: "mahatma-gandhi",
      name: "Mahatma Gandhi",
      image: "https://images.unsplash.com/photo-1601553592080-eac889948807?q=80&w=1170&auto=format&fit=crop",
      birthYear: 1869,
      deathYear: 1948,
      category: "Politics",
      summary: "Indian lawyer, anti-colonial nationalist and political ethicist who employed nonviolent resistance to lead India to independence from British rule."
    },
    {
      id: "martin-luther-king",
      name: "Martin Luther King Jr.",
      image: "https://images.unsplash.com/photo-1597781914467-a5b53605311c?q=80&w=1170&auto=format&fit=crop",
      birthYear: 1929,
      deathYear: 1968,
      category: "Politics",
      summary: "American Baptist minister and activist who became the most visible spokesperson and leader in the American civil rights movement."
    },
    {
      id: "nelson-mandela",
      name: "Nelson Mandela",
      image: "https://images.unsplash.com/photo-1594785314409-545f1848bf4f?q=80&w=1170&auto=format&fit=crop",
      birthYear: 1918,
      deathYear: 2013,
      category: "Politics",
      summary: "South African anti-apartheid revolutionary, political leader, and philanthropist who served as President of South Africa from 1994 to 1999."
    }
  ],
  science: [
    {
      id: "albert-einstein",
      name: "Albert Einstein",
      image: "https://images.unsplash.com/photo-1621868910236-f9011ace5edb?q=80&w=1170&auto=format&fit=crop",
      birthYear: 1879,
      deathYear: 1955,
      category: "Science",
      summary: "Theoretical physicist who developed the theory of relativity, one of the two pillars of modern physics (alongside quantum mechanics)."
    },
    {
      id: "marie-curie",
      name: "Marie Curie",
      image: "https://images.unsplash.com/photo-1521989996401-5aa6f852bdd1?q=80&w=1170&auto=format&fit=crop",
      birthYear: 1867,
      deathYear: 1934,
      category: "Science",
      summary: "Polish and naturalized-French physicist and chemist who conducted pioneering research on radioactivity."
    },
    {
      id: "isaac-newton",
      name: "Isaac Newton",
      image: "https://images.unsplash.com/photo-1475552113915-6fcb52652ba2?q=80&w=1074&auto=format&fit=crop",
      birthYear: 1643,
      deathYear: 1727,
      category: "Science",
      summary: "English mathematician, physicist, astronomer, and author who is widely recognized as one of the most influential scientists of all time."
    },
    {
      id: "stephen-hawking",
      name: "Stephen Hawking",
      image: "https://images.unsplash.com/photo-1636453806635-dba1aab13770?q=80&w=1170&auto=format&fit=crop",
      birthYear: 1942,
      deathYear: 2018,
      category: "Science",
      summary: "English theoretical physicist, cosmologist, and author who was director of research at the Centre for Theoretical Cosmology at the University of Cambridge."
    }
  ],
  music: [
    {
      id: "freddie-mercury",
      name: "Freddie Mercury",
      image: "https://images.unsplash.com/photo-1614149162883-504ce4d13909?q=80&w=1074&auto=format&fit=crop",
      birthYear: 1946,
      deathYear: 1991,
      category: "Music",
      summary: "British singer, songwriter, record producer, and lead vocalist of the rock band Queen."
    },
    {
      id: "david-bowie",
      name: "David Bowie",
      image: "https://images.unsplash.com/photo-1627671908202-ad41e215e626?q=80&w=1170&auto=format&fit=crop",
      birthYear: 1947,
      deathYear: 2016,
      category: "Music",
      summary: "English singer-songwriter and actor. He was a leading figure in the music industry and is regarded as one of the most influential musicians of the 20th century."
    },
    {
      id: "prince",
      name: "Prince",
      image: "https://images.unsplash.com/photo-1617267195889-38cd9dbef495?q=80&w=1170&auto=format&fit=crop",
      birthYear: 1958,
      deathYear: 2016,
      category: "Music",
      summary: "American singer-songwriter, multi-instrumentalist, record producer, dancer, actor, and filmmaker."
    },
    {
      id: "amy-winehouse",
      name: "Amy Winehouse",
      image: "https://images.unsplash.com/photo-1626102297354-059ca098032b?q=80&w=1170&auto=format&fit=crop",
      birthYear: 1983,
      deathYear: 2011,
      category: "Music",
      summary: "English singer and songwriter known for her deep, expressive vocals and eclectic mix of musical genres."
    }
  ]
};

// Mock for a single biography with detailed information
export const sampleBiography = {
  id: "albert-einstein",
  name: "Albert Einstein",
  fullName: "Albert Einstein",
  mainImage: "https://images.unsplash.com/photo-1621868910236-f9011ace5edb?q=80&w=1170&auto=format&fit=crop",
  birthDate: "March 14, 1879",
  birthPlace: "Ulm, Kingdom of Württemberg, German Empire",
  deathDate: "April 18, 1955",
  deathPlace: "Princeton, New Jersey, United States",
  causeOfDeath: "Abdominal aortic aneurysm",
  category: "Science",
  tags: ["Physicist", "Relativity", "Nobel Prize"],
  summary: "German-born theoretical physicist who developed the theory of relativity, one of the two pillars of modern physics (alongside quantum mechanics).",
  content: `
## Early Life and Education

Albert Einstein was born on March 14, 1879, in Ulm, in the Kingdom of Württemberg in the German Empire. His parents were Hermann Einstein, a salesman and engineer, and Pauline Koch. In 1880, the family moved to Munich, where Einstein's father and his uncle Jakob founded Elektrotechnische Fabrik J. Einstein & Cie, a company that manufactured electrical equipment based on direct current.

Einstein's intellectual achievements and originality have made the word "Einstein" synonymous with "genius". In 1894, Hermann and Jakob's company lost a bid to supply the city of Munich with electrical lighting because they lacked the capital to convert their equipment from the direct current (DC) standard to the more efficient alternating current (AC) standard. The loss of the company's bid forced the sale of the Munich factory. In search of business, the Einstein family moved to Italy, first to Milan and a few months later to Pavia.

## Career and Scientific Contributions

Einstein's work is also known for its influence on the philosophy of science. He is best known to the general public for his mass–energy equivalence formula E = mc², which has been dubbed "the world's most famous equation". He received the 1921 Nobel Prize in Physics "for his services to theoretical physics, and especially for his discovery of the law of the photoelectric effect", a pivotal step in the development of quantum theory.

His intellectual achievements and originality resulted in "Einstein" becoming synonymous with "genius". In 1905, a year sometimes described as his annus mirabilis (miracle year), Einstein published four groundbreaking papers. These outlined the theory of the photoelectric effect, explained Brownian motion, introduced special relativity, and demonstrated mass-energy equivalence.

## Later Life and Legacy

Einstein visited New York City for the first time on 2 April 1921, where he received an official welcome by Mayor John Francis Hylan, followed by three weeks of lectures and receptions. He went on to deliver several lectures at Columbia University and Princeton University, and in Washington, he accompanied representatives of the National Academy of Science on a visit to the White House.

On his return to Europe he was the guest of the British statesman and philosopher Viscount Haldane in London, where he met several renowned scientific, intellectual, and political figures, and delivered a lecture at King's College London. Einstein also published an essay, "My First Impression of the U.S.A.", in July 1921, in which he tried briefly to describe some characteristics of Americans, much as had Alexis de Tocqueville, who published his own impressions in Democracy in America (1835).

Einstein died in Princeton Hospital early in the morning of April 18, 1955, at the age of 76, having continued his work at the Institute for Advanced Study until near the end. During the autopsy, the pathologist of Princeton Hospital, Thomas Stoltz Harvey, removed Einstein's brain for preservation without the permission of his family, in the hope that the neuroscience of the future would be able to discover what made Einstein so intelligent.
  `,
  images: [
    {
      src: "https://images.unsplash.com/photo-1621868910236-f9011ace5edb?q=80&w=1170&auto=format&fit=crop",
      alt: "Albert Einstein",
      caption: "Albert Einstein, circa 1921"
    },
    {
      src: "https://images.unsplash.com/photo-1636453806635-dba1aab13770?q=80&w=1170&auto=format&fit=crop",
      alt: "Einstein's equations",
      caption: "Einstein's field equations of general relativity"
    },
    {
      src: "https://images.unsplash.com/photo-1593012759782-b8404846c30a?q=80&w=1170&auto=format&fit=crop",
      alt: "Einstein later in life",
      caption: "Einstein in his later years"
    }
  ],
  video: "https://www.youtube.com/embed/watch?v=Uvpw6Jh1WGQ",
  website: "https://www.einstein-website.de/",
  socialLinks: [
    {
      platform: "Historical Archive",
      url: "https://www.einstein-website.de/z_information/links.html"
    },
    {
      platform: "Einstein Papers Project",
      url: "https://www.einstein.caltech.edu/"
    }
  ]
};

// Mock deaths for the "Today" widget
export const mockDeaths = [
  {
    id: "albert-einstein",
    name: "Albert Einstein",
    deathDate: "1955-04-18"
  },
  {
    id: "marie-curie",
    name: "Marie Curie",
    deathDate: "1934-07-04"
  },
  {
    id: "martin-luther-king",
    name: "Martin Luther King Jr.",
    deathDate: "1968-04-04"
  },
  {
    id: "vincent-van-gogh",
    name: "Vincent Van Gogh",
    deathDate: new Date().toISOString().split('T')[0].replace(/-\d+$/, `-${new Date().getDate()}`)
  },
  {
    id: "frida-kahlo",
    name: "Frida Kahlo",
    deathDate: new Date().toISOString().split('T')[0].replace(/-\d+$/, `-${new Date().getDate()}`)
  },
  {
    id: "william-shakespeare",
    name: "William Shakespeare",
    deathDate: new Date().toISOString().split('T')[0].replace(/-\d+$/, `-${new Date().getDate()}`)
  }
];
