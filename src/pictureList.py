import os
import json
import time


def feed(year):
    path = "/Users/samzimmerman/Documents/Apps/Website/src/assets/images/feed/"
    #year = "2016/"
    l = os.listdir(path+year)

    for i in range(len(l)):
        response = os.popen(
            "mdls -n kMDItemContentCreationDate -n kMDItemPixelHeight -n kMDItemPixelWidth " + path+year+l[i])

        rList = response.read().split("\n")
        # print(rList)
        date = rList[0].split('=')[1].strip(' ')
        height = rList[1].split('=')[1].strip(' ')
        width = rList[2].split('=')[1].strip(' ')
        l[i] = (l[i], date, int(height), int(width))

    l.sort(reverse=True, key=lambda x: x[1])

    index = 0
    colHeight = [0, 0, 0]
    jsonList = []
    for i in range(len(l)):
        col = colHeight.index(min(colHeight))
        x = {"id": i, "src": "require('./" + year +
             l[i][0] + "')", "col": col+1, "title": ""}

        jsonList.append(x)
        scaleFactor = l[i][3] / 374
        colHeight[col] += l[i][2] / scaleFactor

    print(colHeight)

    file = open(
        "/Users/samzimmerman/Documents/Apps/Website/src/assets/images/feed/list.tsx", "a")
    file.write("const images: any =\n")
    file.write(json.dumps(jsonList))
    file.write("\n")
    file.write("export default images;")
    file.close()


def adventureStory(imgFolder):
    path = "/Users/samzimmerman/Documents/Apps/Website/src/assets/images/adventures/"
    os.system('rm ' + path + imgFolder + '.DS_Store')
    l = os.listdir(path+imgFolder)
    l.sort()

    index = 0
    jsonList = []
    for i in range(len(l)):
        x = {"id": i, "src": "require('./" +
             l[i] + "')", "title": ""}
        jsonList.append(x)

    # Write Images.tsx file to folder which holds all images for story
    file = open(path + imgFolder + "Images.tsx", "a")
    file.write("const images: any =\n")
    file.write(json.dumps(jsonList))
    file.write("\n")
    file.write("export default images;")
    file.close()

    # Writes template .tsx file for the story in stories folder
    file = open("/Users/samzimmerman/Documents/Apps/Website/src/adventure/stories/" +
                imgFolder[0:-1] + ".tsx", "a")
    file.write('import React from "react";\n')
    file.write('import Images from "../../assets/images/adventures/' +
               imgFolder + 'Images";\n')
    file.write('import * as Builder from "../storyBuilder";\n')
    file.write('export default function NAME() {\n')
    file.write(
        'return <div>{Builder.title(Images[0], "TITLE", "DATE")}</div>;\n')
    file.write('}\n')
    file.close()
    # Then must write import in AdventuresPage, and write in Route location


# feed("2020/")
adventureStory("2020Zion/")
