export default function LabelChip({ label }: { label: string }) {
    return (
        <span className=" rounded-full border border-gray-600 px-3 py-1 text-sm text-grayishblack  dark:border-gray-600 dark:text-grayishblack-dark">
            {label}
        </span>
    );
}