import { mkConfig, generateCsv, download } from "export-to-csv";

interface ExportAsCSVProps {
  data: any[];
}

export default function ExportAsCSV({ data }: ExportAsCSVProps) {
  const csvConfig = mkConfig({ useKeysAsHeaders: true, filename: "Users" });
  const csv = data.length > 0 && generateCsv(csvConfig)(data);

  return (
    <button
      onClick={() => csv && download(csvConfig)(csv)}
      className="btn btn-primary"
    >
      Export
    </button>
  );
}
