import { Hero, Countdown, PhonesAndTablets, Gaming, Smartwatches, Televisions, Audios, Computing, Photography, Drones, HomeAppliances, OneStop } from '@components'
import { axiosInstance } from '@utils';

export default async function Home() {
  let targetTime: number | null;
  try {
    const {data, status} = await axiosInstance.get(`${process.env.BACKEND_URL}/flash-sales`)
    if(status === 200) {
      targetTime = await data.targetTime
    } else {
      targetTime = null
    }
  } catch (error) {
    targetTime = null
  }

  return (
    <>
      <Hero />
      <Countdown targetTime={targetTime} />
      <PhonesAndTablets />
      <Gaming />
      <Televisions />
      <Smartwatches />
      <OneStop />
      <HomeAppliances />
      <Audios />
      <Computing />
      <Photography />
      <Drones />
    </>
  )
}