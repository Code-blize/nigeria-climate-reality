
/**
 * Nigeria's Climate Reality
 * Script: 03_temperature_trend.js
 *
 * TEMPLATE ONLY.
 * Replace the asset ID and band name with the actual inputs.
 * Confirm the source data are in degrees Celsius.
 */

var TEMPERATURE_ASSET = 'projects/YOUR_PROJECT/assets/YOUR_ANNUAL_TEMPERATURE_COLLECTION';

var START_YEAR = 1984;
var END_YEAR = 2025;

var nigeria = ee.FeatureCollection('FAO/GAUL/2015/level0')
  .filter(ee.Filter.eq('ADM0_NAME', 'Nigeria'));

var roi = nigeria.geometry();

var annualTemperature = ee.ImageCollection(TEMPERATURE_ASSET)
  .filterDate(
    START_YEAR + '-01-01',
    (END_YEAR + 1) + '-01-01'
  )
  .select('temperature_c');

var withTime = annualTemperature.map(function(image) {
  var year = ee.Date(image.get('system:time_start'))
    .difference(ee.Date('1984-01-01'), 'year');

  var timeBand = ee.Image.constant(year)
    .rename('time')
    .toFloat();

  return timeBand.addBands(
    image.toFloat().rename('temperature_c')
  );
});

var fit = withTime
  .select(['time', 'temperature_c'])
  .reduce(ee.Reducer.linearFit());

var trendPerYear = fit.select('scale');

var trendPerDecade = trendPerYear
  .multiply(10)
  .rename('temperature_trend_c_per_decade')
  .clip(roi);

Map.centerObject(nigeria, 6);

Map.addLayer(
  trendPerDecade,
  {
    min: -0.1,
    max: 0.7,
    palette: ['2166ac', '67a9cf', 'd1e5f0', 'fddbc7', 'ef8a62', 'b2182b']
  },
  'Temperature trend (°C/decade)'
);

print('Annual temperature collection', annualTemperature);
print('Temperature trend (°C/decade)', trendPerDecade);

Export.image.toDrive({
  image: trendPerDecade,
  description: 'Nigeria_Temperature_Trend_C_per_Decade',
  folder: 'Nigeria_Climate_Reality',
  fileNamePrefix: 'Nigeria_Temperature_Trend_C_per_Decade',
  region: roi,
  scale: 50000,
  maxPixels: 1e13
});
