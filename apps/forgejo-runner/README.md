# Forgejo Runner

## Runner sizes

The runner comes in two sizes. Each size is an environment overlay that sets the dind memory limit and mounts its own `config/config.yml`.

| Size    | `ENVIRONMENT_NAME` | Labels            | Capacity | Per job        | dind `mem_limit` | VM              |
| ------- | ------------------ | ----------------- | -------- | -------------- | ---------------- | --------------- |
| default | unset              | `docker`          | 4        | 2 CPUs, 900 MB | 4G               | 8 cores, 8 GB   |
| small   | `small`            | `docker`, `small` | 6        | 2 CPUs, 1.5 GB | 10G              | 8 cores, 12 GB  |
| large   | `large`            | `docker`, `large` | 2        | 6 CPUs, 8 GB   | 18G              | 12 cores, 20 GB |

Set `ENVIRONMENT_NAME` on the VM, then start the runner:

```
ENVIRONMENT_NAME=large tug up forgejo-runner
```

Each VM needs its own `FORGEJO_RUNNER_SHARED_SECRET`. See the [Forgejo README](../forgejo/README.md) for how to create one.

## Job routing

Both sizes carry the `docker` label. A job with `runs-on: docker` runs on whichever runner is free, so the large runner is not idle when no large job runs.

Use a size label to pin a job:

- `runs-on: large` for jobs that need many cores or much memory, such as Android builds.
- `runs-on: small` for jobs that must not take a slot on the large runner.

A job that holds a slot on the large runner blocks large jobs until it ends. If large jobs queue too often, remove `docker` from the labels in `config/config.large.yml`.

## Why per job limits

Without a limit, each job container sees all cores and all memory of the VM. JVM based tools such as Gradle size their heaps and worker count from that, and the sum exceeds the dind memory limit. The kernel then kills a process inside dind, at worst `dockerd`, and all running jobs fail. With `--memory` and `--cpus` on the job container, the tools see the limit and size themselves to fit.
