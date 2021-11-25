export const Screen: React.FC = (props) => {
  return (
    <section className="Screen h-screen w-full flex flex-col items-center bg-app-screen-background" {...props}>
      {props.children}
    </section>
  )
};
