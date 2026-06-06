const fs = require('fs');
const path = require('path');

const brands = ['Daikin', 'Carrier', 'Voltas', 'O General'];
const phoneNumber = '1800-569-1141';
const defaultCity = 'Lucknow';
const emailAddress = 'info@appliqart365.com';

const templatePath = path.join(__dirname, 'ac_template.html');
const template = fs.readFileSync(templatePath, 'utf8');

console.log('Generating AC Brand Pages...');

brands.forEach(brand => {
  let content = template
    .replace(/{{BRAND_NAME}}/g, brand)
    .replace(/{{PHONE_NUMBER}}/g, phoneNumber)
    .replace(/{{EMAIL_ADDRESS}}/g, emailAddress)
    .replace(/{{CITY}}/g, defaultCity);

  if (brand === 'Daikin') {
    content = content.replace(
      /<div class="hero-brand-logo">Daikin<\/div>/g,
      '<div class="hero-brand-logo" style="border: none; padding-bottom: 0;"><img src="assets/Daikin-Logo.png" alt="Daikin Logo" style="max-height: 140px; width: auto;"></div>'
    );
  }

  if (brand === 'Carrier') {
    content = content.replace(
      /<div class="hero-brand-logo">Carrier<\/div>/g,
      '<div class="hero-brand-logo" style="border: none; padding-bottom: 0;"><img src="assets/carrier-seeklogo.png" alt="Carrier Logo" style="max-height: 140px; width: auto;"></div>'
    );
  }

  if (brand === 'Voltas') {
    content = content.replace(
      /<div class="hero-brand-logo">Voltas<\/div>/g,
      '<div class="hero-brand-logo" style="border: none; padding-bottom: 0;"><img src="assets/Voltas-Logo.png" alt="Voltas Logo" style="max-height: 120px; max-width: 360px; width: auto;"></div>'
    );
  }

  if (brand === 'O General') {
    content = content.replace(
      /<div class="hero-brand-logo">O General<\/div>/g,
      '<div class="hero-brand-logo" style="border: none; padding-bottom: 0;"><img src="assets/General-AC-Logo-Vector.svg-.png" alt="O General Logo" style="max-height: 120px; max-width: 360px; width: auto;"></div>'
    );
  }

  const filename = brand === 'O General' ? 'ogeneral.html' : `${brand.toLowerCase().replace(/\s+/g, '-')}.html`;
  const outputPath = path.join(__dirname, filename);

  fs.writeFileSync(outputPath, content);
  console.log(`✔ Generated AC page: ${filename}`);
});

console.log('All AC pages generated successfully!');
