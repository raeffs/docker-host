
# Forgejo

## Runner Configuration

Create a shared secret to configure a runner:

```
docker exec -u 1000 forgejo forgejo forgejo-cli actions generate-secret
```

Then register a runner with the shared secret:

```
docker exec -u 1000 forgejo forgejo forgejo-cli actions register --name {runner name} --scope {runner scope} --secret {shared secret}
```

Then use the shared secret to start up the runner container.
