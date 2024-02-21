import PDFJSStaticWorker from "pdfjs-dist/build/pdf.worker.entry";
import * as pdfjsLib from "pdfjs-dist";

const { createCanvas } = require("canvas");
pdfjsLib.GlobalWorkerOptions.workerSrc = PDFJSStaticWorker;

export async function renderPDF(file) {
  try {
    // Create PDF doc object from uploaded file
    const pdfData = await file.arrayBuffer(); // Assuming file is a File object
    const pdf = pdfjsLib.getDocument({
      data: pdfData,
    });
    console.log("hello");
    const pdfInfo = await pdf.promise;

    // Get desired page

    const page = await pdfInfo.getPage(1); // Adjust page number as needed

    // Get viewport for scaling
    const viewport = page.getViewport({ scale: 1 }); // Adjust scale as needed

    // Prepare canvas
    // const canvas = document.getElementById("pdf-preview");
    const canvas = createCanvas(200, 200);
    const context = canvas.getContext("2d");
    canvas.height = viewport.height;
    canvas.width = viewport.width;

    // Render page into canvas
    const renderContext = {
      canvasContext: context,
      viewport: viewport,
    };

    page.render(renderContext);

    // Update navigation controls (if applicable)
    // ...
  } catch (error) {
    console.error("Error rendering PDF:", error);
    // Handle error gracefully, e.g., display an error message
  }
}
