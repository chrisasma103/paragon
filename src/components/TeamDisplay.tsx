"use client";

import { useState, useEffect, useRef } from 'react';
import Card from "@/components/Card_Static";
import Image from "next/image";
import { RiCloseLine, RiBookOpenLine } from "react-icons/ri";
import GrayDivider from "@/components/GrayDivider";
import { SocialIcon } from 'react-social-icons';

// Type definitions (no changes here)
interface Image { id: string; width: number; height: number; url: string; filename: string; size: number; type: string; thumbnails: { small: { url: string; width: number; height: number; }; large: { url: string; width: number; height: number; }; full: { url; width; height; }; }; }
enum SchoolEnum { Harvard = 'harvard', Brown = 'brown', Stanford = 'stanford', Yale = 'yale', Penn = 'penn', GT = 'gt', UGA = 'uga', RISD = 'risd', IIT = 'iit', Georgetown = 'georgetown', UCSD = 'ucsd', UCB = 'ucb', UCI = 'uci', }
interface PersonRecord { id: string; createdTime: string; fields: { name: string; title: string; school: SchoolEnum; region: string; email: string; linkedin: string; website: string; image: Image[]; team: string; school_logo: Image[]; headshot_blob: string; logo_blob: string; Bio?: string; }; }
const NO_REGION = "";

export default function TeamDisplay({ advisorsByRegion, organizingByRegion, formerByRegion }: { 
    advisorsByRegion: { [key: string]: PersonRecord[] },
    organizingByRegion: { [key: string]: PersonRecord[] },
    formerByRegion: { [key: string]: PersonRecord[] }
}) {
    const [selectedPerson, setSelectedPerson] = useState<PersonRecord | null>(null);

    useEffect(() => {
        if (selectedPerson) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [selectedPerson]);

    return (
        <>
            <main className="m-8">
                <TeamSection title="Strategic Advisors" peopleByRegion={advisorsByRegion} onPersonSelect={setSelectedPerson} />
                <TeamSection title="Organizing Team" peopleByRegion={organizingByRegion} onPersonSelect={setSelectedPerson} />
                <TeamSection title="Organizing Team Alumni" peopleByRegion={formerByRegion} onPersonSelect={setSelectedPerson} />
            </main>
            
            {selectedPerson && (
                <ExpandedCard person={selectedPerson} onClose={() => setSelectedPerson(null)} />
            )}
        </>
    );
}

function ExpandedCard({ person, onClose }: { person: PersonRecord, onClose: () => void }) {
    const ref = useRef(null);
    const animate = (event) => { if (window.innerWidth < 768) return; const el = ref.current; const rect = el.getBoundingClientRect(); const gradientLayer = el.querySelector(".gradient-layer"); const width = el.offsetWidth; const height = el.offsetHeight; const sizeScaler = 500 / Math.max(width, height); const mouseX = event.clientX - rect.left; const mouseY = event.clientY - rect.top; const rotateY = (((width / 2) - mouseX) / (width / 2)) * sizeScaler; const rotateX = (((height / 2) - mouseY) / (height / 2)) * sizeScaler; el.style.transition = ""; el.style.transform = `perspective(1000px) rotate3d(0, 1, 0, ${rotateY}deg) rotate3d(1, 0, 0, ${rotateX}deg)`; gradientLayer.style.opacity = 1; gradientLayer.style.background = `radial-gradient(circle at ${mouseX}px ${mouseY}px, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0) 50%)`};
    const reset = () => { const el = ref.current; const gradientLayer = el.querySelector(".gradient-layer"); el.style.transition = "transform 0.5s"; el.style.transform = ""; gradientLayer.style.opacity = 0; };

    return (
        <div 
            className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-start justify-center p-4 overflow-y-auto pt-16"
            onClick={onClose}
        >
            <div 
                ref={ref} onMouseMove={animate} onMouseLeave={reset}
                className="rounded-lg shadow-xl p-8 max-w-4xl w-full flex flex-col md:flex-row gap-8 relative text-gray-800"
                style={{ backgroundColor: '#F9FAFB' }} 
                onClick={(e) => e.stopPropagation()}
            >
                <div className="gradient-layer h-full w-full absolute top-0 left-0 -z-10" style={{ transition: "opacity 1s" }}></div>
                <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-3xl z-10">
                    <RiCloseLine />
                </button>
                <div className="flex-shrink-0 flex flex-col items-center text-center md:w-1/3">
                    <Image src={person.fields.headshot_blob} alt={person.fields.name} width={192} height={192} className="aspect-square object-cover rounded-full shadow-lg" />
                    <p className="text-3xl font-semibold mt-4">{person.fields.name}</p>
                    <p className="text-xl text-gray-500">{person.fields.team}</p>
                    
                    {/* CHANGE #1: Removed the white box styling classes */}
                    <div className="w-24 h-20 mt-3 flex items-center justify-center"> {/* Removed p-1 bg-white/90 rounded-lg border */}
                        {(person.fields.logo_blob) && (
                            <Image 
                                src={person.fields.logo_blob} 
                                alt={person.fields.school.toString()} 
                                width={128} 
                                height={128} 
                                className="max-w-full max-h-full object-contain"
                            />
                        )}
                    </div>
                    <div className="flex flex-row mt-4 gap-2">
                        {/* CHANGE #2: Explicitly set fgColor and bgColor for social icons */}
                        {person.fields.email && person.fields.email.trim() !== "" && (
                            <SocialIcon url={`mailto:${person.fields.email}`} target='_blank' 
                                fgColor="#FFFFFF" bgColor="#1e2d5a" // Dark blue background, white foreground
                                style={{ height: 40, width: 40 }} className="transition transform hover:scale-110"/>
                        )}
                        {person.fields.linkedin && 
                            <SocialIcon network="linkedin" url={person.fields.linkedin} target='_blank' 
                                fgColor="#FFFFFF" bgColor="#1e2d5a" // Dark blue background, white foreground
                                style={{ height: 40, width: 40 }} className="transition transform hover:scale-110"/>
                        }
                        {person.fields.website && 
                            <SocialIcon url={person.fields.website} target='_blank' 
                                fgColor="#FFFFFF" bgColor="#1e2d5a" // Dark blue background, white foreground
                                style={{ height: 40, width: 40 }} className="transition transform hover:scale-110"/>
                        }
                    </div>
                </div>
                <div className="md:w-2/3 md:max-h-[65vh] md:overflow-y-auto border-t-2 md:border-t-0 md:border-l-2 border-gray-200 pt-4 md:pt-0 md:pl-8">
                    <h3 className="text-2xl font-bold mb-3">Bio</h3>
                    <p className="text-base text-gray-600 whitespace-pre-wrap">{person.fields.Bio || 'No bio available.'}</p>
                </div>
            </div>
        </div>
    );
}

// TeamSection component (no changes from last version, as requested)
function TeamSection({ title, peopleByRegion, onPersonSelect }: { 
    title: string, 
    peopleByRegion: { [key: string]: PersonRecord[] },
    onPersonSelect: (person: PersonRecord) => void 
}) {
     return (
        <section className="mb-10">
            <p className="text-3xl font-bold uppercase mb-5">{title}</p>
            <GrayDivider />
            {Object.entries(peopleByRegion).map(([region, people], i) => (
                <div key={i}>
                    {region !== NO_REGION && <p className="text-2xl font-bold">{region}</p>}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 my-5">
                        {people.map((person, i) => (
                            <Card 
                                key={i} 
                                className="flex flex-row w-full items-start"
                            >
                                <div className='relative h-min'>
                                    {person.fields.image && (<Image src={person.fields.headshot_blob} alt={person.fields.name} width={128} height={128} className="aspect-square h-32 w-32 object-cover rounded-full shadow-lg"/>)}
                                    <div className="block w-24 h-20 box-border mt-3 mx-auto flex items-center justify-center overflow-hidden">
                                        {(person.fields.school_logo?.[0]?.thumbnails?.large?.url) && (<Image src={person.fields.logo_blob} alt={person.fields.school.toString()} width={128} height={128} className="max-w-full max-h-full object-contain"/>)}
                                    </div>
                                </div>
                                <div className="flex flex-col h-full ml-5 w-4/6">
                                    <p className="text-3xl font-semibold">{person.fields.name}</p>
                                    <p className="text-xl">{person.fields.team}</p>
                                    <div className="flex flex-row mt-2 gap-2">
                                        {person.fields.email && person.fields.email.trim() !== "" && (<SocialIcon url={`mailto:${person.fields.email}`} target='_blank' bgColor="#1e2d5a" className="transition transform hover:scale-110"/>)}
                                        {person.fields.linkedin && <SocialIcon network="linkedin" url={person.fields.linkedin} target='_blank' bgColor="#1e2d5a" className="transition transform hover:scale-110"/>}
                                        {person.fields.website && <SocialIcon url={person.fields.website} target='_blank' bgColor="#1e2d5a" className="transition transform hover:scale-110"/>}
                                    </div>
                                </div>
                                {person.fields.Bio && person.fields.Bio.trim() !== '' && (
                                    <button 
                                        className="absolute bottom-4 right-4 bg-primary text-white text-sm px-3 py-1 rounded-full flex items-center gap-1 opacity-90 
                                                   transition-opacity duration-200 hover:opacity-100 hover:scale-105 active:scale-95 z-10 cursor-pointer"
                                        onClick={() => onPersonSelect(person)}
                                    >
                                        <RiBookOpenLine className="text-base"/> Bio
                                    </button>
                                )}
                            </Card>
                        ))}
                    </div>
                </div>
            ))}
        </section>
    );
}