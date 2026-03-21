window['visualmodel_exampleA_options'] = {
    attributeDefaults: new Map([["*", { // here * means: for every datasource; you also can name the datasource
                xFactor: 1,
                yFactor: 1,
                width: 50,
                widthFactor: 1,
                height: 50,
                heightFactor: 1,
                rotation: 0,
                fillcolor: "",
                borderColor: "red", // Makes all boxes have a red border
                visuMargin: 10,
                labelFrontFamily: "Arial",
                labelFrontStyle: "Arial",
                labelFrontSize: 12,
                labelPadding: 2,
                labelStrokeWidth: 0.3,
                labelFillColor: "#000",
                labelBorderColor: "#000",
                conLinecalc: "direct",
                conColor: "#000",
                conWidth: 1,
                conTension: 0.5,
                kind: "arrow" // Makes all arrow have arrow style (Boxes not effected, because they do not know a kind arrow)
            }]])
};