import { useEffect, useState } from "react";

type PreloadedVideoProps = React.VideoHTMLAttributes<HTMLVideoElement> & {
    src: string;
};

export const PreloadedVideo = ({ src, ...props }: PreloadedVideoProps) => {
    const [blobUrl, setBlobUrl] = useState<string | null>(null);

    useEffect(() => {
        let cancelled = false;
        let objectUrl: string | null = null;

        const load = async () => {
            try {
                const response = await fetch(src);
                if (!response.ok) {
                    throw new Error(`Failed to fetch video: ${response.status}`);
                }
                const blob = await response.blob();
                if (cancelled) return;
                objectUrl = URL.createObjectURL(blob);
                setBlobUrl(objectUrl);
            } catch {
                // Fall back to direct src if preloading fails.
                setBlobUrl(null);
            }
        };

        load();

        return () => {
            cancelled = true;
            if (objectUrl) {
                URL.revokeObjectURL(objectUrl);
            }
        };
    }, [src]);

    return <video {...props} src={blobUrl ?? src} />;
};
