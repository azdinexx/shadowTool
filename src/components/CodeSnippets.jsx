import { useEffect, useState } from 'react';

function CodeSnippets({ inset, color, x, y, blur, spread }) {
  const [copied, setcopied] = useState(false);

  async function copyToClipboard(text) {
    try {
      await navigator.clipboard.writeText(text);
      setcopied(true);
    } catch (error) {
      console.error('Failed to copy text:', error);
    }
  }

  const textToCopy = `${
    inset ? 'inset' : ''
  } ${x}px ${y}px ${blur}px ${spread}px ${color} ;`;

  useEffect(() => {
    setcopied(false);
  }, [inset, color, x, y, blur, spread]);
  return (
    <div className='rounded-lg overflow-hidden'>
      <div className='flex'>
        <div
          className=' bg-gray-900 py-2 px-6 text-white rounded-tr-lg
        relative
        after:absolute after:content-[""] after:bottom-0 after:-right-2   after:w-2 after:h-2 after:bg-gray-900
        before:absolute before:content-[""] before:bottom-0 before:-right-2 before:z-10 before:w-2 before:h-2 before:bg-white before:dark:bg-dark-bg before:rounded-bl-3xl
        before:rounded-tr-2xl after:rounded-tr-full
        '
        >
          css
        </div>
        <div className=' bg-gray-800 py-2 px-6 m-1 text-gray-200   rounded-lg'>
          tailwind
        </div>
      </div>
      <div className=' bg-gray-900 p-4   text-gray-100 rounded-tr-lg relative h-20   flex items-center justify-center'>
        <span>
          <span className='text-purple-500'>box-shadow : &nbsp;</span>
          {`${inset ? 'inset' : ''} ${x}px ${y}px ${blur}px ${spread}px `}
          <span style={{ color }}>{`${color} ;`}</span>
        </span>
        <div
          className='absolute top-2 right-4 text-green-500  bg-white p-1 rounded-lg hover:bg-gray-200 cursor-pointer'
          onClick={() => copyToClipboard(textToCopy)}
        >
          {copied ? (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='20'
              height='20'
              viewBox='0 0 24 24'
            >
              <path
                fill='currentColor'
                d='m13.3 19.26l5.66-5.65l2.12 2.12l-5.66 5.65l-2.12-2.12m3.2-8.13l-3.1-3.08a1.68 1.68 0 0 0-.4-.29l-1.12-4.29a1.001 1.001 0 0 0-1.94.49L11 8.03L8.67 3.19c-.23-.5-.83-.69-1.33-.48c-.5.24-.71.84-.47 1.34l1.69 3.54l-3.37-3.34c-.39-.39-1.03-.39-1.42 0c-.39.4-.38 1.03.01 1.42l3.72 3.7l-.7.27l-1.08.43l-1.91 1.32s-.81 1.05-.88 1.5c-.08.45.79 2.71.79 2.71h.01c.16.34.5.58.9.58a1 1 0 0 0 1-1c0-.1-.03-.18-.06-.27l.02-.01L5 13.17l1.23-.98c.47.02 1.48.1 1.97.13c2.73 2.45.15 3.41.15 3.41l-3.46 1.06l-.17.14a.94.94 0 0 0-.3.75l.02 1.07l6.43-.5c.38.01.74-.13 1.02-.4l4.61-4.6c.53-.54.55-1.55 0-2.12Z'
              />
            </svg>
          ) : (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='20'
              height='20'
              viewBox='0 0 24 24'
            >
              <path
                fill='currentColor'
                d='M19 21H8V7h11m0-2H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2m-3-4H4a2 2 0 0 0-2 2v14h2V3h12V1Z'
              />
            </svg>
          )}
        </div>
      </div>
    </div>
  );
}

export default CodeSnippets;
