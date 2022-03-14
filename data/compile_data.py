#!/usr/bin/env python3
# This script prepares the video files into a format digestable for web

import json
import os
import shutil

output_dir = "../src/data"

step_controls = {
    "raw": [ "#Ds" ],
    "pre": [ "#Ds", "#sigma-x" ],
    "seg": [ "#Ds", "#sigma-x", "#method" ],
    "post": [ "#Ds", "#sigma-x", "#method", "#min-particle-size" ]
}

output_map = {
    "step-controls": step_controls,
    "archive": {}
}

for fileIndex, fileName in enumerate(os.listdir("./videos")):
    print(fileName)
    file_info_dict = {}
    fileNameNoExt = fileName[:-len(".webm")]
    for entry in fileNameNoExt.split("_"): 
        (key, value) = entry.split("=")
        file_info_dict[key] = value
    step = file_info_dict["Step"]
    if not step in output_map["archive"]:
        output_map["archive"][step] = {}
    target = output_map["archive"][step]
    for control in step_controls[step]:
        value = file_info_dict[control]
        if not value in target:
            target[value] = {}
        target = target[value]
    target["filename"] = str(fileIndex) + ".webm"
    if "Dice coefficient" in file_info_dict:
        target["score"] = file_info_dict["Dice coefficient"]
    shutil.copyfile("./videos/" + fileName, output_dir + "/" + target["filename"] )

with open(output_dir + "/data-map.js", "w") as f:
    f.write("const DataMap = ")
    json.dump(output_map, f)
    f.write("\n\n")
    f.write("export default DataMap;\n")