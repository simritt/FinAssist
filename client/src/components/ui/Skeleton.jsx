import clsx from "clsx";

export default function Skeleton({ className }) {
  return (
    <div
      className={clsx(
        "relative overflow-hidden rounded-lg bg-slate-200 dark:bg-white/5",
        className
      )}
    >
      <div className="shimmer absolute inset-0" />
    </div>
  );
}
