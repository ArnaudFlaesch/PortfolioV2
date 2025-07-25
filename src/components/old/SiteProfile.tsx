import Image from 'next/image';
import "./SiteProfile.scss"
import {city, company, jobName} from '../../../data/SiteData';
import {useTranslations} from 'next-intl';
import {profileSocialLinks} from '../../../data/ProfileSocialsData';

export default function SiteProfile() {
  const t = useTranslations('SiteProfile');
  return (
    <div id="profile-bio">
      <Image src={'/profile-picture.jpg'} alt={'Profile Picture'} width={150} height={150} />


      <div id="profile">
        <div id="bio">
          <div id="work">
      { t(jobName) } <br />
      { t("AT") }{ company }
          </div>
          <div id="location">
            { city }
          </div>

          <div id="social-links">
            {profileSocialLinks.map(socialLink => {
              return (
                <span key={socialLink.name}>
                <Image src={socialLink.imgPath} alt={socialLink.name} width={35} height={35} />
                <a href={socialLink.link} target="_blank" rel="noopener noreferrer">  {socialLink.name} </a>
                </span>
              )
            })}
          </div>

        </div>
    </div>
    </div>
  )
}