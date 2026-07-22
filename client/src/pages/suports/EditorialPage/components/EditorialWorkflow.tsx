import type { EditorialWorkflowStep } from "../../../../assets/dataContent/editorialData";

interface EditorialWorkflowProps {
  tagline: string;
  heading: string;
  steps: EditorialWorkflowStep[];
}

export default function EditorialWorkflow({
  tagline,
  heading,
  steps,
}: EditorialWorkflowProps) {
  return (
    <section className="space-y-8 p-8 sm:p-12 rounded-3xl bg-slate-900 text-white border border-slate-800">
      <div className="space-y-2">
        <div className="font-mono text-xs font-semibold text-primary uppercase tracking-widest">
          // {tagline}
        </div>
        <h2 className="font-display text-2xl sm:text-4xl font-bold text-white">
          {heading}
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step, idx) => (
          <div
            key={idx}
            className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700/60 relative space-y-4"
          >
            <div className="font-mono text-3xl font-extrabold text-primary">
              {step.stepNumber}
            </div>
            <h3 className="font-display font-bold text-base text-white">
              {step.title}
            </h3>
            <p className="font-body text-xs text-slate-300 leading-relaxed">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
