// Options d'affichage des graphs

'use strict';
export let OPTIONS = {
  titleTextStyle: {
    position: 'center',
    color: 'white',
    fontSize: 23
  },
  colors: ['rgb(255, 227, 172)'],
  lineWidth: 5,
  chartArea: { width: '85%', height: '65%'},
  backgroundColor: 'transparent',
  /* curveType: 'function', */
  legend: {
    position: 'none',
    textStyle: {
        color: 'white'
    }
  },
  animation: {
    duration: 500,
    easing: 'out',
  },
  hAxis: {
    textStyle: {
        color: 'white',
        fontName: 'Roboto'
    },
    titleTextStyle: {
        color: 'white',
        fontSize: 18
    }
  },
  vAxis: {
    textStyle: {
        color: 'white',
    },
    gridlines: {
      color: 'transparent'
    },
    titleTextStyle: {
        color: 'white',
        fontSize: 18
    },
    viewWindow: {
      min: 0
      // max: _.max(_.map(this.users, u => u['balance']*2))
    }
  }
};

