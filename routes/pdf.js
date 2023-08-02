const express = require('express');
const router = express.Router();
const PDFDocument = require('pdfkit');
const path = require('path');

let imagePath = path.join(__dirname, '..', 'public', 'images', 'logo.png');

router.post('/', (req, res) => {
  try {
    const doc = new PDFDocument({
      size: 'letter',
      layout: 'portrait',
    });
    let filename = req.body.filename;

    filename = encodeURIComponent(filename) + '.pdf';

    res.setHeader(
      'Content-disposition',
      'attachment; filename="' + filename + '"'
    );
    res.setHeader('Content-type', 'application/pdf');

    const content = req.body.content;

    doc.image(imagePath, 20, 20, { width: 100, height: 100 });
    doc.fontSize(16).text('PT PERMANA PUTRA MANDIRI', 140, 30);
    doc
      .fontSize(11)
      .text(
        'Jl. Taman Mini Indonesia Indah (TMII) Pintu II Atas No. 43 Jakarta Timur',
        140,
        55
      );
    doc
      .fontSize(11)
      .text('Phone : +62-21 841 5976, Fax : +62-21 840 7865', 140, 70);
    doc.fontSize(11).text('Website : www.alatkedokteran.id', 140, 85);
    doc.fontSize(11).text('Email : info@alatkedokteran.id', 140, 100);
    doc
      .moveTo(20, 120) // set the start point
      .lineTo(590, 120) // set the end point
      .stroke(); // stroke the path

    // End Header

    // Table Header
    const tableTitle = 'INVOICE';
    const textWidth = doc.widthOfString(tableTitle);
    const pageWidth = doc.page.width;
    const textX = pageWidth / 2 - textWidth / 2;

    doc
      .font('C:/Windows/Fonts/Arialbd.ttf')
      .fontSize(16)
      .text(tableTitle, textX, 150);

    doc
      .moveTo(20, 200) // set the start point
      .lineTo(pageWidth / 2 - 20, 200) // set the end point
      .stroke(); // stroke the path

    doc
      .moveTo(20, 300) // set the start point
      .lineTo(pageWidth / 2 - 20, 300) // set the end point
      .stroke(); // stroke the path

    doc
      .moveTo(20, 200) // set the start point
      .lineTo(20, 300) // set the end point
      .stroke(); // stroke the path

    doc
      .moveTo(pageWidth / 2 - 20, 200) // set the start point
      .lineTo(pageWidth / 2 - 20, 300) // set the end point
      .stroke(); // stroke the path

    doc
      .moveTo(pageWidth / 2 + 20, 200) // set the start point
      .lineTo(590, 200) // set the end point
      .stroke(); // stroke the path

    doc
      .moveTo(pageWidth / 2 + 20, 300) // set the start point
      .lineTo(590, 300) // set the end point
      .stroke(); // stroke the path

    doc
      .moveTo(pageWidth / 2 + 20, 200) // set the start point
      .lineTo(pageWidth / 2 + 20, 300) // set the end point
      .stroke(); // stroke the path

    doc
      .moveTo(590, 200) // set the start point
      .lineTo(590, 300) // set the end point
      .stroke(); // stroke the path

    doc.font('C:/Windows/Fonts/Arialbd.ttf').fontSize(11).text('No', 35, 215);
    doc
      .font('C:/Windows/Fonts/Arialbd.ttf')
      .fontSize(11)
      .text('Printed Date', 35, 235);
    doc
      .font('C:/Windows/Fonts/Arialbd.ttf')
      .fontSize(11)
      .text('Due Date', 35, 255);

    doc.font('C:/Windows/Fonts/Arial.ttf').fontSize(11).text(':', 110, 215);
    doc.fontSize(11).text(':', 110, 235);
    doc.fontSize(11).text(':', 110, 255);

    doc.fontSize(11).text('SL/0113/XI/2019', 120, 215);
    doc.fontSize(11).text('31/07/2023', 120, 235);
    doc.fontSize(11).text('31/07/2023', 120, 255);

    const customerName = 'PT Sai Mitra Lestari (Bpk Maulana)';
    const customerAddress =
      'Jl Raya Pondok Gede no. 7 Rt. 013/001 Lubang buaya cipayung';

    const gapToandAddress = doc.widthOfString(customerName) <= 175 ? 235 : 250;

    doc
      .font('C:/Windows/Fonts/Arialbd.ttf')
      .fontSize(11)
      .text('To', pageWidth / 2 + 35, 215);
    doc
      .font('C:/Windows/Fonts/Arialbd.ttf')
      .fontSize(11)
      .text('Address', pageWidth / 2 + 35, gapToandAddress);

    doc
      .font('C:/Windows/Fonts/Arial.ttf')
      .fontSize(11)
      .text(':', pageWidth / 2 + 80, 215);
    doc.fontSize(11).text(':', pageWidth / 2 + 80, gapToandAddress);

    doc.fontSize(11).text(customerName, pageWidth / 2 + 90, 215, {
      width: 175,
      align: 'left',
    });

    doc
      .fontSize(11)
      .text(customerAddress, pageWidth / 2 + 90, gapToandAddress, {
        width: 175,
        align: 'left',
      });

    doc
      .moveTo(20, 325) // set the start point
      .lineTo(590, 325) // set the end point
      .stroke(); // stroke the path

    doc
      .moveTo(20, 350) // set the start point
      .lineTo(590, 350) // set the end point
      .stroke(); // stroke the path

    doc
      .moveTo(20, 525) // set the start point
      .lineTo(590, 525) // set the end point
      .stroke(); // stroke the path

    doc
      .moveTo(20, 325) // set the start point
      .lineTo(20, 525) // set the end point
      .stroke(); // stroke the path

    doc
      .moveTo(50, 325) // set the start point
      .lineTo(50, 525) // set the end point
      .stroke(); // stroke the path

    doc
      .moveTo(pageWidth / 2 - 20, 325) // set the start point
      .lineTo(pageWidth / 2 - 20, 525) // set the end point
      .stroke(); // stroke the path

    doc
      .moveTo(pageWidth / 2 + 20, 325) // set the start point
      .lineTo(pageWidth / 2 + 20, 625) // set the end point
      .stroke(); // stroke the path

    doc
      .moveTo(pageWidth / 2 + 150, 325) // set the start point
      .lineTo(pageWidth / 2 + 150, 625) // set the end point
      .stroke(); // stroke the path

    doc
      .moveTo(590, 325) // set the start point
      .lineTo(590, 625) // set the end point
      .stroke(); // stroke the path

    doc.font('C:/Windows/Fonts/Arialbd.ttf').fontSize(11).text('No', 25, 330);
    doc
      .font('C:/Windows/Fonts/Arialbd.ttf')
      .fontSize(11)
      .text('Descriptions of Goods', 55, 330);
    doc
      .font('C:/Windows/Fonts/Arialbd.ttf')
      .fontSize(11)
      .text('Qty', pageWidth / 2 - 10, 330);
    doc
      .font('C:/Windows/Fonts/Arialbd.ttf')
      .fontSize(11)
      .text('Price / Qty', pageWidth / 2 + 25, 330);
    doc
      .font('C:/Windows/Fonts/Arialbd.ttf')
      .fontSize(11)
      .text('Total / Price', pageWidth / 2 + 155, 330);

    doc
      .moveTo(pageWidth / 2 + 20, 550) // set the start point
      .lineTo(590, 550) // set the end point
      .stroke(); // stroke the path

    doc
      .moveTo(pageWidth / 2 + 20, 575) // set the start point
      .lineTo(590, 575) // set the end point
      .stroke(); // stroke the path

    doc
      .moveTo(pageWidth / 2 + 20, 600) // set the start point
      .lineTo(590, 600) // set the end point
      .stroke(); // stroke the path

    doc
      .moveTo(pageWidth / 2 + 20, 625) // set the start point
      .lineTo(590, 625) // set the end point
      .stroke(); // stroke the path

    doc
      .font('C:/Windows/Fonts/Arialbd.ttf')
      .fontSize(11)
      .text('Subtotal', pageWidth / 2 + 25, 530);

    doc
      .font('C:/Windows/Fonts/Arialbd.ttf')
      .fontSize(11)
      .text('Discount', pageWidth / 2 + 25, 555);

    doc
      .font('C:/Windows/Fonts/Arialbd.ttf')
      .fontSize(11)
      .text('PPN 11%', pageWidth / 2 + 25, 580);

    doc
      .font('C:/Windows/Fonts/Arialbd.ttf')
      .fontSize(11)
      .text('Total', pageWidth / 2 + 25, 605);

    doc.pipe(res);
    doc.end();
  } catch (err) {
    console.log(err.message);
  }
});

module.exports = router;
