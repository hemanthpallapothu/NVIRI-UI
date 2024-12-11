import './index.css'

const ServiceCard=(props)=>{
    const {serviceDetails}=props
    const {icon,title,description}=serviceDetails
    return (
        <li className='sevice-bg-container'>
            <img alt={title} src={icon} className='sevice-icon'/>
            <h1 className='sevice-title'>{title}</h1>
            <p className='sevice-description'>{description}</p>
        </li>
)
}

export default ServiceCard