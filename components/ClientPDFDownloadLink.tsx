"use client";

import { useEffect, useState } from "react";

export default function PDFDownloadButtonWrapper({ document, fileName, label }: { document: JSX.Element; fileName: string; label: string }) {
  const [PDFDownloadLink, setPDFDownloadLink] = useState<null | any>(null);

  useEffect(() => {
    // Dynamically import @react-pdf/renderer at runtime only in browser
    import("@react-pdf/renderer").then((mod) => {
      setPDFDownloadLink(() => mod.PDFDownloadLink);
    });
  }, []);

  if (!PDFDownloadLink) {
    // While loading or during SSR, show placeholder
    return <span className="text-[#ccc]">Preparing...</span>;
  }

  return (
    <PDFDownloadLink document={document} fileName={fileName}>
      {({ loading }: { loading: boolean }) => (
        <span className="text-[#19a4e0] hover:underline cursor-pointer">
          {loading ? 'Preparing...' : label}
        </span>
      )}
    </PDFDownloadLink>
  );
}
