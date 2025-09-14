import About from "@/components/home/about";
import Blog from "@/components/home/blog";
import Services from "@/components/home/services";
import HomeSlider from "@/components/home/slider";
import Sponsors from "@/components/home/sponsors";
import StatsArea from "@/components/home/stats-area";
import Layout from "@/components/layout";

import dynamic from 'next/dynamic';

const Portfolio = dynamic(() => import('@/components/home/portfolio'), {
  ssr: false,
});

export default function HomePage() {
  return (
    <Layout>
      <HomeSlider />
      <Services />
      <About />
      <Portfolio />
      <Blog />
      <Sponsors />
      <StatsArea />
    </Layout>
  );
}
