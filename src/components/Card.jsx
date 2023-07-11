function Card({ children }) {
  return (
    <div className='p-2 border border-gray-200  dark:border-dark-gray-700 rounded-md flex flex-col gap-2 bg-gray-100 dark:bg-dark-gray-900'>
      {children}
    </div>
  );
}

export default Card;
