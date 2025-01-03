

import dynamic from 'next/dynamic';
const Home1 = dynamic(() => import('@/components/Home/Home'), {
  ssr: false
});
export default function Home() {
  return (
   <>
   
   <Home1/>
   </>
  );
}
