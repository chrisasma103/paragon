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
          <Text className='md:text-5xl text-3xl uppercase font-semibold'>U.S. Virgin Islands</Text>
		<Text className='md:text-2xl text-lg md:mt-4 mt-2 uppercase'>Plan to improve<br />STEM education on the Islands</Text>
        </div>
        {/*<Image src={CAPITOL_LINEART} alt="Capitol Building" className='md:h-[650px] md:w-[650px] h-[280px] w-[280px] object-contain absolute md:-right-10 md:-top-24 right-0 -z-10' />*/}
      </Section>
      <br />
      <br />
      <Section>
        <Subheading>Project Description</Subheading>
        <Text>
        The USVI Team collaborated with the Virgin Islands Next Generation Network (viNGN)
to develop a culturally responsive, evidence-based policy framework to improve STEM
learning outcomes in USVI high schools. In 2022, only 6.1 percent of students met math
proficiency standards, and persistent digital equity gaps have deepened post-pandemic
learning loss. Moreover, frequent natural disasters have left many schools with poor
infrastructure that does not support an optimal learning environment. To address these
challenges, a framework for STEM education must build students’ identity and capability
and provide an education infrastructure that supports the unique identity and cultural
contexts of local communities.

        </Text>
      </Section>
      <Section>
        <Subheading>Methodology</Subheading>
        <Text>
       To address these challenges, the team conducted targeted research and stakeholder
engagement to identify best practices in STEM curriculum design, teacher capacity-building, and digital opportunity integration. Specifically, the team conducted an
extensive literature review of academic papers, local news reports, and regional case
studies. Stakeholder interviews with students, teachers, and community partners were
essential in providing targeted advice for the U.S. Virgin Islands.
        </Text>
      </Section>
      <Section>
        <Subheading>Project Deliverables</Subheading>
        <Text>
       Project deliverables included a comprehensive final report outlining the findings from the
literature review, comparative case studies, and stakeholder interviews. The team also
developed a cultural-federal synthesis framework for understanding the challenges and
opportunities USVI faces. Finally, the team provided insights into benchmarking,
evaluation, and alternative funding sources. This deliverable was coupled with graphics
and presentation slides which viNGN can use in targeted advocacy efforts at
the local and federal level.
        </Text>
      </Section>

      <Section>
        <Subheading>Project Impact and Future Work</Subheading>
        <Text>
        Enhancing STEM education will play a critical role in shaping the future of the U.S.
Virgin Islands workforce. Moreover, providing culturally responsive STEM education can
help USVI students tackle important science, technology, and engineering challenges
unique to USVI such as climate adoption. The Paragon framework will form the basis for
pursuing further initiatives that seek to improve the quality of STEM education
throughout the territory.
</Text>
      </Section>

      <Section>
        <Subheading>Contributors</Subheading>
        <div className='grid md:grid-cols-4 sm:grid-cols-2 gap-4'>
          {[
            { name: 'Abraham Sadat', role: '(Project Lead)', school: 'University of Chicago' },
			{ name: 'Akithma Moraes', role: '', school: 'Pace University' },
            { name: 'Amy Wong', role: '', school: 'UCLA' },
            { name: 'Elliot Smith', role: '', school: 'Brown University' },
            { name: 'Gina Niekus', role: '', school: 'Occidental College' },
            { name: 'Jared Salcedo', role: '', school: 'Georgetown University' },
			{ name: 'Naya Patel', role: '', school: 'Georgia Institute of Technology' },
			{ name: 'Tanya Vijay', role: '', school: 'Tanya Vijay' }
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