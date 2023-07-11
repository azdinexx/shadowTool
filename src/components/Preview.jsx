const Preview = ({ width, height, inset, color, x, y, blur, spread }) => {
  console.log('render');

  return (
    <div>
      <div
        className='border '
        style={{
          width: `${width}px`,
          height: `${height}px`,
          boxShadow: ` ${
            inset ? 'inset' : ''
          } ${x}px ${y}px ${blur}px ${spread}px ${color}`,
        }}
      />
    </div>
  );
};

export default Preview;
