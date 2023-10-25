import Image from 'next/image';
import { Jumbotron, NavbarPublic } from '@/components';

export default function HomePage() {
  return (
    <>
      <NavbarPublic page="home" />
      <Jumbotron
        heading="News App"
        subheading="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        imgUrl="https://source.unsplash.com/F2KRf_QfCqw/1920x1080"
      />
    </>
  );
}
