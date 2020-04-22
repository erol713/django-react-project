var myConfigXe = {
  type: "bar",

  plot: {
    "bars-overlap": "100%",
  },
  "value-box": {
    text: "%vt ",
    visible: true,
    "font-color": "white",
    "font-size": "10px",
    decimals: 2,
    angle: -90,
    placement: "middle",
  },
  "scale-x": {
    label: {
      text: "Gap details",
    },
  },
  series: [
    {
      values: [70, 50, 75, 51, 70, 73],
      "background-color": "#2cacc9",
      alpha: 0.5,
      "hover-state": {
        visible: true,
      },
    },

    {
      values: [73, 77, 91, 86, 67, 76],
      "background-color": "#008aad",
      alpha: 0.9,
      "bar-width": "40%",
    },
  ],
};

zingchart.render({
  id: "gapDetails",
  data: myConfigXe,
  height: "100%",
  width: "100%",
});
