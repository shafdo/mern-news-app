type JumbotronProps = {
  heading: string;
  subheading: string;
  imgUrl: string;
};

export const Jumbotron = ({ heading, subheading, imgUrl }: JumbotronProps) => {
  return (
    <section
      style={{ backgroundImage: `url(${imgUrl})` }}
      className={`bg-center bg-no-repeat bg-gray-700 bg-blend-multiply`}
    >
      <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
        <h1 className="mb-8 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
          {heading}
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
          {subheading}
        </p>
      </div>
    </section>
  );
};

export default Jumbotron;
