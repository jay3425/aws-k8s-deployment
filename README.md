# 🚀 AWS → Docker → Kubernetes Capstone

<p align="center">
  <b>End-to-End DevOps Deployment on AWS</b><br>
  <sub>A containerized Node.js application deployed on Kubernetes</sub>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/AWS-EC2-orange?style=for-the-badge&logo=amazon-aws" alt="AWS">
  <img src="https://img.shields.io/badge/Linux-Amazon%20Linux%202023-black?style=for-the-badge&logo=linux" alt="Linux">
  <img src="https://img.shields.io/badge/Git-GitHub-181717?style=for-the-badge&logo=github" alt="GitHub">
  <img src="https://img.shields.io/badge/Docker-Containerization-2496ED?style=for-the-badge&logo=docker&logoColor=white" alt="Docker">
  <img src="https://img.shields.io/badge/Kubernetes-Orchestration-326CE5?style=for-the-badge&logo=kubernetes&logoColor=white" alt="Kubernetes">
  <img src="https://img.shields.io/badge/Minikube-Kubernetes%20Cluster-2D3748?style=for-the-badge" alt="Minikube">
  <img src="https://img.shields.io/badge/Node.js-Application-339933?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js">
</p>

---

## ✨ Project Overview

A complete DevOps capstone demonstrating the deployment of a Node.js application across a cloud-based infrastructure stack.

The project combines:

- ☁️ **AWS EC2** for cloud infrastructure
- 🐧 **Amazon Linux** for server administration
- 🔀 **Git & GitHub** for source control
- 🐳 **Docker** for containerization
- 🧩 **Docker Compose** for container management
- ☸️ **Kubernetes + Minikube** for orchestration
- 🌐 **NodePort** for application exposure

### Architecture

```text
GitHub Repository
       │
       ▼
   AWS EC2
       │
       ├── Amazon Linux
       │
       ├── Docker
       │      └── Containerized Node.js App
       │
       └── Minikube
              │
              └── Kubernetes Deployment
                     ├── Pod
                     ├── Pod
                     └── Pod
                           │
                           ▼
                     NodePort :30080
                           │
                           ▼
                       Web App
```

---

## 🛠️ Technology Stack

| Category | Technology |
|---|---|
| Cloud | AWS EC2 |
| OS | Amazon Linux 2023 |
| Application | Node.js |
| Version Control | Git / GitHub |
| Containerization | Docker |
| Container Management | Docker Compose |
| Orchestration | Kubernetes |
| Kubernetes Environment | Minikube |
| CLI | kubectl |
| Service Exposure | NodePort |

---

## 📁 Project Structure

```text
capstone-app/
│
├── app.js
├── Dockerfile
├── docker-compose.yml
├── healthcheck.sh
├── .gitignore
│
├── k8s/
│   ├── deployment.yaml
│   └── service.yaml
│
└── README.md
```

---

## 🐳 Containerization

The application is packaged as a lightweight Docker image using Node.js Alpine.

```dockerfile
FROM node:20-alpine

WORKDIR /app

COPY app.js .

EXPOSE 3000

CMD ["node", "app.js"]
```

### Container

```text
Application Port : 3000
Image            : capstone-app:1.0
```

---

## ☸️ Kubernetes

The application is deployed using a Kubernetes `Deployment` with multiple replicas.

```text
Deployment
   │
   ├── Pod 1
   ├── Pod 2
   └── Pod 3
```

### Service Configuration

```text
Type        : NodePort
Target Port : 3000
NodePort    : 30080
```

The Kubernetes configuration is stored under:

```text
k8s/
├── deployment.yaml
└── service.yaml
```

---

## 🌐 Application Exposure

The application is exposed externally through the Kubernetes NodePort:

```text
http://<EC2-PUBLIC-IP>:30080
```

This connects the public AWS infrastructure to the Kubernetes workload running inside the EC2 environment.

---

## 📈 Kubernetes Capabilities Demonstrated

- Kubernetes Deployments
- Multiple Pod replicas
- Kubernetes Services
- NodePort networking
- Horizontal scaling of replicas
- Rolling deployment updates
- Containerized workload management
- Cluster operation with Minikube

---

## 🩺 Operational Health Check

The project includes:

```text
healthcheck.sh
```

The script provides basic visibility into:

- Disk usage
- Memory usage
- Running Docker containers

---

## 🔐 Security

The project follows basic repository security practices:

- Private keys are excluded through `.gitignore`
- AWS credentials are not stored in source code
- Secrets and passwords should never be committed
- Only required network ports are exposed

---

## 🎯 DevOps Concepts Covered

```text
Cloud Infrastructure
       ↓
Linux Administration
       ↓
Version Control
       ↓
Containerization
       ↓
Container Orchestration
       ↓
Service Networking
       ↓
Scaling & Rolling Updates
```

This project brings multiple DevOps technologies together into a single deployable application environment.

---

## 📊 Project Status

**Status:** ✅ Completed

**Environment:** AWS EC2 + Docker + Minikube + Kubernetes

**Deployment:** Node.js application running as a Kubernetes workload

---

<p align="center">
  <b>⚙️ Cloud • Containers • Kubernetes • DevOps</b>
</p>
