var stock = {
    randomAroundZero: function () {
        return Math.random() > 0.5 ? 1 : -1;
        // return Math.random() < .5 ? -1 : 1;
    },

    getStockPrice: function (input) {
        let start = input.startingPoint;
        let rate = input.rate;
        let variance = input.variance;

        // return start * rate + variance * stock.randomAroundZero();
        // return Math.round(start * rate + variance * stock.randomAroundZero());
        return Math.floor((start * rate + variance * stock.randomAroundZero()) * 100) / 100

    }
};

module.exports = stock;
