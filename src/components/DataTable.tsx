import { useState, useEffect } from "react";
import { UserRecord, Region } from "../types/types";
import { generateRecords, injectErrors } from "../utils/dataGenerator";
import { useInfiniteScroll } from "../hooks/useInfiniteScroll";

interface DataTableProps {
  region: Region;
  errorCount: number;
  seed: string;
}

export default function DataTable({
  region,
  errorCount,
  seed,
}: DataTableProps) {
  const [records, setRecords] = useState<UserRecord[]>([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const newRecords = generateRecords(page, seed, region, 20).map((record) =>
      injectErrors(record, errorCount)
    );
    setRecords((prev) => [...prev, ...newRecords]);
  }, [page, region, errorCount, seed]);

  useInfiniteScroll(() => setPage((prev) => prev + 1));

  return (
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" className="px-6 py-3">
            #
          </th>
          <th scope="col" className="px-6 py-3">
            ID
          </th>
          <th scope="col" className="px-6 py-3">
            Name
          </th>
          <th scope="col" className="px-6 py-3">
            Address
          </th>
          <th scope="col" className="px-6 py-3">
            Phone
          </th>
        </tr>
      </thead>
      <tbody className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
        {records.length > 0 &&
          records.map((record, index) => (
            <tr key={index}>
              <td className="px-4 py-2">{record.index}</td>
              <td className="px-4 py-2">{record.id}</td>
              <td className="px-4 py-2">{record.name}</td>
              <td className="px-4 py-2">{record.address}</td>
              <td className="px-4 py-2">{record.phone}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}
