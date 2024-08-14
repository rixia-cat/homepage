export default function LabelChip({ label }: { label: string }) {
  return (
    <span className="rounded-full border border-gray-600 bg-chip_background px-3 py-1 text-blueblack text-sm dark:border-chip_border-dark dark:bg-chip_background-dark dark:text-blueblack-dark">
      {label}
    </span>
  );
}
