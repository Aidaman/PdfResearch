import jsPdf from "jspdf";

export interface IPdfDocument {
  _instance: jsPdf | null;
  download: () => void;
}
