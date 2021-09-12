import os
import time


def feed(year):
    path = "/Users/samzimmerman/Documents/Apps/Website/src/assets/images/feed/"
    os.system('rm ' + path + year + '.DS_Store')
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

    with open("/Users/samzimmerman/Documents/Apps/Website/src/assets/images/feed/list.tsx", "a") as file:
        file.write("const images: any = [\n")

        for i in range(len(l)):
            col = colHeight.index(min(colHeight))+1
            file.write(
                "{ id: " + f"{i}, src: require('./{year}{l[i][0]}'), col: {col}, title: \"\"" + "},\n")
            col -= 1
            scaleFactor = l[i][3] / 374
            colHeight[col] += l[i][2] / scaleFactor

        file.write("];\nexport default images;")

    print([int(x) for x in colHeight])


def adventureStory(imgFolder):
    path = "/Users/samzimmerman/Documents/Apps/Website/src/assets/images/adventures/"
    os.system('rm ' + path + imgFolder + '.DS_Store')
    l = os.listdir(path+imgFolder)
    l.sort()

    index = 0
    with open(path + imgFolder + "Images.tsx", "a") as file:
        file.write("const images: any = [\n")
        for i in range(len(l)):
            file.write(
                "{ id: " + f"{i}, src: require('./{l[i]}'), title: \"\"" + "},\n")
        file.write("];\nexport default images;")

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


# feed("2021/")
adventureStory("2021SilverLake/")
