import { useEffect } from "react";
import { useState } from "react";

export const useCustomStyles = () => {
    const [customStyles, setCustomStyles] = useState({
        content: {
            background: "#fff",
            width: "900px",
            height: "420px",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
        },
        overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: "9",
        },
    });

    useEffect(() => {
        const handleResize = () => {
            const innerWidth = window.innerWidth;
            let newWidth, newHeight;

            if (innerWidth <= 568) {
                newWidth = "320px";
                newHeight = "700px";
            } else if (innerWidth <= 1024) {
                newWidth = "500px";
                newHeight = "700px";
            } else {
                newWidth = "900px";
                newHeight = "420px";
            }

            setCustomStyles((prev) => {
                if (
                    prev.content.width === newWidth &&
                    prev.content.height === newHeight
                ) {
                    return prev;
                } else {
                    return {
                        ...prev,
                        content: {
                            ...prev.content,
                            width: newWidth,
                            height: newHeight,
                        },
                    };
                }
            });
        };

        handleResize();

        window.addEventListener("resize", handleResize);

        // Limpia el evento de cambio de tamaño de la ventana al desmontar el componente
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return { customStyles };
};
