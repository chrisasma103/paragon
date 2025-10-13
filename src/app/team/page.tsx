// NO "use client" here - this is a Server Component for data fetching

import Footer from '@/components/Footer';
import TopBar from '@/components/TopBar';
import BgGrid from "@/components/BgGrid";
import { Heading } from "@/components/Typography";
import { RiArrowDownLine } from "react-icons/ri";
import { AIRTABLE_API_KEY, AIRTABLE_BASE_ID, REVALIDATE_NUM } from '@/app/constants';
import TeamDisplay from '@/components/TeamDisplay'; // <-- Import your new client component

// You can keep the interfaces and data fetching functions here
interface Image { id: string; width: number; height: number; url: string; filename: string; size: number; type: string; thumbnails: { small: { url: string; width: number; height: number; }; large: { url: string; width: number; height: number; }; full: { url: string; width: number; height: number; }; }; }
enum SchoolEnum { Harvard = 'harvard', Brown = 'brown', Stanford = 'stanford', Yale = 'yale', Penn = 'penn', GT = 'gt', UGA = 'uga', RISD = 'risd', IIT = 'iit', Georgetown = 'georgetown', UCSD = 'ucsd', UCB = 'ucb', UCI = 'uci', }
interface PersonRecord { id: string; createdTime: string; fields: { name: string; title: string; school: SchoolEnum; region: string; email: string; linkedin: string; website: string; image: Image[]; team: string; school_logo: Image[]; headshot_blob: string; logo_blob: string; Bio?: string; }; }
const NO_REGION = "";

async function retrievePeople(tableName: string): Promise<PersonRecord[]> {
    const encodedTableName = encodeURIComponent(tableName);
    const encodedViewName = encodeURIComponent("all_ordered");
    const records = await fetch(`https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${encodedTableName}?view=${encodedViewName}&maxRecords=100`, {
        headers: { 'Authorization': `Bearer ${AIRTABLE_API_KEY}` },
        next: { revalidate: REVALIDATE_NUM }
    });
    const reco = await records.json();

    if (!Array.isArray(reco.records)) {
        console.error("reco.records is not an array! Cannot filter.");
        return [];
    }
    const rec = reco.records;
    
    for (let i = rec.length - 1; i >= 0; i--) {
        if (!rec[i].fields.headshot_blob) {
            rec.splice(i, 1);
        }
    }
    return rec;
}

function groupPeopleByRegion(people: PersonRecord[]) {
    return people.reduce((acc: { [key: string]: PersonRecord[] }, person) => {
        const region = person.fields.region || NO_REGION;
        if (!acc[region]) acc[region] = [];
        acc[region].push(person);
        return acc;
    }, {});
}

// SERVER COMPONENT: Fetches data and passes it to the client component
export default async function Team() {
    const organizingTeam = await retrievePeople("Team Members");
    const formerOrganizingTeam = await retrievePeople("Former Team Members");
    const strategicAdvisors = await retrievePeople("Strategic Advisors");

    const organizingByRegion = groupPeopleByRegion(organizingTeam);
    const advisorsByRegion = groupPeopleByRegion(strategicAdvisors);
    const formerByRegion = groupPeopleByRegion(formerOrganizingTeam);

    return (
        <>
            <TopBar />
            <div className="background-container relative flex flex-col md:block">
                <BgGrid lineCount={7} />
                <Heading className='fade-in text-white text-6xl text-center mt-60'>Meet the Team</Heading>
                <div className="animate-bounce absolute md:bottom-[8vh] bottom-[7svh] left-0 z-10 w-full flex justify-center text-4xl"><RiArrowDownLine /></div>
                <div className='absolute -bottom-1 left-0 w-full h-[20%] bg-gradient-to-b from-transparent to-dark' />
                <div className='absolute top-0 left-0 w-full h-full bg-[#050022] bg-opacity-65 -z-10' />
            </div>
            
            {/* Pass the server-fetched data as props to the client component */}
            <TeamDisplay
                advisorsByRegion={advisorsByRegion}
                organizingByRegion={organizingByRegion}
                formerByRegion={formerByRegion}
            />
            
            <Footer />
        </>
    );
}