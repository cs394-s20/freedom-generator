import idoc
import sys
print(sys.argv)
with open("test_idoc_numbers.txt", "r") as f:
    data=f.read().split("\n")
if len(sys.argv) > 1:
    min_idoc = sys.argv[1]
else:
    min_idoc = "A"
for idoc_n in data:
    if idoc_n > min_idoc:
        print(idoc_n)
        try:
            idoc.getIdocProfile(idoc_n)
        except Exception as e:
            print(e)
            input()