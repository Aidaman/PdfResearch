import jsPdf from "jspdf";
import {SimplePdfDocument} from "../PdfDocumentTypes/SimplePdfDocument";
import {IPdfDocument} from "../Interfaces/PdfDocument";
import {ImagePdfDocument} from "../PdfDocumentTypes/ImagePdfDocument";
import {AnnotationPdfDocument} from "../PdfDocumentTypes/AnnotationPdfDocument";

export class PdfDocumentFactory {

  public generate(type: string): IPdfDocument {
    switch (type){
      case "simple": return new SimplePdfDocument(new jsPdf());
      case "with_image": return new ImagePdfDocument(new jsPdf());
      case "with_annotation": return new AnnotationPdfDocument(new jsPdf());

      default: throw new Error("can not generate document with this type");
    }
  }
}
