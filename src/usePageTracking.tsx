import { useEffect } from "react";
import { useLocation } from "react-router-dom";

declare global {
    interface Window {
        gtag: (...args: any[]) => void;
    }
}

function usePageTracking() {
    const location = useLocation();
    useEffect(() => {
        if (!window.gtag) {
            return;
        }
        window.gtag("config", "G-7Y8QKWNHR9", {
            page_path: location.pathname,
        });
    }, [location]);
}

export default usePageTracking;
