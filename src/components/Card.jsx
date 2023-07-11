function Card({ children }) {
  return (
    <div className='p-2 border border-gray-200 rounded-md flex flex-col gap-2 bg-gray-100'>
      {children}
    </div>
  );
}

export default Card;
