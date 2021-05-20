import React from 'react'
import Image from 'next/image'
import Layout from '../components/Layout'
import DisplayRecoilState from '../components/recoil/DisplayRecoilState'

const twitchURL = 'https://profile.img.afreecatv.com/LOGO/03/030b1004/030b1004.jpg'
const afreecaURL =
  'https://static-cdn.jtvnw.net/jtv_user_pictures/ab0c80ea-2d38-4bf1-a339-e592cf9e1e8f-profile_image-300x300.png'
export default function index(): JSX.Element {
  return (
    <Layout>
      <DisplayRecoilState />
      <div>
        <p>{`<Image> 태그, 100 × 100 px (intrinsic: 128 × 128 px), size : 4.7 kB`}</p>
        <Image src={afreecaURL} alt="logo" width={100} height={100} />
        <p>{`<img> 태그, 100 × 100 px (intrinsic: 300 × 300 px), size : 119 kB`}</p>
        <img src={afreecaURL} alt="logo" width={100} height={100} />
        {/* <p>{`<img> 태그, width, height지정 안함 (intrinsic: 300 × 300 px), size : 119 kB`}</p>
      <img src={afreecaURL} alt="logo" /> */}
        <hr />
        <p>{`<Image> 태그, 100 × 100 px (intrinsic: 128 × 128 px), size: 4.7 kB`}</p>
        <Image src={twitchURL} alt="logo" width={100} height={100} />
        <p>{`<img> 태그, 100 × 100 px (intrinsic: 420 × 420 px), size: 54.9 kB`}</p>
        <img src={twitchURL} alt="logo" width={100} height={100} />
        {/* <p>{`<img> 태그, width, height지정 안함 (intrinsic: 420 × 420 px), size: 54.9 kB`}</p>
      <img src={twitchURL} alt="logo" /> */}
      </div>
    </Layout>
  )
}
