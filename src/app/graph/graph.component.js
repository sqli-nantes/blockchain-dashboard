"use strict";
var core_1 = require('@angular/core');
var graph_options_1 = require('./graph.options');
var app_service_1 = require('../app.service');
var _ = require('lodash');
var GraphComponent = (function (_super) {
    __extends(GraphComponent, _super);
    function GraphComponent(service) {
        _super.call(this);
        this.service = service;
    }
    GraphComponent.prototype.getGoogle = function () {
        return google;
    };
    GraphComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.googleLoaded) {
            this.googleLoaded = true;
            google.charts.load('current', { packages: ['corechart', 'line'] });
        }
        google.charts.setOnLoadCallback(function () {
            _this.drawGraph();
        });
        this.service.newTransac.subscribe(function (transaction) { return _this.changeTransactionEventHandler(transaction); });
    };
    GraphComponent.prototype.createLineChart = function (element) {
        return new google.visualization.LineChart(element);
    };
    GraphComponent.prototype.createDataTable = function (array) {
        return google.visualization.arrayToDataTable(array);
    };
    GraphComponent.prototype.drawGraph = function () {
        var firstRow = [];
        var table = [];
        table.push('Date');
        table = _.concat(table, this.user['name']);
        this.options = graph_options_1.OPTIONS;
        this.setOptions();
        firstRow = [new Date().toLocaleTimeString(), this.user['balance']];
        this.data = this.createDataTable([
            table,
            firstRow
        ]);
        this.chart = this.createLineChart(document.getElementById('chart_divEvolution' + this.user.name));
        this.chart.draw(this.data, this.options);
    };
    // function to update the chart with new data.
    GraphComponent.prototype.updateChart = function (transaction) {
        var newData = [];
        var newBalances = [];
        newBalances = this.user['balance'];
        this.setOptions();
        newData = [transaction.time.toLocaleTimeString()];
        newData[0] = _.concat(newData, newBalances);
        // now add the rows.
        this.data.addRows(newData);
        if (this.data.getNumberOfRows() > 5) {
            this.data.removeRow(0);
        }
        // redraw the chart.
        this.chart.draw(this.data, this.options);
    };
    GraphComponent.prototype.randomize = function (num) {
        return Math.floor(Math.random() * num);
    };
    GraphComponent.prototype.randomizeDate = function (rangeOfDays, startHour, hourRange) {
        var today = new Date(Date.now());
        return new Date(today.getFullYear() + 1900, today.getMonth(), today.getDate() + Math.random() * rangeOfDays, Math.random() * hourRange + startHour, Math.random() * 60).toLocaleTimeString();
    };
    GraphComponent.prototype.setOptions = function () {
        this.options.title = this.user['name'];
        switch (this.user['name']) {
            case 'Jim':
                this.options.colors = ['rgb(255, 227, 172)'];
                break;
            case 'Seraphin':
                this.options.colors = ['rgb(205, 177, 122)'];
                break;
            default:
                this.options.colors = ['rgb(155, 127, 72)'];
                break;
        }
    };
    GraphComponent.prototype.changeTransactionEventHandler = function (transaction) {
        this.updateChart(transaction);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], GraphComponent.prototype, "user", void 0);
    GraphComponent = __decorate([
        core_1.Component({
            selector: 'graph',
            styleUrls: ['./_graph.scss'],
            template: "\n    <div class=\"chart\" >\n        <div [attr.id]=\"'chart_divEvolution' + user.name\"></div>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [app_service_1.AppService])
    ], GraphComponent);
    return GraphComponent;
}(core_1.OnInit));
exports.GraphComponent = GraphComponent;
//# sourceMappingURL=graph.component.js.map