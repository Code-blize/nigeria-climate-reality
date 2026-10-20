
/**
 * Nigeria's Climate Reality
 * Script: 02_river_flood_hazard.js
 *
 * Prepares the JRC modelled RP100 river-flood depth layer.
 */

var nigeria = ee.FeatureCollection('FAO/GAUL/2015/level0')
  .filter(ee.Filter.eq('ADM0_NAME', 'Nigeria'));

var roi = nigeria.geometry();

var floodCollection = ee.ImageCollection(
  'JRC/CEMS_GLOFAS/FloodHazard/v2_1'
);

var floodDepth = floodCollection
  .mosaic()
  .select('RP100_depth')
  .clip(roi)
  .rename('RP100_depth_m');

Map.centerObject(nigeria, 6);

Map.addLayer(
  floodDepth,
  {
    min: 0.1,
    max: 5,
    palette: ['deebf7', '9ecae1', '3182bd', '08519c']
  },
  'JRC RP100 flood depth (m)'
);

print('JRC flood collection', floodCollection);
print('RP100 depth layer', floodDepth);

Export.image.toDrive({
  image: floodDepth,
  description: 'Nigeria_JRC_RP100_Flood_Depth',
  folder: 'Nigeria_Climate_Reality',
  fileNamePrefix: 'Nigeria_JRC_RP100_Flood_Depth',
  region: roi,
  scale: 90,
  maxPixels: 1e13
});
