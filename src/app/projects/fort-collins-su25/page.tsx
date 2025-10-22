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
          <Text className='md:text-5xl text-3xl uppercase font-semibold'>Fort Collins, CO</Text>
		<Text className='md:text-2xl text-lg md:mt-4 mt-2 uppercase'>Mitigating the Impacts<br />of Deepfakes on Public Input</Text>
        </div>
        {/*<Image src={CAPITOL_LINEART} alt="Capitol Building" className='md:h-[650px] md:w-[650px] h-[280px] w-[280px] object-contain absolute md:-right-10 md:-top-24 right-0 -z-10' />*/}
      </Section>
      <br />
      <br />
      <Section>
        <Subheading>Project Description</Subheading>
        <Text>
        The proliferation of AI-generated deepfakes and misinformation through high traffic media channels and phishing schemes are a significant threat to civic life across America. Particularly, deceptive content can erode resident-government relations, trust in democratic processes, and the safety of public and private settings across the United States. 
<br/> <br/>For Fort Collins specifically, a misleading video clip that appeared to show a police officer using extreme force to subdue a community member garnered viral outrage online and even lawsuits – raising policymakers’ concerns about the increased threats AI-generated content could pose to individuals’ reputations. Government leaders in Fort Collins would not only like to protect public officials from such harms, but also non-government affiliated community members from reputational damage, while ensuring citizens do not believe falsified information that could disseminate in the new era of AI-generated content. Among these are small, local businesses who lack the technical infrastructure to handle attacks and vulnerable age groups who may be too young or too old to have come across exposure to deepfake-related risks. The city of Fort Collins is aiming for a practical, feasible, and city-ready strategy to (1) better inform citizens about the dangers of AI deepfakes, (2) integrate effective mitigation techniques in the most vulnerable channels, and (3) and create effective policy that aligns with city goals and will remain sustainable as generative AI evolves. 

        </Text>
      </Section>
      <Section>
        <Subheading>Methodology</Subheading>
        <Text>
       The Fort Collins team began this initiative by conducting a holistic research program on the current state of AI Deepfakes, particularly focusing on four main fronts: (1) current regulations and policies surrounding AI technology in public input, (2) AI-driven risks in public input, (3) current technological solutions and detection tools for AI-generated content, and (4) AI literacy and training. After garnering a better understanding of the state of deepfakes across the country, we then narrowed down the specific concerns and threats posed to the City of Fort Collins through highly impactful conversations with the city’s Chief Information Officer, Kevin Wilkins, and the city’s Director of Technology, Jeff Willard. Through their Fort Collins specific insights, the team began developing a robust, 3-pillar strategic advisory covering (1) a public awareness campaign tailored to vulnerable Fort Collins channels, (2) technology solutions to be integrated into existing public and private sector organizations, and (3) policy advice for the legislation surrounding deepfakes. We finally conducted a suite of stakeholder interviews with Fort Collins groups and external experts, including forensic analysts at the Fort Collins Police Department, cybersecurity fellows at Stanford University, and social media researchers at the University of Wisconsin to support our research and outline future concerns and areas of AI deepfakes.

        </Text>
      </Section>
      <Section className='flex justify-between md:flex-row flex-col'>
        <Subheading>Project Deliverables</Subheading>
        <div className='md:w-[80%]'>
          <hr className="border-t border-gray-300 my-4 mb-6 md:block hidden" />
          <div className='ml-5 mr-5 md:mt-0 mt-4'>
            <Text className='mb-2'>Public Awareness Campaign</Text>
            <SmallText>
<br/>• Frames deepfake threats as urgent, personal, and actionable to citizens and organizations.
<br/>• Tailors different messages to different audiences and platforms: leveraging visual and interactive content for youth on social media channels, bilingual print for older or less-connected residents, and authoritative resources on the city website. 
<br/>• Partners with local institutions like schools, libraries, banks, community centers, and police services, tracking quantitative and qualitative effectiveness measures.
            </SmallText>
          </div> 
          <hr className="border-t border-gray-300 my-4 mt-6 mb-6" />
          <div className='ml-5 mr-5'> 
            <Text className='mb-2'>Technology Solutions and Implementation Plan</Text>
            <SmallText>
			<br/>• API detection tools can be integrated within public and private sector organization workflows to analyze anomalies within potential AI-generated content.
			<br/>• Watermarking can act as an verification “stamp” for documents submitted through public channels, with OpenStego being the recommended tool.
			<br/>• Blockchain technologies can be used to verify identity and trace comments, votes, and more using an online ledger.
			<br/>• An implementation framework encompassing a current state analysis, a technological integration plan, a training scheme, and a literacy campaign can be used by Fort Collins to integrate these technologies within channels effectively.
	</SmallText>
          </div> 
          <hr className="border-t border-gray-300 my-4 mt-6" />
			<div className='ml-5 mr-5 md:mt-0 mt-4'>
            <Text className='mb-2'>Policy Measures</Text>
            <SmallText>
			<br/>• The expansion of preexisting legislation to include deepfakes within the definitions of counterfeit image and identity theft, while also expanding property rights to allow every individual a right to their name, voice, and likeness, with penalties applied when these laws are violated.
			<br/>• Use of the collective bargaining power of the GovAI Coalition to update policies relating to the AI fact sheet model and to propose new procurement provisions.
            </SmallText>
          </div>
		<hr className="border-t border-gray-300 my-4 mt-6" />
		</div>
      </Section>

      <Section>
        <Subheading>Project Impact and Future Work</Subheading>
        <Text>
        This three-pillar approach covers an exhaustive framework that offers the City of Fort Collins a practical roadmap for strengthening their resilience toward AI deepfake threats, ultimately protecting citizens, public officials, and organizations from misinformation and scams. And as deepfakes know no barriers, this approach can act as a national model, advancing the resilience against AI-driven misinformation across the country. Specifically, the multi-lateral and multi-layered framework, consisting of policy awareness campaigns, integrated deepfake technology solutions, and proactive policy measures, applies to any mid-sized city that is looking to combine education, technology, and governance to proactively address the dangers that deepfakes present. But more than that, this framework is one that is tailored to the most challenging attribute that deepfakes pose: adaptability. By emphasizing scalability, partnerships, and data-driven iteration on technical and non-technical fronts, this framework creates an infrastructure that can adapt to the evolving nature of deepfake technologies and stand the test of time.

 <br/> <br/>As for next steps, the city of Fort Collins can begin to apply these frameworks for their immediate concerns. The team prioritizes launching public awareness campaigns to enhance AI and deepfake literacy among citizens of Fort Collins, serving as a first-step to prevent individuals from being misguided and enhancing the trust between citizens and public officials (which was of major concern to the city). We also advise enhancing citizen engagement through a community-driven detection approach: specifically, by developing a government-run portal, preferably attached to the city website or integrated within its social media channels, for reporting suspected deepfakes. Additionally, the city could shortlist high risk local businesses for possible pilots of technology integrations. This could include equipping digital channels such as organizational emails and messaging systems, social media sites, and even susceptible brick-and-mortar technologies like video surveillance with the deepfake mitigation tools such as public APIs, watermarking, and blockchain encryptions. More long term actions include the incorporation of standardized, city-wide technology solutions and forming a dedicated deepfake task force to review and adapt policy to meet the needs for deepfake strategy for both public and private sector groups.

</Text>
      </Section>

      <Section>
        <Subheading>Contributors</Subheading>
        <div className='grid md:grid-cols-4 sm:grid-cols-2 gap-4'>
          {[
            { name: 'Umar Patel', role: '(Project Lead)', school: 'Stanford University' },
			{ name: 'Ashlyn Aske', role: '', school: 'University of Washington' },
            { name: 'Catherine Cheng', role: '', school: 'University of Pennsylvania' },
            { name: 'Naya Dukkipati', role: '', school: 'University of Southern California' },
            { name: 'Hasset Mekuria', role: '', school: 'UC Berkeley' },
            { name: 'Simone Faulkner', role: '', school: 'UCLA' },
			{ name: 'Isaiah Sohn', role: '', school: 'Brown University' },
			{ name: 'Izabel De Sousa', role: '', school: 'Arizona State University' },
			{ name: 'Nathan Stephen', role: '', school: 'UC Berkeley' }
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