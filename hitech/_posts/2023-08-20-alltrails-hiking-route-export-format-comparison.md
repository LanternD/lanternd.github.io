---
layout: post
title: AllTrails 导出格式一览
description: AllTrails 是在徒步圈子里非常有名的应用，不但可以查找很多路线，还可以记录轨迹、分享经验等等。这几年下来我用它记录了几乎所有徒步轨迹。目前我想要导出所有轨迹的数据来可视化。可是它支持这么多种导出方式，到底用哪一种呢？
permalink: /alltrails-hiking-route-export-format-comparison/
categories: [HiTech]
tags: [AllTrails, 徒步, 导出, 格式, GPS, 可视化]
date: 2023-08-20 21:10:02
---

# 　

## 引子

　最近在思考怎么把这几年来徒步的各种路线添加到地图上做可视化和分析。这个项目的第一步是选择一种合适的导出格式，既要有全面的信息，又能便于处理。这里导出的路线只是第一步，我的目标是进一步处理导出成 CSV。

　我打开 AllTrails，找了一条路线想导出，结果一看这列表我就懵了。总共 30 几种格式可以导出。我也知道市面上做 GPS 路径的厂家、设备非常多，但是到现在居然格式还没有大一统而且千差万别，这是出乎我意料的。

　下面就是 AllTrails 支持的导出格式。

![img]({{site.img-hosting}}/Pic4Post/alltrails-hiking-route-export-format-comparison/alltrails-all-export-format.png)
*所有可选的导出格式*

　本文的重心就是，在这个列表里面找一种靠谱的格式，导出我之前 Hiking 走过的一百多条路线。而且由于程序只开发一次，最好一步到位，不要中间切换格式。

　开始之前总该设定一些目标，这样才能快速筛选。

　我的需求：

-   有经纬度和海拔信息。
-   有每个点的时间信息。这个用来在时间维度上做数据的处理。比如相邻两个点之间时间差很多可以分成两条路。或者同一天有好几段单独记录的路程，可以在后期合为一段。
-   有 Bounding Box，方便画单张图片作为日志路线图展示 &#x2013; 不是刚需，可以用程序算出一个。
-   有元信息，比如路线名称。
-   好写 Python 程序，处理成 CSV。

　推荐度按我个人需求来打分。其他需求可自行参考。

## 格式对比

　下面是所有格式的概览。

　如果想看各个文件的样例，这里有一个 33 种格式的合订本。

　【[Afternoon-Hike-AllTrails-Exported-Files.zip](https://img-cdn.dlyang.me/Pic4Post/alltrails-hiking-route-export-format-comparison/Afternoon-Hike-AllTrails-Exported-Files.zip)】（点击会直接下载）

　推荐度：

-   ❌ 表示不行
-   🆗 表示不是最优解，可以作为候补
-   ✅ 说明各项指标都不错

　注：Elevation = Altitude = 海拔

| 文件类型              | 有 Elevation | 有元数据 | 有时间戳 | 简介                                                                                                                               | 推荐度 ❌🆗✅ |
| ---                   | ---         | ---  | ---  | ---                                                                                                                                | ---     |
| GPX Track             | ✅          | ✅   | ✅   | XML 格式；最流行的文件类型；支持 Bound 属性，画图的时候可以直接确定框的大小，在只画单条线路的时候非常方便；每个点都有时间戳，但是 UTC0 时区；同一经纬度的点，Elevation 和其他文件不一样，差了十几米，据考证这个和网上的高程数据库比较接近 | ✅      |
| Google Earth KML      | ✅          | ✅   | ❌   | XML 格式；路径部分是 CSV 格式；元信息比较多（大部分没啥用）；没有任何时间信息；可以当作 CSV 的进阶版本                             | ❌      |
| Garmin Course TCX     | ✅          | ✅   | ✅   | XML 格式；有一个 Distance 属性，记录离出发地的累计距离，可能是从两个点的距离算出来的，如果不用自己算倒也挺好；文件相对比较大，很多冗余信息 | ✅      |
| Garmin Course CRS     | ✅          | ✅   | ✅   | 和上面的 Garmin Course TCX 几乎没有区别；应该是旧版本的格式，有前者就不推荐这个了                                                  | 🆗      |
| CSV                   | ❌          | ❌   | ❌   | 格式简单；没有时间信息                                                                                                             | ❌      |
| Garmin Fit (ANT+)     | ❌          | ❌   | ❌   | 二进制，没法读，直接 Pass。应该是 Garmin 设备专用格式                                                                              | ❌      |
| GPX Route             | ✅          | ✅   | ✅   | 和 GPX Track 比少了 Bound，其他没什么特色                                                                                          | 🆗      |
| Google Earth KMZ      | ❌          | ❌   | ❌   | 二进制，没法读，直接 Pass                                                                                                          | ❌      |
| Google Earth Timeline | ✅          | ✅   | ✅   | 元数据比较齐全；时间戳和位置点是两个单独的列表，处理起来有点奇怪（但是不难）                                                       | ✅      |
| Google Earth Tour     | ✅          | ✅   | ❌   | 和 Google Earth KML 有点像，不过多了一个 FlyTo 属性，就是打开 Google Earth 的时候能从高空逐渐放大直到目标点；我可能用不上，但是算个加分项。可以认为这个比 Google Earth KML 更齐全一些；没有任何时间信息 | 🆗      |
| OVL (ASCII)           | ❌          | ❌   | ❌   | 格式简单；没有 Elevation，直接 Pass                                                                                                | ❌      |
| Fugawi                | ✅          | ❌   | 🆗   | 约等于更详细一点的 CSV；时间戳只有年月日（UTC+0 时区）；没有别的优势，Pass 了                                                      | ❌      |
| KOMPASS Verlag        | ✅          | ❌   | ❌   | 和 CSV 一模一样，Pass                                                                                                              | ❌      |
| PCX5 Track            | ✅          | ✅   | ✅   | 信息齐全；格式有些复杂， 可能不好处理                                                                                              | 🆗      |
| GeoRSS Track          | ❌          | ✅   | ❌   | 数据格式奇怪，难处理；没有 Elevation                                                                                               | ❌      |
| MS Excel              | ✅          | ❌   | ❌   | 和 CSV 一模一样；不易处理，没有额外的价值                                                                                          | ❌      |
| Ozi Explorer          | 🆗          | ✅   | ❌   | Elevation 单位是 feet，不靠谱；有很多冗余数据                                                                                      | ❌      |
| MagicMaps IKT         | ❌          | ✅   | ❌   | 导出语言是德语；没有 Elevation                                                                                                     | ❌      |
| Falk IBEX Tour        | ❌          | ✅   | ❌   | 格式有点复杂且冗余，经纬度是我看不懂的数据，比如 (4666806, -13632462)；没有 Elevation                                              | ❌      |
| GeoJSON Track         | ✅          | ✅   | ❌   | 有 Bounding Box（方便画单张图片）；没时间戳                                                                                        | ❌      |
| JSON                  | ✅          | ❌   | ❌   | 普通，和 CSV 区别不大                                                                                                              | ❌      |
| PathAway              | ✅          | ❌   | ✅   | 有详细时间戳，没有元数据                                                                                                           | ❌      |
| Navigon RTE 5.x       | ❌          | ❌   | ❌   | 奇怪的格式，有点像 Markdown Table；没有元数据，没有 Elevation                                                                      | ❌      |
| Navigon RTE 6.x       | ❌          | ❌   | ❌   | 和上面 5.x 差不多；没有元数据，没有 Elevation                                                                                      | ❌      |
| Navigon Freshroute    | ❌          | ✅   | ❌   | 没有 Elevation 和时间戳                                                                                                            | ❌      |
| Magellan Track        | ✅          | ❌   | ❌   | 有点像 NMEA Protocol；元数据不齐全，时间戳有时分秒但没有年月日                                                                     | ❌      |
| O-synce Track         | ✅          | ✅   | ✅   | 和 GPX Route/Track 几乎没有区别；鉴于前两个比较通用，这个就列为 OK 吧                                                              | 🆗      |
| CompeGPS Track        | ✅          | ✅   | ✅   | 信息齐全；有很多冗余的列；单位是「ºN」和「ºW」，有点奇怪                                                                           | 🆗      |
| qpeGPS Track          | 🆗          | ❌   | ❌   | Elevation 单位是 feet，不靠谱；有冗余的一列                                                                                        | ❌      |
| TomTom ITN            | ❌          | ❌   | ❌   | 用竖线「｜」分割列；经纬度没有小数点                                                                                               | ❌      |
| Garmin Logbook        | ✅          | ❌   | ✅   | XML 格式；信息齐全；没什么亮点                                                                                                     | 🆗      |
| SQL Inserts Track     | ✅          | ❌   | ❌   | 给 SQL 数据库用的，很多冗余字符；缺少元信息                                                                                        | ❌      |
| BDD (Bait Dropping)   | ❌          | ❌   | ❌   | 格式奇怪；时间戳全是「00:00:00,00.00.00」（没有时间戳）                                                                            | ❌      |

---

## 小总结

　把所有格式都看过以后我有一些观察：

-   所有格式都有经度和纬度（基本要求），但是不一定有海拔。没有海拔的会被我一票否决。
-   这些格式里面海拔有两种数据。一种是符合网上的高程数据库的值，有且仅有 GPX Track 使用；另一种只有整数单位，可能是手机或者手表传感器高度计的读数，只能精确到一米，所有其他导出格式都是这个数值。比如 (38.65262, -122.59967) 这个点，第一种数值是 689.64m，其他的格式显示 707 米，两者相差近 20 米。
-   带时间戳的只有 13 种格式，远比我想象中少。所有带时间戳的时间都是 UTC+0 时区，需要自己转换成当地时间。
-   有些格式毫无意义，就是某些厂家为了自己和别人不兼容强行设立的标准，而这些标准又有粗制滥造之嫌，真的难用。还有的明明和某些通用格式没啥区别，还非得自立门户，定义成一种新标准，我无法理解。

## 最后的筛选

　从表格里面可知，最终角逐进入最终候选名单的有以下三种格式：

-   GPX Track
-   Garmin Course TCX
-   Google Earth Timeline

　后面就要仔细分析它们的优劣了。

### GPX Track

格式样例：

```xml
<?xml version="1.0"?>
<gpx xmlns="http://www.topografix.com/GPX/1/1" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" version="1.1" creator="AllTrails.com" xsi:schemaLocation="http://www.topografix.com/GPX/1/1 http://www.topografix.com/GPX/1/1/gpx.xsd">
  <metadata>
    <name><![CDATA [Afternoon hike]]></name>
    <desc><![CDATA []]></desc>
    <link href="http://www.alltrails.com">
      <text>AllTrails, LLC</text>
    </link>
    <bounds minlat="38.6505" minlon="-122.63361" maxlat="38.67092" maxlon="-122.59959"/>
  </metadata>
  <trk>
    <name><![CDATA [Afternoon hike]]></name>
    <src>AllTrails</src>
    <trkseg>
      <trkpt lat="38.65262" lon="-122.59967">
        <ele>689.64</ele>
        <time>2023-08-05T21:24:46Z</time>
      </trkpt>
      <trkpt lat="38.65262" lon="-122.5997">
        <ele>689.51</ele>
        <time>2023-08-05T21:24:53Z</time>
      </trkpt>
      <trkpt lat="38.65262" lon="-122.59974">
        <ele>689.6</ele>
        <time>2023-08-05T21:25:01Z</time>
      </trkpt>    
      </trkseg>
  </trk>
</gpx>
```

　基本上是目前认可度最高的一种格式，不管什么平台都能支持。这个格式里面的 Elevation 也是准确映射到相应的地理位置的高度的，避免了后期的 API 查询。

　其实我一开始就觉得 GPX Track 挺好的。它也是列表里面的第一项。我抱着「万一有更好的格式呢」的心态，把别的都试了一圈，最后也没几个能打败 GPX Track 的，也是令人唏嘘了。

### Garmin Course TCX

　格式样例：

```xml
<?xml version="1.0"encoding="UTF-8"?>
<TrainingCenterDatabase xmlns="http://www.garmin.com/xmlschemas/TrainingCenterDatabase/v2" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.garmin.com/xmlschemas/TrainingCenterDatabase/v2 http://www8.garmin.com/xmlschemas/TrainingCenterDatabasev2.xsd">
  <Folders>
    <Courses>
      <CourseFolder Name="AllTrails">
        <CourseNameRef>
          <Id>Afternoon hike</Id>
        </CourseNameRef>
      </CourseFolder>
    </Courses>
  </Folders>
  <Courses>
    <Course>
      <Name>Afternoon hike</Name>
      <Lap>
        <TotalTimeSeconds>12271.0</TotalTimeSeconds>
        <DistanceMeters>16195.097833376125</DistanceMeters>
        <BeginPosition>
          <LatitudeDegrees>38.65262000</LatitudeDegrees>
          <LongitudeDegrees>-122.599670</LongitudeDegrees>
        </BeginPosition>
        <EndPosition>
          <LatitudeDegrees>38.65259000</LatitudeDegrees>
          <LongitudeDegrees>-122.599620</LongitudeDegrees>
        </EndPosition>
        <Intensity>Active</Intensity>
      </Lap>
      <Track>
        <Trackpoint>
          <Time>2023-08-05T21:24:46Z</Time>
          <Position>
            <LatitudeDegrees>38.65262000</LatitudeDegrees>
            <LongitudeDegrees>-122.599670</LongitudeDegrees>
          </Position>
          <AltitudeMeters>707.00000</AltitudeMeters>
          <DistanceMeters>0.000</DistanceMeters>
        </Trackpoint>
        <Trackpoint>
          <Time>2023-08-05T21:24:53Z</Time>
          <Position>
            <LatitudeDegrees>38.65262000</LatitudeDegrees>
            <LongitudeDegrees>-122.599700</LongitudeDegrees>
          </Position>
          <AltitudeMeters>706.00000</AltitudeMeters>
          <DistanceMeters>2.605</DistanceMeters>
        </Trackpoint>
        <Trackpoint>
          <Time>2023-08-05T21:25:01Z</Time>
          <Position>
            <LatitudeDegrees>38.65262000</LatitudeDegrees>
            <LongitudeDegrees>-122.599740</LongitudeDegrees>
          </Position>
          <AltitudeMeters>706.00000</AltitudeMeters>
          <DistanceMeters>6.079</DistanceMeters>
        </Trackpoint>
        <Trackpoint>
          <Time>2023-08-05T21:25:07Z</Time>
          <Position>
            <LatitudeDegrees>38.65262000</LatitudeDegrees>
            <LongitudeDegrees>-122.599780</LongitudeDegrees>
          </Position>
          <AltitudeMeters>707.00000</AltitudeMeters>
          <DistanceMeters>9.553</DistanceMeters>
        </Trackpoint>
          </Track>
    </Course>
  </Courses>
</TrainingCenterDatabase>
```

　本质上来说，TCX 在 GPX 基础上多了「从起点到当前点的累积距离」这个数据，其实还是有点用的。此外还有起止点坐标，路线总耗时等等元数据。TCX 在元数据方面是比别的详细很多的。

　如果知道了所有的点的 GPS 坐标，算累计距离好像也不难，但是那也是额外的活。而且似乎它的计算还挺标准，与其自己发明个算法，不如直接拿现成的。

　Elevation 这个倒是可以直接调用网上的 API（比如 Google Maps Platform 的 [Elevation API](https://developers.google.com/maps/documentation/elevation/start#sample-request)），给个经纬度返回对应的海拔。

### Google Earth Timeline

　格式样例：

```xml
<?xml version="1.0"encoding="UTF-8"?>
<kml xmlns="http://www.opengis.net/kml/2.2" xmlns:gx="http://www.google.com/kml/ext/2.2" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.opengis.net/kml/2.2 http://schemas.opengis.net/kml/2.2.0/ogckml22.xsd http://www.google.com/kml/ext/2.2 http://code.google.com/apis/kml/schema/kml22gx.xsd">
  <Document>
    <name>Afternoon hike</name>
    <description><![CDATA [https://www.gpsies.com/map.do?fileId=null]]></description>
    <Style id="multiTrack_n">
      <IconStyle>
        <scale>1.2</scale>
        <Icon>
          <href>https://earth.google.com/images/kml-icons/track-directional/track-0.png</href>
        </Icon>
      </IconStyle>
      <LineStyle>
        <color>be3887a0</color>
        <width>6</width>
      </LineStyle>
    </Style>
    <Style id="multiTrack_h">
      <IconStyle>
        <scale>1.2</scale>
        <Icon>
          <href>https://earth.google.com/images/kml-icons/track-directional/track-0.png</href>
        </Icon>
      </IconStyle>
      <LineStyle>
        <color>beabb7f5</color>
        <width>6</width>
      </LineStyle>
    </Style>
    <StyleMap id="multiTrack">
      <Pair>
        <key>normal</key>
        <styleUrl>#multiTrack_n</styleUrl>
      </Pair>
      <Pair>
        <key>highlight</key>
        <styleUrl>#multiTrack_h</styleUrl>
      </Pair>
    </StyleMap>
    <Placemark>
      <name>Afternoon hike</name>
      <styleUrl>#multiTrack</styleUrl>
      <gx:MultiTrack>
        <gx:Track>
          <when>2023-08-05T21:24:46Z</when>
          <when>2023-08-05T21:24:53Z</when>
          <when>2023-08-05T21:25:01Z</when>
          <when>2023-08-05T21:25:07Z</when>
          <when>2023-08-05T21:25:33Z</when>
          <when>2023-08-05T21:25:35Z</when>
          <when>2023-08-05T21:25:36Z</when>
          <when>2023-08-05T21:25:37Z</when>
          <when>2023-08-05T21:25:39Z</when>
          <when>2023-08-05T21:25:42Z</when>
          <gx:coord>-122.599670 38.65262000 707</gx:coord>
          <gx:coord>-122.599700 38.65262000 706</gx:coord>
          <gx:coord>-122.599740 38.65262000 706</gx:coord>
          <gx:coord>-122.599780 38.65262000 707</gx:coord>
          <gx:coord>-122.599810 38.65264000 706</gx:coord>
          <gx:coord>-122.599860 38.65264000 707</gx:coord>
          <gx:coord>-122.599900 38.65264000 707</gx:coord>
          <gx:coord>-122.599940 38.65264000 707</gx:coord>
          <gx:coord>-122.599980 38.65264000 707</gx:coord>
          <gx:coord>-122.600020 38.65262000 709</gx:coord>
        </gx:Track>
      </gx:MultiTrack>
    </Placemark>
  </Document>
</kml>
```

　Google 的这个 KML 格式也很普及。它的特点是时间戳放一段，数据点放另外单独一段。这个倒是很合适用 Pandas 之类的直接转成 DataFrame。

　不过我总担心这两者长度不一致，导致转换出现异常。从数据安全角度看，这个并不优化。反之，每个数据点都应该自成一体，如果出问题了也是一个数据点出问题，不会连累其他的数据点。因为这点，我决定将 Google Earth Timeline 格式的优先级下降一些。

### 最终选择

　最后的赢家是：「 **Garmin Course TCX** 」！

　我决定还是留下「从起点的累积距离」这样一个参数。至于真实海拔，我打算用 Google Elevation API 批量查询添加。

## 尾记

　后面就是研究怎么批量下载 AllTrails 上的轨迹并且搞定后续的数据处理了。工程量不大不小，期待最后能搞出漂亮的可视化结果。
