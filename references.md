# References

This project draws on publicly available climate, hydrological hazard, and population datasets to examine spatial patterns across Nigeria. The references below identify the primary data providers and technical resources used in the project.

## 1. Climate Data

### NASA POWER

NASA Prediction Of Worldwide Energy Resources (POWER) provides meteorological and solar data used in climate and environmental analysis.

- **Project use:** Near-surface air temperature data for the 1984–2025 temperature-trend analysis.
- **Data portal:** https://power.larc.nasa.gov/
- **Documentation:** https://power.larc.nasa.gov/docs/

### Climate Hazards Center InfraRed Precipitation with Stations (CHIRPS)

CHIRPS is a precipitation dataset developed by the Climate Hazards Center, combining satellite observations and station data.

- **Project use:** Precipitation data for the 1981–2025 rainfall-variability analysis.
- **Data portal:** https://www.chc.ucsb.edu/data
- **Note:** The exact CHIRPS product version used in the analysis should be confirmed from the original processing workflow.

## 2. River-Flood Hazard Data

### Joint Research Centre (JRC) Global River Flood Hazard Maps v2.1

The JRC Global River Flood Hazard Maps provide modelled river-flood hazard information for specified return-period scenarios.

- **Project use:** Modelled river-flood depth for the 1-in-100-year return-period (RP100) scenario.
- **Google Earth Engine catalogue:** https://developers.google.com/earth-engine/datasets/catalog/JRC_CEMS_GLOFAS_FloodHazard_v2_1
- **Interpretation:** The RP100 layer represents a modelled scenario, not a prediction of a specific flood event or a map of every type of flooding.

## 3. Population Data

### WorldPop

WorldPop provides gridded population estimates designed to support demographic, health, development, and spatial analysis.

- **Project use:** Estimated population distribution for the 2025 reference year.
- **Data portal:** https://www.worldpop.org/
- **Note:** The exact product identifier, licence, and population-value units should be confirmed from the source metadata.

## 4. Geospatial Tools and Documentation

### Google Earth Engine

Google Earth Engine provides a platform for processing and analysing geospatial datasets using JavaScript and other supported interfaces.

- **Documentation:** https://developers.google.com/earth-engine/guides
- **Project use:** Cloud-based geospatial data processing and analysis.

### Esri ArcGIS Pro

ArcGIS Pro supports desktop GIS workflows, spatial analysis, cartography, and geospatial data management.

- **Documentation:** https://pro.arcgis.com/en/pro-app/latest/help/main/welcome-to-the-arcgis-pro-app-help.htm

### Esri ArcGIS Online

ArcGIS Online supports hosted web maps, online layers, and sharing geospatial information.

- **Documentation:** https://doc.arcgis.com/en/arcgis-online/

### Esri ArcGIS StoryMaps

ArcGIS StoryMaps enables the integration of maps, text, and other media into interactive geographic narratives.

- **Documentation:** https://doc.arcgis.com/en/arcgis-storymaps/

## 5. Administrative Boundaries

The project uses an administrative-boundary dataset identified in the GIS workflow as `nga_polbnda_adm1_1m_salb`.

The original producer, release/version, source URL, and licence have not yet been verified. These details should be added after examining the dataset's metadata.

## 6. Citation and Data Reuse

These links identify the principal data providers and technical documentation. They are not substitutes for complete citations of the exact dataset versions used.

Anyone reusing this project should:

- Cite the original providers and specific datasets.
- Follow the applicable data licences and attribution requirements.
- Record product versions, access dates, and processing methods where available.
- Preserve the distinction between climate trends, rainfall variability, modelled hazard, and population distribution.

For the project's objectives, methods, and limitations, see [`README.md`](README.md).
