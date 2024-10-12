import dynamic from 'next/dynamic';

const StarsCanvas = dynamic(() => import('./starBackground'), {
  ssr: false,
});

const StarsCanvasWrapper = () => {
  return <StarsCanvas />;
};

export default StarsCanvasWrapper;