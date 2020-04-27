var vBarConfig = {
  graphset: [
    {
      x: "0%",
      y: "0%",
      type: "bar",
      tooltip: {
        text: "%v%",
        fontSize: "15",
      },

      plotarea: {
        margin: "10px 10px 80px 20px",
      },
      "scale-x": {
        values: [
          "Data protector",
          "SiteScope",
          "NNM",
          "OM & OpsBridge",
          "Ops Orchestration",
          "BSM",
          "PPM",
          "ArcSight",
          "UCMDB",
        ],
        item: {
          "font-angle": -45,
          "wrap-text": true,
          fontSize: "9",
        },
        "max-items": 99,
        guide: {
          visible: false,
        },
      },
      plot: {
        "bars-overlap": "100%",
        rules: [],
        animation: {
          effect: "ANIMATION_SLIDE_BOTTOM",
          sequence: "0",
          speed: "800",
          delay: "800",
        },
      },

      "scale-y": {
        values: "0:100:25",
        "min-value": 0,
        guide: {
          visible: false,
        },
      },
      series: [
        {
          values: [100, 100, 100, 100, 100, 100, 80, 0, 100],
          "z-index": 1,
          "background-color": "#008aad",
        },
        {
          //just to make the background gray...
          values: [100, 100, 100, 100, 100, 100, 100, 100, 100],
          "background-color": "#E8E7E8",
          maxTrackers: 0,
          "z-index": 0,
        },
      ],
    },
  ],
};

/*zingchart.render({
  id: "myBarChart",
  data: vBarConfig,
  height: "100%",
  width: "100%",
});
*/
