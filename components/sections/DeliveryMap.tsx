export default function DeliveryMap() {
  const steps = [
    { num: "01", title: "Discover", sub: "Map the operation", active: false },
    {
      num: "02",
      title: "Design",
      sub: "Choose the right system",
      active: true,
    },
    { num: "03", title: "Deliver", sub: "Ship and support", active: false },
  ];

  return (
    <div className="card-dark w-full max-w-[320px] space-y-6">
      <div className="flex justify-between items-center text-[10px] uppercase tracking-wider text-text-muted font-semibold">
        <span>DELIVERY MAP</span>
        <span className="flex items-center gap-1.5 text-green-500">
          <span className="w-2 h-2 rounded-full bg-green-500" />
          OPEN TO WORK
        </span>
      </div>

      <div className="space-y-4 relative">
        <div className="absolute left-3 top-4 bottom-4 w-px bg-border-dark -z-0" />
        {steps.map((step) => (
          <div key={step.num} className="flex gap-4 relative z-10">
            <div
              className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5 ${
                step.active
                  ? "bg-accent-orange text-white"
                  : "border border-border-dark bg-bg-card-dark text-text-muted"
              }`}
            >
              {step.num}
            </div>
            <div>
              <div className="text-sm font-medium text-white">{step.title}</div>
              <div className="text-xs text-text-muted">{step.sub}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="pt-4 border-t border-border-dark flex justify-between text-[10px] uppercase tracking-wider text-text-muted font-semibold">
        <span>PATNA</span>
        <span>REMOTE / WORLDWIDE</span>
      </div>
    </div>
  );
}
