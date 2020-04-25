$("document").ready(function () {
  $.get("dp", function (data) {
    var res = JSON.parse(data);
    var prod = [];
    var nonp = [];
    var lic = [];

    for (var k in res.Production) {
      prod.push(res.Production[k]);
    }
    for (var k in res["Non-production"]) {
      nonp.push(res["Non-production"][k]);
    }
    for (var k in res.Licenses) {
      lic.push(res.Licenses[k]);
    }

    console.log(lic);

    $("#myBarChart").zingchart({
      height: "100%",
      width: "100%",
      id: "myBarChart",
      data: {
        type: "bar",
        plotarea: {
          adjustLayout: 1,
          margin: "dynamic",
        },

        plot: {
          animation: {
            effect: "ANIMATION_SLIDE_BOTTOM",
            sequence: "0",
            speed: "800",
            delay: "800",
          },
          "value-box": {
            text: "%vt ",
            visible: true,
            "font-color": "white",
            "font-size": "10px",
            decimals: 2,
            placement: "middle",
          },
          tooltip: {
            text: "%v",
          },
        },
        legend: {
          "toggle-action": "hide",
          header: {
            text: "Environment",
          },
          item: {
            cursor: "pointer",
          },
          draggable: true,
          "drag-handler": "icon",
        },
        "scale-x": {
          values: lic,
        },
        series: [
          {
            values: prod,
            text: "Production",
            "background-color": "#008aad",
          },
          {
            values: nonp,
            text: "Development",
            "background-color": "#2cacc9",
          },
        ],
      },
    });
  });
});
