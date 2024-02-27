# 编辑seg

## 基本属性

![](/images/segmentation/editSegBase.png)

## 自动分割工具

![](/images/segmentation/autoSeg.png)

1. 选中待处理seg
2. 选择auto工具
3. 点击打开模型管理对话框
4. 导入在模型[动物园](../manual/model)中下载的模型
5. 点击选中模型
6. 点击选择
7. 运行模型

::: info 注意
模型会在后台运行，如果当前已有其它模型在后台运行，则会在该模型运行完成后才开始本次运行。在模型未运行完成期间，再次点击运行按钮<v-icon size='small' icon="mdi-play-circle-outline" color='yellow'/>则会停止此次运行任务。seg在运行或者等待运行模型时是不允许进行其它更改其内容的操作的。
:::

## 手动标注

![](/images/segmentation/paintSeg.png)

1. 选中待处理seg
2. 选择paint工具
3. 在各视图勾画（除3D视图外）
4. 可切换为橡皮擦工具
5. 更改笔刷半径
6. 更改笔刷厚度（一般默认为0即可）
7. 是否实时刷新3D视图

::: warning 警告
开启实时刷新3D视图会使得勾画过程卡顿。
:::

## 套索

![](/images/segmentation/lasso.png)

1. 选中待处理seg
2. 选择lasso工具
3. 在各视图筐选
4. 可在套索模式
5. 可在清除和填充间切换
6. 是否以3D模型在Z、Y、X视图中进行勾画

::: info 注意
目前这个工具计算量很大，请耐心等待。
:::

