import React from 'react'
import Link from 'next/link'
import CardStyles from '../styles/components/CaseStudyCard.module.css'
import Image from 'next/image'
import TTImg from '/public/img/tt-img-test-2.png'

const CaseStudyCard = ({title, subtitle, slug, img , postData}) => {

    

    return (
        <Link scroll={false} href={`/case-studies/${encodeURIComponent(slug)}`}>
            <a className={`bgDeep ${CardStyles.caseStudyCard}`}>
                <div className={CardStyles.cardImgSection}>
                    <Image layout="fill" objectFit="cover" src={`/img/${img}`} alt="Ambassador App Phone Mockup" />
                </div>
                <div className={CardStyles.cardInnerSection}>
                    <div className={`bgMainTransparent ${CardStyles.cardInner}`}>
                        <h1 className="textMain textP1 textMedium">{title}<br/>{subtitle}<span className="textAccent">.</span></h1>
                         <div className={CardStyles.cardInnerLink}>
                             {/* <p className="textMain textBody2">Read the case study</p> */}
                            <svg className="fillAccent" viewBox="0 0 41 41" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M32.9565 4.85372C33.051 4.75923 32.9841 4.59766 32.8505 4.59766H0.0410156V2.09766C0.0410156 1.26923 0.71259 0.597656 1.54102 0.597656H40.041V39.0977C40.041 39.9261 39.3694 40.5977 38.541 40.5977H36.041V7.78822C36.041 7.65458 35.8794 7.58766 35.785 7.68215L3.45523 40.0119L0.626802 37.1834L32.9565 4.85372Z"/>
                            </svg>
                            
                         </div>
                    </div>
                </div>
            </a>
        </Link>
    )
}

export default CaseStudyCard
