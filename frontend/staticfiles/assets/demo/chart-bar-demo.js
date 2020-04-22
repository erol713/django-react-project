var vBarConfig = {
  type: "vbar",
  legend: {
    marker: {
      cursor: "hand",
    },
    item: {
      cursor: "hand",
    },
    "border-color": "none",
    align: "center",
    "vertical-align": "bottom",
    "max-items": 4,
    overflow: "page",
    "page-on": {
      "background-color": "black",
      "border-width": 1,
      "border-color": "black",
    },
    "page-off": {
      "background-color": "#ffe6e6",
      "border-width": 1,
      "border-color": "black",
    },
    "page-status": {
      "font-color": "black",
      "font-size": 11,
      "font-family": "Georgia",
      "background-color": "#ffe6e6",
    },
    "toggle-action": "none",
  },
  plotarea: {
    adjustLayout: true,
    margin: "dynamic",
  },
  "scale-x": {
    "auto-fit": true,
    "line-width": 1,
    "items-overlap": true,
    values: ["Barcelona", "Madrid", "Zaragoza", "Sevilla"],
    item: {
      angle: 0,
      "wrap-text": true,
    },
    label: {
      text: "Locations",
    },
  },
  "scale-y": {
    "ref-line": {
      visible: true,
      "line-style": "solid",
      "items-overlap": true,
    },
    guide: {
      "line-style": "solid",
    },
  },
  plot: {
    "value-box": {
      text: "%vt ",
      visible: true,
      "font-color": "white",
      "font-size": "10px",
      decimals: 2,
      angle: -90,
      placement: "middle",
    },
    animation: {
      effect: "ANIMATION_SLIDE_BOTTOM",
      sequence: "0",
      speed: "800",
      delay: "800",
    },
  },
  series: [
    {
      values: [22, 45, 10, 4],
      "background-color": "#2cacc9",
    },
  ],
};

zingchart.render({
  id: "myBarChart",
  data: vBarConfig,
  height: "100%",
  width: "100%",
});
