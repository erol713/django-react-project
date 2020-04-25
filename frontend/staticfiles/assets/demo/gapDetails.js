$("document").ready(function () {
  $.get("dpw", function (data) {
    for (var key in data) {
      var instl = [];
      var used = [];
      var lic = [];

      for (var k in data[key][0]) {
        instl.push(data[key][0][k]);
      }
      for (var k in data[key][1]) {
        used.push(data[key][1][k]);
      }
      for (var k in data[key][2]) {
        lic.push(data[key][2][k]);
      }
      console.log(lic);

      var myConfigXe = {
        type: "bar",
        plot: {
          "bars-overlap": "100%",

          tooltip: {
            fontSize: "15",
            fontFamily: "Open Sans",
            padding: "5 10",
            text: "%v",
          },
        },
        "scale-x": {
          values: lic,
          item: {
            "font-angle": -45,
          },
        },
        "scale-y": {
          progression: "log",
        },
        series: [
          {
            //plot 0 values
            values: instl,
            alpha: 0.5,
            "hover-state": {
              visible: true,
            },
          },

          {
            //plot 1 values
            values: used,
            "background-color": "#008aad",
            alpha: 0.9,
            "bar-width": "40%",
            "hover-state": {
              visible: true,
            },
          },
        ],
      };

      $("#gapDetails").zingchart({
        id: "gapDetails",
        data: myConfigXe,
        height: "100%",
        width: "100%",
      });
    }
  });
});
