# Nigeria's Climate Reality
### What Is Changing, Who Is Affected, and Why It Matters

**Nigeria's Climate Reality** is a geospatial research and visualisation project exploring how temperature trends, rainfall variability, river-flood hazards, and population distribution differ across Nigeria.

The project uses climate datasets, gridded population estimates, and geographic information systems to examine the spatial patterns behind Nigeria's changing climate. Through an interactive ArcGIS StoryMap, it makes these patterns accessible to a wider audience while maintaining a clear distinction between climate indicators, modelled hazards, and population distribution.

**Explore the interactive StoryMap:** [Nigeria's Climate Reality](https://storymaps.arcgis.com/stories/1354cc766aad4f75aa19a2493a844a02)

---

## The Research Question

**Does climate change affect Nigeria uniformly, or do climate indicators and potential hazards vary meaningfully across regions?**

Nigeria spans diverse climatic and geographic conditions. National averages can conceal important spatial differences, while maps of individual indicators can reveal patterns that deserve closer investigation.

This project examines four complementary dimensions:

- **Temperature change:** Where are estimated long-term warming trends higher or lower?
- **Rainfall variability:** Where does annual rainfall vary more relative to its long-term mean?
- **River-flood hazard:** Where does a modelled river-flood scenario indicate greater flood depth?
- **Population distribution:** Where is Nigeria's population estimated to be concentrated?

Together, these layers provide different perspectives on Nigeria's climate reality. They are not treated as interchangeable measures of risk.

## Project Objectives

- Map estimated long-term near-surface temperature trends across Nigeria.
- Quantify relative year-to-year rainfall variability.
- Visualise modelled river-flood hazard under a defined return-period scenario.
- Examine the spatial distribution of Nigeria's estimated population.
- Communicate the results through an interactive, accessible geospatial narrative.
- Document the assumptions, uncertainty, and limitations that shape interpretation.

## Data and Analytical Approach

The project draws on established climate, hazard, and population datasets.

| Theme | Dataset | Period or reference | Analytical purpose |
|---|---|---|---|
| Temperature | NASA POWER | 1984–2025 | Estimated annual mean near-surface temperature trend |
| Rainfall | CHIRPS v3 | 1981–2025 | Annual precipitation totals and relative variability |
| River-flood hazard | JRC Global River Flood Hazard Maps v2.1 | RP100 scenario | Modelled river-flood depth |
| Population | WorldPop | 2025 | Estimated population distribution |
| Geographic context | Nigerian administrative boundaries | Dataset used in the GIS workflow | Study-area definition and geographic reference |

### 1. Temperature trends

NASA POWER temperature data for 1984–2025 were used to create a spatial representation of estimated temperature change, expressed in degrees Celsius per decade (°C/decade).

The resulting layer represents an estimated rate of change over the study period, not the temperature observed at a particular moment. Its relatively coarse spatial resolution also limits the interpretation of highly local differences.

### 2. Rainfall variability

Daily precipitation from CHIRPS v3 was aggregated into annual rainfall totals for 1981–2025. The coefficient of variation (CV) was used to describe relative year-to-year variability.

\[
CV(\%) = \frac{\text{Standard deviation}}{\text{Mean}} \times 100
\]

Higher CV values indicate greater variability relative to the mean annual rainfall. They do not, on their own, establish whether rainfall is increasing or decreasing.

### 3. River-flood hazard

The project uses the JRC Global River Flood Hazard Maps v2.1 to visualise modelled river-flood depth under a 1-in-100-year return-period scenario.

Under the model's assumptions, this return period corresponds to approximately a 1% annual exceedance probability. It does not mean a flood occurs on a fixed 100-year schedule, nor does the dataset represent every type of flooding.

### 4. Population distribution

WorldPop's 2025 population data provide a gridded estimate of where people are distributed across Nigeria.

Population distribution helps establish geographic context for climate and hazard analysis. However, population concentration alone does not establish hazard-specific exposure, vulnerability, or the capacity of communities to respond.

## Tools and Technologies

- **ArcGIS Pro** — geospatial data preparation and analysis.
- **ArcGIS Online** — web mapping and layer publication.
- **ArcGIS StoryMaps** — interactive storytelling and public communication.
- **NASA POWER, CHIRPS, JRC, and WorldPop** — climate, hazard, and population data sources.

Additional processing scripts, software versions, and parameter settings will be documented as the technical workflow is consolidated.

## What the Maps Can—and Cannot—Tell Us

The project is designed to support informed interpretation, not to produce a simplistic ranking of Nigerian states.

Its central methodological principle is to keep distinct indicators separate:

- A temperature trend is not a measure of flood risk.
- Rainfall variability is not the same as a rainfall trend.
- Modelled flood hazard is not a prediction of a specific disaster.
- Population distribution is not a direct measure of exposure or vulnerability.

The datasets also differ in spatial resolution, reference period, and modelling assumptions. Their patterns must therefore be interpreted within the context of those differences.

**This project does not yet constitute a comprehensive climate-risk or vulnerability assessment.** It provides a foundation for further analysis by identifying spatial patterns, documenting uncertainty, and clarifying where additional evidence is needed.

## Limitations

- NASA POWER's relatively coarse grid limits highly local temperature interpretation.
- Rainfall variability depends on the selected period and aggregation method.
- Flood-hazard outputs depend on the assumptions and scope of the underlying model.
- Population data are estimates rather than a direct census of every mapped cell.
- The datasets do not share identical spatial resolutions or reference periods.
- Socioeconomic vulnerability, adaptive capacity, and verified hazard-specific exposure have not been comprehensively integrated.
- The original provenance and licence of the administrative-boundary dataset used in the workflow require confirmation.

## Future Directions

The project establishes a foundation for more detailed geospatial climate research. Potential next steps include:

1. Documenting the complete data-processing workflow and making verified analytical steps reproducible.
2. Investigating regional climate patterns with appropriate statistical methods.
3. Assessing population exposure to specific hazards using compatible datasets.
4. Incorporating carefully selected socioeconomic and infrastructure indicators to investigate vulnerability.
5. Validating spatial outputs and documenting uncertainty before drawing conclusions at state or local-government-area level.

Any future risk assessment should use a transparent methodology and avoid treating spatial overlap as proof of causation or impact.

## Project Status

The interactive ArcGIS StoryMap has been created and published for public access. The project documentation and reproducibility workflow are being developed further.

## Data Sources

- [NASA POWER](https://power.larc.nasa.gov/)
- [CHIRPS — Climate Hazards Center](https://www.chc.ucsb.edu/data)
- [JRC Global River Flood Hazard Maps v2.1](https://developers.google.com/earth-engine/datasets/catalog/JRC_CEMS_GLOFAS_FloodHazard_v2_1)
- [WorldPop](https://www.worldpop.org/)

Please consult the original providers for dataset-specific documentation, attribution requirements, and licence terms. Exact product versions and processing details should be recorded before reproducing or extending the analysis.

---

*Developed as an exploratory geospatial research and public communication project focused on climate patterns across Nigeria.*
5. Assess hazard-specific population exposure only when appropriate data and methods are available.
