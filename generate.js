const fs = require('fs');
const path = require('path');

const brands = [
  'IFB',
  'LG',
  'SONY TV',
  'Whirlpool',
  'Bosch',
  'Haier',
  'Samsung'
];

const phoneNumber = '1800-569-1141';
const phoneNumberClean = '18005691141'; // Used for WhatsApp links
const defaultCity = 'Lucknow';

const templatePath = path.join(__dirname, 'template.html');
const template = fs.readFileSync(templatePath, 'utf8');

console.log('Generating Brand Pages...');

brands.forEach(brand => {
  // Replace placeholders
  let content = template
    .replace(/{{BRAND_NAME}}/g, brand)
    .replace(/{{PHONE_NUMBER}}/g, phoneNumber)
    .replace(/{{PHONE_NUMBER_CLEAN}}/g, phoneNumberClean)
    .replace(/{{CITY}}/g, defaultCity);

  if (brand === 'SONY TV') {
    // SONY TV specific replacements
    content = content.replace(/assets\/appliances_group\.png/g, 'assets/tv_portfolio.png');
    content = content.replace(/Our Services includes Washing Machine, Refrigerator, AC, Microwave Oven\./g, 'Our Services includes exclusive TV Repair, Panel Replacement, Motherboard Repair, and Installation.');
    content = content.replace(/We provide all types of Home Appliances Repair, Services &amp; Installation/g, 'We provide all types of TV Repair, Services & Installation');
    content = content.replace(/We provide all types of Home Appliances Repair, Services & Installation/g, 'We provide all types of TV Repair, Services & Installation');
    
    // Services list replacements
    content = content.replace(/<li>{{BRAND_NAME}} Washing Machine Repair<\/li>/g, '<li>{{BRAND_NAME}} LED TV Repair</li>');
    content = content.replace(/<li>{{BRAND_NAME}} Refrigerator Service & Repair<\/li>/g, '<li>{{BRAND_NAME}} Smart TV Repair</li>');
    content = content.replace(/<li>{{BRAND_NAME}} Washing Machine Repair in {{CITY}}<\/li>/g, '<li>{{BRAND_NAME}} TV Panel Replacement in {{CITY}}</li>');
    content = content.replace(/<li>{{BRAND_NAME}} AC Service & Repair<\/li>/g, '<li>{{BRAND_NAME}} TV Installation</li>');
    content = content.replace(/<li>{{BRAND_NAME}} RO Service<\/li>/g, '<li>{{BRAND_NAME}} TV Motherboard Repair</li>');
    content = content.replace(/<li>{{BRAND_NAME}} Microwave Oven Repair<\/li>/g, '');
    content = content.replace(/<li>{{BRAND_NAME}} Washing Machine Service Center<\/li>/g, '<li>{{BRAND_NAME}} TV Service Center</li>');
    content = content.replace(/<li>{{BRAND_NAME}} AC Service Center in {{CITY}}<\/li>/g, '<li>{{BRAND_NAME}} TV Service Center in {{CITY}}</li>');
    content = content.replace(/<li>{{BRAND_NAME}} Refrigerator Service Center<\/li>/g, '');
    content = content.replace(/<li>{{BRAND_NAME}} washing machine service center<\/li>/g, '<li>{{BRAND_NAME}} TV service center</li>');
    
    // Fix any remaining placeholders that were replaced
    content = content.replace(/{{BRAND_NAME}}/g, brand);
    content = content.replace(/{{CITY}}/g, defaultCity);

    // Footer replacements
    content = content.replace(/<li>Washing Machine Repair<\/li>/g, '<li>LED TV Repair</li>');
    content = content.replace(/<li>Refrigerator Repair<\/li>/g, '<li>Smart TV Repair</li>');
    content = content.replace(/<li>Microwave Repair<\/li>/g, '<li>TV Installation</li>');
    content = content.replace(/<li>AC Service & Repair<\/li>/g, '<li>Panel Replacement</li>');
    
    // Form replacements
    content = content.replace(/<option value="">Washing Machine Repair<\/option>/g, '<option value="">LED TV Repair</option>');
    content = content.replace(/<option value="refrigerator">Refrigerator Repair<\/option>/g, '<option value="smart-tv">Smart TV Repair</option>');
    content = content.replace(/<option value="ac">AC Service & Repair<\/option>/g, '<option value="installation">TV Installation</option>');
    content = content.replace(/<option value="microwave">Microwave Oven Repair<\/option>/g, '<option value="panel">Panel Replacement</option>');
    content = content.replace(/<option value="ro">RO Service<\/option>/g, '');
  }

  if (brand === 'Whirlpool') {
    // Replace the text logo with the image logo for Whirlpool
    content = content.replace(
      /<div class="hero-brand-logo">Whirlpool<\/div>/g, 
      '<div class="hero-brand-logo" style="border: none; padding-bottom: 0;"><img src="assets/Whirlpool-logo.png" alt="Whirlpool Logo" style="max-height: 80px; width: auto;"></div>'
    );
  }

  // Generate filename (lowercase, hyphenated)
  const filename = `${brand.toLowerCase().replace(/\s+/g, '-')}.html`;
  const outputPath = path.join(__dirname, filename);

  fs.writeFileSync(outputPath, content);
  console.log(`\u2714 Generated: ${filename}`);
});

console.log('All pages generated successfully!');
