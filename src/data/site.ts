export const site = {
  name: "Kang Constructions Inc",
  phone: "+1 705-288-6830",
  phoneHref: "tel:+17052886830",
  email: "kangconstructionsinc@gmail.com",
  emailHref: "mailto:kangconstructionsinc@gmail.com",
  facebook: "https://www.facebook.com/share/1Dw69YU4cF/?mibextid=wwXIfr",
  areas: ["Ottawa", "Timmins", "Sudbury", "Toronto", "Nearby Areas"],
};

export type Service = {
  slug: string;
  title: string;
  icon: string;
  short: string;
  intro: string;
  benefits: string[];
  residential: string[];
  commercial: string[];
  process: { step: string; detail: string }[];
};

export const services: Service[] = [
  {
    slug: "drywall",
    title: "Drywall",
    icon: "Layers",
    short: "Precise drywall installation, boarding, taping and repair for clean, level walls.",
    intro:
      "Our drywall crews handle everything from full board installation on new builds to patching and repairs in occupied spaces. We focus on straight lines, tight seams and surfaces that are genuinely ready for finishing.",
    benefits: [
      "Accurate boarding, taping and mudding",
      "Seamless patch and damage repair",
      "Dust-conscious work in occupied spaces",
      "Surfaces prepped properly for paint",
    ],
    residential: [
      "Basement finishing and new room build-outs",
      "Ceiling and wall repair after leaks or renovations",
      "Garage, laundry and utility room boarding",
    ],
    commercial: [
      "Office partition walls and tenant fit-ups",
      "Retail and unit turnover repairs",
      "Large-area boarding for new commercial builds",
    ],
    process: [
      { step: "Assessment", detail: "We review the space, measure and confirm materials and scope." },
      { step: "Installation", detail: "Board is cut, fitted and fastened with attention to level and alignment." },
      { step: "Taping & Finishing", detail: "Seams are taped, mudded and sanded to a smooth, paint-ready finish." },
      { step: "Clean Handover", detail: "The site is cleaned and walked through with you before completion." },
    ],
  },
  {
    slug: "plaster",
    title: "Plaster",
    icon: "Brush",
    short: "Smooth plaster finishes, skim coating and wall restoration done with care.",
    intro:
      "Plaster work is where a room either looks finished or looks rushed. We skim, level and blend surfaces so walls and ceilings read flat and clean under real light.",
    benefits: [
      "Smooth, consistent wall and ceiling finishes",
      "Skim coating over damaged or textured surfaces",
      "Careful blending into existing plaster",
      "Preparation that makes paint look better",
    ],
    residential: [
      "Refreshing older walls and ceilings",
      "Removing texture for a modern flat finish",
      "Repairing cracks and settlement damage",
    ],
    commercial: [
      "Lobby, corridor and common-area finishing",
      "Wall restoration between tenants",
      "Large-surface skim coating",
    ],
    process: [
      { step: "Surface Review", detail: "We identify damage, texture and moisture-related issues." },
      { step: "Preparation", detail: "Surfaces are cleaned, protected and primed where needed." },
      { step: "Plaster Application", detail: "Coats are applied and worked to an even, level surface." },
      { step: "Final Sanding", detail: "We sand and inspect under light before handing the space back." },
    ],
  },
  {
    slug: "painting",
    title: "Painting",
    icon: "PaintRoller",
    short: "Interior and exterior painting with sharp lines and durable coverage.",
    intro:
      "Good painting is mostly preparation. We mask, patch and prime properly, then apply coats evenly so the colour looks right and holds up over time — inside and outside the property.",
    benefits: [
      "Crisp cut lines and even coverage",
      "Thorough masking and surface protection",
      "Interior and exterior applications",
      "Colour guidance when you want it",
    ],
    residential: [
      "Full interior repaints and single rooms",
      "Trim, doors, ceilings and feature walls",
      "Exterior surfaces, fences and detailing",
    ],
    commercial: [
      "Offices, retail units and warehouses",
      "Common areas and stairwells",
      "After-hours scheduling to reduce disruption",
    ],
    process: [
      { step: "Colour & Scope", detail: "We confirm finishes, sheens and coverage areas with you." },
      { step: "Preparation", detail: "Patching, sanding, masking and priming come first." },
      { step: "Application", detail: "Coats are applied evenly with attention to edges and detail." },
      { step: "Inspection", detail: "We walk the space, touch up and clean before leaving." },
    ],
  },
  {
    slug: "house-siding",
    title: "House Siding",
    icon: "Home",
    short: "Exterior siding installation and replacement that protects and elevates a property.",
    intro:
      "Siding is both protection and first impression. We install and replace exterior siding with clean alignment, correct fastening and proper detailing around openings.",
    benefits: [
      "Improved exterior appearance and curb appeal",
      "Protection against weather and moisture",
      "Careful detailing around windows and doors",
      "Tidy, aligned panel work",
    ],
    residential: [
      "Full home siding replacement",
      "Damaged panel repair and section replacement",
      "Trim, soffit and fascia detailing",
    ],
    commercial: [
      "Exterior refresh for commercial buildings",
      "Unit and multi-building siding work",
      "Weather damage repair for property owners",
    ],
    process: [
      { step: "Exterior Review", detail: "We inspect the existing exterior, framing and problem areas." },
      { step: "Material Selection", detail: "We discuss siding type, profile and colour options." },
      { step: "Installation", detail: "Panels are installed with proper overlap, fastening and flashing." },
      { step: "Finish Detailing", detail: "Trim and edges are completed and the site is cleaned." },
    ],
  },
  {
    slug: "flooring",
    title: "Flooring",
    icon: "Grid3x3",
    short: "Flooring installation that sits level, locks tight and lasts.",
    intro:
      "We install flooring across residential and commercial spaces, with subfloor preparation that prevents the movement, gaps and squeaks that show up months later.",
    benefits: [
      "Level, properly prepared subfloors",
      "Tight seams and clean transitions",
      "Trim and baseboard detailing",
      "Options suited to traffic levels",
    ],
    residential: [
      "Living areas, bedrooms and basements",
      "Kitchen and hallway replacements",
      "Stair and transition finishing",
    ],
    commercial: [
      "Offices, retail floors and reception areas",
      "High-traffic durable flooring installs",
      "Phased installation around business hours",
    ],
    process: [
      { step: "Measure & Plan", detail: "We measure the area and plan layout and material quantities." },
      { step: "Subfloor Prep", detail: "Surfaces are levelled, cleaned and made ready." },
      { step: "Installation", detail: "Flooring is laid with correct spacing, direction and transitions." },
      { step: "Finishing", detail: "Trim is fitted, the floor is cleaned and the space is handed over." },
    ],
  },
  {
    slug: "roofing",
    title: "Roofing",
    icon: "Triangle",
    short: "Roofing installation, repair and maintenance focused on protection.",
    intro:
      "A roof only matters when it fails. We handle roofing work with attention to underlayment, flashing and ventilation so water goes where it should.",
    benefits: [
      "Weather protection for the whole property",
      "Leak investigation and targeted repair",
      "Proper flashing and edge detailing",
      "Clean-up of debris and fasteners",
    ],
    residential: [
      "Full roof replacement for homes",
      "Shingle repair and storm damage response",
      "Vent, valley and flashing work",
    ],
    commercial: [
      "Roofing for commercial and rental buildings",
      "Ongoing maintenance and inspections",
      "Repairs coordinated with property managers",
    ],
    process: [
      { step: "Roof Inspection", detail: "We assess condition, leaks and problem points." },
      { step: "Scope & Quote", detail: "We outline materials, work required and timelines." },
      { step: "Roofing Work", detail: "Removal, underlayment, flashing and installation are completed." },
      { step: "Site Clean-Up", detail: "Debris and fasteners are cleared from the property." },
    ],
  },
  {
    slug: "cleaning",
    title: "Cleaning",
    icon: "Sparkles",
    short: "Detailed cleaning for homes, offices, rentals and post-construction sites.",
    intro:
      "Cleaning finishes the job. We handle post-construction clean-ups, move-in and move-out cleans and recurring commercial cleaning with a consistent, detailed approach.",
    benefits: [
      "Post-construction dust and debris removal",
      "Detailed room-by-room cleaning",
      "Flexible one-time or recurring schedules",
      "Consistent standards every visit",
    ],
    residential: [
      "Deep cleans and seasonal cleaning",
      "Move-in and move-out cleaning",
      "Post-renovation clean-ups",
    ],
    commercial: [
      "Office and retail cleaning",
      "Rental property turnover cleaning",
      "Construction site final cleans",
    ],
    process: [
      { step: "Walkthrough", detail: "We review the space and agree on priorities and access." },
      { step: "Plan", detail: "A checklist and schedule are set for the property." },
      { step: "Cleaning", detail: "Work is completed systematically, area by area." },
      { step: "Final Check", detail: "We inspect against the checklist before signing off." },
    ],
  },
  {
    slug: "lawn-care",
    title: "Lawn Care",
    icon: "Leaf",
    short: "Lawn maintenance and exterior property care that keeps grounds looking sharp.",
    intro:
      "Well-kept grounds say a lot about a property. We handle mowing, trimming, clean-ups and general exterior maintenance for homes and commercial sites.",
    benefits: [
      "Neat, regularly maintained grounds",
      "Seasonal clean-ups and debris removal",
      "Edging and trimming detail work",
      "Reliable recurring schedules",
    ],
    residential: [
      "Regular lawn mowing and trimming",
      "Spring and fall yard clean-ups",
      "General exterior property tidying",
    ],
    commercial: [
      "Grounds maintenance for offices and retail",
      "Rental and multi-unit property upkeep",
      "Parking area and edge clean-ups",
    ],
    process: [
      { step: "Property Review", detail: "We look at the grounds and agree on the scope of care." },
      { step: "Schedule", detail: "A one-time or recurring visit schedule is confirmed." },
      { step: "Maintenance", detail: "Mowing, trimming, edging and clean-up are completed." },
      { step: "Tidy Finish", detail: "Clippings and debris are cleared before we leave." },
    ],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
