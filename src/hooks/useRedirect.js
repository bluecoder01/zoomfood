import { useNavigate } from 'react-router-dom'

const Redirect = (path) => {

  const navigate = useNavigate();
  navigate(path)
  return 0

}

export default Redirect