import * as cdk from '@aws-cdk/core'
import * as ecs from '@aws-cdk/aws-ecs'
import * as ec2 from '@aws-cdk/aws-ec2'
import { PROJECT_NAME } from '../env'

if (!PROJECT_NAME) {
  throw new Error(
    'Please add the PROJECT_NAME environment variables in an env.ts file located in the root directory'
  )
}

export class CdkNextIbexionFrontendStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props)

    // The code that defines your stack goes here

    // create vpc
    const vpc = new ec2.Vpc(this, `VPC-${PROJECT_NAME}-Nextjs`, {
      maxAzs: 2,
      natGateways: 1,
      natGatewayProvider: ec2.NatProvider.instance({
        instanceType: new ec2.InstanceType('t2.nano'),
      }),
    })

    // Create an ECS cluster
    const cluster = new ecs.Cluster(this, `Cluster-${PROJECT_NAME}-Nextjs`, {
      vpc,
    })

    // Add capacity to it
    cluster.addCapacity(
      `DefaultAutoScalingGroupCapacity-${PROJECT_NAME}-Nextjs`,
      {
        instanceType: new ec2.InstanceType('t2.micro'),
        desiredCapacity: 1,
        maxCapacity: 5,
        machineImageType: ecs.MachineImageType.BOTTLEROCKET,
        spotPrice: '0.0735',
        // Enable the Automated Spot Draining support for Amazon ECS
        spotInstanceDraining: true,
      }
    )

    const taskDefinition = new ecs.Ec2TaskDefinition(
      this,
      `TaskDef-${PROJECT_NAME}-Nextjs`
    )

    taskDefinition.addContainer(`Container-${PROJECT_NAME}-Nextjs`, {
      environment: {
        // clear text, not for sensitive data
        STAGE: 'prod',
      },

      image: ecs.ContainerImage.fromRegistry('amazon/amazon-ecs-sample'),
      memoryLimitMiB: 512,
      portMappings: [{ containerPort: 3000 }],
    })

    // Instantiate an Amazon ECS Service
    const ecsService = new ecs.Ec2Service(
      this,
      `Service-${PROJECT_NAME}-Nextjs`,
      {
        cluster,
        taskDefinition,
      }
    )
  }
}
