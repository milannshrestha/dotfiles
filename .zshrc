export PATH=$HOME/bin:/usr/local/bin:$PATH

export TERMINAL="termite"
export EDITOR="nvim"
export FILEMGR="lf"
export BROWSER="firefox"
export WM="bspwm"
export COLORTERM="truecolor"
export PAGER="less"
export READER="mupdf"

export WACOM_TOUCH=$(xsetwacom list devices | awk '/touch/ {print $8}')

# Add personal scripts to path
export PATH=$HOME/.scripts/:$PATH

# Ensure default specifications are adhered
export XDG_CONFIG_HOME=$HOME/.config
export XDG_CACHE_HOME=$HOME/.cache
export XDG_DATA_HOME=$HOME/.local/share

#  Add Go to path
export GOPATH=$HOME/code/go
export GOBIN=$GOPATH/bin
export PATH=/usr/local/go/bin:$GOBIN:$PATH

# Go Modules
export GO111MODULE=on

# Add NPM binaries to path
export PATH=/lib/node_modules:$PATH

# Rust
export RUST_TOOLCHAIN=$(rustup show active-toolchain)
export CARGO_HOME=$HOME/.cargo
export RUST_SRC_PATH="$(rustc --print sysroot)/lib/rustlib/src/rust/src"
export RLS_ROOT=$HOME/.rustup/toolchains/$RUST_TOOLCHAIN/bin
export PATH=$HOME/.cargo/bin:$PATH

# Java
 export JAVA_HOME=/usr/lib/jvm/default
 export PATH=$JAVA_HOME/bin:$PATH

 # Path to your oh-my-zsh installation.
export ZSH=/home/jec/.oh-my-zsh

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
setxkbmap -option ctrl:nocaps

# Source config files
for f in ~/.config/shellconfig/*; do source "$f"; done

# Print terminal header
lol_name

#THIS MUST BE AT THE END OF THE FILE FOR SDKMAN TO WORK!!!
export SDKMAN_DIR="/home/jec/.sdkman"
[[ -s "/home/jec/.sdkman/bin/sdkman-init.sh" ]] && source "/home/jec/.sdkman/bin/sdkman-init.sh"

[ -f ~/.fzf.zsh ] && source ~/.fzf.zsh

