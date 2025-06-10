import { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

export default function TablespaceChart() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const pctFree = parseInt(localStorage.getItem("PCTFREE") || "10");
      const pctUsed = parseInt(localStorage.getItem("PCTUSED") || "40");

      const newData = [
        { name: "TS1", usage: 100 - pctFree - Math.random() * 10 },
        { name: "TS2", usage: 100 - pctUsed - Math.random() * 15 },
        { name: "TS3", usage: 60 + Math.random() * 30 }
      ];
      setData(newData);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-4 bg-white border rounded shadow">
      <h3 className="font-semibold mb-4">📦 Utilisation des Tablespaces</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis unit="%" />
          <Tooltip />
          <Bar dataKey="usage" fill="#3b82f6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}