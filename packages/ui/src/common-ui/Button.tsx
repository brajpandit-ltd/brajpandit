import { Button as HeroUIButton } from "@heroui/button";

interface BtnProps {
  text: string;
  [key: string]: any;
}

const Button = ({ text, ...props }: BtnProps) => {
  return <HeroUIButton {...props}>{text}</HeroUIButton>;
};

export default Button;
