import { jsPDF } from "jspdf";
import { AgrandirB64, AgrandirN64, BremaN64 } from "../../Utils/Fonts64/FontsBase64";

const data = {
  "main_title": "Qoutation",
  "bill_id": "#Q0003",
  "day": 6,
  "month": 7,
  "year": "2024",
  "from": "Bhargav",
  "to": "Shubham",
  "type": "",
  "entries": 2,
  "items": [
    {
      "name": "Logo",
      "cost": 499,
      "quantity": 1
    },
    {
      "name": "Posts",
      "cost": 125,
      "quantity": 45
    }
  ],
  "discount": 0
}

// https://peckconsulting.s3.amazonaws.com/fontconverter/fontconverter.html  font converter

const TOTAL_WIDTH = 210;
const TOTAL_HEIGHT = 297;
const PADDING = 15;

export const generatePDF = () => {
  const doc = new jsPDF();
  let Y_SHIFT = 0;

  // Adding Fonts
  doc.addFileToVFS("Agrandir-Normal", AgrandirN64);
  doc.addFont("Agrandir-Normal", "Agrandir", "Normal");

  doc.addFileToVFS("Agrandir-Bold", AgrandirB64);
  doc.addFont("Agrandir-Bold", "Agrandir", "Bold");

  doc.addFileToVFS("Brema-Normal", BremaN64);
  doc.addFont("Brema-Normal", "Brema", "Normal");


  // Main Title
  Y_SHIFT += PADDING;

  doc.setFont("Brema", "Normal");
  doc.setFontSize(32);

  doc.text((data.main_title).toUpperCase(), PADDING, Y_SHIFT);


  //  ID
  doc.setFont("Agrandir", "Bold");
  doc.setFontSize(12);

  doc.text("ID :", TOTAL_WIDTH - PADDING - 25, Y_SHIFT - 6, { align: "right" })

  doc.setFont("Agrandir", "Normal");
  doc.text(data.bill_id, TOTAL_WIDTH - PADDING, Y_SHIFT - 6, { align: "right" })


  // Date 
  Y_SHIFT += 7;

  doc.setFont("Agrandir", "Bold");
  doc.setFontSize(12);

  doc.text("Date :", TOTAL_WIDTH - PADDING - 25, Y_SHIFT - 5, { align: "right" })

  doc.setFont("Agrandir", "Normal");
  doc.text(data.day + "-" + data.month + '-' + data.year, TOTAL_WIDTH - PADDING, Y_SHIFT - 5, { align: "right" })


  // Devider
  Y_SHIFT += 2;

  doc.line(PADDING, Y_SHIFT, TOTAL_WIDTH - PADDING, Y_SHIFT);


  //FROM & TO Title
  Y_SHIFT += 10;

  doc.setFont("Agrandir", "Bold");
  doc.text("From : ", PADDING, Y_SHIFT, { align: "left" })

  doc.text("To : ", (TOTAL_WIDTH) / 2, Y_SHIFT, { align: "left" })


  //FROM & TO Name
  Y_SHIFT += 7;

  doc.setFont("Agrandir", "Normal");
  doc.text(data.from, PADDING, Y_SHIFT, { align: "left" })

  doc.text(data.to, (TOTAL_WIDTH) / 2, Y_SHIFT, { align: "left" })


  // Devider
  Y_SHIFT += 7;

  doc.line(PADDING, Y_SHIFT, TOTAL_WIDTH - PADDING, Y_SHIFT);







  doc.save("Varient1.pdf")
}