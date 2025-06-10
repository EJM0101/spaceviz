import { useState, useEffect } from "react";

export default function ControlPanel() {
  const [pctFree, setPctFree] = useState(10);
  const [pctUsed, setPctUsed] = useState(40);

  useEffect(() => {
    localStorage.setItem("PCTFREE", pctFree);
    localStorage.setItem("PCTUSED", pctUsed);
  }, [pctFree, pctUsed]);

  return (
    <div className="mb-6 p-4 bg-white border rounded shadow">
      <h3 className="font-semibold mb-2">🎛️ Paramètres de simulation</h3>
      <label className="block mb-2">
        PCTFREE: {pctFree}%
        <input type="range" min="0" max="50" value={pctFree}
          onChange={e => setPctFree(e.target.value)} className="w-full" />
      </label>
      <label className="block">
        PCTUSED: {pctUsed}%
        <input type="range" min="0" max="100" value={pctUsed}
          onChange={e => setPctUsed(e.target.value)} className="w-full" />
      </label>
    </div>
  );
}