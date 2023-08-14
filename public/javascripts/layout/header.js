const path = require('path');

const headerPdf = (doc, menu) => {
  const datas = {
    ppm: {
      name: 'PT PERMANA PUTRA MANDIRI',
      address:
        'Jl. Taman Mini Indonesia Indah (TMII) Pintu II Atas No. 43 Jakarta Timur',
      phone: '+62-21 841 5976',
      faq: '+62-21 840 7865',
      website: 'www.alatkedokteran.id',
      email: 'info@alatkedokteran.id',
    },

    rentmed: {
      name: 'RENTMED',
      address:
        'Jl. Taman Mini Indonesia Indah (TMII) Pintu II Atas No. 43 Jakarta Timur',
      phone: '+62-21 841 5976',
      faq: '+62-21 840 7865',
      website: 'www.rentmed.id',
      email: 'info@rentmed.id',
    },
  };
  let imagePath = path.join(
    __dirname,
    '..',
    '..',
    'images',
    'logo',
    `${menu}.png`
  );
  console.log(imagePath);

  doc.image(imagePath, 20, 20, { width: 100, height: 100 });
  doc.fontSize(16).text(datas[menu].name, 140, 30);
  doc.fontSize(11).text(datas[menu].address, 140, 55);
  doc
    .fontSize(11)
    .text(`Phone : ${datas[menu].phone}, Fax : ${datas[menu].fax}`, 140, 70);
  doc.fontSize(11).text(`Website : ${datas[menu].website}`, 140, 85);
  doc.fontSize(11).text(`Email : ${datas[menu].email}`, 140, 100);
  doc
    .moveTo(20, 120) // set the start point
    .lineTo(590, 120) // set the end point
    .stroke(); // stroke the path
};

module.exports = headerPdf;
