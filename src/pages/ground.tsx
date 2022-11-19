import dynamic from 'next/dynamic';
import Instructions from '../components/dom/Instructions';
import React from 'react';
import Ground from '../components/canvas/Ground';

const Blob = dynamic(() => import('../components/canvas/Blob'), { ssr: false });

export default function Page(props) {
  return <div className=''></div>;
}

Page.canvas = (props) => <Ground orbit />;

export async function getStaticProps() {
  return { props: { title: 'ground' } };
}
