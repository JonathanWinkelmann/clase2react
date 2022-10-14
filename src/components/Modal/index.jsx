import React, {useEffect} from "react";
import './styles.scss';

const Modal = ({ handleClose }) => {

    //On escape it will close
    useEffect(() => {
        const handleEsc = (event) => {
            console.log(event); //Evento nativo del browser
            
            //Escape
            if (event.keyCode === 27){
                console.log("will close");
                handleClose(false);
            }
            
            //Enter
            if(event.keyCode === 13) {
                console.log("will close");
                handleSubmit();
            }
        };

        window.addEventListener("keydown", handleEsc);

        return () => {
            console.log("Se desmontara el componente");
            window.removeEventListener("keydown", handleEsc);
        };

    }, [handleClose]);


    const handleSubmit = (evento) => {
        evento?.preventDefault();
        console.log(evento);
    };
    
    const onClose = () => {
        //Se deberia cerrar el modal
        handleClose(false);
    };    



    return (
        <div className="background">
            <from className="modal-container" onSubmit={handleSubmit}>
                <h2 className="title">Titulo del modal</h2>
                <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt atque sint similique. Non id nobis accusamus quisquam voluptates ipsam consequuntur eveniet, sed repudiandae similique vel cumque magnam, adipisci at. Nam.</p>
                <div className="buttons-container">
                    <button className="rounded-button-cancel" type="button" onClick={onClose}>Close</button>
                    <button className="rounded-button-send" type="submit">Send</button>
                </div>
            </from>
        </div>
    );
};

export default Modal;






