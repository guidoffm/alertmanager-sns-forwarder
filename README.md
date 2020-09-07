# alertmanager-sns-forwarder

Forwards Prometheus alerts to AWS SNS service.

You need to set these environment variables:

- AWS_DEFAULT_REGION
- SNS_TOPIC (Specify the arn of your topic here)

Make sure to have IAM access to publish to the topic.

Default listening port is 3000.

You can append the subject as query parameter for the url:

`...?subject=My%20Subject`
