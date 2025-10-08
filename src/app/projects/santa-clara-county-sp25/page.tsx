//import CAPITOL_LINEART from '@/assets/capitol-lineart.png';
import Footer from '@/components/Footer';
import Section from "@/components/Section";
import TopBar from '@/components/TopBar';
import { SmallText, Subheading, Text } from '@/components/Typography';
//import Image from 'next/image';

export default function SJ2() {
  return (
    <>
      <TopBar />
      <Section className='h-[40vh] flex flex-col justify-center mt-16' backgroundChildren={<>
        <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-b from-secondary to-dark opacity-35 -z-30' />
      </>}>
        <div className="flex flex-col justify-end h-full pb-4">
          <Text className='md:text-5xl text-3xl uppercase font-semibold'>Santa Clara County, CA</Text>
          <Text className='md:text-2xl text-lg md:mt-4 mt-2 uppercase'>AI Use Dictionary<br></br>and Risk Assessment Framework</Text>
        </div>
        {/*<Image src={CAPITOL_LINEART} alt="Capitol Building" className='md:h-[650px] md:w-[650px] h-[280px] w-[280px] object-contain absolute md:-right-10 md:-top-24 right-0 -z-10' />*/}
      </Section>
      <br />
      <br />
      <Section>
        <Subheading>Project Description</Subheading>
        <Text>
        Santa Clara County, like many local governments, is increasingly navigating both the promise and complexity of emerging technologies—particularly artificial intelligence. The effective and responsible adoption of these tools requires more than technical infrastructure; it demands a shared understanding of key terminology and a standardized framework to evaluate harmful risks.
		
		<br/><br/>This project resulted in two complementary deliverables: an interactive, maintainable Tech Dictionary Wiki designed to build digital literacy among non-technical stakeholders, and a tailored AI Risk Assessment Framework that aligns with county goals, national standards, and stakeholder input. Together, these tools support Santa Clara County’s efforts to make informed, transparent, and responsible decisions regarding emerging technologies.

        </Text>
      </Section>
   <Section>
        <Subheading>Project Aims</Subheading>
        <Text>
		This project was guided by two overarching goals:
		<br/><br/>1. Build Shared Understanding: Develop an interactive, maintainable Tech Dictionary Wiki to help county staff—especially those in HR, Legal, IT, and Data Management—navigate and contextualize technical jargon through accessible definitions, visual hierarchies, and structured learning paths.
		<br/>2. Support Responsible AI Governance: Develop an interactive, maintainable Tech Dictionary Wiki to help county staff—especially those in HR, Legal, IT, and Data Management—navigate and contextualize technical jargon through accessible definitions, visual hierarchies, and structured learning paths.
		<br/><br/>By grounding both tools in accessibility, adaptability, and ethical foresight, the team aimed to equip the County with long-term, scalable tools for digital governance.
        </Text>
      </Section>
      <Section>
        <Subheading>Methodology</Subheading>
        <Text>
       The team&apos;s approach combined stakeholder input, policy research, and technical design to create user-informed, standards-aligned deliverables:
		<br/><br/>Tech Dictionary Development: At the outset, the team met with Santa Clara County to understand their specific challenges—particularly around inconsistent understanding of AI- and tech-related terms across departments. Based on these conversations, they prioritized making the dictionary adaptable to users with varying levels of technical exposure, resulting in department-specific learning paths (HR, Legal, IT, and Data Management). The dictionary features clear definitions, interlinked concepts, and visual hierarchies. To ensure sustainability, they implemented a simple way for county staff to add or edit terms without code.
		<br/><br/>AI Risk Framework Design: They first conducted a literature review of foundational resources—including NIST’s AI Risk Management Framework and the Center for Long-Term Cybersecurity’s AI Risk Standards—to identify leading practices in topics such as explainability, bias mitigation, and environmental impact. They then interviewed domain experts such as Tricia Blum (AI Governance Group) and Professor Daniel Schiff (Purdue University) to understand practical barriers and stakeholder needs. From this, they identified 12 core risk variables ranging from data permissions to logging and bias testing. These variables informed a Google Sheets-based tool—whose structure was sourced from a previous Paragon project—with a ranking and scoring system.

        </Text>
      </Section>
      <Section className='flex justify-between md:flex-row flex-col'>
        <Subheading>Project Deliverables</Subheading>
        <div className='md:w-[80%]'>
          <hr className="border-t border-gray-300 my-4 mb-6 md:block hidden" />
          <div className='ml-5 mr-5 md:mt-0 mt-4'>
            <Text className='mb-2'>Tech Dictionary</Text>
			<SmallText>The Tech Dictionary, also referred to as the Tech Wiki, is interactive, relational, guided, and maintainable. Instead of a long list of terms, the technology dictionary presents the user with four learning paths for those in HR, Legal, IT, and Data Management. Terms included in the learning paths are curated to the department’s operational context. For example, the legal learning path includes the following terms: artificial intelligence, data privacy, privacy-enhancing technology, surveillance technology, sensitive data, watermarking, data breach, deepfake, predictive policing, and crime forecasting. Each of the terms build on each other, providing context for future terms. Definitions are accompanied by county-specific notes where applicable. Terms are interlinked to show conceptual relationships and build foundational knowledge progressively.
            </SmallText>
          </div> 
          <hr className="border-t border-gray-300 my-4 mt-6 mb-6" />
          <div className='ml-5 mr-5'> 
            <Text className='mb-2'>AI Risk Assessment Tool</Text>
			<SmallText>The AI Risk assessment Tool is a Google spreadsheet with two initial questions and 12 risk evaluation categories. The risk factors are data selling, data collection, data retention, user permissions, human verification, accuracy of source material, explainability, logging, biasness testing, issue resources, alternatives, and environmental impact. Each risk factor has a designated row, with a question-based framework to help county workers think about their AI proposals and the risks associated with them. Answering these questions provides a rating for each risk factor. The ratings are low risk, relatively low risk, moderate risk, relatively high risk, and high risk. The answers are automatically weighted, removing the need for users to manually calculate the riskiness of their proposal.
			</SmallText>
          </div> 
          <hr className="border-t border-gray-300 my-4 mt-6" />
        </div>
      </Section>

      <Section>
        <Subheading>Project Impact and Future Work</Subheading>
        <Text>
        Together, these tools equip Santa Clara County with scalable resources for understanding and evaluating AI technologies. The Tech Dictionary empowers staff across departments to engage confidently with technical concepts, while the Risk Framework provides a consistent method for assessing proposals in real time. Using both deliverables, individual county workers can learn essential information as the AI landscape continues to rapidly evolve. Future work should focus on updating the terms, adding new terms, creating new learning paths, integrating the technology dictionary into the risk assessment framework for easy access, and updating the AI risk assessment to correspond with new AI capabilities. Ongoing use of these deliverables can help ensure county workers remain informed and accountable as AI integration expands. 

</Text>
      </Section>

      <Section>
        <Subheading>Contributors</Subheading>
        <div className='grid md:grid-cols-4 sm:grid-cols-2 gap-4'>
          {[
            { name: 'Quinn Wilson', role: '(Project Lead)', school: 'UC Berkeley' },
			{ name: 'Aditya Seth', role: '', school: 'UC Davis' },
            { name: 'Anne Do', role: '', school: 'UCLA' },
            { name: 'Amy Wong', role: '', school: 'UCLA' },
            { name: 'Laila Albalkhi', role: '', school: 'University of Windsor' },
            { name: 'Pranav Dulepet', role: '', school: 'University of Maryland' },
            { name: 'Tony Wang', role: '', school: 'Stanford University' }
          ].map((contributor, index) => (
            <div key={index} className='border border-gray-300 p-4 rounded-lg flex flex-col items-center justify-center'>
              <Text className='text-center font-semibold'>{contributor.name} {contributor.role}</Text>
              <SmallText className='text-center font-italic'>{contributor.school}</SmallText>
            </div>
          ))}
        </div>
      </Section>

      <Footer/>

    </>
  );
}