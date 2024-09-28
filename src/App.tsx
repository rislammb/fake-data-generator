import React, { useState } from "react";
import DataTable from "./components/DataTable";
import RegionSelector from "./components/RegionSelector";
import ErrorSlider from "./components/ErrorSlider";
import SeedInput from "./components/SeedInput";
import { Region } from "./types/types";

const App: React.FC = () => {
  const [region, setRegion] = useState<Region>("USA");
  const [errorCount, setErrorCount] = useState(0);
  const [seed, setSeed] = useState(Math.random().toString(36).substring(2, 15));

  return (
    <div className="max-w-screen-lg mx-auto p-4">
      <div className="flex gap-4 justify-between mb-4">
        <RegionSelector region={region} onChange={setRegion} />
        <ErrorSlider errorCount={errorCount} onChange={setErrorCount} />
        <SeedInput seed={seed} onChange={setSeed} />
      </div>
      <DataTable region={region} errorCount={errorCount} seed={seed} />
    </div>
  );
};

export default App;
