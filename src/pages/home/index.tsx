import { Helmet } from 'react-helmet'
import { Hero } from 'src/components/hero'

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Okay</title>
      </Helmet>
      <Hero />
    </>
  )
}
