inoremap jj <esc>
let mapleader = " "
let maplocalleader = ","
set number relativenumber
let base16colorspace=256

set nocompatible              " be iMproved, required
filetype off                  " required

" Set indent to 4 spaces
set tabstop=4 softtabstop=0 expandtab shiftwidth=4 smarttab

" j/k will move virtual lines (lines that wrap)
noremap <silent> <expr> j (v:count == 0 ? 'gj' : 'j')
noremap <silent> <expr> k (v:count == 0 ? 'gk' : 'k')

"===========================================================================
" Start Plugins
"===========================================================================
call plug#begin('~/.vim/plugged')
"--------------------------------------------
" Themes
"--------------------------------------------
Plug 'morhetz/gruvbox'
Plug 'kristijanhusak/vim-hybrid-material'
"--------------------------------------------
" Look and Feel
"--------------------------------------------
Plug 'itchyny/lightline.vim'
"--------------------------------------------
" Utility
"--------------------------------------------
Plug 'scrooloose/nerdcommenter'
Plug 'scrooloose/nerdtree'
Plug 'mattn/emmet-vim'
Plug 'junegunn/fzf', { 'dir': '~/.fzf', 'do': './install --all' }
Plug 'junegunn/fzf.vim'
Plug 'tpope/vim-surround'
Plug 'justinmk/vim-sneak'
Plug 'airblade/vim-rooter'
Plug 'airblade/vim-gitgutter'
Plug 'jiangmiao/auto-pairs'
Plug 'alvan/vim-closetag'
Plug 'mattn/emmet-vim'
Plug 'tpope/vim-fugitive'
Plug 'bronson/vim-trailing-whitespace'
Plug 'lervag/vimtex'
Plug 'kovetskiy/sxhkd-vim'
Plug 'prettier/vim-prettier', {
  \ 'do': 'npm install',
  \ 'for': ['javascript', 'typescript', 'css', 'less', 'scss', 'json', 'graphql', 'markdown', 'vue', 'yaml', 'html'] }
"--------------------------------------------
" Linting
"--------------------------------------------
Plug 'w0rp/ale'

"--------------------------------------------
" Language Server Protocol
" -------------------------------------------
Plug 'neoclide/coc.nvim', {'tag': '*', 'do': { -> coc#util#install()}}
"--------------------------------------------
" Go
" -------------------------------------------
Plug 'fatih/vim-go'

"--------------------------------------------
" Rust
"--------------------------------------------
Plug 'rust-lang/rust.vim'

call plug#end()
"===========================================================================
" End Plugins
"===========================================================================

if getline(1) =~ '#!'
    set filetype=sh
endif

"===========================================================================
" Coc
"===========================================================================

" if hidden is not set, TextEdit might fail.
set hidden

" Some servers have issues with backup files, see #649
set nobackup
set nowritebackup

" Better display for messages
set cmdheight=2

" You will have bad experience for diagnostic messages when it's default 4000.
set updatetime=300

" don't give |ins-completion-menu| messages.
set shortmess+=c


" Remap keys for gotos
nmap <silent> gd <Plug>(coc-definition)
nmap <silent> gy <Plug>(coc-type-definition)
nmap <silent> gi <Plug>(coc-implementation)
nmap <silent> gr <Plug>(coc-references)

" Make <tab> used for trigger completion, completion confirm, snippet expand
" and jump
inoremap <silent><expr> <TAB>
      \ pumvisible() ? coc#_select_confirm() :
      \ coc#expandableOrJumpable() ? "\<C-r>=coc#rpc#request('doKeymap', ['snippets-expand-jump',''])\<CR>" :
      \ <SID>check_back_space() ? "\<TAB>" :
      \ coc#refresh()

function! s:check_back_space() abort
  let col = col('.') - 1
  return !col || getline('.')[col - 1]  =~# '\s'
endfunction

let g:coc_snippet_next = '<tab>'

" Use K to show documentation in preview window
nnoremap <silent> K :call <SID>show_documentation()<CR>

function! s:show_documentation()
  if (index(['vim','help'], &filetype) >= 0)
    execute 'h '.expand('<cword>')
  else
    call CocAction('doHover')
  endif
endfunction

" Go related coc settings
"
" Automatically organize imports on save
autocmd BufWritePre *.go :call CocAction('runCommand', 'editor.action.organizeImport')

"===========================================================================
" Theme Support
"===========================================================================
set guifont=OperatorMonoLight
set background=dark
colorscheme gruvbox

if(has("nvim"))
	let $NVIM_TUI_ENABLE_TRUE_COLOR=1
endif

if(has("termguicolors"))
	set termguicolors
endif


filetype plugin on
let g:NERDSpaceDelims = 1

syntax on
set encoding=utf-8

" Splits open at the bottom and right
set splitbelow splitright

" Shortcutting split navigation
map <C-h> <C-w>h
map <C-j> <C-w>j
map <C-k> <C-w>k
map <C-l> <C-w>l

"========================================================================
" Shortcuts
"========================================================================
" Toggle NERDTree
nnoremap <leader>ft :NERDTree<CR>

" Change SAVE to work like Emacs
map <C-x><C-s> :w<CR>

" Shortcut to clear highlighted text
map <leader>x :noh<CR>

" Kill current buffer
map <leader>bk :bd<CR>

" Show buffer list
map <leader>bs :buffers<CR>

" Shortcut to config file
map <leader>fce :e ~/.config/nvim/init.vim<CR>

" <leader><leader> toggles between buffers
nnoremap <leader><leader> <c-^>

" fzf
nnoremap <C-p> :Files<CR>
nnoremap <C-b> :Buffers<CR>

" Call fix whitespace to trim trailing whitespace
nnoremap <leader> w :FixWhitespace<CR>

"========================================================================
" Go Settings
"========================================================================
let g:go_fmt_command = "goimports"

" Set gohtml file extFension to html syntax
" au BufReadPost *.gohtml set filetype=html

" Creates a gohtml filetype for vim
augroup GoHTMLType
    au!
    au BufNewFile,BufRead,BufReadPost *.gohtml set filetype=html
augroup end

"------------------------------------------------------------------------
" disable vim-go :GoDef short cut (gd)
" this is handled by LanguageClient [LC]
" -----------------------------------------------------------------------
let g:go_def_mapping_enabled = 0


"========================================================================
" ALE Settings
"========================================================================
" Linter
" only lint on save
let g:ale_lint_on_text_changed = 'never'
let g:ale_lint_on_insert_leave = 1
let g:ale_lint_on_save = 0
let g:ale_lint_on_enter = 0
let g:ale_virtualtext_cursor = 1
let g:ale_rust_rls_config = {
	\ 'rust': {
		\ 'all_targets': 1,
		\ 'build_on_save': 1,
		\ 'clippy_preference': 'on'
	\ }
	\ }
let g:ale_rust_rls_toolchain = ''
let g:ale_linters = {'rust': ['rls']}
highlight link ALEWarningSign Todo
highlight link ALEErrorSign WarningMsg
highlight link ALEVirtualTextWarning Todo
highlight link ALEVirtualTextInfo Todo
highlight link ALEVirtualTextError WarningMsg
highlight ALEError guibg=None
highlight ALEWarning guibg=None
let g:ale_sign_error = "✖"
let g:ale_sign_warning = "⚠"
let g:ale_sign_info = "i"
let g:ale_sign_hint = "➤"

"========================================================================
" Prettier plugin settings
"========================================================================
let g:prettier#config#tab_width = 4
map <leader>p :PrettierAsync<CR>

"========================================================================
" Rust
"========================================================================
" Format on Save
"autocmd BufWritePre *.rs execute "RustFmt"
let g:rustfmt_command = "rustfmt +nightly"
let g:rustfmt_autosave = 1
let g:rustfmt_emit_files = 1
let g:rustfmt_fail_silently = 0

"========================================================================
" Ultisnips Settings
"========================================================================
" let g:UltiSnipsExpandTrigger="<c-y>"
" let g:UltiSnipsJumpForwardTrigger="<c-b>"
" let g:UltiSnipsJumpBackwardTrigger="<c-z>"

" " Split snip window vertically.
" let g:UltiSnipsEditSplit="vertical"


"========================================================================
" Lightline
"========================================================================
" let g:lightline = {
       " 'active': {
       " 'left': [ [ 'mode', 'paste' ],
               " [ 'readonly', 'filename', 'modified', 'coc' ] ]
       " },
       " 'component': {
         " 'coc': '%{coc#status()}'
       " },
" }

"===========================================================================
" Emmet
"===========================================================================

let g:user_emmet_mode='a'
let g:user_emmet_leader_key=','

"===========================================================================
" Vimtex
"===========================================================================
let g:vimtex_view_method = 'mupdf'

