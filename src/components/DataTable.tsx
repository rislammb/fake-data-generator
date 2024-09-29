import { UserRecord } from "../types/types";

interface DataTableProps {
  data: UserRecord[];
}

export default function DataTable({ data }: DataTableProps) {
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
        {data.length > 0 &&
          data.map((record, index) => (
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
