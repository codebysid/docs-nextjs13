import Link from 'next/link'
import React from 'react'
import { GithubIcon, LinkedInIcon, InstagramIcon } from './Icons'

const Social_Links = [
    {
        key: 1,
        title: "Github",
        link: "https://github.com/codebysid",
        icon: <GithubIcon />
    },
    {
        key: 2,
        title: "LinkedIn",
        link: "https://linkedin.com/in/SiddhantJainnn",
        icon: <LinkedInIcon />
    },
    {
        key: 3,
        title: "Instagram",
        link: "https://instagram.com/codebysid",
        icon: <InstagramIcon />
    }
]

const Credit = () => {
    return (
        <div className='fixed bottom-0 bg-blue w-full p-6 flex flex-col gap-2 text-white font-semibold lg:items-center lg:justify-center'>
            <p>✅ Made by Siddhant Jain</p>
            <ul className=' list-none flex flex-row justify-start gap-10'>
                {
                    Social_Links.map((social) => {
                        return (
                            <li key={social.key} className=' emojiList relative'>
                                <Link href={social.link} className="flex flex-row items-center gap-1 active:text-green-500 borderAnimation">
                                    {social?.icon}
                                    {social?.title}
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Credit
