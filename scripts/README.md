
# Google Earth Engine Scripts

This directory contains JavaScript scripts for geospatial processing in Google Earth Engine (GEE).

## Scripts

| Script | Purpose |
|---|---|
| `01_rainfall_variability.js` | Calculate annual precipitation totals and coefficient of variation |
| `02_river_flood_hazard.js` | Prepare the JRC RP100 river-flood depth layer |
| `03_temperature_trend.js` | Estimate temperature trends from an annual image collection |
| `04_population_distribution.js` | Prepare the WorldPop population distribution layer |

## Requirements

- A Google Earth Engine account
- Access to the required public datasets or project assets
- An appropriate Nigeria boundary geometry
- Export destinations and permissions configured in Earth Engine

## Reproducibility

Scripts must document their input datasets, time periods, bands, processing parameters, output units, and limitations.

Scripts that require private or project-specific assets contain placeholders that must be replaced with the actual asset IDs.

The scripts are processing templates unless their inputs and outputs have been verified against the original project workflow.
