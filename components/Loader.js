import React from 'react'
import LoaderStyles from '../styles/components/Loader.module.css'

const Loader = ( {loaded} ) => {



    return (

    <div className={`mainBackground ${loaded ? LoaderStyles.loaderHidden : LoaderStyles.loader}`}>
        <div className={LoaderStyles.loaderContent}>
            <svg className={`accentFill ${LoaderStyles.loaderLogo}`} viewBox="0 0 85 44" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M0 24.3158L19.2857 3H27.2857L0 33.1579V42C0 43.1046 0.895447 44 2 44H40V19.6842L20.7143 41H12.7143L40 10.8421V0H2C0.895447 0 0 0.895416 0 2V24.3158ZM85 24.3158L65.7143 3H57.7143L85 33.1579V42C85 43.1046 84.1046 44 83 44H45V19.6842L64.2857 41H72.2857L45 10.8421V0H83C84.1046 0 85 0.895416 85 2V24.3158Z"/>
            </svg>
        </div>
     </div>

    )
}

export default Loader
