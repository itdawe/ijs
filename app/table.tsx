import { PropsWithChildren } from "react";

export const Table = ({ children }: PropsWithChildren) => (
  <div className="flex items-center justify-center">
    <table className="min-w-max divide-y divide-gray-200">{children}</table>
  </div>
);

export const THead = ({ children }: PropsWithChildren) => (
  <thead className="bg-gray-50">{children}</thead>
);

export const TBody = ({ children }: PropsWithChildren) => (
  <tbody className="bg-white divide-y divide-gray-200">{children}</tbody>
);

export const THeadCell = ({ children }: PropsWithChildren) => (
  <th
    scope="col"
    className="px-6 py-2.5 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
  >
    {children}
  </th>
);

export const TCell = ({ children }: PropsWithChildren) => (
  <td className="px-6 py-4 whitespace-nowrap">{children}</td>
);
