data = {}
with open("/Users/samzimmerman/Documents/Apps/Website/firebaseUploadTemps.txt", "r") as f:
    for line in f:
        l = line.strip('\n').rstrip(" ").split(" ")
        if len(l) > 1:  # If temperatures are present
            validTemps = True
            for i in range(1, len(l)):
                current = float(l[i])
                if current > 100 or current < 40:  # If temperatures are within acceptable range
                    validTemps = False
            if validTemps:
                data[l[0]] = l[1:]
    print(data)
