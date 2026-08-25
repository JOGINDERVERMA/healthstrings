const fs = require('fs');
const path = require('path');

const pagesToCreate = [
  { id: "clinical-nutrition", componentName: "WeightLossPage", seoTitle: "Weight Loss Dietician & Healthy Weight Gain Jaipur | Healthstrings" },
  { id: "pcos-diet", componentName: "PcosDietPage", seoTitle: "PCOS Diet Specialist Jaipur | Hormonal Balance Dietician | Healthstrings" },
  { id: "gut-health", componentName: "GutHealthPage", seoTitle: "Gut Health Nutritionist Jaipur | IBS Diet Specialist | Healthstrings" },
  { id: "sports-nutrition", componentName: "SportsNutritionPage", seoTitle: "Sports Nutritionist Jaipur | Athletic Diet Chart | Healthstrings" },
  { id: "cardio-diabetes", componentName: "CardioDiabetesPage", seoTitle: "Diabetes Dietician Jaipur | Heart Patient Nutritionist | Healthstrings" },
  { id: "strength-conditioning", componentName: "ErgonomicsPage", seoTitle: "Posture Rehab Jaipur | Ergonomic Physiotherapy | Healthstrings" }
];

pagesToCreate.forEach(page => {
  const content = `import React, { useEffect } from 'react';\nimport ServiceDetailPage from './ServiceDetailPage';\n\nexport default function ${page.componentName}({ setActivePage, onOpenStudioModal }) {\n  useEffect(() => {\n    window.scrollTo(0, 0);\n    document.title = "${page.seoTitle}";\n  }, []);\n\n  return (\n    <ServiceDetailPage \n      selectedServiceId="${page.id}" \n      setActivePage={setActivePage} \n      onOpenStudioModal={onOpenStudioModal} \n    />\n  );\n}\n`;
  fs.writeFileSync(path.join(__dirname, 'src', 'pages', `${page.componentName}.jsx`), content);
});
