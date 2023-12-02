const CustomCursor = ({ position }) => {
    const cursorSize = 20; 
    console.log(cursorSize)
  
    return (
      <div
        className="custom-cursor"
        style={{
          left: position.x - cursorSize / 2 + 'px',
          top: position.y - cursorSize / 2 + 'px',
        }}
      ></div>
    );
  };

  export default CustomCursor