const Graph = ({ param, color, tot }) => {
  return (
    <>
      <div className="graph">
        <p>{param}</p>
        <div
          style={{
            height:
              param > 9
                ? `${(param / (tot ? 120 : 30)) * 2.5}rem`
                : `${(param / 9) * 2.5}rem`,
            backgroundColor: color,
          }}
        ></div>
      </div>
    </>
  );
};

export default Graph;
