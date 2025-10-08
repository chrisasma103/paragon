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
          <Text className='md:text-5xl text-3xl uppercase font-semibold'>Tempe, AZ</Text>
		<Text className='md:text-2xl text-lg md:mt-4 mt-2 uppercase'>Framework for Evaluating<br /> City Employee Data Literacy </Text>
        </div>
        {/*<Image src={CAPITOL_LINEART} alt="Capitol Building" className='md:h-[650px] md:w-[650px] h-[280px] w-[280px] object-contain absolute md:-right-10 md:-top-24 right-0 -z-10' />*/}
      </Section>
      <br />
      <br />
      <Section>
        <Subheading>Project Description</Subheading>
        <Text>
        Data-driven decision making from government employees facilitates transparency, efficacy,
efficiency, and citizen satisfaction. In the modern, digital world, the amount of data that can be
collected, stored, and analyzed has exponentially increased. Recognizing this, the city of Tempe,
Arizona has made it a priority to develop data literacy throughout its city workforce.
<br/> <br/>Previously, the Spring 2025 Paragon Policy Fellowship cohort partnered with the city of Tempe
to develop a data literacy and ethics curriculum. Building on this effort, the Summer 2025 cohort
has developed a municipal data landscape analysis, allowing the city of Tempe to gain insight
into how its employees interact with and understand data.

        </Text>
      </Section>
   <Section>
        <Subheading>Project Aims</Subheading>
        <Text>
        The work conducted this summer aims to determine a framework, along with its tools and
implementation strategy, necessary to classify employees’ data proficiency. By harnessing the
developed framework, the city of Tempe can then collect the necessary information to effectively
implement a comprehensive data governance strategy.
        </Text>
      </Section>
      <Section>
        <Subheading>Methodology</Subheading>
        <Text>
       <br/>1. Literature Review: The methodology employed within this work began with a comprehensive literature review to
identify existing data competencies employed throughout academia and industry, study case
studies of other cities employing data governance strategies, and analyze existing literature
competency assessments released online.

   <br/> 2. Stakeholder Engagement: A key part of the methodology used was actively engaging with key stakeholders throughout the
project to ensure that the perspectives of those affected by the project or knowledgeable about
the topic were heard. City of Tempe employees were interviewed to gain an understanding of
how employees use data, think of data skills, and prioritize elements of data literacy. Academics
familiar with data literacy were interviewed to understand how assessments or surveys could be
best developed to assess competency.

    <br/>3. Survey Development: The core of the developed framework consisted of a data literacy competency survey. The survey
development process was completed by reading literature surrounding survey question
development, analyzing the previously developed data curriculum’s content, referencing existing
online assessments, and harnessing code to develop data visualizations and data sets.

        </Text>
      </Section>
      <Section className='flex justify-between md:flex-row flex-col'>
        <Subheading>Data Proficiency Classification</Subheading>
        <div className='md:w-[80%]'>
          <hr className="border-t border-gray-300 my-4 mb-6 md:block hidden" />
          <div className='ml-5 mr-5 md:mt-0 mt-4'>
            <Text className='mb-2'>Data Literacy Curriculum</Text>
            <SmallText>
			While there is no established standard for data literacy
competencies, a host of existing models were identified and analyzed through the
literature review. In total, six data literacy competencies were identified in this work
based on the synthesis of many of these models and competencies found throughout
academia and industry:
<br/>a) Understanding Data
<br/>b) Collecting and Managing Data
<br/>c) Interpreting and Analyzing Data
<br/>d) Data Visualization
<br/>e) Data Ethics
<br/>f) Applying Data
            </SmallText>
          </div> 
          <hr className="border-t border-gray-300 my-4 mt-6 mb-6" />
          <div className='ml-5 mr-5'> 
            <Text className='mb-2'>Data Literacy Competency Means of Assessment</Text>
            <SmallText>
			In order to assess the identified data
literacy competencies, a survey was developed. This survey consisted of both a
self-evaluation questionnaire, where respondents would rate their proficiency in various
data skills, and an assessment where scenario-based questions were used to assess
practical ability. By harnessing both internal and external methods of assessment, a more
accurate snapshot of data literacy competency can be obtained.
	</SmallText>
          </div> 
          <hr className="border-t border-gray-300 my-4 mt-6" />
			<div className='ml-5 mr-5 md:mt-0 mt-4'>
            <Text className='mb-2'>Implementation Strategy</Text>
            <SmallText>
			A vital step for the success of the municipal data landscape
report survey is a carefully executed implementation strategy. This work provided clear
steps for confirming the validity and reliability of the survey, moving forward with pilot
programs, and distributing the survey to employees in an effective manner.
            </SmallText>
          </div>
		<hr className="border-t border-gray-300 my-4 mt-6" />
		</div>
      </Section>

      <Section>
        <Subheading>Project Impact and Future Work</Subheading>
        <Text>
        This project provides the tools necessary to gather critical insights into the data literacy
proficiency of the Tempe, AZ workforce. The implementation of this work can provide the city
with a descriptive overview of its employees’ ability to understand, collect, analyze, and interpret
data while employing ethical, data-driven decision making. By harnessing this municipal data
landscape analysis in addition to the previously developed data curriculum, Tempe will be
primed to further implement data governance policy relevant to the needs of City employees and
Tempe’s inhabitants.

 <br/> <br/>The analysis provided gives key short-term, mid-term, and long-term steps for future work.
These steps include guidance for the implementation of large-language models for assessment
grading and suggestions for harmonization between the recently developed municipal data
landscape analysis and the previously developed data literacy curriculum.

</Text>
      </Section>

      <Section>
        <Subheading>Contributors</Subheading>
        <div className='grid md:grid-cols-4 sm:grid-cols-2 gap-4'>
          {[
            { name: 'James Shin', role: '(Project Lead)', school: 'Georgia Tech' },
			{ name: 'Angelly Cabrera', role: '', school: 'University of Southern California' },
            { name: 'Bhoomika Gupta', role: '', school: 'San Jose State University' },
            { name: 'Farhana Urni', role: '', school: 'Arizona State University' },
            { name: 'Nimra Arfi', role: '', school: 'Arizona State University' },
            { name: 'Sahasra Pechetty', role: '', school: 'Arizona State University' }
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