---
layout: page
title: CV
permalink: /cv
---

<div class="cv-links">
  <span><a href="{{ '/assets/cv_short.pdf' | relative_url }}">Download PDF</a> (1 page)</span>
  <span><a href="{{ '/assets/cv_enhanced.tex' | relative_url }}">LaTeX Source</a></span>
</div>

---

## Professional Summary

ML Engineer with 5+ years of experience in production ML systems, LLM development, and applied AI research. Published at NeurIPS, AAAI, and ICWSM with 67+ citations. Track record of deploying ML at scale: 15-30% accuracy improvements, 99.89% pipeline uptime, and systems serving 50K+ daily users. Experienced in LLM fine-tuning, distributed training, and end-to-end MLOps. Strong foundation in responsible AI through published work on misinformation detection and algorithmic fairness.

---

## Education

### University of California Los Angeles (UCLA) — Los Angeles, CA
**Master of Science in Computer Science** | GPA: 3.81/4.0 | Sep 2021 - Jun 2023

### Indian Institute of Technology (IIT) Kharagpur — Kharagpur, India
**Bachelor of Technology in Computer Science & Engineering** | GPA: 9.04/10.0 | Jul 2016 - May 2020

---

## Work Experience

### Google X (Tapestry) — San Francisco, CA
**Software Engineer, ML** | Aug 2026 - Present

- Spearhead the design and development of an MLOps platform on GCP, leveraging Vertex AI and KFP DAGs to support ML use cases across the organization, including computer vision, agentic systems, and time series forecasting

### Stovell AI Systems — San Francisco, CA
**Machine Learning Engineer** | Jan 2024 - Jul 2026

- Architect end-to-end ML pipelines for model training, deployment, and monitoring, tracking both model accuracy and business ROI impact across multiple customers
- Design and train custom architectures (Transformers, LSTMs, CNNs, hybrids) for fuel price and volume demand forecasting, achieving 15-30% MAE reduction
- Develop causal inference models for price-volume elasticity prediction; create evaluation frameworks measuring model performance and downstream business impact
- Build production ETL pipelines for data ingestion, processing, and model inference; maintain 99.89% uptime SLA across all customer deployments
- Implement comprehensive monitoring with DataDog and Weights & Biases for data quality validation, model drift detection, and accuracy tracking across geographies
- Conduct systematic model evaluation including robustness testing, edge case analysis, and failure mode identification before production deployment

### Amazon Web Services (AWS) — San Francisco, CA
**Applied Scientist Intern** | Jun 2022 - Sep 2022

- Benchmarked large language models (ProtBERT, ProtT5, ProtGPT) for Drug-Target Interaction (DTI) prediction; integrated diffusion-based molecular docking
- Implemented data-parallel distributed training on P4d.24xlarge instances (8x A100 GPUs), achieving 2x memory efficiency through gradient checkpointing and mixed precision
- Improved baseline performance by 20% and 12% on two benchmark datasets using protein language model embeddings; results presented at Amazon ML Conference
- Developed systematic evaluation pipeline for model comparison including accuracy, inference latency, and computational cost tradeoffs

### Goldman Sachs — Bangalore, India
**Software Engineer** | Aug 2020 - Sep 2021

- Led full-stack development integrating two internal bug tracking systems with migration to AWS, architecting scalable RESTful APIs serving 50,000+ daily users
- Built backend services with Java/Spring Boot and frontend with TypeScript/Angular; managed complete SDLC from requirements to production deployment
- Designed database schemas and optimized query performance for high-throughput issue tracking workflows

### Kanini Software Solutions — Los Angeles, CA
**DevOps Engineer** | Aug 2023 - Jan 2024

- Automated infrastructure provisioning for healthcare platform using Terraform, improving deployment reliability with AWS S3, Lambda, and RDS

### Accenture Technology Labs — Bangalore, India
**Research Intern** | May 2019 - Aug 2019

- Developed GCN-based stock prediction model integrating news articles and knowledge graphs, improving MSE by 5% over baseline methods

### University of California Los Angeles — Los Angeles, CA
**Graduate Teaching Associate** | Sep 2021 - Jun 2023

- Led discussions and office hours for 500+ undergraduates in CS32 (Data Structures) and Chemistry 20A, totaling 500+ teaching hours across 5 quarters

---

## Publications

**[PGraphDTA: Improving Drug-Target Interaction Prediction using Protein Language Models and Contact Maps](https://scholar.google.com/scholar?q=%22PGraphDTA%3A%20Improving%20Drug-Target%20Interaction%20Prediction%20using%20Protein%20Language%20Models%20and%20Contact%20Maps%22)**
Rakesh Bal et al. | NeurIPS 2023 Workshop on AI for Science
- Developed novel architecture combining protein LLM embeddings with structural contact maps for improved DTI prediction

**[Two-Sided Fairness in Non-Personalised Recommendations](https://scholar.google.com/scholar?q=%22Two-Sided%20Fairness%20in%20Non-Personalised%20Recommendations%22)**
Rakesh Bal et al. | AAAI 2021 Student Abstract
- Proposed fairness-aware recommendation framework balancing user and item-side equity

**[Analysing the Extent of Misinformation in Cancer Related Tweets](https://scholar.google.com/scholar?q=%22Analysing%20the%20Extent%20of%20Misinformation%20in%20Cancer%20Related%20Tweets%22)**
Rakesh Bal et al. | ICWSM 2020
- Created dataset and attention-based BiLSTM-CRF model for detecting health misinformation; contributed to responsible AI by identifying harmful content patterns

---

## Selected Projects

**DeepSub: Fine-tuning LLMs for Multi-Source Subtitle Translation** — [GitHub](https://github.com/rakeshbal99/DeepSub)
- Fine-tuned Gemma-7B and LLaMA-7B using QLoRA (4-bit quantization) for multilingual subtitle translation synthesizing context from 2 source languages
- Implemented triplet translation pipeline; evaluated on 6 Indic and 3 European languages with BLEU score tracking via Weights & Biases

**CLIP for Visual Question Answering (VQA)** — [GitHub](https://github.com/rakeshbal99/CLIP-VQA)
- Integrated OpenAI CLIP with VQA architectures (MCAN, Pythia) achieving 2% improvement in both zero-shot and fine-tuned settings on VQA2.0
- Added Language-Driven Semantic Segmentation (LSeg) for improved counting questions

---

## Skills

| Category | Technologies |
|----------|-------------|
| **LLM/GenAI** | Transformers, LLM Fine-tuning (QLoRA/LoRA/PEFT), vLLM, LangGraph, HuggingFace, Prompt Engineering, Model Evaluation |
| **ML Frameworks** | PyTorch, TensorFlow, Keras, scikit-learn, XGBoost |
| **MLOps** | Docker, Kubernetes, KubeFlow, MLflow, Weights & Biases, Distributed Training, Model Serving |
| **Cloud/Infra** | AWS (SageMaker, EC2, S3, Lambda), GCP, Azure, Terraform |
| **Data** | Snowflake, DBT, ETL Pipelines, DataDog, SQL |
| **Languages** | Python, Java, C++, Go, SQL, TypeScript |
{: .skills-table}

---

## Achievements

- **IIT-JEE Advanced:** All India Rank 265 out of 200,000 candidates
- **IIT-JEE Mains:** All India Rank 187 out of 1,300,000 candidates
- **KVPY Fellowship:** All India Rank 191 (prestigious national science scholarship)
