import type { ServiceCopy, ServiceSlug } from "./types";

const make = (
  title: string, card: string, intro: string, problem: string, solution: string,
  benefits: string[], included: string[], approach: string[],
  faqs: { q: string; a: string }[], ctaTitle: string, ctaText: string, ctaLabel: string
): ServiceCopy => ({
  title, card, kicker: "AWS CLOUD ENGINEERING", intro,
  problemTitle: "The challenge", problem,
  solutionTitle: "A practical solution", solution, benefits,
  includedTitle: "What you receive", included,
  approachTitle: "How we approach the work", approach, faqs,
  ctaTitle, ctaText, ctaLabel
});

export const SERVICES_EN: Record<ServiceSlug, ServiceCopy> = {
  finops: make(
    "AWS Cost Optimization and FinOps",
    "Understand your AWS bill, remove avoidable waste and give your team a clear plan for better cloud spending.",
    "Cloud costs should support the business, not surprise it at the end of the month. We review how your AWS resources are used and show where a change can make a real difference.",
    "Oversized compute, idle environments, storage choices, data transfer and network charges can quietly add up. Cost reports show what was spent, but do not always explain why or what is safe to change.",
    "We review billing evidence alongside architecture and actual workload usage. You receive practical improvements ordered by likely value, effort and operational risk. We do not recommend cutting resources blindly.",
    ["See the services and environments driving spend.", "Find idle or oversized resources and better usage patterns.", "Prioritize savings without putting availability at risk."],
    ["A cost findings register with evidence and recommendations.", "A roadmap covering quick wins and engineering changes.", "A short summary for business and technical stakeholders."],
    ["Agree the accounts, billing period and workload scope.", "Review cost data, tags, usage and architecture choices.", "Validate each opportunity and explain its trade offs.", "Agree whether implementation is needed."],
    [{q:"Do you guarantee a fixed percentage of savings?",a:"No. Every AWS environment is different. We quantify opportunities from available billing and usage evidence and explain any assumptions."},{q:"Will you switch off resources during the review?",a:"No. The assessment is read only unless we separately agree an implementation. Any change is discussed and approved first."},{q:"What do you need from us?",a:"Usually a defined billing period, relevant Cost Explorer or billing exports, and context about the workloads. We agree a secure access method before starting."}],
    "Get a clearer picture of your AWS spend.",
    "Start with a focused review of the costs that matter most to your business.",
    "Discuss cost optimization"
  ),
  security: make(
    "AWS Security and Compliance Readiness",
    "Find risky configurations, tighten access and make your security posture easier to understand and improve.",
    "Good cloud security is built from clear access rules, sensible network boundaries, protected data and logs that help you understand what happened.",
    "Public resources, permissions that are too broad, missing encryption, unmanaged secrets and incomplete audit logs are easy to overlook as a cloud environment grows. Teams need to know which gaps matter and how to address them.",
    "We review the AWS controls relevant to your environment, including IAM, network exposure, encryption, secrets, logging, backup coverage and services such as GuardDuty, Security Hub, AWS Config and WAF where appropriate.",
    ["Understand the most important risks and why they matter.", "Improve access control and reduce unnecessary exposure.", "Give auditors and internal teams clearer evidence and ownership."],
    ["A security findings register with evidence and severity.", "A remediation plan ordered by risk, effort and dependencies.", "A summary of the scope reviewed and any limitations."],
    ["Define account scope, important workloads and review boundaries.", "Use read only access and approved evidence sources wherever possible.", "Validate findings in context instead of copying scanner output.", "Agree remediation priorities with your technical stakeholders."],
    [{q:"Is this a formal compliance certification?",a:"No. It is a technical security and readiness assessment. A formal audit or certification requires a separate scope and an accredited body where applicable."},{q:"Do you make changes during the assessment?",a:"No. The review is read only. Remediation is a separate step with explicit approval and a change plan."},{q:"Can this work alongside our security team?",a:"Yes. We can support your internal security team, MSP or compliance lead and provide evidence they can use."}],
    "Know where your AWS security stands.",
    "We can start with a clear review scope and a practical discussion about your current controls.",
    "Discuss AWS security"
  ),
  migration: make(
    "AWS Cloud Architecture and Migration",
    "Move workloads or improve an existing setup with a secure, well planned AWS architecture.",
    "A move to AWS should make systems easier to operate and grow. The right plan starts with business needs, not a list of services to deploy.",
    "A rushed migration can carry old reliability issues into a new platform, create unexpected network costs or leave teams unsure how to deploy and recover. The result may be cloud infrastructure that is harder to manage than the systems it replaced.",
    "We map the current workload, dependencies, data and operating needs, then design an AWS target architecture. The plan can include VPC networking, private subnets, load balancing, compute, storage, identity, observability and Infrastructure as Code with Terraform.",
    ["Make architecture and migration decisions before moving production workloads.", "Improve availability, security and the ability to scale.", "Create infrastructure that can be repeated and reviewed as code."],
    ["A current state review and target architecture outline.", "A migration sequence with dependencies, testing and rollback considerations.", "An implementation plan and technical handover documentation."],
    ["Discover applications, data, dependencies and business constraints.", "Choose an appropriate migration path for each workload.", "Build the foundation and validate it in a non production environment.", "Move in agreed stages, test the result and hand over the runbooks."],
    [{q:"Do we have to move everything at once?",a:"No. A phased approach is often safer. We can start with one workload or environment and use what we learn to plan the next stage."},{q:"Can you work with an existing AWS account?",a:"Yes. We can review and improve an existing account or plan a new landing zone, depending on your needs."},{q:"Will the migration cause downtime?",a:"That depends on the application and data design. We identify the options, expected impact and rollback plan before scheduling a production move."}],
    "Plan the move before moving the workload.",
    "Tell us what you run today and what you need AWS to make possible.",
    "Discuss cloud architecture"
  ),
  backup: make(
    "AWS Backup and Disaster Recovery",
    "Protect important data and build a recovery plan your team can test and trust.",
    "A backup is only useful when it can be restored. We help businesses protect important AWS workloads and understand how they would recover after a failure or incident.",
    "Backups may be incomplete, stored with the wrong permissions or never tested. Teams may also be unclear about how much data they can lose or how long a recovery can take.",
    "We review the data and services that matter, define recovery objectives with your team and design a suitable approach using AWS Backup, snapshots, S3 protection, encryption and cross region copies where risk and budget justify them.",
    ["Know which systems and data are protected.", "Set realistic recovery time and recovery point objectives.", "Test restoration steps before a real incident happens."],
    ["A backup coverage and recovery gap review.", "A proposed backup schedule, retention approach and access model.", "A recovery runbook and plan for restore testing."],
    ["Identify critical systems, data owners and recovery priorities.", "Agree acceptable downtime and data loss with business owners.", "Configure or improve backup policies and access controls.", "Test selected restores and document the steps and results."],
    [{q:"Can you guarantee that no data will ever be lost?",a:"No backup design can honestly make that guarantee. We reduce risk, explain recovery limits and test the agreed process."},{q:"Do we need a second AWS Region?",a:"Not always. Cross region recovery can improve resilience, but it adds cost and complexity. We recommend it only when the business need supports it."},{q:"Will you test a restore?",a:"Restore testing should be part of the plan. We agree the test scope and timing so production systems and data remain protected."}],
    "Know how your business would recover.",
    "Start by identifying the systems and data you cannot afford to lose.",
    "Discuss backup and recovery"
  ),
  monitoring: make(
    "AWS Monitoring and Reliability",
    "Make system health visible, catch problems earlier and give your team a calm, repeatable response process.",
    "Your team should not have to wait for a customer to report that something is broken. Good monitoring makes important signals visible and helps people respond with confidence.",
    "Missing alarms, noisy alerts, disconnected logs and unclear ownership make incidents harder to understand. Teams lose time finding the cause and may not know which action is safe.",
    "We design CloudWatch dashboards, logs, metrics and alarms around the service objectives that matter. Where useful, EventBridge and SNS can route alerts, while documented runbooks explain investigation, escalation and approved recovery actions.",
    ["See availability, errors, latency and capacity in one place.", "Reduce alert noise and clarify who responds.", "Make incident investigation and recovery more consistent."],
    ["A monitoring review and recommended service indicators.", "Dashboards, alarms and notification paths agreed for the scope.", "Runbooks with ownership, investigation steps and escalation guidance."],
    ["Identify critical user journeys and service objectives.", "Review current metrics, logs, alarms and incident history.", "Configure meaningful dashboards and alert thresholds.", "Test notifications and document the response process."],
    [{q:"Will monitoring remove every outage?",a:"No. Monitoring cannot prevent every failure. It helps your team see issues sooner, understand their impact and respond more consistently."},{q:"Can alerts go to email or chat?",a:"Yes. We can design notification paths around the tools your team already uses, subject to available integrations and permissions."},{q:"Do you automatically change production systems when an alarm fires?",a:"Not by default. Any automated recovery action should be explicitly approved, limited to known safe actions and independently tested."}],
    "Find out what your AWS environment is telling you.",
    "We can review your existing dashboards and alerts or design an operating view from the start.",
    "Discuss monitoring"
  ),
  devops: make(
    "AWS DevOps, CI/CD and Container Platforms",
    "Make releases more predictable with Infrastructure as Code, secure pipelines and container platforms that fit your team.",
    "Deployments should be repeatable and easy to understand. We help teams reduce manual steps and build a delivery platform that can grow with the product.",
    "Manual infrastructure changes, long lived access keys, inconsistent environments and unclear rollback steps make releases risky. Container workloads can also become expensive or difficult to operate without a clear platform design.",
    "We design delivery workflows using Terraform, GitHub Actions and AWS services such as ECR and EKS where appropriate. Security can include OIDC federation, scoped IAM roles, image scanning and GitOps with ArgoCD.",
    ["Reduce manual deployment steps and configuration drift.", "Use short lived credentials instead of stored AWS keys in CI.", "Improve release visibility, consistency and rollback readiness."],
    ["A review of the current build and deployment process.", "A proposed CI/CD workflow and Infrastructure as Code structure.", "Implementation, tests and documentation for the agreed pipeline or platform."],
    ["Map the current repositories, environments and release process.", "Choose the right level of automation for the team's skills and workload.", "Build the pipeline and platform controls in a test environment.", "Validate deployments, access boundaries and rollback steps before handover."],
    [{q:"Does every company need Kubernetes or EKS?",a:"No. Many workloads are better served by simpler services. We recommend EKS when operational needs and team capability justify its cost and complexity."},{q:"Can you improve our existing GitHub Actions pipelines?",a:"Yes. We can review what you already have and improve permissions, testing, deployment steps and release safety without replacing everything."},{q:"Will our team be able to maintain the platform?",a:"That is part of the design. We document the workflow, explain the key decisions and keep the operating model appropriate for your team."}],
    "Make your next release easier to trust.",
    "Show us how you build and deploy today. We will help identify the next useful improvement.",
    "Discuss DevOps and EKS"
  )
};
