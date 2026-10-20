
/**
 * Nigeria's Climate Reality
 * Script: 04_population_distribution.js
 *
 * TEMPLATE ONLY.
 * Replace the asset ID and band name with the actual WorldPop asset.
 * Confirm whether values represent people per cell or population density.
 */

var POPULATION_ASSET =
  'projects/YOUR_PROJECT/assets/YOUR_WORLDPOP_2025_IMAGE';

var nigeria = ee.FeatureCollection('FAO/GAUL/2015/level0')
  .filter(ee.Filter.eq('ADM0_NAME', 'Nigeria'));

var roi = nigeria.geometry();

var population = ee.Image(POPULATION_ASSET)
  .select(0)
  .clip(roi)
  .rename('population_2025');

Map.centerObject(nigeria, 6);

Map.addLayer(
  population,
  {
    min: 0,
    max: 1000,
    palette: ['fff7bc', 'fec44f', 'fe9929', 'cc4c02', '800026']
  },
  'Estimated population distribution (2025)'
);

print('Population image', population);

Export.image.toDrive({
  image: population,
  description: 'Nigeria_WorldPop_Population_2025',
  folder: 'Nigeria_Climate_Reality',
  fileNamePrefix: 'Nigeria_WorldPop_Population_2025',
  region: roi,
  scale: 100,
  maxPixels: 1e13
});
