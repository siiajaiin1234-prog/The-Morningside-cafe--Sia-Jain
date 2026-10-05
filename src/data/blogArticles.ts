import { BlogArticle } from '../types';

import heroInteriorImg from '../assets/images/cafe_hero_interior_1791168328586.jpg';
import espressoBaristaImg from '../assets/images/espresso_pour_barista_1791168398411.jpg';
import pouroverImg from '../assets/images/pourover_brew_process_1791168413508.jpg';
import bakeryImg from '../assets/images/bakery_pastries_display_1791168426016.jpg';
import roastingImg from '../assets/images/coffee_beans_roasting_1791168438995.jpg';

export const BLOG_ARTICLES: BlogArticle[] = [
  {
    id: 'pour-over-precision-mastery',
    slug: 'pour-over-precision-water-grind-ratios',
    title: 'The Pour-Over Precision: Water Temperature, Grind Size, and Extraction Ratios Explained',
    excerpt: 'A comprehensive technical deep-dive into how 2 degrees of water temperature and micron-level grind distribution unlock nuanced florals in light roasts.',
    category: 'Brew Guides',
    author: {
      name: 'Julian Vance',
      role: 'Head of Quality & Roasting',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    },
    date: 'October 2, 2026',
    readTime: '6 min read',
    coverImage: pouroverImg,
    tags: ['V60', 'Extraction', 'Single Origin', 'Water Chemistry'],
    likes: 42,
    content: {
      intro: 'When preparing a light-roasted Ethiopian washed coffee, many home brewers struggle with either astringent dryness or hollow sourness. The culprit is almost always channeling driven by inconsistent agitation and temperature slump. In this manual, we unpack the fluid dynamics of conical drip brewers and establish a repeatable 1:16 ratio recipe.',
      brewRecipe: {
        method: 'Hario V60 (02 Ceramic)',
        coffeeGrams: 18,
        waterGrams: 288,
        ratio: '1:16',
        grindSize: 'Medium-Fine (650–700 microns)',
        waterTemp: '93°C / 200°F (filtered at 80 ppm TDS)',
        brewTime: '3 min 15 sec',
      },
      sections: [
        {
          heading: '1. The Crucial Role of Water Temperature',
          body: [
            'Volatile aromatic compounds like linalool (jasmine) and citric acids dissolve rapidly at temperatures between 92°C and 94°C. Dropping below 90°C leaves higher-molecular-weight sugars behind, resulting in a thin, vegetal cup.',
            'Conversely, water straight off a rolling boil (99°C+) over-extracts bitter chlorogenic acid derivatives and polyphenols, muddying the delicate stone-fruit sweetness of high-altitude heirloom varietals.',
          ],
          highlight: 'Keep kettle thermal loss in mind: an unheated ceramic brewer will absorb up to 5°C from your slurry unless pre-rinsed with at least 150ml of near-boiling water.',
        },
        {
          heading: '2. The Four-Pour Structure',
          body: [
            'We recommend breaking your pour into four deliberate stages to balance contact time with even saturation.',
          ],
          recipeTable: [
            { step: '0:00 - 0:45', time: 'Bloom', water: '50g', details: 'Gentle spiral, brief swirl to saturate all grounds evenly.' },
            { step: '0:45 - 1:15', time: 'First Pour', water: '130g total', details: 'Center-focused spiral, gentle pour rate of 4g/sec.' },
            { step: '1:15 - 1:50', time: 'Second Pour', water: '210g total', details: 'Outward spiral avoiding filter paper walls.' },
            { step: '1:50 - 2:20', time: 'Final Pour', water: '288g total', details: 'Steady center stream, light tap on rim, flat bed drawdown.' },
          ],
        },
        {
          heading: '3. Evaluating Your Extraction',
          body: [
            'Inspect the coffee bed after full drawdown. It should sit flat like smooth wet sand. If you see deep crevices or grounds climbing high up the paper ribs, channeling occurred. Adjust your pour stream height to stay roughly 3-4 cm above the slurry level to minimize turbulent cratering.',
          ],
        },
      ],
      conclusion: 'Specialty coffee extraction is a conversation with the bean. Keep detailed notes of your grind setting and draw-down time, adjusting by small notches until the aftertaste lingers as clean sweet citrus.',
    },
    comments: [
      {
        id: 'c1',
        author: 'Elena R.',
        date: 'October 3, 2026',
        text: 'Dialed this in with your Sidama beans this morning! That 45-second bloom with the swirl completely eliminated the bitter edge I was getting before.',
      },
      {
        id: 'c2',
        author: 'Marcus Chen',
        date: 'October 4, 2026',
        text: 'What kettle flow rate do you recommend for the final pour? I find my drawdown stalls around 3:45 sometimes.',
      },
    ],
  },
  {
    id: 'ethiopian-yirgacheffe-origin-journey',
    slug: 'ethiopian-yirgacheffe-direct-trade-journey',
    title: 'From Mountain Slopes to Ceramic Cups: Inside Our Direct-Trade Ethiopian Yirgacheffe',
    excerpt: 'Trace our harvest expedition to the Gedeo Zone at 2,100 meters elevation, where smallholder farmers preserve ancestral garden coffee cultivation.',
    category: 'Origin & Sourcing',
    author: {
      name: 'Maya Lin',
      role: 'Green Coffee Buyer',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    },
    date: 'September 28, 2026',
    readTime: '7 min read',
    coverImage: roastingImg,
    tags: ['Ethiopia', 'Direct Trade', 'Heirloom', 'Sustainability'],
    likes: 58,
    content: {
      intro: 'High in the mist-shrouded highlands of southern Ethiopia, coffee is not an industrial commodity grown in monoculture rows. It grows under the shade of indigenous acacia, false banana (ensete), and forest canopies. This season, our team returned to the small community of Idido to renew our multi-year direct-trade relationship.',
      sections: [
        {
          heading: '1. The Agroforestry Landscape of Gedeo',
          body: [
            'In the Gedeo Zone, human agricultural heritage spans millennia. Farmers cultivate less than one hectare of land on steep volcanic terraces, intercropping coffee trees with food crops that sustain their households.',
            'Because the microclimate offers chilly nights and abundant midday sun, coffee cherries ripen slowly over 9 months. This prolonged maturation concentrates sugars and organic acids within the seed.',
          ],
          highlight: 'Every bag of Morningside Yirgacheffe is paid at 180% above standard Fairtrade minimum pricing, with 5% channeled into the local clean water cooperative.',
        },
        {
          heading: '2. The 36-Hour Wet Fermentation Ritual',
          body: [
            'Cherries are hand-selected at peak ruby ripeness and pulped the same evening. The beans undergo a pristine underwater fermentation in spring-fed stone channels for 36 hours.',
            'Workers carefully wash the slippery mucilage using wooden paddles, then transfer the parchment beans onto raised African drying beds. For 14 to 18 days, the beds are turned by hand every 45 minutes to ensure uniform moisture reduction to exactly 10.5%.',
          ],
        },
        {
          heading: '3. What You Taste in the Cup',
          body: [
            'When roasted on our drum roaster to a gentle first crack, this lot displays an unmistakable jasmine aroma, delicate bergamot acidity, and a crisp, honeydew melon finish that feels like sipping chilled sweet tea.',
          ],
        },
      ],
      conclusion: 'Every morning cup at our cafe directly supports the 140 farming families of Idido. When you sip with intention, you are part of their generational craft.',
    },
    comments: [
      {
        id: 'c3',
        author: 'Liam O’Connor',
        date: 'September 29, 2026',
        text: 'The jasmine notes are unreal. It’s easily the most floral cup I’ve tasted in years.',
      },
    ],
  },
  {
    id: 'espresso-crema-science-decoded',
    slug: 'demystifying-espresso-crema-science-texture',
    title: 'Demystifying Espresso Crema: Science, Texture, and What It Really Tells You',
    excerpt: 'Is thick golden crema a sign of superior coffee, or an overrated byproduct of carbon dioxide? We analyze the chemical physics of the 9-bar shot.',
    category: 'Coffee Science',
    author: {
      name: 'Julian Vance',
      role: 'Head of Quality & Roasting',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    },
    date: 'September 22, 2026',
    readTime: '5 min read',
    coverImage: espressoBaristaImg,
    tags: ['Espresso', 'Crema', 'Extraction Chemistry', 'Barista Skills'],
    likes: 36,
    content: {
      intro: 'For decades, commercial coffee marketing conditioned people to believe that thick, dark crema equals god-tier espresso. While crema is a sign of freshness and proper pump pressure, tasting crema on its own often yields a harsh, bitter punch. Let’s look at what is chemically happening in your portafilter.',
      sections: [
        {
          heading: '1. How Crema Forms: The CO2 Colloid',
          body: [
            'When coffee beans are roasted, carbon dioxide gas becomes trapped inside the cellular matrix of the bean. During espresso extraction, hot water is forced through the tightly packed puck at 9 bars (roughly 130 PSI).',
            'Under this extreme pressure, water supersaturates with CO2 gas. When the liquid escapes the portafilter basket into atmospheric pressure, the gas bubbles expand and become emulsified with coffee oils and melanoidins.',
          ],
          highlight: 'Crema is technically a colloidal foam: microscopic bubbles of carbon dioxide suspended within a lipid-protein matrix.',
        },
        {
          heading: '2. Why You Should Stir Your Espresso',
          body: [
            'An espresso shot naturally stratifies into three distinct layers: the heavy, syrupy bottom (acid and soluble solids), the balanced middle body, and the buoyant top crema (lipids and bitter micro-solids).',
            'If you drink an espresso straight without stirring, your first sip will be unpleasantly bitter and dry, followed by overly sharp acidity. Swirling your cup or using a small spoon homogenizes the layers into a harmonious, chocolate-velvet harmony.',
          ],
        },
        {
          heading: '3. Freshness vs. Over-Gassing',
          body: [
            'Coffee roasted within 48 hours produces an explosive amount of crema that dissipates quickly into spongy foam. Beans rested for 10 to 18 days allow excess CO2 to vent, producing a silken, hazelnut-hued crema with tight micro-foam that sustains aromatic integrity.',
          ],
        },
      ],
      conclusion: 'Don’t judge an espresso by its crema thickness alone; evaluate the tactile mouthfeel, sweetness balance, and clean lingering finish.',
    },
    comments: [
      {
        id: 'c4',
        author: 'Sophia Zhang',
        date: 'September 24, 2026',
        text: 'I started stirring my espresso with the tiny demitasse spoon after reading this at the counter. Total night-and-day difference in balance!',
      },
    ],
  },
  {
    id: 'sourdough-croissants-72-hour-lamination',
    slug: 'sourdough-croissants-72-hour-lamination-journey',
    title: 'The Art of Sourdough Croissants: A 72-Hour Lamination Journey in Our Kitchen',
    excerpt: 'Step inside our early-morning bakery where wild yeast starter, Normandy butter, and 27 delicate folds create pastry perfection.',
    category: 'Bakery & Pairings',
    author: {
      name: 'Chef Camille Dubois',
      role: 'Head Pastry Chef',
      avatar: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=200&q=80',
    },
    date: 'September 15, 2026',
    readTime: '6 min read',
    coverImage: bakeryImg,
    tags: ['Sourdough', 'Pastry', 'Lamination', 'Artisanal Bakery'],
    likes: 89,
    content: {
      intro: 'At 3:30 AM, while the neighbourhood sleeps, our kitchen is kept at a brisk 16°C. That crisp chill is essential because working with laminated dough is a race against melting butterfat. Unlike commercial bakeries that rely on instant chemical yeast and vegetable shortening, our croissants require three days of patience and wild fermentation.',
      sections: [
        {
          heading: '1. Day 1: The Levain & Slow Detrempe',
          body: [
            'Everything begins with our 8-year-old sourdough starter, affectionately named "Flora". We feed her unbleached stoneground wheat flour and cool water, letting her build lactic acidity over 12 hours.',
            'The initial dough (the détrempe) is mixed slowly to develop elasticity without creating too much gluten tension. It rests overnight in refrigeration to allow the flours to fully hydrate and enzymes to break down starches into fermentable sugars.',
          ],
          highlight: 'Slow cold fermentation yields complex lactic notes reminiscent of cultured buttermilk, cutting through the richness of high-fat dairy.',
        },
        {
          heading: '2. Day 2: The Butter Block & 27 Laminated Layers',
          body: [
            'We use cultured 84% butterfat butter, beaten into a flexible, pliable square sheet. The dough is rolled, the butter block is encased like an envelope, and we execute a classic double fold (book fold) followed by a single letter fold.',
            'This creates precisely 27 distinct layers of dough separated by paper-thin sheets of butter. If the butter gets too warm, it absorbs into the flour; if it gets too cold, it fractures and breaks. The temperature window is razor-thin: 14°C to 16°C.',
          ],
        },
        {
          heading: '3. Day 3: Proofing & Deck Oven Baking',
          body: [
            'Each croissant is hand-rolled into its classic crescent silhouette and proofed in our humidity chamber at 26°C for nearly 4 hours until it gently wobbles like a delicate soufflé.',
            'Baked in our stone-deck oven at 205°C, moisture turns to steam instantly, forcing the layers apart into honeycomb chambers before the exterior caramelizes into a deep golden, glass-like shell.',
          ],
        },
      ],
      conclusion: 'Pair our warm sourdough croissant with a double cortado; the natural acidity of the coffee cuts through the cultured butter like harmony in a chord.',
    },
    comments: [
      {
        id: 'c5',
        author: 'Claire Moreau',
        date: 'September 17, 2026',
        text: 'The honeycomb structure on your croissants is world-class. Worth walking across town in the morning rain for!',
      },
    ],
  },
  {
    id: 'cold-brew-vs-flash-chilled-coffee',
    slug: 'cold-brew-vs-flash-chilled-extraction-science',
    title: 'Cold Brew vs. Flash Chilled: Why Hot Extraction Over Ice Preserves Delicate Aromas',
    excerpt: 'Comparing 18-hour immersion cold brew against Japanese-style iced filter coffee: acidity, volatile preservation, and mouthfeel breakdown.',
    category: 'Coffee Science',
    author: {
      name: 'Julian Vance',
      role: 'Head of Quality & Roasting',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    },
    date: 'September 10, 2026',
    readTime: '5 min read',
    coverImage: pouroverImg,
    tags: ['Cold Brew', 'Flash Brew', 'Sensory Analysis', 'Extraction'],
    likes: 47,
    content: {
      intro: 'When the summer heat rolls through our cafe courtyard, iced coffee demand surges tenfold. Yet customers often wonder why our "Flash Chilled Single Origin" tastes so strikingly different from our steeped "Nitro Cold Brew". The answer lies in thermodynamics.',
      sections: [
        {
          heading: '1. What Immersion Cold Brew Misses',
          body: [
            'Cold brew is prepared by steeping coarse coffee grounds in ambient or refrigerated water for 16 to 24 hours. Because water temperature is low (4°C–18°C), solubility is dramatically reduced.',
            'Cold water effectively extracts chocolate, caramel, and heavy nut compounds, but struggles to dissolve the delicate organic acids (malic, phosphoric) and volatile aromatics that give specialty beans their fruity identity. The result is a smooth, chocolatey, low-acid beverage with minimal aromatic bouquet.',
          ],
        },
        {
          heading: '2. The Japanese Flash-Brew Philosophy',
          body: [
            'Flash chilling takes a fundamentally different path: we brew coffee using hot water (93°C) directly over a calculated bed of clean ice cubes.',
            'Hot water rapidly extracts the delicate florals, citrus oils, and crisp sweetness within 3 minutes. The moment the hot elixir hits the ice, it is immediately flash-cooled to 2°C. This thermal shock traps the volatile aromatics inside the liquid rather than allowing them to escape as steam into the room.',
          ],
          highlight: 'Flash brew preserves up to 70% more volatile aroma compounds than room-temperature prolonged cold steeping.',
        },
        {
          heading: '3. When to Choose Each Method',
          body: [
            'If you enjoy a heavy, velvety drink with splash of oat milk and notes of dark fudge, our Nitro Cold Brew is king. If you want a sparkling, tea-like, refreshing cup that showcases crisp peach, jasmine, and citrus notes, always order the Flash Chilled Filter.',
          ],
        },
      ],
      conclusion: 'Neither method is superior; they are simply distinct lenses through which we examine the multifaceted potential of the roasted bean.',
    },
    comments: [
      {
        id: 'c6',
        author: 'Devon Miller',
        date: 'September 12, 2026',
        text: 'Switched from cold brew to the flash brew pour-over after your barista recommended it. Mind blown—tasted like chilled bergamot tea!',
      },
    ],
  },
  {
    id: 'natural-washed-anaerobic-fermentation',
    slug: 'natural-washed-anaerobic-coffee-fermentation-explained',
    title: 'Understanding Natural, Washed, and Anaerobic Coffee Fermentation Processes',
    excerpt: 'How post-harvest processing methods fundamentally reshape the flavour spectrum before beans ever touch our roaster.',
    category: 'Origin & Sourcing',
    author: {
      name: 'Maya Lin',
      role: 'Green Coffee Buyer',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    },
    date: 'September 4, 2026',
    readTime: '8 min read',
    coverImage: roastingImg,
    tags: ['Fermentation', 'Processing', 'Anaerobic', 'Sensory'],
    likes: 64,
    content: {
      intro: 'If you line up three identical Geisha varietal coffee trees from the same hillside in Colombia and process their cherries using three different methods, you will end up with three coffees that taste like completely different fruits. Processing is the transformative bridge between agriculture and brewing.',
      sections: [
        {
          heading: '1. The Washed (Wet) Process: Pristine Clarity',
          body: [
            'In washed coffees, the fruit skin and pulp are mechanically removed immediately after picking. The seeds ferment in clean water tanks to break down the sticky pectin layer before being rinsed spotless.',
            'Because fruit sugars do not dry onto the seed, washed coffees offer unparalleled clarity. You taste the purest expression of soil, elevation, and varietal genetics—think clean lemongrass, crisp green apple, and floral jasmine.',
          ],
        },
        {
          heading: '2. The Natural (Dry) Process: Wild Berry Sweetness',
          body: [
            'In natural processing, whole cherries are dried intact directly on raised beds under the sun for up to a month. As the fruit pulp shrivels into a dark raisin-like husk, its natural yeasts ferment surrounding the seed.',
            'Sugars and fruit esters migrate inward through the parchment. This produces full-bodied cups overflowing with notes of ripe strawberries, blueberry jam, milk chocolate, and winey sweetness.',
          ],
        },
        {
          heading: '3. The Modern Frontier: Anaerobic & Carbonic Maceration',
          body: [
            'Producers now seal fresh cherries inside airtight stainless steel tanks with one-way valves, displacing oxygen with carbon dioxide. Under anaerobic conditions, unique lactic and wild bacterial strains dominate the fermentation pathway.',
            'These lots produce astounding flavour profiles rarely found in traditional coffee: cinnamon sticks, tropical passion fruit, boozy rum, and bubblegum florals.',
          ],
          highlight: 'Fermentation is no longer just a way to strip pulp—it is an artisanal culinary art akin to winemaking and sourdough cultivation.',
        },
      ],
      conclusion: 'Next time you visit our pour-over bar, ask our barista for a side-by-side cupping of our washed vs anaerobic Colombian lots to experience the phenomenon firsthand.',
    },
    comments: [
      {
        id: 'c7',
        author: 'Arjun Patel',
        date: 'September 6, 2026',
        text: 'The anaerobic batch from Huila was a revelation. It literally tasted like candied mango and spices.',
      },
    ],
  },
  {
    id: 'baristas-guide-to-milk-steaming',
    slug: 'baristas-guide-to-milk-steaming-latte-art',
    title: 'A Barista’s Guide to Oat, Almond, and Dairy Milk Steaming for Silky Latte Art',
    excerpt: 'Mastering the whirlpool vortex, micro-foam density, and protein denaturation temperatures for glossy, pourable texture.',
    category: 'Brew Guides',
    author: {
      name: 'Tasha Ramos',
      role: 'Lead Barista & Trainer',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
    },
    date: 'August 28, 2026',
    readTime: '6 min read',
    coverImage: espressoBaristaImg,
    tags: ['Milk Steaming', 'Latte Art', 'Oat Milk', 'Barista Skills'],
    likes: 51,
    content: {
      intro: 'Pouring a crisp rosetta or winged tulip is the hallmark of barista craft, but the secret doesn’t start in the wrist—it starts in the steam pitcher. If your milk resembles bubbly dish soap, no amount of pouring gymnastics will yield clean art.',
      sections: [
        {
          heading: '1. The Aeration vs. Texturing Phase',
          body: [
            'Steaming milk consists of two distinct stages: introducing air (stretching) and folding air into micro-bubbles (rolling).',
            'Submerge the steam tip just 2mm beneath the milk surface. Turn the steam valve fully open. You should hear gentle, rhythmic "chirping" sounds as tiny sips of air enter the milk. Once the pitcher reaches body temperature (around 37°C), elevate the pitcher slightly to bury the tip and engage a vigorous whirlpool.',
          ],
          highlight: 'Never aerate milk after it reaches 40°C. Introducing cold air into warm milk causes fat globules to destabilize and form coarse, stiff bubbles.',
        },
        {
          heading: '2. Dairy vs. Plant-Based Protein Physics',
          body: [
            'Whole cow’s milk contains whey and casein proteins that denature and create an elastic web around air bubbles between 55°C and 65°C.',
            'Oat milk relies on oat starches and added dipotassium phosphate to prevent curdling in acidic coffee. Oat milk requires less initial aeration than dairy because its viscosity builds quickly; steam to a maximum of 60°C to avoid scorched cereal flavors.',
            'Almond milk has significantly lower protein content. Keep aeration extremely light and pour immediately before separation occurs.',
          ],
        },
        {
          heading: '3. The Wet Paint Consistency',
          body: [
            'When finished, swirl the pitcher on the counter. The surface should shine like glossy wet emulsion paint with zero visible bubbles. Tap out any stray air pockets and begin your pour from 5cm above the cup to sink the milk beneath the crema before dropping down for the design.',
          ],
        },
      ],
      conclusion: 'Great latte art is not just cosmetic; micro-foam delivers a silky, sweet tactile pleasure that elevates every sip of your morning flat white.',
    },
    comments: [
      {
        id: 'c8',
        author: 'Leo Sterling',
        date: 'August 30, 2026',
        text: 'The tip about stopping aeration at body temperature solved my oat milk curdling issue completely. Thank you Tasha!',
      },
    ],
  },
  {
    id: 'morning-rituals-neighbourhood-cafe-culture',
    slug: 'morning-rituals-how-neighbourhood-cafes-rebuild-community',
    title: 'Morning Rituals: How Neighbourhood Cafes Rebuild Urban Community in a Digital Age',
    excerpt: 'The sociological power of the "Third Place": why gathering in a shared space over warm ceramic cups remains essential to human well-being.',
    category: 'Cafe Culture',
    author: {
      name: 'Julian Vance',
      role: 'Head of Quality & Roasting',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    },
    date: 'August 20, 2026',
    readTime: '5 min read',
    coverImage: heroInteriorImg,
    tags: ['Community', 'Third Place', 'Cafe Life', 'Urban Living'],
    likes: 73,
    content: {
      intro: 'In 1989, urban sociologist Ray Oldenburg coined the term "The Third Place"—the social surroundings separate from the two primary environments of home ("first place") and workplace ("second place"). In an era dominated by remote work, Slack channels, and algorithmic feeds, the neighbourhood cafe is often the last bastion of spontaneous human solidarity.',
      sections: [
        {
          heading: '1. The Geometry of Public Gathering',
          body: [
            'When we designed Morningside, we deliberately commissioned a 12-seater communal oak table carved from a salvaged wind-felled oak. Sitting elbow-to-elbow with an architect, a graduate student, an elderly retired gardener, and a freelance illustrator creates low-friction social warmth.',
            'There is no requirement to perform or converse; simply sharing silence, warm sunlight, and the soft hum of steaming milk breaks the modern epidemic of isolation.',
          ],
        },
        {
          heading: '2. The Familiar Greeting',
          body: [
            'There is quiet dignity in walking up to the counter and having a barista smile, remember your name, and ask if you would like your usual flat white with single-origin beans.',
            'These micro-interactions, known in psychology as "weak ties," provide vital emotional anchors that make a city neighborhood feel like a living, compassionate village.',
          ],
          highlight: 'A great cafe does not merely sell caffeine; it serves as the beating heart and morning anchor of a neighborhood.',
        },
        {
          heading: '3. Protecting Slow Presence',
          body: [
            'That’s why on weekend mornings, we turn off the Wi-Fi in our garden patio. We invite our patrons to read physical paperbacks, write in notebooks, and talk face-to-face. The results have been miraculous: laughter rings out, dogs get petted, and real friendships blossom.',
          ],
        },
      ],
      conclusion: 'Thank you for making our cafe your home away from home. We are grateful for every morning you share with us.',
    },
    comments: [
      {
        id: 'c9',
        author: 'Hannah Brooks',
        date: 'August 22, 2026',
        text: 'The weekend laptop-free patio policy was the best decision you ever made. I met my current book club friends at that big oak table!',
      },
    ],
  },
  {
    id: 'tasting-notes-sensory-training-guide',
    slug: 'tasting-notes-decoded-training-palate-specialty-coffee',
    title: 'Tasting Notes Decoded: How to Train Your Palate to Spot Jasmine, Stone Fruit & Toffee',
    excerpt: 'Ever wonder how coffee bags list "candied ginger and bergamot" on an unflavored bean? Here is how to unlock sensory memory and taste like a Q-Grader.',
    category: 'Coffee Science',
    author: {
      name: 'Maya Lin',
      role: 'Green Coffee Buyer',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    },
    date: 'August 14, 2026',
    readTime: '7 min read',
    coverImage: pouroverImg,
    tags: ['Sensory', 'Cupping', 'Q Grader', 'Flavor Wheel'],
    likes: 49,
    content: {
      intro: 'When coffee newcomers read a bag description proclaiming "notes of red currant, Meyer lemon blossom, and dark praline", they often ask: "Did you add artificial syrup to this coffee?" The answer is an emphatic NO. All tasting notes represent natural aromatic compounds formed organically inside the seed.',
      sections: [
        {
          heading: '1. The SCA Flavor Wheel & Chemical Analogs',
          body: [
            'Coffee contains over 800 identified volatile aroma compounds—twice as many as wine. When an organic chemist analyzes an Ethiopian coffee exhibiting peach aromas, they discover actual lactones identical to those found in fresh peaches.',
            'When you taste roasted sugars and vanillin, you are experiencing Maillard reaction products created during roasting. The flavor wheel is a shared vocabulary to help us articulate what our olfactory receptors are processing.',
          ],
        },
        {
          heading: '2. The Four Pillars of Palate Calibration',
          body: [
            'To train your palate, isolate these four sensory dimensions when you cup coffee:',
            '1. Acidity: Is it sharp and bright like lemon (citric), crisp like green apple (malic), soft like grape (tartaric), or creamy like yogurt (lactic)?',
            '2. Sweetness: Does it resemble raw honey, cane syrup, brown sugar, or ripe dried fruit?',
            '3. Body / Tactile: Is the mouthfeel light like jasmine tea, silky like whole milk, or viscous like heavy cream?',
            '4. Finish: Does it leave your tongue clean and salivating, or coated with dry astringency?',
          ],
          highlight: '80% of what we perceive as "taste" is actually retronasal olfaction—aromas traveling up the back of your throat to your nasal cavity as you swallow.',
        },
        {
          heading: '3. A Practice Drill You Can Do Today',
          body: [
            'Next time you visit a farmers market, smell fresh herbs, rub lemon peels between your fingertips, and taste different varieties of apples side-by-side. Building sensory memory in your daily life is the fastest way to recognize those same notes in your morning brew.',
          ],
        },
      ],
      conclusion: 'There are no wrong answers in coffee tasting. If a brew reminds you of your grandmother’s blackberry pie, that connection is completely genuine.',
    },
    comments: [
      {
        id: 'c10',
        author: 'Jordan Bell',
        date: 'August 16, 2026',
        text: 'The breakdown between citric and malic acidity totally clicked for me. Now I understand why washed Kenyas taste like juicy green apples!',
      },
    ],
  },
  {
    id: 'zero-waste-cafe-sustainable-practices',
    slug: 'zero-waste-cafe-spent-grounds-compost-packaging',
    title: 'Zero-Waste Cafe Practices: From Spent Coffee Grounds into Local Garden Compost',
    excerpt: 'How we diverged 4.2 tonnes of organic matter from landfills this year through closed-loop partnerships with urban community gardens.',
    category: 'Cafe Culture',
    author: {
      name: 'Chef Camille Dubois',
      role: 'Head Pastry Chef',
      avatar: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=200&q=80',
    },
    date: 'August 5, 2026',
    readTime: '5 min read',
    coverImage: heroInteriorImg,
    tags: ['Sustainability', 'Composting', 'Zero Waste', 'Local Community'],
    likes: 62,
    content: {
      intro: 'Every busy specialty coffee bar generates hundreds of kilograms of wet spent coffee grounds and gallon jugs of milk waste each week. When dumped into standard garbage bins, anaerobic decomposition in landfills produces harmful methane gas. Two years ago, we pledged to redesign our operational footprint.',
      sections: [
        {
          heading: '1. Grounds for Neighborhood Gardens',
          body: [
            'Spent coffee grounds are rich in nitrogen, potassium, and magnesium—vital nutrients for healthy soil biology. Every afternoon, we pack clean 5kg buckets of dried grounds and place them outside our front gate with a sign: "Free Organic Garden Compost for Neighbors".',
            'Local tomato growers and rose gardeners pick up every single bucket within two hours. What would have been waste becomes vibrant soil that grows heirloom produce for the community.',
          ],
        },
        {
          heading: '2. Closed-Loop Milk Pitcher Efficiency',
          body: [
            'Milk waste is one of the highest invisible carbon footprints in foodservice. By installing precise volumetric milk dispensers calibrated to 150ml, 200ml, and 280ml pitcher sizes, we slashed milk waste by 88%.',
            'Our dairy is sourced from a regenerative family dairy farm 35 miles away that delivers in reusable 5-gallon stainless steel milk crates, eliminating over 12,000 plastic jugs annually.',
          ],
          highlight: 'Small daily adjustments in kitchen prep accumulate into tons of preserved resources over the span of a single operating year.',
        },
        {
          heading: '3. 100% Home-Compostable Retail Bags',
          body: [
            'Our retail coffee bean pouches are manufactured from renewable wood pulp and plant cellulose. They break down in home compost piles within 90 days, leaving zero microplastic residue in the earth.',
          ],
        },
      ],
      conclusion: 'True craft is responsible craft. When we honor the earth that gave us these magnificent beans, great coffee tastes even sweeter.',
    },
    comments: [
      {
        id: 'c11',
        author: 'Daphne Rivera',
        date: 'August 7, 2026',
        text: 'I pick up the free coffee grounds every Tuesday for my backyard compost bin! My tomato crop has never looked healthier.',
      },
    ],
  },
  {
    id: 'decaf-without-compromise-swiss-water',
    slug: 'decaf-without-the-compromise-mountain-water-process',
    title: 'Decaf Without the Compromise: The Mountain Water & Swiss Water Difference',
    excerpt: 'Say goodbye to chemical solvent decaffeination. How natural water osmosis preserves complex aromatics for evening coffee lovers.',
    category: 'Coffee Science',
    author: {
      name: 'Julian Vance',
      role: 'Head of Quality & Roasting',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    },
    date: 'July 28, 2026',
    readTime: '5 min read',
    coverImage: roastingImg,
    tags: ['Decaf', 'Swiss Water', 'Health', 'Specialty Coffee'],
    likes: 41,
    content: {
      intro: 'Decaf used to be the joke of the coffee world—stale, rubbery beans stripped of all character using chemical solvents like methylene chloride. But for coffee lovers sensitive to caffeine or looking for an 8 PM post-dinner dessert pairing, premium decaf has entered a renaissance.',
      sections: [
        {
          heading: '1. How Chemical-Free Osmosis Works',
          body: [
            'The Swiss Water and Mountain Water processes utilize pure glacial water and carbon charcoal filters. Green coffee beans are soaked in hot water, allowing caffeine and soluble coffee solids to dissolve out into a liquid called Green Coffee Extract (GCE).',
            'This extract is passed through specialized carbon filters that possess pores calibrated to trap caffeine molecules while letting the delicate flavor oils and chlorogenic acids pass right through.',
          ],
          highlight: 'No synthetic solvents ever touch the beans. The decaffeination process is 99.9% caffeine-free and 100% organic certified.',
        },
        {
          heading: '2. Roasting High-Porosity Decaf Beans',
          body: [
            'Because decaffeinated beans undergo soaking and drying, their cellular structure is more porous and fragile than untreated green coffee.',
            'We roast our decaf lots on a gentle thermal curve with lower initial charge temperatures and high drum airflow to avoid scorching the bean surface. This preserves sweet notes of milk chocolate, toasted hazelnut, and baked plum.',
          ],
        },
        {
          heading: '3. A Cup You Can Be Proud of',
          body: [
            'Try our "Sleepy Willow Decaf" as a nighttime cortado or evening French press. In blind cuppings at our roastery, experienced baristas frequently mistake it for a high-grade balanced Colombian origin.',
          ],
        },
      ],
      conclusion: 'Enjoying exceptional coffee should never be gatekept by caffeine tolerance. Every cup deserves uncompromising care.',
    },
    comments: [
      {
        id: 'c12',
        author: 'Sarah Jenkins',
        date: 'July 30, 2026',
        text: 'As an expecting mom who adores coffee, your Mountain Water decaf has been an absolute lifesaver. It tastes like real coffee!',
      },
    ],
  },
  {
    id: 'home-barista-setup-budget-guide',
    slug: 'home-barista-setup-budget-equipment-vs-gimmicks',
    title: 'Home Barista Setup on a Budget: Equipment That Matters vs. Gimmicks You Can Skip',
    excerpt: 'Stop wasting hundreds on fancy distribution tools before you fix your grinder. The honest hardware breakdown from professional baristas.',
    category: 'Brew Guides',
    author: {
      name: 'Tasha Ramos',
      role: 'Lead Barista & Trainer',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
    },
    date: 'July 19, 2026',
    readTime: '6 min read',
    coverImage: pouroverImg,
    tags: ['Home Brewing', 'Gear Guide', 'Grinder', 'Barista Tips'],
    likes: 83,
    content: {
      intro: 'The specialty coffee gear market is overflowing with titanium-coated WDT needles, ultrasonic puck dampeners, and $300 bluetooth tampers. If you are starting your home coffee journey, what actually moves the needle in the cup?',
      sections: [
        {
          heading: '1. Priority Number One: A Burrs Grinder (Not Blades!)',
          body: [
            'If you take away only one lesson from this article: invest 70% of your budget in a quality burr grinder. Blade grinders chop coffee beans into erratic chunks of boulders and microscopic dust (fines).',
            'When hot water touches this uneven bed, fines over-extract into bitter ash while boulders under-extract into sour acid. A burr grinder with sharp steel conical or flat burrs produces uniform particle size distribution, allowing clean extraction.',
          ],
          highlight: 'Even a modest $80 manual hand grinder with stainless steel burrs will out-perform a $300 machine paired with a blade grinder every single day.',
        },
        {
          heading: '2. Priority Number Two: A 0.1g Scale with Timer',
          body: [
            'Brewing coffee by scoops is like baking a soufflé by handfuls of flour. Beans vary in density depending on roast level and origin; two tablespoons of dark roast weigh far less than two tablespoons of dense light roast.',
            'A basic digital kitchen scale with 0.1-gram precision lets you lock in repeatable brewing ratios.',
          ],
        },
        {
          heading: '3. What You Can Safely Skip for Now',
          body: [
            'You do not need a $200 electric smart kettle with companion iPhone app. A simple stovetop gooseneck kettle gives you identical manual flow rate control.',
            'You also do not need expensive mineral packet sachets if your tap water is reasonably clean and filtered through a simple carbon block pitcher.',
          ],
        },
      ],
      conclusion: 'Start simple, master your ratios, and buy freshly roasted beans from your local roaster. The technique will always trump the gadgets.',
    },
    comments: [
      {
        id: 'c13',
        author: 'Kevin Wu',
        date: 'July 21, 2026',
        text: 'Getting a manual steel burr grinder and a $15 gram scale completely changed my morning routine. Great straightforward advice!',
      },
    ],
  },
];
