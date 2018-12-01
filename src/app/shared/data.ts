import { Subject, Group } from './classes';

export const SUB_OPTIONS: Subject[] = [
    {
        area: 'All subject areas',
        category: [
            'All subject categories'
        ]
    },
    {
        area: 'Agricultural and Biological Sciences',
        category: [
            'All subject categories',
            'Agricultural and Biological Sciences (miscellaneous)',
            'Agronomy and Crop Science',
            'Animal Science and Zoology',
            'Aquatic Science',
            'Ecology, Evolution, Behavior and Systematics',
            'Food Science',
            'Forestry',
            'Horticulture',
            'Insect Science',
            'Plant Science',
            'Soil Science']
    },
    {
        area: 'Arts and Humanities',
        category: [
            'All subject categories',
            'Archeology (arts and humanities)',
            'Arts and Humanities (miscellaneous)',
            'Classics',
            'Conservation',
            'History',
            'History and Philosophy of Science',
            'Language and Linguistics',
            'Literature and Literary Theory',
            'Museology',
            'Music',
            'Philosophy',
            'Religious Studies',
            'Visual Arts and Performing Arts'
        ]
    },
    {
        area: 'Biochemistry, Genetics and Molecular Biology',
        category: [
            'All subject categories',
            'Aging',
            'Biochemistry',
            'Biochemistry, Genetics and Molecular Biology (miscellaneous)',
            'Biophysics',
            'Biotechnology',
            'Cancer Research',
            'Cell Biology',
            'Clinical Biochemistry',
            'Developmental Biology',
            'Endocrinology',
            'Genetics',
            'Molecular Biology',
            'Molecular Medicine',
            'Physiology',
            'Structural Biology'
        ]
    },
    {
        area: 'Business, Management and Accounting',
        category: [
            'All subject categories',
            'Accounting',
            'Business and International Management',
            'Business, Management and Accounting (miscellaneous)',
            'Industrial Relations',
            'Management Information Systems',
            'Management of Technology and Innovation',
            'Marketing',
            'Organizational Behavior and Human Resource Management',
            'Strategy and Management',
            'Tourism, Leisure and Hospitality Management'
        ]
    },
    {
        area: 'Chemical Engineering',
        category: [
            'All subject categories',
            'Bioengineering',
            'Catalysis',
            'Chemical Engineering (miscellaneous)',
            'Chemical Health and Safety',
            'Colloid and Surface Chemistry',
            'Filtration and Separation',
            'Fluid Flow and Transfer Processes',
            'Process Chemistry and Technology'
        ]
    },
    {
        area: 'Chemistry',
        category: [
            'All subject categories',
            'Analytical Chemistry',
            'Chemistry (miscellaneous)',
            'Electrochemistry',
            'Inorganic Chemistry',
            'Organic Chemistry',
            'Physical and Theoretical Chemistry',
            'Spectroscopy'
        ]
    },
    {
        area: 'Computer Science',
        category: [
            'All subject categories',
            'Artificial Intelligence',
            'Computational Theory and Mathematics',
            'Computer Graphics and Computer-Aided Design',
            'Computer Networks and Communications',
            'Computer Science Applications',
            'Computer Science (miscellaneous)',
            'Computer Vision and Pattern Recognition',
            'Hardware and Architecture',
            'Human-Computer Interaction',
            'Information Systems',
            'Signal Processing',
            'Software'
        ]
    },
    {
        area: 'Decision Sciences',
        category: [
            'All subject categories',
            'Decision Sciences (miscellaneous)',
            'Information Systems and Management',
            'Management Science and Operations Research',
            'Statistics, Probability and Uncertainty'
        ]
    },
    {
        area: 'Dentistry',
        category: [
            'All subject categories',
            'Dental Assisting',
            'Dental Hygiene',
            'Dentistry (miscellaneous)',
            'Oral Surgery',
            'Orthodontics',
            'Periodontics'
        ]
    },
    {
        area: 'Earth and Planetary Sciences',
        category: [
            'All subject categories',
            'Atmospheric Science',
            'Computers in Earth Sciences',
            'Earth and Planetary Sciences (miscellaneous)',
            'Earth-Surface Processes',
            'Economic Geology',
            'Geochemistry and Petrology',
            'Geology',
            'Geophysics',
            'Geotechnical Engineering and Engineering Geology',
            'Oceanography',
            'Paleontology',
            'Space and Planetary Science',
            'Stratigraphy'
        ]
    },
    {
        area: 'Economics, Econometrics and Finance',
        category: [
            'All subject categories',
            'Economics and Econometrics',
            'Economics, Econometrics and Finance (miscellaneous)',
            'Finance'
        ]
    },
    {
        area: 'Energy',
        category: [
            'All subject categories',
            'Energy Engineering and Power Technology',
            'Energy (miscellaneous)',
            'Fuel Technology',
            'Nuclear Energy and Engineering',
            'Renewable Energy, Sustainability and the Environment'
        ]
    },
    {
        area: 'Engineering',
        category: [
            'All subject categories',
            'Aerospace Engineering',
            'Architecture',
            'Automotive Engineering',
            'Biomedical Engineering',
            'Building and Construction',
            'Civil and Structural Engineering',
            'Computational Mechanics',
            'Control and Systems Engineering',
            'Electrical and Electronic Engineering',
            'Engineering (miscellaneous)',
            'Industrial and Manufacturing Engineering',
            'Mechanical Engineering',
            'Mechanics of Materials',
            'Media Technology',
            'Ocean Engineering',
            'Safety, Risk, Reliability and Quality'
        ]
    },
    {
        area: 'Environmental Science',
        category: [
            'All subject categories',
            'Ecological Modeling',
            'Ecology',
            'Environmental Chemistry',
            'Environmental Engineering',
            'Environmental Science (miscellaneous)',
            'Global and Planetary Change',
            'Health, Toxicology and Mutagenesis',
            'Management, Monitoring, Policy and Law',
            'Nature and Landscape Conservation',
            'Pollution',
            'Waste Management and Disposal',
            'Water Science and Technology'
        ]
    },
    {
        area: 'Health Professions',
        category: [
            'All subject categories',
            'Chiropractics',
            'Complementary and Manual Therapy',
            'Emergency Medical Services',
            'Health Information Management',
            'Health Professions (miscellaneous)',
            'Medical Assisting and Transcription',
            'Medical Laboratory Technology',
            'Medical Terminology',
            'Occupational Therapy',
            'Optometry',
            'Pharmacy',
            'Physical Therapy, Sports Therapy and Rehabilitation',
            'Podiatry',
            'Radiological and Ultrasound Technology',
            'Respiratory Care',
            'Speech and Hearing',
            'Sports Science'
        ]
    },
    {
        area: 'Immunology and Microbiology',
        category: [
            'All subject categories',
            'Applied Microbiology and Biotechnology',
            'Immunology',
            'Immunology and Microbiology (miscellaneous)',
            'Microbiology',
            'Parasitology',
            'Virology'
        ]
    },
    {
        area: 'Materials Science',
        category: [
            'All subject categories',
            'Biomaterials',
            'Ceramics and Composites',
            'Electronic, Optical and Magnetic Materials',
            'Materials Chemistry',
            'Materials Science (miscellaneous)',
            'Metals and Alloys',
            'Nanoscience and Nanotechnology',
            'Polymers and Plastics',
            'Surfaces, Coatings and Films'
        ]
    },
    {
        area: 'Mathematics',
        category: [
            'All subject categories',
            'Algebra and Number Theory',
            'Analysis',
            'Applied Mathematics',
            'Computational Mathematics',
            'Control and Optimization',
            'Discrete Mathematics and Combinatorics',
            'Geometry and Topology',
            'Logic',
            'Mathematical Physics',
            'Mathematics (miscellaneous)',
            'Modeling and Simulation',
            'Numerical Analysis',
            'Statistics and Probability',
            'Theoretical Computer Science'
        ]
    },
    {
        area: 'Medicine',
        category: [
            'All subject categories',
            'Anatomy',
            'Anesthesiology and Pain Medicine',
            'Biochemistry (medical)',
            'Cardiology and Cardiovascular Medicine',
            'Complementary and Alternative Medicine',
            'Critical Care and Intensive Care Medicine',
            'Dermatology',
            'Drug Guides',
            'Embryology',
            'Emergency Medicine',
            'Endocrinology, Diabetes and Metabolism',
            'Epidemiology',
            'Family Practice',
            'Gastroenterology',
            'Genetics (clinical)',
            'Geriatrics and Gerontology',
            'Health Informatics',
            'Health Policy',
            'Hematology',
            'Hepatology',
            'Histology',
            'Immunology and Allergy',
            'Infectious Diseases',
            'Internal Medicine',
            'Medicine (miscellaneous)',
            'Microbiology (medical)',
            'Nephrology',
            'Neurology (clinical)',
            'Obstetrics and Gynecology',
            'Oncology',
            'Ophthalmology',
            'Orthopedics and Sports Medicine',
            'Otorhinolaryngology',
            'Pathology and Forensic Medicine',
            'Pediatrics, Perinatology and Child Health',
            'Pharmacology (medical)',
            'Physiology (medical)',
            'Psychiatry and Mental Health',
            'Public Health, Environmental and Occupational Health',
            'Pulmonary and Respiratory Medicine',
            'Radiology, Nuclear Medicine and Imaging',
            'Rehabilitation',
            'Reproductive Medicine',
            'Reviews and References (medical)',
            'Rheumatology',
            'Surgery',
            'Transplantation',
            'Urology'
        ]
    },
    {
        area: 'Multidisciplinary',
        category: [
            'All subject categories',
            'Multidisciplinary'
        ]
    },
    {
        area: 'Neuroscience',
        category: [
            'All subject categories',
            'Behavioral Neuroscience',
            'Biological Psychiatry',
            'Cellular and Molecular Neuroscience',
            'Cognitive Neuroscience',
            'Developmental Neuroscience',
            'Endocrine and Autonomic Systems',
            'Neurology',
            'Neuroscience (miscellaneous)',
            'Sensory Systems'
        ]
    },
    {
        area: 'Nursing',
        category: [
            'All subject categories',
            'Advanced and Specialized Nursing',
            'Assessment and Diagnosis',
            'Care Planning',
            'Community and Home Care',
            'Critical Care Nursing',
            'Emergency Nursing',
            'Fundamentals and Skills',
            'Gerontology',
            'Issues, Ethics and Legal Aspects',
            'Leadership and Management',
            'LPN and LVN',
            'Maternity and Midwifery',
            'Medical and Surgical Nursing',
            'Nurse Assisting',
            'Nursing (miscellaneous)',
            'Nutrition and Dietetics',
            'Oncology (nursing)',
            'Pediatrics',
            'Pharmacology (nursing)',
            'Psychiatric Mental Health',
            'Research and Theory',
            'Review and Exam Preparation'
        ]
    },
    {
        area: 'Pharmacology, Toxicology and Pharmaceutics',
        category: [
            'All subject categories',
            'Drug Discovery',
            'Pharmaceutical Science',
            'Pharmacology',
            'Pharmacology, Toxicology and Pharmaceutics (miscellaneous)',
            'Toxicology'
        ]
    },
    {
        area: 'Physics and Astronomy',
        category: [
            'All subject categories',
            'Acoustics and Ultrasonics',
            'Astronomy and Astrophysics',
            'Atomic and Molecular Physics, and Optics',
            'Condensed Matter Physics',
            'Instrumentation',
            'Nuclear and High Energy Physics',
            'Physics and Astronomy (miscellaneous)',
            'Radiation',
            'Statistical and Nonlinear Physics',
            'Surfaces and Interfaces'
        ]
    },
    {
        area: 'Psychology',
        category: [
            'All subject categories',
            'Applied Psychology',
            'Clinical Psychology',
            'Developmental and Educational Psychology',
            'Experimental and Cognitive Psychology',
            'Neuropsychology and Physiological Psychology',
            'Psychology (miscellaneous)',
            'Social Psychology'
        ]
    },
    {
        area: 'Social Sciences',
        category: [
            'All subject categories',
            'Anthropology',
            'Archeology',
            'Communication',
            'Cultural Studies',
            'Demography',
            'Development',
            'Education',
            'E-learning',
            'Gender Studies',
            'Geography, Planning and Development',
            'Health (social science)',
            'Human Factors and Ergonomics',
            'Law',
            'Library and Information Sciences',
            'Life-span and Life-course Studies',
            'Linguistics and Language',
            'Political Science and International Relations',
            'Public Administration',
            'Safety Research',
            'Social Sciences (miscellaneous)',
            'Social Work',
            'Sociology and Political Science',
            'Transportation',
            'Urban Studies'
        ]
    },
    {
        area: 'Veterinary',
        category: [
            'All subject categories',
            'Equine',
            'Food Animals',
            'Small Animals',
            'Veterinary (miscellaneous)'
        ]
    },
    {
        area: 'Others',
        category: [
            'All subject categories',
        ]
    }
];

export const RC_OPTIONS: Group[] = [
    // 'All regions / countries',
    {
        name: 'Regions',
        value: [
            'Africa',
            'Asiatic Region',
            'Eastern Europe',
            'Latin America',
            'Middle East',
            'Northern America',
            'Pacific Region',
            'Western Europe',
        ]
    },
    {
        name: 'Countries',
        value: [
            'Afghanistan',
            'Algeria',
            'Argentina',
            'Armenia',
            'Australia',
            'Austria',
            'Azerbaijan',
            'Bahrain',
            'Bangladesh',
            'Belarus',
            'Belgium',
            'Bosnia and Herzegovina',
            'Brazil',
            'Brunei Darussalam',
            'Bulgaria',
            'Canada',
            'Chile',
            'China',
            'Colombia',
            'Costa Rica',
            'Croatia',
            'Cuba',
            'Cyprus',
            'Czech Republic',
            'Denmark',
            'Dominican Republic',
            'Ecuador',
            'Egypt',
            'Estonia',
            'Ethiopia',
            'Fiji',
            'Finland',
            'France',
            'Georgia',
            'Germany',
            'Ghana',
            'Greece',
            'Hong Kong',
            'Hungary',
            'Iceland',
            'India',
            'Indonesia',
            'Iran',
            'Iraq',
            'Ireland',
            'Israel',
            'Italy',
            'Jamaica',
            'Japan',
            'Jordan',
            'Kazakhstan',
            'Kenya',
            'Kuwait',
            'Latvia',
            'Lebanon',
            'Libya',
            'Liechtenstein',
            'Lithuania',
            'Luxembourg',
            'Macao',
            'Macedonia',
            'Madagascar',
            'Malawi',
            'Malaysia',
            'Mali',
            'Malta',
            'Mauritius',
            'Mexico',
            'Moldova',
            'Monaco',
            'Montenegro',
            'Morocco',
            'Namibia',
            'Nepal',
            'Netherlands',
            'New Caledonia',
            'New Zealand',
            'Nigeria',
            'North Korea',
            'Norway',
            'Oman',
            'Pakistan',
            'Panama',
            'Papua New Guinea',
            'Peru',
            'Philippines',
            'Poland',
            'Portugal',
            'Puerto Rico',
            'Qatar',
            'Romania',
            'Russian Federation',
            'Rwanda',
            'Saudi Arabia',
            'Senegal',
            'Serbia',
            'Singapore',
            'Slovakia',
            'Slovenia',
            'South Africa',
            'South Korea',
            'Spain',
            'Sri Lanka',
            'Sudan',
            'Swaziland',
            'Sweden',
            'Switzerland',
            'Syrian Arab Republic',
            'Taiwan',
            'Tanzania',
            'Thailand',
            'Trinidad and Tobago',
            'Tunisia',
            'Turkey',
            'Uganda',
            'Ukraine',
            'United Arab Emirates',
            'United Kingdom',
            'United States',
            'Uruguay',
            'Uzbekistan',
            'Vatican City State',
            'Venezuela',
            'Viet Nam',
            'Zimbabwe',
        ]
    }
];

