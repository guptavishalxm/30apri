const fs = require('fs');
const path = require('path');

const roBrands = [
  'Kent RO',
  'Livpure',
  'AQUAGUARD + Eureka',
  'NASAKA',
  'AQUA GRAND RO',
  'LG RO',
  'Whirlpool RO'
];

const phoneNumber = '1800-569-1141';
const phoneNumberClean = '18005691141'; // Used for WhatsApp links
const defaultCity = 'Lucknow';
const emailAddress = 'info@appliqart365.com'; // Web3Forms Email

const templatePath = path.join(__dirname, 'ro_template.html');
const template = fs.readFileSync(templatePath, 'utf8');

console.log('Generating RO Brand Pages...');

roBrands.forEach(brand => {
  // Replace placeholders
  let content = template
    .replace(/{{BRAND_NAME}}/g, brand)
    .replace(/{{PHONE_NUMBER}}/g, phoneNumber)
    .replace(/{{PHONE_NUMBER_CLEAN}}/g, phoneNumberClean)
    .replace(/{{EMAIL_ADDRESS}}/g, emailAddress)
    .replace(/{{CITY}}/g, defaultCity);

  // Custom logo logic can be added here if needed in the future
  // For now, it uses the standard text logo with the new aqua gradient aesthetic

  // Generate filename (lowercase, hyphenated, remove plus signs)
  let safeFilename = brand.toLowerCase()
    .replace(/\s+/g, '-') // replace spaces with hyphens
    .replace(/\+/g, 'and') // replace + with 'and'
    .replace(/-+/g, '-'); // remove consecutive hyphens
    
  const filename = `${safeFilename}.html`;
  const outputPath = path.join(__dirname, filename);

  fs.writeFileSync(outputPath, content);
  console.log(`\u2714 Generated RO Page: ${filename}`);
});

console.log('All RO pages generated successfully!');
