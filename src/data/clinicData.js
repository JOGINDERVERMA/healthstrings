// /src/data/clinicData.js
// Complete single-source-of-truth clinical database for HealthStrings Clinic Jaipur
// Includes 100% complete detailing data for every Part, Pillar, and Treatment

export const CLINIC_INFO = {
  name: "HealthStrings Clinic",
  tagline: "Advanced Physiotherapy Care, Nutrition & Sports Conditioning in Jaipur",
  phone: "+91 92510 59302",
  phoneDisplay: "+91 92510 59302",
  whatsappUrl: "https://wa.me/919251059302?text=Hello%20Healthstrings%20Jaipur%20Clinic,%20I%20would%20like%20to%20book%20a%20consultation.",
  address: "Chamber – 101, First Floor, Surya Hospital Building, Opp. SMS Hospital, C-Scheme, Ashok Nagar, Jaipur, Rajasthan",
  shortAddress: "Surya Hospital Building, Opp. SMS Hospital, C-Scheme, Jaipur",
  website: "www.healthstrings.in",
  hours: "Mon – Sat: 8:00 AM – 8:30 PM | Sun: Prior Appointment Only",
  rating: "5.0",
  reviewCount: "1,400+ Verified Patients",
  fitnessStudioUrl: "#fitness-studio",
  email: "care@healthstrings.in"
};

export const JAIPUR_NEIGHBORHOODS = [
  { name: "C Scheme", distance: "0.2 km", focus: "Central Medical Hub & Corporate Executives" },
  { name: "Opposite SMS Hospital", distance: "0.1 km", focus: "Post-Surgery & Specialist Orthopedic Referrals" },
  { name: "Raja Park", distance: "2.4 km", focus: "Athletes, Sports Injuries & ACL Rehab" },
  { name: "Bapu Nagar", distance: "1.8 km", focus: "Geriatric Spine Care & Chronic Knee Pain" },
  { name: "Civil Lines & Statue Circle", distance: "1.5 km", focus: "Postural Correction & Ergonomic Spine Care" }
];

export const PART_WISE_SERVICES = [
  {
    id: "part-physio",
    partNumber: "Part 01",
    title: "1. Physiotherapy Services",
    subtitle: "Advanced Physiotherapy Care in Jaipur",
    description: "At HealthStrings Clinic, we provide expert physiotherapy treatment focused on relieving pain, restoring mobility, and improving overall physical function. Our evidence-based approach targets the root cause of pain, ensuring long-term recovery without surgery.",
    badgeColor: "#0f766e",
    bgTint: "#f0fdf4",
    borderColor: "#99f6e4",
    iconName: "Activity",
    items: [
      "Back & Neck Pain Treatment",
      "Knee & Shoulder Pain Management",
      "Disc Herniation & Sciatica Care",
      "Sports Injury Rehabilitation",
      "Post-Surgery Rehabilitation",
      "Posture Correction & Mobility Training",
      "Chronic Pain Management"
    ]
  },
  {
    id: "part-nutrition",
    partNumber: "Part 02",
    title: "2. Nutrition & Diet Lifestyle",
    subtitle: "Personalized Nutrition & Lifestyle Management",
    description: "At HealthStrings, we believe food is the foundation of healing. Our customized nutrition plans are designed to improve health, balance hormones, and support your fitness and medical goals.",
    badgeColor: "#d97706",
    bgTint: "#fffbeb",
    borderColor: "#fde68a",
    iconName: "Apple",
    items: [
      "Weight Loss & Healthy Weight Gain",
      "PCOS / PCOD & Hormonal Balance Diet",
      "Gut Health & Digestion Improvement",
      "Sports Nutrition Plans",
      "Immunity-Boosting Diet Plans",
      "Personalized Diet Charts",
      "Diabetes & Heart Health Nutrition"
    ]
  },
  {
    id: "part-conditioning",
    partNumber: "Part 03",
    title: "3. Strength & Conditioning",
    subtitle: "Performance-Based Strength & Conditioning Programs",
    description: "Our strength and conditioning programs are designed to enhance performance, prevent injuries, and build a stronger, more resilient body. Ideal for athletes and fitness enthusiasts.",
    badgeColor: "#0284c7",
    bgTint: "#f0f9ff",
    borderColor: "#bae6fd",
    iconName: "Dumbbell",
    isFitnessStudioLink: true,
    items: [
      "Functional Movement Training",
      "Injury Prevention Training",
      "Sports Performance Enhancement",
      "Strength & Muscle Building Programs",
      "Rehabilitation-Based Strength Training",
      "Mobility & Flexibility Training"
    ]
  }
];

export const HOME_SERVICE_PILLARS = PART_WISE_SERVICES;

// 100% Complete Detailing Directory Covering All Pillars and Specific Sub-Treatments
export const CORE_SERVICES = [
  {
    id: "part-physio",
    title: "Advanced Physiotherapy Care in Jaipur",
    category: "Part 01 • Physiotherapy Pillar",
    shortDesc: "Complete evidence-based physical therapy focused on relieving pain, restoring mobility, and long-term recovery without surgery.",
    fullDescription: "At HealthStrings Clinic in C Scheme Jaipur, our Physiotherapy Department operates on the core principle that every physical ache has a root mechanical cause. We treat back pain, knee arthritis, sciatica, and sports injuries without reliance on passive machines alone.",
    symptoms: [
      "Acute or chronic pain in back, neck, knee, or shoulders",
      "Radiating nerve pain down legs or arms",
      "Stiffness and restricted joint motion after waking",
      "Post-traumatic or post-surgical movement limitation"
    ],
    procedure: [
      { step: "01", name: "Root Cause Diagnostic Assessment", desc: "Detailed orthopedic testing of joints, ligaments, and muscular balance." },
      { step: "02", name: "Manual Therapy & Joint Mobilization", desc: "Hands-on techniques to restore alignment and relieve joint restriction." },
      { step: "03", name: "Evidence-Based Electrotherapy", desc: "Targeted IFT, Ultrasound, and Cryo-protocols for fast inflammation relief." },
      { step: "04", name: "Functional Mobility & Postural Retraining", desc: "Custom therapeutic exercise prescription to ensure permanent recovery." }
    ],
    seoKeywords: "Best Physiotherapy Clinic Jaipur, Physiotherapist C Scheme, Opposite SMS Hospital Physio"
  },
  {
    id: "orthopedic",
    title: "Back & Neck Pain Treatment",
    category: "Physiotherapy Department",
    shortDesc: "Evidence-based non-surgical recovery for cervical spondylosis, lumbar herniated discs, sciatica, and postural spine stiffness.",
    fullDescription: "Back and neck pain are among the most debilitating conditions faced by working professionals across C Scheme and Jaipur. Our specialized spinal protocol combines hands-on joint decompression with core multifidus activation.",
    symptoms: [
      "Lower back radiation pain down to legs (Sciatica)",
      "Stiffness in neck & shoulder blade upon waking",
      "Slipped disc or bulging L4-L5 vertebrae pain",
      "Difficulty sitting or driving for long durations"
    ],
    procedure: [
      { step: "01", name: "Spine & Postural Biomechanics Audit", desc: "Precise orthopedic testing to pinpoint nerve root compression." },
      { step: "02", name: "Manual Joint Mobilization", desc: "Gentle hands-on joint glide therapy to release trapped nerves." },
      { step: "03", name: "Core Deep-Stabilization Protocols", desc: "Strengthening deep multifidus & transverse abdominis muscles." },
      { step: "04", name: "Ergonomic & Workplace Armor", desc: "Custom posture blueprint to prevent recurrent lower back pain." }
    ],
    seoKeywords: "Spine Physiotherapist C Scheme Jaipur, Sciatica Treatment Jaipur, Slipped Disc Non-Surgical Clinic Opposite SMS Hospital"
  },
  {
    id: "knee-shoulder",
    title: "Knee & Shoulder Pain Management",
    category: "Physiotherapy Department",
    shortDesc: "Specialized joint care for knee osteoarthritis, meniscus tears, frozen shoulder, and rotator cuff tendinopathy.",
    fullDescription: "Whether dealing with age-related osteoarthritis in Bapu Nagar or rotator cuff strains from athletics in Raja Park, our knee and shoulder protocols preserve joint cartilage and restore full 360-degree range of motion.",
    symptoms: [
      "Pain and grating sensation (crepitus) when climbing stairs",
      "Inability to lift arm above shoulder or reach behind back",
      "Morning knee stiffness lasting over 30 minutes",
      "Shoulder impingement pain during sleep"
    ],
    procedure: [
      { step: "01", name: "Joint Capsule & Ligament Evaluation", desc: "Testing meniscus integrity and glenohumeral stability." },
      { step: "02", name: "Capsular Stretching & Myofascial Release", desc: "Opening restricted shoulder capsules and tight quadriceps." },
      { step: "03", name: "Patellar Alignment & VMO Strengthening", desc: "Correcting kneecap tracking to prevent bone-on-bone friction." },
      { step: "04", name: "Dynamic Load Tolerance", desc: "Rebuilding joint strength for stair climbing and active sports." }
    ],
    seoKeywords: "Knee Pain Physiotherapy Jaipur, Frozen Shoulder Treatment C Scheme, Rotator Cuff Rehab Jaipur"
  },
  {
    id: "disc-sciatica",
    title: "Disc Herniation & Sciatica Care",
    category: "Physiotherapy Department",
    shortDesc: "Targeted non-surgical spinal decompression for slipped discs, bulging lumbar discs, and sciatic nerve entrapment.",
    fullDescription: "Sciatica occurs when a herniated disc compresses the sciatic nerve root. At Healthstrings Clinic opposite SMS Hospital, our ethical non-surgical lumbar decompression protocol has helped hundreds avoid spinal surgery.",
    symptoms: [
      "Sharp electric shock-like shooting pain down leg or foot",
      "Numbness or tingling sensation in toes",
      "Aggravated back pain when bending forward or coughing",
      "Weakness in ankle dorsiflexion (foot drop symptoms)"
    ],
    procedure: [
      { step: "01", name: "Neurological Reflex & Dermatome Testing", desc: "Pinpointing the exact vertebral level (L4, L5, or S1) involved." },
      { step: "02", name: "McKenzie Extension & Directional Preference", desc: "Evidence-based exercises to centralize herniated disc material." },
      { step: "03", name: "Sciatic Nerve Gliding & Flossing", desc: "Freeing the sciatic nerve from surrounding scar adhesions." },
      { step: "04", name: "Lumbar Muscular Corset Training", desc: "Building a natural muscular corset around the spine for permanent safety." }
    ],
    seoKeywords: "Sciatica Physiotherapist Jaipur, Slipped Disc Clinic C Scheme, Non Surgical Disc Treatment Opposite SMS Hospital"
  },
  {
    id: "sports-injury",
    title: "Sports Injury & Athletic Rehabilitation",
    category: "Physiotherapy & Conditioning",
    shortDesc: "Targeted sports therapy for ACL tears, rotator cuff strains, tennis elbow, ankle sprains, and marathon return-to-play protocol.",
    fullDescription: "Athletes across Raja Park and C Scheme trust Healthstrings for fast-track sports rehabilitation. We combine acute clinical tissue healing with sport-specific agility training.",
    symptoms: [
      "Knee instability during pivoting or running",
      "Sharp pain in shoulder during overhead throws or lifting",
      "Recurrent hamstring or calf muscle strains",
      "Post-traumatic swelling in ankle or ligaments"
    ],
    procedure: [
      { step: "01", name: "Kinetic Chain & Gait Analysis", desc: "Video-assisted biomechanical evaluation of athletic movement." },
      { step: "02", name: "Acute Inflammation & Cryo-Recovery", desc: "Modern electrotherapy & clinical icing to rapidly clear swelling." },
      { step: "03", name: "Sport-Specific Plyometric Loading", desc: "Progressive tendon loading and neuromuscular agility drills." },
      { step: "04", name: "Long-Term Preventive Agility Protocols", desc: "Structured neuromuscular conditioning and injury prevention drills for safe return to sports." }
    ],
    seoKeywords: "Sports Injury Clinic Raja Park Jaipur, ACL Rehab Jaipur, Sports Physiotherapist Near SMS Hospital"
  },
  {
    id: "post-surgery",
    title: "Post-Surgery Rehabilitation",
    category: "Physiotherapy Department",
    shortDesc: "Structured recovery protocols following Total Knee Replacement (TKR), Hip Replacement, ACL reconstruction, or spinal surgery.",
    fullDescription: "Post-operative success depends 50% on the surgery and 50% on proper physiotherapy. We work closely with orthopedic surgeons at SMS Hospital and across Jaipur to provide sterile, progressive post-surgical recovery.",
    symptoms: [
      "Restricted knee bending after TKR surgery",
      "Stiffness and scar tissue pain around surgical incisions",
      "Muscle atrophy and weakness in operated leg or arm",
      "Balance insecurity when walking without support"
    ],
    procedure: [
      { step: "01", name: "Early Range of Motion (ROM) Restoration", desc: "Safe, protocol-driven mobilization to prevent contractures." },
      { step: "02", name: "Myofascial Scar Tissue Release", desc: "Specialized soft tissue techniques to improve elasticity around scars." },
      { step: "03", name: "Proprioceptive Balance Retraining", desc: "Rebuilding joint confidence on dynamic surfaces." },
      { step: "04", name: "Independent Functional Mobility", desc: "Stair climbing, squatting, and unassisted daily life recovery." }
    ],
    seoKeywords: "Knee Replacement Rehab Jaipur, Post Surgery Physiotherapy C Scheme, Orthopedic Rehab Near SMS Hospital"
  },
  {
    id: "posture-correction",
    title: "Posture Correction & Mobility Training",
    category: "Physiotherapy Department",
    shortDesc: "Dedicated correction for tech-neck, rounded shoulders, scoliosis management, and ergonomic desk-worker rehabilitation.",
    fullDescription: "Long hours at desks cause forward-head posture and rounded shoulders. Our posture correction program realigns the thoracic spine and builds lasting upper back endurance.",
    symptoms: [
      "Forward head posture and chronic upper back tension",
      "Frequent tension headaches starting from neck base",
      "Rounded shoulders and tight chest muscles",
      "Lower back fatigue after desk working"
    ],
    procedure: [
      { step: "01", name: "Photographic Postural Alignment Scan", desc: "Identifying structural deviations and muscular imbalances." },
      { step: "02", name: "Thoracic & Cervical Decompression", desc: "Opening up restricted vertebrae and spinal joints." },
      { step: "03", name: "Scapular & Deep Flexor Activation", desc: "Waking up dormant stabilizing muscles that keep posture upright." },
      { step: "04", name: "Daily Workplace Habit Prescription", desc: "Micro-breaks and ergonomic chair setup for lifetime spinal health." }
    ],
    seoKeywords: "Posture Correction Physiotherapy Jaipur, Ergonomic Spine Specialist Bapu Nagar, Neck Pain Clinic C Scheme"
  },
  {
    id: "chronic-pain",
    title: "Chronic Pain Management",
    category: "Physiotherapy Department",
    shortDesc: "Advanced electrotherapy (IFT, TENS, Ultrasound) combined with dry needling and myofascial release for long-standing arthritis and fibromyalgia.",
    fullDescription: "For patients suffering from chronic joint pain lasting over 3 months, our integrative approach calms nerve hypersensitivity and safely restores functional movement.",
    symptoms: [
      "Persistent pain lasting longer than 3 months",
      "Osteoarthritis knee or hip morning stiffness",
      "Trigger points and knots across shoulder blades",
      "Weather-sensitive aching joints"
    ],
    procedure: [
      { step: "01", name: "Pain Pathway & Neuromuscular Assessment", desc: "Distinguishing between structural joint damage and nerve hypersensitivity." },
      { step: "02", name: "Targeted Clinical Modalities", desc: "Evidence-based ultrasound and interferential therapy for deep pain modulation." },
      { step: "03", name: "Clinical Dry Needling & Taping", desc: "Releasing deep trigger points and offloading arthritic joints." },
      { step: "04", name: "Graded Exercise Exposure", desc: "Safely introducing movement without flaring chronic pain." }
    ],
    seoKeywords: "Arthritis Physiotherapy Jaipur, Dry Needling C Scheme Jaipur, Chronic Knee Pain Specialist Opposite SMS Hospital"
  },
  {
    id: "part-nutrition",
    title: "Personalized Nutrition & Lifestyle Management",
    category: "Part 02 • Nutrition Pillar",
    shortDesc: "Customized nutrition plans designed to improve health, balance hormones, and support your medical and fitness goals.",
    fullDescription: "At Healthstrings Clinic, we believe food is the foundation of healing. Our Nutrition Department tailors every diet plan to Indian home kitchens, ensuring delicious, sustainable hormonal and metabolic balance.",
    symptoms: [
      "Unexplained weight gain or resistance to fat loss",
      "Hormonal irregularities, PCOS/PCOD, or mood fluctuations",
      "Chronic bloating, indigestion, or low energy levels",
      "Inflammation that slows down joint or muscle recovery"
    ],
    procedure: [
      { step: "01", name: "Comprehensive Blood & Metabolic Audit", desc: "Evaluating thyroid panels, insulin sensitivity, and lipid markers." },
      { step: "02", name: "Customized Therapeutic Diet Blueprint", desc: "Personalized meal charts aligned with Rajasthani & Indian dietary habits." },
      { step: "03", name: "Anti-Inflammatory Joint Support", desc: "Targeting foods that naturally reduce joint swelling and muscle soreness." },
      { step: "04", name: "Weekly Accountability & Progression", desc: "Continuous monitoring and menu rotations to guarantee long-term success." }
    ],
    seoKeywords: "Nutritionist Jaipur, Dietician C Scheme Jaipur, Holistic Nutrition Clinic Opposite SMS Hospital"
  },
  {
    id: "clinical-nutrition",
    title: "Weight Loss & Healthy Weight Gain",
    category: "Nutrition Department",
    shortDesc: "Scientific body composition management focusing on sustainable fat loss or lean muscle mass gain without crash dieting.",
    fullDescription: "Forget starvation diets. Our Jaipur nutritionists build customized caloric and macronutrient plans that optimize metabolic rate while preserving muscle tissue.",
    symptoms: [
      "Stubborn belly fat or visceral fat accumulation",
      "Difficulty gaining healthy muscle weight after illness",
      "Energy crashes in mid-afternoon",
      "Plateaued weight despite gym workouts"
    ],
    procedure: [
      { step: "01", name: "BIA Body Composition Analysis", desc: "Measuring muscle mass, fat percentage, and basal metabolic rate." },
      { step: "02", name: "Metabolic Correction Meal Charting", desc: "Balancing protein, complex carbohydrates, and essential fats." },
      { step: "03", name: "Portion & Timing Optimization", desc: "Aligning meal timings with your daily work and sleep schedule." },
      { step: "04", name: "Lifetime Weight Maintenance", desc: "Transitioning to intuitive eating for permanent healthy weight." }
    ],
    seoKeywords: "Weight Loss Dietician Jaipur, Healthy Weight Gain Jaipur, Best Nutritionist C Scheme"
  },
  {
    id: "pcos-diet",
    title: "PCOS / PCOD & Hormonal Balance Diet",
    category: "Nutrition Department",
    shortDesc: "Evidence-based nutritional intervention for PCOS, thyroid health, insulin resistance, and reproductive wellness.",
    fullDescription: "PCOS and hormonal imbalances require targeted blood sugar regulation and anti-inflammatory nutrients. Our specialized PCOS diet helps normalize cycles, improve skin clarity, and boost natural energy.",
    symptoms: [
      "Irregular menstrual cycles or PCOS diagnosis",
      "Insulin resistance and sugar cravings",
      "Unwanted hair growth or hormonal acne",
      "Thyroid sluggishness and lethargy"
    ],
    procedure: [
      { step: "01", name: "Hormonal & Glycemic Profiling", desc: "Mapping insulin spikes and reproductive hormone balance." },
      { step: "02", name: "Low-Glycemic & Seed Cycling Protocols", desc: "Introducing hormone-friendly superfoods and seed rotations." },
      { step: "03", name: "Gut-Endocrine Axis Restoration", desc: "Improving gut microbiome to aid natural hormone detoxification." },
      { step: "04", name: "Long-Term Hormonal Harmony", desc: "Empowering you with dietary skills that maintain balanced hormones." }
    ],
    seoKeywords: "PCOS Diet Specialist Jaipur, Hormonal Balance Dietician C Scheme, Thyroid Nutritionist Jaipur"
  },
  {
    id: "gut-health",
    title: "Gut Health & Digestion Improvement",
    category: "Nutrition Department",
    shortDesc: "Holistic gut healing for IBS, acid reflux, chronic bloating, and microbiome diversity restoration.",
    fullDescription: "Your gut is your second brain. We resolve persistent digestive issues by identifying food sensitivities and nourishing the gut lining with natural prebiotics and probiotics.",
    symptoms: [
      "Frequent bloating or post-meal heaviness",
      "Acid reflux, heartburn, or GERD symptoms",
      "Irritable Bowel Syndrome (IBS) or irregular bowel habits",
      "Food sensitivities or post-meal lethargy"
    ],
    procedure: [
      { step: "01", name: "Symptom & Trigger Food Mapping", desc: "Identifying inflammatory triggers in your daily diet." },
      { step: "02", name: "Gut Lining Repair Protocol", desc: "Gentle anti-inflammatory foods that soothe irritated mucosa." },
      { step: "03", name: "Microbiome Diversity Boosting", desc: "Incorporating traditional Indian fermented foods and natural fibers." },
      { step: "04", name: "Optimized Digestive Absorption", desc: "Ensuring your body absorbs maximum nutrients from every meal." }
    ],
    seoKeywords: "Gut Health Nutritionist Jaipur, IBS Diet Specialist C Scheme, Acidity Dietician Jaipur"
  },
  {
    id: "sports-nutrition",
    title: "Sports Nutrition & Immunity Diet Plans",
    category: "Nutrition Department",
    shortDesc: "Precision sports fueling for endurance athletes, gym enthusiasts, and immunity enhancement.",
    fullDescription: "Peak athletic performance demands customized pre-workout fueling, intra-workout hydration, and rapid post-workout protein synthesis.",
    symptoms: [
      "Muscle cramps or early fatigue during training",
      "Slow recovery between workouts or tournaments",
      "Frequent colds or low immune resilience",
      "Uncertainty around supplement and protein dosing"
    ],
    procedure: [
      { step: "01", name: "Athletic Energy Expenditure Calculation", desc: "Calculating exact caloric burn for your sport or training regimen." },
      { step: "02", name: "Precision Nutrient Timing", desc: "Structured pre- and post-workout meal blueprints." },
      { step: "03", name: "Immunity & Antioxidant Defense", desc: "Rich micronutrient integration to prevent overtraining sickness." },
      { step: "04", name: "Performance Peak Readiness", desc: "Competition day fueling strategies for athletes across Jaipur." }
    ],
    seoKeywords: "Sports Nutritionist Jaipur, Athletic Diet Chart C Scheme, Immunity Dietician Raja Park"
  },
  {
    id: "cardio-diabetes",
    title: "Diabetes & Heart Health Nutrition",
    category: "Nutrition Department",
    shortDesc: "Medical nutrition therapy for Type 2 Diabetes management, hypertension control, and cholesterol optimization.",
    fullDescription: "Managing blood sugar and cardiovascular health requires expert dietary guidance. Our clinical plans lower HbA1c and maintain healthy blood pressure safely.",
    symptoms: [
      "Elevated fasting blood sugar or high HbA1c levels",
      "High cholesterol or triglyceride profiles",
      "High blood pressure (Hypertension)",
      "Family history of cardiovascular or metabolic disease"
    ],
    procedure: [
      { step: "01", name: "Clinical Lipid & Glucose Review", desc: "Auditing lab reports alongside your treating physician." },
      { step: "02", name: "Heart-Healthy & Low-GI Meal Design", desc: "Replacing refined carbs with heart-protective fiber and healthy fats." },
      { step: "03", name: "Sodium & Fluid Balance", desc: "Regulating blood pressure through natural dietary potassium and spices." },
      { step: "04", name: "Sustainable Metabolic Control", desc: "Enjoying social meals while maintaining clinical numbers." }
    ],
    seoKeywords: "Diabetes Dietician Jaipur, Heart Patient Nutritionist C Scheme, Cholesterol Diet Plan Jaipur"
  },
  {
    id: "part-conditioning",
    title: "Ergonomic & Postural Rehabilitation",
    category: "Part 03 • Ergonomic & Posture Care",
    shortDesc: "Comprehensive postural correction and ergonomic rehabilitation designed to reverse desk-job fatigue and prevent spinal disorders.",
    fullDescription: "Long hours at office desks and improper posture place constant strain on the cervical and lumbar spine. Our clinical ergonomic protocols strengthen core postural stabilizers and correct spinal alignment.",
    symptoms: [
      "Slouching posture or rounded shoulders from computer usage",
      "Stiffness and aching across upper back and trapezoid muscles",
      "Core weakness leading to recurrent lower back discomfort",
      "Desiring preventive spinal protection and better alignment"
    ],
    procedure: [
      { step: "01", name: "Structural Posture & Spinal Screening", desc: "Digital posture evaluation of curvature and muscle asymmetry." },
      { step: "02", name: "Scapular & Deep Spine Stabilization", desc: "Targeted activation of rhomboids, lower traps, and core muscles." },
      { step: "03", name: "Workstation Ergonomic Adjustment Chart", desc: "Custom guidance on chair, screen height, and daily stretches." },
      { step: "04", name: "Long-Term Spinal Health", desc: "Sustainable postural habits that protect your spine for life." }
    ],
    seoKeywords: "Ergonomic Clinic Jaipur, Posture Correction C Scheme Jaipur, Spinal Rehab SMS Hospital Jaipur"
  },
  {
    id: "strength-conditioning",
    title: "Clinical Ergonomics & Posture Care",
    category: "Preventive Rehabilitation",
    shortDesc: "Specialized clinical posture correction and core strengthening for professionals and seniors in Jaipur.",
    fullDescription: "Our specialized preventive rehabilitation programs protect your spine and joints from chronic degeneration through precision core and postural therapy.",
    symptoms: [
      "Chronic neck tension from screen usage",
      "Poor standing or sitting posture",
      "Loss of joint flexibility or early postural rounding",
      "Desiring preventive orthopedic guidance"
    ],
    procedure: [
      { step: "01", name: "Spinal Biomechanical Assessment", desc: "Detailed evaluation of spinal curves and muscle firing patterns." },
      { step: "02", name: "Targeted Core & Spinal Loading", desc: "Evidence-based exercises to strengthen supportive spinal musculature." },
      { step: "03", name: "Ergonomic Lifestyle Protocol", desc: "Personalized advice on sleeping, sitting, and working postures." },
      { step: "04", name: "Permanent Postural Resilience", desc: "Confident, upright posture with lasting pain prevention." }
    ],
    seoKeywords: "Posture Rehab Jaipur, Ergonomic Physiotherapy Jaipur, Core Strengthening C Scheme Jaipur"
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Dr. Suresh",
    location: "C Scheme, Jaipur",
    condition: "Severe L4-L5 Disc Herniation & lateral epicondylitis",
    quote: "Being a practicing surgeon opposite SMS Hospital, I was skeptical about avoiding surgery for my lateral epicondylitis. Healthstrings Clinic relieved my radiating pain in 3 weeks through ethical manual physiotherapy and guided functional core strengthening.",
    rating: 5,
    tag: "Verified Medical Patient"
  },
  {
    id: 2,
    name: "Sunita Khandelwal",
    location: "Raja Park, Jaipur",
    condition: "Post-TKR Knee Replacement Rehab",
    quote: "After my knee replacement, walking even 10 steps was excruciating. The doctors at Healthstrings provided gentle, encouraging care. Within 45 days, I walked up stairs comfortably. Truly the cleanest and most ethical physiotherapy clinic in Jaipur.",
    rating: 5,
    tag: "Verified Knee Rehab Patient"
  },
  {
    id: 3,
    name: "Raghavendra Bhargava",
    location: "Bapu Nagar, Jaipur",
    condition: "PCOS Diet + Sports ACL Recovery",
    quote: "Healthstrings is unique because they combine physiotherapy with proper nutrition and ergonomic conditioning. My ACL tear rehab was flawless, and their nutrition guidance improved my overall metabolic energy.",
    rating: 5,
    tag: "Verified Athlete"
  }
];

export const FAQS = [
  {
    q: "Where is Healthstrings Physiotherapy Clinic located in Jaipur?",
    a: "We are centrally situated on the 1st Floor of Surya Hospital Building, directly opposite SMS Hospital in C Scheme, Jaipur. Our location provides easy parking and elevator access for patients coming from C Scheme, Raja Park, Bapu Nagar, and Civil Lines."
  },
  {
    q: "Do I need a doctor's referral to consult the physiotherapist?",
    a: "No prior referral is necessary. You can book an independent evaluation directly with our principal physiotherapist. If you have MRI scans, X-rays, or orthopedic referral slips from SMS Hospital or other clinics, please bring them along."
  },
  {
    q: "Do you offer both Physiotherapy and Nutrition under one roof?",
    a: "Yes! HealthStrings Clinic provides integrated dual-pillar care combining non-surgical orthopedic physical therapy with customized metabolic and hormonal diet charts by Dr. Meenakshi Kanwar Sisodia."
  },
  {
    q: "What makes Healthstrings different from other clinics in Jaipur?",
    a: "We strictly avoid passive 'machine-only' treatments. Every patient receives one-on-one manual physiotherapy, customized exercise prescription, and holistic nutrition guidance in an ethical, human-first environment."
  }
];

export const EXACT_PILLARS = [
  {
    id: "pillar-physio",
    partNumber: "01",
    title: "Physiotherapy Services",
    subtitle: "Advanced Physiotherapy Care in Jaipur",
    description: "At HealthStrings Clinic, we provide expert physiotherapy treatment focused on relieving pain, restoring mobility, and improving overall physical function. Our evidence-based approach targets the root cause of pain, ensuring long-term recovery without surgery.",
    badgeColor: "#0f766e",
    bgTint: "#f0fdf4",
    items: [
      "Back & Neck Pain Treatment",
      "Knee & Shoulder Pain Management",
      "Disc Herniation & Sciatica Care",
      "Sports Injury Rehabilitation",
      "Post-Surgery Rehabilitation",
      "Aqua therapy",
      "Posture Correction & Mobility Training",
      "Chronic Pain Management",
      "Arthritis & Joint Pain Care",
      "Frozen Shoulder Rehabilitation",
      "Balance & Gait Training"
    ]
  },
  {
    id: "pillar-nutrition",
    partNumber: "02",
    title: "Nutrition & Lifestyle Management",
    subtitle: "Personalized Nutrition & Lifestyle Care",
    description: "At HealthStrings Clinic, we believe food is the foundation of healing. Our customized nutrition plans are designed to improve health, balance hormones, manage medical conditions, and support your long-term wellness goals.",
    badgeColor: "#0d9488",
    bgTint: "#ecfdf5",
    items: [
      "Weight Loss Programs",
      "Healthy Weight Gain Programs",
      "PCOS / PCOD & Hormonal Balance Diet",
      "Thyroid Nutrition Management",
      "Gut Health & Digestion Improvement",
      "Sports Nutrition Plans",
      "Immunity-Boosting Diet Plans",
      "Personalized Diet Charts",
      "Diabetes & Heart Health Nutrition",
      "Nutrition Counseling",
      "Pregnancy & Postnatal Nutrition",
      "Child & Adolescent Nutrition"
    ]
  },
  {
    id: "pillar-strength",
    partNumber: "03",
    title: "Strength & Conditioning",
    subtitle: "Performance-Based Strength & Conditioning Programs",
    description: "Our strength and conditioning programs are designed to enhance performance, prevent injuries, and build a stronger, more resilient body. These programs are ideal for athletes, active individuals, and anyone looking to improve their physical performance safely under professional supervision.",
    badgeColor: "#0e7490",
    bgTint: "#f0f9ff",
    items: [
      "Functional Movement Training",
      "Injury Prevention Training",
      "Sports Performance Enhancement",
      "Strength & Muscle Building Programs",
      "Rehabilitation-Based Strength Training",
      "Mobility & Flexibility Training",
      "Core Stability Training",
      "Athletic Conditioning",
      "Return-to-Sport Training"
    ]
  }
];

export const EXACT_CONDITIONS_LIST = [
  "Back Pain",
  "Neck Pain",
  "Knee Pain",
  "Shoulder Pain",
  "Frozen Shoulder",
  "Slip Disc",
  "Sciatica",
  "Arthritis",
  "Sports Injuries",
  "Muscle Strain",
  "Ligament Injuries",
  "PCOS / PCOD",
  "Thyroid Disorders",
  "Diabetes",
  "Obesity",
  "Digestive Disorders",
  "High Blood Pressure",
  "Poor Posture",
  "Mobility Limitations",
  "Chronic Pain"
];

export const EXACT_WHY_CHOOSE_US = [
  { title: "Personalized Treatment Plans", desc: "Every therapy and diet chart is customized to your exact diagnosis." },
  { title: "Evidence-Based Physiotherapy", desc: "International Indian Association of Physiotherapists clinical standards." },
  { title: "Nutrition Expertise", desc: "Led by specialist Dr. Meenakshi Kanwar Sisodia." },
  { title: "Root Cause Focused Treatment", desc: "Solving underlying structural and metabolic triggers." },
  { title: "One-to-One Patient Care", desc: "Dedicated doctor supervision without crowded clinic rushing." },
  { title: "Advanced Rehabilitation Programs", desc: "Spinal decompression, orthopedic & sports protocols." },
  { title: "Non-Surgical Pain Management", desc: "Proven conservative recovery avoiding invasive surgery." },
  { title: "Experienced Healthcare Professionals", desc: "Over a decade of verified clinical excellence in Jaipur." },
  { title: "Regular Progress Monitoring", desc: "Objective tracking of range of motion and pain reduction." },
  { title: "Long-Term Wellness Support", desc: "Ergonomic and strength training to prevent recurrence." }
];

export const EXACT_TREATMENT_PROCESS = [
  { step: "1. Consultation", title: "Consultation", desc: "Understand your health concerns through a detailed consultation." },
  { step: "2. Comprehensive Assessment", title: "Comprehensive Assessment", desc: "Evaluate posture, movement, pain levels, nutrition, and lifestyle." },
  { step: "3. Personalized Treatment Plan", title: "Personalized Treatment Plan", desc: "Receive a customized physiotherapy and nutrition plan tailored to your goals." },
  { step: "4. Treatment & Rehabilitation", title: "Treatment & Rehabilitation", desc: "Follow structured treatment sessions with continuous progress monitoring." },
  { step: "5. Recovery & Wellness", title: "Recovery & Wellness", desc: "Achieve long-term recovery, improved mobility, and a healthier lifestyle." }
];

export const EXACT_HEALTH_PROGRAMS = [
  "Weight Loss Program",
  "Healthy Weight Gain Program",
  "PCOS Lifestyle Management",
  "Diabetes Nutrition Program",
  "Thyroid Care Program",
  "Pain Relief Program",
  "Sports Injury Rehabilitation",
  "Post-Surgery Recovery",
  "Lifestyle Modification Program",
  "Mobility Improvement Program"
];

