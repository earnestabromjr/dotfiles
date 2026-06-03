const UNINSTALL_URL = "https://lorem-ipsum-generator.app/uninstall.html";
chrome.runtime.setUninstallURL(UNINSTALL_URL);

chrome.runtime.onInstalled.addListener((details) => {
  if (details.reason === "update") {
    const currentVersion = chrome.runtime.getManifest().version;
    const previousVersion = details.previousVersion || "";

    if (currentVersion === "1.1" && previousVersion !== "1.1") {
      const updateUrl = "https://lorem-ipsum-generator.app/update_v_1_1.html";
      chrome.tabs.create({ url: updateUrl });
    }
  }
});

const lorem_ipsum_text = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",

  "Suspendisse potenti. Vivamus non arcu tincidunt, congue massa at, porttitor velit. Curabitur lacinia nisl ut turpis convallis, at dictum urna aliquet. Nullam non urna eget felis interdum feugiat. Morbi vel neque elit. Nullam a luctus leo. Integer maximus sapien in bibendum scelerisque.",
  
  "Etiam accumsan urna a mauris dapibus, nec aliquet nunc convallis. Phasellus eget justo et libero ultrices posuere. Cras euismod, arcu nec congue convallis, ipsum nunc cursus nibh, vel condimentum sapien orci non libero. Integer ullamcorper felis sit amet felis placerat, eu convallis lorem iaculis.",
  
  "Nam tempor finibus lorem, nec varius arcu convallis sed. Nunc id orci a neque vehicula malesuada. Donec vehicula libero vel leo convallis, nec tincidunt felis tincidunt. Maecenas euismod tristique leo, vel malesuada ligula malesuada sed. Donec eget libero id leo congue venenatis.",
  
  "Curabitur at felis non libero suscipit fermentum. Duis volutpat, ante et scelerisque luctus, sem nulla placerat leo, at aliquet libero justo id nulla. Integer at dui nec magna posuere fringilla. Nunc euismod bibendum augue. Cras nec ligula velit. Donec in laoreet leo.",
  
  "Phasellus ac eros at urna condimentum lacinia. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed bibendum, sapien a venenatis fermentum, mauris augue cursus turpis, vitae elementum massa orci sit amet massa. In hac habitasse platea dictumst.",
  
  "Donec et urna vel risus feugiat pharetra. Proin id lacus vitae velit accumsan venenatis. Aenean non mi vel nisi lacinia maximus. Duis efficitur, sapien quis bibendum auctor, lectus risus feugiat sapien, ac pulvinar orci est a arcu. Integer id augue vitae urna tristique tempus.",
  
  "Vivamus lacinia lacus vel neque egestas, vitae volutpat purus dapibus. Nullam nec ultricies erat. Etiam ac urna metus. Sed cursus libero id ullamcorper interdum. Donec non urna et erat vehicula porttitor. Vivamus a sagittis dolor. Nulla facilisi. Cras euismod orci at felis cursus, vel vulputate sapien suscipit.",
  
  "Mauris vitae quam in justo dictum sodales. In eget tortor a nunc vehicula tempor. Nam ac tincidunt ipsum, eget accumsan nisi. Praesent porta, magna vitae dapibus pharetra, erat eros efficitur nunc, in mattis lectus libero a velit. Nulla facilisi.",
  
  "Fusce at nisi arcu. Quisque sed dolor nec dui scelerisque dapibus. Sed at purus at sem aliquet luctus. Sed non massa sit amet sapien porttitor ornare. Vivamus pretium, tortor at tempus ullamcorper, diam ligula lobortis quam, at scelerisque libero lectus ut risus.",
  
  "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque sodales, velit nec euismod scelerisque, lectus est interdum eros, sit amet bibendum eros sapien in magna. Quisque suscipit ligula eu turpis dignissim, a eleifend ipsum cursus.",
  
  "Nullam nec turpis et arcu egestas commodo. Integer sit amet metus non tortor tincidunt interdum. Donec et metus mollis, ultricies est at, ultricies nulla. Morbi non libero magna. Praesent imperdiet magna ac ipsum cursus, ut fermentum turpis tincidunt.",
  
  "Sed vehicula magna at lacus interdum, quis laoreet nulla condimentum. Aliquam erat volutpat. Cras et nulla in turpis consectetur suscipit. Vivamus lobortis, risus sit amet cursus tincidunt, erat turpis placerat ex, ut placerat justo lorem vel ligula. Fusce non diam felis.",
  
  "Integer a ipsum vitae urna varius egestas. Integer laoreet, sapien eget vehicula vehicula, odio lorem scelerisque magna, nec gravida libero nulla eget risus. Nulla facilisi. Donec at magna ut nulla pharetra cursus. Curabitur auctor, tellus in congue vestibulum, lacus lacus convallis justo, at fermentum libero felis nec ligula.",
  
  "Aliquam erat volutpat. Nullam scelerisque auctor libero, id volutpat est dignissim vitae. Aliquam erat volutpat. Integer laoreet, nisi a tincidunt tincidunt, odio nisl commodo libero, id ultricies sapien purus non odio. Phasellus ac ultricies ex, vel scelerisque libero.",
  
  "In hac habitasse platea dictumst. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam eu nunc non augue tincidunt suscipit. Suspendisse potenti. Aliquam erat volutpat. Integer vel turpis sed purus scelerisque euismod.",
  
  "Duis non quam et nisi tincidunt fermentum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam ullamcorper, mauris nec feugiat fermentum, purus lacus suscipit felis, et facilisis justo lacus id risus.",
  
  "Praesent quis orci sit amet ante facilisis suscipit. Integer in eros molestie, ultricies arcu ac, cursus quam. Nulla facilisi. Ut egestas semper magna ac condimentum. Aliquam erat volutpat. Sed bibendum sollicitudin orci, at viverra metus vehicula sed.",
  
  "Sed at risus vel nulla consequat fermentum. Donec et orci mauris. Nullam tempor velit id mi luctus, a scelerisque libero accumsan. In hac habitasse platea dictumst. Cras ac nunc nec massa tristique fringilla.",
  
  "Nullam vehicula magna sit amet magna ullamcorper, at dictum est gravida. Morbi nec magna at quam malesuada accumsan. Suspendisse potenti. Vivamus feugiat massa ut tortor scelerisque, non dapibus nulla consectetur. Aliquam erat volutpat.",
  
  "Etiam id velit feugiat, scelerisque velit a, scelerisque nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer dignissim risus non nibh scelerisque, sit amet tincidunt sapien rutrum.",
  
  "Curabitur tincidunt, felis a elementum tincidunt, ex felis fermentum dui, eget pulvinar arcu eros eu eros. Vestibulum sollicitudin pretium velit, eget volutpat justo fermentum sit amet. Pellentesque in nulla in nisi dictum interdum.",
  
  "Nullam quis arcu in magna pulvinar tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nulla ut cursus laoreet. Nullam elementum lorem vel facilisis laoreet. Cras ac turpis vel erat vehicula venenatis.",
  
  "Praesent placerat, magna in vehicula vestibulum, felis urna cursus lorem, sed vestibulum quam eros vel libero. Vivamus commodo, odio sed fringilla pretium, sem nulla feugiat odio, in cursus elit dolor et ex.",
  
  "Morbi molestie arcu sit amet libero porttitor, a mollis odio suscipit. Fusce at sapien id justo cursus mollis. Ut non orci in magna pretium consequat. Nam id purus eu velit vulputate elementum. Mauris ac sapien non felis scelerisque tincidunt."
];

const marketing_text = [
"Marketing strategies have evolved significantly over the past decade, driven by technological advancements and changing consumer behavior. Digital marketing, in particular, has become a cornerstone for businesses aiming to reach a wider audience and achieve measurable results. From social media campaigns to search engine optimization (SEO), the tools and techniques available to marketers today are more powerful than ever.",

"Content marketing plays a crucial role in engaging and educating potential customers. By creating valuable, relevant content, businesses can attract and retain a clearly defined audience, ultimately driving profitable customer action. Blogs, videos, infographics, and eBooks are just a few examples of content that can be leveraged to build brand authority and trust.",

"Email marketing remains a potent tool for nurturing leads and maintaining customer relationships. Personalized email campaigns that provide tailored content and offers can significantly enhance customer engagement and conversion rates. Automation tools have made it easier than ever to manage and optimize email marketing efforts, ensuring timely and relevant communication.",

"Social media platforms offer unparalleled opportunities for brand visibility and customer interaction. With billions of active users, platforms like Facebook, Instagram, Twitter, and LinkedIn provide businesses with the means to connect with their target audience on a personal level. Effective social media marketing involves a mix of organic posts and paid advertising to maximize reach and engagement.",

"Search engine optimization (SEO) is essential for improving a website's visibility on search engines like Google. By optimizing website content, structure, and backlinks, businesses can increase their chances of ranking higher in search results, driving more organic traffic to their site. SEO is a long-term strategy that requires ongoing effort and adaptation to changing algorithms and trends.",

"Pay-per-click (PPC) advertising allows businesses to reach potential customers through targeted ads on search engines and social media platforms. With PPC, advertisers only pay when a user clicks on their ad, making it a cost-effective method to generate leads and drive traffic. Effective PPC campaigns require careful keyword research, ad creation, and ongoing performance analysis.",

"Market research is fundamental to understanding consumer needs and preferences. By gathering and analyzing data on target audiences, competitors, and market trends, businesses can make informed decisions and tailor their marketing strategies accordingly. Surveys, focus groups, and data analytics tools are commonly used methods to gain valuable insights.",

"Influencer marketing leverages the reach and credibility of popular figures to promote products and services. By partnering with influencers who align with their brand values, businesses can tap into new audiences and build trust through authentic endorsements. Successful influencer marketing campaigns require careful selection of influencers and clear, mutually beneficial agreements.",

"Branding is more than just a logo or a tagline; it encompasses the entire identity of a business. A strong brand differentiates a company from its competitors and creates a lasting impression in the minds of consumers. Consistent branding across all marketing channels helps build recognition and loyalty, making it a vital component of any marketing strategy.",

"Public relations (PR) involves managing a company's reputation and building relationships with key stakeholders. Effective PR strategies can enhance credibility, generate positive media coverage, and mitigate potential crises. By crafting compelling narratives and engaging with the media, businesses can shape public perception and maintain a positive image.",

"Video marketing has gained immense popularity as a powerful tool for engaging audiences. Videos can convey complex information in an easily digestible format, making them ideal for product demonstrations, tutorials, and storytelling. Platforms like YouTube and TikTok offer vast reach, while live streaming provides real-time interaction with viewers.",

"Customer relationship management (CRM) systems help businesses manage interactions with current and potential customers. By tracking customer data and communication history, CRM tools enable personalized marketing efforts and improve customer satisfaction. Effective CRM implementation can lead to increased sales and stronger customer loyalty.",

"Affiliate marketing involves partnering with individuals or companies (affiliates) to promote products or services. Affiliates earn a commission for each sale or lead generated through their marketing efforts. This performance-based model incentivizes affiliates to drive results, making it a cost-effective strategy for expanding reach and increasing sales.",

"Mobile marketing targets consumers on their smartphones and tablets through various channels such as SMS, mobile apps, and mobile websites. With the increasing use of mobile devices, businesses must optimize their marketing efforts for mobile platforms to ensure a seamless and engaging user experience.",

"Event marketing involves promoting a brand, product, or service through in-person or virtual events. Trade shows, conferences, webinars, and product launches provide opportunities for direct interaction with target audiences. Events can generate leads, build brand awareness, and create memorable experiences for attendees.",

"Personalization in marketing tailors messages and offers to individual consumers based on their preferences, behavior, and demographics. Advanced data analytics and machine learning algorithms enable businesses to deliver highly relevant content, improving engagement and conversion rates. Personalization fosters a deeper connection between brands and their customers.",

"The rise of e-commerce has transformed the retail landscape, making online presence essential for businesses. Effective e-commerce marketing strategies include optimizing product listings, utilizing email campaigns, and leveraging social media to drive traffic to online stores. Providing a seamless shopping experience is crucial for converting visitors into customers.",

"Marketing automation streamlines repetitive tasks and workflows, allowing marketers to focus on strategic activities. Automation tools can manage email campaigns, social media posts, lead nurturing, and customer segmentation. By automating routine processes, businesses can improve efficiency, maintain consistency, and scale their marketing efforts.",

"Storytelling in marketing creates emotional connections with audiences by sharing compelling narratives. Stories can humanize a brand, making it more relatable and memorable. Whether through written content, videos, or social media posts, effective storytelling can engage customers and differentiate a brand in a crowded marketplace.",

"Data-driven marketing relies on insights derived from data analysis to inform decision-making. By tracking key metrics and analyzing consumer behavior, businesses can optimize their marketing strategies for better results. Data-driven approaches enable precise targeting, efficient budget allocation, and continuous improvement.",

"Native advertising integrates promotional content seamlessly into the user experience of a platform. Unlike traditional ads, native ads match the form and function of the surrounding content, making them less intrusive and more engaging. This approach can increase ad effectiveness and improve user experience.",

"Remarketing targets users who have previously interacted with a brand but did not convert. By displaying relevant ads to these users as they browse other websites or use social media, businesses can reinforce their message and encourage conversion. Remarketing helps keep a brand top-of-mind and increases the chances of conversion.",

"Voice search optimization is becoming increasingly important as more consumers use voice assistants like Siri, Alexa, and Google Assistant. Businesses must optimize their online content to be easily discoverable through voice search queries. This involves using natural language, answering common questions, and providing concise, relevant information.",

"Interactive content, such as quizzes, polls, and interactive infographics, engages users by requiring their active participation. This type of content can capture attention, provide valuable insights, and encourage social sharing. Interactive content enhances user experience and can lead to higher engagement and conversion rates.",

"Social proof, such as customer reviews, testimonials, and case studies, builds trust and credibility. Potential customers are more likely to make a purchase when they see positive feedback from others. Incorporating social proof into marketing materials can influence buying decisions and enhance brand reputation."
];

const scientific_text = [
"Scientific research has fundamentally changed our understanding of the natural world and the universe. The scientific method, characterized by systematic observation, measurement, and experimentation, has led to significant advancements in various fields such as physics, chemistry, biology, and earth sciences. These discoveries have not only expanded our knowledge but also improved our quality of life through technological innovations.",

"In the realm of biology, the study of genetics has revolutionized medicine and agriculture. The discovery of DNA's double helix structure by Watson and Crick paved the way for genetic engineering, allowing scientists to manipulate genes to develop disease-resistant crops and gene therapies for various genetic disorders. The Human Genome Project, completed in 2003, mapped the entire human genome, opening new avenues for personalized medicine.",

"Physics has unveiled the fundamental principles governing the universe. From Newton's laws of motion to Einstein's theory of relativity, our understanding of space, time, and matter has deepened. Quantum mechanics, with its counterintuitive principles, has led to the development of technologies such as semiconductors and MRI machines. The ongoing research in particle physics, including the work at CERN's Large Hadron Collider, continues to explore the building blocks of the universe.",

"Environmental science has become increasingly important as we face global challenges such as climate change and biodiversity loss. Research in this field helps us understand the impact of human activities on ecosystems and develop strategies for sustainable development. Studies on renewable energy sources, such as solar and wind power, are crucial for transitioning to a low-carbon economy and mitigating the effects of global warming.",

"Chemistry has played a vital role in advancing various industries, from pharmaceuticals to materials science. The invention of new chemical compounds and materials has led to the development of better medicines, more efficient batteries, and stronger, lighter materials. Nanotechnology, which involves manipulating matter at the atomic and molecular levels, holds great promise for future innovations in medicine, electronics, and energy.",

"Neuroscience is unraveling the complexities of the human brain and its functions. Advances in brain imaging techniques, such as fMRI and PET scans, have allowed scientists to study brain activity in real-time, leading to better understanding of mental illnesses and neurological disorders. Research in this field is also exploring the potential of brain-computer interfaces, which could revolutionize how we interact with technology.",

"Astronomy and space science continue to captivate our imagination and expand our horizons. The study of celestial bodies and phenomena has led to discoveries about the origins and evolution of the universe. Space missions, such as the Hubble Space Telescope and Mars rovers, have provided invaluable data about distant galaxies and the possibility of life on other planets. The future of space exploration, including missions to Mars and beyond, holds exciting prospects for humanity.",

"Social sciences, including psychology, sociology, and economics, provide critical insights into human behavior and societal structures. Research in these fields informs policies and practices that address social issues such as inequality, education, and public health. Understanding the psychological and social factors that influence behavior can lead to more effective interventions and improvements in overall well-being.",

"The development of artificial intelligence (AI) has transformed numerous scientific disciplines. Machine learning algorithms can analyze vast amounts of data, identify patterns, and make predictions with remarkable accuracy. AI is being used in everything from drug discovery to climate modeling, offering new tools for scientists to tackle complex problems.",

"Biotechnology is at the forefront of medical and agricultural innovation. Techniques such as CRISPR gene editing allow precise modifications to DNA, opening the door to new treatments for genetic disorders and the development of enhanced crops. Biotechnology is also driving advancements in biofuels and bioplastics, contributing to sustainability efforts.",

"Ecology studies the interactions between organisms and their environments. This field is crucial for understanding biodiversity and the impacts of human activities on ecosystems. Conservation biology, a branch of ecology, focuses on protecting endangered species and habitats, ensuring the preservation of our planet's natural heritage.",

"Geology explores the Earth's structure, composition, and processes. By studying rocks, minerals, and fossils, geologists can reconstruct the history of our planet and predict future geological events. This knowledge is essential for natural disaster preparedness, resource management, and environmental protection.",

"Materials science investigates the properties and applications of materials. Breakthroughs in this field have led to the development of advanced materials such as superconductors, graphene, and smart materials. These innovations have far-reaching implications for technology, engineering, and industry.",

"Paleontology, the study of ancient life through fossils, provides insights into the history of life on Earth. Discoveries of dinosaur fossils and other prehistoric creatures help scientists understand evolution, extinction events, and the environmental conditions of past eras. Paleontology also informs our knowledge of climate change over geological timescales.",

"Robotics is an interdisciplinary field that combines engineering, computer science, and artificial intelligence. Robots are being developed for a wide range of applications, from manufacturing and healthcare to space exploration and disaster response. Advances in robotics are paving the way for autonomous systems that can perform tasks with minimal human intervention.",

"The study of microbiology focuses on microorganisms, including bacteria, viruses, fungi, and protozoa. Microbiologists explore the roles of these organisms in health, disease, and the environment. Recent research in microbiomes has revealed the complex relationships between microorganisms and their hosts, with significant implications for medicine and agriculture.",

"Quantum computing is an emerging field that leverages the principles of quantum mechanics to perform computations far beyond the capabilities of classical computers. Quantum computers have the potential to revolutionize fields such as cryptography, optimization, and materials science, solving problems that are currently intractable.",

"Synthetic biology combines biology and engineering to design and construct new biological entities. This field aims to create synthetic life forms and biological systems with novel properties and functions. Applications of synthetic biology include bioengineering, environmental remediation, and the production of bio-based materials and energy.",

"The study of climate science is critical for understanding and addressing global warming and its impacts. Climate scientists use models and observational data to project future climate scenarios and inform policy decisions. Research in this field is essential for developing strategies to mitigate and adapt to climate change.",

"Neurotechnology explores the interface between the nervous system and technology. Innovations such as brain-machine interfaces and neuroprosthetics have the potential to restore lost functions and enhance human capabilities. Neurotechnology is also advancing our understanding of the brain and its disorders, paving the way for new therapies.",

"Astrobiology investigates the potential for life beyond Earth. Scientists study extreme environments on our planet to understand the conditions that might support life elsewhere. Missions to Mars, Europa, and other celestial bodies aim to detect signs of past or present life, addressing one of humanity's most profound questions: Are we alone in the universe?",

"Oceanography explores the physical, chemical, and biological properties of the world's oceans. This field is vital for understanding marine ecosystems, climate regulation, and the impact of human activities on the oceans. Oceanographers study phenomena such as ocean currents, marine biodiversity, and the carbon cycle.",

"Psychiatry and neuroscience are converging to unravel the complexities of mental health disorders. Research in these fields seeks to understand the biological, psychological, and social factors that contribute to conditions such as depression, schizophrenia, and anxiety. Advances in neuroimaging and psychopharmacology are leading to more effective treatments.",

"Renewable energy research focuses on developing sustainable energy sources to reduce our dependence on fossil fuels. Solar, wind, hydroelectric, and geothermal energy are being harnessed to provide clean, renewable power. Innovations in energy storage and grid management are crucial for integrating these technologies into the energy infrastructure.",

"Space technology has advanced significantly since the early days of space exploration. Innovations such as reusable rockets, satellite constellations, and space telescopes are expanding our capabilities in space. These technologies are not only enabling new scientific discoveries but also have practical applications in communication, navigation, and Earth observation."
];

const literary_text = [
"Amidst the whispering pines, where the early morning mist clung to the forest floor like a silken shroud, Clara wandered with a heart full of dreams. The forest seemed to breathe with her, each rustle of leaves a secret shared between them. She marveled at the dappled sunlight breaking through the canopy, casting ethereal patterns on the ground. It was in this serene solitude that she felt most alive, where the boundary between reality and fantasy blurred.",

"The old mansion on the hill stood as a testament to time, its ivy-clad walls and weathered stone exuding a mysterious charm. Legends spoke of hidden rooms and forgotten treasures, tales that both intrigued and frightened the villagers. Clara, with her insatiable curiosity, often found herself drawn to its gates, imagining the lives that had once thrived within its grand halls. The mansion was a relic of a bygone era, a silent witness to history's unfolding.",

"In the heart of the bustling city, where the cacophony of life never ceased, Julian lived a life of quiet routine. His apartment, perched above a quaint bookstore, was his sanctuary. The scent of old books and the soft glow of lamplight were constants in his world. Every evening, he would sit by the window, pen in hand, chronicling his thoughts and observations. It was through his writing that he sought to make sense of the chaos around him.",

"Eleanor's garden was her refuge, a place where she could escape the weight of her responsibilities. She tended to her flowers with a meticulous care, finding solace in the simple act of nurturing life. The vibrant blooms mirrored her own resilience, flourishing in the face of adversity. Each petal, each leaf, was a testament to her strength and determination. The garden, with its riot of colors and fragrances, was a tapestry of her soul.",

"The sea was a constant companion for Aaron, its vastness a source of endless fascination. He would spend hours on the shore, watching the tides ebb and flow, lost in the rhythm of the waves. The ocean's whispers filled his mind with stories of distant lands and untold adventures. It was here, amidst the salt and spray, that he felt a profound connection to the world beyond, a reminder of the infinite possibilities that lay ahead.",

"In the quiet village at the edge of the moor, life moved at a gentle, unhurried pace. The villagers, with their simple routines and enduring traditions, were bound by a sense of community. Each season brought its own rituals and celebrations, a testament to their enduring bond with nature. The village, with its cobblestone streets and thatched cottages, was a portrait of timeless charm, a place where the past and present coexisted in harmony.",

"Beneath the starlit sky, where the constellations wove tales of gods and heroes, Layla found her inspiration. The night, with its velvet darkness and shimmering stars, was her muse. She would sit by the lake, sketchbook in hand, capturing the beauty of the cosmos in delicate lines and shades. Each drawing was a reflection of her dreams, a testament to her boundless imagination. The night sky, with its infinite mysteries, was a canvas for her creativity.",

"In the heart of the enchanted forest, where magic lingered in every shadow, the old oak tree stood as a guardian of ancient secrets. Its gnarled branches and sprawling roots whispered of forgotten lore and hidden realms. The forest creatures revered the tree, gathering beneath its canopy to share stories and songs. It was said that those who listened closely could hear the tree's own tales, woven from the fabric of time itself.",

"On the banks of the winding river, where the water danced over smooth stones, Thomas found solace in the simple act of fishing. The gentle tug of the line and the quiet murmur of the river provided a meditative escape from the hustle of daily life. Each catch was a reminder of nature's bounty and the timeless rhythm of the natural world.",

"The library, with its towering shelves and musty scent of old books, was a sanctuary for many. Here, stories from across time and space converged, offering an escape into worlds both real and imagined. For young Emily, each visit to the library was an adventure, a chance to discover new authors and tales that sparked her imagination.",

"High in the mountains, where the air was crisp and the landscape rugged, Gabriel sought the thrill of climbing. The challenge of the ascent, the perilous edges, and the breathtaking vistas from the summit fed his spirit. Each climb was a testament to his resilience and determination, a journey that mirrored the peaks and valleys of life.",

"In the bustling marketplace, where the colors and sounds melded into a vibrant tapestry, Mara found her inspiration. The chatter of vendors, the aroma of spices, and the diversity of goods offered a sensory feast. As an artist, she captured these scenes in her sketches, each stroke of her pencil bringing the market's energy to life on paper.",

"The old lighthouse, standing sentinel at the edge of the cliff, was a beacon of hope for sailors lost at sea. Its light pierced through the darkest of nights, guiding vessels safely to shore. For the keeper, it was a solitary but noble duty, a commitment to ensuring the safety of those navigating the treacherous waters below.",

"In the heart of the desert, where the sands shifted with the whims of the wind, Layla found a beauty unlike any other. The vast, empty expanse, with its dunes and mirages, held a silence that spoke volumes. The desert's harshness and its hidden oases were a metaphor for life's trials and unexpected blessings.",

"The theater, with its grand stage and velvet curtains, was a place where dreams came to life. Actors and actresses donned their roles, transforming into characters that evoked laughter, tears, and reflection. For the audience, each performance was a journey into the human condition, a mirror reflecting the triumphs and tragedies of existence.",

"In the quiet of the early morning, when the world was still wrapped in slumber, the baker began his work. The aroma of fresh bread and pastries filled the air, a promise of warmth and nourishment. Each loaf, each confection, was crafted with care, a labor of love that brought comfort to the community with the dawn of each new day.",

"The attic, filled with dust and forgotten treasures, was a place of endless intrigue for young Max. Among the cobwebs and old trunks, he discovered relics of the past – letters, photographs, and trinkets that told stories of a time long gone. Each visit to the attic was a journey through history, a connection to the lives that had shaped his own.",

"The small café, nestled on a quiet street corner, was a haven for writers and dreamers. The clinking of cups, the murmur of conversations, and the scent of freshly brewed coffee created an ambiance that sparked creativity. For many, it was a place where ideas took flight and words flowed freely, a sanctuary for the mind and soul.",

"In the heart of the rainforest, where the canopy formed a green cathedral, biologist Dr. Elena Sorensen conducted her research. The lush, vibrant ecosystem teemed with life, each species playing a role in the delicate balance of nature. Her work, a blend of science and passion, aimed to uncover the secrets of the forest and advocate for its preservation.",

"The annual fair, with its bright lights and lively music, was a celebration of community and tradition. Families gathered to enjoy the rides, games, and food, creating memories that would be cherished for years. For the townspeople, the fair was a reminder of the joy found in simple pleasures and the bonds that held them together.",

"The grand cathedral, with its soaring spires and stained glass windows, was a place of reverence and awe. The play of light through the colored glass created a kaleidoscope of hues, a visual hymn to the divine. For visitors, the cathedral was not just a place of worship, but a testament to the heights of human creativity and devotion.",

"On the rugged coastline, where the waves crashed against the cliffs, marine biologist Dr. Mark Evans studied the rich marine life. The tide pools and kelp forests were teeming with creatures, each adapted to the ever-changing environment. His research aimed to understand and protect the delicate ecosystems that thrived in this dynamic, coastal interface.",

"In the bustling newsroom, journalists raced against time to report the latest stories. The clatter of keyboards, the hum of conversations, and the flurry of activity created a palpable energy. For reporter Sarah, each day was a quest for truth, a commitment to informing the public and holding power to account.",

"The old oak tree in the village square was a living monument to the passage of time. Its sprawling branches provided shade and shelter, its roots a testament to endurance and stability. Generations had gathered beneath its canopy, sharing stories, forging friendships, and marking the milestones of life.",

"In the twilight, when the world was bathed in a soft, golden glow, the shepherd led his flock across the meadows. The gentle bleating of the sheep and the rustle of grass were the soundtrack to his contemplative journey. Each day, he found peace in the rhythm of the land and the simple, unwavering duty of his role."
];

const technical_text = [
  "In modern software development, the adoption of microservices architecture has revolutionized how applications are built and deployed. By breaking down monolithic applications into smaller, independently deployable services, teams can achieve greater scalability and maintainability. This architectural approach allows for faster development cycles and easier integration of new features.",
  
  "Containerization technologies like Docker have become essential tools in the developer's toolkit. Containers provide a consistent environment across different stages of development, from local testing to production deployment. This consistency helps eliminate the 'it works on my machine' problem and streamlines the deployment process.",
  
  "Continuous Integration and Continuous Deployment (CI/CD) pipelines are fundamental to modern development workflows. Automated testing, code quality checks, and deployment processes ensure that code changes are thoroughly validated before reaching production. This automation reduces human error and accelerates the delivery of new features.",
  
  "Cloud computing platforms such as AWS, Azure, and Google Cloud offer scalable infrastructure solutions that enable businesses to grow without significant upfront investment. These platforms provide a wide range of services, from virtual machines to serverless functions, allowing developers to focus on building applications rather than managing infrastructure.",
  
  "The rise of artificial intelligence and machine learning has introduced new paradigms in software development. Developers now have access to powerful libraries and frameworks that simplify the implementation of AI models. This integration enables applications to provide intelligent features and predictive capabilities.",
  
  "API-first development has become a standard practice in modern software architecture. By designing and documenting APIs before implementation, teams can ensure better collaboration and integration between different components of a system. This approach promotes reusability and reduces development time.",
  
  "Security has become a critical concern in software development, with increasing threats and regulatory requirements. Developers must implement robust security measures, including encryption, authentication, and authorization, to protect sensitive data and ensure compliance with standards like GDPR and HIPAA.",
  
  "The adoption of agile methodologies has transformed project management in software development. Agile practices such as sprint planning, daily stand-ups, and retrospectives help teams maintain focus and adapt to changing requirements. This iterative approach promotes continuous improvement and customer satisfaction.",
  
  "Version control systems like Git have become indispensable tools for managing code changes and collaboration. Features such as branching, merging, and pull requests enable teams to work on multiple features simultaneously while maintaining code quality and stability.",
  
  "The proliferation of mobile devices has led to the development of responsive design principles. Developers must ensure that applications provide a seamless experience across different screen sizes and devices. This adaptability is crucial for reaching a broader audience and maintaining user engagement.",
  
  "Database management systems have evolved to support various data models and storage requirements. From traditional relational databases to NoSQL solutions, developers have a wide range of options to choose from based on their application's needs. This flexibility allows for optimized data storage and retrieval.",
  
  "The concept of DevOps has bridged the gap between development and operations, promoting a culture of collaboration and shared responsibility. By integrating development and IT operations, teams can achieve faster delivery times and improved reliability in their applications.",
  
  "User experience (UX) design has become a critical component of software development. Developers must consider factors such as accessibility, usability, and user feedback to create applications that meet user expectations and provide a positive experience.",
  
  "The emergence of blockchain technology has introduced new possibilities for secure and transparent transactions. Developers are exploring applications in areas such as cryptocurrency, supply chain management, and digital identity verification. This innovation has the potential to transform various industries.",
  
  "The Internet of Things (IoT) has expanded the scope of software development to include connected devices and sensors. Developers must consider challenges such as data privacy, network security, and real-time processing when building IoT applications. This connectivity enables new use cases and business opportunities.",
  
  "The adoption of serverless computing has simplified the deployment and scaling of applications. By abstracting away server management, developers can focus on writing code and delivering value to users. This model reduces operational overhead and improves resource utilization.",
  
  "The rise of edge computing has brought processing closer to data sources, reducing latency and improving performance. Developers must design applications that can leverage edge resources effectively, enabling faster response times and enhanced user experiences.",
  
  "The integration of augmented reality (AR) and virtual reality (VR) technologies has opened new avenues for interactive applications. Developers are creating immersive experiences that blend digital and physical worlds, offering unique opportunities for engagement and innovation.",
  
  "The concept of green computing has gained traction, promoting sustainable practices in software development. Developers are optimizing applications to reduce energy consumption and minimize environmental impact. This focus on sustainability aligns with broader corporate and societal goals.",
  
  "The adoption of low-code and no-code platforms has democratized software development, allowing non-technical users to create applications. These platforms provide visual interfaces and pre-built components, enabling rapid prototyping and deployment of solutions.",
  
  "The rise of 5G technology has enhanced connectivity and enabled new applications in areas such as autonomous vehicles and smart cities. Developers must consider the capabilities and limitations of 5G networks when designing applications that rely on high-speed, low-latency communication.",
  
  "The integration of biometric authentication has improved security and user convenience in applications. Developers are implementing features such as fingerprint scanning and facial recognition to enhance access control and protect sensitive information.",
  
  "The concept of digital transformation has driven organizations to modernize their IT infrastructure and processes. Developers play a crucial role in implementing new technologies and practices that enable businesses to remain competitive in a digital economy.",
  
  "The adoption of open-source software has fostered innovation and collaboration in the developer community. By contributing to open-source projects, developers can share knowledge, improve skills, and build a portfolio of work that demonstrates their expertise.",
  
  "The future of software development continues to evolve with emerging technologies and changing user demands. Developers must stay informed about trends and best practices to remain relevant and deliver value in an increasingly complex and dynamic environment."
];

const legal_text = [
  "In accordance with the applicable laws and regulations governing legal documentation, this agreement outlines the terms and conditions under which the parties shall conduct their business relationship. The parties hereby acknowledge and agree to be bound by the provisions set forth herein.",
  
  "The jurisdiction of this agreement shall be governed by the laws of the relevant jurisdiction, and any disputes arising from or related to this agreement shall be resolved in accordance with the applicable legal procedures. The parties agree to submit to the exclusive jurisdiction of the courts in the specified jurisdiction.",
  
  "The parties hereto acknowledge that this agreement constitutes a legally binding contract enforceable in accordance with its terms. Any modifications or amendments to this agreement must be made in writing and signed by all parties to be effective.",
  
  "The confidentiality provisions of this agreement shall remain in effect for a period of five years from the date of execution. The parties agree to maintain the confidentiality of any proprietary information disclosed during the course of their relationship.",
  
  "The indemnification clause provides that each party shall indemnify and hold harmless the other party from any claims, damages, or liabilities arising from their respective actions or omissions. This indemnification shall survive the termination of this agreement.",
  
  "The force majeure clause relieves the parties from their obligations under this agreement in the event of circumstances beyond their reasonable control. The affected party must provide written notice to the other party within a specified timeframe.",
  
  "The termination clause outlines the conditions under which this agreement may be terminated by either party. Upon termination, the parties shall fulfill any remaining obligations and return any confidential information in their possession.",
  
  "The assignment clause prohibits the assignment of rights or obligations under this agreement without the prior written consent of the other party. Any unauthorized assignment shall be null and void.",
  
  "The severability clause ensures that if any provision of this agreement is found to be invalid or unenforceable, the remaining provisions shall continue to be effective. The parties agree to replace any invalid provision with a valid one that achieves the intended purpose.",
  
  "The entire agreement clause states that this document constitutes the complete understanding between the parties and supersedes any prior agreements or understandings, whether written or oral. No additional terms shall be binding unless agreed upon in writing.",
  
  "The governing law clause specifies the legal framework under which this agreement shall be interpreted and enforced. The parties agree to comply with all applicable laws and regulations in their respective jurisdictions.",
  
  "The dispute resolution clause outlines the procedures for resolving any disputes that may arise under this agreement. The parties agree to engage in good faith negotiations before pursuing legal action.",
  
  "The intellectual property clause defines the ownership and use of any intellectual property created or used in connection with this agreement. The parties agree to respect each other's intellectual property rights.",
  
  "The non-compete clause restricts the parties from engaging in activities that compete with the other party's business interests for a specified period. This restriction is intended to protect the parties' legitimate business interests.",
  
  "The warranty clause provides assurances regarding the quality and performance of goods or services provided under this agreement. The parties agree to maintain certain standards and specifications as outlined herein.",
  
  "The limitation of liability clause caps the amount of damages that may be recovered by either party in the event of a breach. This limitation is intended to provide a reasonable balance of risk between the parties.",
  
  "The notice clause specifies the methods and addresses for delivering formal notices under this agreement. The parties agree to provide timely notice of any changes or events that may affect their relationship.",
  
  "The audit clause grants the right to inspect and review records related to the performance of this agreement. The parties agree to maintain accurate records and cooperate with any audit requests.",
  
  "The amendment clause outlines the process for making changes to this agreement. Any modifications must be documented in writing and signed by all parties to be effective.",
  
  "The survival clause identifies which provisions of this agreement shall remain in effect after its termination. This ensures that certain obligations continue to bind the parties even after the agreement ends.",
  
  "The representation and warranty clause provides assurances regarding the accuracy of information provided and the authority to enter into this agreement. The parties agree to be truthful and accurate in their representations.",
  
  "The compliance clause requires the parties to adhere to all applicable laws, regulations, and industry standards. The parties agree to maintain compliance throughout the duration of this agreement.",
  
  "The insurance clause specifies the types and amounts of insurance coverage required under this agreement. The parties agree to maintain adequate insurance to protect against potential risks.",
  
  "The default clause outlines the consequences of failing to meet obligations under this agreement. The parties agree to provide notice and an opportunity to cure any defaults before taking action.",
  
  "The miscellaneous clause addresses various administrative matters, such as headings, numbering, and the language of the agreement. The parties agree to interpret this agreement in accordance with standard legal principles."
];

const ecommerce_text = [
  "Premium Wireless Headphones - Experience crystal-clear sound with our latest wireless headphones. Features include active noise cancellation, 30-hour battery life, and premium leather ear cushions. Regular price: $299.99, Special offer: $249.99 with free shipping! Limited time only.",
  
  "Smart Fitness Watch - Track your health and fitness goals with our advanced smartwatch. Includes heart rate monitoring, sleep tracking, and 5-day battery life. Water-resistant up to 50m. Save 20% off the original price of $199.99. Now only $159.99!",
  
  "Professional Camera Kit - Perfect for photography enthusiasts. Includes 24MP mirrorless camera, 18-55mm lens, and carrying case. Bundle deal: Save $200 when you purchase with our premium camera bag. Regular price: $999.99, Bundle price: $799.99.",
  
  "Gaming Laptop - High-performance gaming laptop with RTX 4070, 32GB RAM, and 1TB SSD. 15.6\" QHD display with 165Hz refresh rate. Special student discount available! Regular price: $1,999.99, Student price: $1,799.99 with valid ID.",
  
  "Smart Home Security System - Complete home security solution with HD cameras, motion sensors, and mobile app control. Free installation and 1-year subscription included. Early bird special: 25% off the regular price of $299.99. Now only $224.99!",
  
  "Organic Coffee Beans - Premium single-origin coffee beans from Ethiopia. Medium roast with notes of citrus and chocolate. 1kg bag. Subscribe and save 15%! Regular price: $29.99, Subscription price: $25.49 per bag.",
  
  "Yoga Mat Set - Premium non-slip yoga mat with carrying strap and blocks included. Made from eco-friendly materials. Free shipping on orders over $50. Regular price: $49.99, Flash sale: $39.99!",
  
  "Wireless Mouse - Ergonomic wireless mouse with precision tracking and long battery life. Includes USB receiver and carrying case. Buy 2, get 1 free! Regular price: $39.99 per unit.",
  
  "Smart LED Bulb Pack - Set of 4 color-changing smart bulbs with voice control compatibility. Works with Alexa and Google Home. Special bundle price: $79.99 (Save $20 off individual price).",
  
  "Portable Power Bank - 20000mAh fast-charging power bank with USB-C and wireless charging. Includes charging cable. Limited time offer: 30% off! Regular price: $89.99, Sale price: $62.99.",
  
  "Blender Pro - High-performance blender for smoothies and food processing. 1200W motor, 6 preset programs. Free recipe book included. Regular price: $129.99, Special bundle with extra container: $149.99.",
  
  "Smart Doorbell - Video doorbell with motion detection and two-way audio. Cloud storage included. Early access special: 40% off! Regular price: $199.99, Launch price: $119.99.",
  
  "Wireless Earbuds - True wireless earbuds with active noise cancellation and 24-hour battery life. Includes wireless charging case. Student discount available! Regular price: $159.99, Student price: $143.99.",
  
  "Smart Scale - Body composition scale with smartphone app integration. Tracks weight, BMI, and body fat percentage. Free shipping! Regular price: $79.99, Bundle with app subscription: $89.99.",
  
  "Gaming Chair - Ergonomic gaming chair with lumbar support and adjustable armrests. Premium PU leather. Special financing available! Regular price: $299.99, 12-month financing: $24.99/month.",
  
  "Smart Thermostat - Energy-saving smart thermostat with mobile app control. Compatible with major smart home systems. Utility rebate available! Regular price: $249.99, After rebate: $199.99.",
  
  "Portable Projector - Mini projector with 1080p resolution and built-in speakers. Perfect for home entertainment. Free screen included! Regular price: $399.99, Bundle with carrying case: $429.99.",
  
  "Smart Lock - Keyless entry smart lock with fingerprint and app control. Includes backup key. Limited time offer: 25% off! Regular price: $199.99, Sale price: $149.99.",
  
  "Wireless Keyboard - Mechanical wireless keyboard with RGB backlight. Cherry MX switches. Free keycap set included! Regular price: $129.99, Special edition with custom keycaps: $149.99.",
  
  "Smart Water Bottle - Temperature-controlled water bottle with hydration tracking. 750ml capacity. Early bird special: 30% off! Regular price: $79.99, Launch price: $55.99.",
  
  "Gaming Monitor - 27\" QHD gaming monitor with 165Hz refresh rate and 1ms response time. HDR support. Bundle with gaming headset! Regular price: $399.99, Bundle price: $449.99.",
  
  "Smart Pet Feeder - Automated pet feeder with portion control and scheduling. Includes mobile app. Free shipping! Regular price: $149.99, Bundle with pet camera: $199.99.",
  
  "Portable Air Purifier - HEPA air purifier with smart sensors and app control. Coverage up to 500 sq ft. Special financing! Regular price: $299.99, 6-month financing: $49.99/month.",
  
  "Smart Mirror - Bathroom smart mirror with LED lighting and defogger. Includes Bluetooth speaker. Limited stock! Regular price: $399.99, Special installation package: $449.99.",
  
  "Wireless Charging Pad - 15W fast wireless charger with cooling fan. Compatible with all Qi devices. Buy 2, get 1 free! Regular price: $49.99 per unit."
];

const social_media_text = [
  "Just had the most amazing coffee at @CoffeeLovers! ☕️ Their new seasonal blend is absolutely incredible. Perfect start to my morning! #CoffeeAddict #MorningVibes #CoffeeShop",
  
  "Can't believe I finally finished my first marathon! 🏃‍♂️ Thanks to @RunningCommunity for all the support and tips. Never thought I could do it! #RunnerLife #Marathon #Achievement",
  
  "New recipe alert! 🍝 Just tried making homemade pasta for the first time with @CookingPro tips. Turned out better than expected! #Foodie #Cooking #Homemade",
  
  "Missing my travel buddies! 🌍 Last year's trip to Bali was incredible. @TravelAdventures, when's our next adventure? #TravelLife #Wanderlust #Bali",
  
  "Just adopted this cutie from @PetShelter! 🐱 Meet Luna, my new best friend. She's already making herself at home! #PetLove #AdoptDontShop #CatsOfInstagram",
  
  "Big news! 🎉 Just launched my new project with @TechTeam. Check out our latest innovation! #StartupLife #Innovation #TechNews",
  
  "Weekend vibes with @YogaStudio! 🧘‍♀️ Morning flow was exactly what I needed. Namaste! #YogaLife #Wellness #Mindfulness",
  
  "Throwback to my first concert! 🎸 Thanks @MusicLovers for the amazing experience. Can't wait for the next one! #MusicLife #ConcertVibes #Throwback",
  
  "Just finished reading this masterpiece! 📚 @BookClub recommendations never disappoint. What should I read next? #BookWorm #Reading #Literature",
  
  "New art piece finished! 🎨 Inspired by @ArtCommunity's weekly challenge. What do you think? #ArtistLife #Creative #Artwork",
  
  "Game night with @GamingSquad! 🎮 Finally beat that impossible level. Victory dance! 🕺 #GamingLife #Gamers #Victory",
  
  "First time trying @VeganKitchen's new menu! 🌱 The plant-based burger was incredible! #VeganLife #Foodie #HealthyEating",
  
  "Just got my new camera from @PhotoGear! 📸 Can't wait to start shooting! Any tips for a beginner? #Photography #NewGear #PhotographyLife",
  
  "Weekend project: Building a new garden! 🌿 Thanks @GardenTips for the inspiration. #GardenLife #DIY #GreenThumb",
  
  "Just released my new single! 🎵 Check it out on @MusicPlatform. Let me know what you think! #MusicLife #NewRelease #Artist",
  
  "Movie night with @FilmClub! 🎬 This indie film was mind-blowing. Who else has seen it? #MovieNight #FilmBuff #Cinema",
  
  "New workout routine with @FitnessPro! 💪 Day 1 down, feeling motivated! #FitnessLife #Workout #HealthyLiving",
  
  "Just got my dream job at @TechCompany! 🚀 Thanks to everyone who supported me! #CareerGoals #Success #NewJob",
  
  "Weekend getaway with @TravelBuddies! 🏖️ This view is everything! #TravelLife #BeachVibes #Paradise",
  
  "New podcast episode out! 🎙️ Talking about tech trends with @TechExpert. Give it a listen! #PodcastLife #TechTalk #NewEpisode",
  
  "Just finished my first painting class with @ArtStudio! 🎨 Never thought I could do this! #ArtLife #BeginnerArtist #Creative",
  
  "Game-changing moment with @StartupTeam! 💡 Our new feature just launched! #StartupLife #Innovation #Tech",
  
  "Weekend brunch with @FoodieFriends! 🍳 This place is amazing! #BrunchLife #Foodie #WeekendVibes",
  
  "New collaboration with @FashionBrand! 👕 Check out our latest collection! #FashionLife #Style #NewCollection",
  
  "Just hit 10K followers! 🎉 Thanks to everyone for the support! @SocialMediaTips were spot on! #Milestone #Growth #SocialMedia"
];

function shuffleArray(array) {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

function splitTextIntoSentences(text) {
  const sentences = text.match(/[^.!?]+[.!?]+[\s]*/g) || [];
  return sentences.map(sentence => sentence.trim());
}

function generateRandomString(length) {
  const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  const charsetLength = charset.length;
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charsetLength);
    result += charset[randomIndex];
  }
  return result;
}

function generateText(textType, sizeType, count, addPTag = false) {
  let textData;
  
  switch(textType) {
    case '1': textData = lorem_ipsum_text; break;
    case '2': textData = marketing_text; break;
    case '3': textData = scientific_text; break;
    case '4': textData = literary_text; break;
    case '5': textData = technical_text; break;
    case '6': textData = legal_text; break;
    case '7': textData = ecommerce_text; break;
    case '8': textData = social_media_text; break;
    default: textData = lorem_ipsum_text;
  }
  
  let result = "";
  let shuffledArray = shuffleArray(textData);
  
  if (sizeType === 'paragraphs') {
    const resultArray = [];
    for (let i = 0; i < count; i++) {
      let paragraph = shuffledArray[i % shuffledArray.length];
      // Добавляем <p> теги вокруг каждого параграфа если нужно
      if (addPTag) {
        paragraph = `<p>${paragraph}</p>`;
      }
      resultArray.push(paragraph);
    }
    result = resultArray.join("\n\n");
  } 
  else if (sizeType === 'sentences') {
    const allSentences = splitTextIntoSentences(shuffledArray.join(' '));
    const shuffledSentences = shuffleArray(allSentences);
    const resultArray = [];
    
    for (let i = 0; i < count; i++) {
      resultArray.push(shuffledSentences[i % shuffledSentences.length]);
    }
    
    result = resultArray.join(" ");
  } 
  else if (sizeType === 'words') {
    const allSentences = splitTextIntoSentences(shuffledArray.join(' '));
    const allWords = shuffleArray(allSentences.join(' ').split(/\s+/));
    const resultArray = [];
    
    for (let i = 0; i < count; i++) {
      resultArray.push(allWords[i % allWords.length]);
    }
    
    result = resultArray.join(" ");
    if (!result.endsWith('.')) {
      result += '.';
    }
    
    // Делаем первую букву заглавной
    if (result.length > 0) {
      result = result.charAt(0).toUpperCase() + result.slice(1);
    }
  } 
  else if (sizeType === 'symbols') {
    result = generateRandomString(count);
  }
  
  // Добавляем <p> теги если нужно (только для не-параграфов)
  if (addPTag && sizeType !== 'paragraphs') {
    result = `<p>${result}</p>`;
  }
  
  return result;
}

async function createContextMenus() {
  chrome.contextMenus.removeAll(async function() {
    
    const parentId = chrome.contextMenus.create({
      id: "loremIpsumGenerator",
      title: "Lorem Ipsum Generator",
      contexts: ["editable"]
    });
    
    // Получаем историю для создания подменю
    const history = await getHistory();
    
    // Создаем подменю для "Last used"
    const lastUsedParentId = chrome.contextMenus.create({
      id: "lastUsed",
      parentId: parentId,
      title: "🔄 Last used",
      contexts: ["editable"]
    });
    
    // Добавляем пункты истории в подменю
    if (history.length > 0) {
      history.forEach((item, index) => {
        chrome.contextMenus.create({
          id: `history_${index}`,
          parentId: lastUsedParentId,
          title: item.displayName,
          contexts: ["editable"]
        });
      });
      
      // Добавляем разделитель
      chrome.contextMenus.create({
        id: "history_separator",
        parentId: lastUsedParentId,
        type: "separator",
        contexts: ["editable"]
      });
      
      // Добавляем пункт для очистки истории
      chrome.contextMenus.create({
        id: "clearHistory",
        parentId: lastUsedParentId,
        title: "🗑️ Clear history",
        contexts: ["editable"]
      });
    } else {
      // Если истории нет, показываем пустой недоступный пункт
      chrome.contextMenus.create({
        id: "noHistory",
        parentId: lastUsedParentId,
        title: "No history available",
        enabled: false,
        contexts: ["editable"]
      });
    }
    
    // Добавляем разделитель
    chrome.contextMenus.create({
      id: "separator1",
      parentId: parentId,
      type: "separator",
      contexts: ["editable"]
    });
    
    // Добавляем пункт "Quick Presets"
    const quickPresetsParentId = chrome.contextMenus.create({
      id: "quickPresets",
      parentId: parentId,
      title: "⚡ Quick Presets",
      contexts: ["editable"]
    });
    
    // Получаем кастомные пресеты
    const presets = await getCustomPresets();
    
    if (presets.length > 0) {
      presets.forEach((preset, index) => {
        chrome.contextMenus.create({
          id: `preset_${index}`,
          parentId: quickPresetsParentId,
          title: preset.displayName,
          contexts: ["editable"]
        });
      });
    } else {
      chrome.contextMenus.create({
        id: "noPresets",
        parentId: quickPresetsParentId,
        title: "No presets available",
        enabled: false,
        contexts: ["editable"]
      });
    }
    
    // Добавляем разделитель
    chrome.contextMenus.create({
      id: "separator2",
      parentId: parentId,
      type: "separator",
      contexts: ["editable"]
    });
    
    const textTypes = [
      { id: "1", title: "Classic Lorem Ipsum" },
      { id: "2", title: "Marketing Text" },
      { id: "3", title: "Scientific Text" },
      { id: "4", title: "Literary Text" },
      { id: "5", title: "🆕 Technical/IT Text" },
      { id: "6", title: "🆕 Legal Text" },
      { id: "7", title: "🆕 E-commerce Text" },
      { id: "8", title: "🆕 Social Media Text" }
    ];
    
    textTypes.forEach(textType => {
      const textTypeId = chrome.contextMenus.create({
        id: `textType_${textType.id}`,
        parentId: parentId,
        title: textType.title,
        contexts: ["editable"]
      });
      
      const sizeTypes = [
        { id: "paragraph1", title: "1 paragraph", sizeType: "paragraphs", count: 1 },
        { id: "paragraph3", title: "3 paragraphs", sizeType: "paragraphs", count: 3 },
        { id: "sentences5", title: "5 sentences", sizeType: "sentences", count: 5 },
        { id: "words50", title: "50 words", sizeType: "words", count: 50 },
        { id: "symbols100", title: "100 characters", sizeType: "symbols", count: 100 }
      ];
      
      sizeTypes.forEach(sizeType => {
        chrome.contextMenus.create({
          id: `${textType.id}_${sizeType.id}`,
          parentId: textTypeId,
          title: sizeType.title,
          contexts: ["editable"]
        });
      });
    });
  });
}

// Функция для получения отображаемого названия типа текста
function getTextTypeName(textTypeId) {
  const textTypes = {
    '1': 'Classic Lorem Ipsum',
    '2': 'Marketing Text',
    '3': 'Scientific Text',
    '4': 'Literary Text',
    '5': 'Technical/IT Text',
    '6': 'Legal Text',
    '7': 'E-commerce Text',
    '8': 'Social Media Text'
  };
  return textTypes[textTypeId] || 'Unknown';
}

// Функция для получения отображаемого названия варианта размера
function getSizeVariantName(sizeType, count) {
  switch(sizeType) {
    case 'paragraphs':
      return count === 1 ? '1 paragraph' : `${count} paragraphs`;
    case 'sentences':
      return count === 1 ? '1 sentence' : `${count} sentences`;
    case 'words':
      return count === 1 ? '1 word' : `${count} words`;
    case 'symbols':
      return count === 1 ? '1 character' : `${count} characters`;
    default:
      return `${count} ${sizeType}`;
  }
}

// Функция для сохранения варианта в историю
function saveToHistory(textTypeId, sizeType, count, addPTag = false) {
  console.log('saveToHistory called with:', { textTypeId, sizeType, count, addPTag });
  
  const newItem = {
    textTypeId: textTypeId,
    sizeType: sizeType,
    count: count,
    addPTag: addPTag,
    timestamp: Date.now(),
    displayName: `${getTextTypeName(textTypeId)} - ${getSizeVariantName(sizeType, count)}`
  };
  
  console.log('New item created:', newItem);
  
  chrome.storage.local.get(['lorem_ipsum_history'], function(result) {
    let history = result.lorem_ipsum_history || [];
    console.log('Current history:', history);
    
    // Удаляем дубликаты (если такой же вариант уже есть)
    history = history.filter(item => 
      !(item.textTypeId === textTypeId && item.sizeType === sizeType && item.count === count)
    );
    
    // Добавляем новый элемент в начало
    history.unshift(newItem);
    
    // Ограничиваем историю 10 элементами
    history = history.slice(0, 10);
    
    console.log('Updated history:', history);
    
    chrome.storage.local.set({ 'lorem_ipsum_history': history }, function() {
      console.log('History saved to storage:', history);
      // Обновляем меню после сохранения
      createContextMenus();
    });
  });
}

// Функция для получения истории
function getHistory() {
  return new Promise((resolve) => {
    chrome.storage.local.get(['lorem_ipsum_history'], function(result) {
      resolve(result.lorem_ipsum_history || []);
    });
  });
}

// Функция для очистки истории
function clearHistory() {
  chrome.storage.local.remove(['lorem_ipsum_history'], function() {
    console.log('History cleared');
  });
}

// Функции для работы с кастомными пресетами
function saveCustomPreset(textTypeId, sizeType, count, addPTag = false) {
  const preset = {
    textTypeId: textTypeId,
    sizeType: sizeType,
    count: count,
    addPTag: addPTag,
    timestamp: Date.now(),
    displayName: `${getTextTypeName(textTypeId)} - ${getSizeVariantName(sizeType, count)}`
  };
  
  chrome.storage.local.get(['lorem_ipsum_presets'], function(result) {
    let presets = result.lorem_ipsum_presets || [];
    
    // Удаляем дубликаты
    presets = presets.filter(p => 
      !(p.textTypeId === textTypeId && p.sizeType === sizeType && p.count === count)
    );
    
    // Добавляем новый пресет в начало
    presets.unshift(preset);
    
    // Ограничиваем количество пресетов (например, 20)
    presets = presets.slice(0, 20);
    
    chrome.storage.local.set({ 'lorem_ipsum_presets': presets }, function() {
      console.log('Preset saved:', preset);
      // Обновляем контекстное меню после сохранения пресета
      createContextMenus();
    });
  });
}

function getCustomPresets() {
  return new Promise((resolve) => {
    chrome.storage.local.get(['lorem_ipsum_presets'], function(result) {
      resolve(result.lorem_ipsum_presets || []);
    });
  });
}

function deleteHistoryItem(index) {
  chrome.storage.local.get(['lorem_ipsum_history'], function(result) {
    let history = result.lorem_ipsum_history || [];
    history.splice(index, 1);
    
    chrome.storage.local.set({ 'lorem_ipsum_history': history }, function() {
      console.log('History item deleted, index:', index);
      // Обновляем контекстное меню после удаления элемента истории
      createContextMenus();
    });
  });
}

function deleteCustomPreset(index) {
  chrome.storage.local.get(['lorem_ipsum_presets'], function(result) {
    let presets = result.lorem_ipsum_presets || [];
    presets.splice(index, 1);
    
    chrome.storage.local.set({ 'lorem_ipsum_presets': presets }, function() {
      console.log('Preset deleted, index:', index);
      // Обновляем контекстное меню после удаления пресета
      createContextMenus();
    });
  });
}

chrome.contextMenus.onClicked.addListener(async (info, tab) => {
  const menuItemId = info.menuItemId;
  console.log('Context menu clicked:', menuItemId);
  
  // Обработка клика на пункты истории
  if (menuItemId.startsWith('history_')) {
    console.log('History item clicked:', menuItemId);
    const historyIndex = parseInt(menuItemId.replace('history_', ''));
    const history = await getHistory();
    
    if (history[historyIndex]) {
      const item = history[historyIndex];
      const generatedText = generateText(item.textTypeId, item.sizeType, item.count, item.addPTag);
      
      // Перемещаем выбранный элемент в начало истории
      saveToHistory(item.textTypeId, item.sizeType, item.count, item.addPTag);
      
      chrome.tabs.sendMessage(tab.id, {
        action: "insertText",
        text: generatedText
      });
    }
    return;
  }
  
  // Обработка клика на пресеты
  if (menuItemId.startsWith('preset_')) {
    console.log('Preset clicked:', menuItemId);
    const presetIndex = parseInt(menuItemId.replace('preset_', ''));
    const presets = await getCustomPresets();
    
    if (presets[presetIndex]) {
      const preset = presets[presetIndex];
      const generatedText = generateText(preset.textTypeId, preset.sizeType, preset.count, preset.addPTag);
      
      chrome.tabs.sendMessage(tab.id, {
        action: "insertText",
        text: generatedText
      });
    }
    return;
  }
  
  // Обработка очистки истории
  if (menuItemId === 'clearHistory') {
    console.log('Clear history clicked');
    clearHistory();
    // Пересоздаем меню после очистки
    await createContextMenus();
    
    chrome.tabs.sendMessage(tab.id, {
      action: "showNotification",
      message: "History cleared successfully!"
    });
    return;
  }
  
  // Обработка обычных пунктов меню (исключаем специальные ID)
  if (typeof menuItemId === 'string' && 
      menuItemId.includes('_') && 
      !menuItemId.startsWith('history_') && 
      !menuItemId.startsWith('preset_') &&
      menuItemId !== 'lastUsed' && 
      menuItemId !== 'clearHistory' &&
      menuItemId !== 'noHistory' &&
      menuItemId !== 'noPresets' &&
      menuItemId !== 'separator1' &&
      menuItemId !== 'separator2' &&
      menuItemId !== 'history_separator' &&
      menuItemId !== 'quickPresets') {
    
    console.log('Regular menu item clicked:', menuItemId);
    const parts = menuItemId.split('_');
    
    if (parts.length === 2) {
      const textTypeId = parts[0];
      const sizeTypeId = parts[1];
      
      console.log('Parsed:', { textTypeId, sizeTypeId });
      
      let sizeType, count;
      
      if (sizeTypeId.startsWith('paragraph')) {
        sizeType = 'paragraphs';
        count = parseInt(sizeTypeId.replace('paragraph', ''));
      } else if (sizeTypeId.startsWith('sentences')) {
        sizeType = 'sentences';
        count = parseInt(sizeTypeId.replace('sentences', ''));
      } else if (sizeTypeId.startsWith('words')) {
        sizeType = 'words';
        count = parseInt(sizeTypeId.replace('words', ''));
      } else if (sizeTypeId.startsWith('symbols')) {
        sizeType = 'symbols';
        count = parseInt(sizeTypeId.replace('symbols', ''));
      }
      
      console.log('Final params:', { textTypeId, sizeType, count });
      
      const generatedText = generateText(textTypeId, sizeType, count, false);
      
      // Сохраняем в историю
      console.log('Saving to history...');
      saveToHistory(textTypeId, sizeType, count, false);
      
      chrome.tabs.sendMessage(tab.id, {
        action: "insertText",
        text: generatedText
      });
    }
  }
});

// Обработчик сообщений от popup
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "savePreset") {
    saveCustomPreset(message.textTypeId, message.sizeType, message.count, message.addPTag);
    sendResponse({ success: true });
  } else if (message.action === "getPresets") {
    getCustomPresets().then(presets => {
      sendResponse({ presets: presets });
    });
    return true; // Асинхронный ответ
  } else if (message.action === "deletePreset") {
    deleteCustomPreset(message.index);
    sendResponse({ success: true });
  } else if (message.action === "getHistory") {
    getHistory().then(history => {
      sendResponse({ history: history });
    });
    return true; // Асинхронный ответ
  } else if (message.action === "deleteHistoryItem") {
    deleteHistoryItem(message.index);
    sendResponse({ success: true });
  } else if (message.action === "saveToHistory") {
    saveToHistory(message.textTypeId, message.sizeType, message.count, message.addPTag);
    sendResponse({ success: true });
  }
});

chrome.runtime.onInstalled.addListener((details) => {
  if (details.reason === chrome.runtime.OnInstalledReason.INSTALL) {
    chrome.tabs.create({
      url: "https://lorem-ipsum-generator.app/welcome_v_1_1.html",
    });
  } else if (details.reason === chrome.runtime.OnInstalledReason.UPDATE) {
    // When extension is updated
  } else if (
    details.reason === chrome.runtime.OnInstalledReason.CHROME_UPDATE
  ) {
    // When browser is updated
  } else if (
    details.reason === chrome.runtime.OnInstalledReason.SHARED_MODULE_UPDATE
  ) {
    // When a shared module is updated
  }
  
  createContextMenus();
});