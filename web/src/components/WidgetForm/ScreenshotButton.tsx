import html2canvas from "html2canvas";
import { Camera, Trash } from "phosphor-react";
import { useState } from "react";
import { Loading } from "../Loading";

// INTERFACE DEFININDO PROPS TYPESCRIP
interface ScreenshotButtonProps {
    screenshot: string | null,
    onScreenshotOk: (screenshot: string | null) => void
}

// COMPONENT
export function ScreenshotButton({ screenshot, onScreenshotOk }: ScreenshotButtonProps) {
    const [isTakeScreenshot, setIsTakeScreenshot] = useState(false)

    async function handleTakeScreenshot() {
        setIsTakeScreenshot(true);

        const canvas = await html2canvas(document.querySelector('html')!);
        const base64Image = canvas.toDataURL('image/png')
        onScreenshotOk(base64Image);
        setIsTakeScreenshot(false);
    }

    if (screenshot) {
        return (
            <button
                type="button"
                className="p-1 w-10 h-10 rounded-md border-transparent flex justify-end items-end text-zinc-400 hover:text-zinc-100 transition-colors"
                style={{
                    backgroundImage: `url(${screenshot})`,

                }}
                onClick={() => onScreenshotOk(null)}
            >
                <Trash className="w-4 h-4" />
            </button>
        )
    }

    return (
        <button
            type="button"
            onClick={handleTakeScreenshot}
            className="p-2 bg-zinc-800 rounded-md border-transparent hover:bg-zinc-700 transition-colors  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors"
        >
            {isTakeScreenshot ? <Loading /> : <Camera className="w-6 h-6" />}

        </button>
    )
}