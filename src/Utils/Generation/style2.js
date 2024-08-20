import { jsPDF } from "jspdf";
import { AgrandirB64, AgrandirN64, BremaN64 } from "../../Utils/Fonts64/FontsBase64";

// https://peckconsulting.s3.amazonaws.com/fontconverter/fontconverter.html  font converter

const TOTAL_WIDTH = 210;
const TOTAL_HEIGHT = 297;
const PADDING = 15;

export const generatePDFS2 = (data) => {
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

  doc.text((data.main_title).toUpperCase(), TOTAL_HEIGHT / 2, Y_SHIFT, { align: "center" });

  doc.save(`${data.from + "_" + data.to + "_" + data.bill_id}` ?? "Bill.pdf")

}