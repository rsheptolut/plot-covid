# Plotting COVID-19

[Live site here](https://rsheptolut.github.io/plot-covid/)

A simple app to compare country trajectories in battling COVID-19, with shareable links. Should work on mobile.

Uses up-to-date data from [pomber/covid19](https://github.com/pomber/covid19), which in turn is being continuously updated from from Johns Hopkins CSSE [CSSEGISandData/COVID-19](https://github.com/CSSEGISandData/COVID-19). Uses [Chart.js](https://github.com/chartjs) for its charting needs.

Charts available:
- Cases (total / new / growth factor),
- Deaths (total / new / growth factor),
- Recoveries (total / new / growh factor).

Settings available:
- Correcting for population,
- Log / linear scale,
- Moving average,
- Starting all curves from same value of cases OR from same date.
