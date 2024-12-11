import {v4 as uuidv4} from 'uuid'
import ServiceCard from '../ServiceCard' 

import './index.css'

const servicesList=[
    {
        id: uuidv4(),
        icon: 'https://res.cloudinary.com/duafmawoq/image/upload/v1733836457/refrigerator-thin_1_jxn5rf.png',
        title: 'Fridge',
        description: 'We get insulted by others, lose trust for those others. We get back stabbed by friends. It becomes harder for us to give others a hand.',
    },
    {
        id: uuidv4(),
        icon: 'https://res.cloudinary.com/duafmawoq/image/upload/v1733836458/Vector_1_gjhaf6.png',
        title: 'Air Conditioner',
        description: "Don't get your heart broken by people we love, even that we give them all we have. Then we lose family over time. As we live, our hearts turn colder.",
    },
    {
        id: uuidv4(),
        icon: 'https://res.cloudinary.com/duafmawoq/image/upload/v1733836458/Vector_2_e6rdjr.png',
        title: 'Television',
        description: "What else could rust the heart more over time? Blackgold. The time is now for it to be okay to be great. or being a bright color. For standing out.",
    },
    {
        id: uuidv4(),
        icon: 'https://res.cloudinary.com/duafmawoq/image/upload/v1733836458/fire-burner-thin_1_crbxz1.png',
        title: 'Gas Stove',
        description: "We get insulted by others, lose trust for those others. We get back stabbed by friends. It becomes harder for us to give others a hand.",
    }, 
    {
        id: uuidv4(),
        icon: 'https://res.cloudinary.com/duafmawoq/image/upload/v1733836458/Vector_1_gjhaf6.png',
        title: 'Air Conditioner',
        description: "Don't get your heart broken by people we love, even that we give them all we have. Then we lose family over time. As we live, our hearts turn colder.",
    },   
    {
        id: uuidv4(),
        icon: 'https://res.cloudinary.com/duafmawoq/image/upload/v1733836458/Vector_2_e6rdjr.png',
        title: 'Television',
        description: "What else could rust the heart more over time? Blackgold. The time is now for it to be okay to be great. or being a bright color. For standing out.",
    },
]

const AllServices=()=>(
    <div className='all-services-bg-container'>
        <h1 className='all-services-title'>All Services</h1>
        <p className='all-services-paragrpah'>The time is now for it to be okay to be great. For being a bright color. For standing out.</p>
        <ul className='sevices-container'>
            {servicesList.map(eachService=><ServiceCard key={eachService.id} serviceDetails={eachService}/>)}
        </ul>
    </div>
)
export default AllServices