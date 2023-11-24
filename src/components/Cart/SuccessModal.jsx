import React, {useContext, useEffect} from 'react'
import CartContext from '../../contexts/CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

function SuccessModal({onClose}) {

    const {  showSuccessModal, setShowSuccessModal} = useContext(CartContext)

    useEffect(() => {
    
        if (showSuccessModal) {
          const timer = setTimeout(() => {
            setShowSuccessModal(false);
          }, 2000);
    
          return () => clearTimeout(timer);
        }
      },[setShowSuccessModal, showSuccessModal])

  return (
    <div className="success-modal">
        <p> <FontAwesomeIcon color='green' icon={faCheckCircle}></FontAwesomeIcon> Item added to cart successfully!</p>
      </div>
  )
}

export default SuccessModal
