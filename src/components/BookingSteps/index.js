import {v4 as uuidv4} from 'uuid'
import StepCard  from '../StepCard'
import './index.css'

const bookingSteps=[
    {
        id: uuidv4(),
        imageUrl: 'https://res.cloudinary.com/duafmawoq/image/upload/v1733876912/undraw_forms_re_pkrt_1_v3lu1f.png',
        title: 'Provide your appliance details',
        description: 'Let us know your appliance details and your issue.',
    },
    {
        id: uuidv4(),
        imageUrl: 'https://res.cloudinary.com/duafmawoq/image/upload/v1733876912/Untitled_rdkrqp.png',
        title: 'Choose your technician',
        description: 'Choose from a wide variety of technicians and vendors.',
    },
    {
        id: uuidv4(),
        imageUrl: 'https://res.cloudinary.com/duafmawoq/image/upload/v1733876912/undraw_certification_re_ifll_1_tec414.png',
        title: 'Get it fixed!',
        description: 'The technician will arrive at your doorstep shortly to fix it!',
    },
]

const BookingSteps=()=>(
    <div className='steps-bg-container'>
        <h1 className='steps-title'>Book a request in 3 simple steps</h1>
        <ul className='steps-container'>
            {
                bookingSteps.map(eachStep=><StepCard key={eachStep.id} stepDetsils={eachStep}/>)
            }
        </ul>
    </div>
)
export default BookingSteps