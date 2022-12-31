// Based on https://github.com/cachix/install-nix-action
import { execSync } from 'child_process';

export function run(emacsCIVersion) {
  execSync(`sudo ${__dirname}/install-nix.sh`, [emacsCIVersion], { stdio: 'inherit' });
}
