import {IPdfDocument} from "../Interfaces/PdfDocument";
import jsPdf from "jspdf";

export class AnnotationPdfDocument implements IPdfDocument {

  readonly _instance: jsPdf | null = null;

  constructor(document: jsPdf) {
    this._instance = document;
  }

  public download(): void {
    if (this._instance !== null){
      this._instance.textWithLink("Click me!", 10, 10, {
        url: "https://refactoring.guru/design-patterns/factory-method"
      });
      this._instance.createAnnotation({
        type: "text",
        title: "note",
        bounds: {
          x: 10,
          y: 10,
          w: 200,
          h: 80
        },
        contents: "This is text annotation (closed by default)",
        open: false
      });

      this._instance.save("doc_with_annotations.pdf")
    }
  }

}
