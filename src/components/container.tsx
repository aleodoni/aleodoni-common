interface Props extends React.HTMLAttributes<HTMLElement>  {
  className?: string;
};

export const Container: React.FC<Props> = (props) => {
  return (
    <section className={`Container flex xl:w-5/6 md:w-full bg-gray-700 ${props.className}`}>
      {props.children}
    </section>
  )
};
