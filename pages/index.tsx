import type { NextPage } from 'next'
import profilePic from '../public/shark.png'
import Link from 'next/link'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div>
      <p>WhatShark</p>
      <ul>
        <li>Contact me: <Link href="mailto:nathan@whatshark.com">nathan@whatshark.com</Link></li>
        <li>GitHub repos: <Link href="https://github.com/WhatShark/">https://github.com/WhatShark/</Link></li>
        <li>Public key: <Link href="/public-key.pub">C956 5B05 9C11 FC53</Link></li>
      </ul>

      <img alt="Picture of a great white shark. Distorted." src="/shark.png"></img>
      <Image src={profilePic} alt="Picture of a great white shark. Distorted." />
    </div>
  )
}

export default Home
