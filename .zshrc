ZSH_THEME="fishy"

## ZSH PLUGINS
plugins=(
  vi-mode
  zsh-autosuggestions
  thefuck
  zsh-syntax-highlighting
  shrink-path
  colored-man-pages
)

## Keybindings for zsh-autosuggestions
bindkey '^ ' autosuggest-accept #<CTRL>+<SPACE>
bindkey '^x' autosuggest-clear #<CTRL>+ x
bindkey -s "^g" "lc\n"

source $ZSH/oh-my-zsh.sh

## Replace CAPS LOCK key with another CTRL
# setxkbmap -option ctrl:nocaps

# Source config files
for f in ~/.config/shellconfig/*; do source "$f"; done

# Print terminal header
lol_name

[ -f ~/.fzf.zsh ] && source ~/.fzf.zsh

