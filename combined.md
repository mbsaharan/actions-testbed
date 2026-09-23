| question | Which statement is correct regarding passing permissions to reusable workflows? |
| documentation | https://docs.github.com/en/actions/using-workflows/reusing-workflows#access-and-permissions |

- [x] The `GITHUB_TOKEN` permissions passed from the caller workflow can be only downgraded by the called workflow.
- [ ] The `GITHUB_TOKEN` permissions passed from the caller workflow can be only elevated by the called workflow.
- [ ] The `GITHUB_TOKEN` permissions passed from the caller workflow can be both downgraded and elevated by the called workflow.
- [ ] The `GITHUB_TOKEN` permissions passed from the caller workflow can be neither downgraded or elevated by the called workflow.

---

| question | What are the different permission levels you can assign to `GITHUB_TOKEN` in the `permissions` block? |
| documentation | https://docs.github.com/en/actions/tutorials/authenticate-with-github_token |

- [x] none, write, read
- [ ] read, write, delete
- [ ] read, write

---

| question | You can use `permissions` to modify the `GITHUB_TOKEN` permissions on: |
| documentation | https://docs.github.com/en/actions/tutorials/authenticate-with-github_token |

- [x] Workflow level
- [x] Job level
- [ ] Step level

---

| question | Are GitHub Actions free for public repositories? |
| documentation | https://docs.github.com/en/billing/concepts/product-billing/github-actions#how-use-of-github-actions-is-measured |

- [x] Yes, when using standard GitHub-hosted runners
- [ ] No, all GitHub Actions usage is billed
- [ ] Yes, but only for the first 2,000 minutes per month
- [ ] No, only self-hosted runners are free for public repositories

---

| question | Which of these is not a valid event that could trigger a workflow? |
| documentation | https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows#about-events-that-trigger-workflows |

- [x] Cloning the repository
- [ ] Committing a file to master branch
- [ ] A branch is created
- [ ] Adding a label to a pull request

---

| question | Which is true about workflows? |
| documentation | https://docs.github.com/en/actions/concepts/workflows-and-actions/workflows |

- [x] Workflows can run one or multiple jobs at a time
- [x] Workflows can be triggered manually, by an event or run on a schedule
- [x] Workflows have to be defined in the `.github/workflows` directory
- [ ] Workflows can only be run on a schedule
- [ ] Workflow can run only one job at a time
- [ ] Workflows are written in any of `.yaml`, `.json` or `.toml` formats
- [ ] Workflows can be shared in GitHub Marketplace

---

| question | Which components are required for a workflow? |
| documentation | https://docs.github.com/en/actions/using-workflows/about-workflows#workflow-basics |

- [x] One or more events that will trigger the workflow
- [x] One or more jobs
- [ ] Workflow name
- [ ] Defined branches on which the workflow will run

---

| question | Which event is triggered by a webhook action from outside of the repository? |
| documentation | https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows |

- [x] repository_dispatch
- [ ] webhook_dispatch
- [ ] workflow_dispatch
- [ ] remote_dispatch
- [ ] api_dispatch

---

| question | Workflows are defined in which format |
| documentation |  |

- [x] yaml
- [ ] toml
- [ ] json
- [ ] xml

---

| question | Where should you store sensitive data such as passwords or certificates that will be used in workflows |
| documentation | https://docs.github.com/en/actions/how-tos/write-workflows/choose-what-workflows-do/use-secrets |

- [x] secrets
- [ ] config variables
- [ ] vault
- [ ] environment variables

---

| question | In a workflow with multiple jobs the default behavior is: |
| documentation | https://docs.github.com/en/actions/using-workflows/about-workflows#creating-dependent-jobs |

- [x] All jobs run in parallel
- [ ] Jobs run in sequence
- [ ] Jobs run based on the order they are defined in the workflow file
- [ ] Only the first job runs, others require manual approval

---

| question | If job B requires job A to be finished you have to: |
| documentation | https://docs.github.com/en/actions/using-workflows/about-workflows#creating-dependent-jobs |

- [x] use the `needs` keyword in job B to create this dependency
- [ ] use the `needs` keyword in job A to create this dependency
- [ ] use the `requires` keyword in job B to create this dependency
- [ ] use the `requires` keyword in job A to create this dependency

---

| question | In a workflow with multiple jobs, if job A fails then: |
| documentation | https://docs.github.com/en/actions/how-tos/write-workflows/choose-what-workflows-do/use-jobs#defining-prerequisite-jobs |

- [x] the jobs that are dependent on job A are skipped
- [ ] the jobs that are dependent on job A fail
- [ ] the workflow immediately cancels all other jobs

---

| question | This code will launch 6 different jobs in parallel using the matrix strategy. Can you use the matrix strategy to parallelize entire workflows? |
| documentation | https://docs.github.com/en/actions/using-workflows/reusing-workflows#using-a-matrix-strategy-with-a-reusable-workflow |

- [x] Yes
- [ ] No
- [ ] Only if the workflows are in the same repository
- [ ] Only with self-hosted runners

---

| question | Which matrix job definition is syntactically correct? |
| documentation | https://docs.github.com/en/actions/using-jobs/using-a-matrix-for-your-jobs#using-a-matrix-strategy |

- [x] 
- [ ] 
- [ ] 
- [ ] 

---

| question | How do you access matrix variables in a matrix strategy job? |
| documentation | https://docs.github.com/en/actions/using-jobs/using-a-matrix-for-your-jobs#using-a-matrix-strategy |

- [ ] Using the `vars` context
- [x] Using the `matrix` context
- [ ] Using the `job` context
- [ ] Using the `jobs` context

---

| question | When using the `pull_request` and `pull_request_target` events, how do you configure the workflow to run only when targeting the `prod` branch? |
| documentation | https://docs.github.com/en/actions/using-workflows/triggering-a-workflow#using-filters-to-target-specific-branches-for-pull-request-events |

- [x] Using `branches` filter
- [ ] Using `branch` filter
- [ ] You create the workflow only on `prod` branch
- [ ] Using glob patterns

---

| question | This workflow will run on all pull requests where: |
| documentation | https://docs.github.com/en/actions/using-workflows/triggering-a-workflow#example-including-and-excluding-branches |

- [x] the target branch name starts with `release` but does not end with `-alpha`
- [ ] the target branch name starts with `release`
- [ ] the source branch name starts with `release` but does not end with `-alpha`
- [ ] the source branch name starts with `release`

---

| question | Fill in the blank: When using `push` event trigger filters you can use <____> patterns to target multiple branches |
| documentation | https://docs.github.com/en/actions/using-workflows/triggering-a-workflow#using-filters-to-target-specific-branches-or-tags-for-push-events |

- [x] glob
- [ ] regex
- [ ] scheme
- [ ] action

---

| question | Which event allows you to manually trigger a workflow from the GitHub UI? |
| documentation | https://docs.github.com/en/actions/how-tos/manage-workflow-runs/manually-run-a-workflow |

- [x] workflow_dispatch
- [ ] manual_dispatch
- [ ] workflow_trigger
- [ ] manual_trigger

---

| question | What are the possible types of an input variable for a manually triggered workflow? |
| documentation | https://docs.github.com/en/actions/writing-workflows/workflow-syntax-for-github-actions#onworkflow_dispatchinputsinput_idtype |

- [x] choice
- [x] boolean
- [x] string
- [x] number
- [x] environment
- [ ] dropdown
- [ ] select

---

| question | A workflow that has only `workflow_dispatch` event trigger can be triggered using GitHub's REST API |
| documentation | https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#onworkflow_dispatchinputs |

- [x] True
- [ ] False

---

| question | To stop a workflow from running temporarily without modifying the source code you should |
| documentation | https://docs.github.com/en/actions/how-tos/manage-workflow-runs/disable-and-enable-workflows |

- [x] Use the `Disable workflow` option in GitHub Actions
- [ ] Remove secrets that are required for this workflow
- [ ] Delete environment that is required for this workflow
- [ ] Prevent any new commits to main branch

---

| question | What are `activity types` of an event used for? |
| documentation | https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows#about-events-that-trigger-workflows |

- [x] Limiting workflow runs to specific activity types using the `types` filter
- [ ] Checking if the activity comes from a user or a bot
- [ ] Reacting to new activity on a repository (e.g new contributor)

---

| question | You want to create a reusable workflow `CI` that runs some quality checks, linting and tests on code changes. What event trigger should the `CI` workflow define to allow reusing it in other workflows? |
| documentation | https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows |

- [x] workflow_call
- [ ] workflow_trigger
- [ ] workflow_dispatch
- [ ] workflow_run

---

| question | A reusable workflow named `build` creates zip file artifacts. How do you pass the zip file location to the caller workflow that is calling the `build` workflow? |
| documentation | https://docs.github.com/en/actions/using-workflows/reusing-workflows#using-outputs-from-a-reusable-workflow |

- [x] You define an output on workflow level in the `build` workflow
- [x] You define an output on job level in the `build` workflow
- [x] In the `build` workflow you write the output into `$GITHUB_OUTPUT` in one of the steps
- [ ] All outputs are automatically passed to the caller workflows

---

| question | What are the valid use cases for using **defaults**? |
| documentation | https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#defaults |

- [x] Using defaults.run on workflow level to set default shell (e.g bash) for an entire workflow
- [x] Using defaults.run on job level to set default working-directory for all steps in a single job
- [ ] Using defaults.run on step level to set default shell (e.g bash) for that single step
- [ ] Using defaults.env on workflow level to set default environment variables for an entire workflow
- [ ] Using defaults.env on job level to set default environment variables for all steps in a single job

---

| question | How can you ensure that a workflow called `Deploy Prod` is always running at most one at a time? |
| documentation | https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#concurrency |

- [x] Use `concurrency` on workflow level
- [ ] Use `queue` on workflow level
- [ ] Use `order` on workflow level
- [ ] Use `parallel` on workflow level

---

| question | Your Pull Request analysis workflow uses multiple code analysis tools and takes about 20 minutes to fully complete. It is triggered on the `pull_request` event with the `branches` filter set to `master`. Therefore, if a developer pushes multiple commits within a few minutes, multiple workflows run in parallel. How can you stop all previous workflow runs and only run the one with the latest changes? |
| documentation | https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#example-using-concurrency-to-cancel-any-in-progress-job-or-run |

- [x] Use concurrency with cancel-in-progress
- [ ] Use concurrency
- [ ] Use activity types filter
- [ ] Use cancel-in-progress flag for `pull_request` event

---

| question | When will job3 run? |
| documentation | https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#example-not-requiring-successful-dependent-jobs |

- [x] job3 will run after job1 and job2 have completed, regardless of whether they were successful
- [ ] You cannot use `if: ${{ always() }}` and `needs` together. The workflow will fail on startup.
- [ ] job3 will run after job1 and job2 have been successfully completed
- [ ] job3 will run after both job1 and job2 have failed

---

| question | What `jobs.job_id.if` conditional will make sure that job `production-deploy` is triggered only on `my-org/my-repo` repository? |
| documentation | https://docs.github.com/en/actions/learn-github-actions/contexts#github-context |

- [x] `if: github.repository == 'my-org/my-repo'`
- [x] `if: ${{ github.repository == 'my-org/my-repo' }}`
- [ ] `if: ${{ github.organization == 'my-org' && github.repository == 'my-repo' }}`
- [ ] `if: ${{ github.org == 'my-org' && github.repository == 'my-repo' }}`

---

| question | What GitHub-hosted runner types are available to use? |
| documentation | https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#choosing-github-hosted-runners |

- [x] Windows
- [x] Ubuntu Linux
- [x] macOS
- [ ] Android

---

| question | Is this statement true? `Not all steps run actions, but all actions run as a step` |
| documentation | https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idsteps |

- [x] True
- [ ] False

---

| question | For any action published in GitHub Marketplace, you can often use it in multiple versions. Which approach is the most stable and secure? |
| documentation | https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#example-using-versioned-actions |

- [x] Reference the commit SHA
- [ ] Reference a version tag
- [ ] Reference the main branch

---

| question | To prevent a job from failure when one of the steps fails you can include: |
| documentation | https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepscontinue-on-error |

- [x] `continue-on-error` flag in the failing step
- [ ] `ignore-error` flag in the failing step
- [ ] `failure()` conditional in the failing step
- [ ] `always()` conditional in the failing step

---

| question | You defined a matrix job `example_matrix`. How can you limit the matrix to run a maximum of 2 jobs at a time? |
| documentation | https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstrategymax-parallel |

- [x] Set `jobs.example_matrix.strategy.max-parallel` to 2
- [ ] Set `jobs.example_matrix.strategy.concurrency` to 2
- [ ] Use GitHub's REST API to check if the job count is lesser than 2
- [ ] It's not possible, a matrix will always run all of the jobs in parallel if there are runners available

---

| question | Which of these is a proper way of setting an output parameter `PET` with a value of `DOG` in a `step`. |
| documentation | https://docs.github.com/en/actions/using-workflows/workflow-commands-for-github-actions#setting-an-output-parameter |

- [x] `echo "PET=DOG" >> "$GITHUB_OUTPUT"`
- [ ] `echo "DOG=PET" >> "$GITHUB_OUTPUT"`
- [ ] `gh set-output "DOG=PET"`
- [ ] `gh set-output "PET=DOG"`

---

| question | Which of these is a way of using `action_state` in `step_two`? |
| documentation | https://docs.github.com/en/actions/using-workflows/workflow-commands-for-github-actions#example-of-writing-an-environment-variable-to-github_env |

- [x] `run: echo "$action_state"`
- [ ] `run: echo "${{ steps.step_one.outputs.action_state }}"`
- [ ] `run: echo "$steps.step_one.outputs.action_state"`
- [ ] `run: echo "${{ action_state }}"`

---

| question | Is this statement true? `Workflows can be reused, but a reusable workflow cannot call another reusable workflow.` |
| documentation | https://docs.github.com/en/actions/using-workflows/reusing-workflows#nesting-reusable-workflows |

- [x] False
- [ ] True

---

| question | In the following example, `workflow A` passes all of its secrets to `workflow B`, by using the inherit keyword. Then `workflow B` calls `workflow C`. Which statement regarding `secrets` is true for that example? |
| documentation | https://docs.github.com/en/actions/using-workflows/reusing-workflows#passing-secrets-to-nested-workflows |

- [x] All secrets available to `workflow A` will be also available to `workflow B`, but not to `workflow C`
- [ ] All secrets from `octo-org` organization and `octo-org/example-repo` repository will be available to `workflow B`, but not to `workflow C`
- [ ] All secrets available to `workflow A` will be also available to `workflow B` and `workflow C`
- [ ] Only repository and environment secrets available to `workflow A` will be available to `workflow B`, but not to `workflow C`. Organization scoped secrets cannot be inherited

---

| question | When should you use `caching`? |
| documentation | https://docs.github.com/en/actions/using-workflows/caching-dependencies-to-speed-up-workflows#comparing-artifacts-and-dependency-caching |

- [x] When you want to reuse files that don't change often between jobs or workflow runs, such as build dependencies from a package management system.
- [ ] When you want to reuse files that do change often between jobs or workflow runs, such as build dependencies from a package management system.
- [ ] When you want to save files produced by a job to view after a workflow run has ended, such as built binaries or build logs.
- [ ] When you want to save binaries produced by a build job to use in a subsequent deploy job to deploy a new version of an application

---

| question | When should you use `artifacts`? |
| documentation | https://docs.github.com/en/actions/using-workflows/storing-workflow-data-as-artifacts#about-workflow-artifacts |

- [x] Use artifacts to save files produced by a job to view after a workflow run has ended, such as test results or build logs.
- [x] Use artifacts to save binaries produced by a build job to use in a subsequent deploy job to deploy a new version of an application
- [ ] Use artifacts to reuse files that don't change often between jobs or workflow runs, such as build dependencies from a package management system.
- [ ] Use artifacts to create new versions of your application together with release notes, mentions and/or contributors

---

| question | If a workflow runs on a `feature-a` branch, can it restore `caches` created in the default `main` branch? |
| documentation | https://docs.github.com/en/actions/using-workflows/caching-dependencies-to-speed-up-workflows#restrictions-for-accessing-a-cache |

- [x] Yes, all branches can restore caches created on the default branch
- [ ] Yes, all caches can be accessed by workflows on any branch within the same repository
- [ ] No, caches can only be restored from the same branch
- [ ] Yes but only if no files were changed on `feature-a` branch

---

| question | To access an `artifact` that was created in another, previously triggered workflow run you can: |
| documentation | https://github.com/actions/download-artifact?tab=readme-ov-file#download-artifacts-from-other-workflow-runs-or-repositories |

- [ ] You cannot access `artifacts` that were created in a different workflow run
- [x] Use the `actions/download-artifact` action with elevated permissions.
- [ ] Use the `actions/upload-artifact` action.
- [ ] Use the `actions/download-artifact` action and make sure the artifact is not expired

---

| question | What should you use to store coverage reports or screenshots generated during a workflow that runs automated testing for a repository? |
| documentation | https://docs.github.com/en/actions/using-workflows/storing-workflow-data-as-artifacts#comparing-artifacts-and-dependency-caching |

- [x] Artifacts
- [ ] Caches
- [ ] Packages
- [ ] Releases

---

| question | You can only upload a single file at a time when using `actions/upload-artifact` action |
| documentation | https://docs.github.com/en/actions/using-workflows/storing-workflow-data-as-artifacts#uploading-build-and-test-artifacts |

- [x] False
- [ ] True
- [ ] Only directories can be uploaded, not individual files

---

| question | In job `deploy`, if you want to access binaries (containing your application) that were created in job `build` you should |
| documentation | https://docs.github.com/en/actions/using-workflows/storing-workflow-data-as-artifacts#comparing-artifacts-and-dependency-caching |

- [x] upload the binaries as artifacts in `build` and download them in `deploy`
- [ ] upload the binaries as artifacts in `deploy` and download them in `build`
- [ ] cache the binaries in `build` and read the files from cache in `deploy`
- [ ] cache the binaries in `deploy` and read the files from cache in `build`

---

| question | A job called `job2` is using artifacts created in `job1`. Therefore it's important to make sure `job1` finishes before `job2` starts looking for the artifacts. How should you create that dependency? |
| documentation | https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idneeds |

- [x] create this dependency using the `needs` keyword in `job2`
- [ ] this dependency is created implicitly when using `actions/download-artifact` to download artifact from `job1`
- [ ] create this dependency by defining `job2` after `job1` in the workflow's `.yaml` definition
- [ ] create this dependency using the `concurrency` keyword in `job2`

---

| question | Which is true about `Starter Workflows` ? |
| documentation | https://docs.github.com/en/actions/how-tos/reuse-automations/create-workflow-templates |

- [x] They allow users to leverage ready-to-use (or requiring minimal changes) workflow templates
- [x] GitHub provides and maintains starter workflows for different categories, languages and tooling
- [x] Your organization can create custom starter workflows for users in your organization
- [ ] Starter workflows cannot call reusable workflows
- [ ] Starter workflows are a paid GitHub feature
- [ ] Starter workflows are provided ready-to-use and cannot be modified or enhanced

---

| question | Secrets and configuration variables can be scoped to: |
| documentation |  |

- [x] The entire organization, or selected repositories in an organization
- [x] A single repository
- [x] An environment in a repository
- [ ] An environment shared across multiple repositories
- [ ] Multiple repositories that do not share an organization/enterprise
- [ ] A specific workflow in a repository
- [ ] A specific job in a workflow

---

| question | What are the three types of Actions? |
| documentation | https://docs.github.com/en/actions/creating-actions/about-custom-actions#types-of-actions |

- [x] `Docker container actions`, `JavaScript Actions`, `Composite Actions`
- [ ] `Python Actions`, `JavaScript Actions`, `Custom Actions`
- [ ] `Docker container Actions`, `JavaScript Actions`, `Custom Actions`
- [ ] `Docker container actions`, `Java Actions`, `Composite Actions`

---

| question | Is this statement true? `Docker container actions are usually slower than JavaScript actions` |
| documentation |  |

- [x] True
- [ ] False

---

| question | When creating a custom GitHub Action you have to store the source code in `.github/workflows` directory |
| documentation | https://docs.github.com/en/actions/creating-actions/about-custom-actions#choosing-a-location-for-your-action |

- [x] False
- [ ] True
- [ ] Only if the action is reusable
- [ ] Only for Docker container actions

---

| question | When creating custom GitHub Actions - in what file does all the action `metadata` have to be defined? |
| documentation | https://docs.github.com/en/actions/reference/workflows-and-actions/metadata-syntax |

- [x] In the `action.yml` or `action.yaml` file in the action repository
- [ ] In the repository `README` file
- [ ] It's edited in GitHub Marketplace UI when published for sharing
- [ ] In the `action.yml` or `action.yaml` file in the action repository, but it is not required if the action is not meant to be shared and used by the public

---

| question | A workflow was initially run on `commit A` and failed. You fixed the workflow with the subsequent `commit B`. When you re-run that workflow it will run with code from which commit? |
| documentation | https://docs.github.com/en/actions/managing-workflow-runs/re-running-workflows-and-jobs#about-re-running-workflows-and-jobs |

- [x] It will run with code from `commit A`
- [ ] It will run with code from `commit B`
- [ ] You cannot re-run workflows in GitHub Actions. You have to trigger a new workflow which will run with latest changes
- [ ] It will trigger two workflows, one with code from `commit A` and one with code from `commit B`

---

| question | How can you require manual approvals by a maintainer if the workflow run is targeting the `production` environment? |
| documentation | https://docs.github.com/en/actions/reference/workflows-and-actions/deployments-and-environments#deployment-protection-rules |

- [x] Using deployment protection rules
- [ ] Setting the required reviewers in the `production` workflow
- [ ] Using branch protection rules
- [ ] Manual approvals are not supported by GitHub Actions

---

| question | Which is true about environments? |
| documentation | https://docs.github.com/en/actions/concepts/workflows-and-actions/deployment-environments |

- [x] Each job in a workflow can reference a single environment.
- [ ] Each workflow can reference a single environment.
- [ ] Each job in a workflow can reference a maximum of two environments.
- [ ] Each workflow can reference a maximum of two environments.

---

| question | When using GitHub Actions to access resources in one of the cloud providers (such as AWS, Azure or GCP) the safest and recommended way to authenticate is |
| documentation | https://docs.github.com/en/actions/concepts/security/openid-connect |

- [x] Using OIDC
- [ ] Using Vault
- [ ] Storing access keys in `secrets`
- [ ] Storing access keys in `variables`

---

| question | Your open-source publicly available repository contains a workflow with a `pull_request` event trigger. How can you require approvals for workflow runs triggered from forks of your repository? |
| documentation | https://docs.github.com/en/actions/managing-workflow-runs/approving-workflow-runs-from-public-forks#about-workflow-runs-from-public-forks |

- [x] Setup required approvals for fork runs in the repository
- [ ] Setup deployment protection rules for the repository
- [ ] Setup branch protection rules for the repository
- [ ] The workflow will not trigger for forks if using `pull_request` event. If you want to do that you should use `fork_pull_request` event trigger with `require-approval` flag.

---

| question | Which of the following default environment variables contains the name of the person or app that initiated the workflow run? |
| documentation | https://docs.github.com/en/actions/reference/environment-variables#default-environment-variables |

- [ ] `GITHUB_USER`
- [ ] `GITHUB_REPOSITORY`
- [ ] `GITHUB_WORKFLOW`
- [x] `GITHUB_ACTOR`

---

| question | Which of the following are default environment variables in GitHub Actions? |
| documentation | https://docs.github.com/en/actions/reference/workflows-and-actions/variables#default-environment-variables |

- [x] `GITHUB_REPOSITORY`
- [x] `GITHUB_WORKFLOW`
- [x] `GITHUB_ACTOR`
- [ ] `GITHUB_USER`
- [ ] `GITHUB_ORGANIZATION`
- [ ] `GITHUB_TOKEN`

---

| question | Your organization defines a secret `SomeSecret`, however when you reference that secret in a workflow using `${{ secrets.SomeSecret }}` it provides a different value than expected. What may be the reason for that? |
| documentation | https://docs.github.com/en/actions/security-guides/using-secrets-in-github-actions#naming-your-secrets |

- [x] The secret `SomeSecret` is also declared in repository scope
- [ ] The secret `SomeSecret` is also declared in enterprise scope
- [ ] `${{ secrets.SomeSecret }}` expression is only used for repository scoped secrets
- [ ] You need to use the GitHub API to access organization scoped secrets

---

| question | Which is a correct way to print a debug message? |
| documentation | https://docs.github.com/en/actions/using-workflows/workflow-commands-for-github-actions#example-setting-a-debug-message |

- [x] `echo "::debug::Watch out here!"`
- [ ] `echo ":debug:Watch out here!"`
- [ ] `echo "::debug::message=Watch out here!"`
- [ ] `echo "Watch out here!" >> $GITHUB_DEBUG`

---

| question | How can organizations which are using GitHub Enterprise Server enable automatic syncing of third party GitHub Actions hosted on GitHub.com to their GitHub Enterprise Server instance? |
| documentation | https://docs.github.com/en/enterprise-server@3.17/admin/managing-github-actions-for-your-enterprise/managing-access-to-actions-from-githubcom/enabling-automatic-access-to-githubcom-actions-using-github-connect |

- [x] Using GitHub Connect
- [ ] GitHub Enterprise Server has access to all GitHub.com Actions by default
- [ ] Using actions-sync tool
- [ ] GitHub Enterprise Server (GHES) cannot use GitHub.com Actions because of its on-premise nature and no internet access.

---

| question | Where can you find network connectivity logs for a GitHub self-hosted-runner? |
| documentation | https://docs.github.com/en/actions/hosting-your-own-runners/managing-self-hosted-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-self-hosted-runner-network-connectivity |

- [x] In the `_diag` folder directly on the runner machine
- [ ] On GitHub.com on that specific Runner's page
- [ ] In the job run logs of a job that ran on that Runner
- [ ] In the job run logs of a job that ran on that Runner with debug logging enabled

---

| question | How can you validate that your GitHub self-hosted-runner can access all required GitHub services? |
| documentation | https://docs.github.com/en/actions/hosting-your-own-runners/managing-self-hosted-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-self-hosted-runner-network-connectivity |

- [x] Using a GitHub provided script on the runner machine
- [ ] By trying to access the runner machine by `ssh` to validate the network connectivity
- [ ] By using the predefined GitHub Actions workflow `network-connectivity.yml`
- [ ] GitHub will validate the network connectivity automatically when the runner application is installed on the runner machine

---

| question | Which is the correct way of triggering a job only if configuration variable `MY_VAR` has the value of `MY_VALUE`? |
| documentation | https://docs.github.com/en/actions/learn-github-actions/contexts#example-usage-of-the-vars-context |

- [x] By creating the following conditional on job level
- [ ] By creating the following conditional on job level
- [ ] It's not possible because configuration variables cannot be used in `if` conditionals
- [ ] It's not possible because configuration variables cannot be used in job level `if` conditionals

---

| question | To run a `step` only if the secret `MY_SECRET` has been set, you can: |
| documentation | https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#example-using-secrets |

- [x] Set the secret `MY_SECRET` as a job level environment variable, then reference that environment variable to conditionally run that step
- [ ] By creating the following conditional on job level
- [ ] By creating the following conditional on step level
- [ ] By creating the following conditional on step level

---

| question | How can you use the GitHub API to download workflow run logs? |
| documentation | https://docs.github.com/en/rest/actions/workflow-runs?apiVersion=2022-11-28#download-workflow-run-logs |

- [x] `GET /repos/{owner}/{repo}/actions/runs/{run_id}/logs`
- [ ] `POST /repos/{owner}/{repo}/actions/runs/{run_id}/logs`
- [ ] `HEAD /repos/{owner}/{repo}/actions/runs/{run_id}/logs`
- [ ] `PUT /repos/{owner}/{repo}/actions/runs/{run_id}/logs`

---

| question | How can you use the GitHub API to create or update a repository secret? |
| documentation | https://docs.github.com/en/rest/actions/secrets?create-or-update-a-repository-secret=&apiVersion=2022-11-28#create-or-update-a-repository-secret |

- [x] `PUT /repos/{owner}/{repo}/actions/secrets/{secret_name}`
- [ ] `POST /repos/{owner}/{repo}/actions/secrets/{secret_name}`
- [ ] `HEAD /repos/{owner}/{repo}/actions/secrets/{secret_name}`
- [ ] `GET /repos/{owner}/{repo}/actions/secrets/{secret_name}`

---

| question | How can you override an organization-level GitHub Secret `API_KEY` with a different value when working within a repository? |
| documentation | https://docs.github.com/en/actions/reference/security/secrets |

- [x] By creating a repository secret with the same name `API_KEY`
- [x] By creating an environment secret with the same name `API_KEY`
- [ ] By creating an enterprise secret with the same name `API_KEY`
- [ ] By creating an enterprise secret with the name `OVERRIDE_API_KEY`
- [ ] By creating a repository secret with the name `OVERRIDE_API_KEY`
- [ ] By creating an environment secret with the name `OVERRIDE_API_KEY`
- [ ] By creating a repository secret with the name `REPOSITORY_API_KEY`
- [ ] By creating an environment secret with the name `ENVIRONMENT_API_KEY`

---

| question | What components can be reused within a GitHub Organization? |
| documentation |  |

- [x] Secrets
- [x] Configuration Variables
- [x] Self Hosted Runners
- [x] Workflow Templates
- [ ] Artifacts
- [ ] Cache
- [ ] Environment Variables

---

| question | How many jobs will be executed in the following workflow? |
| documentation | https://docs.github.com/en/actions/using-jobs/using-a-matrix-for-your-jobs#using-a-matrix-strategy |

- [x] 5
- [ ] 4
- [ ] 6
- [ ] 7

---

| question | Which of the following default environment variables contains the full name (e.g `octocat/hello-world`) of the repository where the workflow is running? |
| documentation | https://docs.github.com/en/actions/reference/environment-variables#default-environment-variables |

- [x] `GITHUB_REPOSITORY`
- [ ] `GITHUB_REPOSITORY_ID`
- [ ] `GITHUB_REPOSITORY_OWNER`
- [ ] `GITHUB_REPOSITORY_OWNER_ID`

---

| question | In a workflow that has multiple jobs, all running on GitHub-hosted runners, is it true that all jobs are guaranteed to run on the same runner machine? |
| documentation | https://docs.github.com/en/actions/using-jobs/choosing-the-runner-for-a-job#choosing-github-hosted-runners |

- [x] No
- [ ] Yes
- [ ] Only if they run in parallel
- [ ] Only if they use the same `runs-on` label

---

| question | What's the maximum amount of reusable workflows that can be called from a single workflow file? |
| documentation | https://docs.github.com/en/actions/reference/workflows-and-actions/reusing-workflow-configurations#limitations-of-reusable-workflows |

- [ ] 20
- [ ] 5
- [ ] 1
- [ ] 10
- [x] 50

---

| question | What is a self-hosted runner? |
| documentation | https://docs.github.com/en/actions/concepts/runners/self-hosted-runners |

- [x] A self-hosted runner is a system that you deploy and manage to execute jobs from GitHub Actions on GitHub.com
- [ ] A self-hosted runner is a system to upload code to a private server
- [ ] A self-hosted runner is a system to be able to create workloads automatically
- [ ] A self-hosted runner is a system to manage pull requests from users of the organization

---

| question | Which of the following is a correct statement about GitHub Workflows and Actions? |
| documentation | https://docs.github.com/en/actions/get-started/understand-github-actions |

- [ ] Each action is composed of one or more workflows which is composed of one or more jobs, and each job is composed of one or more steps
- [ ] Each workflow is composed of one or more actions which is composed of one or more jobs, and each job is composed of one or more steps
- [x] Each workflow is composed of one or more jobs which is composed of one or more steps, and each step is an action or a script
- [ ] Each action is composed of one or more jobs which is composed of one or more steps, and each step is a workflow

---

| question | On which commit and branch do scheduled workflows run in GitHub Actions? |
| documentation | https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows#schedule |

- [ ] Scheduled workflows run on the specific commit on last modified branch.
- [ ] Scheduled workflows run on the specific commit on the main branch.
- [x] Scheduled workflows run on the latest commit on the repository default branch.
- [ ] Scheduled workflows run on the latest commit on the main branch.

---

| question | What is the correct syntax for setting the directory for all `run` commands in a workflow? |
| documentation | https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#defaultsrunworking-directory |

- [x] set `working-directory` under `defaults.run`
- [ ] set `directory` under `defaults.run`
- [ ] set `working-directory` under `job`
- [ ] set `directory` under `job`

---

| question | How can you reuse a defined workflow in multiple repositories? |
| documentation | https://docs.github.com/en/actions/how-tos/reuse-automations/create-workflow-templates |

- [ ] By copying the workflow file to each repository
- [x] By using workflow templates
- [ ] By creating a reusable action
- [x] By defining the workflow in a central repository

---

| question | How can you ensure a job runs only on a specific branch? |
| documentation | https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#using-filters |

- [x] By using the branches filter
- [ ] By using the runs-on filter
- [ ] By using the jobs filter
- [ ] By using the branch keyword

---

| question | What does the `needs` keyword do in a GitHub Actions workflow? |
| documentation | https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idneeds |

- [x] Specifies the dependencies of a job
- [ ] Defines environment variables
- [ ] Sets up the environment
- [ ] Triggers a job based on an event

---

| question | Which keyword allows you to define environment variables in a GitHub Actions workflow? |
| documentation | https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idenv |

- [x] env
- [ ] vars
- [ ] secrets
- [ ] config

---

| question | What is the purpose of the `with` keyword in a GitHub Actions workflow? |
| documentation | https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepswith |

- [ ] To define environment variables
- [x] To specify input parameters for an action
- [ ] To set up dependencies
- [ ] To trigger another workflow

---

| question | Which of the following GitHub Actions syntax is used to run multiple commands in a single step? |
| documentation | https://docs.github.com/en/enterprise-cloud@latest/actions/using-workflows/workflow-commands-for-github-actions#example-of-a-multiline-string |

- [ ] Using && to chain commands
- [ ] Defining commands in an array
- [x] Using a multiline string with |
- [ ] Separating commands with a semicolon ;

---

| question | How can you cache dependencies to speed up workflow execution? |
| documentation | https://docs.github.com/en/enterprise-cloud@latest/actions/using-workflows/caching-dependencies-to-speed-up-workflows#about-caching-workflow-dependencies |

- [ ] Using the cache keyword
- [x] Using the actions/cache action
- [ ] By storing them in the repository
- [ ] By using the store keyword

---

| question | What does the `matrix` keyword do in a GitHub Actions workflow? |
| documentation | https://docs.github.com/en/enterprise-cloud@latest/actions/how-tos/write-workflows/choose-what-workflows-do/run-job-variations |

- [x] Allows defining multiple job configurations to run in parallel
- [ ] Sets environment variables for the job
- [ ] Triggers workflows based on a schedule
- [ ] Defines secrets for the workflow

---

| question | Which of the following can be used to limit the number of concurrent jobs running in a GitHub Actions workflow? |
| documentation | https://docs.github.com/en/enterprise-cloud@latest/actions/how-tos/write-workflows/choose-when-workflows-run/control-workflow-concurrency |

- [x] concurrency
- [ ] limit
- [ ] max-jobs
- [ ] parallelism

---

| question | What is the default timeout for a GitHub Actions job? |
| documentation | https://docs.github.com/en/actions/reference/limits#existing-system-limits |

- [ ] 30 minutes
- [ ] 60 minutes
- [ ] 120 minutes
- [x] 360 minutes

---

| question | How can you specify the operating system for a job in GitHub Actions? |
| documentation | https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idruns-on |

- [ ] Using the os keyword
- [x] Using the runs-on keyword
- [ ] Using the platform keyword
- [ ] Using the env keyword

---

| question | In a GitHub Actions workflow, how do you specify a specific version of Node.js to use in a job? |
| documentation | https://docs.github.com/en/actions/automating-builds-and-tests/building-and-testing-nodejs#specifying-the-nodejs-version |

- [x] 
- [ ] 
- [ ] 
- [ ] 

---

| question | How do you reference a secret stored in GitHub Secrets in a workflow? |
| documentation | https://docs.github.com/en/actions/security-guides/using-secrets-in-github-actions#using-secrets-in-a-workflow |

- [x] ${{ secrets.SECRET_NAME }}
- [ ] ${{ secret.SECRET_NAME }}
- [ ] ${{ env.SECRET_NAME }}
- [ ] ${{ config.SECRET_NAME }}

---

| question | What is the default shell used by GitHub Actions on Windows runners? |
| documentation | https://github.blog/changelog/2019-10-17-github-actions-default-shell-on-windows-runners-is-changing-to-powershell/ |

- [ ] bash
- [ ] sh
- [x] powershell
- [ ] cmd

---

| question | Which of the following statements are true about adding a self-hosted runner in GitHub Actions? |
| documentation | https://docs.github.com/en/actions/hosting-your-own-runners/managing-self-hosted-runners/adding-self-hosted-runners#adding-a-self-hosted-runner-to-a-repository |

- [x] You can add a self-hosted runner to a repository
- [x] You can add a self-hosted runner to an organization
- [x] You can add a self-hosted runner to an enterprise
- [ ] You can add a self-hosted runner to a workflow
- [ ] You can add a self-hosted runner to a step

---

| question | Select the default environment variable that contains the operating system of the runner executing the job |
| documentation | https://docs.github.com/en/actions/learn-github-actions/variables#default-environment-variables |

- [x] `RUNNER_OS`
- [ ] `GITHUB_RUNNER_OS`
- [ ] `RUNNER_ARCH`
- [ ] `RUNNER_NAME`

---

| question | How does the `actions/cache` action in GitHub Actions handle a cache miss? |
| documentation | https://docs.github.com/en/actions/using-workflows/caching-dependencies-to-speed-up-workflows#managing-caches |

- [ ] by requiring manual intervention to create a new cache
- [ ] by searching for a cache in other repositories
- [x] by automatically creating a new cache if the job is completed successfully
- [ ] by terminating the workflow if a cache miss occurs

---

| question | How can you specify the schedule of a GitHub actions workflow to run on weekdays only? |
| documentation | https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows#schedule |

- [ ] add a condition in the workflow YAML for weekdays
- [ ] it is not possible in GitHub actions
- [ ] use the on: schedule: weekdays event trigger
- [x] use the on: schedule: cron event trigger

---

| question | What is the recommended approach for storing secrets larger than 48 KB? |
| documentation | https://docs.github.com/en/actions/security-guides/using-secrets-in-github-actions#limits-for-secrets |

- [ ] avoid storing large secrets entirely to ensure security
- [ ] secrets larger than 48 KB cannot be stored
- [x] encrypt and store secrets in the repository but keep the decryption passphrase as a secret
- [ ] store large secrets directly as repository secrets to avoid limitations

---

| question | Select status check functions in GitHub Actions |
| documentation | https://docs.github.com/en/actions/learn-github-actions/expressions#status-check-functions |

- [x] `success()`, `always()`, `cancelled()` and `failure()`
- [ ] `completed()`, `always()`, `cancelled()` and `failure()`
- [ ] `status()`, `always()`, `cancelled()` and `failure()`
- [ ] `state()`, `always()`, `cancelled()` and `failure()`

---

| question | How do you ensure that `Upload Failure test report` step is executed only if `Run Tests` step fails? |
| documentation | https://docs.github.com/en/actions/learn-github-actions/expressions#status-check-functions |

- [x] 
- [ ] 
- [ ] 
- [ ] 

---

| question | Which context holds information about the event that triggered a workflow run? |
| documentation | https://docs.github.com/en/actions/using-workflows/triggering-a-workflow#using-event-information |

- [x] `github.event`
- [ ] `github.repository`
- [ ] `github.job`
- [ ] `jobs.<job_id>.result`

---

| question | In GitHub Actions, if you define both branches and paths filter, what is the effect on the workflow execution? |
| documentation | https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#onpull_requestpull_request_targetbranchesbranches-ignore |

- [x] the workflow will only run when both `branches` and `paths` are satisfied
- [ ] the workflow will run when either `branches` or `paths` are satisfied, but will only apply the matching filter
- [ ] the workflow will run when either `branches` or `paths` are satisfied
- [ ] the workflow will not run when both `branches` and `paths` are satisfied

---

| question | What is the recommended practice for treating environment variables in GitHub Actions, regardless of the operating system and shell used? |
| documentation | https://docs.github.com/en/actions/writing-workflows/choosing-what-your-workflow-does/workflow-commands-for-github-actions#setting-an-environment-variable |

- [x] treat environment variables as case-sensitive
- [ ] use only uppercase letters for environment variable names
- [ ] ignore case sensitivity as GitHub Actions handles it automatically
- [ ] depend on the behavior of the operating system in use

---

| question | Which of the following statements accurately describes the behavior of workflow jobs referencing an environment's protection rules? |
| documentation | https://docs.github.com/en/actions/how-tos/deploy/configure-and-manage-deployments/manage-environments |

- [x] workflow jobs won't start until all the environment's protection rules pass
- [ ] workflow jobs will start immediately and protection rules are evaluated during execution
- [ ] workflow jobs will start if at least one protection rule passes
- [ ] workflow jobs will fail if protection rules are configured

---

| question | What is the purpose of the `restore-keys` parameter in `actions/cache` in GitHub Actions? |
| documentation | https://docs.github.com/en/actions/using-workflows/caching-dependencies-to-speed-up-workflows#managing-caches |

- [x] provide alternative keys to use in case of a cache miss
- [ ] indicate whether a cache hit occurred
- [ ] specify the location of the cached files
- [ ] enable cross-OS cache functionality

---

| question | Which variable would you set to `true` in order to enable step debug logging? |
| documentation | https://docs.github.com/en/actions/how-tos/monitor-workflows/enable-debug-logging |

- [x] `ACTIONS_STEP_DEBUG`
- [ ] `ACTIONS_JOB_DEBUG`
- [ ] `ACTIONS_RUNNER_DEBUG`
- [ ] `ACTIONS_WORKFLOW_DEBUG`

---

| question | Which configuration is appropriate for triggering a workflow to run on webhook events related to check_run actions? |
| documentation | https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows#check_run |

- [x] 
- [ ] 
- [ ] 
- [ ] 

---

| question | What is the purpose of the `timeout-minutes` keyword in a step? |
| documentation | https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepstimeout-minutes |

- [x] it limits the execution time for individual step
- [ ] it defines the time interval for individual commands within a step
- [ ] it sets the timeout for waiting on external events before proceeding to the next step
- [ ] it specifies the maximum duration a job is allowed to run

---

| question | Dave is creating a templated workflow for his organization. Where must Dave store the workflow files and associated metadata files for the templated workflow? |
| documentation | https://docs.github.com/en/actions/how-tos/reuse-automations/create-workflow-templates |

- [x] inside a directory named `workflow-templates` within a repository named `.github`
- [ ] inside a directory named `workflow-templates` within the current repository
- [ ] inside a directory named `.github/org-templates`
- [ ] inside a directory named `.github/workflow-templates`

---

| question | Dave wants to be notified when a comment is created on an issue within a GitHub repository. Which event trigger should be used within the workflow configuration? |
| documentation | https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows#issue_comment |

- [x] `issue_comment`
- [ ] `issues.comment`
- [ ] `issues`
- [ ] `comment`

---

| question | What level of access is required on a GitHub repository in order to delete log files from workflow runs? |
| documentation | https://docs.github.com/en/actions/how-tos/monitor-workflows/use-workflow-run-logs |

- [x] write 
- [ ] read
- [ ] admin
- [ ] owner

---

| question | What is true about the following workflow configuration if triggered against the `octo/my-dev-repo` repository? |
| documentation | https://docs.github.com/en/actions/how-tos/write-workflows/choose-when-workflows-run/control-jobs-with-conditions |

- [x] the `production-deploy` job will be marked as skipped
- [ ] the `production-deploy` job will error
- [ ] the `production-deploy` job will execute three steps
- [ ] the `production-deploy` job will run if the `node-version` is `14`

---

| question | How can you access the current values of variables in a matrix within a job in the example below: |
| documentation | https://docs.github.com/en/actions/using-jobs/using-a-matrix-for-your-jobs#using-a-matrix-strategy |

- [x] reference variables through the `matrix` context with syntax like`matrix.version` and `matrix.os`
- [ ] by using the `matrix.property` syntax
- [ ] by using the `context` keyword within the job configuration
- [ ] by accessing the variables directly with the syntax `version` and `os`

---

| question | What level of permission is required to re-run the workflows |
| documentation | https://docs.github.com/en/actions/how-tos/manage-workflow-runs/re-run-workflows-and-jobs |

- [x] write 
- [ ] read
- [ ] admin
- [ ] owner

---

| question | When can you delete workflow runs? |
| documentation | https://docs.github.com/en/actions/how-tos/manage-workflow-runs/delete-a-workflow-run |

- [x] After the workflow run has completed, regardless of its age.
- [ ] After the workflow run has completed and at least 30 days have passed.
- [ ] Workflow runs can be deleted at any time, regardless of their status or age.
- [ ] Workflow runs cannot be deleted, but they can be archived.

---

| question | Who can bypass configured deployment protection rules to force deployment (by default) |
| documentation | https://docs.github.com/en/actions/deployment/targeting-different-environments/using-environments-for-deployment#allow-administrators-to-bypass-configured-protection-rules |

- [x] Repository administrators
- [ ] Anyone with repository write permission
- [ ] Anyone with repository read permission

---

| question | How can you skip the following workflow run when you commit or create a PR? |
| documentation | https://docs.github.com/en/actions/how-tos/manage-workflow-runs/skip-workflow-runs |

- [x] By including any one of the following keywords in the commit message or in the title of the pull-request
- [ ] Provide `SKIP_WORKFLOW` in the commit message
- [ ] The above workflow will run in every event of push or pull request in every case

---

| question | How can you determine if an action is a container action by looking at its action.yml file? |
| documentation | https://docs.github.com/en/actions/creating-actions/metadata-syntax-for-github-actions#runs-for-docker-container-actions |

- [x] `runs.using` has `docker` as value
- [ ] `runs.using` has `container` as value
- [ ] `runs.using` has `Dockerfile` as value
- [ ] `runs.main` has `container` as value

---

| question | What is the correct syntax for specifying a cleanup script in a container action? |
| documentation | https://docs.github.com/en/actions/creating-actions/metadata-syntax-for-github-actions#runspost-entrypoint |

- [x] 
- [ ] 
- [ ] 
- [ ] 
- [ ] 

---

| question | What’s true about default variables? |
| documentation | https://docs.github.com/en/actions/reference/workflows-and-actions/variables |

- [x] Default environment variables are set by GitHub and not defined in a workflow
- [x] Most of the default environment variables have a corresponding context property
- [x] Currently, the value of the default CI environment variable can be overwritten, but it's not guaranteed this will always be possible
- [ ] You can add a new default environment variable adding the prefix “GITHUB_” to it
- [ ] Default environment variables always have the prefix “GITHUB_”
- [ ] Default environment variables can be accessed using the env context

---

| question | What are the scopes defined for custom variables in a workflow? |
| documentation | https://docs.github.com/en/actions/learn-github-actions/variables#defining-environment-variables-for-a-single-workflow |

- [x] The entire workflow, by using `env` at the top level of the workflow file
- [x] The contents of a job within a workflow, by using `jobs.<job_id>.env`
- [x] A specific step within a job, by using `jobs.<job_id>.steps[*].env`
- [ ] All the jobs within a workflow, by using `jobs.env`
- [ ] The entire workflow, by using `custom.env` at the top level of the workflow file
- [ ] A specific environment in the repository, by using `environment.<environment_id>.env` at the top level of the workflow file

---

| question | What must be added to `actions/checkout` if `my-org/my-private-repo` is a private repository differing from the one containing the current workflow? |
| documentation | https://docs.github.com/en/actions/writing-workflows/workflow-syntax-for-github-actions#example-using-an-action-inside-a-different-private-repository-than-the-workflow |

- [x] Create a GitHub secret `MY_ACCESS_TOKEN`
- [ ] Create an input `MY_ACCESS_TOKEN`
- [ ] The environmental variable `GITHUB_TOKEN`
- [ ] Leave as is since access tokens will be passed automatically

---

| question | Given the following configuration, how many jobs will GitHub Actions run when this matrix is evaluated? |
| documentation | https://docs.github.com/en/actions/writing-workflows/choosing-what-your-workflow-does/running-variations-of-jobs-in-a-workflow#expanding-or-adding-matrix-configurations |

- [ ] 4 jobs
- [x] 5 jobs
- [ ] 6 jobs
- [ ] 7 jobs
- [ ] No jobs will run because the syntax is invalid.

---

| question | At what levels can environment variables be defined ? |
| documentation | https://docs.github.com/en/actions/how-tos/write-workflows/choose-what-workflows-do/use-variables |

- [x] Workflow level
- [x] Job level
- [x] Step level
- [ ] Action level

---

| question | How should a dependent job reference the `output1` value produced by a job named `job1` earlier in the same workflow? |
| documentation | https://docs.github.com/en/actions/how-tos/write-workflows/choose-what-workflows-do/pass-job-outputs |

- [x] `${{needs.job1.outputs.output1}}`
- [ ] `${{job1.outputs.output1}}`
- [ ] `${{needs.job1.output1}}`
- [ ] `${{depends.job1.output1}}`

---

| question | Which workflow command syntax correctly sets an environment variable named 'API_VERSION' with the value '2.1' for subsequent steps in a GitHub Actions job? |
| documentation | https://docs.github.com/en/actions/using-workflows/workflow-commands-for-github-actions#setting-an-environment-variable |

- [x] `echo "API_VERSION=2.1" >> "$GITHUB_ENV"`
- [ ] `echo "API_VERSION=2.1" >> "$GITHUB_OUTPUT"`
- [ ] `export API_VERSION=2.1 >> "$GITHUB_ENV"`
- [ ] `set-env name=API_VERSION value=2.1`

---

| question | A workflow is triggered when pull requests are reopened. Why might this be the cause? |
| documentation | https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows#pull_request |

- [x] `types: [reopened]` is defined under the `pull_request` event. 
- [ ] Branch protection rules were improperly configured.
- [x] No activity types are defined under the `pull_request` event.
- [ ] `on: schedule` was configured with `pull_requests: [reopened]`

---

| question | `GITHUB_TOKEN` can be used to check out any repository. |
| documentation | https://docs.github.com/en/actions/concepts/security/github_token#about-the-github_token |

- [ ] True
- [ ] Only with elevated permissions
- [x] False

---

| question | Which of the following are true regarding workflow-level vs. job-level outputs blocks? |
| documentation | https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax#example-defining-outputs-for-a-job |

- [ ] Job-level `outputs` blocks should only be used in caller workflows, not reusable workflows.
- [x] A workflow-level `outputs` block should only be used in reusable workflows, not caller workflows.
- [x] A reusable workflow can have both workflow-level and job-level `outputs` blocks.
- [ ] A job-level `outputs` block must have the following structure:
- [x] A workflow-level `outputs` block must have the following structure:

---

| question | Which of the following are true regarding calling reusable workflows versus calling composite actions? |
| documentation | https://docs.github.com/en/actions/concepts/workflows-and-actions/reusing-workflow-configurations#key-differences-between-reusable-workflows-and-composite-actions |

- [x] Composite actions are called via referencing the folder that contains their `action.yml` file.
- [ ] Reusable workflows are called via referencing the folder that contains their `action.yml` file.
- [x] Composite actions must be called as a step within a job
- [x] Reusable workflows must be called on workflow job level (not from step-level).
- [ ] Secrets can be passed to both reusable workflows and calling composite actions via the `uses.secrets` block.
- [ ] Only reusable workflows can accept inputs.
- [x] Reusable workflows can use a different runner type than the caller workflow, while composite actions cannot. 

---

| question | Which of the following are true regarding GitHub Enterprise Server (GHES)? |
| documentation | https://docs.github.com/en/enterprise-server@3.21/admin/overview/about-github-enterprise-server |

- [x] GHES workflows cannot access GitHub.com nor GitHub Marketplace actions by default. 
- [x] `actions/actions-sync` is primarily devoted to moving GitHub.com actions to a GHES instance.
- [ ] GHES is allowed to use enhanced versions of GitHub-hosted runners.
- [ ] Using GitHub Connect, users can follow a manual process to access GitHub.com actions. This process must be done once per desired action.
- [x] GitHub Enterprise Server instances are self-hosted, compared to GitHub Enterprise Cloud (GHEC) which is hosted and managed by GitHub.

---

| question | Why use a commit SHA versus a tag to pin an action? |
| documentation | https://docs.github.com/en/actions/reference/security/secure-use#using-third-party-actions |

- [x] Commit SHAs are more secure
- [x] Commit SHAs are immutable, whereas tags have the potential to be changed
- [ ] Commit SHAs are more convenient to use as opposed to tags
- [x] Commit SHAs are guaranteed to point to the exact same code every time, tags are not
- [ ] Commit SHAs are more difficult to trace in an audit, making it difficult for bad actors to determine how an action's code factors in overall processes.

---

| question | How do you run custom JavaScript scripts directly in a GitHub Actions workflow? |
| documentation | https://github.com/marketplace/actions/github-script |

- [x] Via the `actions/github-script` action
- [ ] By enabling the 'Allow custom JavaScript scripts' configuration in the Actions settings of a repository
- [ ] By enabling the 'Allow custom JavaScript scripts' configuration in the Actions settings of an organization
- [ ] Write the contents of a script block to the `GITHUB_SCRIPT` environmental variable
- [ ] In a JavaScript Action, set the `using` key to `'github-script'`

---

| question | You have forked a repository to enhance a workflow that uses a secret to access a third-party application. You trigger the workflow before editing its code to get a baseline result, but find that the workflow fails. Why would this occur? |
| documentation | https://docs.github.com/en/actions/how-tos/write-workflows/choose-what-workflows-do/use-secrets?tool=webui#using-secrets-in-a-workflow |

- [x] Forked repositories do not inherit secrets from the original repository  
- [ ] When inheriting the secret from the original repository, there was an error during the fork that resulted in a malformed, invalid secret
- [ ] The inherited secret had a size larger than 48 KB
- [ ] Forked repositories only inherit repository secrets, so the secret being used in the workflow must have been an organizational or environment secret.

---

| question | You have a workflow that uses the matrix below. If a job in the matrix fails, how can you ensure other in-progress and queued jobs in the matrix are not cancelled? |
| documentation | https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax#jobsjob_idstrategyfail-fast |

- [x] Set `jobs.<job_id>.strategy.fail-fast` to `false`
- [ ] Nothing needs to be done, since `jobs.<job_id>.strategy.fail-fast` has a default setting of `false`
- [ ] Set `jobs.<job_id>.strategy.matrix.fail-fast` to `false`
- [ ] Nothing needs to be done, since `jobs.<job_id>.strategy.matrix.fail-fast` has a default setting of `false`
- [ ] There is no way to enforce this behavior, it cannot be worked around.

---

| question | How many jobs will run in the following matrix? |
| documentation | https://docs.github.com/en/actions/how-tos/write-workflows/choose-what-workflows-do/run-job-variations#expanding-or-adding-matrix-configurations |

- [x] 5
- [ ] 6
- [ ] 7
- [ ] 10

---

| question | You want to create a workflow `Post-Deploy` that performs post-deploy related activity. What event trigger should the `Post-Deploy` workflow use so it runs automatically after a specified workflow is completed? |
| documentation | https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows#workflow_run |

- [x] `workflow_run`
- [ ] `workflow_trigger`
- [ ] `workflow_dispatch`
- [ ] `workflow_call`

---

| question | In what ways can you enable runner diagnostic logging? |
| documentation | https://docs.github.com/en/actions/how-tos/monitor-workflows/enable-debug-logging#enabling-runner-diagnostic-logging |

- [x] Setting a secret or variable named `ACTIONS_RUNNER_DEBUG` to `true`
- [x] Re-running a workflow with `Enable debug logging enabled`
- [ ] By adding a `ACTIONS_RUNNER_DEBUG` top-level folder to the workflow's repository
- [ ] By adding a `runner-diagnostic-logs` subfolder to the `_diag` directory of the self-hosted runner being used
- [ ] Renaming the `_diag` directory of a self-hosted runner to `runner-diagnostic-logs`

---

| question | You are writing a reusable workflow which has `branch-name` as an input. How can you conditionally run a step in that workflow if the branch name begins with 'smoke-test'? |
| documentation | https://docs.github.com/en/actions/reference/workflows-and-actions/expressions#startswith |

- [x] Use the built-in `startsWith` method in combination with `jobs.<job_id>.steps[*].if`
- [ ] Use the built-in `startsWith` method in combination with `jobs.<job_id>.steps[*].if`
- [ ] Use the `branches` filter under `workflow_call`
- [ ] Use shell conditionals in combination with `jobs.<job_id>.steps[*].if`

---

| question | Why might you use `hashFiles` when utilizing `actions/cache`? |
| documentation | https://docs.github.com/en/actions/reference/workflows-and-actions/expressions#hashfiles |

- [x] If a cache key contains the dependencies file wrapped in `hashFiles`, the key changes when the dependencies file is updated, which helps keep it up to date.
- [ ] `hashFiles` is required for compatibility with Windows runners.
- [ ] When using `hashFiles` as part of a cache key, if there is a cache miss, `hashFiles` gives additional debug info.  
- [ ] When using `hashFiles` as part of a cache key, an additional step will be generated in the caller workflow. This workflow step prints the value of the SHA-256 hash of the cache key for reference purposes.  

---

| question | Which of the following answers is correct regarding installation access tokens? |
| documentation | https://docs.github.com/en/apps/creating-github-apps/authenticating-with-a-github-app/authenticating-as-a-github-app-installation#using-an-installation-access-token-to-authenticate-as-an-app-installation |

- [x] Installation access tokens are short-lived tokens ideal for automation activities, but require setting up a Github App.
- [x] `GITHUB_TOKEN` is a type of installation access token.
- [x] The `actions/create-github-app-token` can be called within workflows to create an installation access token available for immediate use. 
- [ ] The `actions/create-github-app-token` can be called within workflows to create an installation access token, but the installation access token can only be used in future runs of the workflow.
- [ ] Installation access tokens cannot be configured to act on behalf of their associated Github App. 

---

| question | Your organization wants to lower the retention period for stored artifacts, citing storage concerns. How can this be done at an organizational level? |
| documentation | https://docs.github.com/en/organizations/managing-organization-settings/configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-organization |

- [x] By navigating to the organization's Actions settings and editing the value of the "Artifact and log retention" setting
- [ ] By using self-hosted runners, creating a `.github/retention-policy.yml` file, and specifying the value of the `artifact-retention-period` key 
- [ ] This cannot be done at an organizational level. All workflows that utilize `actions/upload-artifact` must use the required `retention-days` input.
- [ ] This cannot be done: artifacts are strictly stored for 90 days across all systems implementing Github Actions. 

---

| question | How can you change the retention period for artifacts generated by a certain workflow? |
| documentation | https://github.com/actions/upload-artifact#inputs |

- [x] By utilizing the `retention-days` input in `actions/upload-artifact` 
- [ ] By utilizing the `retention-days` input in `actions/download-artifact`
- [ ] In the workflow's repository, navigate to the Actions settings and editing the value of the "Artifact and log retention" setting for the workflow listed.
- [ ] By navigating to the organization's Actions settings and editing the value of the "Artifact and log retention" setting

---

| question | In what ways can you download an artifact? |
| documentation | https://github.com/actions/upload-artifact#inputs |

- [x] By using the `actions/download-artifact` action in a workflow 
- [x] By downloading artifacts from the Github Actions UI workflow run
- [x] By using a specific GitHub API endpoint
- [ ] By using the `actions/upload-artifact` action in a workflow
- [ ] By remotely accessing self-hosted runners via SSH and accessing the `.github/artifacts` directory

---

| question | Which statements are true regarding `github.ref` when the workflow is triggered by a `pull_request` event? |
| documentation | https://docs.github.com/en/actions/reference/workflows-and-actions/contexts#github-context |

- [x] In pull requests that have not been merged, `github.ref` refers to the fully-formed ref of the pull request merge branch/tag 
- [x] In pull requests that have been merged, `github.ref` refers to the fully-formed ref of the branch that was merged into.
- [ ] In pull requests (regardless of merge status), `github.ref` refers to the pull request number 
- [ ] In pull requests (regardless of merge status), `github.ref` is the SHA of the last merge commit on the `GITHUB_REF` branch.
- [ ] In pull requests that have not been merged, `github.ref` is the fully-formed ref of the pull request title. 
- [ ] In pull requests that have been merged, `github.ref` is the type of fully-formed ref that triggered the workflow run. The value will either be `branch`, `tag`, or `null` (if the ref was not fully-formed).

---

| question | You have a base-64 encoded secret that you decode in a GitHub Actions workflow. How can you make sure the decoded secret does not show up in the workflow log accidentally? |
| documentation | https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-commands#masking-a-value-in-a-log |

- [x] Using `add-mask` workflow command in jobs where the decoded secret may be utilized.
- [ ] Nothing needs to be done since Github Actions infrastructure automatically redacts decoded secrets.
- [ ] Avoiding the usage of print statements that contain the decoded secret, since this is the only way the decoded secret could appear in the workflow log
- [ ] Using the built-in `maskSecret` function to redact the decoded secret in instances where it may be utilized.

---

| question | Which statement is true regarding `github.ref` when the workflow is triggered by a push event? |
| documentation | https://docs.github.com/en/actions/reference/workflows-and-actions/contexts#github-context |

- [x] In push events, `github.ref` is the fully-formed ref of the branch or tag ref that was pushed. 
- [ ] In push events, `github.ref` is the message of the commit that triggered the workflow.
- [ ] In push events, `github.ref` is SHA of the commit that triggered the workflow.
- [ ] In push events, `github.ref` is the description of the commit that triggered the workflow.
- [ ] In push events, `github.ref` is the type of fully-formed ref that triggered the workflow run. The value will either be `branch`, `tag`, or `null` (if the ref was not fully-formed).

---

| question | What does writing to `GITHUB_STEP_SUMMARY` do? |
| documentation | https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-commands#adding-a-job-summary |

- [x] Adds this line to the job summary
- [ ] Adds this line as a subtitle to the step name in the GitHub Actions UI
- [ ] Adds this line to the built-in artifact `github-steps-summary.md`
- [ ] Prints this line as a step-level debug message

---

| question | Dorothea is troubleshooting a workflow triggered by a push event and is interested in seeing details about the webhook. How can she view the entire payload of the webhook that triggered the workflow? |
| documentation | https://docs.github.com/en/actions/reference/workflows-and-actions/contexts#github-context |

- [x] Printing the contents of the `github.event` object in a step
- [ ] Checking the "Show event webhook payload" checkbox under the workflow run options.
- [ ] Setting a secret or variable named `SHOW_EVENT_PAYLOAD` to `true`
- [ ] Navigating to the "Webhooks" section of the repository settings 

---

| question | Which should you use when passing information between jobs: job outputs or `GITHUB_ENV`? |
| documentation | https://docs.github.com/en/actions/how-tos/write-workflows/choose-what-workflows-do/use-variables#passing-values-between-steps-and-jobs-in-a-workflow |

- [x] Job outputs, because the value of environmental variables set via writing to `GITHUB_ENV` only applies to the current job.
- [ ] `GITHUB_ENV`, because job outputs can only be set and referenced within the same job.
- [ ] Job outputs, because they are simpler to set up
- [ ] `GITHUB_ENV`, because using it to set environmental variables puts significantly less strain on the runner, reducing workflow runtime.

---

| question | Fill in the blank: When using self-hosted runners, the tool cache ___ |
| documentation | https://docs.github.com/en/enterprise-server@3.21/admin/managing-github-actions-for-your-enterprise/managing-access-to-actions-from-githubcom/setting-up-the-tool-cache-on-self-hosted-runners-without-internet-access |

- [x] starts off empty and must be populated in order to save tools between runs
- [ ] starts off the same as GitHub-hosted runners in that it is pre-populated with certain tools
- [ ] starts with the same tools GitHub-hosted runners do, as well as a selected assortment of custom tools to enhance self-hosted runner management
- [ ] cannot be populated

---

| question | Which of the following events can trigger a workflow that has not been merged to the default branch? |
| documentation | https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows#pull_request |

- [x] `push`
- [x] `pull_request`
- [ ] `repository_dispatch`
- [ ] `star`
- [ ] `issues`
- [ ] `issue_comment`

---

| question | When would you build a Docker container action to share in the GitHub Actions marketplace? |
| documentation | https://docs.github.com/en/actions/concepts/workflows-and-actions/custom-actions#docker-container-actions |

- [x] Docker container actions ensure a consistent runtime environment and specific dependencies without users needing to handle these aspects themselves
- [ ] Docker container actions are an out-of-the-box, low-overhead action
- [ ] Docker container actions have fast startup speed on Windows and macOS runners
- [ ] Docker container actions are a bundle of steps within other workflows that run within the context of the calling workflow/action
- [ ] Docker container actions allow you to utilize Docker without requiring an `action.yml` file

---

| question | Marianne has a feature branch that contains her new workflow file, which is set to be triggered at 2 AM every day, using the syntax seen below. However, the next day, the workflow does not trigger. Why might this be the case? |
| documentation | https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows#schedule |

- [x] The workflow file must exist on the default branch in order to be triggered by the `schedule` event
- [ ] The `cron` syntax is not scheduled correctly
- [ ] `schedule` cannot be the only event in the workflow. It must be paired with a repository-based event, such as `push`
- [ ] The `@daily` syntax was not used
- [ ] The private repository containing the workflow has not had any repository activity in greater than 60 days, automatically disabling the workflow.

---

| question | In what ways can you delete workflow artifacts? |
| documentation | https://docs.github.com/en/actions/how-tos/manage-workflow-runs/remove-workflow-artifacts |

- [x] By using the Github Actions UI to navigate to a workflow run and delete the artifacts individually
- [x] By using the Github Actions UI to delete the workflow run that generated the artifacts
- [x] By using a specific GitHub API endpoint
- [ ] By using the `actions/delete-artifact` action in a workflow 
- [ ] By remotely accessing self-hosted runners via SSH, navigating to the `.github/artifacts` directory, and deleting the selected artifacts
- [ ] By setting the artifact retention period to 0 days

---

| question | Petra is building a workflow whose sole job is named `post-merge`. How can she set up the job to be triggered upon a merged pull request? |
| documentation | https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows#running-your-pull_request-workflow-when-a-pull-request-merges |

- [x]  Specify the `pull_request` activity type as `closed`, and use a job-level conditional to check if `github.event.pull_request.merged` is true
- [ ]  Specify the `pull_request` activity type as `merged`, and use a job-level conditional to check if `github.event.pull_request.merged` is true
- [ ]  Specify the `pull_request` activity type as `merged` (no need for a job-level conditional)
- [ ] Specify the `pull_request` activity type as `closed` (no need for a job-level conditional)
- [ ]  Specify the `pull_request` activity type as `closed` and use a job-level conditional to check if `github.ref` is equal to the merge branch of the pull request.

---

| question | Which of the following are true when comparing the pull_request and pull_request_target events? |
| documentation | https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows#pull_request |

- [x] The `pull_request` event runs within the context of the merge commit, while `pull_request_target` runs in the context of the default branch of the base repository.
- [x] Workflows will not run on `pull_request` activity if there is a merge conflict
- [x] Both `pull_request` and `pull_request_target` events have default activity types of `opened`, `synchronize`, and `reopened`.
- [ ] `pull_request` should be used with caution, since PRs from forks will allow the workflow to access all secrets within the repository due to being associated with the default branch.
- [ ] Workflows will not run on `pull_request_target` activity if there is a merge conflict
- [ ] The `pull_request_target` event should be used when you want to run code contained in a PR's changed files, to do things like performing CI checks or running test suites.

---

| question | Why should you use OIDC when connecting a workflow to cloud providers? |
| documentation | https://docs.github.com/en/actions/concepts/security/openid-connect |

- [x] OIDC prevents you from having to keep cloud credentials as long-lived GitHub secrets 
- [x] OIDC involves the generation and use of short-lived tokens, which is more secure
- [ ] Cloud providers require the use of OIDC.
- [ ] Using OIDC allows you to circumvent setting up trust policies with cloud providers
- [ ] OIDC generates JSON web tokens (JWTs) that can be used across workflow jobs
- [ ] Using OIDC within a workflow will automatically save that workflow's logs in cloud storage

---

| question | How do workflows integrate with OIDC after a trust relationship has been established? |
| documentation | https://docs.github.com/en/actions/concepts/security/openid-connect#how-oidc-integrates-with-github-actions |

- [x] A workflow job requests an OIDC token from GitHub's OIDC provider. The OIDC token is then validated by the cloud provider, which then provides a cloud-access token so the workflow can access cloud resources.
- [ ] A workflow job requests an cloud access token from GitHub's cloud access provider. The token is then validated by the cloud provider, which then provides a OIDC token so the workflow can access cloud resources.
- [ ] The `on: OIDC_request` event trigger requests a cloud access token from GitHub's cloud access provider. The token is then validated by the cloud provider, which allows the workflow access to cloud resources.
- [ ] The `on: OIDC_request` event trigger requests an OIDC token from GitHub's OIDC provider. The token is then validated by the cloud provider, which allows the workflow access to cloud resources.
- [ ] After adding a workflow to the "OIDC-allowed workflows" list in the repository settings, workflows will automatically create OIDC and cloud access tokens on their own behalf. These tokens can then be used immediately in the workflow to interface with cloud providers

---

| question | Mercedes wants to publish a Docker container action she has created to the GitHub Actions Marketplace. What files does she need at a minimum to do so? |
| documentation | https://docs.github.com/en/actions/how-tos/create-and-publish-actions/publish-in-github-marketplace |

- [x] `action.yml`
- [x] A `Dockerfile`, if the image is built as part of the action during the workflow run
- [ ] A `Dockerfile`, if the image is to be referenced from an image registry
- [ ] `README.md`
- [ ] `.dockerignore`
- [ ] `CONTRIBUTING.md`

---

| question | Annette needs to write a workflow to publish a custom `npm` package that only members in her private organization will use. What should her workflow include? |
| documentation | https://docs.github.com/en/packages/learn-github-packages/publishing-a-package |

- [x] Logic to publish to GitHub Packages
- [x] A token with `write:packages` permissions 
- [x] Communication logic with the corresponding GitHub Packages registry `https://npm.pkg.github.com`
- [ ] An `on:registry_package` event with no activity types specified
- [ ] A token with `admin:packages` permissions
- [ ] An `on:registry_package` event with `types:[published]` 

---

| question | At what levels can `if:` be used in workflows? |
| documentation | https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax |

- [x] Job-level
- [x] Step-level
- [ ] Workflow-level
- [ ] Environment-level
- [ ] Organization-level

---

| question | How does `repository_dispatch` enable systems outside of GitHub to trigger a workflow? |
| documentation | https://docs.github.com/en/rest/repos/repos?apiVersion=2026-03-10#create-a-repository-dispatch-event |

- [x] The external system makes a POST request to the GitHub API to create a repository dispatch event.
- [x] The workflow is triggered by the creation of a repository dispatch event 
- [x] The `on.repository_dispatch.types` workflow key corresponds to the `event_type` parameter in the request payload, restricting the workflow to only trigger on relevant external events 
- [ ] The external system makes a PUT request to the GitHub API to create a repository dispatch event
- [ ] The workflow is triggered by a POST request to the workflow using the following endpoint `/repos/OWNER/REPO/actions/workflows/<WORKFLOW_ID>/dispatches` 
- [ ] The `on.repository_dispatch.event_types` workflow key corresponds to the `event_type` parameter in the request payload, restricting the workflow to only trigger on relevant external events

---

| question | JavaScript actions and `actions/github-script` both use JavaScript. Why should you use `actions/github-script` versus creating your own JavaScript action? |
| documentation | https://github.com/actions/github-script |

- [x] `actions/github-script` should be used for short inline scripts
- [x] `actions/github-script` should be used when you want to use a pre-authenticated client to interact with the GitHub API.
- [x] JavaScript actions should be used when you want a custom reusable action to be used across repositories 
- [ ] JavaScript actions should be used for short inline scripts
- [ ] `actions/github-script` should be used when you need to utilize a fine-tuned Node.js environment with several specific dependencies
- [ ] JavaScript actions should be used when you want a low-overhead solution to making GitHub API calls.

---

| question | Hilda needs access to an artifact generated by a recent workflow run, but the workflow file itself has since been deleted. Will she still be able to recover the artifact? |
| documentation | https://docs.github.com/en/actions/how-tos/manage-workflow-runs/remove-workflow-artifacts#artifacts-from-deleted-workflow-runs |

- [x] Yes, because deleting a workflow does not automatically delete its runs and generated artifacts
- [ ] No, because deleting a workflow automatically deletes its runs and generated artifacts
- [ ] Yes, but only if she has administrator privileges
- [ ] No, because while workflow runs will remain after a workflow is deleted, generated artifacts become corrupted

---

| question | Which keys are required when making an `action.yml` file? |
| documentation | https://docs.github.com/en/actions/reference/workflows-and-actions/metadata-syntax |

- [x] `name`
- [x] `description`
- [x] `runs`
- [ ] `author`
- [ ] `inputs`
- [ ] `outputs`

---

| question | Manuela is setting up self-hosted runners for her organization, which has heavily restricted communication with IP addresses. How can she ensure the self-hosted runners can communicate with GitHub? |
| documentation | https://docs.github.com/en/enterprise-cloud@latest/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/managing-allowed-ip-addresses-for-your-organization#using-github-actions-with-an-ip-allow-list |

- [x] Adding the self-hosted runners' IP address(es) to the organization's IP allow list
- [ ] Adding the self-hosted runners' operating system to the organization's operating system allow list
- [ ] Adding the `.ip-exception` file to the top-level of the self-hosted runner's directory structure
- [ ] Switch to GitHub-hosted standard runners, since self-hosted runners will be blocked if IP allow lists are enabled
- [ ] Selecting the 'Allow access from self-hosted runners' checkbox in the organization's IP allow list settings

---

| question | Observe the values in `runs-on` key as seen in the below workflow job. Which is true regarding how the  the job will run? |
| documentation | https://docs.github.com/en/actions/how-tos/manage-runners/self-hosted-runners/use-in-a-workflow#using-custom-labels-to-route-jobs |

- [x] The job will run on a self-hosted runner that has all the labels applied.
- [ ] The job will run on a self-hosted runner that has any of the labels applied.
- [ ] The job will still be able to run on GitHub-hosted runners, since they can have custom labels applied to them
- [ ] The job will run on a runner (self-hosted or GitHub-hosted, whichever is first available) with the name `self-hosted,nes,linux`

---

| question | Why would you re-run a workflow versus generating a new workflow run? |
| documentation | https://docs.github.com/en/actions/how-tos/manage-workflow-runs/re-run-workflows-and-jobs |

- [x] Re-running a workflow lets you re-run failed workflow jobs, as opposed to generating a new run which will run all jobs.
- [x] Re-running a workflow means the workflow jobs run in the same context of the commit SHA and git ref of the original event that triggered the job
- [x] Re-running a workflow allows you to enable extra debug logging for the selected job(s).
- [ ] Re-running a workflow ensures `GITHUB_TRIGGERING_ACTOR` remains unchanged, so it is unambiguous as to who originally triggered the workflow
- [ ] Re-running a workflow ensures `GITHUB_ACTOR` is updated, so it is unambiguous as to who re-ran the workflow
- [ ] Re-running a workflow overwrites the failing job runs, making runs appear more straightforward.

---

| question | Ingrid's organization has a subset of self-hosted Linux runners that should only be used by certain repositories. What is the best approach for her to enforce this behavior? |
| documentation | https://docs.github.com/en/actions/how-tos/manage-runners/self-hosted-runners/manage-access#changing-which-repositories-can-access-a-runner-group |

- [x] Create a new runner group, add the runners to the group, then select which repositories are allowed access to the group in the group settings.
- [ ] Create a new runner label, add the labels to the runners, then select which repositories are allowed access to the label in the label settings.
- [ ] Create a new runner label, add the labels to the runners, then make sure all workflows in the repositories have that label included in their `runs-on` field.
- [ ] Create a new runner group, select "Linux" as the OS, and use glob patterns to define which repositories are allowed access in the group settings.  

---

| question | An organization has several repositories that share a specialized Node.js environment hosted on a private network. The organization's next objective involves the setup of node-locking software within that network. Which of the following would best suit the organization's needs when it comes to executing workflows? |
| documentation | https://docs.github.com/en/actions/concepts/runners/self-hosted-runners |

- [x] Self-hosted runners set up at the organization-level
- [ ] One self-hosted runner per repository, set up at the repository level
- [ ] GitHub-hosted runners, with all workflows utilizing `actions/setup-node`
- [ ] GitHub-hosted runners set up at the organization-level
- [ ] GitHub-hosted runners, using `runs-on: [node<version>]` (`<version>` being the desired Node version) in all workflows.

---

| question | The following workflow that calls a reusable workflows in one of its jobs. The reusable workflow has `permissions` defined at workflow level as seen below. What will be the result of calling the reusable workflow? |
| documentation | https://docs.github.com/en/actions/how-tos/reuse-automations/reuse-workflows |

- [x] The reusable workflow will return an error, since the job that called it only has `contents:read` permissions
- [ ] The reusable workflow will create an issue in the repository titled `"Issue Report"`
- [ ] The reusable workflow will not be called, since reusable workflows must be in a subfolder of `.github/workflows`
- [ ] Both the caller and reusable workflow will not get called, because `issues` is not an available trigger for GitHub Actions. 

---

| question | Catherine writes the following workflow job below. What will be the result of the job? |
| documentation | https://github.com/actions/checkout |

- [x] The Python script will not run, because `actions/checkout` is not included in the workflow.
- [ ] The Python script will run successfully, because the `chmod` command grants execute permissions to the script.
- [ ] The Python script will not run, because `runs-on` does not have a value of `python`.
- [ ] The Python script will not run, because `actions/python-setup` is not the correct action for setting up Python.

---

| question | Judith has a workflow that should be triggered every time a commit is made to the repository. The repository is not always that active, so Judith desires the workflow to programmatically run once a week as a failsafe. What combination of events should she use to enforce this behavior? |
| documentation | https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows |

- [x] `push` and `schedule`
- [ ] `pull_request` (with `types:[closed]`) and `schedule`
- [ ] `push` and `workflow_dispatch`
- [ ] `push` and `weekly`
- [ ] This is not possible: `schedule` cannot be combined with other events

---

| question | Your workflow must fire off at 12:00 AM every Monday and Friday. Which of the following snippets correlates to this behavior? |
| documentation | https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows#schedule |

- [x] 
- [ ] 
- [ ] 
- [ ] 
- [ ] 

---

| question | You need to ensure that your `prod` environment requires manual approvals before deploys can proceed. Out of the following options, which are true regarding how this is set up? |
| documentation | https://docs.github.com/en/actions/reference/workflows-and-actions/deployments-and-environments#required-reviewers |

- [x] If you list required reviewers, only one of them needs to approve to continue with the deployment.
- [x] You can prevent self-reviews in the event the person who wants to deploy is also a required reviewer.
- [ ] If you list required reviewers, all of them need to approve to continue with the deployment.
- [ ] You cannot prevent self-reviews, but you can set up alerts to see who triggered the deployment.
- [ ] Only individual users can be assigned as required reviewers, not teams.
- [ ] Required reviewers need at least `write` access to the repository in order to approve.

---

| question | You are considering a Marketplace action to utilize in your workflow. What are some aspects you can look for that indicate the action is trustworthy? |
| documentation | https://docs.github.com/en/actions/reference/security/secure-use#using-third-party-actions |

- [x] A 'Verified Creator' badge on the Marketplace page for the action
- [x] The README is thorough in defining the purpose of the action and how it works
- [ ] The `action.yml` is very brief
- [ ] The amount of Stars is low on the Marketplace page for the action
- [ ] The source code for the action has not been updated in a long time, indicating development on that action has finished

---

| question | Which syntax is used to define an expression in GitHub Actions? |
| documentation | https://docs.github.com/en/actions/concepts/workflows-and-actions/expressions |

- [x] `${{ github.ref }}`
- [ ] `{{ github.ref }}`
- [ ] `${ github.ref }`
- [ ] `{ github.ref }`

---

| question | What are YAML anchors (&) and aliases (*) used for in GitHub Actions? |
| documentation | https://docs.github.com/en/actions/concepts/workflows-and-actions/reusing-workflow-configurations#yaml-anchors-and-aliases |

- [x] To reuse repeated YAML configurations within a workflow file.
- [x] To define reusable YAML content and use it elsewhere within a workflow file.
- [ ] To reference secrets and variables within a workflow file.
- [ ] To call reusable workflows within a workflow file.

---

