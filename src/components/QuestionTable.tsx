import { TableData } from '@/types/quiz';

interface QuestionTableProps {
  data: TableData;
}

const QuestionTable = ({ data }: QuestionTableProps) => {
  return (
    <div className="overflow-x-auto mb-6">
      <table className="min-w-full border-2 border-border rounded-lg">
        <thead>
          <tr className="bg-muted">
            {data.headers.map((header, index) => (
              <th
                key={index}
                className="px-4 py-3 text-left text-sm font-semibold border-b-2 border-border"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.rows.map((row, rowIndex) => (
            <tr key={rowIndex} className="border-b border-border">
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className="px-4 py-3 text-sm"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default QuestionTable;
