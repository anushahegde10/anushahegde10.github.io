---
layout: project
title: "Customer Segmentation - Sprocket Central"
subtitle: "Which customers should a bike retailer target to maximise marketing efficiency?"
tools: [Python, Power BI, RFM Analysis, K-Nearest Neighbors]
type: "Customer Analytics & Machine Learning"
featured: true
order: 1
thumbnail: /assets/kpmg-dashboard.png
---
## The Business Question

Sprocket Central, a bike and accessories retailer in Australia, had 4,000 existing customers and a list of 1,000 new prospects. The challenge was: **which customers should their marketing team prioritize to maximize revenue and retention?**

## What I Did

Applied the **RFM framework** — Recency, Frequency, Monetary — to segment existing customers based on their purchasing behaviour. Each customer was scored 1-5 on three dimensions:

- **Recency** — how recently did they purchase?
- **Frequency** — how often do they purchase?
- **Monetary** — how much do they spend?

Based on RFM scores, 3,493 customers were segmented into 5 groups. The remaining 507 customers with no transactions were classified as Lost Customers.

Then used **K-Nearest Neighbors** to predict which segment each of the 1,000 new prospects would fall into — giving the marketing team a prioritized outreach list.

## Customer Segments

- **Platinum** — highest spenders, most frequent, most recent. Most profitable group.
- **Loyal** — high spenders, recent buyers. Strong retention targets.
- **Sober** — frequent buyers but low spend. Volume customers.
- **Evasive** — not purchased recently. At risk of churn.
- **High Risk to Lose** — previously high spenders now going quiet. Priority for win-back campaigns.

## Key Findings

- Customers who purchased more frequently also spent more — frequency and monetary value are strongly correlated
- Most recent purchasers contributed the most to overall revenue
- **Platinum and High Risk to Lose** segments are the highest priority for marketing focus
- KNN model trained on 80% of existing customers, tested on 20% — best accuracy at k=33

## Tools & Approach

- **Python** — data cleaning, RFM scoring, KNN modelling
- **Power BI** — interactive dashboard for stakeholder presentation
- **RFM Framework** — customer segmentation methodology
- **K-Nearest Neighbors** — classification model for new customer prediction

## Context

This project was completed as part of the **KPMG Virtual Experience Program** on Forage — a simulation of real client analytics work at KPMG Data Analytics.
