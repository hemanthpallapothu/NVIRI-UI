import './index.css'

const Home=()=>(
    <div className='home-page-bg-container'>
        <img alt="homePageBanner" className='home-page-banner' src="https://res.cloudinary.com/duafmawoq/image/upload/v1733833325/Frame_j2frwd.png"/>
        <div>
            <h1 className='home-page-title'>Take care of your home needs now!</h1>
            <p className='home-page-paragraph'>ServicePro is your one-stop solution to troubleshoot, choose a vendor and book a technician.</p>
            <div className='home-page-input-drop-down-area-alinement'>
                <select className='home-page-input-drop-down'>
                    <option>Pune</option>
                </select>
                <p className='home-page-area'>Only in Ameerpet, Gachibowli, & Madhapur</p>
            </div>
            <div>
                <input type="text" placeholder='Search Home Appliances' className='home-page-input'/>
                <button className='home-page-search-button'>Search</button>
            </div>
        </div>
    </div>
)

export default Home