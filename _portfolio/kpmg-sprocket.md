---
layout: project
title: "Customer Segmentation - Sprocket Central"
subtitle: "Which customers should a bike retailer target to maximise marketing efficiency?"
tools: [Python, Power BI, RFM Analysis, K-Nearest Neighbors]
type: "Customer Analytics & Machine Learning"
featured: true
order: 1
thumbnail: /assets/img/portfolio/sprocket_dashboard_overview.jpg
---
## Project Background

Sprocket Central Pty Ltd is a mid-size Australian bike and accessories retailer
with 4,000 existing customers and a dataset of 20,000 transactions recorded over
2017. The marketing team had identified a list of 1,000 new prospects but had no
way to prioritise who to target first.

The business question was simple: **which new customers are most likely to be
profitable, and how should the marketing team prioritise their outreach?**

## What I Did

I applied the **RFM framework** - Recency, Frequency, Monetary value to score
and segment the existing 4,000 customers based on their purchasing behaviour.

Each customer was scored 1-5 on three dimensions:

- **Recency** - how recently did they purchase?
- **Frequency** - how often do they purchase?
- **Monetary** - how much do they spend?

3,493 customers with transaction history were segmented into 5 groups. The
remaining 507 customers with no transactions were classified as Lost Customers.

I then trained a **K-Nearest Neighbors (KNN) model** on 80% of the existing
customer data to predict which segment each of the 1,000 new prospects would
fall into giving the marketing team a prioritised, data-backed outreach list.
Best model accuracy was achieved at k=33.

Finally, I built an interactive **Power BI dashboard** to present findings and
recommendations to the client.

## Key Findings

**RFM Score Distributions** : Most customers cluster around mid-range recency
and frequency, with monetary value showing a right skew indicating a small group
of very high spenders:

![RFM Distribution](/assets/img/portfolio/sprocket_rfm_distribution.jpg)

**Customer Analysis Dashboard** : Platinum customers account for 36.83% of
total profit despite being a small segment. High Risk to Lose customers
contribute 16.74% — making them a critical win-back target:

![Customer Analysis Dashboard](/assets/img/portfolio/sprocket_dashboard_overview.jpg)

**Product Preferences by Segment** : Platinum customers consistently dominate
across all brands and product lines, particularly in standard and medium product
classes:

![Product Preferences](/assets/img/portfolio/sprocket_product_preference.jpg)

**Summary of Recommendations**  : Platinum and High Risk to Lose segments are
the highest priority for marketing focus. For new customers, the KNN model
predicted the Platinum group as the best target:

![Analysis Summary](/assets/img/portfolio/sprocket_summary.jpg)

## Customer Segments

| Segment                     | Description                                                         |
| --------------------------- | ------------------------------------------------------------------- |
| **Platinum**          | Highest spenders, most frequent, most recent. Most profitable group |
| **Loyal**             | High spenders, recent buyers. Strong retention targets              |
| **Sober**             | Frequent buyers but lower spend. Volume customers                   |
| **Evasive**           | Not purchased recently. At risk of churn                            |
| **High Risk to Lose** | Previously high spenders now going quiet. Priority for win-back     |

## Tools & Techniques

- **Python & Pandas** - data cleaning, RFM scoring and KNN modelling
- **RFM Framework** - customer segmentation methodology
- **K-Nearest Neighbors** - classification model for new customer prediction
- **Power BI** - interactive dashboard for stakeholder presentation

## About this Project

This project was completed as part of the **KPMG AU Data Analytics Virtual
Internship** on [Forage](https://www.theforage.com/) simulating real client
analytics work on the Data, Analytics & Modelling team.

[View on GitHub](https://github.com/anushahegde10/sprocket_customer_analytics)
