# AWS to Kubernetes Capstone Project 🚀

An end-to-end DevOps project demonstrating the complete workflow:

**AWS → Linux → Git/GitHub → Docker → Kubernetes**

## 📌 Project Overview

This project deploys a simple Node.js web application on an AWS EC2 instance, containerizes it using Docker, and finally deploys it on a Kubernetes cluster using Minikube.

The application is exposed through a Kubernetes NodePort and can be accessed using the EC2 public IP.

## 🏗️ Architecture

```text
                 GitHub
                    │
                    │ git clone
                    ▼
              AWS EC2 Instance
                    │
        ┌───────────┴───────────┐
        │                       │
      Docker                  Minikube
        │                       │
   Docker Image          Kubernetes Cluster
        │                       │
        │                 ┌─────┴─────┐
        │                 │           │
        │              Deployment   Service
        │                 │           │
        │              3 Pods      NodePort
        │                 │           │
        └─────────────────┴───────────┘
                              │
                              ▼
                    EC2 Public IP:30080
