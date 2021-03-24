import { FiPlay } from "react-icons/fi";
import { Link } from "react-router-dom";

import { ButtonStartWrapper } from "src/styles/components/ButtonStart";

type ButtonStartProps = {
  route: string;
}

function ButtonStart({ route }: ButtonStartProps) {
  return (
  
      <ButtonStartWrapper>
          <Link to={route}>
        <strong>Salvar e iniciar</strong>
        <span>
          <FiPlay size="100%" />
        </span>
        </Link>
      </ButtonStartWrapper>
 
  )
}

export default ButtonStart;