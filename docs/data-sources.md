# Data sources and provenance

Record the exact product, version, access date, source URL, licence, spatial resolution, temporal coverage, and processing applied to each input.

| Theme | Known source/use | Still to verify |
|---|---|---|
| Temperature | NASA POWER; annual mean near-surface temperature trend, 1984–2025 | Exact product/API parameters, original units, trend method, output CRS, NoData handling |
| Rainfall | CHIRPS v3; annual totals and CV, 1981–2025 | Exact files, annual aggregation, standard-deviation convention, missing/zero means, CRS |
| Flood hazard | JRC Global River Flood Hazard Maps v2.1; RP100 scenario | Exact asset/band, units, scenario metadata, resampling, CRS |
| Population | WorldPop; 2025, approximately 100 m | Exact product ID, units (count per cell vs density), licence, processing |
| Boundaries | `nga_polbnda_adm1_1m_salb` | Original producer, release, URL, licence, boundary level, edits |

Official portals: [NASA POWER](https://power.larc.nasa.gov/), [CHIRPS](https://www.chc.ucsb.edu/data), [JRC flood hazard maps](https://developers.google.com/earth-engine/datasets/catalog/JRC_CEMS_GLOFAS_FloodHazard_v2_1), [WorldPop](https://www.worldpop.org/).

## Provenance checklist
For each input, record the provider, exact product/version, URL and access date, licence, native/output CRS, cell size, units, NoData value, processing steps, software versions, output filename, and (if practical) checksum.

Do not commit raw data until redistribution terms are checked. Linking to the original provider may be preferable.
