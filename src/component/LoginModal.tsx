import Modal from 'react-modal'

type ModalProps={
    modalIsOpen: boolean;
    closeModal: ()=>void;
}

const LoginModal:React.FC<ModalProps> =({modalIsOpen,closeModal})=>{
    return(
        <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
            <h2>Login</h2>
            <form>
                <label>Id</label>
                <input id="userId"/><br/>
                <label>Password</label>
                <input id="userPw"/>
                <button>Login</button>
            </form>
        </Modal>
    )
}
export default LoginModal;