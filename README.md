# 🚀 AWS → Docker → Kubernetes

<p align="center">
  <b>End-to-End DevOps Deployment Project</b><br>
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

A complete DevOps deployment project demonstrating a Node.js application running as a containerized workload on Kubernetes within an AWS EC2 environment.

The project brings together:

- ☁️ **AWS EC2** — cloud infrastructure
- 🐧 **Amazon Linux 2023** — server environment
- 🔀 **Git & GitHub** — version control
- 🐳 **Docker** — application containerization
- 🧩 **Docker Compose** — container management
- ☸️ **Kubernetes + Minikube** — container orchestration
- 🌐 **NodePort** — external application exposure

---

## 🏗️ Architecture

```text
                         ┌─────────────────┐
                         │     GitHub      │
                         │   Source Code   │
                         └────────┬────────┘
                                  │
                                  ▼
                         ┌─────────────────┐
                         │     AWS EC2     │
                         │                 │
                         │ Amazon Linux    │
                         └────────┬────────┘
                                  │
                         ┌────────▼────────┐
                         │     Docker      │
                         │                 │
                         │  Node.js App    │
                         └────────┬────────┘
                                  │
                         ┌────────▼────────┐
                         │    Minikube     │
                         │   Kubernetes    │
                         └────────┬────────┘
                                  │
                         ┌────────▼────────┐
                         │   Deployment    │
                         │                 │
                         │ ┌────┐ ┌────┐  │
                         │ │Pod │ │Pod │  │
                         │ └────┘ └────┘  │
                         │      ┌────┐    │
                         │      │Pod │    │
                         │      └────┘    │
                         └────────┬────────┘
                                  │
                         ┌────────▼────────┐
                         │ NodePort :30080 │
                         └────────┬────────┘
                                  │
                                  ▼
                           🌐 Web Application
```

---

## 🛠️ Technology Stack

| Category | Technology |
|---|---|
| ☁️ Cloud | AWS EC2 |
| 🐧 Operating System | Amazon Linux 2023 |
| 💻 Application | Node.js |
| 🔀 Version Control | Git / GitHub |
| 🐳 Containerization | Docker |
| 🧩 Container Management | Docker Compose |
| ☸️ Orchestration | Kubernetes |
| 🧪 Kubernetes Environment | Minikube |
| ⚙️ CLI | kubectl |
| 🌐 Service Exposure | NodePort |

---

## 📁 Project Structure

```text
.
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

## 💻 Application

The project contains a lightweight Node.js HTTP application running on port:

```text
3000
```

The application is packaged into a Docker image and deployed as a Kubernetes workload.

---

## 🐳 Docker

The application is packaged using a lightweight Node.js Alpine image.

```dockerfile
FROM node:20-alpine

WORKDIR /app

COPY app.js .

EXPOSE 3000

CMD ["node", "app.js"]
```

### Container Configuration

```text
Base Image     : node:20-alpine
Working Dir    : /app
Application    : app.js
Container Port : 3000
```

---

## ☸️ Kubernetes

The application is deployed using a Kubernetes `Deployment` with **3 replicas**.

```text
                 Deployment
                     │
          ┌──────────┼──────────┐
          ▼          ▼          ▼
        Pod 1      Pod 2      Pod 3
```

### Service Configuration

```text
Type        : NodePort
Port        : 3000
Target Port : 3000
NodePort    : 30080
```

Kubernetes manifests:

```text
k8s/
├── deployment.yaml
└── service.yaml
```

---

## 🌐 Application Exposure

The application is exposed through the Kubernetes NodePort service:

```text
http://<EC2-PUBLIC-IP>:30080
```

This allows the application running inside the Kubernetes environment to be reached through the EC2 host.

---

## 📈 Kubernetes Capabilities

The project demonstrates:

- Kubernetes Deployments
- Multiple Pod replicas
- Kubernetes Services
- NodePort networking
- Replica scaling
- Rolling deployment updates
- Containerized workload management
- Minikube cluster management

---

## 🩺 Operational Health Check

A lightweight health-check script is included:

```text
healthcheck.sh
```

It provides basic visibility into:

- Disk usage
- Memory usage
- Running Docker containers

---

## 🔐 Security

Basic repository security practices are followed:

- Private keys are excluded through `.gitignore`
- AWS credentials are not stored in source code
- Passwords, tokens, and secrets are not committed
- Only required network ports are exposed

Sensitive files should remain outside the repository.

---

## 🎯 DevOps Skills Demonstrated

| Area | Skills |
|---|---|
| Cloud | AWS EC2 |
| Linux | Server administration & CLI |
| Version Control | Git, GitHub, branches & commits |
| Containers | Docker, Docker Compose |
| Kubernetes | Deployments, Pods, Services |
| Networking | NodePort & port mapping |
| Operations | Scaling & rolling updates |
| Monitoring | Basic health checks |

---

## 📊 Project Highlights

```text
Cloud              → AWS EC2
Operating System   → Amazon Linux 2023
Application        → Node.js
Container          → Docker
Orchestration      → Kubernetes
Cluster            → Minikube
Replicas           → 3
Application Port   → 3000
NodePort           → 30080
```

---

## 🏁 Final Result

A Node.js application running as a **multi-replica Kubernetes workload on AWS EC2**, packaged with Docker and exposed through a Kubernetes NodePort service.

```text
AWS EC2
   │
   ├── Docker
   │     └── Node.js Container
   │
   └── Minikube
          │
          └── Kubernetes
                ├── Pod
                ├── Pod
                └── Pod
                      │
                      ▼
                NodePort :30080
                      │
                      ▼
                 Web Application
```

---

<p align="center">
  <b>⚙️ Cloud • Containers • Kubernetes • DevOps</b>
</p>
