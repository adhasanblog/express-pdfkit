const express = require('express');
const router = express.Router();
const PDFDocument = require('pdfkit');
const terbilang = require('@develoka/angka-terbilang-js');
const headerPdf = require('../public/javascripts/layout/header');

function capitalizeEveryWord(str) {
  return str.replace(/\b\w/g, function (char) {
    return char.toUpperCase();
  });
}

function formatRupiah(angka) {
  let number_string = angka.replace(/[^,\d]/g, '').toString(),
    split = number_string.split(','),
    sisa = split[0].length % 3,
    rupiah = split[0].substr(0, sisa),
    ribuan = split[0].substr(sisa).match(/\d{3}/gi);

  if (ribuan) {
    separator = sisa ? '.' : '';
    rupiah += separator + ribuan.join('.');
  }

  rupiah = split[1] != undefined ? rupiah + ',' + split[1] : rupiah;
  return 'Rp. ' + rupiah + ',-';
}

router.post('/', (req, res) => {
  try {
    const doc = new PDFDocument({
      size: 'letter',
      margins: {
        top: 0,
        bottom: 0, // mengurangi margin bawah
        left: 0,
        right: 0,
      },
      layout: 'portrait',
    });
    let filename = req.body.filename;
    const menu = req.body.option;
    filename = encodeURIComponent(filename) + '.pdf';

    res.setHeader(
      'Content-disposition',
      'attachment; filename="' + filename + '"'
    );
    res.setHeader('Content-type', 'application/pdf');

    const content = req.body.content;

    headerPdf(doc, menu);

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

    const price = 7354650;

    doc
      .font('C:/Windows/Fonts/Arialbd.ttf')
      .fontSize(11)
      .text(`# ${capitalizeEveryWord(terbilang(price))} Rupiah #`, 20, 645);

    doc
      .font('C:/Windows/Fonts/Arialbd.ttf')
      .fontSize(11)
      .text('Pembayaran dapat ditransfer :', 20, 690);

    doc
      .font('C:/Windows/Fonts/Arial.ttf')
      .fontSize(11)
      .text('Bank BNI Cabang Jatinegara', 20, 710);

    doc
      .font('C:/Windows/Fonts/Arial.ttf')
      .fontSize(11)
      .text('No. Rek 023 7106 145', 20, 725);

    doc.fontSize(11).text('A/N : PT. Permana Putra Mandiri', 20, 740);

    doc.fontSize(11).text('Hormat Kami,', 500, 670);

    doc.fontSize(11).text('Ahmad Taufik', 500, 745);

    const products = [
      {
        no: 1,
        brand: 'Zoncare',
        name: 'EKG Machine 12 Channel 10.4" Color LCD Touch Screen',
        serial_number: '123456789',
        qty: 1,
        price: 1000000,
      },

      {
        no: 2,
        brand: 'Zoncare',
        name: 'EKG Machine 12 Channel 10.4" Color LCD Touch Screen',
        serial_number: '123456789',
        qty: 1,
        price: 1000000,
      },

      {
        no: 3,
        brand: 'Zoncare',
        name: 'EKG Machine 12 Channel 10.4" Color LCD Touch Screen',
        serial_number: '123456789',
        qty: 1,
        price: 1000000,
      },

      {
        no: 4,
        brand: 'Zoncare',
        name: 'EKG Machine 12 Channel 10.4" Color LCD Touch Screen',
        serial_number: '123456789',
        qty: 1,
        price: 1000000,
      },
    ];

    let i = 0;
    products.forEach((product) => {
      doc.text(product.no.toString(), 25, 355 + i, {
        width: 25,
      });
      doc.text(`${product.brand} ${product.name}`, 55, 355 + i, {
        width: 175,
        align: 'left',
      });
      doc.text(product.qty.toString(), pageWidth / 2 - 10, 355 + i);
      doc.text(
        formatRupiah(product.price.toString()),
        pageWidth / 2 + 25,
        355 + i,
        {
          width: 120,
          align: 'right',
        }
      );
      doc.text(
        formatRupiah((product.qty * product.price).toString()),
        pageWidth / 2 + 155,
        355 + i,
        {
          width: 120,
          align: 'right',
        }
      );

      i += 30;
    });

    console.log(pageWidth / 2 + 20);
    console.log(pageWidth / 2 + 150);

    doc.pipe(res);
    doc.end();
  } catch (err) {
    console.log(err.message);
  }
});

module.exports = router;
