import { IPdfDocument } from "../Interfaces/PdfDocument";
import jsPdf from "jspdf";

export class SimplePdfDocument implements IPdfDocument {

  readonly _instance: jsPdf | null = null;

  constructor(instance: jsPdf) {
    this._instance = instance;
  }

  public download(): void {
    if(this._instance !== null){
      this._instance.setTextColor("#663399")
      this._instance.setFontSize(50);

      this._instance.text("HELLO WORLD", 10, 10);

      this._instance.save("Simple_doc_with_text.pdf");
    }
  }
}
