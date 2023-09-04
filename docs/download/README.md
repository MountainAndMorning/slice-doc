# Download

Please cite the software by this paper:

Li, Xiaogang, et al. "Automatic quantification of epicardial adipose tissue volume." Medical Physics 48.8 (2021): 4279-4290.

And insert this website location (https://slice-doc.netlify.app/) in your manuscript.

Connect the developer by the WeChat QR code or the email 18207481578@163.com to get a Pro license.

![](/images/QR.png)

Download MacOS Apple Silicon version v4.5.0 

<a href='https://github.com/MountainAndMorning/EATSeg/releases/download/v4.5.0/TIMESlicePro_4.5.0.dmg'>location one</a>

<a href='https://pan.baidu.com/s/1qike80D76wj51d1UFtE7yQ?pwd=5hxn'>location two (code:5hxn)</a>

Download MacOS Intel version v4.3.0 

<a href='https://github.com/MountainAndMorning/EATSeg/releases/download/v4.3.0/TIMESlicePro_4.3.0.Intel.dmg'>location one</a>

<a href='https://pan.baidu.com/s/1qLUku9hG6EunXnR-dt1vYQ?pwd=543p'>location two (code:543p)</a>

Download Windows version v4.5.0 (Coming soon)

Download Windows version v4.4.0 

<a href='https://github.com/MountainAndMorning/EATSeg/releases/download/v4.4.0/TIMESlicePro_4.4.0.exe'>location one</a>

<a href='https://pan.baidu.com/s/1_mpv5Lt2D2TVNESVkoi_ZQ?pwd=1qfc'>location two (code:1qfc)</a>

<a href='https://b23.tv/9gyl6Q6'>Tutorial</a>

For Windows user, if you encounter error as below:

![](/images/error.png)

You should patch your system by installing this <a href='https://learn.microsoft.com/en-US/cpp/windows/latest-supported-vc-redist?view=msvc-170'>Redistributable software</a>.
A copy of this software is also provided <a href='/VC_redist.x64.exe'>here</a>.
After install this software and restart your computer, you need reinstall TIMESlice and the error should disappear.

# Update log

## V4.5.0
- Improve the Island seg tool.
- Improve the Lasso seg tool.
- Add the snap function for saving the state of the seg.
- Add a new epicardium seg model for non contrast CT.
- Improve the stability of the activation module. If your activation code becomes invalid, connect the developer to get a new one.
- Fix the importing problem for some Dicoms.

## V4.4.0
- Add the Island seg tool.
- Add the Lasso seg tool.
- Fix the launch problem in some Windows computer.

## V4.3.0
- Add the new Tube module to replace the Contour module for coronary artery plaque analysing.
- Add the FAI function in the plaque related information list.
- Add support for exporting the study.
- Improve the performance of the Centerline module especially for the very long vessel.

## V4.2.0

- Add more settings for the radiomics panel.
- Add suppert for running radiomics in the background for parallel computation.
- Add support for editing the Circle object in the contour module.
- Add support for measuring the angle between the branches in the centerline module.
- Add support for importing nii and nrrd format series image.
- Fix the node idx bug in the centerline module.
- Fix the inserting node bug in the centerline module.
- Fix the wrong unit bug of the plaque length.
- Improve the stability of the software.

## V4.1.0

- Add support for switching database.
- Add support for importing segmentation.
- Add support for editing the content of the study
- Add support for adding new content for the study
- Add support for manually creating study
- Fix the bug about deleting label
- Fix the bug about reloading patient list
- Improve the stability of importing table by only allowed the letter or number composed column title
- Remove the deleting all centerlines function



