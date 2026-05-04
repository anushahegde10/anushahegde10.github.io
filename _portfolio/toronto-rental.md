---
layout: project
title: "Toronto Residential Rental Investment Analysis"
subtitle: "Which Toronto neighborhoods offer the best ROI for residential rental investment?"
tools: [Python, Pandas, Foursquare API, K-Means Clustering, Folium]
type: "Data Science & Geospatial Analysis"
featured: true
order: 2
thumbnail: /assets/img/portfolio/Toronto_Apartment.png
---
## Project Background

Toronto is one of the most competitive real estate markets in North America. For a mid-size investor looking to enter the residential rental space, the challenge wasn't just finding a property. It was finding the *right neighbourhood*.

The core question: **which Toronto neighbourhoods attract stable, long-term tenants like students and young professionals, and have strong public transit access?**

Neighbourhoods with universities, colleges, and good transit tend to have lower vacancy rates and more predictable rental demand - which directly impacts ROI.

## What I Did

I built an end-to-end data pipeline to score and cluster 103 Toronto neighbourhoods across two dimensions:

- **Interested Locations Score** - proximity to universities, colleges and schools
- **Accessibility Score** - availability of public transit options like bus stops and train stations

The pipeline followed these steps:

1. Scraped Toronto neighbourhood and postal code data from Wikipedia
2. Retrieved geo-coordinates and merged datasets on postal code
3. Called the Foursquare API to pull nearby venues for each neighbourhood
4. Applied One Hot Encoding to convert venue categories into numerical features
5. Calculated scores per neighbourhood and filtered down to 31 qualifying neighbourhoods
6. Applied K-Means Clustering (k=4, selected via elbow method) to group neighbourhoods

## Key Findings

After scoring and clustering, the top 10 neighbourhoods were ranked by combined investment suitability:

![Top 10 Neighbourhoods for Rental Investment](/assets/img/portfolio/IBM_IMG7_WEB.PNG)

The 31 shortlisted neighbourhoods were then visualized on an interactive map, grouped into 4 clusters:

![Toronto Neighbourhood Clusters](/assets/img/portfolio/IBM_IMG6_WEB.PNG)

- **Cluster 3** (yellow) - top recommendation. Neighbourhoods like Woburn and Parkwoods have the strongest combination of universities, schools and bus transit
- **Cluster 1** (purple) - second choice. Good mix of schools and colleges with solid transit connections
- **Cluster 2** (turquoise) - limited options, only 2 neighbourhoods
- **Cluster 0** (red) - school-heavy but weaker transit connectivity

## Tools & Techniques

- **Python & Pandas** - data collection, cleaning and transformation
- **Web Scraping** - Toronto neighbourhood data from Wikipedia
- **Foursquare API** - venue data for universities, schools and transit stops
- **K-Means Clustering** - grouping neighbourhoods by investment suitability
- **Folium** - interactive map visualization

## About this Project

This was completed as the capstone project for the **IBM Data Science Professional Certificate** . This was a 9-course program covering end-to-end data science workflows including data collection, analysis, machine learning and visualization.

[View on GitHub](https://github.com/anushahegde10/toronto-rental-analysis-)
