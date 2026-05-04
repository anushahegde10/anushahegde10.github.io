---
layout: project
title: "Toronto Residential Rental Investment Analysis"
subtitle: "Which Toronto neighborhoods offer the best ROI for residential rental investment?"
tools: [Python, Pandas, Foursquare API, K-Means Clustering, Folium]
type: "Data Science & Geospatial Analysis"
featured: true
order: 2
thumbnail: /assets/toronto-map.png
---
## The Business Question

Toronto is one of the hottest real estate markets in the world — but not every neighborhood is equal for rental investment. A mid-size real estate investor needed to know: **which neighborhoods attract temporary tenants like students and young professionals, and are well connected by public transit?**

The goal was to identify neighborhoods that minimize vacancy risk and maximize return on investment.

## What I Did

Using public data and the Foursquare location API, I analyzed 103 Toronto neighborhoods to score them on two dimensions:

- **Interested Locations** — proximity to universities, colleges and schools
- **Accessibility Score** — availability of public transit options like bus stops and train stations

I then applied K-Means clustering to group neighborhoods into 4 clusters, giving the investor actionable options rather than a single recommendation.

## Key Findings

- Shortlisted 31 neighborhoods out of 103 that met both criteria
- **Cluster 3** emerged as the top recommendation — well connected neighborhoods with multiple universities and strong bus transit
- **Cluster 1** was the second choice — good mix of schools and colleges with solid transit options
- Top 10 neighborhoods were ranked and visualized on an interactive Folium map

## Tools & Approach

- **Python & Pandas** — data collection, cleaning and transformation
- **Foursquare API** — venue data for universities, schools and transit stops
- **K-Means Clustering** — grouping neighborhoods by investment suitability
- **Folium** — interactive map visualization
- **Web Scraping** — Toronto neighborhood data from Wikipedia

## Context

This project was completed as part of the **IBM Data Science Professional Certificate** capstone — a 9-course program covering end-to-end data science workflows.
