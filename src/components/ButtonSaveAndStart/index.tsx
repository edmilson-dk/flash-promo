import { FiPlay } from "react-icons/fi";
import { Link } from "react-router-dom";

import { ButtonSaveAndStartWrapper } from "src/styles/components/ButtonSaveAndStart";

type ButtonSaveAndStartProps = {
  route: string;
  onClick: () => void;
}

function ButtonSaveAndStart({ route }: ButtonSaveAndStartProps) {
  return ( 
    <ButtonSaveAndStartWrapper>
      <Link to={route}>
        <strong>Salvar e iniciar</strong>
        <span>
          <FiPlay size="100%" />
        </span>
      </Link>
    </ButtonSaveAndStartWrapper>
  )
}

export default ButtonSaveAndStart;