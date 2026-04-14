import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
export async function download(doc) {
  const fileUrl = doc.fileUrl;
  const a = document.createElement("a");
  a.href = fileUrl;
  a.download = "document.pdf";
  a.click();
}
