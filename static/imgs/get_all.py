import requests

PIC_PHP_SOURCE = 'https://www.plazmaburst2.com/level_editor/pic.php'

folders = ['3', '5', '6', '7', '8', '9']
#folders = [folders[0]]

for fol in folders:
	f = open(fol + "/names.txt", 'r')
	names = f.read().split(' ')
	print("Getting for " + fol)
	f.close()
	#names = [names[0]]
	for name in names:
		link = PIC_PHP_SOURCE + "?m=" + name + "&c=" + fol
		outname = fol + "/" + name + ".png"
		print("  Downloading " + name + " (" + link + ")")
		r = requests.get(link)
		outf = open(outname, 'wb')
		outf.write(r.content)
		outf.close()