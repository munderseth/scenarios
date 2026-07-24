# scenarios
testing connected projects

Sheet Sheet
# GitHub CLI (gh) Cheatsheet

## Create a PR
gh pr create --title "My change" --body "Description"

## Merge a PR
gh pr merge <PR-number-or-branch> --merge      # merge commit
gh pr merge <PR-number-or-branch> --squash     # squash merge
gh pr merge <PR-number-or-branch> --rebase     # rebase merge

## Merge + delete branch in one step
gh pr merge <PR-number-or-branch> --merge --delete-branch

## Delete branch (after the fact)
git push origin --delete <branch-name>   # remote
git branch -d <branch-name>              # local (safe)
git branch -D <branch-name>              # local (force)

