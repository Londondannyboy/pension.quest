export function KPI({ label, value, icon }: { label: string; value: string; icon: string }) {
  return (
    <div className="bg-white/5 rounded-xl p-6 border border-white/10 flex items-center gap-4">
      <div className="text-3xl text-amber-400">{icon}</div>
      <div>
        <div className="text-sm text-white/60">{label}</div>
        <div className="text-xl font-bold text-white">{value}</div>
      </div>
    </div>
  );
}
