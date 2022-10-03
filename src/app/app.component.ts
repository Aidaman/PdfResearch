import { Component } from "@angular/core";
import {PdfDocumentFactory} from "./Shared/Factories/PdfDocumentFactory";
import {IPdfDocument} from "./Shared/Interfaces/PdfDocument";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["app.component.scss"]
})
export class AppComponent {

  private readonly _pdfDocumentsFactory: PdfDocumentFactory;
  public pdfDocument!: IPdfDocument;

  constructor() {
    this._pdfDocumentsFactory = new PdfDocumentFactory();
  }

  public CreateSimpleDocumentPlease(): void {
    this.pdfDocument = this._pdfDocumentsFactory.generate("simple");
    this.pdfDocument.download();
  }

  public CreateImageDocumentPlease() {
    this.pdfDocument = this._pdfDocumentsFactory.generate("with_image");
    this.pdfDocument.download();
  }

  public CreateAnnotationDocumentPlease() {
    this.pdfDocument = this._pdfDocumentsFactory.generate("with_annotation");
    this.pdfDocument.download();
  }
}
