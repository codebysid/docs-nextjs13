import Link from 'next/link'
import React from 'react'
import { GithubIcon, LinkedInIcon, InstagramIcon } from './Icons'

//TODO: add other social handles if needed
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
    // { TODO: may uncomment later
    //     key: 3,
    //     title: "Instagram",
    //     link: "https://instagram.com/codebysid",
    //     icon: <InstagramIcon />
    // }
]

const Credit = () => {
    return (
        <div className='w-full flex flex-col gap-2 font-semibold items-center pb-2 text-gray text-sm justify-center'>
            <p>Made with 💙 by Siddhant Jain</p>
            <ul className=' list-none flex flex-row justify-start gap-4'>
                {'{'}
                {
                    Social_Links.map((social) => {
                        return (
                            <li key={social.key} className=' emojiList relative'>
                                <Link href={social.link} className="flex flex-row items-center gap-1 active:text-green-500 hover:text-white borderAnimation">
                                    {social?.icon}
                                    {social?.title}
                                </Link>
                            </li>
                        )
                    })
                }
                {'}'}
            </ul>
        </div>
    )
}

export default Credit
