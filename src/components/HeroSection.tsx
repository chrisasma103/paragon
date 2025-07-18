import { RiArrowDownLine } from "react-icons/ri";
import { Text } from "./Typography";
import Button from "./Button";
import { FELLOW_APP_URL, NEWSLETTER_URL, CURRENTLY_APPLYING } from "@/app/constants";

export default function HeroSection() {
  return (
    <section className="relative flex w-full py-10 md:py-10 h-[100svh] justify-center items-center">
      <div className="md:w-[1350px] w-screen max-w-[85vw] mx-10 hero-text-fadein">
        <div className="w-full">
          <div>
            <Text className="w-full text-[6.5vw] md:text-6xl lg:text-7xl uppercase md:mb-0 mb-[3vw] font-medium flex justify-center">
              building the
            </Text>
          </div>
          <div>
            <Text className="w-full text-[6.5vw] md:text-6xl lg:text-7xl uppercase md:mb-0 mb-[3vw] font-medium flex justify-center">
              next generation of
            </Text>
          </div>
          <div>
            <Text className="w-full text-[6.5vw] md:text-6xl lg:text-7xl uppercase md:mb-0 mb-[3vw] font-medium italic flex justify-center">
              tech policy leaders
            </Text>
          </div>
        </div>
        
        <div className="flex space-x-4 mt-4 justify-center">
          {CURRENTLY_APPLYING && (
            <Button style="secondary" inNewTab url={FELLOW_APP_URL}>
              APPLY FOR FALL 2025
            </Button>
          )}
          <Button style="secondary" inNewTab url={NEWSLETTER_URL}>
            SUBSCRIBE TO OUR NEWSLETTER
          </Button>
        </div>
		
        <div className="animate-bounce absolute md:bottom-[8vh] bottom-[7vh] left-0 z-10 w-full flex justify-center text-4xl">
          <RiArrowDownLine />
        </div>

        {/* Gradient overlay only visible on desktop */}
        <div className="absolute -bottom-1 left-0 w-full h-1/5 bg-gradient-to-b from-transparent to-dark md:block hidden" />
        
        {/* Background overlay with ratio-based opacity on mobile */}
        <div className="absolute top-0 left-0 w-full h-full bg-[#050022] md:bg-opacity-65 bg-opacity-40 -z-10" />
      </div>
    </section>
  );
}