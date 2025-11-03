import Image from "next/image";

export const themes: Record<
  string,
  {
    title: string;
    subtitle: string;
    description: string;
    works: {
      src: string;
      title: string;
      year: string;
      medium: string;
      size: string;
    }[];
  }
> = {
  self: {
    title: "Self",
    subtitle:
      'Contemplation on the self, questioning whether the "perfect" self is an illusion, a performance, or merely one side of a whole.',
    description:
      'Contemplation on the self, questioning whether the "perfect" self is an illusion, a performance, or merely one side of a whole. These works navigate the fluid boundaries of identity, probing the spaces between authenticity and artifice, presence and absence. They ask: Is the perfect self an unattainable construct shaped by external forces, a facade carefully maintained, or an inherent part of a greater, multifaceted existence? Through layered forms and shifting hues, the pieces suggest that selfhood is never static—it is constantly constructed, deconstructed, and reimagined.',
    works: [
      {
        src: "/self-untitled-2025.png",
        title: "Untitled",
        year: "2025",
        medium: "Oil on Canvas",
        size: "60cm x 60cm",
      },
      {
        src: "/self-untitled-2-2025.png",
        title: "Untitled",
        year: "2025",
        medium: "Oil on Stretched Canvas",
        size: "60cm x 49cm",
      },
      {
        src: "/self-untitled-3-2025.png",
        title: "Untitled",
        year: "2025",
        medium: "Oil on Canvas",
        size: "50cm x 28cm",
      },
      {
        src: "/self-self3-2025.jpg",
        title: "Self 3",
        year: "2025",
        medium: "Oil on Canvas Paper",
        size: "29cm x 42cm",
      },
      {
        src: "/self-self4-2025.jpg",
        title: "Self 4",
        year: "2025",
        medium: "Oil on Canvas Paper",
        size: "29cm x 42cm",
      },
      {
        src: "/self-selfportrait1-2025.jpg",
        title: "Self Portrait 1",
        year: "2025",
        medium: "Oil on Canvas Paper",
        size: "120cm x 90cm",
      },
      {
        src: "/self-2025-diptych.jpg",
        title: "The Dichotomy of the Perfect Self",
        year: "2025",
        medium: "Oil on Canvas Paper",
        size: "45cm x 90cm each",
      },
    ],
  },

  moth_to_a_flame: {
    title: "Moth to a Flame",
    subtitle:
      "Exploring the Sufi metaphor of the Moth and the Flame.",
    description:
      "This project explores the Sufi metaphor of the Moth and the Flame, symbolizing attraction, sacrifice, and transformation. Initially personifying relationships as human vessels, it evolves into the tree as the flame. Through color, light, and texture, the work reflects longing, vulnerability, and transcendence in human connections and spiritual growth.",
    works: [
      {
        src: "/mtaf-mtaf2-2024.jpg",
        title: "Moth to a Flame(2)",
        year: "2024",
        medium: "Oil on Canvas",
        size: "59cm x 90cm",
      },
      {
        src: "/mtaf-mtaf-2024.jpg",
        title: "Moth to a Flame",
        year: "2025",
        medium: "Oil on Canvas",
        size: "92cm x 92cm",
      },
      {
        src: "/mtaf-wistful-2024.jpg",
        title: "Wistful",
        year: "2024",
        medium: "Oil on Canvas",
        size: "45cm x 31cm",
      },
      {
        src: "/mtaf-longing-2024.jpg",
        title: "Longing",
        year: "2024",
        medium: "Oil on Canvas Paper",
        size: "25cm x 18cm each",
      },
      {
        src: "/mtaf-reflection-2024.png",
        title: "Reflection",
        year: "2025",
        medium: "Oil on Canvas Paper",
        size: "35.5cm x 50cm",
      },
      {
        src: "/mtaf-reflection2-2024.png",
        title: "Reflection 2",
        year: "2025",
        medium: "Oil on Canvas Paper",
        size: "35.5cm x 50cm",
      },
    ],
  },

  lost_time: {
    title: "In Search of Lost Time",
    subtitle:
      "Exploring the elusive nature of memory and its transformation through time",
    description:
      "This series explores the elusive nature of memory and its transformation through time, aligning with my ongoing examination of the intersection between personal history and the physical spaces that shape identity. I construct landscapes both tangible and intangible—spaces where time is fluid, slipping between the gaps of past and present, reality and dream. These paintings invite the viewer into a contemplative exploration of what remains when time itself is lost, leaving only traces of experiences that have shaped the self. The abstracted forms and layered materials serve as a metaphor for the fragmented nature of memory and the search for continuity in the midst of life’s impermanence.",
    works: [
      {
        src: "/losttime-insearchoflosttime-2024.jpg",
        title: "In Search of Lost Time",
        year: "2024",
        medium: "Acrylic and Oil on Paper",
        size: "95cm x 116cm",
      },
      {
        src: "/losttime-crackinthewall-2024.jpg",
        title: "Crack in the Wall",
        year: "2024",
        medium: "Oil on Canvas",
        size: "119cm x 128cm",
      },
    ],
  },

  isolation: {
    title: "Isolation",
    subtitle:
      "Delving into the spaces where individuals find themselves disconnected from the world around them.",
    description:
      "The series delves into the spaces where individuals find themselves disconnected from the world around them—places both literal and metaphorical—expressing the tensions between being physically alone and feeling emotionally estranged. Visual narratives that evoke the sensation of confinement and distance whether it be in moments of self-reflection, social estrangement, or existential separation. The ambiguity of the landscapes in this series offers no clear resolution, but instead invites a meditative exploration of solitude’s impact, encouraging a deeper understanding of how isolation can both define and transform one’s existence.",
    works: [
      {
        src: "/isolation-untitled-2024.png",
        title: "Untitled",
        year: "2024",
        medium: "Oil on Canvas",
        size: "25cm x 18cm",
      },
      {
        src: "/isolation-sense-2022.jpg",
        title: "Sense",
        year: "2022",
        medium: "Acrylic on Paper",
        size: "",
      },
    ],
  },

  liminality: {
    title: "Liminality",
    subtitle:
      "The spaces in between, where boundaries blur and transformation occurs.",
    description:
      "Through these works, I explore the concept of thresholds—the spaces in between, where boundaries blur and transformation occurs. These works reflect the feelings of uncertainty and transition, capturing moments when one stands at the edge of something, neither fully here nor there. I use layered textures and fragmented forms to evoke the tension between presence and absence, between what is known and unknown. In these pieces, I seek to embody the emotional complexity of navigating these in-between spaces, where clarity is elusive and change is imminent. Liminality speaks to those moments of flux in life, where new possibilities emerge from the ambiguity of what we are leaving behind and what is yet to unfold.",
    works: [
      {
        src: "/liminality-areuhere-2021.jpg",
        title: "Are you here?",
        year: "2021",
        medium: "Acrylic on Paper",
        size: "40cm x 60cm",
      },
      {
        src: "/liminality-untitled-2021.jpg",
        title: "Untitled",
        year: "2021 (Unavailable - Stolen)",
        medium: "Acrylic on Paper",
        size: "40cm x 60cm",
      },
    ],
  },



  // Add more themes here
};
