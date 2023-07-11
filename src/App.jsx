import { useState } from 'react';
import Card from './components/Card';
import ValueCard from './components/ValueCard.jsx';
import Preview from './components/Preview.jsx';
import CodeSnippets from './components/CodeSnippets.jsx';
import ToggleDarkMode from './components/ToggleDarkMode.jsx';

function App() {
  const [inset, setInset] = useState(false);
  const [color, setcolor] = useState('#00ff00');
  const [width, setwidth] = useState(200);
  const [height, setheight] = useState(150);
  const [x, setx] = useState(20);
  const [y, sety] = useState(20);
  const [blur, setblur] = useState(20);
  const [spread, setspread] = useState(0);

  const insetFalseStyles =
    'bg-gray-50 border px-4 py-1 rounded text-gray-400  ';
  const insetTrueStyles =
    'bg-gray-200 border border-gray-500 px-4 py-1 rounded text-gray-700  ';

  return (
    <div className='bg-bg dark:bg-dark-bg'>
      <div className=' md:max-w-5xl p-4 md:mx-auto '>
        <div
          className='flex items-end gap-2 text-lg font-bold
      text-primary dark:text-dark-primary
      '
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='32'
            height='32'
            viewBox='0 0 24 24'
          >
            <path
              fill='currentColor'
              d='M3 3h15v15H3V3m16 16h2v2h-2v-2m0-3h2v2h-2v-2m0-3h2v2h-2v-2m0-3h2v2h-2v-2m0-3h2v2h-2V7m-3 12h2v2h-2v-2m-3 0h2v2h-2v-2m-3 0h2v2h-2v-2m-3 0h2v2H7v-2Z'
            />
          </svg>
          <h1>Shadow Tool</h1>
          <ToggleDarkMode />
        </div>

        <div className='  px-2 py-4 m-2 rounded'>
          <h1 className='text-sm text-center '>Preview:</h1>
          <div className=' flex justify-center items-center aspect-video md:aspect-auto p-4 md:h-[20rem]'>
            <Preview
              width={width}
              height={height}
              inset={inset}
              color={color}
              x={x}
              y={y}
              blur={blur}
              spread={spread}
            />
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-700 dark:text-dark-black'>
            <Card className=''>
              <div className='flex   items-center justify-center  gap-4 bg-gray-50 dark:bg-dark-gray-600 h-[5rem]'>
                <button
                  className={inset ? insetTrueStyles : insetFalseStyles}
                  onClick={() => setInset(!inset)}
                >
                  inset
                </button>

                <div className='items-center flex gap-2'>
                  <span>color</span>
                  <input
                    type='color'
                    className='rounded-md overflow-hidden px-1'
                    onChange={(e) => setcolor(e.target.value)}
                    value={color}
                  />
                </div>
              </div>
            </Card>
            <Card>
              <ValueCard label='x offset' value={x} setvalue={setx} />
              <ValueCard label='y offset' value={y} setvalue={sety} />
            </Card>
            <Card>
              <ValueCard label='width' value={width} setvalue={setwidth} />
              <ValueCard label='height' value={height} setvalue={setheight} />
            </Card>
            <Card>
              <ValueCard label='blur' value={blur} setvalue={setblur} />
              <ValueCard label='spread' value={spread} setvalue={setspread} />
            </Card>
          </div>
        </div>
        <CodeSnippets
          width={width}
          height={height}
          inset={inset}
          color={color}
          x={x}
          y={y}
          blur={blur}
          spread={spread}
        />
      </div>
    </div>
  );
}

export default App;
