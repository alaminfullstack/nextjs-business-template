import Service from '@/app/@components/home/Service';
import Banner from './../../@components/home/Banner';
import Clinets from './../../@components/home/Clinets';


export default function Home() {
  return (
    <section class="pt-xl-8 pb-0">
      <div class="container pt-2 pt-sm-5">
        <Banner />
        <hr class="border-primary opacity-2 mt-sm-7 my-5" />
        <Clinets />
        <Service />
      </div>
    </section>
  );
}
