# Methodology and reproducibility log

This file separates known project descriptions from technical details that still need to be recovered from the actual GIS workflow.

## Temperature trend
**Known:** NASA POWER annual mean near-surface air temperature, 1984–2025; output trend expressed in °C/decade.

**Record from the actual workflow:** input parameters and units; exact trend/statistical method; conversion to °C/decade; mask/clip geometry; output CRS, cell size, NoData value and valid-cell count; software/version. Do not infer the trend method from the output layer name alone.

## Rainfall variability
**Known:** CHIRPS v3 daily precipitation aggregated to annual totals for 1981–2025; coefficient of variation used for relative year-to-year variability.

`CV (%) = (standard deviation of annual totals / mean annual total) × 100`

**Record:** exact input files/product; annual aggregation; sample or population standard deviation; treatment of missing years and zero means; masking, CRS, cell size and NoData handling; software/version. CV is not a trend estimate.

## River-flood hazard
**Known:** JRC Global River Flood Hazard Maps v2.1, RP100 scenario, modelled river-flood depth.

**Record:** exact asset/band and units; scenario metadata; clipping, reprojection/resampling and symbology transformations; output CRS/cell size; NoData handling. A 1-in-100-year return period is not a fixed schedule; the approximate 1% annual exceedance probability is conditional on model assumptions.

## Population distribution
**Known:** WorldPop reference year 2025, approximately 100 m grid.

**Record:** exact product ID and units; whether values represent people per cell or density; clipping/reprojection/resampling; output CRS; NoData handling and licence. Population distribution is not equivalent to exposure or vulnerability.

## Shared processing and validation
For each final layer, record input(s), tool/operation, parameters, output name, CRS, cell size/alignment, NoData handling, units, symbology, and checks performed. Verify spatial extent, value ranges, NoData gaps, legend/text consistency, and public map accessibility.

## Reproducibility status
The StoryMap and broad analytical approach are documented, but this is not yet a complete reproduction recipe. Fill in technical details from the original ArcGIS Pro project, geoprocessing history, source files, and layer metadata.
