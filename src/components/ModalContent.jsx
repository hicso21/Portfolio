export default function ModalContent({ modal, setModal }) {
    return (
        <div id="modal" className={modal != null ? "opened" : ""}>
            <div className="modalContent">
                <span className="close" onClick={() => setModal(null)}>
                    &times;
                </span>
                <h5 className="modal-title">{modal?.title}</h5>
                <div className="divider" />
                <div>
                    {modal?.description.split("\n").map((line, index) => (
                        <p className="modal-p" key={index}>
                            {line}
                        </p>
                    ))}
                    {modal?.unorderedList?.length && (
                        <ul>
                            {modal?.unorderedList.map((item, index) => (
                                <li key={index} className="modal-li">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
                {modal?.imageUrl ? (
                    <img src={modal?.imageUrl} alt={modal?.title} />
                ) : (
                    <div className="modal-placeholder">
                        <p className="modal-placeholder-text">
                            Por motivos de privacidad, no se incluyen imágenes
                        </p>
                    </div>
                )}
                {modal?.link && (
                    <div className="modal-buttons">
                        <a
                            href={modal?.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="modal-link"
                        >
                            Ver resultado
                        </a>
                    </div>
                )}
                <div className="technologies">
                    {modal?.technologies.map((tech, index) => (
                        <span key={index} className="modal-technology">
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}
