
import { Container, Title } from './styledbutton'

interface ButtonProps {
  type: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  title: String
}

export default function Button({ type, onClick, title }: ButtonProps) {
  return (
    <Container
      type={type}
      onClick={onClick} >
      <Title>
        {title}
      </Title>
    </Container>
  );
};

;
