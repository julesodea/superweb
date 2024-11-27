import Button from "./Button";

export const CallToAction = () => {
  return (
    <div className="h-screen flex align-center items-center justify-center">
      <div className=" rounded-lg mx-4 my-4 lg:mx-auto lg:max-w-7xl">
        <div className="h-full flex gap-4 items-center flex-col justify-center px-6 py-4">
          <div className="flex items-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Superweb Contact
            </h2>
          </div>

          <div className="md:flex items-center text-center space-x-8 max-w-2xl">
            <p>
              We are yabber dabber doo working from bedrock to bring you the
              best and most prehistoric web solutions to a flinstone near you.
            </p>
          </div>

          <div className="md:block">
            <a href="/contact">
              <Button className="group" variant="light">
                Let's connect{" "}
                <img
                  src="/arrow-right.svg"
                  alt="arrow right"
                  width={15}
                  height={15}
                  className="group-hover:translate-x-1 transition-transform duration-200"
                />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
