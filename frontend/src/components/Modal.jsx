import { LoginForm } from './LoginForm';

const Modal = ({ isOpen, onClose }) => {
  return (
    <>
      {isOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex:22
          }}
          onClick={ onClose }
        >
          <div
            style={{
              backgroundColor: 'white',
              padding: '20px',
              borderRadius: '8px',
              boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
              width: '400px',
              textAlign: 'center',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <LoginForm />
            <button
              style={{
                backgroundColor: '#f0f0f0',
                border: 'none',
                padding: '8px 16px',
                fontWeight:'bold',
                marginTop: '10px',
                cursor: 'pointer',
                position:'absolute',
                top:80,
                right:450,
                color:'black'
              }}
              onClick={ onClose }
            >
             X
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;

