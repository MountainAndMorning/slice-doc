# 数据管理

## 数据结构
TIMESlice采用了以患者为核心的策略来管理数据，patientId是所有患者的唯一标识。患者中包含了该患者的所有数据，当导入数据时，TIMESlice会自动根据patientId将对应数据放到对应患者名下。

![](/images/dataManage/dataStructure.png)

患者的数据是以study为单位进行管理的,study按照不同设定分为4种类别,分别是用于存储医学图像的Scan<v-icon size='small' icon="mdi-image-multiple" color='yellow'/>,存放导入的表格条目的Report<v-icon size='small' icon="mdi-file-chart" color='yellow'/>,提取影像参数所得的Feature<v-icon size='small' icon="mdi-blur" color='yellow'/>及用户手动创建的Note<v-icon size='small' icon="mdi-text-box" color='yellow'/>.

患者本身则由类似文件夹的系统管理。为何说类似呢，因为这里

