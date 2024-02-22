function JsonStringify() {
    const squares = [1, 4, 16, 25, 36];
    return (
      <>
        <h3>JSON Stringify</h3>
        squares_unstringified = {squares}<br />
        squares = {JSON.stringify(squares)}
      </>
    );
  }
  export default JsonStringify;