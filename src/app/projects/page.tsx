
import Button from '@/components/Button';
import Footer from '@/components/Footer';
import Section from "@/components/Section";
import TopBar from '@/components/TopBar';
import {SmallText, Subheading, Text } from '@/components/Typography';
import Link from 'next/link';
import { RiArrowDownLine } from 'react-icons/ri';
import BgGrid from '@/components/BgGrid';
import ProjectCard from '@/components/ProjectCard';
import GrayDivider from '@/components/GrayDivider';

export default function Projects() {
  return (
    <>
      <TopBar />
      <div
        className="background-container relative flex flex-col md:block"
      >
        <BgGrid lineCount={7} />
        
        <div className="flex-1 flex flex-col justify-center md:block">
          <Text className='text-white text-4xl pl-4 md:text-7xl md:pl-20 md:mt-60 pb-10 md:pb-0 font-semibold text-center md:text-left'>
            Project Portfolio
          </Text>
          
          <Text className="text-xl md:text-3xl md:text-right pt-0 md:pt-40 max-w-full px-4 md:ml-auto md:pr-20 font-semibold text-center">
            View our past Fellows&apos; work!
          </Text>
        </div>

        <div className="animate-bounce absolute md:bottom-[8vh] bottom-[7vh] left-0 z-10 w-full flex justify-center text-4xl">
          <RiArrowDownLine />
        </div>

        {/* Gradient overlay - desktop only */}
        <div className="absolute -bottom-1 left-0 w-full h-[20%] bg-gradient-to-b from-transparent to-dark md:block hidden" />
        
        {/* Background overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-[#050022] md:bg-opacity-65 bg-opacity-40 -z-10" />
      </div>

      <Section>
      <Text className='md:text-4xl text-2xl uppercase font-semibold pb-3'>Our Projects </Text> 
      <GrayDivider />
      <Text className='md:text-2xl text-1xl uppercase font-semibold pt-2'>Summer 2024 </Text> 
      <GrayDivider />
        <div className="grid md:grid-cols-3 gap-6 text-center">
            <Link href="/projects/summer24/stl" passHref>
                <ProjectCard 
                  timeline='2024 Summer cohort'
                  projectTitle="ST. LOUIS STUDENTS EXAMINE TECH-POWERED Cultural DIVERSITY" 
                />
            </Link> 
            <Link href="/projects/summer24/stcl" passHref>
                <ProjectCard 
                  timeline='2024 Summer cohort'
                  projectTitle="Cybersecurity Risk Prioritization in Santa Clara County" 
                />
            </Link>
        </div>
        <Text className='md:text-2xl text-1xl uppercase font-semibold pt-20'>Spring 2024 </Text> 
        <GrayDivider />
        <div className="grid md:grid-cols-3 gap-6 text-center">
            <Link href="/projects/sp24/leb" passHref>
                <ProjectCard 
                  timeline='2024 Spring cohort'
                  projectTitle="STUDENTS IN LEBANON CREATE AI AUDITING FRAMEWORK"
                />
            </Link>
			<Link href="/projects/sp24/bos" passHref>
                <ProjectCard 
                  timeline='2024 Spring cohort'
                  projectTitle="BOSTON STUDENTS WORK ON TECH PROCUREMENT GUIDELINES" 
                />
            </Link>
            <Link href="/projects/sp24/sj" passHref>
                <ProjectCard 
                  timeline='2024 Spring cohort'
                  projectTitle="SAN JOSE STUDENTS TACKLE PUBLIC INTEGRITY AND AI" 
                />
            </Link>
            <Link href="/projects/sp24/sjg" passHref>
                <ProjectCard 
                  timeline='2024 Spring cohort'
                  projectTitle="SAN JOSE STUDENTS PROTECT GOVERNMENT COMMUNICATION FROM AI" 
                />
            </Link>
            <Link href="/projects/sp24/stl" passHref>
                <ProjectCard 
                  timeline='2024 Spring cohort'
                  projectTitle="AI-Driven Language Access for St. Louis" 
                />
            </Link>
        </div>
        <SmallText className='text-xs pt-5'>We&apos;re working on adding the rest of our portfolio, stay tuned for a complete collection!</SmallText>
      </Section>

      <Section>
        <Subheading className='flex justify-center text-center'>What can Paragon<br />do for you?</Subheading>
        <div className='flex justify-center'>
          <Button url={"mailto:paragonfellowship@gmail.com"} className='mt-4 justify-center'>Contact Us</Button>
        </div>

      </Section>



      <Footer/>

    </>
  );
}