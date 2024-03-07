interface ButtonProps {
  backgroundColor: String;
  textColor: String;
  content: String;
  icon?: React.ReactNode;
}

const Button = ({ backgroundColor, textColor, content, icon }: ButtonProps) => {
  return (
    <button
      className={` flex items-center gap-2 font-semibold rounded-lg px-5 py-2`}
      style={{ background: `${backgroundColor}`, color: `${textColor}` }}
    >
      {content}
      {icon && <span>{icon}</span>}
    </button>
  );
};

export default Button;
