import blog2Image from "@/assets/blog2.jpg";
import blog3Image from "@/assets/blog3.jpg";
import blog4Image from "@/assets/blog4.jpg";
import blog5Image from "@/assets/blog5.jpg";
import blog1Image from "@/blog1.png";
import blog6Image from "@/blog6.png";

export type BlogSection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type BlogPost = {
  slug: string;
  route: string;
  category: string;
  title: string;
  excerpt: string;
  readTime: string;
  publishedDate: string;
  image: string;
  imageAlt: string;
  introduction: string[];
  sections: BlogSection[];
  conclusion: string[];
  ctaTitle: string;
  ctaButton: string;
};

export const dentalTip =
  "Do not wait until dental pain becomes severe. Many dental problems are easier to manage when identified early.";

export const blogPosts: BlogPost[] = [
  {
    slug: "signs-you-should-visit-a-dentist",
    route: "/blogs/signs-you-should-visit-a-dentist",
    category: "Preventive Dental Care",
    title: "7 Signs You Should Visit a Dentist Sooner Than You Think",
    excerpt:
      "Tooth sensitivity, bleeding gums, persistent bad breath, swelling, and recurring pain can sometimes be early warning signs of dental problems.",
    readTime: "7 min read",
    publishedDate: "September 28, 2026",
    image: blog1Image,
    imageAlt: "Dentist explaining dental X-rays to a patient in a lavender dental clinic",
    introduction: [
      "Many dental problems begin quietly. A small cavity, mild gum inflammation, or slight sensitivity may not feel serious at first, but these symptoms can sometimes become more troublesome when ignored.",
      "Regular dental checkups are important, but certain signs mean you should consider visiting a dentist sooner rather than waiting for your next routine appointment.",
    ],
    sections: [
      {
        title: "1. Persistent Tooth Pain",
        paragraphs: ["Tooth pain is one of the clearest signs that something may need attention."],
        bullets: [
          "Tooth decay",
          "Dental infection",
          "Cracked tooth",
          "Gum problems",
          "Tooth sensitivity",
          "Dental pulp problems",
        ],
      },
      {
        title: "2. Bleeding Gums",
        paragraphs: [
          "Frequent gum bleeding can sometimes be associated with inflammation caused by plaque. Other signs may include:",
        ],
        bullets: ["Red gums", "Swelling", "Tenderness", "Bad breath", "Gum recession"],
      },
      {
        title: "3. Increased Tooth Sensitivity",
        paragraphs: ["Sensitivity may result from several common dental causes."],
        bullets: ["Worn enamel", "Gum recession", "Decay", "Cracks", "Exposed roots"],
      },
      {
        title: "4. Persistent Bad Breath",
        paragraphs: ["Persistent bad breath may sometimes be related to:"],
        bullets: ["Plaque", "Gum disease", "Tooth decay", "Dry mouth", "Oral infection"],
      },
      {
        title: "5. Broken or Chipped Tooth",
        paragraphs: [
          "A broken tooth should be assessed even if it does not initially hurt. Possible treatments include:",
        ],
        bullets: ["Bonding", "Filling", "Crown", "Root canal treatment"],
      },
      {
        title: "6. Swelling Around a Tooth",
        paragraphs: [
          "Swelling may indicate inflammation or infection. Seek care if accompanied by:",
        ],
        bullets: ["Toothache", "Fever", "Difficulty chewing", "Facial swelling"],
      },
      {
        title: "7. Loose Adult Tooth",
        paragraphs: [
          "Adult teeth should generally remain stable. A loose tooth may require prompt professional evaluation.",
        ],
      },
      {
        title: "Why Early Dental Care Matters",
        paragraphs: ["Early diagnosis may help:"],
        bullets: [
          "Preserve natural teeth",
          "Reduce treatment complexity",
          "Protect gum health",
          "Prevent infections from progressing",
          "Maintain comfortable chewing",
        ],
      },
    ],
    conclusion: [
      "Dental problems may not always produce severe symptoms immediately.",
      "Paying attention to changes in your teeth and gums can help you seek care earlier.",
    ],
    ctaTitle: "Notice Something Different About Your Smile?",
    ctaButton: "Book Appointment",
  },
  {
    slug: "clear-aligners-vs-braces",
    route: "/blogs/clear-aligners-vs-braces",
    category: "Orthodontics",
    title: "Clear Aligners vs Traditional Braces: Which Is Better for You?",
    excerpt:
      "Both clear aligners and traditional braces can help improve tooth alignment, but the right choice depends on your dental needs, lifestyle, and orthodontic condition.",
    readTime: "7 min read",
    publishedDate: "September 28, 2026",
    image: blog2Image,
    imageAlt: "Clear aligner consultation in a lavender dental clinic",
    introduction: [
      "A straight smile is not only about appearance. Proper tooth alignment can also make cleaning easier and improve how the upper and lower teeth meet.",
      "Two commonly used orthodontic treatments are traditional braces and clear aligners.",
    ],
    sections: [
      {
        title: "What Are Traditional Braces?",
        paragraphs: [
          "Traditional braces use brackets attached to the teeth and connected using orthodontic wires. During treatment, adjustments gradually guide the teeth into improved positions.",
        ],
        bullets: ["Crowded teeth", "Gaps", "Rotated teeth", "Bite problems", "Complex cases"],
      },
      {
        title: "What Are Clear Aligners?",
        paragraphs: [
          "Clear aligners are removable transparent trays created to gradually reposition teeth. Patients typically receive a series of aligners, with each tray producing controlled movement.",
        ],
      },
      {
        title: "Appearance",
        paragraphs: [
          "Clear aligners are popular because they are less noticeable. Traditional braces remain visible, although ceramic options may offer a more subtle appearance.",
        ],
      },
      {
        title: "Removability",
        paragraphs: [
          "Aligners can usually be removed while eating, brushing and flossing. This can make oral hygiene easier, but it also requires discipline.",
        ],
      },
      {
        title: "Eating During Treatment",
        paragraphs: [
          "Patients wearing clear aligners generally remove them before meals. With traditional braces, very hard foods, sticky sweets, chewing gum and hard nuts may need to be avoided.",
        ],
      },
      {
        title: "Cleaning Your Teeth",
        paragraphs: [
          "Braces require careful brushing around wires and brackets. With clear aligners, patients can remove the trays before brushing and flossing normally.",
        ],
      },
      {
        title: "Treatment Duration and Suitability",
        paragraphs: [
          "Treatment duration varies from person to person. Clear aligners are not automatically faster than braces, and some complex orthodontic conditions may be managed more predictably using braces.",
          "Your orthodontist will estimate treatment duration after examining your teeth, bite and jaw relationship.",
        ],
      },
      {
        title: "Which One Should You Choose?",
        paragraphs: [
          "Clear aligners may suit patients who value a discreet appearance, removability and easier brushing. Traditional braces may be recommended when greater movement control is needed or removable trays may be difficult to wear consistently.",
        ],
      },
    ],
    conclusion: [
      "Both treatments can produce excellent results when used appropriately. The right choice depends on your orthodontic condition, lifestyle, and professional assessment.",
    ],
    ctaTitle: "Thinking About Straightening Your Smile?",
    ctaButton: "Book Orthodontic Consultation",
  },
  {
    slug: "root-canal-treatment-myths-facts",
    route: "/blogs/root-canal-treatment-myths-facts",
    category: "Root Canal Treatment",
    title: "Root Canal Treatment: Myths, Facts and What Really Happens",
    excerpt:
      "Root canal treatment is often misunderstood. Discover why it is performed, how modern treatment works, and what patients can expect.",
    readTime: "7 min read",
    publishedDate: "September 28, 2026",
    image: blog3Image,
    imageAlt: "Dentist preparing root canal treatment in a modern clinic",
    introduction: [
      "Root canal treatment is one of the most commonly misunderstood dental procedures.",
      "Modern dentistry has changed considerably, and the treatment is primarily performed to remove infection and preserve a natural tooth.",
    ],
    sections: [
      {
        title: "Why Is Root Canal Treatment Needed?",
        paragraphs: [
          "Inside every tooth is a space containing dental pulp. The pulp includes nerves and blood vessels and can become inflamed or infected.",
        ],
        bullets: [
          "Deep decay",
          "Cracks",
          "Dental trauma",
          "Repeated dental procedures",
          "Severe tooth damage",
        ],
      },
      {
        title: "Common Symptoms",
        paragraphs: ["Possible signs include:"],
        bullets: [
          "Persistent toothache",
          "Pain while chewing",
          "Sensitivity to hot or cold",
          "Gum swelling",
          "Tooth discoloration",
        ],
      },
      {
        title: "Myth: Root Canal Treatment Is Extremely Painful",
        paragraphs: [
          "Root canal treatment is generally performed using local anesthesia. In many cases, the infected tooth causes the greatest discomfort, not the treatment itself.",
        ],
      },
      {
        title: "What Happens During the Procedure?",
        paragraphs: [
          "The dentist examines the tooth and may take dental X-rays. After local anesthesia, a small opening is made to reach the infected pulp.",
          "The damaged tissue is removed, the root canals are cleaned and disinfected, and the canals are filled and sealed.",
        ],
      },
      {
        title: "Restoration and Crown Protection",
        paragraphs: [
          "The tooth is restored using a filling or crown depending on how much healthy structure remains. A crown may be recommended for back teeth that experience strong chewing forces.",
        ],
      },
      {
        title: "Recovery and Benefits",
        paragraphs: [
          "Mild sensitivity may occur temporarily. Preserving a natural tooth can help maintain chewing function, bite stability, appearance and alignment of nearby teeth.",
        ],
      },
    ],
    conclusion: [
      "Root canal treatment is a routine dental procedure designed to remove infection and preserve a damaged tooth.",
      "Understanding the process can make the treatment feel far less intimidating.",
    ],
    ctaTitle: "Experiencing Tooth Pain or Sensitivity?",
    ctaButton: "Book Dental Consultation",
  },
  {
    slug: "dental-implants-before-treatment",
    route: "/blogs/dental-implants-before-treatment",
    category: "Dental Implants",
    title: "Dental Implants - Everything You Need to Know Before Treatment",
    excerpt:
      "Learn how dental implants work, who may be suitable for treatment, what the procedure involves, and how implants can replace missing teeth.",
    readTime: "7 min read",
    publishedDate: "September 28, 2026",
    image: blog4Image,
    imageAlt: "Dental implant consultation with a tooth model",
    introduction: [
      "Missing teeth can affect appearance, speech, chewing, and confidence. Over time, tooth loss may also influence the surrounding teeth and jawbone.",
      "Dental implants are designed to act as artificial tooth roots and can support crowns, bridges, or larger restorations.",
    ],
    sections: [
      {
        title: "What Is a Dental Implant?",
        paragraphs: [
          "A dental implant is a small screw-like fixture that is surgically placed into the jawbone. It usually includes an implant fixture, abutment and dental crown.",
        ],
      },
      {
        title: "Why Are Dental Implants Used?",
        paragraphs: ["Dental implants may be used for:"],
        bullets: [
          "One missing tooth",
          "Multiple missing teeth",
          "Full-arch tooth replacement",
          "Supporting certain dentures",
        ],
      },
      {
        title: "Benefits and Suitability",
        paragraphs: [
          "Potential benefits include improved chewing ability, natural-looking appearance, better stability and improved confidence.",
          "Suitability depends on gum health, jawbone quantity, oral hygiene, smoking habits, medical conditions, infections and bite condition.",
        ],
      },
      {
        title: "Implant Consultation",
        paragraphs: [
          "The consultation may include examination of teeth and gums, medical history review, dental X-rays, CBCT scan when required, bone evaluation and discussion of treatment options.",
        ],
      },
      {
        title: "Bone Grafting",
        paragraphs: [
          "If there is not enough bone to support an implant, a bone graft may sometimes be recommended. Not every patient requires this procedure.",
        ],
      },
      {
        title: "Placement, Healing and Crown",
        paragraphs: [
          "The area is numbed, the implant is positioned in the jawbone, and healing allows the implant to integrate with the bone. After healing, an abutment and custom crown are attached.",
        ],
      },
      {
        title: "Timeline, Aftercare and Longevity",
        paragraphs: [
          "Treatment time varies based on bone quality, healing response, number of implants and overall oral health.",
          "Implants require brushing, flossing, professional cleaning, regular checkups and avoidance of harmful habits.",
        ],
      },
    ],
    conclusion: [
      "Dental implants can be an effective way to restore missing teeth and improve function and appearance.",
      "The most important step is a detailed dental assessment to determine whether implant treatment is suitable for your individual condition.",
    ],
    ctaTitle: "Thinking About Dental Implants?",
    ctaButton: "Book Implant Consultation",
  },
  {
    slug: "gum-disease-warning-signs",
    route: "/blogs/gum-disease-warning-signs",
    category: "Gum Care",
    title: "Gum Disease - Early Warning Signs You Should Never Ignore",
    excerpt:
      "Bleeding gums, swelling, bad breath, and gum recession may be signs of gum disease. Early evaluation can help protect your teeth and gums.",
    readTime: "7 min read",
    publishedDate: "September 28, 2026",
    image: blog5Image,
    imageAlt: "Dentist discussing gum care with a patient",
    introduction: [
      "Healthy gums are essential for healthy teeth. Gum disease can develop slowly, and early symptoms are sometimes easy to ignore.",
      "Recognizing the warning signs can help protect your gums and teeth.",
    ],
    sections: [
      {
        title: "What Is Gum Disease?",
        paragraphs: [
          "Gum disease is an inflammatory condition that affects the tissues supporting the teeth. The earliest stage is gingivitis. If untreated, it may progress to periodontitis.",
        ],
      },
      {
        title: "What Causes Gum Disease?",
        bullets: [
          "Poor oral hygiene",
          "Plaque accumulation",
          "Tartar buildup",
          "Smoking",
          "Certain medical conditions",
          "Hormonal changes",
          "Irregular dental checkups",
        ],
      },
      {
        title: "Early Warning Signs",
        paragraphs: [
          "Bleeding gums, red or swollen gums, persistent bad breath, gum recession, loose teeth, pain while chewing and pus around the gums should be evaluated by a dentist.",
        ],
      },
      {
        title: "What Happens If It Is Left Untreated?",
        bullets: [
          "Gum recession",
          "Bone loss",
          "Loose teeth",
          "Tooth loss",
          "Persistent bad breath",
          "Increased tooth sensitivity",
        ],
      },
      {
        title: "Diagnosis and Treatment",
        paragraphs: [
          "A dentist may assess gum appearance, bleeding, pocket depth, tooth mobility and bone levels. Dental X-rays may also be used.",
          "Early gum disease may be managed with professional cleaning and improved oral hygiene. More advanced disease may require deep cleaning, scaling and root planing, periodontal therapy or surgical treatment.",
        ],
      },
      {
        title: "Prevention",
        bullets: [
          "Brush twice daily",
          "Floss regularly",
          "Use interdental cleaning tools",
          "Avoid smoking",
          "Attend regular dental checkups",
          "Have professional cleaning when recommended",
        ],
      },
    ],
    conclusion: [
      "Bleeding gums, swelling, bad breath, and gum recession should not be considered normal.",
      "Early evaluation can help manage gum disease before it progresses.",
    ],
    ctaTitle: "Are Your Gums Bleeding or Swollen?",
    ctaButton: "Book Gum Evaluation",
  },
  {
    slug: "wisdom-tooth-removal",
    route: "/blogs/wisdom-tooth-removal",
    category: "Oral Surgery",
    title: "Wisdom Tooth Removal - When Is It Really Necessary?",
    excerpt:
      "Not every wisdom tooth needs removal. Learn when wisdom teeth can cause pain, infection, crowding, or other dental problems.",
    readTime: "7 min read",
    publishedDate: "September 28, 2026",
    image: blog6Image,
    imageAlt: "Dentist explaining oral care with a dental model to a patient",
    introduction: [
      "Wisdom teeth are the last permanent teeth to develop. They usually appear during the late teenage years or early adulthood.",
      "Removal is not automatically required for every patient. A dentist or oral surgeon decides based on how the tooth is developing and whether it is causing problems.",
    ],
    sections: [
      {
        title: "What Are Wisdom Teeth?",
        paragraphs: [
          "Wisdom teeth are the third molars located at the back of the mouth. Some people develop all four, while others develop fewer or none at all.",
        ],
      },
      {
        title: "Impacted Wisdom Teeth",
        paragraphs: [
          "A wisdom tooth is impacted when it does not fully emerge into the mouth because there is not enough space, the tooth is angled incorrectly, it is trapped under the gum or it is blocked by another tooth.",
        ],
      },
      {
        title: "Common Symptoms",
        bullets: [
          "Pain at the back of the mouth",
          "Gum swelling",
          "Jaw discomfort",
          "Difficulty opening the mouth",
          "Bad taste",
          "Bad breath",
          "Food trapping",
          "Recurrent infection",
        ],
      },
      {
        title: "When May Removal Be Recommended?",
        bullets: [
          "Repeated infection",
          "Severe pain",
          "Tooth decay",
          "Gum problems",
          "Damage to the adjacent tooth",
          "Cyst formation",
          "Crowding or pressure in selected cases",
        ],
      },
      {
        title: "Dental Examination and Imaging",
        paragraphs: [
          "Your dentist may perform an oral examination, dental X-ray, panoramic X-ray or CBCT scan in selected cases to understand tooth position, root shape, bone structure and nearby nerves.",
        ],
      },
      {
        title: "Extraction and Recovery",
        paragraphs: [
          "For a simple extraction, the area is numbed, the tooth is loosened and removed. For impacted wisdom teeth, a small incision may be made and the tooth may be divided into sections.",
          "Temporary swelling, mild bleeding, jaw stiffness and tenderness can occur. Soft foods such as yogurt, soups, mashed vegetables, soft rice and soft eggs may be advised during early healing.",
        ],
      },
      {
        title: "Dry Socket and When Removal Is Not Needed",
        paragraphs: [
          "Dry socket can occur if the blood clot at the extraction site becomes dislodged or fails to form properly. Following post-treatment instructions can help reduce the risk.",
          "Healthy wisdom teeth that are fully erupted, properly positioned, easy to clean and free from disease may not require removal.",
        ],
      },
    ],
    conclusion: [
      "Wisdom tooth removal should be based on individual dental findings rather than age alone.",
      "If you experience repeated pain, swelling, infection, or difficulty cleaning around a wisdom tooth, a professional evaluation can determine the most suitable treatment.",
    ],
    ctaTitle: "Having Wisdom Tooth Pain or Swelling?",
    ctaButton: "Book Dental Examination",
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export function getRelatedBlogPosts(slug: string) {
  return blogPosts.filter((post) => post.slug !== slug).slice(0, 3);
}
