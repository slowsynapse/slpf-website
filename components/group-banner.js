import Link from 'next/link';
import Image from 'next/image';
import Hero from './hero';
import ProjectsAndPartners from './projects-and-partners';

export default function GroupBanner()
{
	return (
    <>
    <div class="bg-gradient-to-b from-groupBanner-primary to-groupBanner-secondary">
      <div class="bg-gradient-to-l from-hero-primary via-hero-primary to-transparent ">
        <div class="w-full h-1 bg-gradient-to-r from-green-400"></div>
        <Hero/>
        <ProjectsAndPartners/>
      </div>
    </div>
    </>
	);
}