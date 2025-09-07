# Add Runner to Gitlab

## Connect git with gitlab

Get SSH key from docker container.

```shell
cat ~/.ssh/id_ed25519.pub
```

Gitlab -> Settings -> SSH Keys -> Add new Key

## Install Gitlab Runner

Project -> Settings -> CI/CD -> Runners -> Create project runner

## Download Gitlab Runner

```shell
sudo curl -L --output /usr/local/bin/gitlab-runner https://gitlab-runner-downloads.s3.amazonaws.com/latest/binaries/gitlab-runner-linux-amd64
```

## Make Gitlab Runner Executable

```shell
sudo chmod +x /usr/local/bin/gitlab-runner
```

## Add Gitlab Runner user

```shell
sudo useradd --comment 'GitLab Runner' --create-home gitlab-runner --shell /bin/bash
```

## Install gitlab runner

```shell
sudo gitlab-runner install --user=gitlab-runner --working-directory=/home/gitlab-runner
```

## Start Gitlab Runner

```shell
sudo gitlab-runner start
```

## Register Gitlab Runner

```shell
gitlab-runner register  --url https://gitlab.com  --token token
```

### (Optional) Show Gitlab Runner Config File

```shell
cat /etc/gitlab-runner/config.toml
```

## Add Gitlab Runner to docker group

### Check for docker group.

```shell
grep docker /etc/group
```

### Add User to docker group.

```shell
usermod -aG docker gitlab-runner
```

### Restart Gitlab Runner.

```shell
systemctl restart gitlab-runner
```

