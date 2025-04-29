import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalDelete({
    show,
    beerId,
    beerName,
    onCancel,
    onDeleteBeer
}) {
    
    const handleDeleteBeer = () =>{
        console.log(beerId);
        onDeleteBeer(beerId);
    }
     
    return (
        <>
        <Modal show={show} onHide={onCancel}>
            <Modal.Header closeButton>
            <Modal.Title>Eliminar cerveza</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Posta querés eliminar la cerveza <b>{beerName}??</b></p>
                </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={onCancel}>
                No, me equivoqué
            </Button>
            <Button variant="warning" onClick={handleDeleteBeer}>
                Si, posta!
            </Button>
            </Modal.Footer>
        </Modal>
        </>
    );
}

export default ModalDelete;