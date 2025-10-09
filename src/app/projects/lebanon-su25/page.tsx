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
          <Text className='md:text-5xl text-3xl uppercase font-semibold'>Lebanon, NH</Text>
		<Text className='md:text-2xl text-lg md:mt-4 mt-2 uppercase'>Proposed Revisions for ADM-143<br />and AI Usage Guidelines</Text>
        </div>
        {/*<Image src={CAPITOL_LINEART} alt="Capitol Building" className='md:h-[650px] md:w-[650px] h-[280px] w-[280px] object-contain absolute md:-right-10 md:-top-24 right-0 -z-10' />*/}
      </Section>
      <br />
      <br />
      <Section>
        <Subheading>Project Description</Subheading>
        <Text>
        The City of Lebanon, New Hampshire has demonstrated a commitment to using artificial
intelligence (AI) to enhance city services and productivity. In December of 2023, the City
adopted its first AI policy “ADM-143: Use of Artificial Intelligence.” With the aim of
transforming the broad strokes framework to a more comprehensive and actionable policy, the
Paragon Summer 2025 Cohort has drafted proposed policy revisions to ADM-143 and a set of
complementary AI guidelines for policy implementation. Our team sought to create a policy that
ensures safe and ethical use of AI and adapts to the evolving AI landscape. To inform our work,
the team conducted a policy evaluation, literature review, and stakeholder interviews.

        </Text>
      </Section>
   <Section>
        <Subheading>Project Aims</Subheading>
        <Text>
        In order to make Lebanon’s ADM-143 policy more robust and applicable to the various ways
city employees use AI, our project focused on a few main goals:

<br/><br/>1. Providing clear guidance to employees: We aimed to reduce the ambiguities present in
ADM-143 version 1 by clarifying responsibility under the policy, providing clear
instructions and example language for disclosing AI use, and specifying when certain
sections of the policy apply to specific AI uses.

   <br/> 2. Expanding policy coverage: We included new considerations like environmental
sustainability and restrictions on high-risk cases like realistic image generation.

    <br/>3. Adapting to new technological developments: We updated multiple parts of the
framework, such as risk review and human oversight, to consider the challenges posed by
new technologies like AI agents. In some cases, we created distinct requirements for
generative vs decision-making AI to address the unique concerns associated with each.

<br/>4. Distributing expertise citywide: We created a strong governance framework to reduce the
burden on Lebanon’s Chief AI Officer and encourage more employees to actively
promote responsible AI use. We clarified the responsibilities of the Technology Review
Committee and department heads, and created a new “AI Champion” role within
departments to help review technology use and disseminate information across the city.
We also included recommendations on AI training to boost city capacity as a whole.
        </Text>
      </Section>
      <Section>
        <Subheading>Methodology</Subheading>
        <Text>
       In formulating our revisions to ADM-143 and the creation of the supplementary guidelines for
implementation and use cases, we moved through three main stages that informed and influenced
our decisions. Each stage was conducted with the intention of grounding our recommendations in
reputable research while taking into account the specific needs of the City.

<br/><br/>1. Evaluation of ADM-143: We began by reviewing the City’s first version of ADM-143, adopted in 2023, to understand
where the policy was at and what direction we needed to go. We conducted a comparative policy
analysis that examined the AI policies of six other municipalities that were strong,
comprehensive, and relevant to Lebanon. This was crucial to our understanding of where
Lebanon’s policy shined and where it didn’t and helped us identify gaps and areas for refinement
in our policy revisions.

   <br/> 2. Literature Review: To serve as a knowledge base to inform our understanding of the municipal AI policy climate,
we conducted preliminary research on a wide array of sources. Our literature review included
scholarly research and peer-reviewed journal articles, government frameworks and guidelines,
municipal case studies, and reports from non-governmental organizations and advocacy groups.
Key findings from the literature review were used to guide the principles behind our policy and
guidelines, prioritizing community engagement and inclusion, flexibility, and responsible
experimentation.

    <br/>3. Stakeholder Engagement: Given that ADM-143 and its supplementary guidelines directly impact the City of Lebanon and
its staff, it was imperative that we engage with the affected parties. We conducted seven
interviews with people from within and outside the City of Lebanon, including staff, department
heads, the mayor, and City Councilors representing residents. The insider look provided by these
stakeholders gave us invaluable insight to what needed to be included in the revisions and how it
would impact the City and its staff. Understanding how the policy manifests for City staff was
crucial to tailoring the policy to meet their needs, address their concerns, and have the most
positive impact it can.

        </Text>
      </Section>
      <Section className='flex justify-between md:flex-row flex-col'>
        <Subheading>Project Deliverables</Subheading>
        <div className='md:w-[80%]'>
          <hr className="border-t border-gray-300 my-4 mb-6 md:block hidden" />
          <div className='ml-5 mr-5 md:mt-0 mt-4'>
            <Text className='mb-2'>Revised ADM-143</Text>
            <SmallText>
			The project produced a revised version of ADM-143, the City of Lebanon’s policy governing the
use of artificial intelligence. Building on the existing framework, the revision integrates findings
from academic research and feedback from stakeholders to strengthen the policy’s clarity,
relevance, and long-term usability. Updates included refined language, the addition of new
sections to address emerging needs, and provisions to ensure the policy remains adaptable as AI
technologies evolve. The transparency and data privacy sections were significantly expanded to
provide clear guidance for AI disclosure and privacy protection. We also added sections on
overarching principles, risk review methods, sustainability considerations, and a governance
framework to clearly designate responsibility for policy implementation.
            </SmallText>
          </div> 
          <hr className="border-t border-gray-300 my-4 mt-6 mb-6" />
          <div className='ml-5 mr-5'> 
            <Text className='mb-2'>AI Guidelines</Text>
            <SmallText>
			To supplement the revised ADM-143 policy, we created a set of supplementary guidelines
designed to offer more flexible guidance to help employees responsibly implement AI in their
daily workflow. The guidelines include a list of sample use cases for AI, responsibilities for AI
champions, key skills and competencies for employees, and an AI risk assessment questionnaire
for employees to strategically consider the risks and benefits associated with their AI use.
            </SmallText>
          </div>
		<hr className="border-t border-gray-300 my-4 mt-6" />
		</div>
      </Section>

      <Section>
        <Subheading>Project Impact and Future Work</Subheading>
        <Text>
        Following its review by the TRC and formal approval, the revised ADM-143 policy will be
released to all Lebanon city employees. Department AI Champions will be selected by the Chief
Innovation and AI Officer, and employee training initiatives will be expanded. This project is
expected to meaningfully impact the city of Lebanon and its residents by allowing the city to
leverage efficiency gains from AI while preserving fairness, privacy, and human dignity. Because
budget is a major concern for residents, AI offers strong potential for expanding city initiatives
without creating additional cost. Clear guidance on AI will allow employees to feel more
comfortable using this technology and prevent potential errors from arising due to unchecked AI
use.

<br/> <br/>Future work could focus on identifying new ways that AI could benefit the city and developing
pilot projects to test new initiatives. One possibility is to explore how AI could help reduce
Lebanon’s housing shortage, which was mentioned as a key problem in many stakeholder
interviews. AI may be able to streamline permitting and inspector documentation, or identify
new locations for planning housing. AI could also help advance the city’s sustainability goals.
Other municipalities have deployed AI to help reduce energy use and support infrastructure
management, and similar projects might gain strong support from Lebanon’s environmentally
conscious population. Lebanon should also consider expanding public outreach related to AI, and
partnering with new groups such as business coalitions or nearby academic institutions to expand
its resources related to AI and hear more citizen perspectives.

<br/> <br/>NOTE: The policies above are subject to the City&apos;s formal review and approval processes and may be modified before final adoption and publication. 

</Text>
      </Section>

      <Section>
        <Subheading>Contributors</Subheading>
        <div className='grid md:grid-cols-4 sm:grid-cols-2 gap-4'>
          {[
            { name: 'Archer Amon', role: '(Project Lead)', school: 'Georgetown' },
			{ name: 'Annekke van Gelder', role: '', school: 'George Mason University' },
            { name: 'Christine Do', role: '', school: 'UC Davis' },
            { name: 'Kirin Mohile', role: '', school: 'Duke University' },
            { name: 'Maryanne Agyei', role: '', school: 'Washington University in St. Louis' },
            { name: 'Navya Sinha', role: '', school: 'Columbia University' },
			{ name: 'Sana Fathima', role: '', school: 'Rutgers University' },
			{ name: 'Tatia Jahan', role: '', school: 'Lafayette College' }
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