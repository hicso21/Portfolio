import { useEffect } from "react";
import ModalContent from "./ModalContent";
import { usePage } from "../lib/reducer/PageContext";

export default function ProjectModal() {
    const { modal, setModal } = usePage();

    useEffect(() => {
        if (modal) {
            console.log(modal);
        }
        window.addEventListener("keydown", (e) => {
            if (e.key === "Escape") {
                setModal(null);
            }
        });
        return () => {
            window.removeEventListener("keydown", (e) => {
                if (e.key === "Escape") {
                    setModal(null);
                }
            });
        };
    }, [modal]);

    return <ModalContent modal={modal} setModal={setModal} />;
}
