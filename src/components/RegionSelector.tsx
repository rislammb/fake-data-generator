import { Region } from "../types/types";

interface RegionSelectorProps {
  region: Region;
  onChange: (newRegion: Region) => void;
}

export default function RegionSelector({
  region,
  onChange,
}: RegionSelectorProps) {
  return (
    <select value={region} onChange={(e) => onChange(e.target.value as Region)}>
      <option value="USA">USA</option>
      <option value="Poland">Poland</option>
      <option value="Georgia">Georgia</option>
    </select>
  );
}
