
/**
 * Nigeria's Climate Reality
 * Script: 01_rainfall_variability.js
 *
 * Example workflow using public CHIRPS daily data.
 * NOTE: The public collection below is CHIRPS v2.0.
 * Replace it if the original analysis used CHIRPS v3 assets.
 */

var START_YEAR = 1981;
var END_YEAR = 2025;

var nigeria = ee.FeatureCollection('FAO/GAUL/2015/level0')
  .filter(ee.Filter.eq('ADM0_NAME', 'Nigeria'));

var roi = nigeria.geometry();

var chirps = ee.ImageCollection('UCSB-CHG/CHIRPS/DAILY')
  .filterDate(
    START_YEAR + '-01-01',
    (END_YEAR + 1) + '-01-01'
  )
  .select('precipitation');

var years = ee.List.sequence(START_YEAR, END_YEAR);

var annualRainfall = ee.ImageCollection.fromImages(
  years.map(function(year) {
    year = ee.Number(year);

    var annual = chirps
      .filter(ee.Filter.calendarRange(year, year, 'year'))
      .sum()
      .rename('annual_precipitation')
      .set('year', year)
      .set(
        'system:time_start',
        ee.Date.fromYMD(year, 1, 1).millis()
      );

    return annual.clip(roi);
  })
);

var meanRainfall = annualRainfall
  .mean()
  .rename('mean_annual_precipitation');

var standardDeviation = annualRainfall
  .reduce(ee.Reducer.stdDev())
  .rename('annual_precipitation_stddev');

var rainfallCV = standardDeviation
  .divide(meanRainfall)
  .multiply(100)
  .rename('rainfall_cv_percent')
  .updateMask(meanRainfall.gt(0))
  .clip(roi);

Map.centerObject(nigeria, 6);

Map.addLayer(
  rainfallCV,
  {
    min: 0,
    max: 35,
    palette: ['ffffcc', 'fd8d3c', 'bd0026']
  },
  'Rainfall variability CV (%)'
);

Map.addLayer(
  meanRainfall.clip(roi),
  {
    min: 500,
    max: 2500,
    palette: ['fff7bc', 'fec44f', 'd95f0e']
  },
  'Mean annual rainfall (mm)'
);

print('Annual rainfall collection', annualRainfall);
print('Rainfall CV (%)', rainfallCV);

Export.image.toDrive({
  image: rainfallCV,
  description: 'Nigeria_Rainfall_Variability_CV_1981_2025',
  folder: 'Nigeria_Climate_Reality',
  fileNamePrefix: 'Nigeria_Rainfall_Variability_CV_1981_2025',
  region: roi,
  scale: 5566,
  maxPixels: 1e13
});
