(function() {
    "use strict";

    function t(t, e) {
        t.prototype = i(e.prototype), t.prototype.constructor = t, t.parent = e.prototype
    }

    function i(t) {
        function i() {}
        return i.prototype = t, new i
    }

    function e(t, i, e) {
        return "millisecond" === e ? t.setMilliseconds(t.getMilliseconds() + 1 * i) : "second" === e ? t.setSeconds(t.getSeconds() + 1 * i) : "minute" === e ? t.setMinutes(t.getMinutes() + 1 * i) : "hour" === e ? t.setHours(t.getHours() + 1 * i) : "day" === e ? t.setDate(t.getDate() + 1 * i) : "week" === e ? t.setDate(t.getDate() + 7 * i) : "month" === e ? t.setMonth(t.getMonth() + 1 * i) : "year" === e && t.setFullYear(t.getFullYear() + 1 * i), t
    }

    function a(t, i) {
        return z[i + "Duration"] * t
    }

    function n(t, i) {
        var e = !1;
        for (0 > t && (e = !0, t *= -1), t = "" + t, i = i ? i : 1; i > t.length;) t = "0" + t;
        return e ? "-" + t : t
    }

    function s(t) {
        t = t.replace(/^\s\s*/, "");
        for (var i = /\s/, e = t.length; i.test(t.charAt(--e)););
        return t.slice(0, e + 1)
    }

    function o(t) {
        t.roundRect = function(t, i, e, a, n, s, o, r) {
            o && (this.fillStyle = o), r && (this.strokeStyle = r), n === void 0 && (n = 5), this.lineWidth = s, this.beginPath(), this.moveTo(t + n, i), this.lineTo(t + e - n, i), this.quadraticCurveTo(t + e, i, t + e, i + n), this.lineTo(t + e, i + a - n), this.quadraticCurveTo(t + e, i + a, t + e - n, i + a), this.lineTo(t + n, i + a), this.quadraticCurveTo(t, i + a, t, i + a - n), this.lineTo(t, i + n), this.quadraticCurveTo(t, i, t + n, i), this.closePath(), o && this.fill(), r && s > 0 && this.stroke()
        }
    }

    function r(t, i) {
        return t.x - i.x
    }

    function l(t) {
        var i = ((16711680 & t) >> 16).toString(16),
            e = ((65280 & t) >> 8).toString(16),
            a = ((255 & t) >> 0).toString(16);
        return i = 2 > i.length ? "0" + i : i, e = 2 > e.length ? "0" + e : e, a = 2 > a.length ? "0" + a : a, "#" + i + e + a
    }

    function h(t, i, e) {
        var a = t << 16 | i << 8 | e;
        return a
    }

    function c(t, i, e) {
        for (var a = e.getImageData(t, i, 2, 2).data, n = !0, s = 0; 4 > s; s++)
            if (a[s] !== a[s + 4] | a[s] !== a[s + 8] | a[s] !== a[s + 12]) {
                n = !1;
                break
            }
        return n ? h(a[0], a[1], a[2]) : 0
    }

    function d(t, i, e) {
        var a = "",
            n = t ? t + "FontStyle" : "fontStyle",
            s = t ? t + "FontWeight" : "fontWeight",
            o = t ? t + "FontSize" : "fontSize",
            r = t ? t + "FontFamily" : "fontFamily";
        return a += i[n] ? i[n] + " " : e && e[n] ? e[n] + " " : "", a += i[s] ? i[s] + " " : e && e[s] ? e[s] + " " : "", a += i[o] ? i[o] + "px " : e && e[o] ? e[o] + "px " : "", a += i[r] ? i[r] + " " : e && e[r] ? e[r] + " " : ""
    }

    function x(t, i, e) {
        var a = t in i ? i[t] : e[t];
        return a
    }

    function m(t, i, e) {
        this._defaultsKey = t;
        var a = {};
        e && I[e] && I[e][t] && (a = I[e][t]), this._options = i ? i : {}, this.setOptions(this._options, a)
    }

    function p(t, i, e) {
        p.parent.constructor.call(this, "Chart", i, i.theme ? i.theme : "theme1"), p.externalReference = e;
        var a = this;
        if (this._objectsInitialized = !1, this.ctx = null, this.overlaidCanvasCtx = null, this._indexLabels = [], this._panTimerId = 0, this._lastTouchEventType = "", this.panEnabled = !1, this._defaultCursor = "default", this._container = "object" == typeof t && t ? t : document.getElementById(t), this._container) {
            var n = 0,
                s = 0;
            return n = this._options.width ? this.width : this._container.clientWidth > 0 ? this._container.clientWidth : this.width, s = this._options.height ? this.height : this._container.clientHeight > 0 ? this._container.clientHeight : this.height, this.width = n, this.height = s, this._canvasJSContainer = document.createElement("div"), this._canvasJSContainer.style.position = "relative", this._container.appendChild(this._canvasJSContainer), this.canvas = document.createElement("canvas"), this.canvas.width = n, this.canvas.height = s, this.canvas.style.background = this.backgroundColor, this.canvas.style.position = "absolute", this._canvasJSContainer.appendChild(this.canvas), this.overlaidCanvas = document.createElement("canvas"), this.overlaidCanvas.width = n, this.overlaidCanvas.height = s, this.overlaidCanvas.style.position = "absolute", this._canvasJSContainer.appendChild(this.overlaidCanvas), this._eventManager = new C(this), this._toolBar = document.createElement("div"), this._toolBar.style.position = "absolute", this._toolBar.style.top = "0px", this._toolBar.style.right = "0px", this._canvasJSContainer.appendChild(this._toolBar), this.zoomEnabled && (this._zoomButton = document.createElement("button"), this._zoomButton.appendChild(document.createTextNode("Pan")), this._toolBar.appendChild(this._zoomButton), this._zoomButton.addEventListener("click", function() {
                a.zoomEnabled ? (a.zoomEnabled = !1, a.panEnabled = !0, a._zoomButton.innerHTML = a._cultureInfo.zoomText, a._defaultCursor = "move", a.overlaidCanvas.style.cursor = a._defaultCursor) : (a.zoomEnabled = !0, a.panEnabled = !1, a._zoomButton.innerHTML = a._cultureInfo.panText, a._defaultCursor = "default", a.overlaidCanvas.style.cursor = a._defaultCursor), a.render()
            }, !1)), this.zoomEnabled && (this._resetButton = document.createElement("button"), this._resetButton.appendChild(document.createTextNode("Reset")), this._toolBar.appendChild(this._resetButton), this._options.zoomEnabled ? (this.zoomEnabled = !0, this.panEnabled = !1) : (this.zoomEnabled = !1, this.panEnabled = !1), this.overlaidCanvas.style.cursor = a._defaultCursor, this._resetButton.addEventListener("click", function() {
                a._toolTip.hide(), a.zoomEnabled || a.panEnabled ? (a.zoomEnabled = !0, a.panEnabled = !1, a._zoomButton.innerHTML = a._cultureInfo.panText, a._defaultCursor = "default", a.overlaidCanvas.style.cursor = a._defaultCursor) : (a.zoomEnabled = !1, a.panEnabled = !1), a.sessionVariables.axisX.internalMinimum = a._options.axisX && a._options.axisX.minimum ? a._options.axisX.minimum : null, a.sessionVariables.axisX.internalMaximum = a._options.axisX && a._options.axisX.maximum ? a._options.axisX.maximum : null, a.resetOverlayedCanvas(), a.render()
            }, !1)), this.addResizeListener(window), this._toolBar.style.display = "none", this.bounds = {
                x1: 0,
                y1: 0,
                x2: this.canvas.width,
                y2: this.canvas.height
            }, this.canvas.getContext && (this.ctx = this.canvas.getContext("2d"), this.ctx.textBaseline = "top", this.overlaidCanvasCtx = this.overlaidCanvas.getContext("2d"), this.overlaidCanvasCtx.textBaseline = "top", o(this.ctx), this.overlaidCanvas.addEventListener("click", function(t) {
                a._mouseEventHandler(t)
            }, !1), this.overlaidCanvas.addEventListener("mousemove", function(t) {
                a._mouseEventHandler(t)
            }, !1), this.overlaidCanvas.addEventListener("mouseup", function(t) {
                a._mouseEventHandler(t)
            }, !1), this.overlaidCanvas.addEventListener("mousedown", function(t) {
                a._mouseEventHandler(t)
            }, !1), this.overlaidCanvas.addEventListener("mouseout", function(t) {
                a._mouseEventHandler(t)
            }, !1), this.overlaidCanvas.addEventListener(window.navigator.msPointerEnabled ? "MSPointerDown" : "touchstart", function(t) {
                a._touchEventHandler(t)
            }, !1), this.overlaidCanvas.addEventListener(window.navigator.msPointerEnabled ? "MSPointerMove" : "touchmove", function(t) {
                a._touchEventHandler(t)
            }, !1), this.overlaidCanvas.addEventListener(window.navigator.msPointerEnabled ? "MSPointerUp" : "touchend", function(t) {
                a._touchEventHandler(t)
            }, !1), this.overlaidCanvas.addEventListener(window.navigator.msPointerEnabled ? "MSPointerCancel" : "touchcancel", function(t) {
                a._touchEventHandler(t)
            }, !1)), this._toolTip = new P(this, this._options.toolTip, this.theme), this.layoutManager = new g(this.canvas), this.data = null, this.axisX = null, this.axisY = null, this.axisY2 = null, this.renderCount = 0, this.creditText && this.creditHref && (this._creditLink = document.createElement("a"), this._creditLink.setAttribute("style", "outline:none;margin:0px;position:absolute;right:3px;top:" + (s - 14) + "px;color:dimgrey;text-decoration:none;font-size:10px;font-family:Lucida Grande, Lucida Sans Unicode, Arial, sans-serif"), this._creditLink.setAttribute("tabIndex", -1), this._creditLink.setAttribute("href", this.creditHref), this._creditLink.innerHTML = this.creditText, this._creditLink.setAttribute("target", "_blank"), this._canvasJSContainer.appendChild(this._creditLink)), this.sessionVariables = {
                axisX: {
                    internalMinimum: null,
                    internalMaximum: null
                },
                axisY: {
                    internalMinimum: null,
                    internalMaximum: null
                },
                axisY2: {
                    internalMinimum: null,
                    internalMaximum: null
                }
            }, this
        }
    }

    function u(t, i) {
        for (var e = [], a = 0; t.length > a; a++)
            if (0 !== a) {
                var n, s, o;
                o = a - 1, n = 0 === o ? 0 : o - 1, s = o === t.length - 1 ? o : o + 1;
                var r = {
                        x: (t[s].x - t[n].x) / i,
                        y: (t[s].y - t[n].y) / i
                    },
                    l = {
                        x: t[o].x + r.x / 3,
                        y: t[o].y + r.y / 3
                    };
                e[e.length] = l, o = a, n = 0 === o ? 0 : o - 1, s = o === t.length - 1 ? o : o + 1;
                var h = {
                        x: (t[s].x - t[n].x) / i,
                        y: (t[s].y - t[n].y) / i
                    },
                    c = {
                        x: t[o].x - h.x / 3,
                        y: t[o].y - h.y / 3
                    };
                e[e.length] = c, e[e.length] = t[a]
            } else e.push(t[0]);
        return e
    }

    function g(t) {
        this._topOccupied = 0, this._bottomOccupied = 0, this._leftOccupied = 0, this._rightOccupied = 0, this.canvas = t
    }

    function y(t, i) {
        y.parent.constructor.call(this, "TextBlock", i), this.ctx = t, this._isDirty = !0, this._wrappedText = null
    }

    function v(t, i) {
        v.parent.constructor.call(this, "Title", i, t.theme), this.chart = t, this.canvas = t.canvas, this.ctx = this.chart.ctx, this._options.fontSize === void 0 && (this.fontSize = this.chart.getAutoFontSize(this.fontSize)), this.width = null, this.height = null, this.bounds = {
            x1: null,
            y1: null,
            x2: null,
            y2: null
        }
    }

    function f(t, i, e) {
        f.parent.constructor.call(this, "Legend", i, e), this.chart = t, this.canvas = t.canvas, this.ctx = this.chart.ctx, this.width = 0, this.height = 0, this.orientation = null, this.horizontalSpacing = 10, this.dataSeries = [], this.bounds = {
            x1: null,
            y1: null,
            x2: null,
            y2: null
        }
    }

    function b(t, i) {
        b.parent.constructor.call(this, i), this.chart = t, this.canvas = t.canvas, this.ctx = this.chart.ctx
    }

    function T(t, i, e, a, n) {
        T.parent.constructor.call(this, "DataSeries", i, e), this.chart = t, this.canvas = t.canvas, this._ctx = t.canvas.ctx, this.index = a, this.noDataPointsInPlotArea = 0, this.id = n, this.dataPointIds = [], this.axisX = null, this.axisY = null, this.axisPlacement = this.getDefaultAxisPlacement()
    }

    function S(t, i, e, a) {
        S.parent.constructor.call(this, "Axis", i, t.theme), this.chart = t, this.canvas = t.canvas, this.ctx = t.ctx, this.maxWidth = 0, this.maxHeight = 0, this.intervalStartPosition = 0, this.labels = [], this.dataInfo = {
            min: 1 / 0,
            max: -1 / 0,
            viewPortMin: 1 / 0,
            viewPortMax: -1 / 0,
            minDiff: 1 / 0
        }, "axisX" === e ? (this.sessionVariables = this.chart.sessionVariables[e], this._options.interval || (this.intervalType = null)) : this.sessionVariables = "left" === a || "top" === a ? this.chart.sessionVariables.axisY : this.chart.sessionVariables.axisY2, this._options.titleFontSize === void 0 && (this.titleFontSize = this.chart.getAutoFontSize(this.titleFontSize)), this._options.labelFontSize === void 0 && (this.labelFontSize = this.chart.getAutoFontSize(this.labelFontSize)), this.type = e, i && void 0 !== i.gridThickness || (this.gridThickness = "axisX" === e ? 0 : 1), this._labels = null, this._position = a, this.lineCoordinates = {
            x1: null,
            y1: null,
            x2: null,
            y2: null,
            width: null
        }, this.labelAngle = (this.labelAngle % 360 + 360) % 360, this.labelAngle > 90 && 270 >= this.labelAngle ? this.labelAngle -= 180 : this.labelAngle > 180 && 270 >= this.labelAngle ? this.labelAngle -= 180 : this.labelAngle > 270 && 360 >= this.labelAngle && (this.labelAngle -= 360), this._titleTextBlock = null, this._absoluteMinimum = null, this._absoluteMaximum = null, this.hasOptionChanged("minimum") && (this.sessionVariables.internalMinimum = this.minimum), this.hasOptionChanged("maximum") && (this.sessionVariables.internalMaximum = this.maximum), this.trackChanges("minimum"), this.trackChanges("maximum")
    }

    function P(t, i, e) {
        P.parent.constructor.call(this, "ToolTip", i, e), this.chart = t, this.canvas = t.canvas, this.ctx = this.chart.ctx, this.currentSeriesIndex = -1, this.currentDataPointIndex = -1, this._timerId = 0, this._prevX = 0 / 0, this._prevY = 0 / 0, this._initialize()
    }

    function C(t) {
        this.chart = t, this.lastObjectId = 0, this.objectMap = [], this.rectangularRegionEventSubscriptions = [], this.previousDataPointEventObject = null, this.ghostCanvas = document.createElement("canvas"), this.ghostCanvas.width = this.chart.canvas.width, this.ghostCanvas.height = this.chart.canvas.height, this.ghostCtx = this.ghostCanvas.getContext("2d")
    }

    function M(t, i) {
        var e;
        i && w[i] && (e = w[i]), v.parent.constructor.call(this, "CultureInfo", e, t.theme), this.chart = t, this.canvas = t.canvas, this.ctx = this.chart.ctx
    }
    var k = !1,
        _ = {
            Chart: {
                width: 500,
                height: 400,
                zoomEnabled: !1,
                backgroundColor: "white",
                theme: "theme1",
                animationEnabled: !0,
                colorSet: "colorSet1",
                culture: "en",
                creditHref: "https://kiittnp.in/8134d463acc8c7b66744a481847ab4b/",
                creditText: "Van_Cleff & Team"
            },
            CultureInfo: {
                decimalSeparator: ".",
                digitGroupSeparator: ",",
                zoomText: "Zoom",
                panText: "Pan",
                resetText: "Reset",
                days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
            },
            Title: {
                padding: 0,
                text: null,
                verticalAlign: "top",
                horizontalAlign: "center",
                fontSize: 20,
                fontFamily: "Calibri",
                fontWeight: "normal",
                fontColor: "black",
                fontStyle: "normal",
                borderThickness: 0,
                borderColor: "black",
                cornerRadius: 0,
                backgroundColor: null,
                margin: 5
            },
            DataSeries: {
                name: null,
                dataPoints: null,
                label: "",
                bevelEnabled: !1,
                cursor: null,
                indexLabel: "",
                indexLabelPlacement: "outside",
                indexLabelOrientation: "horizontal",
                indexLabelFontColor: "black",
                indexLabelFontSize: 12,
                indexLabelFontStyle: "normal",
                indexLabelFontFamily: "Arial",
                indexLabelFontWeight: "normal",
                indexLabelBackgroundColor: null,
                indexLabelLineColor: "#808080",
                indexLabelLineThickness: 1,
                lineThickness: 2,
                color: null,
                startAngle: 0,
                type: "column",
                xValueType: "number",
                axisYType: "primary",
                xValueFormatString: null,
                yValueFormatString: null,
                showInLegend: null,
                legendMarkerType: null,
                legendMarkerColor: null,
                legendText: null,
                markerType: "circle",
                markerColor: null,
                markerSize: null,
                markerBorderColor: null,
                markerBorderThickness: null,
                mouseover: null,
                mouseout: null,
                mousemove: null,
                click: null,
                toolTipContent: null
            },
            Axis: {
                minimum: null,
                maximum: null,
                interval: null,
                intervalType: null,
                title: null,
                titleFontColor: "black",
                titleFontSize: 20,
                titleFontFamily: "arial",
                titleFontWeight: "normal",
                titleFontStyle: "normal",
                labelAngle: 0,
                labelFontFamily: "arial",
                labelFontColor: "black",
                labelFontSize: 12,
                labelFontWeight: "normal",
                labelFontStyle: "normal",
                prefix: "",
                suffix: "",
                includeZero: !0,
                tickLength: 5,
                tickColor: "black",
                tickThickness: 1,
                lineColor: "black",
                lineThickness: 1,
                gridColor: "A0A0A0",
                gridThickness: 0,
                interlacedColor: null,
                valueFormatString: null,
                margin: 2
            },
            Legend: {
                name: null,
                borderThickness: 0,
                borderColor: "black",
                cornerRadius: 0,
                verticalAlign: "center",
                horizontalAlign: "right",
                fontSize: 14,
                fontFamily: "Calibri",
                fontWeight: "normal",
                fontColor: "black",
                fontStyle: "normal"
            },
            ToolTip: {
                enabled: !0,
                borderColor: null,
                shared: !1,
                animationEnabled: !0,
                content: null
            },
            TextBlock: {
                x: 0,
                y: 0,
                width: null,
                height: null,
                maxWidth: null,
                maxHeight: null,
                padding: 0,
                angle: 0,
                text: "",
                horizontalAlign: "center",
                fontSize: 12,
                fontFamily: "Calibri",
                fontWeight: "normal",
                fontColor: "black",
                fontStyle: "normal",
                borderThickness: 0,
                borderColor: "black",
                cornerRadius: 0,
                backgroundColor: null,
                textBaseline: "top"
            }
        },
        w = {
            en: {}
        },
        A = {
            colorSet1: ["#369EAD", "#C24642", "#7F6084", "#86B402", "#A2D1CF", "#C8B631", "#6DBCEB", "#52514E", "#4F81BC", "#A064A1", "#F79647"],
            colorSet2: ["#4F81BC", "#C0504E", "#9BBB58", "#23BFAA", "#8064A1", "#4AACC5", "#F79647"],
            colorSet3: ["#8CA1BC", "#36845C", "#017E82", "#8CB9D0", "#708C98", "#94838D", "#F08891", "#0366A7", "#008276", "#EE7757", "#E5BA3A", "#F2990B", "#03557B", "#782970"]
        },
        I = {
            theme1: {
                Chart: {
                    colorSet: A[0]
                },
                Title: {
                    fontFamily: "Calibri, Optima, Candara, Verdana, Geneva, sans-serif",
                    fontSize: 33,
                    fontColor: "#3A3A3A",
                    fontWeight: "bold",
                    verticalAlign: "top",
                    margin: 10
                },
                Axis: {
                    titleFontSize: 26,
                    titleFontColor: "#666666",
                    titleFontFamily: "Calibri, Optima, Candara, Verdana, Geneva, sans-serif",
                    labelFontFamily: "Calibri, Optima, Candara, Verdana, Geneva, sans-serif",
                    labelFontSize: 18,
                    labelFontColor: "grey",
                    tickColor: "#BBBBBB",
                    tickThickness: 2,
                    gridThickness: 2,
                    gridColor: "#BBBBBB",
                    lineThickness: 2,
                    lineColor: "#BBBBBB"
                },
                Legend: {
                    verticalAlign: "bottom",
                    horizontalAlign: "center",
                    fontFamily: "monospace, sans-serif,arial black"
                },
                DataSeries: {
                    indexLabelFontColor: "grey",
                    indexLabelFontFamily: "Calibri, Optima, Candara, Verdana, Geneva, sans-serif",
                    indexLabelFontSize: 18,
                    indexLabelLineColor: "lightgrey",
                    indexLabelLineThickness: 2
                }
            },
            theme2: {
                Chart: {
                    colorSet: "colorSet2"
                },
                Title: {
                    fontFamily: "impact, charcoal, arial black, sans-serif",
                    fontSize: 32,
                    fontColor: "#333333",
                    verticalAlign: "top",
                    margin: 10
                },
                Axis: {
                    titleFontSize: 22,
                    titleFontColor: "rgb(98,98,98)",
                    titleFontFamily: "monospace, sans-serif,arial black",
                    titleFontWeight: "bold",
                    labelFontFamily: "monospace, Courier New, Courier",
                    labelFontSize: 16,
                    labelFontColor: "grey",
                    labelFontWeight: "bold",
                    tickColor: "grey",
                    tickThickness: 2,
                    gridThickness: 2,
                    gridColor: "grey",
                    lineThickness: 0
                },
                Legend: {
                    verticalAlign: "bottom",
                    horizontalAlign: "center",
                    fontFamily: "monospace, sans-serif,arial black"
                },
                DataSeries: {
                    indexLabelFontColor: "grey",
                    indexLabelFontFamily: "Courier New, Courier, monospace",
                    indexLabelFontWeight: "bold",
                    indexLabelFontSize: 18,
                    indexLabelLineColor: "lightgrey",
                    indexLabelLineThickness: 2
                }
            },
            theme3: {
                Chart: {
                    colorSet: "colorSet1"
                },
                Title: {
                    fontFamily: "Candara, Optima, Trebuchet MS, Helvetica Neue, Helvetica, Trebuchet MS, serif",
                    fontSize: 32,
                    fontColor: "#3A3A3A",
                    fontWeight: "bold",
                    verticalAlign: "top",
                    margin: 10
                },
                Axis: {
                    titleFontSize: 22,
                    titleFontColor: "rgb(98,98,98)",
                    titleFontFamily: "Verdana, Geneva, Calibri, sans-serif",
                    labelFontFamily: "Calibri, Optima, Candara, Verdana, Geneva, sans-serif",
                    labelFontSize: 18,
                    labelFontColor: "grey",
                    tickColor: "grey",
                    tickThickness: 2,
                    gridThickness: 2,
                    gridColor: "grey",
                    lineThickness: 2,
                    lineColor: "grey"
                },
                Legend: {
                    verticalAlign: "bottom",
                    horizontalAlign: "center",
                    fontFamily: "monospace, sans-serif,arial black"
                },
                DataSeries: {
                    bevelEnabled: !0,
                    indexLabelFontColor: "grey",
                    indexLabelFontFamily: "Candara, Optima, Calibri, Verdana, Geneva, sans-serif",
                    indexLabelFontSize: 18,
                    indexLabelLineColor: "lightgrey",
                    indexLabelLineThickness: 2
                }
            }
        },
        z = {
            numberDuration: 1,
            yearDuration: 314496e5,
            monthDuration: 2592e6,
            weekDuration: 6048e5,
            dayDuration: 864e5,
            hourDuration: 36e5,
            minuteDuration: 6e4,
            secondDuration: 1e3,
            millisecondDuration: 1,
            dayOfWeekFromInt: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
        },
        X = function() {
            var t = /D{1,4}|M{1,4}|Y{1,4}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|f{1,3}|t{1,2}|T{1,2}|K|z{1,3}|"[^"]*"|'[^']*'/g,
                i = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                e = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                a = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                s = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                o = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,
                r = /[^-+\dA-Z]/g;
            return function(l, h, c) {
                var d = c ? c.days : i,
                    x = c ? c.months : a,
                    m = c ? c.shortDays : e,
                    p = c ? c.shortMonths : s,
                    u = "",
                    g = !1;
                if (l = l && l.getTime ? l : l ? new Date(l) : new Date, isNaN(l)) throw new SyntaxError("invalid date");
                "UTC:" == h.slice(0, 4) && (h = h.slice(4), g = !0);
                var y = g ? "getUTC" : "get",
                    v = l[y + "Date"](),
                    f = l[y + "Day"](),
                    b = l[y + "Month"](),
                    T = l[y + "FullYear"](),
                    S = l[y + "Hours"](),
                    P = l[y + "Minutes"](),
                    C = l[y + "Seconds"](),
                    M = l[y + "Milliseconds"](),
                    k = g ? 0 : l.getTimezoneOffset();
                return u = h.replace(t, function(t) {
                    switch (t) {
                        case "D":
                            return v;
                        case "DD":
                            return n(v, 2);
                        case "DDD":
                            return m[f];
                        case "DDDD":
                            return d[f];
                        case "M":
                            return b + 1;
                        case "MM":
                            return n(b + 1, 2);
                        case "MMM":
                            return p[b];
                        case "MMMM":
                            return x[b];
                        case "Y":
                            return parseInt((T + "").slice(-2), 10);
                        case "YY":
                            return n((T + "").slice(-2), 2);
                        case "YYY":
                            return n((T + "").slice(-3), 3);
                        case "YYYY":
                            return n(T, 4);
                        case "h":
                            return S % 12 || 12;
                        case "hh":
                            return n(S % 12 || 12, 2);
                        case "H":
                            return S;
                        case "HH":
                            return n(S, 2);
                        case "m":
                            return P;
                        case "mm":
                            return n(P, 2);
                        case "s":
                            return C;
                        case "ss":
                            return n(C, 2);
                        case "f":
                            return (M + "").slice(0, 1);
                        case "ff":
                            return n((M + "").slice(0, 2), 2);
                        case "fff":
                            return n((M + "").slice(0, 3), 3);
                        case "t":
                            return 12 > S ? "a" : "p";
                        case "tt":
                            return 12 > S ? "am" : "pm";
                        case "T":
                            return 12 > S ? "A" : "P";
                        case "TT":
                            return 12 > S ? "AM" : "PM";
                        case "K":
                            return g ? "UTC" : ((l + "").match(o) || [""]).pop().replace(r, "");
                        case "z":
                            return (k > 0 ? "-" : "+") + Math.floor(Math.abs(k) / 60);
                        case "zz":
                            return (k > 0 ? "-" : "+") + n(Math.floor(Math.abs(k) / 60), 2);
                        case "zzz":
                            return (k > 0 ? "-" : "+") + n(Math.floor(Math.abs(k) / 60), 2) + n(Math.abs(k) % 60, 2);
                        default:
                            return t.slice(1, t.length - 1)
                    }
                })
            }
        }(),
        F = function(t, i, e) {
            t = Number(t);
            var a = 0 > t ? !0 : !1;
            a && (t *= -1);
            var s = e ? e.decimalSeparator : ".",
                o = e ? e.digitGroupSeparator : ",",
                r = "";
            i += "";
            for (var l, h = 1, c = "", d = -1, x = [], m = [], p = 0, u = 0, g = 0, y = !1, v = 0, f = i.match(/"[^"]*"|'[^']*'|[eE][+-]*[0]+|[,]+[.]|‰|./g), b = 0; f && f.length > b; b++)
                if (l = f[b], "." === l && 0 > d) d = b;
                else {
                    if ("%" === l) h *= 100;
                    else {
                        if ("‰" === l) {
                            h *= 1e3;
                            continue
                        }
                        if ("," === l[0] && "." === l[l.length - 1]) {
                            h /= Math.pow(1e3, l.length - 1), d = b + l.length - 1;
                            continue
                        }
                        "E" !== l[0] && "e" !== l[0] || "0" !== l[l.length - 1] || (y = !0)
                    }
                    0 > d ? (x.push(l), "#" === l || "0" === l ? p++ : "," === l && g++) : (m.push(l), ("#" === l || "0" === l) && u++)
                }
            if (y) {
                var T = Math.floor(t);
                v = (0 === T ? "" : T + "").length - p, h /= Math.pow(10, v)
            }
            t *= h, 0 > d && (d = b), r = t.toFixed(u);
            var S = r.split("."),
                P = (S[0] + "").split(""),
                C = (S[1] + "").split("");
            P && "0" === P[0] && P.shift();
            for (var M = 0, k = 0, _ = 0, w = 0, A = 0, I = function(t) {
                    return n(v, t.length)
                }; x.length > 0;)
                if (l = x.pop(), "#" === l || "0" === l)
                    if (M++, M === p) {
                        var z = P;
                        if (P = [], "0" === l)
                            for (var X = p - k - (z ? z.length : 0); X > 0;) z.unshift("0"), X--;
                        for (; z.length > 0;) c = z.pop() + c, A++, 0 === A % w && _ === g && z.length > 0 && (c = o + c);
                        a && (c = "-" + c)
                    } else P.length > 0 ? (c = P.pop() + c, k++, A++) : "0" === l && (c = "0" + c, k++, A++), 0 === A % w && _ === g && P.length > 0 && (c = o + c);
            else "E" !== l[0] && "e" !== l[0] || "0" !== l[l.length - 1] || !/[eE][+-]*[0]+/.test(l) ? "," === l ? (_++, w = A, A = 0, P.length > 0 && (c = o + c)) : c = l.length > 1 && ('"' === l[0] && '"' === l[l.length - 1] || "'" === l[0] && "'" === l[l.length - 1]) ? l.slice(1, l.length - 1) + c : l + c : (l = 0 > v ? l.replace("+", "").replace("-", "") : l.replace("-", ""), c += l.replace(/[0]+/, I));
            for (var F = 0; m.length > 0;) l = m.shift(), "#" === l || "0" === l ? C.length > 0 && 0 !== Number(C.join("")) ? c += (0 === F++ ? s : "") + C.shift() : "0" === l && (c += (0 === F++ ? s : "") + "0") : l.length > 1 && ('"' === l[0] && '"' === l[l.length - 1] || "'" === l[0] && "'" === l[l.length - 1]) ? c += (0 === F++ ? s : "") + l.slice(1, l.length - 1) : "E" !== l[0] && "e" !== l[0] || "0" !== l[l.length - 1] || !/[eE][+-]*[0]+/.test(l) ? c += (0 === F++ ? s : "") + l : (l = 0 > v ? l.replace("+", "").replace("-", "") : l = l.replace("-", ""), c += l.replace(/[0]+/, I));
            return c
        },
        B = function(t) {
            var i = 0,
                e = 0;
            return t || (t = window.event), t.offsetX || 0 === t.offsetX ? (i = t.offsetX, e = t.offsetY) : t.layerX || 0 === t.layerX ? (i = t.layerX, e = t.layerY) : (i = t.pageX - t.target.offsetLeft, e = t.pageY - t.target.offsetTop), {
                x: i,
                y: e
            }
        };
    m.prototype.setOptions = function(t, i) {
        var e, a;
        if (_[this._defaultsKey]) {
            a = _[this._defaultsKey];
            for (e in a) a.hasOwnProperty(e) && (this[e] = t && e in t ? t[e] : i && e in i ? i[e] : a[e])
        } else k && window.console && console.log("defaults not set");
        return this
    }, m.prototype.trackChanges = function(t) {
        this._options._oldOptions || (this._options._oldOptions = {}), this._options._oldOptions[t] = this._options[t]
    }, m.prototype.isBeingTracked = function(t) {
        return this._options._oldOptions || (this._options._oldOptions = {}), this._options._oldOptions[t] ? !0 : !1
    }, m.prototype.hasOptionChanged = function(t) {
        return this._options._oldOptions || (this._options._oldOptions = {}), this._options._oldOptions[t] !== this._options[t]
    }, t(p, m), p.prototype.addResizeListener = function(t) {
        t || (t = window), t.addEventListener("resize", this.resize.bind(this))
    }, p.prototype.resize = function() {
        var t = 0,
            i = 0,
            e = this;
        t = e._options.width ? e.width : e._container.clientWidth > 0 ? e._container.clientWidth : e.width, i = e._options.height ? e.height : e._container.clientHeight > 0 ? e._container.clientHeight : e.height, (e.canvas.width !== t || e.canvas.height !== i) && (e.renderCount--, e.canvas.width = t, e.canvas.height = i, e.overlaidCanvas.width = t, e.overlaidCanvas.height = i, e.render())
    }, p.prototype._initialize = function() {
        this._selectedColorSet = A[this.colorSet] !== void 0 ? A[this.colorSet] : A.colorSet1, this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height), this.ctx.beginPath(), this.axisX = null, this.axisY = null, this.axisY2 = null, this._indexLabels = [], this._events = [], this._eventManager && this._eventManager.reset(), this.plotInfo = {
            axisPlacement: null,
            axisXValueType: null,
            plotTypes: []
        }, this.layoutManager.reset(), this._cultureInfo = new M(this, this._options.culture), this.data = [];
        for (var t = 0, i = 0; this._options.data.length > i; i++)
            if (t++, !this._options.data[i].type || this._options.data[i].type in D) {
                var e = new T(this, this._options.data[i], this.theme, t - 1, ++this._eventManager.lastObjectId);
                null === e.name && (e.name = "DataSeries " + t), null === e.color ? this._options.data.length > 1 ? (e._colorSet = [this._selectedColorSet[e.index % this._selectedColorSet.length]], e.color = this._selectedColorSet[e.index % this._selectedColorSet.length]) : e._colorSet = "line" === e.type || "stepLine" === e.type || "spline" === e.type || "area" === e.type || "splineArea" === e.type || "stackedArea" === e.type || "stackedArea100" === e.type ? [this._selectedColorSet[0]] : this._selectedColorSet : e._colorSet = e.color.split(";"), null === e.markerSize && (("line" === e.type || "stepLine" === e.type || "spline" === e.type) && this.canvas.width / 16 > e.dataPoints.length || "scatter" === e.type) && (e.markerSize = 8), ("bubble" === e.type || "scatter" === e.type) && e.dataPoints.sort(r), this.data.push(e);
                var a, n = e.axisPlacement;
                if ("normal" === n ? "xySwapped" === this.plotInfo.axisPlacement ? a = 'You cannot combine "' + e.type + '" with bar chart' : "none" === this.plotInfo.axisPlacement ? a = 'You cannot combine "' + e.type + '" with pie chart' : null === this.plotInfo.axisPlacement && (this.plotInfo.axisPlacement = "normal") : "xySwapped" === n ? "normal" === this.plotInfo.axisPlacement ? a = 'You cannot combine "' + e.type + '" with line, area, column or pie chart' : "none" === this.plotInfo.axisPlacement ? a = 'You cannot combine "' + e.type + '" with pie chart' : null === this.plotInfo.axisPlacement && (this.plotInfo.axisPlacement = "xySwapped") : "none" == n && ("normal" === this.plotInfo.axisPlacement ? a = 'You cannot combine "' + e.type + '" with line, area, column or bar chart' : "xySwapped" === this.plotInfo.axisPlacement ? a = 'You cannot combine "' + e.type + '" with bar chart' : null === this.plotInfo.axisPlacement && (this.plotInfo.axisPlacement = "none")), a && window.console) return window.console.log(a), void 0
            }
        this._objectsInitialized = !0
    };
    var D = {};
    p.prototype.render = function() {
        this._initialize();
        for (var t = 0; this.data.length > t; t++)("normal" === this.plotInfo.axisPlacement || "xySwapped" === this.plotInfo.axisPlacement) && (this.data[t].axisYType && "primary" !== this.data[t].axisYType ? "secondary" === this.data[t].axisYType && (this.axisY2 || ("normal" === this.plotInfo.axisPlacement ? this.axisY2 = new S(this, this._options.axisY2, "axisY", "right") : "xySwapped" === this.plotInfo.axisPlacement && (this.axisY2 = new S(this, this._options.axisY2, "axisY", "top"))), this.data[t].axisY = this.axisY2) : (this.axisY || ("normal" === this.plotInfo.axisPlacement ? this.axisY = new S(this, this._options.axisY, "axisY", "left") : "xySwapped" === this.plotInfo.axisPlacement && (this.axisY = new S(this, this._options.axisY, "axisY", "bottom"))), this.data[t].axisY = this.axisY), this.axisX || ("normal" === this.plotInfo.axisPlacement ? this.axisX = new S(this, this._options.axisX, "axisX", "bottom") : "xySwapped" === this.plotInfo.axisPlacement && (this.axisX = new S(this, this._options.axisX, "axisX", "left"))), this.data[t].axisX = this.axisX);
        for (this._processData(), this._options.title && (this._title = new v(this, this._options.title), this._title.render()), this.legend = new f(this, this._options.legend, this.theme), t = 0; this.data.length > t; t++) this.data[t].showInLegend && this.legend.dataSeries.push(this.data[t]);
        if (this.legend.render(), "normal" === this.plotInfo.axisPlacement || "xySwapped" === this.plotInfo.axisPlacement) S.setLayoutAndRender(this.axisX, this.axisY, this.axisY2, this.plotInfo.axisPlacement, this.layoutManager.getFreeSpace());
        else if ("none" !== this.plotInfo.axisPlacement) return;
        for (t = 0; this.plotInfo.plotTypes.length > t; t++)
            for (var i = this.plotInfo.plotTypes[t], e = 0; i.plotUnits.length > e; e++) {
                var a = i.plotUnits[e];
                D[a.type] in this ? this[D[a.type]].call(this, a) : window.console.log("No known chart type for " + a.type)
            }
        if (this._indexLabels.length > 0 && this.renderIndexLabels(), this.attachPlotAreaEventHandlers(), this.zoomEnabled || this.panEnabled || "none" === this._toolBar.style.display || (this._toolBar.style.display = "none"), this._toolTip._updateToolTip(), this.renderCount++, k) {
            var n = this;
            setTimeout(function() {
                var t = document.getElementById("ghostCanvasCopy");
                if (t) {
                    var i = t.getContext("2d");
                    i.drawImage(n._eventManager.ghostCanvas, 0, 0)
                }
            }, 2e3)
        }
    }, p.prototype.attachPlotAreaEventHandlers = function() {
        this.attachEvent({
            context: this,
            chart: this,
            mousedown: this._plotAreaMouseDown,
            mouseup: this._plotAreaMouseUp,
            mousemove: this._plotAreaMouseMove,
            capture: !0,
            bounds: this.getPlotArea()
        })
    }, p.prototype.categoriseDataSeries = function() {
        var t, i, e, a = "";
        for (e = 0; this.data.length > e; e++)
            if (a = this.data[e], a.dataPoints && 0 !== a.dataPoints.length && a.type in D) {
                var n = !1,
                    s = null,
                    o = !1;
                for (t = 0; this.plotInfo.plotTypes.length > t; t++)
                    if (this.plotInfo.plotTypes[t].type === a.type) {
                        n = !0, i = this.plotInfo.plotTypes[t];
                        break
                    }
                for (n || (i = {
                        type: a.type,
                        totalDataSeries: 0,
                        plotUnits: []
                    }, this.plotInfo.plotTypes.push(i)), t = 0; i.plotUnits.length > t; t++)
                    if (i.plotUnits[t].axisYType === a.axisYType) {
                        o = !0, s = i.plotUnits[t];
                        break
                    }
                o || (s = {
                    type: a.type,
                    previousDataSeriesCount: 0,
                    index: i.plotUnits.length,
                    plotType: i,
                    axisYType: a.axisYType,
                    axisY: "primary" === a.axisYType ? this.axisY : this.axisY2,
                    axisX: this.axisX,
                    dataSeriesIndexes: []
                }, i.plotUnits.push(s)), i.totalDataSeries++, s.dataSeriesIndexes.push(e)
            }
        for (e = 0; this.plotInfo.plotTypes.length > e; e++) {
            i = this.plotInfo.plotTypes[e];
            var r = 0;
            for (t = 0; i.plotUnits.length > t; t++) i.plotUnits[t].previousDataSeriesCount = r, r += i.plotUnits[t].dataSeriesIndexes.length
        }
    }, p.prototype.assignIdToDataPoints = function() {
        for (var t = 0; this.data.length > t; t++)
            for (var i = this.data[t], e = i.dataPoints.length, a = 0; e > a; a++) i.dataPointIds[a] = ++this._eventManager.lastObjectId
    }, p.prototype._processData = function() {
        this.assignIdToDataPoints(), this.categoriseDataSeries();
        for (var t = 0; this.plotInfo.plotTypes.length > t; t++)
            for (var i = this.plotInfo.plotTypes[t], e = 0; i.plotUnits.length > e; e++) {
                var a = i.plotUnits[e];
                "line" === a.type || "stepLine" === a.type || "spline" === a.type || "column" === a.type || "area" === a.type || "splineArea" === a.type || "bar" === a.type || "bubble" === a.type || "scatter" === a.type ? this._processMultiseriesPlotUnit(a) : "stackedColumn" === a.type || "stackedBar" === a.type || "stackedArea" === a.type ? this._processStackedPlotUnit(a) : ("stackedColumn100" === a.type || "stackedBar100" === a.type || "stackedArea100" === a.type) && this._processStacked100PlotUnit(a)
            }
    }, p.prototype._processMultiseriesPlotUnit = function(t) {
        if (t.dataSeriesIndexes && !(1 > t.dataSeriesIndexes.length))
            for (var i, e, a, n, s = t.axisY.dataInfo, o = t.axisX.dataInfo, r = !1, l = 0; t.dataSeriesIndexes.length > l; l++) {
                var h = this.data[t.dataSeriesIndexes[l]],
                    c = 0,
                    d = !1,
                    x = !1;
                for (("normal" === h.axisPlacement || "xySwapped" === h.axisPlacement) && (a = this.sessionVariables.axisX.internalMinimum ? this.sessionVariables.axisX.internalMinimum : this._options.axisX && this._options.axisX.minimum ? this._options.axisX.minimum : -1 / 0, n = this.sessionVariables.axisX.internalMaximum ? this.sessionVariables.axisX.internalMaximum : this._options.axisX && this._options.axisX.maximum ? this._options.axisX.maximum : 1 / 0), (h.dataPoints[c].x && h.dataPoints[c].x.getTime || "dateTime" === h.xValueType) && (r = !0), c = 0; h.dataPoints.length > c; c++) {
                    if (h.dataPoints[c].x === void 0 && (h.dataPoints[c].x = c), h.dataPoints[c].x.getTime ? (r = !0, i = h.dataPoints[c].x.getTime()) : i = h.dataPoints[c].x, e = h.dataPoints[c].y, o.min > i && (o.min = i), i > o.max && (o.max = i), s.min > e && (s.min = e), e > s.max && (s.max = e), c > 0) {
                        var m = i - h.dataPoints[c - 1].x;
                        0 > m && (m = -1 * m), o.minDiff > m && 0 !== m && (o.minDiff = m)
                    }
                    if (!(a > i) || d)
                        if (!d && (d = !0, c > 0)) c -= 2;
                        else {
                            if (i > n && !x) x = !0;
                            else if (i > n && x) continue;
                            h.dataPoints[c].label && (t.axisX.labels[i] = h.dataPoints[c].label), o.viewPortMin > i && (o.viewPortMin = i), i > o.viewPortMax && (o.viewPortMax = i), s.viewPortMin > e && (s.viewPortMin = e), e > s.viewPortMax && (s.viewPortMax = e)
                        }
                }
                this.plotInfo.axisXValueType = h.xValueType = r ? "dateTime" : "number"
            }
    }, p.prototype._processStackedPlotUnit = function(t) {
        var i;
        if (t.dataSeriesIndexes && !(1 > t.dataSeriesIndexes.length)) {
            var e, a, n, s, o, r, l = t.axisY.dataInfo,
                h = t.axisX.dataInfo,
                c = !1,
                d = [],
                x = [];
            for (o = 0; t.dataSeriesIndexes.length > o; o++) {
                var m = this.data[t.dataSeriesIndexes[o]],
                    p = !1,
                    u = !1;
                for (("normal" === m.axisPlacement || "xySwapped" === m.axisPlacement) && (n = this.sessionVariables.axisX.internalMinimum ? this.sessionVariables.axisX.internalMinimum : this._options.axisX && this._options.axisX.minimum ? this._options.axisX.minimum : -1 / 0, s = this.sessionVariables.axisX.internalMaximum ? this.sessionVariables.axisX.internalMaximum : this._options.axisX && this._options.axisX.maximum ? this._options.axisX.maximum : 1 / 0), r = 0; m.dataPoints.length > r; r++) {
                    if (m.dataPoints[r].x === void 0 && (m.dataPoints[r].x = r), m.dataPoints[r].x.getTime ? (c = !0, e = m.dataPoints[r].x.getTime()) : e = m.dataPoints[r].x, a = m.dataPoints[r].y, h.min > e && (h.min = e), e > h.max && (h.max = e), r > 0) {
                        var g = e - m.dataPoints[r - 1].x;
                        0 > g && (g = -1 * g), h.minDiff > g && 0 !== g && (h.minDiff = g)
                    }
                    if (!(n > e) || p)
                        if (!p && (p = !0, r > 0)) r -= 2;
                        else {
                            if (e > s && !u) u = !0;
                            else if (e > s && u) continue;
                            m.dataPoints[r].label && (t.axisX.labels[e] = m.dataPoints[r].label), h.viewPortMin > e && (h.viewPortMin = e), e > h.viewPortMax && (h.viewPortMax = e), a >= 0 ? d[e] ? d[e] += a : d[e] = a : x[e] ? x[e] += a : x[e] = a
                        }
                }
                this.plotInfo.axisXValueType = m.xValueType = c ? "dateTime" : "number"
            }
            for (r in d) isNaN(r) || (i = d[r], l.min > i && (l.min = i), i > l.max && (l.max = i), h.viewPortMin > r || r > h.viewPortMax || (l.viewPortMin > i && (l.viewPortMin = i), i > l.viewPortMax && (l.viewPortMax = i)));
            for (r in x) isNaN(r) || (i = x[r], l.min > i && (l.min = i), i > l.max && (l.max = i), h.viewPortMin > r || r > h.viewPortMax || (l.viewPortMin > i && (l.viewPortMin = i), i > l.viewPortMax && (l.viewPortMax = i)))
        }
    }, p.prototype._processStacked100PlotUnit = function(t) {
        var i, e;
        if (t.dataSeriesIndexes && !(1 > t.dataSeriesIndexes.length)) {
            for (var a, n, s = t.axisY.dataInfo, o = t.axisX.dataInfo, r = !1, l = !1, h = !1, c = [], d = 0; t.dataSeriesIndexes.length > d; d++) {
                var x = this.data[t.dataSeriesIndexes[d]],
                    m = 0,
                    p = !1,
                    u = !1;
                for (("normal" === x.axisPlacement || "xySwapped" === x.axisPlacement) && (i = this.sessionVariables.axisX.internalMinimum ? this.sessionVariables.axisX.internalMinimum : this._options.axisX && this._options.axisX.minimum ? this._options.axisX.minimum : -1 / 0, e = this.sessionVariables.axisX.internalMaximum ? this.sessionVariables.axisX.internalMaximum : this._options.axisX && this._options.axisX.maximum ? this._options.axisX.maximum : 1 / 0), (x.dataPoints[m].x && x.dataPoints[m].x.getTime || "dateTime" === x.xValueType) && (r = !0), m = 0; x.dataPoints.length > m; m++) {
                    if (x.dataPoints[m].x === void 0 && (x.dataPoints[m].x = m), x.dataPoints[m].x.getTime ? (r = !0, a = x.dataPoints[m].x.getTime()) : a = x.dataPoints[m].x, n = x.dataPoints[m].y, o.min > a && (o.min = a), a > o.max && (o.max = a), m > 0) {
                        var g = a - x.dataPoints[m - 1].x;
                        0 > g && (g = -1 * g), o.minDiff > g && 0 !== g && (o.minDiff = g)
                    }
                    if (!(i > a) || p)
                        if (!p && (p = !0, m > 0)) m -= 2;
                        else {
                            if (a > e && !u) u = !0;
                            else if (a > e && u) continue;
                            x.dataPoints[m].label && (t.axisX.labels[a] = x.dataPoints[m].label), o.viewPortMin > a && (o.viewPortMin = a), a > o.viewPortMax && (o.viewPortMax = a), n >= 0 ? l = !0 : h = !0, c[a] ? c[a] += Math.abs(n) : c[a] = Math.abs(n)
                        }
                }
                this.plotInfo.axisXValueType = x.xValueType = r ? "dateTime" : "number"
            }
            l && !h ? (s.max = 99, s.min = 1) : l && h ? (s.max = 99, s.min = -99) : !l && h && (s.max = -1, s.min = -99), s.viewPortMin = s.min, s.viewPortMax = s.max, t.dataPointYSums = c
        }
    }, p.prototype.getAutoFontSize = function(t) {
        var i = t / 400;
        return Math.min(this.canvas.width, this.canvas.height) * i
    }, p.prototype.resetOverlayedCanvas = function() {
        var t = this.overlaidCanvas.width;
        this.overlaidCanvas.width = 0, this.overlaidCanvas.width = t
    }, p.prototype.attachEvent = function(t) {
        this._events.push(t)
    }, p.prototype._touchEventHandler = function(t) {
        if (t.changedTouches) {
            var i = [],
                e = t.changedTouches,
                a = e ? e[0] : t;
            switch (t.type) {
                case "touchstart":
                case "MSPointerDown":
                    i = ["mousemove", "mousedown"];
                    break;
                case "touchmove":
                case "MSPointerMove":
                    i = ["mousemove"];
                    break;
                case "touchend":
                case "MSPointerUp":
                    i = "touchstart" === this._lastTouchEventType || "MSPointerDown" === this._lastTouchEventType ? ["mouseup", "click"] : ["mouseup"];
                    break;
                default:
                    return
            }
            this._lastTouchEventType = t.type;
            for (var n = 0; i.length > n; n++) {
                var s = i[n],
                    o = document.createEvent("MouseEvent");
                o.initMouseEvent(s, !0, !0, window, 1, a.screenX, a.screenY, a.clientX, a.clientY, !1, !1, !1, !1, 0, null), a.target.dispatchEvent(o), t.preventManipulation && t.preventManipulation(), t.preventDefault && t.preventDefault()
            }
        }
    }, p.prototype._mouseEventHandler = function(t) {
        t.preventManipulation && t.preventManipulation(), t.preventDefault && t.preventDefault();
        var i, e, a = B(t),
            n = t.type;
        if (t || (t = window.event), t.which ? e = 3 == t.which : t.button && (e = 2 == t.button), k && window.console && (window.console.log(n + " --> x: " + a.x + "; y:" + a.y), e && window.console.log(t.which), "mouseup" === n && window.console.log("mouseup")), !e) {
            if (p.capturedEventParam) i = p.capturedEventParam, "mouseup" === n && (p.capturedEventParam = null, i.chart.overlaidCanvas.releaseCapture ? i.chart.overlaidCanvas.releaseCapture() : document.body.removeEventListener("mouseup", i.chart._mouseEventHandler, !1)), i.hasOwnProperty(n) && i[n].call(i.context, a.x, a.y);
            else if (this._events)
                for (var s = 0; this._events.length > s; s++)
                    if (this._events[s].hasOwnProperty(n)) {
                        i = this._events[s];
                        var o = i.bounds;
                        if (a.x >= o.x1 && o.x2 >= a.x && a.y >= o.y1 && o.y2 >= a.y) {
                            i[n].call(i.context, a.x, a.y), "mousedown" === n && i.capture === !0 ? (p.capturedEventParam = i, this.overlaidCanvas.setCapture ? this.overlaidCanvas.setCapture() : document.body.addEventListener("mouseup", this._mouseEventHandler, !1)) : "mouseup" === n && (i.chart.overlaidCanvas.releaseCapture ? i.chart.overlaidCanvas.releaseCapture() : document.body.removeEventListener("mouseup", this._mouseEventHandler, !1));
                            break
                        }
                        i = null
                    }
            if (this._toolTip && this._toolTip.enabled) {
                var r = this.getPlotArea();
                (r.x1 > a.x || a.x > r.x2 || r.y1 > a.y || a.y > r.y2) && this._toolTip.hide()
            }
            this.isDrag && this.zoomEnabled || !this._eventManager || this._eventManager.mouseEventHandler(t)
        }
    }, p.prototype._plotAreaMouseDown = function(t, i) {
        this.isDrag = !0, this.dragStartPoint = "none" !== this.plotInfo.axisPlacement ? {
            x: t,
            y: i,
            xMinimum: this.axisX.minimum,
            xMaximum: this.axisX.maximum
        } : {
            x: t,
            y: i
        }
    }, p.prototype._plotAreaMouseUp = function(t, i) {
        var e, a, n;
        if (("normal" === this.plotInfo.axisPlacement || "xySwapped" === this.plotInfo.axisPlacement) && this.isDrag) {
            var s = 0,
                o = 0,
                r = this.axisX.lineCoordinates;
            if ("xySwapped" === this.plotInfo.axisPlacement ? (s = i - this.dragStartPoint.y, o = Math.abs(this.axisX.maximum - this.axisX.minimum) / r.height * s) : (s = this.dragStartPoint.x - t, o = Math.abs(this.axisX.maximum - this.axisX.minimum) / r.width * s), Math.abs(s) > 2) {
                if (this.panEnabled) {
                    var l = !1,
                        h = 0;
                    this.axisX._absoluteMinimum > this.axisX.sessionVariables.internalMinimum ? (h = this.axisX._absoluteMinimum - this.axisX.sessionVariables.internalMinimum, this.axisX.sessionVariables.internalMinimum += h, this.axisX.sessionVariables.internalMaximum += h, l = !0) : this.axisX.sessionVariables.internalMaximum > this.axisX._absoluteMaximum && (h = this.axisX.sessionVariables.internalMaximum - this.axisX._absoluteMaximum, this.axisX.sessionVariables.internalMaximum -= h, this.axisX.sessionVariables.internalMinimum -= h, l = !0), this.overlaidCanvas.style.cursor = this._defaultCursor, l && this.render()
                } else if (this.zoomEnabled) {
                    if (this.resetOverlayedCanvas(), !this.dragStartPoint) return;
                    "xySwapped" === this.plotInfo.axisPlacement ? (n = {
                        y1: Math.min(this.dragStartPoint.y, i),
                        y2: Math.max(this.dragStartPoint.y, i)
                    }, Math.abs(n.y1 - n.y2) > 1 && (r = this.axisX.lineCoordinates, a = this.axisX.maximum - (this.axisX.maximum - this.axisX.minimum) / r.height * (n.y2 - r.y1), e = this.axisX.maximum - (this.axisX.maximum - this.axisX.minimum) / r.height * (n.y1 - r.y1), a = Math.max(a, this.axisX.dataInfo.min), e = Math.min(e, this.axisX.dataInfo.max), Math.abs((e - a) / this.axisX.dataInfo.minDiff) >= .008 * this.canvas.height && (this.axisX.sessionVariables.internalMinimum = a, this.axisX.sessionVariables.internalMaximum = e, this.render()))) : "normal" === this.plotInfo.axisPlacement && (n = {
                        x1: Math.min(this.dragStartPoint.x, t),
                        x2: Math.max(this.dragStartPoint.x, t)
                    }, Math.abs(n.x1 - n.x2) > 1 && (r = this.axisX.lineCoordinates, a = (this.axisX.maximum - this.axisX.minimum) / r.width * (n.x1 - r.x1) + this.axisX.minimum, e = (this.axisX.maximum - this.axisX.minimum) / r.width * (n.x2 - r.x1) + this.axisX.minimum, a = Math.max(a, this.axisX.dataInfo.min), e = Math.min(e, this.axisX.dataInfo.max), Math.abs((e - a) / this.axisX.dataInfo.minDiff) >= .01 * this.canvas.width && (this.axisX.sessionVariables.internalMinimum = a, this.axisX.sessionVariables.internalMaximum = e, this.render())))
                }
                this.zoomEnabled && "none" === this._toolBar.style.display && (this._toolBar.style.display = "inline", this._zoomButton.innerHTML = this._cultureInfo.panText, this._resetButton.innerHTML = this._cultureInfo.resetText)
            }
        }
        this.isDrag = !1
    }, p.prototype._plotAreaMouseMove = function(t, i) {
        if (this.isDrag && "none" !== this.plotInfo.axisPlacement) {
            var e = 0,
                n = 0,
                s = this.axisX.lineCoordinates;
            if ("xySwapped" === this.plotInfo.axisPlacement ? (e = i - this.dragStartPoint.y, n = Math.abs(this.axisX.maximum - this.axisX.minimum) / s.height * e) : (e = this.dragStartPoint.x - t, n = Math.abs(this.axisX.maximum - this.axisX.minimum) / s.width * e), Math.abs(e) > 2 && 8 > Math.abs(e) && (this.panEnabled || this.zoomEnabled) ? this._toolTip.hide() : !this._toolTip.enabled || this.panEnabled || this.zoomEnabled || this._toolTip.mouseMoveHandler(t, i), Math.abs(e) > 2 && (this.panEnabled || this.zoomEnabled))
                if (this.panEnabled) {
                    this.axisX.sessionVariables.internalMinimum = this.dragStartPoint.xMinimum + n, this.axisX.sessionVariables.internalMaximum = this.dragStartPoint.xMaximum + n;
                    var o = 0;
                    this.axisX._absoluteMinimum - a(this.axisX.interval, this.axisX.intervalType) > this.axisX.sessionVariables.internalMinimum ? (o = this.axisX._absoluteMinimum - a(this.axisX.interval, this.axisX.intervalType) - this.axisX.sessionVariables.internalMinimum, this.axisX.sessionVariables.internalMinimum += o, this.axisX.sessionVariables.internalMaximum += o) : this.axisX.sessionVariables.internalMaximum > this.axisX._absoluteMaximum + a(this.axisX.interval, this.axisX.intervalType) && (o = this.axisX.sessionVariables.internalMaximum - (this.axisX._absoluteMaximum + a(this.axisX.interval, this.axisX.intervalType)), this.axisX.sessionVariables.internalMaximum -= o, this.axisX.sessionVariables.internalMinimum -= o);
                    var r = this;
                    clearTimeout(this._panTimerId), this._panTimerId = setTimeout(function() {
                        r.render()
                    }, 0)
                } else if (this.zoomEnabled) {
                var l = this.getPlotArea();
                this.resetOverlayedCanvas();
                var h = this.overlaidCanvasCtx.globalAlpha;
                this.overlaidCanvasCtx.globalAlpha = .7, this.overlaidCanvasCtx.fillStyle = "#A0ABB8", "xySwapped" === this.plotInfo.axisPlacement ? this.overlaidCanvasCtx.fillRect(l.x1, this.dragStartPoint.y, l.x2 - l.x1, i - this.dragStartPoint.y) : "normal" === this.plotInfo.axisPlacement && this.overlaidCanvasCtx.fillRect(this.dragStartPoint.x, l.y1, t - this.dragStartPoint.x, l.y2 - l.y1), this.overlaidCanvasCtx.globalAlpha = h
            }
        } else this._toolTip.enabled && this._toolTip.mouseMoveHandler(t, i)
    }, p.prototype.getPlotArea = function() {
        var t, i, e, a, n = this.axisY ? this.axisY : this.axisY2;
        return this.axisX && n ? (t = this.axisX.lineCoordinates.x2 > this.axisX.lineCoordinates.x1 ? this.axisX.lineCoordinates.x1 : n.lineCoordinates.x1, e = n.lineCoordinates.y1 > this.axisX.lineCoordinates.y1 ? this.axisX.lineCoordinates.y1 : n.lineCoordinates.y1, i = this.axisX.lineCoordinates.x2 > n.lineCoordinates.x2 ? this.axisX.lineCoordinates.x2 : n.lineCoordinates.x2, a = this.axisX.lineCoordinates.y2 > this.axisX.lineCoordinates.y1 ? this.axisX.lineCoordinates.y2 : n.lineCoordinates.y2, {
            x1: t,
            y1: e,
            x2: i,
            y2: a,
            width: i - t,
            height: a - e
        }) : this.layoutManager.getFreeSpace()
    }, p.prototype.getPixelCoordinatesOnPlotArea = function(t, i) {
        return {
            x: this.axisX.getPixelCoordinatesOnAxis(t).x,
            y: this.axisY.getPixelCoordinatesOnAxis(i).y
        }
    }, p.prototype.renderIndexLabels = function() {
        this.ctx.textBaseline = "middle";
        for (var t = this.getPlotArea(), i = 0; this._indexLabels.length > i; i++) {
            var e, a, n, s = this._indexLabels[i];
            this.ctx.fillStyle = x("indexLabelFontColor", s.dataPoint, s.dataSeries), this.ctx.font = d("indexLabel", s.dataPoint, s.dataSeries);
            var o = this.replaceKeywordsWithValue(x("indexLabel", s.dataPoint, s.dataSeries), s.dataPoint, s.dataSeries),
                r = {
                    width: this.ctx.measureText(o).width,
                    height: x("indexLabelFontSize", s.dataPoint, s.dataSeries)
                },
                l = x("indexLabelPlacement", s.dataPoint, s.dataSeries),
                h = x("indexLabelOrientation", s.dataPoint, s.dataSeries);
            n = 0;
            var c = 0,
                m = 0,
                p = 0,
                u = 0;
            t.x1 > s.point.x || s.point.x > t.x2 || t.y1 > s.point.y || s.point.y > t.y2 || ("column" === s.chartType || "stackedColumn" === s.chartType || "stackedColumn100" === s.chartType || "bar" === s.chartType || "stackedBar" === s.chartType || "stackedBar100" === s.chartType ? "normal" === this.plotInfo.axisPlacement ? ("outside" === l ? (c = t.y1, m = t.y2) : "inside" === l && (c = s.bounds.y1, m = s.bounds.y2), "horizontal" === h ? (e = s.point.x - r.width / 2, a = s.dataPoint.y >= 0 ? Math.min(Math.max(s.point.y - r.height / 2 - 5, c + r.height / 2 + 5), m - r.height / 2 - 5) : Math.max(Math.min(s.point.y + r.height / 2 + 5, m - r.height / 2), c + r.height / 2 + 5)) : "vertical" === h && (e = s.point.x, a = s.dataPoint.y >= 0 ? Math.min(Math.max(s.point.y - 5, c + r.width + 5), m) : Math.max(Math.min(s.point.y + r.width + 5, m - 5), c), n = -90)) : "xySwapped" === this.plotInfo.axisPlacement && ("outside" === l ? (p = t.x1, u = t.x2) : "inside" === l && (p = s.bounds.x1, u = s.bounds.x2), "horizontal" === h ? (a = s.point.y, e = s.dataPoint.y >= 0 ? Math.max(Math.min(s.point.x + 5, u - r.width), p) : Math.min(Math.max(s.point.x - r.width - 5, p), u)) : "vertical" === h && (a = s.point.y + r.width / 2, e = s.dataPoint.y >= 0 ? Math.max(Math.min(s.point.x + r.height / 2 + 5, u - r.height / 2), p) : Math.min(Math.max(s.point.x - r.height / 2 - 5, p + r.height / 2), u + r.height / 2), n = -90)) : "horizontal" === h ? (e = s.point.x - r.width / 2, a = s.dataPoint.y >= 0 ? Math.max(s.point.y - r.height / 2 - 5, t.y1 + r.height / 2) : Math.min(s.point.y + r.height / 2 + 5, t.y2 - r.height / 2)) : "vertical" === h && (e = s.point.x, a = s.dataPoint.y >= 0 ? Math.max(s.point.y - 5, t.y1 + r.width) : Math.min(s.point.y + r.width + 5, t.y2), n = -90), this.ctx.save(), this.ctx.translate(e, a), this.ctx.rotate(Math.PI / 180 * n), this.ctx.fillText(o, 0, 0), this.ctx.restore())
        }
    };
    var L = function(t, i, e, a, n, s, o, r, l, h) {
            var c, d = i,
                x = a,
                m = e,
                p = n,
                u = a - i > 15 && n - e > 15 ? 8 : .35 * Math.min(a - i, n - e),
                g = "rgba(255, 255, 255, .4)",
                y = "rgba(255, 255, 255, 0.1)",
                v = s;
            t.beginPath(), t.moveTo(i, e), t.save(), t.fillStyle = v, t.fillRect(i, e, a - i, n - e), t.restore(), o === !0 && (t.save(), t.beginPath(), t.moveTo(i, e), t.lineTo(i + u, e + u), t.lineTo(a - u, e + u), t.lineTo(a, e), t.closePath(), c = t.createLinearGradient((a + i) / 2, m + u, (a + i) / 2, m), c.addColorStop(0, v), c.addColorStop(1, g), t.fillStyle = c, t.fill(), t.restore()), r === !0 && (t.save(), t.beginPath(), t.moveTo(i, n), t.lineTo(i + u, n - u), t.lineTo(a - u, n - u), t.lineTo(a, n), t.closePath(), c = t.createLinearGradient((a + i) / 2, p - u, (a + i) / 2, p), c.addColorStop(0, v), c.addColorStop(1, g), t.fillStyle = c, t.fill(), t.restore()), l === !0 && (t.save(), t.beginPath(), t.moveTo(i, e), t.lineTo(i + u, e + u), t.lineTo(i + u, n - u), t.lineTo(i, n), t.closePath(), c = t.createLinearGradient(d + u, (n + e) / 2, d, (n + e) / 2), c.addColorStop(0, v), c.addColorStop(1, y), t.fillStyle = c, t.fill(), t.restore()), h === !0 && (t.save(), t.beginPath(), t.moveTo(a, e), t.lineTo(a - u, e + u), t.lineTo(a - u, n - u), t.lineTo(a, n), c = t.createLinearGradient(x - u, (n + e) / 2, x, (n + e) / 2), c.addColorStop(0, v), c.addColorStop(1, y), t.fillStyle = c, c.addColorStop(0, v), c.addColorStop(1, y), t.fillStyle = c, t.fill(), t.closePath(), t.restore())
        },
        Y = function(t, i, e, a, n, s, o) {
            if (t.save(), "pie" === n) t.beginPath(), t.moveTo(i.x, i.y), t.arc(i.x, i.y, e, s, o, !1), t.fillStyle = a, t.strokeStyle = "white", t.lineWidth = 2, t.closePath(), t.stroke(), t.fill();
            else if ("doughnut" === n) {
                var r = .6;
                t.beginPath(), t.arc(i.x, i.y, e, s, o, !1), t.arc(i.x, i.y, r * e, o, s, !0), t.closePath(), t.fillStyle = a, t.strokeStyle = "white", t.lineWidth = 2, t.stroke(), t.fill()
            }
            t.restore()
        };
    p.prototype.requestAnimFrame = function() {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(t) {
            window.setTimeout(t, 1e3 / 60)
        }
    }(), g.prototype.registerSpace = function(t, i) {
        "top" === t ? this._topOccupied += i.height : "bottom" === t ? this._bottomOccupied += i.height : "left" === t ? this._leftOccupied += i.width : "right" === t && (this._rightOccupied += i.width)
    }, g.prototype.unRegisterSpace = function(t, i) {
        "top" === t ? this._topOccupied -= i.height : "bottom" === t ? this._bottomOccupied -= i.height : "left" === t ? this._leftOccupied -= i.width : "right" === t && (this._rightOccupied -= i.width)
    }, g.prototype.getFreeSpace = function() {
        return {
            x1: this._leftOccupied,
            y1: this._topOccupied,
            x2: this.canvas.width - this._rightOccupied,
            y2: this.canvas.height - this._bottomOccupied,
            width: this.canvas.width - this._rightOccupied - this._leftOccupied,
            height: this.canvas.height - this._bottomOccupied - this._topOccupied
        }
    }, g.prototype.reset = function() {
        this._topOccupied = 0, this._bottomOccupied = 3, this._leftOccupied = 0, this._rightOccupied = 0
    }, t(y, m), y.prototype.render = function(t) {
        t && this.ctx.save();
        var i = this.ctx.font;
        this.ctx.textBaseline = this.textBaseline, this._isDirty && this.measureText(this.ctx), this.ctx.translate(this.x, this.y), this.ctx.font = this._getFontString(), this.ctx.rotate(Math.PI / 180 * this.angle);
        var e = 0,
            a = this.padding,
            n = null;
        (this.borderThickness > 0 && this.borderColor || this.backgroundColor) && (this.ctx.roundRect(0, 0, this.width, this.height, this.cornerRadius, this.borderThickness, this.backgroundColor, this.borderColor), "middle" === this.textBaseline && (a += this.fontSize / 2)), this.ctx.fillStyle = this.fontColor;
        for (var s = 0; this._wrappedText.lines.length > s; s++) n = this._wrappedText.lines[s], "right" === this.horizontalAlign ? e = this.width - n.width - this.padding : "left" === this.horizontalAlign ? e = this.padding : "center" === this.horizontalAlign && (e = (this.width - 2 * this.padding) / 2 - n.width / 2 + this.padding), this.ctx.fillText(n.text, e, a), a += n.height;
        this.ctx.font = i, t && this.ctx.restore()
    }, y.prototype.setText = function(t) {
        this.text = t, this._isDirty = !0, this._wrappedText = null
    }, y.prototype.measureText = function() {
        if (null === this.maxWidth) throw "Please set maxWidth and height for TextBlock";
        return this._wrapText(this.ctx), this._isDirty = !1, {
            width: this.width,
            height: this.height
        }
    }, y.prototype._wrapText = function() {
        var t = "" + s(this.text),
            i = [],
            e = this.ctx.font,
            a = 0,
            n = 0;
        for (this.ctx.font = this._getFontString(); t.length > 0;) {
            for (var o = t, r = 0, l = 0, h = this.maxWidth - 2 * this.padding, c = this.maxHeight - 2 * this.padding;;) {
                r = this.ctx.measureText(o).width, l = 0;
                var d = 0;
                if (!(r > h)) {
                    i.push({
                        text: o,
                        width: r,
                        height: this.fontSize
                    }), n = Math.max(n, r), a += this.fontSize, t = s(t.slice(o.length, t.length));
                    break
                }
                l = o.length / r * h;
                var x = Math.max(Math.min(Math.ceil(l), o.length - 1), 0);
                d = o.lastIndexOf(" ", x, o.length - 1), o = d >= 0 ? s(t.slice(0, d)) : s(t.slice(0, x - 1))
            }
            if (c && a > c - this.fontSize && t.length > 0) {
                var m = i.pop();
                i.push(m);
                break
            }
        }
        this._wrappedText = {
            lines: i,
            width: n,
            height: a
        }, this.width = n + 2 * this.padding, this.height = a + 2 * this.padding, this.ctx.font = e
    }, y.prototype._getFontString = function() {
        return this.fontStyle + " " + this.fontWeight + " " + this.fontSize + "px " + this.fontFamily
    }, t(v, m), v.prototype.render = function() {
        if (this.text) {
            var t, i, e = this.chart.layoutManager.getFreeSpace(),
                a = 0,
                n = 0,
                s = 0,
                o = 0,
                r = 0;
            "top" === this.verticalAlign || "bottom" === this.verticalAlign ? (o = e.width - 2 * this.margin, r = .5 * e.height - 2 * this.margin, s = 0) : "center" === this.verticalAlign && ("left" === this.horizontalAlign || "right" === this.horizontalAlign ? (o = e.height - 2 * this.margin, r = .5 * e.width - 2 * this.margin) : "center" === this.horizontalAlign && (o = e.width - 2 * this.margin, r = .5 * e.height - 2 * this.margin));
            var l = new y(this.ctx, {
                    fontSize: this.fontSize,
                    fontFamily: this.fontFamily,
                    fontColor: this.fontColor,
                    fontStyle: this.fontStyle,
                    fontWeight: this.fontWeight,
                    horizontalAlign: this.horizontalAlign,
                    verticalAlign: this.verticalAlign,
                    borderColor: this.borderColor,
                    borderThickness: this.borderThickness,
                    backgroundColor: this.backgroundColor,
                    maxWidth: o,
                    maxHeight: r,
                    cornerRadius: this.cornerRadius,
                    text: this.text,
                    padding: this.padding,
                    textBaseline: this.borderColor && this.borderThickness > 0 ? "middle" : "top"
                }),
                h = l.measureText();
            "top" === this.verticalAlign || "bottom" === this.verticalAlign ? ("top" === this.verticalAlign ? (n = this.margin, i = "top") : "bottom" === this.verticalAlign && (n = e.y2 - this.margin - h.height, i = "bottom"), "left" === this.horizontalAlign ? a = e.x1 + this.margin : "center" === this.horizontalAlign ? a = e.x1 + (o / 2 - h.width / 2) + this.margin : "right" === this.horizontalAlign && (a = e.x2 - this.margin - h.width), t = this.horizontalAlign, this.width = h.width, this.height = h.height) : "center" === this.verticalAlign && ("left" === this.horizontalAlign ? (a = e.x1 + this.margin, n = e.y2 - this.margin - (o / 2 - h.width / 2), s = -90, i = "left", this.width = h.height, this.height = h.width) : "right" === this.horizontalAlign ? (a = e.x2 - this.margin, n = e.y1 + this.margin + (o / 2 - h.width / 2), s = 90, i = "right", this.width = h.height, this.height = h.width) : "center" === this.horizontalAlign && (n = e.y1 + (e.height / 2 - h.height / 2), a = e.x1 + (e.width / 2 - h.width / 2), i = "center", this.width = h.width, this.height = h.height), t = "center"), l.x = a, l.y = n, l.angle = s, l.horizontalAlign = t, l.render(!0), this.chart.layoutManager.registerSpace(i, {
                width: this.width + 2 * this.margin,
                height: this.height + 2 * this.margin
            }), this.bounds = {
                x1: a,
                y1: n,
                x2: a + this.width,
                y2: n + this.height
            }, this.ctx.textBaseline = "top"
        }
    }, t(f, m), f.prototype.render = function() {
        var t, i, e, a = this.chart.layoutManager.getFreeSpace(),
            n = null,
            s = 0,
            o = 0,
            r = 0,
            l = 0,
            h = [],
            c = [];
        this._options.fontSize === void 0 && (this.fontSize = this.chart.getAutoFontSize(this.fontSize)), "top" === this.verticalAlign || "bottom" === this.verticalAlign ? (this.orientation = "horizontal", n = this.verticalAlign, r = .9 * a.width, l = .5 * a.height) : "center" === this.verticalAlign && (this.orientation = "vertical", n = this.horizontalAlign, r = .5 * a.width, l = .9 * a.height);
        for (var d = 0; this.dataSeries.length > d; d++) {
            var x = this.dataSeries[d],
                m = x.legendMarkerType ? x.legendMarkerType : "line" !== x.type && "stepLine" !== x.type && "spline" !== x.type && "scatter" !== x.type && "bubble" !== x.type || !x.markerType ? T.getDefaultLegendMarker(x.type) : x.markerType,
                p = x.legendText ? x.legendText : x.name,
                u = x.legendMarkerColor ? x.legendMarkerColor : x.markerColor ? x.markerColor : x._colorSet[0];
            if (i = x.markerSize || "line" !== x.type && "stepLine" !== x.type && "spline" !== x.type ? .7 * this.fontSize : 0, "pie" !== x.type && "doughnut" !== x.type) e = {
                markerType: m,
                markerColor: u,
                text: p,
                textBlock: null,
                chartType: x.type,
                markerSize: i,
                lineColor: x._colorSet[0]
            }, h.push(e);
            else
                for (var g = 0; x.dataPoints.length > g; g++) {
                    var v = x.dataPoints[g];
                    m = v.legendMarkerType ? v.legendMarkerType : x.legendMarkerType ? x.legendMarkerType : T.getDefaultLegendMarker(x.type), p = v.legendText ? v.legendText : x.legendText ? x.legendText : v.name ? v.name : "DataPoint: " + (g + 1), u = v.markerColor ? v.markerColor : x.markerColor ? x.markerColor : v.color ? v.color : x.color ? x.color : x._colorSet[g % x._colorSet.length], i = 0 !== v.markerSize && (0 !== x.markerSize || v.markerSize) || "line" !== x.type && "stepLine" !== x.type && "spline" !== x.type ? .7 * this.fontSize : 0, e = {
                        markerType: m,
                        markerColor: u,
                        text: p,
                        textBlock: null,
                        chartType: x.type,
                        markerSize: i
                    }, h.push(e)
                }
            e = null
        }
        if (h.length > 0) {
            t = null;
            var f = 0;
            for (d = 0; h.length > d; d++) e = h[d], "horizontal" === this.orientation ? (e.textBlock = new y(this.ctx, {
                x: 0,
                y: 0,
                maxWidth: r,
                maxHeight: this.fontSize,
                angle: 0,
                text: e.text,
                horizontalAlign: "left",
                fontSize: this.fontSize,
                fontFamily: this.fontFamily,
                fontWeight: this.fontWeight,
                fontColor: this.fontColor,
                fontStyle: this.fontStyle,
                textBaseline: "top"
            }), e.textBlock.measureText(), (!t || t.width + e.textBlock.width + (0 === t.width ? 0 : this.horizontalSpacing) > r) && (t = {
                entries: [],
                width: 0
            }, c.push(t), this.height = c.length * (this.fontSize + 5)), e.textBlock.x = t.width + (0 === t.width ? 0 : this.horizontalSpacing), e.textBlock.y = 0, t.width += e.textBlock.width + (this.fontSize + 5) + (0 === t.width ? 0 : this.horizontalSpacing), t.entries.push(e), this.width = Math.max(t.width, this.width)) : (l > this.height + this.fontSize ? (t = {
                entries: [],
                width: 0
            }, c.push(t), this.height = c.length * this.fontSize) : (t = c[f], f = (f + 1) % c.length), e.textBlock = new y(this.ctx, {
                x: 0,
                y: 0,
                maxWidth: r,
                maxHeight: this.fontSize,
                angle: 0,
                text: e.text,
                horizontalAlign: "left",
                fontSize: this.fontSize,
                fontFamily: this.fontFamily,
                fontWeight: this.fontWeight,
                fontColor: this.fontColor,
                fontStyle: this.fontStyle,
                textBaseline: "top"
            }), e.textBlock.measureText(), e.textBlock.x = t.width + (0 === t.width ? 0 : this.horizontalSpacing), e.textBlock.y = 0, t.width += e.textBlock.width + (this.fontSize + 5) + (0 === t.width ? 0 : this.horizontalSpacing), t.entries.push(e), this.width = Math.max(t.width, this.width));
            this.height = c.length * this.fontSize
        }
        for ("top" === this.verticalAlign ? (o = "left" === this.horizontalAlign ? a.x1 + 2 : "right" === this.horizontalAlign ? a.x2 - this.width - 2 : a.x1 + a.width / 2 - this.width / 2, s = a.y1) : "center" === this.verticalAlign ? (o = "left" === this.horizontalAlign ? a.x1 + 2 : "right" === this.horizontalAlign ? a.x2 - this.width - 2 : a.x1 + a.width / 2 - this.width / 2, s = a.y1 + a.height / 2 - this.height / 2) : "bottom" === this.verticalAlign && (o = "left" === this.horizontalAlign ? a.x1 + 2 : "right" === this.horizontalAlign ? a.x2 - this.width - 2 : a.x1 + a.width / 2 - this.width / 2, s = a.y2 - this.height - 5), d = 0; c.length > d; d++) {
            t = c[d];
            for (var b = 0; t.entries.length > b; b++) {
                e = t.entries[b];
                var S = e.textBlock.x + o,
                    P = s + d * this.fontSize;
                ("line" === e.chartType || "stepLine" === e.chartType || "spline" === e.chartType) && (this.ctx.strokeStyle = e.lineColor, this.ctx.lineWidth = Math.ceil(this.fontSize / 8), this.ctx.beginPath(), this.ctx.moveTo(S - 2, P + this.fontSize / 2), this.ctx.lineTo(S + 2 + this.fontSize, P + this.fontSize / 2), this.ctx.stroke()), E.drawMarker(S + this.fontSize / 2, P + this.fontSize / 2, this.ctx, e.markerType, i, e.markerColor, null, 0), e.textBlock.x = S + this.fontSize + 5, e.textBlock.y = P, e.textBlock.render(!0)
            }
        }
        this.chart.layoutManager.registerSpace(n, {
            width: this.width,
            height: this.height + 5 + 5
        }), this.bounds = {
            x1: o,
            y1: s,
            x2: o + this.width,
            y2: s + this.height
        }
    }, t(b, m), b.prototype.render = function() {
        var t = this.chart.layoutManager.getFreeSpace();
        this.ctx.fillStyle = "red", this.ctx.fillRect(t.x1, t.y1, t.x2, t.y2)
    }, t(T, m), T.prototype.getDefaultAxisPlacement = function() {
        var t = this.type;
        return "column" === t || "line" === t || "stepLine" === t || "spline" === t || "area" === t || "splineArea" === t || "stackedColumn" === t || "stackedLine" === t || "bubble" === t || "scatter" === t || "stackedArea" === t || "stackedColumn100" === t || "stackedLine100" === t || "stackedArea100" === t ? "normal" : "bar" === t || "stackedBar" === t || "stackedBar100" === t ? "xySwapped" : "pie" === t || "doughnut" === t ? "none" : (window.console.log("Unknown Chart Type: " + t), null)
    }, T.getDefaultLegendMarker = function(t) {
        return "column" === t || "stackedColumn" === t || "stackedLine" === t || "bar" === t || "stackedBar" === t || "stackedBar100" === t || "bubble" === t || "scatter" === t || "stackedColumn100" === t || "stackedLine100" === t ? "square" : "line" === t || "stepLine" === t || "spline" === t || "pie" === t || "doughnut" === t ? "circle" : "area" === t || "splineArea" === t || "stackedArea" === t || "stackedArea100" === t ? "triangle" : (window.console.log("Unknown Chart Type: " + t), null)
    }, T.prototype.findDataPointByX = function(t, i) {
        for (var e, a = 0, n = this.dataPoints.length, s = {
                dataPoint: null,
                distance: 1 / 0,
                index: 0 / 0
            }, o = 0, r = null; n > a;) {
            o++, e = (a + n) / 2 << 0, r = this.dataPoints[e];
            var l = Math.abs(r.x - t);
            if (s.distance > l && (s.dataPoint = r, s.distance = l, s.index = e), t > r.x) a = e + 1;
            else {
                if (!(r.x > t)) {
                    s.dataPoint = r, s.distance = l, s.index = e;
                    break
                }
                n = e
            }
        }
        return i || s.dataPoint.x !== t ? i && null !== s.dataPoint ? s : null : s
    }, T.prototype.getMarkerProperties = function(t, i, e, a) {
        var n = this.dataPoints,
            s = this,
            o = n[t].markerColor ? n[t].markerColor : s.markerColor ? s.markerColor : n[t].color ? n[t].color : s.color ? s.color : s._colorSet[t % s._colorSet.length],
            r = n[t].markerBorderColor ? n[t].markerBorderColor : s.markerBorderColor ? s.markerBorderColor : o,
            l = n[t].markerBorderThickness ? n[t].markerBorderThickness : s.markerBorderThickness ? s.markerBorderThickness : 1,
            h = n[t].markerType ? n[t].markerType : s.markerType,
            c = n[t].markerSize ? n[t].markerSize : s.markerSize;
        return {
            x: i,
            y: e,
            ctx: a,
            type: h,
            size: c,
            color: o,
            borderColor: r,
            borderThickness: l
        }
    }, t(S, m), S.prototype.createLabels = function() {
        var t, i, a, n = 0;
        if ("axisX" === this.type && "dateTime" === this.chart.plotInfo.axisXValueType)
            for (a = e(new Date(this.maximum), this.interval, this.intervalType), n = this.intervalStartPosition; a > n; e(n, this.interval, this.intervalType)) t = "axisX" === this.type && this.labels[n] ? this.labels[n] : X(n, this.valueFormatString, this.chart._cultureInfo), i = new y(this.ctx, {
                x: 0,
                y: 0,
                maxWidth: this.maxHeight,
                maxHeight: this.labelFontSize,
                angle: this.labelAngle,
                text: this.prefix + t + this.suffix,
                horizontalAlign: "left",
                fontSize: this.labelFontSize,
                fontFamily: this.labelFontFamily,
                fontWeight: this.labelFontWeight,
                fontColor: this.labelFontColor,
                fontStyle: this.labelFontStyle,
                textBaseline: "middle"
            }), this._labels.push({
                position: n.getTime(),
                textBlock: i,
                effectiveHeight: null
            });
        else {
            if (a = this.maximum, this.labels && this.labels.length) {
                var s = Math.ceil(this.interval),
                    o = Math.ceil(this.intervalStartPosition),
                    r = !1;
                for (n = o; this.maximum > n; n += s) {
                    if (!this.labels[n]) {
                        r = !1;
                        break
                    }
                    r = !0
                }
                r && (this.interval = s, this.intervalStartPosition = o)
            }
            for (n = this.intervalStartPosition; a >= n; n += this.interval) t = "axisX" === this.type && this.labels[n] ? this.labels[n] : F(n, this.valueFormatString, this.chart._cultureInfo), i = new y(this.ctx, {
                x: 0,
                y: 0,
                maxWidth: this.maxHeight,
                maxHeight: this.labelFontSize,
                angle: this.labelAngle,
                text: this.prefix + t + this.suffix,
                horizontalAlign: "left",
                fontSize: this.labelFontSize,
                fontFamily: this.labelFontFamily,
                fontWeight: this.labelFontWeight,
                fontColor: this.labelFontColor,
                fontStyle: this.labelFontStyle,
                textBaseline: "middle",
                borderThickness: 0
            }), this._labels.push({
                position: n,
                textBlock: i,
                effectiveHeight: null
            })
        }
    }, S.prototype.createLabelsAndCalculateWidth = function() {
        var t = 0;
        if (this._labels = [], "left" === this._position || "right" === this._position) {
            this.createLabels();
            for (var i = 0; this._labels.length > i; i++) {
                var e = this._labels[i].textBlock,
                    a = e.measureText(),
                    n = 0 === this.labelAngle ? a.width : a.width * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle)) + a.height / 2 * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle));
                n > t && (t = n), this._labels[i].effectiveWidth = n
            }
        }
        var s = this.title ? this.titleFontSize + 5 : 0;
        return s + t + this.tickLength + 10
    }, S.prototype.createLabelsAndCalculateHeight = function() {
        var t = 0;
        this._labels = [];
        var i, e = 0;
        if (this.createLabels(), "bottom" === this._position || "top" === this._position)
            for (e = 0; this._labels.length > e; e++) {
                i = this._labels[e].textBlock;
                var a = i.measureText(),
                    n = 0;
                n = 0 === this.labelAngle ? a.height : a.width * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)) + a.height / 2 * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle)), n > t && (t = n), this._labels[e].effectiveHeight = n
            }
        var s = this.title ? this.titleFontSize + 5 : 0;
        return s + t + this.tickLength
    }, S.setLayoutAndRender = function(t, i, e, a, n) {
        var s, o, r, l, h, c = t.chart,
            d = c.ctx;
        if (t.calculateAxisParameters(), i && i.calculateAxisParameters(), e && e.calculateAxisParameters(), i && e && i._options.maximum === void 0 && i._options.minimum === void 0 && i._options.interval === void 0 && e._options.maximum === void 0 && e._options.minimum === void 0 && e._options.interval === void 0) {
            var x = (i.maximum - i.minimum) / i.interval,
                m = (e.maximum - e.minimum) / e.interval;
            x > m ? e.maximum = e.interval * x + e.minimum : m > x && (i.maximum = i.interval * m + i.minimum)
        }
        var p = i ? i.lineThickness ? i.lineThickness : 0 : 0,
            u = e ? e.lineThickness ? e.lineThickness : 0 : 0,
            g = i ? i.gridThickness ? i.gridThickness : 0 : 0,
            y = e ? e.gridThickness ? e.gridThickness : 0 : 0,
            v = i ? i.margin : 0;
        if ("normal" === a) {
            var f = i ? i.createLabelsAndCalculateWidth() : 0,
                b = e ? e.createLabelsAndCalculateWidth() : 0,
                T = t.createLabelsAndCalculateHeight();
            o = n.x1 + f + v, r = n.y2 - T - t.margin, l = n.x2 - b > t.chart.canvas.width - 10 ? t.chart.canvas.width - 10 : n.x2 - b, h = n.y2 - t.margin, t.lineCoordinates = {
                x1: o,
                y1: r,
                x2: l,
                y2: r,
                width: Math.abs(l - o)
            }, t.boundingRect = {
                x1: o,
                y1: r,
                x2: l,
                y2: h,
                width: l - o,
                height: h - r
            }, i && (o = n.x1 + i.margin, r = 10 > n.y1 ? 10 : n.y1, l = n.x1 + f + i.margin, h = n.y2 - T - t.margin, i.lineCoordinates = {
                x1: l,
                y1: r,
                x2: l,
                y2: h,
                height: Math.abs(h - r)
            }, i.boundingRect = {
                x1: o,
                y1: r,
                x2: l,
                y2: h,
                width: l - o,
                height: h - r
            }), e && (o = t.lineCoordinates.x2, r = 10 > n.y1 ? 10 : n.y1, l = o + b + e.margin, h = n.y2 - T - t.margin, e.lineCoordinates = {
                x1: o,
                y1: r,
                x2: o,
                y2: h,
                height: Math.abs(h - r)
            }, e.boundingRect = {
                x1: o,
                y1: r,
                x2: l,
                y2: h,
                width: l - o,
                height: h - r
            }), d.save(), d.rect(t.boundingRect.x1 - 40, t.boundingRect.y1, t.boundingRect.width + 80, t.boundingRect.height), d.clip(), t.renderLabelsTicksAndTitle(), d.restore(), i && i.renderLabelsTicksAndTitle(), e && e.renderLabelsTicksAndTitle(), s = t.chart.getPlotArea(), d.save(), d.rect(s.x1, s.y1 - Math.max(y, g) / 2, Math.abs(s.x2 - s.x1), Math.abs(s.y2 - s.y1 + Math.max(y, g) / 2 + Math.max(y, g, t.lineThickness) / 2)), d.clip(), t.calculateValueToPixelConvertionParameters(), i && i.calculateValueToPixelConvertionParameters(), e && e.calculateValueToPixelConvertionParameters(), t.renderInterlacedColors(), i && i.renderInterlacedColors(), e && e.renderInterlacedColors(), d.restore(), t.renderGrid(), i && i.renderGrid(), e && e.renderGrid(), t.renderAxisLine(), i && i.renderAxisLine(), e && e.renderAxisLine()
        } else {
            var S = i ? i.createLabelsAndCalculateHeight() : 0,
                P = e ? e.createLabelsAndCalculateHeight() : 0,
                C = t.createLabelsAndCalculateWidth();
            i && (o = n.x1 + C + t.margin + t.lineThickness / 2, r = n.y2 - S - i.margin, l = n.x2 > i.chart.canvas.width - 10 ? i.chart.canvas.width - 10 : n.x2, h = n.y2 - i.margin, i.lineCoordinates = {
                x1: o,
                y1: r,
                x2: l,
                y2: r,
                width: Math.abs(l - o)
            }, i.boundingRect = {
                x1: o,
                y1: r,
                x2: l,
                y2: h,
                width: l - o,
                height: S
            }), e && (o = n.x1 + C + t.margin + t.lineThickness / 2, r = n.y1 + e.margin, l = n.x2 > e.chart.canvas.width - 10 ? e.chart.canvas.width - 10 : n.x2, h = n.y1 + e.margin + P, e.lineCoordinates = {
                x1: o,
                y1: h,
                x2: l,
                y2: h,
                width: Math.abs(l - o)
            }, e.boundingRect = {
                x1: o,
                y1: r,
                x2: l,
                y2: h,
                width: l - o,
                height: P
            }), o = n.x1 + t.margin, r = 10 > n.y1 + P + u / 2 ? 10 : n.y1 + P + u / 2, l = n.x1 + C + t.margin, h = n.y2 - S - v - p / 2, t.lineCoordinates = {
                x1: l,
                y1: r,
                x2: l,
                y2: h,
                height: Math.abs(h - r)
            }, t.boundingRect = {
                x1: o,
                y1: r,
                x2: l,
                y2: h,
                width: l - o,
                height: h - r
            }, d.save(), i && i.renderLabelsTicksAndTitle(), e && e.renderLabelsTicksAndTitle(), t.renderLabelsTicksAndTitle(), d.save(), d.rect(s.x1 - Math.max(t.lineThickness, g, y) / 2, s.y1, Math.abs(s.x2 - s.x1 + Math.max(t.lineThickness, g, y) / 2 + Math.max(g, y) / 2), Math.abs(s.y2 - s.y1)), d.clip(), t.calculateValueToPixelConvertionParameters(), i && i.calculateValueToPixelConvertionParameters(), e && e.calculateValueToPixelConvertionParameters(), t.renderInterlacedColors(), i && i.renderInterlacedColors(), e && e.renderInterlacedColors(), d.restore(), t.renderGrid(), i && i.renderGrid(), e && e.renderGrid(), t.renderAxisLine(), i && i.renderAxisLine(), e && e.renderAxisLine()
        }
    }, S.prototype.renderLabelsTicksAndTitle = function() {
        var t, i, e, a, n = !1,
            s = 0,
            o = .9,
            r = 0;
        if (0 !== this.labelAngle && 360 !== this.labelAngle && (o = 1.2), "bottom" === this._position || "top" === this._position) {
            for (t = 0; this._labels.length > t; t++) e = this._labels[t], this.minimum > e.position || (i = e.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) + e.textBlock.height * Math.sin(Math.PI / 180 * this.labelAngle), s += i);
            s > this.lineCoordinates.width * o && (n = !0)
        }
        if ("left" === this._position || "right" === this._position) {
            for (t = 0; this._labels.length > t; t++) e = this._labels[t], this.minimum > e.position || (i = e.textBlock.height * Math.cos(Math.PI / 180 * this.labelAngle) + e.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle), s += i);
            s > this.lineCoordinates.height * o && (n = !0)
        }
        if ("bottom" === this._position) {
            for (t = 0, this.ctx.lineWidth = this.tickThickness, this.ctx.strokeStyle = this.tickColor, t = 0; this._labels.length > t; t++) e = this._labels[t], this.minimum > e.position || e.position > this.maximum || (a = this.getPixelCoordinatesOnAxis(e.position), this.tickThickness && (this.ctx.beginPath(), this.ctx.moveTo(a.x << 0, a.y << 0), this.ctx.lineTo(a.x << 0, a.y + this.tickLength << 0), this.ctx.stroke()), n && 0 !== r++ % 2 || (0 === e.textBlock.angle ? (a.x -= e.textBlock.width / 2, a.y += this.tickLength + e.textBlock.height / 2) : (a.x -= 0 > this.labelAngle ? e.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) : 0, a.y += this.tickLength + Math.abs(0 > this.labelAngle ? e.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle) : 0)), e.textBlock.x = a.x, e.textBlock.y = a.y, e.textBlock.render(!0)));
            this.title && (this._titleTextBlock = new y(this.ctx, {
                x: this.lineCoordinates.x1,
                y: this.boundingRect.y2 - this.titleFontSize - 5,
                maxWidth: this.lineCoordinates.width,
                maxHeight: this.titleFontSize,
                angle: 0,
                text: this.title,
                horizontalAlign: "center",
                fontSize: this.titleFontSize,
                fontFamily: this.titleFontFamily,
                fontWeight: this.titleFontWeight,
                fontColor: this.titleFontColor,
                fontStyle: this.titleFontStyle,
                textBaseline: "top"
            }), this._titleTextBlock.measureText(), this._titleTextBlock.x = this.lineCoordinates.x1 + this.lineCoordinates.width / 2 - this._titleTextBlock.width / 2, this._titleTextBlock.render(!0))
        } else if ("top" === this._position) {
            for (t = 0, this.ctx.lineWidth = this.tickThickness, this.ctx.strokeStyle = this.tickColor, t = 0; this._labels.length > t; t++) e = this._labels[t], this.minimum > e.position || e.position > this.maximum || (a = this.getPixelCoordinatesOnAxis(e.position), this.tickThickness && (this.ctx.beginPath(), this.ctx.moveTo(a.x << 0, a.y << 0), this.ctx.lineTo(a.x << 0, a.y - this.tickLength << 0), this.ctx.stroke()), n && 0 !== r++ % 2 || (0 === e.textBlock.angle ? (a.x -= e.textBlock.width / 2, a.y -= this.tickLength + e.textBlock.height / 2) : (a.x -= this.labelAngle > 0 ? e.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) : 0, a.y -= this.tickLength + Math.abs(this.labelAngle > 0 ? e.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle) + 5 : 5)), e.textBlock.x = a.x, e.textBlock.y = a.y, e.textBlock.render(!0)));
            this.title && (this._titleTextBlock = new y(this.ctx, {
                x: this.lineCoordinates.x1,
                y: this.boundingRect.y1,
                maxWidth: this.lineCoordinates.width,
                maxHeight: this.titleFontSize,
                angle: 0,
                text: this.title,
                horizontalAlign: "center",
                fontSize: this.titleFontSize,
                fontFamily: this.titleFontFamily,
                fontWeight: this.titleFontWeight,
                fontColor: this.titleFontColor,
                fontStyle: this.titleFontStyle,
                textBaseline: "top"
            }), this._titleTextBlock.measureText(), this._titleTextBlock.x = this.lineCoordinates.x1 + this.lineCoordinates.width / 2 - this._titleTextBlock.width / 2, this._titleTextBlock.render(!0))
        } else if ("left" === this._position) {
            for (this.ctx.lineWidth = this.tickThickness, this.ctx.strokeStyle = this.tickColor, t = 0; this._labels.length > t; t++) e = this._labels[t], this.minimum > e.position || e.position > this.maximum || (a = this.getPixelCoordinatesOnAxis(e.position), this.tickThickness && (this.ctx.beginPath(), this.ctx.moveTo(a.x << 0, a.y << 0), this.ctx.lineTo(a.x - this.tickLength << 0, a.y << 0), this.ctx.stroke()), n && 0 !== r++ % 2 || (e.textBlock.x = a.x - e.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) - this.tickLength - 5, e.textBlock.y = a.y - e.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle), e.textBlock.render(!0)));
            this.title && (this._titleTextBlock = new y(this.ctx, {
                x: this.boundingRect.x1 + 5,
                y: this.lineCoordinates.y2,
                maxWidth: this.lineCoordinates.height,
                maxHeight: this.titleFontSize,
                angle: -90,
                text: this.title,
                horizontalAlign: "center",
                fontSize: this.titleFontSize,
                fontFamily: this.titleFontFamily,
                fontWeight: this.titleFontWeight,
                fontColor: this.titleFontColor,
                fontStyle: this.titleFontStyle,
                textBaseline: "top"
            }), this._titleTextBlock.measureText(), this._titleTextBlock.y = this.lineCoordinates.height / 2 + this._titleTextBlock.width / 2 + this.lineCoordinates.y1, this._titleTextBlock.render(!0))
        } else if ("right" === this._position) {
            for (this.ctx.lineWidth = this.tickThickness, this.ctx.strokeStyle = this.tickColor, t = 0; this._labels.length > t; t++) e = this._labels[t], this.minimum > e.position || e.position > this.maximum || (a = this.getPixelCoordinatesOnAxis(e.position), this.tickThickness && (this.ctx.beginPath(), this.ctx.moveTo(a.x << 0, a.y << 0), this.ctx.lineTo(a.x + this.tickLength << 0, a.y << 0), this.ctx.stroke()), n && 0 !== r++ % 2 || (e.textBlock.x = a.x + this.tickLength + 5, e.textBlock.y = a.y, e.textBlock.render(!0)));
            this.title && (this._titleTextBlock = new y(this.ctx, {
                x: this.boundingRect.x2 - 5,
                y: this.lineCoordinates.y2,
                maxWidth: this.lineCoordinates.height,
                maxHeight: this.titleFontSize,
                angle: 90,
                text: this.title,
                horizontalAlign: "center",
                fontSize: this.titleFontSize,
                fontFamily: this.titleFontFamily,
                fontWeight: this.titleFontWeight,
                fontColor: this.titleFontColor,
                fontStyle: this.titleFontStyle,
                textBaseline: "top"
            }), this._titleTextBlock.measureText(), this._titleTextBlock.y = this.lineCoordinates.height / 2 - this._titleTextBlock.width / 2 + this.lineCoordinates.y1, this._titleTextBlock.render(!0))
        }
    }, S.prototype.renderInterlacedColors = function() {
        var t, i, e = 0,
            a = this.chart.getPlotArea();
        if ("bottom" !== this._position && "top" !== this._position || !this.interlacedColor) {
            if (("left" === this._position || "right" === this._position) && this.interlacedColor)
                for (this.ctx.fillStyle = this.interlacedColor, e = 0; this._labels.length > e; e += 2) i = this.getPixelCoordinatesOnAxis(this._labels[e].position), t = e + 1 >= this._labels.length ? this.getPixelCoordinatesOnAxis(this.maximum) : this.getPixelCoordinatesOnAxis(this._labels[e + 1].position), this.ctx.fillRect(a.x1, t.y, Math.abs(a.x1 - a.x2), Math.abs(t.y - i.y))
        } else
            for (this.ctx.fillStyle = this.interlacedColor, e = 0; this._labels.length > e; e += 2) t = this.getPixelCoordinatesOnAxis(this._labels[e].position), i = e + 1 >= this._labels.length ? this.getPixelCoordinatesOnAxis(this.maximum) : this.getPixelCoordinatesOnAxis(this._labels[e + 1].position), this.ctx.fillRect(t.x, a.y1, Math.abs(i.x - t.x), Math.abs(a.y1 - a.y2))
    }, S.prototype.renderGrid = function() {
        var t, i, e = this.chart.getPlotArea();
        if ("bottom" === this._position || "top" === this._position) {
            if (this.gridThickness && this.gridThickness > 0)
                for (this.ctx.lineWidth = this.gridThickness, this.ctx.strokeStyle = this.gridColor, this.ctx.beginPath(), i = 0; this._labels.length > i; i++) this.minimum > this._labels[i].position || this._labels[i].position > this.maximum || (t = this.getPixelCoordinatesOnAxis(this._labels[i].position), this.ctx.moveTo(t.x << 0, e.y1 << 0), this.ctx.lineTo(t.x << 0, e.y2 << 0), this.ctx.stroke())
        } else if (("left" === this._position || "right" === this._position) && this.gridThickness && this.gridThickness > 0)
            for (this.ctx.lineWidth = this.gridThickness, this.ctx.strokeStyle = this.gridColor, this.ctx.beginPath(), i = 0; this._labels.length > i; i++) this.minimum > this._labels[i].position || this._labels[i].position > this.maximum || (t = this.getPixelCoordinatesOnAxis(this._labels[i].position), this.ctx.moveTo(e.x1 << 0, t.y << 0), this.ctx.lineTo(e.x2 << 0, t.y << 0), this.ctx.stroke())
    }, S.prototype.renderAxisLine = function() {
        "bottom" === this._position || "top" === this._position ? this.lineThickness && (this.ctx.lineWidth = this.lineThickness, this.ctx.strokeStyle = this.lineColor ? this.lineColor : "black", this.ctx.beginPath(), this.ctx.moveTo(this.lineCoordinates.x1, this.lineCoordinates.y1), this.ctx.lineTo(this.lineCoordinates.x2, this.lineCoordinates.y2), this.ctx.stroke()) : ("left" === this._position || "right" === this._position) && this.lineThickness && (this.ctx.lineWidth = this.lineThickness, this.ctx.strokeStyle = this.lineColor, this.ctx.beginPath(), this.ctx.moveTo(this.lineCoordinates.x1, this.lineCoordinates.y1), this.ctx.lineTo(this.lineCoordinates.x2, this.lineCoordinates.y2), this.ctx.stroke())
    }, S.prototype.getPixelCoordinatesOnAxis = function(t) {
        var i, e = {},
            a = this.lineCoordinates.width,
            n = this.lineCoordinates.height;
        return ("bottom" === this._position || "top" === this._position) && (i = a / Math.abs(this.maximum - this.minimum), e.x = this.lineCoordinates.x1 + i * (t - this.minimum), e.y = this.lineCoordinates.y1), ("left" === this._position || "right" === this._position) && (i = n / Math.abs(this.maximum - this.minimum), e.y = this.lineCoordinates.y2 - i * (t - this.minimum), e.x = this.lineCoordinates.x2), e
    }, S.prototype.calculateValueToPixelConvertionParameters = function() {
        var t = {
                pixelPerUnit: null,
                minimum: null,
                reference: null
            },
            i = this.lineCoordinates.width,
            e = this.lineCoordinates.height;
        t.minimum = this.minimum, ("bottom" === this._position || "top" === this._position) && (t.pixelPerUnit = i / Math.abs(this.maximum - this.minimum), t.reference = this.lineCoordinates.x1), ("left" === this._position || "right" === this._position) && (t.pixelPerUnit = -1 * e / Math.abs(this.maximum - this.minimum), t.reference = this.lineCoordinates.y2), this.convertionParameters = t
    }, S.prototype.calculateAxisParameters = function() {
        var t = this.chart.layoutManager.getFreeSpace();
        "bottom" === this._position || "top" === this._position ? (this.maxWidth = t.width, this.maxHeight = t.height) : (this.maxWidth = t.height, this.maxHeight = t.width);
        var i, e, a, n, s = "axisX" === this.type ? 500 > this.maxWidth ? 8 : Math.max(6, Math.floor(this.maxWidth / 62)) : Math.floor(this.maxWidth / 40);
        if ("axisX" === this.type ? (i = null !== this.sessionVariables.internalMinimum ? this.sessionVariables.internalMinimum : this.dataInfo.viewPortMin, e = null !== this.sessionVariables.internalMaximum ? this.sessionVariables.internalMaximum : this.dataInfo.viewPortMax, 0 === e - i && (e += .5, i -= .5), a = 1 / 0 !== this.dataInfo.minDiff ? this.dataInfo.minDiff : 1) : "axisY" === this.type && (i = this._options.minimum === void 0 ? this.dataInfo.viewPortMin : this._options.minimum, e = this._options.maximum === void 0 ? this.dataInfo.viewPortMax : this._options.maximum, 0 === e - i ? (e += 5, i -= 5) : (0 !== e && (e += Math.abs(.005)), 0 !== i && (i -= Math.abs(.005))), this.includeZero && this._options.minimum === void 0 && i > 0 && (i = 0), this.includeZero && this._options.maximum === void 0 && 0 > e && (e = 0)), "axisX" === this.type && "dateTime" === this.chart.plotInfo.axisXValueType ? (n = e - i, this.intervalType || (s >= n / 1 ? (this.interval = 1, this.intervalType = "millisecond") : s >= n / 2 ? (this.interval = 2, this.intervalType = "millisecond") : s >= n / 5 ? (this.interval = 5, this.intervalType = "millisecond") : s >= n / 10 ? (this.interval = 10, this.intervalType = "millisecond") : s >= n / 20 ? (this.interval = 20, this.intervalType = "millisecond") : s >= n / 50 ? (this.interval = 50, this.intervalType = "millisecond") : s >= n / 100 ? (this.interval = 100, this.intervalType = "millisecond") : s >= n / 200 ? (this.interval = 200, this.intervalType = "millisecond") : s >= n / 250 ? (this.interval = 250, this.intervalType = "millisecond") : s >= n / 300 ? (this.interval = 300, this.intervalType = "millisecond") : s >= n / 400 ? (this.interval = 400, this.intervalType = "millisecond") : s >= n / 500 ? (this.interval = 500, this.intervalType = "millisecond") : s >= n / (1 * z.secondDuration) ? (this.interval = 1, this.intervalType = "second") : s >= n / (2 * z.secondDuration) ? (this.interval = 2, this.intervalType = "second") : s >= n / (5 * z.secondDuration) ? (this.interval = 5, this.intervalType = "second") : s >= n / (10 * z.secondDuration) ? (this.interval = 10, this.intervalType = "second") : s >= n / (15 * z.secondDuration) ? (this.interval = 15, this.intervalType = "second") : s >= n / (20 * z.secondDuration) ? (this.interval = 20, this.intervalType = "second") : s >= n / (30 * z.secondDuration) ? (this.interval = 30, this.intervalType = "second") : s >= n / (1 * z.minuteDuration) ? (this.interval = 1, this.intervalType = "minute") : s >= n / (2 * z.minuteDuration) ? (this.interval = 2, this.intervalType = "minute") : s >= n / (5 * z.minuteDuration) ? (this.interval = 5, this.intervalType = "minute") : s >= n / (10 * z.minuteDuration) ? (this.interval = 10, this.intervalType = "minute") : s >= n / (15 * z.minuteDuration) ? (this.interval = 15, this.intervalType = "minute") : s >= n / (20 * z.minuteDuration) ? (this.interval = 20, this.intervalType = "minute") : s >= n / (30 * z.minuteDuration) ? (this.interval = 30, this.intervalType = "minute") : s >= n / (1 * z.hourDuration) ? (this.interval = 1, this.intervalType = "hour") : s >= n / (2 * z.hourDuration) ? (this.interval = 2, this.intervalType = "hour") : s >= n / (3 * z.hourDuration) ? (this.interval = 3, this.intervalType = "hour") : s >= n / (6 * z.hourDuration) ? (this.interval = 6, this.intervalType = "hour") : s >= n / (1 * z.dayDuration) ? (this.interval = 1, this.intervalType = "day") : s >= n / (2 * z.dayDuration) ? (this.interval = 2, this.intervalType = "day") : s >= n / (4 * z.dayDuration) ? (this.interval = 4, this.intervalType = "day") : s >= n / (1 * z.weekDuration) ? (this.interval = 1, this.intervalType = "week") : s >= n / (2 * z.weekDuration) ? (this.interval = 2, this.intervalType = "week") : s >= n / (3 * z.weekDuration) ? (this.interval = 3, this.intervalType = "week") : s >= n / (1 * z.monthDuration) ? (this.interval = 1, this.intervalType = "month") : s >= n / (2 * z.monthDuration) ? (this.interval = 2, this.intervalType = "month") : s >= n / (3 * z.monthDuration) ? (this.interval = 3, this.intervalType = "month") : s >= n / (6 * z.monthDuration) ? (this.interval = 6, this.intervalType = "month") : s >= n / (1 * z.yearDuration) ? (this.interval = 1, this.intervalType = "year") : s >= n / (2 * z.yearDuration) ? (this.interval = 2, this.intervalType = "year") : s >= n / (4 * z.yearDuration) ? (this.interval = 4, this.intervalType = "year") : (this.interval = Math.floor(S.getNiceNumber(n / (s - 1), !0) / z.yearDuration), this.intervalType = "year")), this.minimum = null !== this.sessionVariables.internalMinimum ? this.sessionVariables.internalMinimum : i - a / 2, this.maximum = this.sessionVariables.internalMaximum ? this.sessionVariables.internalMaximum : e + a / 2, this.valueFormatString || ("year" === this.intervalType ? this.valueFormatString = "YYYY" : "month" === this.intervalType ? this.valueFormatString = "MMM YYYY" : "week" === this.intervalType ? this.valueFormatString = "MMM DD YYYY" : "day" === this.intervalType ? this.valueFormatString = "MMM DD YYYY" : "hour" === this.intervalType ? this.valueFormatString = "hh:mm TT" : "minute" === this.intervalType ? this.valueFormatString = "hh:mm TT" : "second" === this.intervalType ? this.valueFormatString = "hh:mm:ss TT" : "millisecond" === this.intervalType && (this.valueFormatString = "fff'ms'")), this.intervalStartPosition = this.getLabelStartPoint(new Date(this.minimum), this.intervalType, this.interval)) : (this.intervalType = "number", n = S.getNiceNumber(e - i, !1), this.interval = this._options && this._options.interval ? this._options.interval : S.getNiceNumber(n / (s - 1), !0), this.minimum = null !== this.sessionVariables.internalMinimum ? this.sessionVariables.internalMinimum : Math.floor(i / this.interval) * this.interval, this.maximum = null !== this.sessionVariables.internalMaximum ? this.sessionVariables.internalMaximum : Math.ceil(e / this.interval) * this.interval, "axisX" === this.type ? (null === this.sessionVariables.internalMinimum && (this.minimum = i - a / 2), this.sessionVariables.internalMaximum || (this.maximum = e + a / 2), this.intervalStartPosition = Math.floor((this.minimum + this.interval) / this.interval) * this.interval) : "axisY" === this.type && (this.intervalStartPosition = this.minimum)), "axisX" === this.type && (this._absoluteMinimum = this._options && this._options.minimum !== void 0 ? this._options.minimum : this.dataInfo.min - a / 2, this._absoluteMaximum = this._options && this._options.maximum !== void 0 ? this._options.maximum : this.dataInfo.max + a / 2), !this.valueFormatString && (this.valueFormatString = "#,##0.##", n = Math.abs(this.maximum - this.minimum), 1 > n)) {
            var o = Math.floor(Math.abs(Math.log(n) / Math.LN10)) + 2;
            if (o > 2)
                for (var r = 0; o - 2 > r; r++) this.valueFormatString += "#"
        }
    }, S.prototype._getFontString = function() {
        return this.labelFontStyle + " " + this.labelFontWeight + " " + this.labelFontSize + "px " + this.labelFontFamily
    }, S.getNiceNumber = function(t, i) {
        var e, a = Math.floor(Math.log(t) / Math.LN10),
            n = t / Math.pow(10, a);
        return e = i ? 1.5 > n ? 1 : 3 > n ? 2 : 7 > n ? 5 : 10 : 1 >= n ? 1 : 2 >= n ? 2 : 5 >= n ? 5 : 10, e * Math.pow(10, a)
    }, S.prototype.getLabelStartPoint = function() {
        var t = a(this.interval, this.intervalType),
            i = Math.floor(this.minimum / t) * t,
            e = new Date(i);
        return "millisecond" === this.intervalType || ("second" === this.intervalType ? e.getMilliseconds() > 0 && (e.setSeconds(e.getSeconds() + 1), e.setMilliseconds(0)) : "minute" === this.intervalType ? (e.getSeconds() > 0 || e.getMilliseconds() > 0) && (e.setMinutes(e.getMinutes() + 1), e.setSeconds(0), e.setMilliseconds(0)) : "hour" === this.intervalType ? (e.getMinutes() > 0 || e.getSeconds() > 0 || e.getMilliseconds() > 0) && (e.setHours(e.getHours() + 1), e.setMinutes(0), e.setSeconds(0), e.setMilliseconds(0)) : "day" === this.intervalType ? (e.getHours() > 0 || e.getMinutes() > 0 || e.getSeconds() > 0 || e.getMilliseconds() > 0) && (e.setDate(e.getDate() + 1), e.setHours(0), e.setMinutes(0), e.setSeconds(0), e.setMilliseconds(0)) : "week" === this.intervalType ? (e.getDay() > 0 || e.getHours() > 0 || e.getMinutes() > 0 || e.getSeconds() > 0 || e.getMilliseconds() > 0) && (e.setDate(e.getDate() + (7 - e.getDay())), e.setHours(0), e.setMinutes(0), e.setSeconds(0), e.setMilliseconds(0)) : "month" === this.intervalType ? (e.getDate() > 1 || e.getHours() > 0 || e.getMinutes() > 0 || e.getSeconds() > 0 || e.getMilliseconds() > 0) && (e.setMonth(e.getMonth() + 1), e.setDate(1), e.setHours(0), e.setMinutes(0), e.setSeconds(0), e.setMilliseconds(0)) : "year" === this.intervalType && (e.getMonth() > 0 || e.getDate() > 1 || e.getHours() > 0 || e.getMinutes() > 0 || e.getSeconds() > 0 || e.getMilliseconds() > 0) && (e.setFullYear(e.getFullYear() + 1), e.setMonth(0), e.setDate(1), e.setHours(0), e.setMinutes(0), e.setSeconds(0), e.setMilliseconds(0))), e
    }, t(P, m), P.prototype._initialize = function() {
        if (this.enabled) {
            this.container = document.createElement("div"), this.container.style.height = "auto", this.container.style.position = "absolute", this.container.style.boxShadow = "1px 1px 2px 2px rgba(0,0,0,0.1)", this.container.style.zIndex = "1000", this.container.style.display = "none";
            var t = '<div style=" width: auto;';
            t += "height: auto;", t += "min-width: 50px;", t += "line-height: 20px;", t += "padding: 5px;", t += "font-family: Calibri, Arial, Georgia, serif;", t += "font-weight: 400;", t += "font-style: italic;", t += "font-size: 14px;", t += "color: #000000;", t += "text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);", t += "text-align: left;", t += "border: 2px solid gray;", t += "background: rgba(255,255,255,.9);", t += "text-indent: 0px;", t += "white-space: nowrap;", t += "border-radius: 10px;", t += '} "> Sample Tooltip</div>', this.container.innerHTML = t, this.contentDiv = this.container.firstChild, this.container.style.borderRadius = this.contentDiv.style.borderRadius, this.chart._canvasJSContainer.appendChild(this.container)
        }
    }, P.prototype.mouseMoveHandler = function(t, i) {
        var e = this;
        clearTimeout(this._timerId), this._timerId = setTimeout(function() {
            e._updateToolTip(t, i)
        }, 5)
    }, P.prototype._updateToolTip = function(t, i) {
        var e, a;
        if (this.enabled) {
            if (t === void 0 || i === void 0) {
                if (isNaN(this._prevX) || isNaN(this._prevY)) return;
                t = this._prevX, i = this._prevY
            } else this._prevX = t, this._prevY = i;
            var n, s = null,
                o = null,
                r = [],
                l = 0;
            if (this.shared && "none" !== this.chart.plotInfo.axisPlacement) {
                l = "xySwapped" === this.chart.plotInfo.axisPlacement ? (this.chart.axisX.maximum - this.chart.axisX.minimum) / this.chart.axisX.lineCoordinates.height * (this.chart.axisX.lineCoordinates.y2 - i) + this.chart.axisX.minimum : (this.chart.axisX.maximum - this.chart.axisX.minimum) / this.chart.axisX.lineCoordinates.width * (t - this.chart.axisX.lineCoordinates.x1) + this.chart.axisX.minimum;
                for (var h = [], d = 0; this.chart.data.length > d; d++) e = {}, e = this.chart.data[d].findDataPointByX(l, !0), e && e.index >= 0 && (e.dataSeries = this.chart.data[d], h.push(e));
                if (0 === h.length) return;
                h.sort(function(t, i) {
                    return t.distance - i.distance
                });
                var x = h[0];
                for (d = 0; h.length > d; d++) h[d].dataPoint.x.valueOf() === x.dataPoint.x.valueOf() && r.push(h[d]);
                h = null
            } else {
                var m = c(t, i, this.chart._eventManager.ghostCtx);
                if (m > 0 && this.chart._eventManager.objectMap[m] !== void 0) {
                    var p = this.chart._eventManager.objectMap[m];
                    this.currentSeriesIndex = p.dataSeriesIndex, this.currentDataPointIndex = p.dataPointIndex >= 0 ? p.dataPointIndex : -1
                } else this.currentDataPointIndex = -1;
                if (this.currentSeriesIndex >= 0) {
                    if (o = this.chart.data[this.currentSeriesIndex], e = {}, this.currentDataPointIndex >= 0) s = o.dataPoints[this.currentDataPointIndex], e.dataSeries = o, e.dataPoint = s, e.index = this.currentDataPointIndex, e.distance = Math.abs(s.x - l);
                    else {
                        if ("line" !== o.type && "stepLine" !== o.type && "spline" !== o.type && "area" !== o.type && "splineArea" !== o.type && "stackedArea" !== o.type && "stackedArea100" !== o.type) return;
                        l = (this.chart.axisX.maximum - this.chart.axisX.minimum) / this.chart.axisX.lineCoordinates.width * (t - this.chart.axisX.lineCoordinates.x1) + this.chart.axisX.minimum.valueOf(), e = o.findDataPointByX(l, !0), e.dataSeries = o, this.currentDataPointIndex = e.index, s = e.dataPoint
                    }
                    r.push(e)
                }
            }
            if (r.length > 0) {
                this.highlightObjects(r);
                var u = "";
                u = this.getToolTipInnerHTML({
                    entries: r
                }), this.contentDiv.innerHTML = u, this.contentDiv.innerHTML = u;
                var g = !1;
                "none" === this.container.style.display && (g = !0, this.container.style.display = "block"), this.contentDiv.style.borderRightColor = this.contentDiv.style.borderLeftColor = this.contentDiv.style.borderColor = this.borderColor ? this.borderColor : r[0].dataPoint.color ? r[0].dataPoint.color : r[0].dataSeries.color ? r[0].dataSeries.color : r[0].dataSeries._colorSet[r[0].index % r[0].dataSeries._colorSet.length], a = "pie" === r[0].dataSeries.type || "doughnut" === r[0].dataSeries.type || "bar" === r[0].dataSeries.type || "stackedBar" === r[0].dataSeries.type || "stackedBar100" === r[0].dataSeries.type ? t - 10 - this.container.clientWidth : this.chart.axisX.lineCoordinates.width / Math.abs(this.chart.axisX.maximum - this.chart.axisX.minimum) * Math.abs(r[0].dataPoint.x - this.chart.axisX.minimum) + this.chart.axisX.lineCoordinates.x1 + .5 - this.container.clientWidth << 0, a = a > 0 ? a + "px" : a + this.container.clientWidth + 20 + "px", n = 1 !== r.length || this.shared || "line" !== r[0].dataSeries.type && "stepLine" !== r[0].dataSeries.type && "spline" !== r[0].dataSeries.type && "area" !== r[0].dataSeries.type && "splineArea" !== r[0].dataSeries.type && "stackedArea" !== r[0].dataSeries.type && "stackedArea100" !== r[0].dataSeries.type ? "bar" === r[0].dataSeries.type || "stackedBar" === r[0].dataSeries.type || "stackedBar100" === r[0].dataSeries.type ? r[0].dataSeries.axisX.lineCoordinates.y2 - r[0].dataSeries.axisX.lineCoordinates.height / Math.abs(r[0].dataSeries.axisX.maximum - r[0].dataSeries.axisX.minimum) * Math.abs(r[0].dataPoint.x - r[0].dataSeries.axisX.minimum) + .5 << 0 : i : r[0].dataSeries.axisY.lineCoordinates.y2 - r[0].dataSeries.axisY.lineCoordinates.height / Math.abs(r[0].dataSeries.axisY.maximum - r[0].dataSeries.axisY.minimum) * Math.abs(r[0].dataPoint.y - r[0].dataSeries.axisY.minimum) + .5 << 0, n = -n + 10, n + this.container.clientHeight + 5 > 0 && (n -= n + this.container.clientHeight + 5 - 0), n += "px", this.container.style.left = a, this.container.style.bottom = n, !this.animationEnabled || g ? this.disableAnimation() : this.enableAnimation()
            }
        }
    }, P.prototype.highlightObjects = function(t) {
        var i;
        if (this.enabled) {
            var e = this.chart.overlaidCanvasCtx;
            this.chart.resetOverlayedCanvas();
            var a = this.chart.getPlotArea();
            e.beginPath(), e.rect(a.x1, a.y1, a.width, a.height), e.clip();
            for (var n = 0; t.length > n; n++) {
                var s = t[n],
                    o = this.chart._eventManager.objectMap[s.dataSeries.dataPointIds[s.index]];
                if (o && o.objectType && "dataPoint" === o.objectType) {
                    var r = this.chart.data[o.dataSeriesIndex],
                        l = o.dataPointIndex;
                    "line" === r.type || "stepLine" === r.type || "spline" === r.type || "scatter" === r.type || "area" === r.type || "splineArea" === r.type || "stackedArea" === r.type || "stackedArea100" === r.type ? (i = r.getMarkerProperties(l, o.x1, o.y1, this.chart.overlaidCanvasCtx), i.size = Math.max(1.5 * i.size << 0, 10), E.drawMarkers([i])) : "bubble" === r.type ? (i = r.getMarkerProperties(l, o.x1, o.y1, this.chart.overlaidCanvasCtx), i.size = o.size, i.color = "white", i.borderColor = "white", e.globalAlpha = .3, E.drawMarkers([i]), e.globalAlpha = 1) : "column" === r.type || "stackedColumn" === r.type || "stackedColumn100" === r.type || "bar" === r.type || "stackedBar" === r.type || "stackedBar100" === r.type ? (e.globalAlpha = .3, L(e, o.x1, o.y1, o.x2, o.y2, "white", !1, !1, !1, !1), e.globalAlpha = 1) : ("pie" === r.type || "doughnut" === r.type) && (e.globalAlpha = .3, Y(e, o.center, o.radius, "white", r.type, o.startAngle, o.endAngle), e.globalAlpha = 1)
                }
            }
            e.globalAlpha = 1, e.restore()
        }
    }, P.prototype.getToolTipInnerHTML = function(t) {
        for (var i = t.entries, e = "", a = null, n = null, s = 0, o = "", r = !0, l = 0; i.length > l; l++)
            if (i[l].dataSeries.toolTipContent || i[l].dataPoint.toolTipContent) {
                r = !1;
                break
            }
        if (r && this.content && "function" == typeof this.content) e = this.content({
            entries: i
        });
        else if (i.length > 1)
            for (l = 0; i.length > l; l++) a = i[l].dataSeries, n = i[l].dataPoint, s = i[l].index, o = "", 0 === l && r && !this.content && (o += this.chart.axisX.labels[n.x] !== void 0 ? this.chart.axisX.labels[n.x] : "{x}", o += "</br>"), "line" === a.type || "stepLine" === a.type || "spline" === a.type || "area" === a.type || "splineArea" === a.type || "column" === a.type || "bar" === a.type || "scatter" === a.type || "stackedColumn" === a.type || "stackedColumn100" === a.type || "stackedBar" === a.type || "stackedBar100" === a.type || "stackedArea" === a.type || "stackedArea100" === a.type ? o += n.toolTipContent ? n.toolTipContent : a.toolTipContent ? a.toolTipContent : this.content && "function" != typeof this.content ? this.content : '<span style="color:{color};">{name}:</span>&nbsp;&nbsp;{y}' : "bubble" === a.type ? o += n.toolTipContent ? n.toolTipContent : a.toolTipContent ? a.toolTipContent : this.content && "function" != typeof this.content ? this.content : '<span style="color:{color};\'">{name}:</span>&nbsp;&nbsp;{y}, &nbsp;&nbsp;{z}' : ("pie" === a.type || "doughnut" === a.type) && (o += n.toolTipContent ? n.toolTipContent : a.toolTipContent ? a.toolTipContent : this.content && "function" != typeof this.content ? this.content : "&nbsp;&nbsp;{y}"), e += this.chart.replaceKeywordsWithValue(o, n, a, s), i.length - 1 > l && (e += "</br>");
        else a = i[0].dataSeries, n = i[0].dataPoint, s = i[0].index, "line" === a.type || "stepLine" === a.type || "spline" === a.type || "area" === a.type || "splineArea" === a.type || "column" === a.type || "bar" === a.type || "scatter" === a.type || "stackedColumn" === a.type || "stackedColumn100" === a.type || "stackedBar" === a.type || "stackedBar100" === a.type || "stackedArea" === a.type || "stackedArea100" === a.type ? o = n.toolTipContent ? n.toolTipContent : a.toolTipContent ? a.toolTipContent : this.content && "function" != typeof this.content ? this.content : '<span style="color:{color};">' + (n.label ? "{label}" : "{x}") + " :</span>&nbsp;&nbsp;{y}" : "bubble" === a.type ? o = n.toolTipContent ? n.toolTipContent : a.toolTipContent ? a.toolTipContent : this.content && "function" != typeof this.content ? this.content : '<span style="color:{color};">' + (n.label ? "{label}" : "{x}") + ":</span>&nbsp;&nbsp;{y}, &nbsp;&nbsp;{z}" : ("pie" === a.type || "doughnut" === a.type) && (o = n.toolTipContent ? n.toolTipContent : a.toolTipContent ? a.toolTipContent : this.content && "function" != typeof this.content ? this.content : (n.name ? "{name}:&nbsp;&nbsp;" : n.label ? "{label}:&nbsp;&nbsp;" : "") + "{y}"), e += this.chart.replaceKeywordsWithValue(o, n, a, s);
        return e
    }, P.prototype.enableAnimation = function() {
        this.container.style.WebkitTransition || (this.container.style.WebkitTransition = "left .2s ease-out, bottom .2s ease-out", this.container.style.MozTransition = "left .2s ease-out, bottom .2s ease-out", this.container.style.MsTransition = "left .2s ease-out, bottom .2s ease-out", this.container.style.transition = "left .2s ease-out, bottom .2s ease-out")
    }, P.prototype.disableAnimation = function() {
        this.container.style.WebkitTransition && (this.container.style.WebkitTransition = "", this.container.style.MozTransition = "", this.container.style.MsTransition = "", this.container.style.transition = "")
    }, P.prototype.hide = function() {
        this.enabled && (this.container.style.display = "none", this.currentSeriesIndex = -1, this._prevX = 0 / 0, this._prevY = 0 / 0, this.chart.resetOverlayedCanvas())
    }, p.prototype.replaceKeywordsWithValue = function(t, i, e, a) {
        var n = /\{\s*[a-zA-Z]+\s*\}|"[^"]*"|'[^']*'/g,
            o = this,
            r = function(t) {
                if ('"' === t[0] && '"' === t[t.length - 1] || "'" === t[0] && "'" === t[t.length - 1]) return t.slice(1, t.length - 1);
                var n = s(t.slice(1, t.length - 1)),
                    r = null;
                if ("color" === n) return i.color ? i.color : e.color ? e.color : e._colorSet[a % e._colorSet.length];
                if (i.hasOwnProperty(n)) r = i;
                else {
                    if (!e.hasOwnProperty(n)) return "";
                    r = e
                }
                return "x" === n ? o.axisX && "dateTime" === o.plotInfo.axisXValueType ? X(r[n], i.xValueFormatString ? i.xValueFormatString : e.xValueFormatString ? e.xValueFormatString : o.axisX && o.axisX.valueFormatString ? o.axisX.valueFormatString : "DD MMM YY", o._cultureInfo) : F(r[n], i.xValueFormatString ? i.xValueFormatString : e.xValueFormatString ? e.xValueFormatString : "#,##0.########", o._cultureInfo) : "y" === n ? F(r[n], i.yValueFormatString ? i.yValueFormatString : e.yValueFormatString ? e.yValueFormatString : "#,##0.########", o._cultureInfo) : r[n]
            };
        return t.replace(n, r)
    }, C.prototype.reset = function() {
        this.lastObjectId = 0, this.objectMap = [], this.rectangularRegionEventSubscriptions = [], this.previousDataPointEventObject = null, this.ghostCtx.clearRect(0, 0, this.ghostCanvas.width, this.ghostCanvas.height), this.ghostCtx.beginPath()
    }, C.prototype.getNewObjectTrackingId = function() {
        return ++this.lastObjectId
    }, C.prototype.mouseEventHandler = function(t) {
        if ("mousemove" === t.type || "click" === t.type) {
            var i = null,
                e = null,
                a = null,
                n = -1,
                s = !1,
                o = !1,
                r = B(t),
                l = this.ghostCtx.getImageData(r.x, r.y, 1, 1),
                c = l.data;
            if (c[3] > 240) {
                var d = h(c[0], c[1], c[2]);
                if (this.objectMap[d] !== void 0 && "dataPoint" === this.objectMap[d].objectType) {
                    if (i = this.objectMap[d], e = this.chart.data[i.dataSeriesIndex], a = e.dataPoints[i.dataPointIndex], n = i.dataPointIndex, (null === this.previousDataPointEventObject || this.previousDataPointEventObject.dataSeriesIndex !== i.dataSeriesIndex || this.previousDataPointEventObject.dataPointIndex !== i.dataPointIndex) && (this.previousDataPointEventObject && (s = !0), a.mouseover && a.mouseover.call(a, {
                            x: r.x,
                            y: r.y,
                            dataPoint: a,
                            dataSeries: e,
                            dataPointIndex: n
                        }), !e.mouseover || null !== this.previousDataPointEventObject && this.previousDataPointEventObject.dataSeriesIndex === i.dataSeriesIndex || (e.mouseover && e.mouseover.call(e, {
                            x: r.x,
                            y: r.y,
                            dataPoint: a,
                            dataSeries: e,
                            dataPointIndex: n
                        }), this.previousDataPointEventObject && (o = !0))), "mousemove" === t.type) a.cursor ? t.target.style.cursor = a.cursor : e.cursor && (t.target.style.cursor = e.cursor), a.mousemove && a.mousemove.call(a, {
                        x: r.x,
                        y: r.y,
                        dataPoint: a,
                        dataSeries: e,
                        dataPointIndex: n
                    }), e.mousemove && e.mousemove.call(e, {
                        x: r.x,
                        y: r.y,
                        dataPoint: a,
                        dataSeries: e,
                        dataPointIndex: n
                    });
                    else if ("click" === t.type) {
                        var x = Math.sqrt(Math.pow(this.chart.dragStartPoint.x - r.x, 2) + Math.pow(this.chart.dragStartPoint.y - r.y, 2));
                        5 > x && (a.click && a.click.call(a, {
                            x: r.x,
                            y: r.y,
                            dataPoint: a,
                            dataSeries: e,
                            dataPointIndex: n
                        }), e.click && e.click.call(e, {
                            x: r.x,
                            y: r.y,
                            dataPoint: a,
                            dataSeries: e,
                            dataPointIndex: n
                        }), this.chart.pieDoughnutClickHandler && this.chart.pieDoughnutClickHandler.call(e, {
                            x: r.x,
                            y: r.y,
                            dataPoint: a,
                            dataSeries: e,
                            dataPointIndex: n
                        }))
                    }
                } else this.previousDataPointEventObject && (s = !0, o = !0)
            } else this.previousDataPointEventObject && (s = !0, o = !0);
            if (s || o) {
                t.target.style.cursor = this.chart._defaultCursor;
                var m = this.chart.data[this.previousDataPointEventObject.dataSeriesIndex],
                    p = m.dataPoints[this.previousDataPointEventObject.dataPointIndex],
                    u = this.previousDataPointEventObject.dataPointIndex;
                s && p.mouseout && p.mouseout.call(p, {
                    x: r.x,
                    y: r.y,
                    dataPoint: p,
                    dataSeries: m,
                    dataPointIndex: u
                }), o && m.mouseout && m.mouseout.call(m, {
                    x: r.x,
                    y: r.y,
                    dataPoint: p,
                    dataSeries: m,
                    dataPointIndex: u
                })
            }
            this.previousDataPointEventObject = i
        }
    }, t(M, m);
    var E = {
            drawMarker: function(t, i, e, a, n, s, o, r) {
                if (e) {
                    var l = 1;
                    e.fillStyle = s ? s : "#000000", e.strokeStyle = o ? o : "#000000", e.lineWidth = r ? r : 0, "circle" === a ? (e.beginPath(), e.arc(t, i, n / 2, 0, 360, !1), s && e.fill(), r && (o ? e.stroke() : (l = e.globalAlpha, e.globalAlpha = .15, e.strokeStyle = "black", e.stroke(), e.globalAlpha = l))) : "square" === a ? (e.beginPath(), e.rect(t - n / 2, i - n / 2, n, n), s && e.fill(), r && (o ? e.stroke() : (l = e.globalAlpha, e.globalAlpha = .15, e.strokeStyle = "black", e.stroke(), e.globalAlpha = l))) : "triangle" === a ? (e.beginPath(), e.moveTo(t - n / 2, i + n / 2), e.lineTo(t + n / 2, i + n / 2), e.lineTo(t, i - n / 2), e.closePath(), s && e.fill(), r && (o ? e.stroke() : (l = e.globalAlpha, e.globalAlpha = .15, e.strokeStyle = "black", e.stroke(), e.globalAlpha = l))) : "cross" === a && (e.strokeStyle = s, r = n / 4, e.lineWidth = r, e.beginPath(), e.moveTo(t - n / 2, i - n / 2), e.lineTo(t + n / 2, i + n / 2), e.stroke(), e.moveTo(t + n / 2, i - n / 2), e.lineTo(t - n / 2, i + n / 2), e.stroke())
                }
            },
            drawMarkers: function(t) {
                for (var i = 0; t.length > i; i++) {
                    var e = t[i];
                    E.drawMarker(e.x, e.y, e.ctx, e.type, e.size, e.color, e.borderColor, e.borderThickness)
                }
            }
        },
        O = {
            Chart: function(t, i) {
                var e = new p(t, i, this);
                this.render = function() {
                    e.render()
                }, this.addResizeListener = function(t) {
                    e.addResizeListener(t || window)
                }, this.resize = function() {
                    e.resize.call(e)
                }, this.options = e._options
            },
            addColorSet: function(t, i) {
                A[t] = i
            },
            addCultureInfo: function(t, i) {
                w[t] = i
            },
            intToHexColorString: l,
            RenderHelper: E,
            getBezierPoints: u,
            registerChart: function(t, i, e) {
                var a, n = t;
                n = n[0].toUpperCase() + n.slice(1), n = "render" + n, D[t] = n, a = "_process" + n, p.prototype[n] = i, e && (p.prototype[a] = e)
            }
        };
    O.Chart.version = "1.2.3", "function" == typeof define && define.amd ? define(function() {
        return O
    }) : this.CanvasJS = O
}).call(this),
    function() {
        "use strict";
        var t = function(t) {
            return t.registerChart("area", function(i) {
                var e = i.dataSeriesIndexes.length;
                if (!(0 >= e)) {
                    var a = this._eventManager.ghostCtx,
                        n = i.axisX.lineCoordinates,
                        s = i.axisY.lineCoordinates,
                        o = [],
                        r = this.getPlotArea();
                    this.ctx.save(), a.save(), this.ctx.beginPath(), this.ctx.rect(r.x1, r.y1, r.width, r.height), this.ctx.clip(), a.beginPath(), a.rect(r.x1, r.y1, r.width, r.height), a.clip();
                    for (var l = 0; i.dataSeriesIndexes.length > l; l++) {
                        var h = i.dataSeriesIndexes[l],
                            c = this.data[h],
                            d = c.dataPoints,
                            x = c.id;
                        this._eventManager.objectMap[x] = {
                            objectType: "dataSeries",
                            dataSeriesIndex: h
                        };
                        var m = t.intToHexColorString(x);
                        a.fillStyle = m, o = [];
                        var p, u, g, y, v = !0,
                            f = 0,
                            b = i.axisY.convertionParameters.reference + i.axisY.convertionParameters.pixelPerUnit * (0 - i.axisY.convertionParameters.minimum) + .5 << 0,
                            T = null;
                        if (d.length > 0) {
                            var S = c._colorSet[f % c._colorSet.length];
                            for (this.ctx.fillStyle = S; d.length > f; f++)
                                if (g = d[f].x.getTime ? d[f].x.getTime() : d[f].x, !(i.axisX.dataInfo.viewPortMin > g || g > i.axisX.dataInfo.viewPortMax) && (p = i.axisX.convertionParameters.reference + i.axisX.convertionParameters.pixelPerUnit * (g - i.axisX.convertionParameters.minimum) + .5 << 0, u = i.axisY.convertionParameters.reference + i.axisY.convertionParameters.pixelPerUnit * (d[f].y - i.axisY.convertionParameters.minimum) + .5 << 0, "number" == typeof d[f].y)) {
                                    v ? (this.ctx.beginPath(), this.ctx.moveTo(p, u), T = {
                                        x: p,
                                        y: u
                                    }, a.beginPath(), a.moveTo(p, u), v = !1) : (this.ctx.lineTo(p, u), a.lineTo(p, u), 0 === f % 250 && (0 >= i.axisY.minimum && i.axisY.maximum >= 0 ? y = b : 0 > i.axisY.maximum ? y = s.y1 : i.axisY.minimum > 0 && (y = n.y2), this.ctx.lineTo(p, y), this.ctx.lineTo(T.x, y), this.ctx.closePath(), this.ctx.fill(), this.ctx.beginPath(), this.ctx.moveTo(p, u), a.lineTo(p, y), a.lineTo(T.x, y), a.closePath(), a.fill(), a.beginPath(), a.moveTo(p, u), T = {
                                        x: p,
                                        y: u
                                    }));
                                    var P = c.dataPointIds[f];
                                    if (this._eventManager.objectMap[P] = {
                                            objectType: "dataPoint",
                                            dataSeriesIndex: h,
                                            dataPointIndex: f,
                                            x1: p,
                                            y1: u
                                        }, 0 !== d[f].markerSize && (d[f].markerSize > 0 || c.markerSize > 0)) {
                                        var C = c.getMarkerProperties(f, p, u, this.ctx);
                                        o.push(C);
                                        var M = t.intToHexColorString(P);
                                        o.push({
                                            x: p,
                                            y: u,
                                            ctx: a,
                                            type: C.type,
                                            size: C.size,
                                            color: M,
                                            borderColor: M,
                                            borderThickness: C.borderThickness
                                        })
                                    }(d[f].indexLabel || c.indexLabel) && this._indexLabels.push({
                                        chartType: "area",
                                        dataPoint: d[f],
                                        dataSeries: c,
                                        point: {
                                            x: p,
                                            y: u
                                        },
                                        color: S
                                    })
                                }
                            0 >= i.axisY.minimum && i.axisY.maximum >= 0 ? y = b : 0 > i.axisY.maximum ? y = s.y1 : i.axisY.minimum > 0 && (y = n.y2), this.ctx.lineTo(p, y), this.ctx.lineTo(T.x, y), this.ctx.closePath(), this.ctx.fill(), a.lineTo(p, y), a.lineTo(T.x, y), a.closePath(), a.fill(), T = {
                                x: p,
                                y: u
                            }, t.RenderHelper.drawMarkers(o)
                        }
                    }
                    this.ctx.restore(), this._eventManager.ghostCtx.restore()
                }
            }), t
        };
        return "function" == typeof define && define.amd ? (define(["../canvasjs"], t), void 0) : t(this.CanvasJS)
    }.call(this),
    function() {
        "use strict";
        var t = function(t) {
            return t.registerChart("line", function(i) {
                var e = i.dataSeriesIndexes.length;
                if (!(0 >= e)) {
                    var a = this._eventManager.ghostCtx;
                    this.ctx.save();
                    var n = this.getPlotArea();
                    this.ctx.beginPath(), this.ctx.rect(n.x1, n.y1, n.width, n.height), this.ctx.clip();
                    for (var s = [], o = 0; i.dataSeriesIndexes.length > o; o++) {
                        var r = i.dataSeriesIndexes[o],
                            l = this.data[r];
                        this.ctx.lineWidth = l.lineThickness;
                        var h = l.dataPoints,
                            c = l.id;
                        this._eventManager.objectMap[c] = {
                            objectType: "dataSeries",
                            dataSeriesIndex: r
                        };
                        var d = t.intToHexColorString(c);
                        a.strokeStyle = d, a.lineWidth = l.lineThickness > 0 ? Math.max(l.lineThickness, 4) : 0;
                        var x = l._colorSet,
                            m = x[0];
                        this.ctx.strokeStyle = m;
                        var p, u, g, y = !0,
                            v = 0;
                        if (h.length > 0) {
                            for (v = 0; h.length > v; v++)
                                if (g = h[v].getTime ? h[v].x.getTime() : h[v].x, !(i.axisX.dataInfo.viewPortMin > g || g > i.axisX.dataInfo.viewPortMax) && "number" == typeof h[v].y) {
                                    p = i.axisX.convertionParameters.reference + i.axisX.convertionParameters.pixelPerUnit * (g - i.axisX.convertionParameters.minimum) + .5 << 0, u = i.axisY.convertionParameters.reference + i.axisY.convertionParameters.pixelPerUnit * (h[v].y - i.axisY.convertionParameters.minimum) + .5 << 0;
                                    var f = l.dataPointIds[v];
                                    if (this._eventManager.objectMap[f] = {
                                            objectType: "dataPoint",
                                            dataSeriesIndex: r,
                                            dataPointIndex: v,
                                            x1: p,
                                            y1: u
                                        }, y ? (this.ctx.beginPath(), this.ctx.moveTo(p, u), a.beginPath(), a.moveTo(p, u), y = !1) : (this.ctx.lineTo(p, u), a.lineTo(p, u), 0 === v % 500 && (this.ctx.stroke(), this.ctx.beginPath(), this.ctx.moveTo(p, u), a.stroke(), a.beginPath(), a.moveTo(p, u))), h[v].markerSize > 0 || l.markerSize > 0) {
                                        var b = l.getMarkerProperties(v, p, u, this.ctx);
                                        s.push(b);
                                        var T = t.intToHexColorString(f);
                                        s.push({
                                            x: p,
                                            y: u,
                                            ctx: a,
                                            type: b.type,
                                            size: b.size,
                                            color: T,
                                            borderColor: T,
                                            borderThickness: b.borderThickness
                                        })
                                    }(h[v].indexLabel || l.indexLabel) && this._indexLabels.push({
                                        chartType: "line",
                                        dataPoint: h[v],
                                        dataSeries: l,
                                        point: {
                                            x: p,
                                            y: u
                                        },
                                        color: m
                                    })
                                }
                            this.ctx.stroke(), a.stroke()
                        }
                    }
                    t.RenderHelper.drawMarkers(s), this.ctx.restore(), this.ctx.beginPath(), a.beginPath()
                }
            }), t
        };
        return "function" == typeof define && define.amd ? (define(["../canvasjs"], t), void 0) : t(this.CanvasJS)
    }.call(this),
    function() {
        "use strict";
        var t = function(t) {
            return t.registerChart("splineArea", function(i) {
                var e = i.dataSeriesIndexes.length;
                if (!(0 >= e)) {
                    var a = this._eventManager.ghostCtx,
                        n = i.axisX.lineCoordinates,
                        s = i.axisY.lineCoordinates,
                        o = [],
                        r = this.getPlotArea();
                    this.ctx.save(), a.save(), this.ctx.beginPath(), this.ctx.rect(r.x1, r.y1, r.width, r.height), this.ctx.clip(), a.beginPath(), a.rect(r.x1, r.y1, r.width, r.height), a.clip();
                    for (var l, h = this.ctx, c = 0; i.dataSeriesIndexes.length > c; c++) {
                        var d = i.dataSeriesIndexes[c],
                            x = this.data[d],
                            m = x.dataPoints,
                            p = x.id;
                        this._eventManager.objectMap[p] = {
                            objectType: "dataSeries",
                            dataSeriesIndex: d
                        };
                        var u = t.intToHexColorString(p);
                        a.fillStyle = u, o = [];
                        var g, y, v, f, b = 0,
                            T = i.axisY.convertionParameters.reference + i.axisY.convertionParameters.pixelPerUnit * (0 - i.axisY.convertionParameters.minimum) + .5 << 0,
                            S = null,
                            P = [],
                            C = !1;
                        if (m.length > 0) {
                            for (x._colorSet.length > 1 ? (l = h.createLinearGradient(0, 0, 0, r.height), l.addColorStop(0, x._colorSet[0]), l.addColorStop(1, x._colorSet[1])) : l = x._colorSet[0], x._colorSet[2] && (C = !0, h.strokeStyle = x._colorSet[2], h.lineWidth = 1), h.fillStyle = l; m.length > b; b++)
                                if (v = m[b].x.getTime ? m[b].x.getTime() : m[b].x, !(i.axisX.dataInfo.viewPortMin > v || v > i.axisX.dataInfo.viewPortMax) && (g = i.axisX.convertionParameters.reference + i.axisX.convertionParameters.pixelPerUnit * (v - i.axisX.convertionParameters.minimum) + .5 << 0, y = i.axisY.convertionParameters.reference + i.axisY.convertionParameters.pixelPerUnit * (m[b].y - i.axisY.convertionParameters.minimum) + .5 << 0, "number" == typeof m[b].y)) {
                                    var M = x.dataPointIds[b];
                                    if (this._eventManager.objectMap[M] = {
                                            objectType: "dataPoint",
                                            dataSeriesIndex: d,
                                            dataPointIndex: b,
                                            x1: g,
                                            y1: y
                                        }, P[P.length] = {
                                            x: g,
                                            y: y
                                        }, 0 !== m[b].markerSize && (m[b].markerSize > 0 || x.markerSize > 0)) {
                                        var k = x.getMarkerProperties(b, g, y, this.ctx);
                                        o.push(k);
                                        var _ = t.intToHexColorString(M);
                                        o.push({
                                            x: g,
                                            y: y,
                                            ctx: a,
                                            type: k.type,
                                            size: k.size,
                                            color: _,
                                            borderColor: _,
                                            borderThickness: k.borderThickness
                                        })
                                    }(m[b].indexLabel || x.indexLabel) && this._indexLabels.push({
                                        chartType: "splineArea",
                                        dataPoint: m[b],
                                        dataSeries: x,
                                        point: {
                                            x: g,
                                            y: y
                                        },
                                        color: l
                                    })
                                }
                            var w = t.getBezierPoints(P, 2);
                            if (w.length > 0) {
                                for (h.beginPath(), a.beginPath(), h.moveTo(w[0].x, w[0].y), a.moveTo(w[0].x, w[0].y), b = 0; w.length - 3 > b; b += 3) h.bezierCurveTo(w[b + 1].x, w[b + 1].y, w[b + 2].x, w[b + 2].y, w[b + 3].x, w[b + 3].y), a.bezierCurveTo(w[b + 1].x, w[b + 1].y, w[b + 2].x, w[b + 2].y, w[b + 3].x, w[b + 3].y);
                                C && h.stroke(), 0 >= i.axisY.minimum && i.axisY.maximum >= 0 ? f = T : 0 > i.axisY.maximum ? f = s.y1 : i.axisY.minimum > 0 && (f = n.y2), C && (f -= h.lineWidth), S = {
                                    x: w[0].x,
                                    y: w[0].y
                                }, h.lineTo(w[w.length - 1].x, f), h.lineTo(S.x, f), h.closePath(), h.fill(), a.lineTo(w[w.length - 1].x, f), a.lineTo(S.x, f), a.closePath(), a.fill()
                            }
                            t.RenderHelper.drawMarkers(o)
                        }
                    }
                    this.ctx.restore(), this._eventManager.ghostCtx.restore()
                }
            }), t
        };
        return "function" == typeof define && define.amd ? (define(["../canvasjs"], t), void 0) : t(this.CanvasJS)
    }.call(this),
    function() {
        "use strict";

        function t(t, i) {
            return t - i
        }
        var i = function(i) {
            return i.registerChart("stackedArea", function(e) {
                var a, n, s, o, r, l = e.dataSeriesIndexes.length;
                if (!(0 >= l)) {
                    var h, c, d, x = null,
                        m = [],
                        p = this.getPlotArea(),
                        u = [],
                        g = [],
                        y = 0,
                        v = e.axisY.convertionParameters.reference + e.axisY.convertionParameters.pixelPerUnit * (0 - e.axisY.convertionParameters.minimum) << 0,
                        f = this._eventManager.ghostCtx;
                    f.beginPath(), this.ctx.save(), f.save(), this.ctx.beginPath(), this.ctx.rect(p.x1, p.y1, p.width, p.height), this.ctx.clip(), f.beginPath(), f.rect(p.x1, p.y1, p.width, p.height), f.clip();
                    for (var b = [], T = 0; e.dataSeriesIndexes.length > T; T++) {
                        r = e.dataSeriesIndexes[T], o = this.data[r], s = o.dataPoints;
                        var S;
                        for (o.dataPointIndexes = [], y = 0; s.length > y; y++) S = s[y].x.getTime ? s[y].x.getTime() : s[y].x, o.dataPointIndexes[S] = y, b[S] || (g.push(S), b[S] = !0);
                        g.sort(t)
                    }
                    for (T = 0; e.dataSeriesIndexes.length > T; T++) {
                        r = e.dataSeriesIndexes[T], o = this.data[r], s = o.dataPoints;
                        var P = !0,
                            C = [],
                            M = o.id;
                        this._eventManager.objectMap[M] = {
                            objectType: "dataSeries",
                            dataSeriesIndex: r
                        };
                        var k = i.intToHexColorString(M);
                        if (f.fillStyle = k, g.length > 0) {
                            for (x = o._colorSet[0], this.ctx.fillStyle = x, y = 0; g.length > y; y++) {
                                d = g[y];
                                var _ = null;
                                if (_ = o.dataPointIndexes[d] >= 0 ? s[o.dataPointIndexes[d]] : {
                                        x: d,
                                        y: 0
                                    }, !(e.axisX.dataInfo.viewPortMin > d || d > e.axisX.dataInfo.viewPortMax) && "number" == typeof _.y) {
                                    h = e.axisX.convertionParameters.reference + e.axisX.convertionParameters.pixelPerUnit * (d - e.axisX.convertionParameters.minimum) + .5 << 0, c = e.axisY.convertionParameters.reference + e.axisY.convertionParameters.pixelPerUnit * (_.y - e.axisY.convertionParameters.minimum) + .5 << 0;
                                    var w = u[d] ? u[d] : 0;
                                    if (c -= w, C.push({
                                            x: h,
                                            y: v - w
                                        }), u[d] = v - c, P) this.ctx.beginPath(), this.ctx.moveTo(h, c), f.beginPath(), f.moveTo(h, c), P = !1;
                                    else if (this.ctx.lineTo(h, c), f.lineTo(h, c), 0 === y % 250) {
                                        for (; C.length > 0;) a = C.pop(), this.ctx.lineTo(a.x, a.y), f.lineTo(a.x, a.y);
                                        this.ctx.closePath(), this.ctx.fill(), this.ctx.beginPath(), this.ctx.moveTo(h, c), f.closePath(), f.fill(), f.beginPath(), f.moveTo(h, c), C.push({
                                            x: h,
                                            y: v - w
                                        })
                                    }
                                    if (o.dataPointIndexes[d] >= 0 && (n = o.dataPointIds[o.dataPointIndexes[d]], this._eventManager.objectMap[n] = {
                                            objectType: "dataPoint",
                                            dataSeriesIndex: r,
                                            dataPointIndex: o.dataPointIndexes[d],
                                            x1: h,
                                            y1: c
                                        }), o.dataPointIndexes[d] >= 0 && 0 !== _.markerSize && (_.markerSize > 0 || o.markerSize > 0)) {
                                        var A = o.getMarkerProperties(y, h, c, this.ctx);
                                        m.push(A);
                                        var I = i.intToHexColorString(n);
                                        m.push({
                                            x: h,
                                            y: c,
                                            ctx: f,
                                            type: A.type,
                                            size: A.size,
                                            color: I,
                                            borderColor: I,
                                            borderThickness: A.borderThickness
                                        })
                                    }(_.indexLabel || o.indexLabel) && this._indexLabels.push({
                                        chartType: "stackedArea",
                                        dataPoint: _,
                                        dataSeries: o,
                                        point: {
                                            x: h,
                                            y: c
                                        },
                                        color: x
                                    })
                                }
                            }
                            for (; C.length > 0;) a = C.pop(), this.ctx.lineTo(a.x, a.y), f.lineTo(a.x, a.y);
                            this.ctx.closePath(), this.ctx.fill(), this.ctx.beginPath(), this.ctx.moveTo(h, c), f.closePath(), f.fill(), f.beginPath(), f.moveTo(h, c)
                        }
                        delete o.dataPointIndexes
                    }
                    i.RenderHelper.drawMarkers(m), this.ctx.restore(), f.restore()
                }
            }), i
        };
        return "function" == typeof define && define.amd ? (define(["../canvasjs"], i), void 0) : i(this.CanvasJS)
    }.call(this);