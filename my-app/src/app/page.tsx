import type { Metadata } from 'next'
import homeUlr from '../../public/homeUrl.jpeg'
import Hero from './components/Hero'

export const metadata: Metadata = {
  title: '首页',
}


export default function Home() {
  return (
    <Hero
      imgUrl={homeUlr}
      altText={'首页'}
      content={'首页内容展示'}
    />
  );
}
