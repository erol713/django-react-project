window.addEventListener("load", () => {
  var myConfigXe = {
    type: "bar",
    plot: {
      "bars-overlap": "100%",

      rules: [
        {
          rule: "%plot-0-value > %plot-1-value",
          backgroundColor: "green",
        },
        {
          rule: "%plot-0-value < %plot-1-value",
          backgroundColor: "red",
        },
      ],

      tooltip: {
        fontSize: "15",
        fontFamily: "Open Sans",
        padding: "5 10",
        text: "%plot-0-value\n licensed, %plot-1-value used",
      },
    },
    scaleX: {
      label: {
        text: "Gap details",
      },
    },
    series: [
      {
        //plot 0 values
        values: [70, 50, 75, 51, 70, 73],
        alpha: 0.5,
        "hover-state": {
          visible: true,
        },
      },

      {
        //plot 1 values
        values: [80, 77, 91, 86, 67, 76],
        "background-color": "#008aad",
        alpha: 0.9,
        "bar-width": "40%",
        "hover-state": {
          visible: true,
        },
      },
    ],
  };

  zingchart.render({
    id: "gapDetails",
    data: myConfigXe,
    height: "100%",
    width: "100%",
  });
});
