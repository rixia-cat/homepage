import type { ComponentProps } from "react";
import ScribbleCard from "./components/ScribbleCard";

type ScribbleCardGridViewProps = {
  scribbles: ComponentProps<typeof ScribbleCard>["scribble"][];
};

export default function ScribbleListView(props: ScribbleCardGridViewProps) {
  return (
    <div className="mx-auto w-full">
      <div className=" mx-auto">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3">
          {props.scribbles.map((scribble) => (
            <ScribbleCard key={scribble.id} scribble={scribble} />
          ))}
        </div>
      </div>
    </div>
  );
}
