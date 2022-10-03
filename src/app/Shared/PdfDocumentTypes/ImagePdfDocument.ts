import {IPdfDocument} from "../Interfaces/PdfDocument";
import jsPdf from "jspdf";

export class ImagePdfDocument implements IPdfDocument {

  readonly _instance: jsPdf | null = null;

  constructor(document: jsPdf) {
    this._instance = document;
  }

  public download(): void {
    if (this._instance !== null){
      this._instance.setFontSize(24);
      this._instance.text("A picture on the document :D", 35, 25);
      this._instance.addImage("https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg", "JPEG", 15, 40, 180, 180);

      this._instance.save("doc_with_an_image.pdf")
    }
  }

}
