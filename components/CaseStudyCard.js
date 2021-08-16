import React from 'react'
import Link from 'next/link'
import CardStyles from '../styles/components/CaseStudyCard.module.css'
import Image from 'next/image'
import TTImg from '/public/img/tt-img-test-2.png'

const CaseStudyCard = ({title, subtitle, slug, img , postData}) => {

    

    return (
        <Link scroll={false} href={`/case-studies/${encodeURIComponent(slug)}`}>
            <a className={`deepBackground ${CardStyles.caseStudyCard}`}>
                <div className={CardStyles.cardImgSection}>
                    <Image layout="fill" objectFit="contain" src={`/img/${img}`} alt="Ambassador App Phone Mockup" />
                </div>
                <div className={CardStyles.cardInnerSection}>
                    <div className={`mainBackground ${CardStyles.cardInner}`}>
                        <h1 className="mainText textTitleMedium">{title}<br/>{subtitle}<span className="accentText">.</span></h1>
                         <div className={CardStyles.cardInnerLink}>
                             <p className="mainText textBody2">Read the case study</p>
                             <svg className="accentFill" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M8.84936 1.8456L0.926391 1.8456C0.416743 1.8456 0.00359069 1.43245 0.00359069 0.9228C0.00359069 0.413152 0.416742 0 0.926391 0L11.0772 1.36126e-07C11.5868 1.36126e-07 12 0.413152 12 0.922801V11.0736C12 11.5833 11.5868 11.9964 11.0772 11.9964C10.5676 11.9964 10.1544 11.5833 10.1544 11.0736L10.1544 3.15064L1.57522 11.7298C1.21484 12.0902 0.63076 12.09 0.270384 11.7296C-0.089992 11.3692 -0.090196 10.7852 0.27018 10.4248L8.84936 1.8456Z"/>
                            </svg>
                         </div>
                    </div>
                </div>
            </a>
        </Link>
    )
}

export default CaseStudyCard
