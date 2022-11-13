import dynamic from 'next/dynamic';
import Instructions from '@/components/dom/Instructions';
import React from 'react';

const Blob = dynamic(() => import('@/components/canvas/Blob'), { ssr: false });

export default function Page(props) {
  return (
    <div className=''>
      <div>\this is fucking test</div>
    </div>
  );
}

Page.canvas = (props) => <Blob route='/' position-y={-0.75} orbit />;

export async function getStaticProps() {
  return { props: { title: 'ground' } };
}
