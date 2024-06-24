import Link from "next/link"

import {FaGithub, FaTwitter, FaInstagram, FaSnapchat} from 'react-icons/fa'

const socials = [
    {icon: <FaGithub />, path: 'https://github.com/Simplevhick'},
    {icon: <FaSnapchat />, path: 'https://www.snapchat.com/add/svhick20'},
    {icon: <FaTwitter />, path: 'https://x.com/ChimborV'},
    {icon: <FaInstagram />, path: 'https://www.instagram.com/simplevhick_/'},
]

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
        {socials.map((item, index)=> {
            return <Link key={index} href={item.path} className={iconStyles}>{item.icon}</Link>
        })}
    </div>
  )
}

export default Social