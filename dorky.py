#/usr/bin/env python3

import webbrowser

keyword = input("[!] File Search For?\n[=] ")
type = input("\n[!] Type the number for extention you'd like to search for? \n[1] Audio\n[2] Video\n[3] Document\n[4] Image\n[5] Executable\n[6] Archive\n[X] null\n[=] ")

vidext = (" +(.mkv|.mp4|.avi|.mov|.mpg|.wmv)")
imgext = (" +(.jpg|.gif|.png|.tif|.tiff|.psd)")
audext = (" +(.ogg|.mp3|.flac|.wma|.m4a)")
docext = (" +(.MOBI|.CBZ|.CBR|.CBC|.CHM|.EPUB|.FB2|.LIT|.LRF|.ODT|.PDF|.PRC|.PDB|.PML|.RB|.RTF|.TCR)")
exeext = (" +(.exe)")
arcext = (" +(.rar|.tar|.zip|.sit)")
spacet = (vidext + imgext + audext + docext + exeext + arcext)

def super(call):
        webbrowser.open("http://www.google.com/search?q={} +{} +intitle:%22index of%22 -inurl:(jsp|pl|php|html|aspx|htm|cf|shtml) -inurl:(hypem|unknownsecret|sirens|writeups|trimediacentral|articlescentral|listen77|mp3raid|mp3toss|mp3drug|theindexof|index_of|wallywashis|indexofmp3)".format(call, keyword))

if type == '1':
        super(audext)
elif type == '2':
        super(vidext)
elif type == '3':
        super(docext)
elif type == '4':
        super(imgext)
elif type == '5':
        super(exeext)
elif type == '6':
        super(arcext)
elif type == 'X':
        super(spacet)
else:
        super(spacet)

#visitnepal2020



