param(
    [string]$giteaUrl,
    [string]$giteaToken,
    [string]$githubUser,
    [string]$githubToken
)

if ( -not (Get-InstalledModule PowerShellForGitHub -ErrorAction silentlycontinue)) {
  Install-Module PowerShellForGitHub -Force
}

# Gitea
$giteaUrl = "$($giteaUrl)/api/v1"
$giteaHeaders = @{
  "Content-type" = "application/json"
  "Authorization" = "token $($giteaToken)"
}
$giteaUserId = (Invoke-RestMethod -Uri "$($giteaUrl)/user" -Method Get -Headers $giteaHeaders).id

if ($giteaUserId -le 0) {
  Write-Host "Valid gitea token is required!"
  exit 1
}

Write-Host "GiteaUrl: $($giteaUrl)"
Write-Host "GiteaUserId: $($giteaUserId)"
Write-Host ""

# GitHub
Set-GitHubConfiguration -DisableTelemetry
$secureString = ($githubToken | ConvertTo-SecureString -AsPlainText -Force)
$cred = New-Object System.Management.Automation.PSCredential "username is ignored", $secureString
Set-GitHubAuthentication -Credential $cred -SessionOnly

Write-Host "GithubUser: $($githubUser)"
Write-Host ""


Get-GitHubRepository |
  Where-Object { !$_.Fork } |
  Where-Object { ![string]::IsNullOrWhiteSpace($_.Description) } |
  ForEach-Object {
    $repo = $_

    Write-Host "Name: $($repo.Name)"
    Write-Host "Description: $($repo.Description)"
    Write-Host "Homepage: $($repo.Homepage)"
    Write-Host "Private: $($repo.Private)"
    Write-Host "Fork: $($repo.Fork)"
    Write-Host "CloneUrl: $($repo.Clone_Url)"
    Write-Host ""

    $giteaRepositoryName = $repo.Name

    $body = @{
      "repo_name" = $giteaRepositoryName
      "description" = $repo.Description
      "clone_addr" = $repo.Clone_Url
      "mirror" = $true
      "private" = $repo.Private
      "uid" = $giteaUserId
    }

    if ($repo.Private) {
        $body["auth_username"] = $githubUser
        $body["auth_password"] = $githubToken
    }

    $response = Invoke-WebRequest `
        -Uri "$($giteaUrl)/repos/migrate" `
        -Method Post `
        -Headers $giteaHeaders `
        -Body ($body | ConvertTo-Json) `
        -SkipHttpErrorCheck

    if (($response.StatusCode -eq 201) -or ($response.StatusCode -eq 409)) {
        # repository created or already exists

        $body = @{
            "description" = $repo.Description
            "website" = $repo.Homepage
            "private" = $repo.Private
            "has_issues" = $false
            "has_projects" = $false
            "has_wiki" = $false
        }

        $response = Invoke-WebRequest `
            -Uri "$($giteaUrl)/repos/$($githubUser)/$($giteaRepositoryName)" `
            -Method Patch `
            -Headers $giteaHeaders `
            -Body ($body | ConvertTo-Json)

    } else {
        Write-Host "Failed to create mirror for repository $($repo.Name)"
        exit 1
    }

}
