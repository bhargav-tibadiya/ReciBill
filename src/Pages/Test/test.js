import { jsPDF } from "jspdf";
import { AgrandirB64, AgrandirN64 } from "../../Utils/Fonts64/FontsBase64";

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
const PADDING = 10;

export const generatePDF = () => {
  const doc = new jsPDF();
  let Y_SHIFT = 0;

  // Adding Neccessarry Padding 
  Y_SHIFT += PADDING;

  // Adding Fonts
  doc.addFileToVFS("Agrandir-Normal", AgrandirN64);
  doc.addFont("Agrandir-Normal", "Agrandir", "Normal");

doc.addFileToVFS("Agrandir-Bold", AgrandirB64);
doc.addFont("Agrandir-Bold", "Agrandir", "Bold");


// Main Title
doc.setFont("Agrandir", "Normal");
doc.setFontSize(18);
console.log('data.main_title', data.main_title)

doc.text("Hello", PADDING, Y_SHIFT),{encoding: 'UTF-8'};

doc.save("Varient1.pdf")
}