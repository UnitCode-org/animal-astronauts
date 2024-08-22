import Image from "next/image";
import { Button } from "../ui/button";

function Apply() {
  return (
    <section className="z-20 relative max-w-screen-2xl w-full md:px-16 mb-28">
      <Image
        src="/images/decoration/stars.svg"
        alt="stars"
        layout="responsive"
        width={100}
        height={30}
        objectFit="cover"
        className="w-full absolute z-20"
      />

      <div className="w-full px-6 md:px-0">
        <div className="bg-gradient-to-r from-[#A46CFF] via-[#A46CFF] via-15% to-[#5649FF] w-full px-4 md:px-8 py-28 md:py-12 rounded-3xl relative z-30 font-outfit">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-center px-8 md:px-0 relative z-30">
            The Universe is Expanding
          </h1>
          <p className="text-center text-xl md:text-2xl mb-10">
            Your journey should too. Join the AA Club today.
          </p>
          <div className="flex justify-center w-full">
            <Button size="large" className="text-lg font-medium mx-auto">
              Apply for Membership
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Apply;
