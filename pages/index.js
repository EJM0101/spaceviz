import dynamic from "next/dynamic";
import Link from "next/link";

const TablespaceChart = dynamic(() => import("@/components/TablespaceChart"), { ssr: false });
const ControlPanel = dynamic(() => import("@/components/ControlPanel"), { ssr: false });

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">📊 SpaceViz – Visualisation des Tablespaces</h1>
      <p className="mb-6 text-sm text-gray-600">Simulez en temps réel le remplissage de tablespaces Oracle avec PCTFREE / PCTUSED.</p>
      <ControlPanel />
      <TablespaceChart />
      <div className="mt-6">
        <Link href="/explanation" className="text-blue-600 underline text-sm">📘 Comprendre les concepts Oracle →</Link>
      </div>
    </div>
  );
}