import React, { useEffect, useState } from "react";
import DataTable from "./components/DataTable";
import RegionSelector from "./components/RegionSelector";
import ErrorSlider from "./components/ErrorSlider";
import SeedInput from "./components/SeedInput";
import { Region, UserRecord } from "./types/types";
import ExportAsCSV from "./components/ExportAsCSV";
import { generateRecords, injectErrors } from "./utils/dataGenerator";
import { useInfiniteScroll } from "./hooks/useInfiniteScroll";

const App: React.FC = () => {
  const [region, setRegion] = useState<Region>("USA");
  const [errorCount, setErrorCount] = useState(0);
  const [seed, setSeed] = useState(Math.random().toString(36).substring(2, 15));
  const [recordsData, setRecordsData] = useState<UserRecord[]>([]);
  const [records, setRecords] = useState<UserRecord[]>([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setRecordsData([]);
    if (page === 1) {
      const newRecords = generateRecords(page, seed, region, 20).map((record) =>
        injectErrors(record, errorCount)
      );
      setRecordsData(newRecords);
    } else {
      setPage(1);
    }
  }, [region, seed]);

  useEffect(() => {
    const newRecords = recordsData.map((record) =>
      injectErrors(record, errorCount)
    );
    setRecords(newRecords);
  }, [errorCount, recordsData]);

  useEffect(() => {
    const newRecords = generateRecords(page, seed, region, 20);
    setRecordsData((prev) => [...prev, ...newRecords]);
  }, [page]);

  useInfiniteScroll(() => setPage((prev) => prev + 1));

  return (
    <div>
      <div className="mb-4 items-end sticky top-0 left-0 bg-gray-100 z-10">
        <div className="max-w-screen-lg mx-auto flex gap-4 justify-between p-3">
          <RegionSelector region={region} onChange={setRegion} />
          <ErrorSlider errorCount={errorCount} onChange={setErrorCount} />
          <SeedInput seed={seed} onChange={setSeed} />
          <ExportAsCSV data={records} />
        </div>
      </div>
      <div className="max-w-screen-2xl mx-auto w-full px-2">
        <DataTable data={records} />
      </div>
    </div>
  );
};

export default App;
