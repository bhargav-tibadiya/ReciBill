import { jsPDF } from "jspdf";
import { AgrandirB64, AgrandirN64, BremaN64 } from "../../Utils/Fonts64/FontsBase64";

// https://peckconsulting.s3.amazonaws.com/fontconverter/fontconverter.html  font converter

const TOTAL_WIDTH = 210;
const TOTAL_HEIGHT = 297;
const PADDING = 15;

export const generatePDFS1 = (data) => {
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

  doc.setFontSize(10);


  // Entries [Heading]
  Y_SHIFT += 10;

  doc.setFont("Agrandir", "Bold");

  doc.text("NAME", PADDING, Y_SHIFT)
  doc.text("COST", (TOTAL_WIDTH / 2), Y_SHIFT)
  doc.text("QUANTITY", ((TOTAL_WIDTH * 3) / 4), Y_SHIFT, { align: "right" })
  doc.text("AMOUNT", (TOTAL_WIDTH - PADDING), Y_SHIFT, { align: "right" })

  // Entries 
  Y_SHIFT += 10;
  let subtotal = 0;
  doc.setFont("Agrandir", "Normal");

  data.items.map((_, index) => {

    doc.text(data.items[index]?.name, PADDING, Y_SHIFT)
    doc.text("$" + (data.items[index]?.cost.toString()), (TOTAL_WIDTH / 2), Y_SHIFT)
    doc.text(data.items[index]?.quantity.toString(), ((TOTAL_WIDTH * 3) / 4), Y_SHIFT, { align: "right" })
    doc.text("$" + ((data.items[index]?.cost) * (data.items[index]?.quantity)).toString(), (TOTAL_WIDTH - PADDING), Y_SHIFT, { align: "right" })
    doc.line(PADDING, Y_SHIFT + 5, TOTAL_WIDTH - PADDING, Y_SHIFT + 5);
    subtotal += (data.items[index]?.cost) * (data.items[index]?.quantity);

    Y_SHIFT += 15;
  })

  // Subtotal
  Y_SHIFT += 5;

  doc.setFont("Agrandir", "Bold");
  doc.text("SUBTOTAL", (TOTAL_WIDTH * 5) / 8, Y_SHIFT)

  doc.setFont("Agrandir", "Normal");
  doc.text("$" + subtotal.toString(), (TOTAL_WIDTH - PADDING), Y_SHIFT, { align: "right" })

  //Discount 
  Y_SHIFT += 7;

  doc.setFont("Agrandir", "Bold");
  doc.text("DISCOUNT", (TOTAL_WIDTH * 5) / 8, Y_SHIFT)

  doc.setFont("Agrandir", "Normal");
  doc.text("$" + data.discount.toString(), (TOTAL_WIDTH - PADDING), Y_SHIFT, { align: "right" })

  // Devider
  Y_SHIFT += 5;

  doc.line((TOTAL_WIDTH * 5) / 8, Y_SHIFT, TOTAL_WIDTH - PADDING, Y_SHIFT);

  //Total 
  Y_SHIFT += 7;

  doc.setFont("Agrandir", "Bold");
  doc.text("TOTAL", (TOTAL_WIDTH * 5) / 8, Y_SHIFT)

  doc.setFont("Agrandir", "Normal");
  doc.text("$" + (subtotal - data.discount).toString(), (TOTAL_WIDTH - PADDING), Y_SHIFT, { align: "right" })

  doc.setFont("Agrandir", "Normal");

  doc.save(`${data.from + "_" + data.to + "_" + data.bill_id}` ?? "Bill.pdf")
}