import type { NextPage } from 'next';
import Codemirror from '../components/codemirror/editor';

const Home: NextPage = () => {
  const initialValue = '# I am Editor?';

  return (
    <div className="h-screen">
      <h1 className="text-center text-6xl font-mono font-extrabold tracking-tight p-12">CodeMirror Sample</h1>
      <Codemirror initialValue={initialValue} />
    </div>
  );
};

export default Home;
