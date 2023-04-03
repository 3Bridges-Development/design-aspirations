const returnLineBreaks = (text) => {
  if (text.includes("<br/>")) {
    return text.split("<br/>").map((innerText, i) => {
      const lineBreakStyle = {
        display: "block",
        minHeight: "24px",
      };

      return (
        <span key={i} style={lineBreakStyle}>
          {innerText}
        </span>
      );
    });
  } else {
    return text;
  }
};

export default returnLineBreaks;
