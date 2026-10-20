# Nigeria's Climate Reality

**What is changing, who is affected, and why it matters**

[Explore the ArcGIS StoryMap](https://storymaps.arcgis.com/stories/1354cc766aad4f75aa19a2493a844a02)

## Overview
An exploratory geospatial visualisation of four distinct themes across Nigeria: long-term temperature trends, relative year-to-year rainfall variability, modelled river-flood hazard, and estimated population distribution. The indicators are presented separately, not combined into an unsupported composite climate-risk score.

## Research question
Do climate indicators, modelled hazards, and population distribution vary meaningfully across Nigeria, and what can these spatial patterns tell us about differing climate realities?

## Data sources
| Theme | Provider/dataset | Period/scenario | Use |
|---|---|---|---|
| Temperature | NASA POWER | 1984–2025 | Annual mean near-surface temperature trend, °C/decade |
| Rainfall | CHIRPS v3 | 1981–2025 | Annual precipitation totals and coefficient of variation |
| River-flood hazard | JRC Global River Flood Hazard Maps v2.1 | RP100 | Modelled river-flood depth |
| Population | WorldPop | 2025 reference year | Estimated population distribution |
| Boundaries | `nga_polbnda_adm1_1m_salb` | To verify | Geographic context and study-area definition |

Source portals: [NASA POWER](https://power.larc.nasa.gov/), [CHIRPS](https://www.chc.ucsb.edu/data), [JRC flood hazard maps](https://developers.google.com/earth-engine/datasets/catalog/JRC_CEMS_GLOFAS_FloodHazard_v2_1), [WorldPop](https://www.worldpop.org/).

The boundary dataset's original producer and licence must be confirmed from its metadata before redistribution.

## Methods summary
- **Temperature:** Annual mean near-surface air temperature, 1984–2025; mapped trend expressed in °C/decade. This is estimated change over the study period, not current daily temperature. The native grid is relatively coarse.
- **Rainfall:** CHIRPS v3 daily precipitation aggregated to annual totals for 1981–2025. `CV (%) = (standard deviation / mean) × 100`. CV describes relative year-to-year variability, not an increasing/decreasing trend.
- **Flood hazard:** JRC modelled river-flood depth for a 1-in-100-year return-period scenario. Under model assumptions, this corresponds to approximately 1% annual exceedance probability; it is not a fixed schedule or a map of every flood type.
- **Population:** WorldPop 2025 estimated population distribution at approximately 100 m. Population concentration alone does not establish hazard-specific exposure or vulnerability.

## Limitations
- Different spatial resolutions, time periods, and modelling assumptions.
- The project is not a complete climate-risk or vulnerability assessment.
- Spatial overlap alone does not establish causation.
- No composite risk score or unsupported state ranking is produced.
- Boundary dataset provenance and licence remain to be verified.

## Repository structure
```text
nigeria-climate-reality/
├── README.md
├── LICENSE
├── CITATION.cff
├── .gitignore
├── docs/
│   ├── data-sources.md
│   ├── methodology.md
│   └── limitations.md
├── notebooks/README.md
├── scripts/README.md
├── outputs/README.md
└── references/README.md
```

This repository is initially a documentation scaffold. Exact input files, coordinate systems, processing tools, software versions, and parameter settings must be recorded from the actual GIS workflow before claiming full reproducibility.

## Future work
1. Record exact source products and versions.
2. Document raster processing and trend estimation.
3. Add verified scripts or notebooks.
4. Validate spatial alignment, NoData handling, and summary statistics.
5. Assess hazard-specific population exposure only when appropriate data and methods are available.
