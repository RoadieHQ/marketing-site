---
title: Deploying Backstage application to AWS ECS Fargate
date: '2021-02-14T16:00:00.0Z'
description: How to deploy Backstage to AWS Elastic Container Service (ECS) using the Fargate serverless computing engine to run Docker containers 
tags: ['tutorial']
---

In this tutorial, we're going to deploy a basic Backstage application to AWS. The application will be using a stack of AWS resources to their advantage. We'll set up a database to run PostgreSQL on AWS RDS, store our environment variables to AWS SSM Parameter Store, route our traffic through an AWS Application Load Balancer and last but not least, run our Backstage application on AWS Fargate compute engine.

## Prerequisites

To complete this tutorial, you will need:

- [AWS account](https://aws.amazon.com/console/) with permissions to create IAM policies, RDS databases, Load Balancers and ECS Fargate Clusters and managed ECR repositories.
- [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html) set up locally with your AWS credentials



## Step 1. - Spinning up your RDS Database instance

To run properly, Backstage needs a database to store and handle data. In AWS environment we can spin up an RDS Postgres database to handle that function for us. 

Let's navigate to the [AWS RDS console](https://eu-west-1.console.aws.amazon.com/rds/home) and do just that. Note that we are using `eu-west-1` region throughout this tutorial, so be sure to change to your preferred region accordingly. We'll start of by clicking the big orange button, saying 'Create database'.

We select the standard create option and select PostgreSQL as our database engine. For templates, we can for now go with the free tier one if it is still available for your AWS account. 

![rds_create_db.png](rds_step_1.png)


For settings we will set up our database name and master username, and finally generate a password using our favorite password manager. These are good items to take note of somewhere, we will be needing them later. For this deployment the database instance does not yet have to be big and beefy so we will go with the free tier `T2.micro` instance. 

![rds_create_db_settings.png](rds_step_2.png)


We can leave Storage, Availability & durability as well as Database authentication sections to their default values and focus our attention to the Connectivity section. In this section we will select our preferred VPC and subnets. If nothing special is needed, you can use the default VPC for now as well as the default subnet group. Ideally you don't need your database subnet to be able to accessible from the internet, or even access the internet itself but securing networking within AWS is out of scope for this tutorial.

We do want to create a new security group to our instance though. We'll name it `backstage_rds_SG` and select 5432 as our port. AWS will automatically create a new security group for us that grants access to the database port from our IP address. We will later change this IP to be the address of our Fargate service.

![rds_networking_security_group.png](rds_step_3.png)


After these selections we can click `Create database` and wait for it to become available.


## Step 2 - Setting up proper policies to run Fargate containers

Before we can start shipping our Backstage container to AWS we need to have few prerequisites set up for the task to be able to run properly. We'll want good logging so we'll give the task permissions to write to CloudWatch. We also want to be able to read environment variables stored i System Manager Paramater store so we'll create a policy to do just that as well. Both of these policies will be attached to the AWS IAM Role that we will assign to the running container. 

To set up these policies and roles, let's go to [AWS IAM Management Console](https://console.aws.amazon.com/iam/home). In there we will first go to the Policies section and click create a new Policy. The policy json to read SSM Parameters is the following: 

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "ssm:GetParameters"
      ],
      "Resource": "*"
    }
  ]
}
```
We can additionally restrict the star-scoped resource if we want to match only needed parameters for this application. That could be something like ``arn:aws:ssm:${region}:${accountId}:parameter/roadie/backstage/*`.


We also want our logs from Fargate to go to some place where we can see them so we'll create another policy:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "logs:CreateLogGroup",
        "logs:CreateLogStream",
        "logs:PutLogEvents",
        "logs:DescribeLogStreams"
      ],
      "Resource": [
        "arn:aws:logs:*:*:*"
      ]
    }
  ]
}
```

Again, if we want to write into just some predefined log stream we can scope the resource section to match that. We can also leave `CreateLogGroup` out in that case since the Fargate task doesn't need permissions to create it.



Finally, now that we have our policies set up, we can create a Role that we can attach to the running Fargate task.

We'll jump into the Roles section of IAM console and click the 'Create role' button. We select trusted entity type to be 'Elastic Container Service' and our use case to be 'Elastic Container Service Task'. On the next page where a list of permissions are displayed we select the two policies we created above. 
![fargate_instance_role.png](fargate_instance_role.png) 

We are going to use this same role as the ECS role as well as the role our ECS task uses when it is running the container. This is not necessarily the best practice since it might expose unneeded SSM Parameter Store values to the container, but for simplicity we'll share the role among the execution and task on Fargate. If you want to make the container more secure, you can assign only the parameters policy to a separate execution role and only the logs policy to a separate task role. 

To enable this role to be used on for both task and execution, we need to modify the trust relationship of the role definition. Let's find our created role from the list of roles in IAM and on the role's summary page and Trust relationships tab click 'Edit trust relationship'. We'll modify the displayed JSON to match the following:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "",
      "Effect": "Allow",
      "Principal": {
        "Service": [
          "ecs.amazonaws.com",
          "ecs-tasks.amazonaws.com"
        ]
      },
      "Action": "sts:AssumeRole"
    }
  ]
}
```


Now we have all the prerequisites on IAM side ready for our deployment.



## Step 3 - Defining our environment in System Manager Parameter Store

## Step 4 - Creating a Load Balancer for our Backstage service (optional)

## Step 5 - Defining our Fargate tasks

## Conclusion
