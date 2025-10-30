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
          <Text className='md:text-5xl text-3xl uppercase font-semibold'>Alexandria, VA</Text>
		<Text className='md:text-2xl text-lg md:mt-4 mt-2 uppercase'>Recommendations for<br /> meeting ADA compliance rules </Text>
        </div>
        {/*<Image src={CAPITOL_LINEART} alt="Capitol Building" className='md:h-[650px] md:w-[650px] h-[280px] w-[280px] object-contain absolute md:-right-10 md:-top-24 right-0 -z-10' />*/}
      </Section>
      <br />
      <br />
      <Section>
        <Subheading>Project Description</Subheading>
        <Text>
In April 2024, the Department of Justice (or “Department”) published a rule that sets technical requirements for state and local governments to follow to make sure that their websites and mobile apps are accessible to people with disabilities. 
<br/><br/>
In response to updated Americans with Disabilities Act Title II Regulations (ADA), the Paragon Alexandria Team partnered with the City of Alexandria to advance its digital accessibility strategy. This initiative focuses on aligning Alexandria’s digital infrastructure with Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards, which emphasize digital content that is perceivable, operable, understandable, and robust for all users, including individuals with disabilities. Through a comprehensive audit of Alexandria’s current digital services, the team identified instances of key accessibility barriers, including poor color contrast, missing alt-text and ARIA labels, and improper HTML structure, all of which disproportionately impact users with visual impairments and those relying on screen readers. 
<br/><br/>
To help Alexandria meet compliance and improve user experience across municipal platforms, the team developed a practical framework that includes a detailed ADA Compliance Analysis, policy recommendations, and a robust educational package tailored for department heads. This package offers guidance on accessible design practices, procurement policies, and stakeholder engagement strategies. The project not only supports Alexandria in meeting federal requirements but also promotes long-term equity and digital inclusion. By investing in accessibility now, the city positions itself as a national leader in inclusive public service delivery and ensures all residents, regardless of ability, can navigate and benefit from its digital resources.
        </Text>
      </Section>
   <Section>
        <Subheading>Project Aims</Subheading>
        <Text>
The Paragon Alexandria Team has successfully supported the City of Alexandria in becoming fully compliant with updated Title II regulations of the Americans with Disabilities Act (ADA). The core objectives of the project have been accomplished as follows: <br/><br/>
• Assessed Alexandria’s Current Digital Infrastructure to Identify Gaps in ADA Compliance and Accessibility: The team conducted a comprehensive audit of Alexandria’s  primary government website, This evaluation focused on key accessibility criteria such as navigation, text alternatives, multimedia content compatibility, and screen reader functionality. The assessment identified gaps in compliance and provided a clear understanding of areas requiring improvement to meet the needs of all Alexandrians.
<br/>
• Conducted Comparative Benchmarking Using WCAG 2.1 Standards and Best Practices from Similar Municipalities: The team compared Alexandria’s digital infrastructure with leading practices in ADA compliance, leveraging the Web Content Accessibility Guidelines (WCAG) 2.1 standards. Additionally, the team benchmarked Alexandria’s efforts against successful digital accessibility strategies implemented by similar municipalities in the Mid-Atlantic region. This benchmarking process provided valuable insights into how other cities approached compliance and identified scalable solutions for Alexandria.
<br/>
•  Delivered a Comprehensive Policy Framework to Guide Digital Accessibility Efforts Citywide: The team developed a robust policy framework outlining clear guidelines for ensuring ongoing compliance with ADA regulations. This framework included strategic recommendations for integrating digital accessibility principles into the City’s operations, communications, and technology development. It also addressed future challenges by incorporating flexibility to adapt to evolving regulations and emerging technologies.
<br/>
•  Equipped Department Heads with the Knowledge and Tools Needed to Sustain Compliance through Tailored Educational Resources: The team provided a customized educational package for department heads and city staff, enabling them to implement and maintain ADA-compliant digital services. This training covered key accessibility standards, methods for assessing accessibility in digital assets, and best practices for ongoing compliance. By building internal capacity, the team helped the city ensure that accessibility became embedded into everyday operations, reducing reliance on external contractors. 
<br/>
•  Provided a Practical Auditing Framework and Procurement Recommendations to Ensure Accessibility is Integrated into Future Digital Service Decisions: The team created an actionable framework for auditing digital assets for ADA compliance. This included checklists, protocols for regular reviews, and guidelines for ensuring compliance during vendor selection and procurement processes. The team ensured that accessibility requirements were incorporated at every stage of procurement, preventing future accessibility gaps in new technologies or digital services and helping to create an inclusive environment for all. 
<br/>
•  Shortcomings and Embedding Compliance into City Operations: The team addressed potential legal and reputational risks by proactively identifying and resolving accessibility shortcomings before they could lead to legal action or public scrutiny. By embedding ADA compliance into the City’s operational culture, the team helped Alexandria fulfill its legal obligations while also demonstrating a strong commitment to inclusivity and equal access. This proactive approach fostered trust and goodwill within the community. 
<br/><br/>
This initiative seeks to empower the City of Alexandria to enhance digital equity, promote inclusive service delivery, and set a precedent for proactive, sustainable accessibility
governance. By addressing ADA compliance comprehensively across the City’s digital infrastructure, Alexandria will lead the way in ensuring equal access for all citizens, regardless of ability. 

        </Text>
      </Section>
      <Section>
        <Subheading>Methodology</Subheading>
        <Text>
		The project utilized a comprehensive mixed-methods approach to assess the City of Alexandria’s digital ADA compliance and generate informed, actionable recommendations. The process unfolded in three key phases:
       <br/><br/>1) Digital Infrastructure Audit: We conducted a thorough review of Alexandria’s online government assets using both automated ADA compliance tools (e.g., WAVE, axe) and manual accessibility checks. This included assessments of website structure, multimedia elements, navigation systems, screen reader compatibility, and adherence to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards. 

   <br/> 2) Benchmarking and Comparative Analysis: To contextualize Alexandria’s performance, we analyzed the digital ADA compliance strategies of comparable Mid-Atlantic cities. This involved reviewing municipal accessibility policies, implementation plans, and compliance statements. National stakeholder resources, such as those from the American Association of People with Disabilities and the American Foundation for the Blind, were also incorporated to align recommendations with leading practices. 

    <br/> 3) Stakeholder and Legal Review: Input was integrated from individuals with disabilities, digital accessibility experts, and legal advisors familiar with ADA enforcement. This included synthesizing feedback from user-centered design resources and legal precedent on non-compliance. We assessed the City’s legal exposure and liability under ADA Title II and incorporated preventative policy measures into our proposals. 
<br/><br/>
This methodology ensured our findings were robust, feasible, and aligned with the City’s operational realities. It also ensured that future digital growth in Alexandria is anchored in equitable, inclusive design. 

        </Text>
      </Section>
      <Section className='flex justify-between md:flex-row flex-col'>
        <Subheading>Project Deliverables</Subheading>
        <div className='md:w-[80%]'>
          <hr className="border-t border-gray-300 my-4 mb-6 md:block hidden" />
          <div className='ml-5 mr-5 md:mt-0 mt-4'>
            <Text className='mb-2'>Policy Recommendations </Text>
            <SmallText>
			To improve Alexandria’s digital accessibility and ADA compliance, a comprehensive set of policy alternatives has been proposed. One approach focuses on expanding public
engagement through recurring town halls, feedback loops, and targeted audits in underserved spaces like schools and libraries. This strategy enhances community participation in shaping solutions while addressing key barriers to access. A second alternative integrates technical solutions and training, specifically targeting color contrast, alternative text, and website structure issues. It combines automated tools with staff development programs, creating sustainable processes for compliance and accountability. Additionally, an incentive-based system is suggested to motivate staff and departments by integrating accessibility goals into performance reviews and offering professional development opportunities tied to accessibility achievements. By funding certifications, establishing accessibility key performance indicators (KPIs), and recognizing departments’ progress, this program aims to foster a culture of continuous improvement. Each of these alternatives emphasizes proactive, transparent, and community-centered approaches to address Alexandria’s digital accessibility challenges, ensuring a more equitable and inclusive environment for all residents, especially those with disabilities. 

            </SmallText>
          </div> 
          <hr className="border-t border-gray-300 my-4 mt-6 mb-6" />
          <div className='ml-5 mr-5'> 
            <Text className='mb-2'>Educational Materials </Text>
            <SmallText>
			This digital accessibility education package is designed to support the City of Alexandria in achieving ADA Title II compliance by 2026. It provides department heads with a comprehensive training program focused on three essential areas: the role of Public-Private Partnerships, ensuring accessibility through WCAG 2.1 Level AA standards, and the development of sustainable digital services. The first section emphasizes the importance of collaboration between public agencies and private vendors, encouraging shared resources and expertise to accelerate compliance. The second section introduces the foundational principles of digital accessibility, including the legal obligations under Title II of the ADA, and guides departments in adopting the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA. It further covers navigation, usability tools, visual accessibility, multimedia, and form accessibility to ensure that all users, including those with disabilities, can access city digital services effectively. Lastly, the education package highlights strategies for sustaining accessibility improvements, emphasizing the need for dedicated roles, ongoing training, and consistent monitoring. This package equips Alexandria&apos;s leadership with the tools necessary to foster an inclusive, accessible digital environment, ensuring that all residents can fully engage with city services online by 2026. 
	</SmallText>
          </div> 
          <hr className="border-t border-gray-300 my-4 mt-6" />
			<div className='ml-5 mr-5 md:mt-0 mt-4'>
            <Text className='mb-2'>Auditing Framework</Text>
            <SmallText>
			The auditing framework for digital accessibility ensures that the City of Alexandria meets ADA Title II compliance by 2026, focusing on WCAG 2.1 Level AA standards. This framework involves regular evaluations of digital assets, using both automated tools and manual assessments to identify and address accessibility issues. Audits assess visual
elements like color contrast, navigation ease, and text legibility, as well as interactive components such as forms, multimedia, and assistive technology compatibility. A combination of third-party audit services and in-house teams will allow for comprehensive reviews and ongoing improvements. The framework also integrates feedback loops from users with disabilities to continually refine digital platforms. To maintain long-term compliance, audits should be embedded in routine content updates and new project developments. By adopting a structured auditing process, the City can ensure that digital services are accessible to all residents, fulfilling both legal obligations and the broader goal of inclusivity. 
            </SmallText>
          </div>
		<hr className="border-t border-gray-300 my-4 mt-6 mb-6" />
          <div className='ml-5 mr-5'> 
            <Text className='mb-2'>Procurement Policy </Text>
            <SmallText>
			The updated recommendations for the City of Alexandria&apos;s procurement policy ensures that all products and services, both physical and digital, comply with ADA standards to foster an inclusive environment. Specifications for products, particularly digital services like software, websites, and mobile apps, must include clear accessibility requirements aligned with Title II of the ADA and Section 508 of the Rehabilitation Act. These standards ensure that electronic information is accessible to people with disabilities. Additionally, design specifications should include detailed annotations on product features and dimensions that ensure usability for individuals with visual, physical, or auditory impairments. Procurement specifications must address whether any product features might be inaccessible to people with disabilities, the types of disabilities that may impair product use, and the strategies designers will implement to resolve accessibility concerns. The policy also mandates that all purchases comply with the WCAG 2.1 Level AA standards to ensure long-term accessibility in all city services. 

	</SmallText>
          </div> 
		</div>
		<hr className="border-t border-gray-300 my-4 mt-6" />
      </Section>

      <Section>
        <Subheading>Project Impact and Future Work</Subheading>
        <Text>
        This project lays the foundation for a more inclusive, accessible digital government in the City of Alexandria. By addressing ADA compliance from multiple dimensions, policy, infrastructure, education, and procurement, the city is well-positioned to meet federal requirements while significantly enhancing digital equity for its residents. 

 <br/> <br/>Immediate impacts include increased awareness among city leaders, standardized compliance tools, and strengthened legal preparedness. Long-term, the project’s tools and recommendations will guide Alexandria’s future digital services toward more universal design.
 <br/> <br/>Future work could expand on this effort by:
 <br/>•  Conducting usability testing with people with disabilities to further refine the city&apos;s digital experience. 
 <br/>•  Piloting a digital accessibility task force within city government.
 <br/>•  Establishing a citywide accessibility scorecard or dashboard for transparency.
 <br/>•  Creating pathways for community feedback and co-creation in future digital initiatives.

 <br/> <br/>Ultimately, the Paragon Alexandria Team’s work creates a replicable model for other municipalities seeking to align with ADA standards while cultivating accessible, human-centered digital infrastructure. 

</Text>
      </Section>

      <Section>
        <Subheading>Contributors</Subheading>
        <div className='grid md:grid-cols-4 sm:grid-cols-2 gap-4'>
          {[
            { name: 'Lex Frischemeier', role: '(Project Lead)', school: 'George Washington University' },
			{ name: 'Cameron Pien', role: '', school: 'Cornell University' },
            { name: 'Edric Bussie', role: '', school: 'Howard University' },
            { name: 'John Cheek', role: '', school: 'University of Tennessee' },
            { name: 'Ashwini Athreya', role: '', school: 'Cornell University' },
            { name: 'Ashley Wilkerson', role: '', school: 'Arizona State University' }
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