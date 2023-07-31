const express = require('express');
const router = express.Router();
const PDFDocument = require('pdfkit');
const path = require('path');

let imagePath = path.join(__dirname, '..', 'public', 'images', 'logo.png');

router.post('/', (req, res) => {
  try {
    const doc = new PDFDocument();
    let filename = req.body.filename;

    filename = encodeURIComponent(filename) + '.pdf';

    res.setHeader(
      'Content-disposition',
      'attachment; filename="' + filename + '"'
    );
    res.setHeader('Content-type', 'application/pdf');

    const content = req.body.content;

    doc.image(imagePath, 20, 20, { width: 100, height: 100 });
    doc.fontSize(16).text('PT PERMANA PUTRA MANDIRI', 130, 30);
    doc
      .fontSize(11)
      .text(
        'Jl. Taman Mini Indonesia Indah (TMII) Pintu II Atas No. 43 Jakarta Timur',
        130,
        55
      );
    doc
      .fontSize(11)
      .text('Phone : +62-21 841 5976, Fax : +62-21 840 7865', 130, 70);
    doc.fontSize(11).text('Website : www.alatkedokteran.id', 130, 85);
    doc.fontSize(11).text('Email : info@alatkedokteran.id', 130, 100);
    doc
      .moveTo(20, 120) // set the start point
      .lineTo(580, 120) // set the end point
      .stroke(); // stroke the path

    doc.pipe(res);
    doc.end();
  } catch (err) {
    console.log(err.message);
  }
});

module.exports = router;
