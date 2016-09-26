// Options d'affichage des graphs

'use strict';
export let OPTIONS = {
  titleTextStyle: {
    color: 'white',
    fontSize: 23
  },
  lineWidth: 5,
  chartArea: { width: '70%', height: '40%'},
  backgroundColor: 'transparent',
  /* curveType: 'function', */
  legend: {
    position: 'bottom',
    textStyle: {
        color: 'white'
    }
  },
  animation: {
    duration: 500,
    easing: 'out',
  },
  hAxis: {
    title: 'Heure de la transaction',
    textStyle: {
        color: 'white'
    },
    titleTextStyle: {
        color: 'white',
        fontSize: 18
    }
  },
  vAxis: {
    title: 'Balance (en Ether)',
    textStyle: {
        color: 'white',
    },
    gridlines: {
      color: 'rgba(255,255,255,0.5)'
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

