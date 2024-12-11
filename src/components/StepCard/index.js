import './index.css'

const StepCard=(props)=>{
    const {stepDetsils}=props
    const {imageUrl,title,description}=stepDetsils
    return (
        <li className='step-card'>
            <img className='step-image' alt={title} src={imageUrl}/>
            <h1 className='step-title'>{title}</h1>
            <p className='step-description'>{description}</p>
        </li>
    )
}

export default StepCard