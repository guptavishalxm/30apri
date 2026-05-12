const fs = require('fs');
const path = require('path');

const brands = [
  'IFB',
  'LG',
  'SONY TV',
  'Whirlpool',
  'Bosch',
  'Haier',
  'Samsung',
  'Hitachi',
  'Godrej'
];

const phoneNumber = '1800-569-1141';
const phoneNumberClean = '18005691141'; // Used for WhatsApp links
const defaultCity = 'Lucknow';
const emailAddress = 'info@appliqart365.com'; // Change this to your actual email for FormSubmit!

const templatePath = path.join(__dirname, 'template.html');
const template = fs.readFileSync(templatePath, 'utf8');

console.log('Generating Brand Pages...');

brands.forEach(brand => {
  // Replace placeholders
  let content = template
    .replace(/{{BRAND_NAME}}/g, brand)
    .replace(/{{PHONE_NUMBER}}/g, phoneNumber)
    .replace(/{{PHONE_NUMBER_CLEAN}}/g, phoneNumberClean)
    .replace(/{{EMAIL_ADDRESS}}/g, emailAddress)
    .replace(/{{CITY}}/g, defaultCity);

  if (brand === 'SONY TV') {
    // SONY TV specific replacements
    content = content.replace(/assets\/appliances_group\.png/g, 'assets/sony/TVFY25_XR50-XR55A_HP_M.png');
    content = content.replace(/assets\/services_poster\.png/g, 'assets/sony/Bravia_1584x1083_M_Raja Mouli Banner.jpg');
    content = content.replace(/Our Services includes Washing Machine, Refrigerator, AC, Microwave Oven\./g, 'Our Services includes exclusive TV Repair, Panel Replacement, Motherboard Repair, and Installation.');
    content = content.replace(/We provide all types of Home Appliances Repair, Services &amp; Installation/g, 'We provide all types of TV Repair, Services & Installation');
    content = content.replace(/We provide all types of Home Appliances Repair, Services & Installation/g, 'We provide all types of TV Repair, Services & Installation');
    
    // Remove "home appliance" references since Sony does not make home appliances
    content = content.replace(/home appliance repair services/gi, 'TV repair services');
    content = content.replace(/home appliance providing/gi, 'television brand providing');
    content = content.replace(/home appliances\./gi, 'televisions.');
    content = content.replace(/Home Appliances/g, 'Televisions');
    content = content.replace(/all home appliances/gi, 'all televisions');
    content = content.replace(/%20appliance/g, '%20TV');
    
    // Services list replacements (placeholder already replaced with SONY TV)
    content = content.replace(/<li>SONY TV Washing Machine Repair<\/li>/g, '<li>SONY TV LED TV Repair</li>');
    content = content.replace(/<li>SONY TV Refrigerator Service & Repair<\/li>/g, '<li>SONY TV Smart TV Repair</li>');
    content = content.replace(/<li>SONY TV Washing Machine Repair in Lucknow<\/li>/g, '<li>SONY TV TV Panel Replacement in Lucknow</li>');
    content = content.replace(/<li>SONY TV AC Service & Repair<\/li>/g, '<li>SONY TV TV Installation</li>');
    content = content.replace(/<li>SONY TV RO Service<\/li>/g, '<li>SONY TV TV Motherboard Repair</li>');
    content = content.replace(/<li>SONY TV Microwave Oven Repair<\/li>/g, '');
    content = content.replace(/<li>SONY TV Washing Machine Service Center<\/li>/g, '<li>SONY TV TV Service Center</li>');
    content = content.replace(/<li>SONY TV AC Service Center in Lucknow<\/li>/g, '<li>SONY TV TV Service Center in Lucknow</li>');
    content = content.replace(/<li>SONY TV Refrigerator Service Center<\/li>/g, '');
    content = content.replace(/<li>SONY TV washing machine service center<\/li>/g, '<li>SONY TV TV service center</li>');
    
    // Fix any remaining placeholders that were replaced
    // Not needed since {{BRAND_NAME}} is already replaced, but leaving this block clean


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
    
    // Replace the text logo with the image logo for SONY TV
    content = content.replace(
      /<div class="hero-brand-logo">SONY TV<\/div>/g, 
      '<div class="hero-brand-logo" style="border: none; padding-bottom: 0;"><img src="assets/sony_logo_PNG9.png" alt="Sony Logo" style="max-height: 80px; width: auto;"></div>'
    );

    // Add extra Sony poster before form
    content = content.replace(
      /<section class="contact-form-section">/g,
      '<section class="poster" style="padding-top: 0;"><img src="assets/sony/New-Customer-Care-Number_1170x727.jpg" alt="Sony Customer Care" class="poster-img"></section><section class="contact-form-section">'
    );
  }

  if (brand === 'Whirlpool') {
    // Replace the appliance group image with the specific hero poster for Whirlpool
    content = content.replace(/assets\/appliances_group\.png/g, 'assets/heroposter/images-45.jpeg');

    // Replace the text logo with the image logo for Whirlpool
    content = content.replace(
      /<div class="hero-brand-logo">Whirlpool<\/div>/g, 
      '<div class="hero-brand-logo" style="border: none; padding-bottom: 0;"><img src="assets/Whirlpool-logo.png" alt="Whirlpool Logo" style="max-height: 80px; width: auto;"></div>'
    );
  }

  if (brand === 'Haier') {
    // Replace the text logo with the image logo for Haier
    content = content.replace(
      /<div class="hero-brand-logo">Haier<\/div>/g, 
      '<div class="hero-brand-logo" style="border: none; padding-bottom: 0;"><img src="assets/Haier-Logo.png" alt="Haier Logo" style="max-height: 80px; width: auto;"></div>'
    );
  }

  if (brand === 'Hitachi') {
    // Replace the appliance group image with the specific hero poster for Hitachi
    content = content.replace(/assets\/appliances_group\.png/g, 'assets/heroposter/1-144.jpg');
    
    // Replace the text logo with the image logo for Hitachi
    content = content.replace(
      /<div class="hero-brand-logo">Hitachi<\/div>/g, 
      '<div class="hero-brand-logo" style="border: none; padding-bottom: 0;"><img src="assets/pngwing.com.png" alt="Hitachi Logo" style="max-height: 80px; width: auto;"></div>'
    );
  }

  if (brand === 'Bosch') {
    // Replace the appliance group image with the specific hero poster for Bosch
    content = content.replace(/assets\/appliances_group\.png/g, 'assets/heroposter/download-27.jpeg');

    // Replace the text logo with the image logo for Bosch
    content = content.replace(
      /<div class="hero-brand-logo">Bosch<\/div>/g, 
      '<div class="hero-brand-logo" style="border: none; padding-bottom: 0;"><img src="assets/Bosch-Logo.png" alt="Bosch Logo" style="max-height: 80px; width: auto;"></div>'
    );
  }

  if (brand === 'IFB') {
    // Replace the appliance group image with the specific hero poster for IFB
    content = content.replace(/assets\/appliances_group\.png/g, 'assets/heroposter/download-29.jpeg');
  }

  if (brand === 'Samsung') {
    // Replace the appliance group image with the specific hero poster for Samsung
    content = content.replace(/assets\/appliances_group\.png/g, 'assets/heroposter/download-32.jpeg');
  }

  if (brand === 'Godrej') {
    // Replace the appliance group image with the specific hero poster for Godrej
    content = content.replace(/assets\/appliances_group\.png/g, 'assets/heroposter/download-28.jpeg');
  }
  const filename = `${brand.toLowerCase().replace(/\s+/g, '-')}.html`;
  const outputPath = path.join(__dirname, filename);

  fs.writeFileSync(outputPath, content);
  console.log(`\u2714 Generated: ${filename}`);
});

console.log('All pages generated successfully!');
