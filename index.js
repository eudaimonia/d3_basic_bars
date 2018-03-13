const count = 12;
const max = 100;

function genData() {
    var dataset=[];
    for(var i = 0; i < count; i++) {
        var val = Math.floor(Math.random() * max + 1);
        dataset.push(val);
    }
    return dataset;
}

function height(d) {
    return `${d * 5}px`;
}

const barW = 20;
const barM = 2;

d3.select('#bar-chart').
    style('height', height(max + 2)).
    style('width', () => {
        return `${(barM + barW) * count}px`;
    }).
    selectAll('div').
    data(genData()).
    enter().
    append('div').
    attr('class', 'bar').
    style('width', `${barW}px`).
    style('margin-left', `${barM}px`).
    style('height', height).
    text(d=>{return d;});

var btn = document.querySelector('button')
btn.onclick = function(e){
    d3.select('#bar-chart').
        selectAll('div').
        data(genData()).
        transition().
        duration(1000).
        on('start', (d, i, nodes) => {
            d3.select(nodes[i]).text('');
        }).
        on('end', (d, i, nodes)=> {
            d3.select(nodes[i]).text(d);
        }).
        style('height', height);
};
