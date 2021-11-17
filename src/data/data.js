const destinationData = {
    Moon: {
        img: 'http://assets.stickpng.com/images/580b585b2edbce24c47b270b.png',
        name: 'MOON',
        description: `See our planet as you’ve never seen it before. A perfect relaxing trip 
        away to help regain perspective and come back refreshed. While you’re there, take in some
         history by visiting the Luna 2 and Apollo 11 landing sites.`,
        distance: {
            avg: '384,400 km',
            travelTime: '3 days'
        }
    },
    Mars: {
        img: 'https://www.freepnglogos.com/uploads/mars-png/mars-transparent-png-stickpng-0.png',
        name: 'MARS',
        description: `  Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, 
          the tallest planetary mountain in our solar system. It’s two and a half times 
          the size of Everest!`,
        distance: {
            avg: '225 mil. km',
            travelTime: '9 months'
        }
    },
    Europa: {
        img: 'https://files.fm/thumb_show.php?i=57dg8nmuy',
        name: 'EUROPA',
        description: ` The smallest of the four Galilean moons orbiting Jupiter, Europa is a 
              winter lover’s dream. With an icy surface, it’s perfect for a bit of 
             ice skating, curling, hockey, or simple relaxation in your snug 
             wintery cabin.`,
        distance: {
            avg: ' 628 mil. km',
            travelTime: ' 3 years'
        }
    },
    Titan: {
        img: '../../assets/destination/Titan_in_true_color-removebg-preview.png',
        name: 'TITAN',
        description: `The only moon known to have a dense atmosphere other than Earth, Titan  
        is a home away from home (just a few hundred degrees colder!). As a  bonus, you get striking 
        views of the Rings of Saturn.`,
        distance: {
            avg: ' 1.6 bil. km',
            travelTime: '7 years'
        }
    },
}


export const crewData = {
    Specialist: {
        name: 'Mark Shuttleworth',
        job: 'Mission Specialist',
        description: 'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind\n' +
            'the Linux-based Ubuntu operating system. Shuttleworth became the first South\n' +
            'African to travel to space as a space tourist.',
    },
    Pilot: {
        name: 'Victor Glover',
        job: 'Pilot',
        description: `Douglas Gerald Hurley is an American engineer, former Marine Corps pilot
            and former NASA astronaut. He launched into space for the third time as
            commander of Crew Dragon Demo-2.`,
    },
    Commander: {
        name: 'Douglas Hurley',
        job: 'Commander',
        description: `Pilot on the first operational flight of the SpaceX Crew Dragon to the
            International Space Station. Glover is a commander in the U.S. Navy where
          he pilots an F/A-18.He was a crew member of Expedition 64, and served as a
           station systems flight engineer.`,
    },
    Engineer: {
        name: 'Anousheh Ansari',
        job: 'Flight Engineer',
        description: `Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems.
         Ansari was the fourth self-funded space tourist, the first self-funded woman to
         fly to the ISS, and the first Iranian in space.`,
    },
}

export const technologyData = {
    Spaceport: {
        name: 'Spaceport',
        description: ` A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, 
             by analogy to the seaport for ships or airport for aircraft. Based in the
              famous Cape Canaveral, our spaceport is ideally situated to take advantage
              of the Earth’s rotation for launch.`,
    },
    Capsule: {
        name: 'Space capsule',
        description: `A space capsule is an often-crewed spacecraft that uses a blunt-body reentry 
              capsule to reenter the Earth's atmosphere without wings. Our capsule is where 
              you'll spend your time during the flight. It includes a space gym, cinema, 
              and plenty of other activities to keep you entertained.`,
    },
    Vehicle: {
        name: ' Launch vehicle',
        description: ` A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a 
             payload from Earth's surface to space, usually to Earth orbit or beyond. Our 
              WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, 
              it's quite an awe-inspiring sight on the launch pad!`,
    },
}


export default destinationData