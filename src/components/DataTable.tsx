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
    setRecords([]);
    if (page === 1) {
      const newRecords = generateRecords(page, seed, region, 20).map((record) =>
        injectErrors(record, errorCount)
      );
      setRecords(newRecords);
    } else {
      setPage(1);
    }
  }, [region, errorCount, seed]);

  useEffect(() => {
    const newRecords = generateRecords(page, seed, region, 20).map((record) =>
      injectErrors(record, errorCount)
    );
    setRecords((prev) => [...prev, ...newRecords]);
  }, [page]);

  useInfiniteScroll(() => setPage((prev) => prev + 1));

  return (
    <table className="w-full table table-zebra">
      <thead className="bg-indigo-100 text-gray-700">
        <tr>
          <th>#</th>
          <th>ID</th>
          <th>Name</th>
          <th>Address</th>
          <th>Phone</th>
        </tr>
      </thead>
      <tbody>
        {records.length > 0 &&
          records.map((record, index) => (
            <tr key={index}>
              <td>{record.index}</td>
              <td>{record.id}</td>
              <td>{record.name}</td>
              <td>{record.address}</td>
              <td>{record.phone}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}
