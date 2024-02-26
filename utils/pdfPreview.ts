export async function renderPDFPreview(
  file: File,
  canvasId: string,
  pageNumber: number = 1
) {
  // Get the canvas element and its 2D rendering context
  const canvas = document.getElementById(canvasId)!;
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const fileBuffer = await file.arrayBuffer();
  // Load the PDF data
  const loadingTask = pdfjsLib.getDocument({ data: fileBuffer });

  // Once the PDF is loaded, render it to the canvas
  console.log(pageNumber, "pageNumber");
  loadingTask.promise
    .then((pdf) => {
      // Get the first page of the PDF
      return pdf.getPage(pageNumber);
    })
    .then((page) => {
      // Set the canvas size to match the page size
      const viewport = page.getViewport({ scale: 1 });
      canvas.width = viewport.width;
      canvas.height = viewport.height;
      // Render the page to the canvas
      const renderContext = {
        canvasContext: ctx,
        viewport: viewport,
      };

      return page.render(renderContext);
    })
    .catch((error) => {
      console.error("Error rendering PDF:", error);
    });
}
