import type { NextPage } from 'next';
import Codemirror from '../components/codemirror/editor';

const Home: NextPage = () => {
  const initialValue = '# I wanna be editor';

  return (
    <div className="h-screen bg-gray-800">
      <h1 className="text-center text-6xl font-mono font-extrabold text-gray-300 tracking-tight p-12">
        CodeMirror Sample
      </h1>
      <Codemirror initialValue={initialValue} />
    </div>
  );
};

export default Home;
