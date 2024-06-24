'use client';
import Image from "next/image";
import { useEffect, useState } from "react";

export default function CatWalkSection() {
    const [catPosition, setCatPosition] = useState(-100);
    useEffect(() => {
        const interval = setInterval(() => {
            setCatPosition((prev) => prev + 8);
            if (catPosition > 200) {
                setCatPosition(-100);
            }
        }, 500);
        return () => clearInterval(interval);
    }, []);

    const catStyle = {
        position: "relative",
        left: `${catPosition}px`,
        // 補完
        transition: "left 0.4s",
        // 左右反転
        transform: "scaleX(-1)",
    };

    return (
        <div className="w-full bg-gray-100 dark:bg-gray-800 " >
            <Image src="noun-cat-walking-395082.svg" style={catStyle} alt="Cat walking" width={200} height={300} />
        </div >
    );
}