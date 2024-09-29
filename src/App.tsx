import React, { useState } from "react";
import DataTable from "./components/DataTable";
import RegionSelector from "./components/RegionSelector";
import ErrorSlider from "./components/ErrorSlider";
import SeedInput from "./components/SeedInput";
import { Region } from "./types/types";
import ExportAsCSV from "./components/ExportAsCSV";

const App: React.FC = () => {
  const [region, setRegion] = useState<Region>("USA");
  const [errorCount, setErrorCount] = useState(0);
  const [seed, setSeed] = useState(Math.random().toString(36).substring(2, 15));

  return (
    <div>
      <div className="mb-4 items-end sticky top-0 left-0 bg-gray-100 z-10">
        <div className="max-w-screen-lg mx-auto flex gap-4 justify-between p-3">
          <RegionSelector region={region} onChange={setRegion} />
          <ErrorSlider errorCount={errorCount} onChange={setErrorCount} />
          <SeedInput seed={seed} onChange={setSeed} />
          <ExportAsCSV />
        </div>
      </div>
      <div className="max-w-screen-lg mx-auto overflow-x-auto px-2">
        <DataTable region={region} errorCount={errorCount} seed={seed} />
      </div>
    </div>
  );
};

export default App;
