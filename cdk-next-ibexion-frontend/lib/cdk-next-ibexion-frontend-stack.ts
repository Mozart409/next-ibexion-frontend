import * as cdk from '@aws-cdk/core'
import * as ec2 from '@aws-cdk/aws-ec2'
import * as ecs from '@aws-cdk/aws-ecs'
import * as ecsPatterns from '@aws-cdk/aws-ecs-patterns'
import * as route53 from '@aws-cdk/aws-route53'
import * as acm from '@aws-cdk/aws-certificatemanager'
import * as route53Patterns from '@aws-cdk/aws-route53-patterns'
import { PROJECT_NAME } from '../env'
import { HostedZone } from '@aws-cdk/aws-route53'
import { HttpsRedirect } from '@aws-cdk/aws-route53-patterns'

if (!PROJECT_NAME) {
  throw new Error(
    'Please add the PROJECT_NAME environment variables in an env.ts file located in the root directory'
  )
}

export class CdkNextIbexionFrontendStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props)

    // The code that defines your stack goes here

    // Domain

    const myHostedZone = route53.HostedZone.fromLookup(
      this,
      'Zone-Ibexion-Bike',
      {
        domainName: 'ibexion.bike',
      }
    )

    new acm.Certificate(this, 'Certificate', {
      domainName: 'ibexion.bike',
      validation: acm.CertificateValidation.fromDns(myHostedZone),
    })

    new HttpsRedirect(this, 'Redirect', {
      recordNames: ['ibexion.bike'],
      targetDomain: 'ibexion.bike',
      zone: myHostedZone,
    })

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

    const fargateService =
      new ecsPatterns.ApplicationLoadBalancedFargateService(
        this,
        `Fargate-${PROJECT_NAME}-Nextjs`,
        {
          cluster: cluster, // Required
          cpu: 256, // Default is 256
          desiredCount: 1, // Default is 1
          memoryLimitMiB: 512, // Default is 512
          publicLoadBalancer: true, // Default is false
          domainName: 'ibexion.bike',
          domainZone: myHostedZone,
          taskImageOptions: {
            containerPort: 3000,
            image: ecs.ContainerImage.fromRegistry(
              'ghcr.io/mozart409/next-ibexion-frontend:master'
            ),
            environment: {
              NEXT_PUBLIC_STRAPI_API_URL:
                'https://docker-strapi-ibexion.3iondl2h16bmc.eu-central-1.cs.amazonlightsail.com',
              TEST_ENVIRONMENT_VARIABLE2: 'test environment variable 2 value',
            },
          },
        }
      )
  }
}
