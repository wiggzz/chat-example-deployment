# Example deployments

This app is for testing a couple of deployment methods.

## To deploy to zeit:

Install `now` from https://ziet.co.

Then, in the `app/` directory run

    now --docker

## To deploy via pulumi:

Install `pulumi` from https://pulumi.com.

Then, in the top directory run

    pulumi update

You may need to set up pulumi to be able to deploy to fargate:

    pulumi config set cloud-aws:useFargate true

