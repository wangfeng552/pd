<template>
<div class="layout">
  <!-- 顶部 -->
  <div class="header">
    <img src="~@/assets/images/banner.png" alt="">
    <div class="weather">
      <span class="date">2017-07-25</span>
      <span class="date">12:34:52</span>
      <span class="date">星期五</span>
      <span class="date">多云</span>
    </div>
  </div>
  <!-- 主模块 -->
  <div class="main clear">
    <div class="m-l">
      <!-- 活动数量 -->
      <div class="column">
        <div class="column-main amount clear">
          <div class="jb-line"></div>
          <div class="w162">
            <h2 class="title">活动数量</h2>
            <div class="tuxing">
              <div class="circle-main">
                <div class="percentage">50%</div>
                <div class="wave"></div>
                <!-- top -50px 到50px -->
                <div class="wave-mask" style="top: 20px"></div>
              </div>
            </div>
            <div class="text">度假区活动占比</div>
          </div>
          <div class="w276">
            <div class="bz-top">
              <div class="bz-list">
                <span class="b-sekuai"></span>
                <span class="text">度假区</span>
              </div>
              <div class="bz-list">
                <span class="b-sekuai pd-sekuai"></span>
                <span class="text">浦东新区</span>
              </div>
            </div>
            <div class="bz-main">
              <div class="area-list">
                <div class="person">1000人以下</div>
                <div class="person-bfb">
                  <div>50</div>
                  <div class="p-zhu">
                    <div class="number">10%</div>
                    <div class="green"></div>

                  </div>
                  <div>227</div>
                </div>
              </div>
              <div class="area-list">
                <div class="person">1000人以下</div>
                <div class="person-bfb">
                  <div>50</div>
                  <div class="p-zhu">
                    <div class="number">10%</div>
                    <div class="green"></div>

                  </div>
                  <div>227</div>
                </div>
              </div>
              <div class="area-list">
                <div class="person">1000人以下</div>
                <div class="person-bfb">
                  <div>50</div>
                  <div class="p-zhu">
                    <div class="number">10%</div>
                    <div class="green"></div>

                  </div>
                  <div>227</div>
                </div>
              </div>
            </div>

          </div>

        </div>
        <div class="topliner"></div>
        <div class="bian tl-jiao">
          <i class="xiejiao"></i>
        </div>
        <div class="bian tr-jiao">
          <i class="xiejiao"></i>
        </div>
        <div class="bian bl-jiao">
          <i class="xiejiao"></i>
        </div>
        <div class="bian br-jiao">
          <i class="xiejiao"></i>
        </div>
      </div>
      <!-- 度假区 -->
      <div class="column">
        <div class="column-main">
          <h2 class="title">度假区区域数据</h2>
          <div class="echart">
            <chart class="zsy" :options="dujia"></chart>
          </div>
        </div>
        <div class="topliner"></div>
        <div class="bian tl-jiao">
          <i class="xiejiao"></i>
        </div>
        <div class="bian tr-jiao">
          <i class="xiejiao"></i>
        </div>
        <div class="bian bl-jiao">
          <i class="xiejiao"></i>
        </div>
        <div class="bian br-jiao">
          <i class="xiejiao"></i>
        </div>
      </div>
      <!-- 活动类别 -->
      <div class="column">
        <div class="column-main">
          <h2 class="title">活动类别</h2>
          <div class="echart">
            <chart class="zsy" :options="huodong"></chart>
          </div>
        </div>
        <div class="topliner"></div>
        <div class="bian tl-jiao">
          <i class="xiejiao"></i>
        </div>
        <div class="bian tr-jiao">
          <i class="xiejiao"></i>
        </div>
        <div class="bian bl-jiao">
          <i class="xiejiao"></i>
        </div>
        <div class="bian br-jiao">
          <i class="xiejiao"></i>
        </div>
      </div>
      <!-- 企业名称 -->
      <div class="column">
        <div class="column-main prise-name">
          <div class="title2">
            <ul>
              <li class="fl1"></li>
              <li class="fl2">企业名称</li>
              <li class="fl3">活动数量</li>
              <li class="fl4">信用等级</li>
            </ul>
          </div>
          <div class="prise-main">
            <div class="prise-list" v-for="(v,i) in 5">
              <div class="fl1">1</div>
              <div class="fl2">浦东新区上岛咖啡就拉水电</div>
              <div class="fl3">21</div>
              <div class="fl4">A</div>
            </div>
          </div>

        </div>
        <div class="topliner"></div>
        <div class="bian tl-jiao">
          <i class="xiejiao"></i>
        </div>
        <div class="bian tr-jiao">
          <i class="xiejiao"></i>
        </div>
        <div class="bian bl-jiao">
          <i class="xiejiao"></i>
        </div>
        <div class="bian br-jiao">
          <i class="xiejiao"></i>
        </div>
      </div>
    </div>
    <!-- 中间 -->
    <div class="m-c">
      <div class="mapmain">
        <div class="column-map">
          <div class="map-top-bg"></div>
          <div class="map-right-bg"></div>
          <div class="map-bottom-bg"></div>
          <div class="map-left-bg"></div>

          <!-- 地图弹窗 -->
          <div class="map-pop">
            <div class="tab">
              <ul>
                <li class="act">活动详情</li>
                <li class="">活动监控</li>
              </ul>
            </div>
            <div class="tab-main">
              <!-- 活动详情内容 -->
              <div class="detail">
                <div class="more"></div>
                <h3 class="title">《MWC世界移动通信大会亚洲展》</h3>
                <div class="d-text">
                  <span class="f0ab">时间：</span>
                  <span class="fff">2019-07-01 10:00 一 2019-08-12 11:16</span>
                </div>
                <div class="d-text">
                  <span class="f0ab">地址：</span>
                  <span class="fff">浦东</span>
                </div>
                <div class="d-text">
                  <span class="f0ab">主办单位：</span>
                  <span class="fff">浦东</span>
                </div>
                <div class="d-text">
                  <span class="f0ab">负责人：</span>
                  <span class="fff">浦东</span>
                  <span class="f0ab ml20">电话：</span>
                  <span class="fff">浦东</span>
                </div>
                <div class="d-text"><span class="f0ab">委办局审批状态：</span></div>
                <div class="username">
                  <div class="u-list" v-for="v in 10">
                    <ul>
                      <li>消防</li>
                      <li>消防</li>
                      <li>13761401502</li>
                      <!--已接受和受理中 yjs | 未接受 wjs | 已完成 ywc -->
                      <li class="yjs">已接收</li>
                    </ul>
                  </div>

                </div>
                <div class="d-text">
                  <span class="f0ab">活动简介：</span>
                  <span class="fff">浦东</span>
                </div>
              </div>
              <!-- 活动监控内容 -->
              <div class="monitor" v-if="false">
                <div class="title">
                  <ul>
                    <li>设备名称</li>
                    <li>编号</li>
                  </ul>
                </div>
                <div class="zf-main">
                  <!-- 点击act 打钩 -->
                  <div class="sb-list act clearfix">
                    <div class="c-1"><span class="gou"></span></div>
                    <div class="c-2">
                      <!-- 显示不同icon -->
                      <span class="zfy-cion"></span>
                      <!-- <span class="bkq-icon"></span>
                      <span class="gdjk-icon"></span>
                      <span class="gdjk2-icon"></span> -->
                    </div>
                    <div class="c-3">执法仪</div>
                    <div class="c-4">019258865</div>
                  </div>
                  <div class="sb-list clearfix">
                    <div class="c-1"><span class="gou"></span></div>
                    <div class="c-2"><span class="bkq-icon"></span></div>
                    <div class="c-3">执法仪</div>
                    <div class="c-4">019258865</div>
                  </div>
                </div>
                <div class="sphj">视频呼叫</div>
              </div>
            </div>

          </div>

        </div>

      </div>
      <div class="column column-center">
        <div class="column-main prise-name">
          <div class="title2">
            <ul>
              <li class="fl1"></li>
              <li class="fl2">活动名称</li>
              <li class="fl3">人数</li>
              <li class="fl4">状态</li>
            </ul>
          </div>
          <div class="prise-main">
            <div class="prise-list" v-for="(v,i) in 5">
              <div class="fl1">1</div>
              <div class="fl2">浦东新区上岛咖啡就拉水电</div>
              <div class="fl3">21人</div>
              <div class="fl4 act">进行中</div>
            </div>

          </div>

        </div>
        <div class="topliner"></div>
        <div class="bian tl-jiao">
          <i class="xiejiao"></i>
        </div>
        <div class="bian tr-jiao">
          <i class="xiejiao"></i>
        </div>
        <div class="bian bl-jiao">
          <i class="xiejiao"></i>
        </div>
        <div class="bian br-jiao">
          <i class="xiejiao"></i>
        </div>
      </div>
    </div>
    <!-- 右边 -->
    <div class="m-r">
      <!-- 动态监管 -->
      <div class="column column-176">
        <div class="column-main">
          <h2 class="title">动态监管</h2>
          <div class="dongtai clear">
            <div class="dt-fl">
              <ul>
                <li>
                  <p><span class="t1">307</span><span class="t2">次</span></p>
                  <div class="t03">协同监管</div>
                </li>
                <li>
                  <p><span class="t1">307</span><span class="t2">次</span></p>
                  <div class="t03">12345投诉</div>
                </li>
                <li>
                  <p><span class="t1">307</span><span class="t2">次</span></p>
                  <div class="t03">110报警</div>
                </li>
              </ul>
            </div>
            <div class="dt-fr">
              <ul>
                <li><span class="t1">人脸识别</span><span class="t2">1036</span></li>
                <li><span class="t1">车牌识别</span><span class="t2">1036</span></li>
                <li><span class="t1">烟感警报</span><span class="t2">1036</span></li>
              </ul>
            </div>

          </div>
        </div>
        <div class="topliner"></div>
        <div class="bian tl-jiao">
          <i class="xiejiao"></i>
        </div>
        <div class="bian tr-jiao">
          <i class="xiejiao"></i>
        </div>
        <div class="bian bl-jiao">
          <i class="xiejiao"></i>
        </div>
        <div class="bian br-jiao">
          <i class="xiejiao"></i>
        </div>
      </div>
      <!-- 风险监管 -->
      <div class="column">
        <div class="column-main">
          <h2 class="title">风险监管</h2>
          <div class="fxjg">
            <div class="risk high">
              <p class="t1">45</p>
              <p class="t2">高</p>
            </div>
            <div class="risk middle">
              <p class="t1">45</p>
              <p class="t2">中</p>
            </div>
            <div class="risk low">
              <p class="t1">9</p>
              <p class="t2">低</p>
            </div>

          </div>
        </div>
        <div class="topliner"></div>
        <div class="bian tl-jiao">
          <i class="xiejiao"></i>
        </div>
        <div class="bian tr-jiao">
          <i class="xiejiao"></i>
        </div>
        <div class="bian bl-jiao">
          <i class="xiejiao"></i>
        </div>
        <div class="bian br-jiao">
          <i class="xiejiao"></i>
        </div>
      </div>
      <!-- 信用监管 -->
      <div class="column">
        <div class="column-main">
          <h2 class="title">信用监管</h2>
          <div class="echart">
            <chart class="zsy" :options="credit"></chart>
          </div>
        </div>
        <div class="topliner"></div>
        <div class="bian tl-jiao">
          <i class="xiejiao"></i>
        </div>
        <div class="bian tr-jiao">
          <i class="xiejiao"></i>
        </div>
        <div class="bian bl-jiao">
          <i class="xiejiao"></i>
        </div>
        <div class="bian br-jiao">
          <i class="xiejiao"></i>
        </div>
      </div>
      <!-- 分类监管 -->
      <div class="column column-176">
        <div class="column-main">
          <h2 class="title">分类监管</h2>
          <div class="fljg">

            <div class="area-list">
              <div class="person-bfb">
                <div class="ft1">高</div>
                <div class="p-zhu">
                  <div class="green"></div>
                </div>
                <div>23%</div>
              </div>
            </div>

            <div class="area-list">
              <div class="person-bfb">
                <div class="ft1">中</div>
                <div class="p-zhu">
                  <div class="green"></div>
                </div>
                <div>13%</div>
              </div>
            </div>
            <div class="area-list">
              <div class="person-bfb">
                <div class="ft1">低</div>
                <div class="p-zhu">
                  <div class="green"></div>
                </div>
                <div>64%</div>
              </div>
            </div>

          </div>
        </div>
        <div class="topliner"></div>
        <div class="bian tl-jiao">
          <i class="xiejiao"></i>
        </div>
        <div class="bian tr-jiao">
          <i class="xiejiao"></i>
        </div>
        <div class="bian bl-jiao">
          <i class="xiejiao"></i>
        </div>
        <div class="bian br-jiao">
          <i class="xiejiao"></i>
        </div>
      </div>

      <!-- 平台 -->
      <div class="column column-71">
        <div class="column-main pingtai">
          <div class="jb"></div>
          <div class="ptname">度假区大型活动申请平台>></div>
          <div class="ptname">度假区大型活动审批平台>></div>

        </div>
        <div class="topliner"></div>
        <div class="bian tl-jiao">
          <i class="xiejiao"></i>
        </div>
        <div class="bian tr-jiao">
          <i class="xiejiao"></i>
        </div>
        <div class="bian bl-jiao">
          <i class="xiejiao"></i>
        </div>
        <div class="bian br-jiao">
          <i class="xiejiao"></i>
        </div>
      </div>

    </div>
  </div>

  <!-- 弹窗 六个双审批状态 -->
  <div class="approval-pop-bg">
    <div class="approval-pop-main">
      <div class="close"></div>
      <div class="title">六个双审批状态</div>
      <div class="line"></div>
      <div class="tap-title clear">
        <ul>
          <li class="act">双告知 <span class="jiantou"></span></li>
          <li>双反馈 <span class="jiantou"></span></li>
          <li>双跟踪 <span class="jiantou"></span></li>
          <li>双评估 <span class="jiantou"></span></li>
          <li>双随机 <span class="jiantou"></span></li>
          <li>双公示 <span class="jiantou"></span></li>
        </ul>
      </div>
      <div class="tap-main">

        <table width="100%" border="0" cellspacing="0" cellpadding="0" class="six-table">
          <colgroup class="w-1"></colgroup>
          <colgroup class="w-2"></colgroup>
          <colgroup class="w-2"></colgroup>
          <colgroup class="w-4"></colgroup>
          <colgroup class="w-4"></colgroup>
          <colgroup class="w-5"></colgroup>
          <thead class="title-th">
            <tr>
              <th></th>
              <th>部门</th>
              <th>操作人</th>
              <th>接受时间</th>
              <th>处理时间</th>
              <th>状态</th>
            </tr>
          </thead>
          <tbody class="tbody">
            <tr>
              <td class="tc">1</td>
              <td>阿萨德弗兰克</td>
              <td>阿萨德</td>
              <td>2019-05-31 14：26</td>
              <td>2019-05-31 14：26</td>
              <td class="success">受理成功</td>
            </tr>
             <tr>
              <td class="tc">1</td>
              <td>阿萨德弗兰克</td>
              <td>阿萨德</td>
              <td>2019-05-31 14：26</td>
              <td>2019-05-31 14：26</td>
              <td class="error">未受理</td>
            </tr>
             <tr>
              <td class="tc">1</td>
              <td>阿萨德弗兰克</td>
              <td>阿萨德</td>
              <td>2019-05-31 14：26</td>
              <td>2019-05-31 14：26</td>
              <td class="error">未受理</td>
            </tr>
          </tbody>

        </table>

      </div>
    </div>

  </div>
  <!-- 风险监管弹窗 -->
  <div class="risk-pop-bg" v-show="false">
    <div class="risk-pop-main">
      <div class="risk-fl">
        <div class="r-title">
          <div class="r-name">活动名称</div>
          <div class="r-fen">评分</div>
        </div>
        <div class="activity-content">
          <div class="activity-list" v-for="v in 4">
            <div class="name">撒打发斯蒂芬撒打发斯蒂芬撒打发斯蒂芬撒打发斯蒂芬1231233213sdf </div>
            <div class="fen">12</div>
          </div>
          <div class="activity-list act">
            <div class="name">撒打发斯蒂芬撒打发斯蒂芬撒打发斯蒂芬撒打发斯蒂芬1231233213sdf </div>
            <div class="fen">12</div>
          </div>
        </div>
      </div>
      <div class="risk-fr">
         <div class="r-title">
          <div class="r-name textc">活动名称</div>
        </div>
      </div>
      
    </div>
  </div>

</div>
</template>

<script>
export default {
  data() {
    return {
      dujia: {
        color: ['#00a2ff'],
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'line' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          left: '3%',
          right: '3%',
          bottom: '6%',
          top: '10%',
          containLabel: true
        },
        xAxis: [{
          type: 'category',
          data: ['迪斯尼', '购物村', '星愿湖', '生态园', '迪斯尼'],
          axisTick: {
            alignWithLabel: true
          },
          axisLine: {
            lineStyle: {
              color: '#00a2ff',
              width: 1, //这里是为了突出显示加上的
            }
          }
        }],
        yAxis: [{
          type: 'value',
          axisLine: {
            lineStyle: {
              color: '#00a2ff',
              width: 1, //这里是为了突出显示加上的
            }
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: ['#0c448a'],
              width: 1,
              type: 'solid'
            }
          }

        }],
        series: [{
          name: '度假区',
          type: 'bar',
          barWidth: '50%',
          data: [10, 52, 200, 60, 90]
        }]
      },
      huodong: {
        title: {
          x: 'center'
        },
        color: ['#00a2ff', '#1ab545', '#a136e5', '#e23ca9', '#f19917'],
        tooltip: {
          trigger: 'item',
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          orient: 'vertical',
          textStyle: {
            color: '#0abfe6'
          },
          right: '20',
          top: '10',
          data: ['体育赛事', '节庆旅游', '展览展会', '文艺演出', '影视娱乐']
        },
        series: [{
          name: '活动类别',
          type: 'pie',
          radius: '90%',
          center: ['35%', '50%'],
          data: [{
              value: 335,
              name: '体育赛事'
            },
            {
              value: 310,
              name: '节庆旅游'
            },
            {
              value: 234,
              name: '展览展会'
            },
            {
              value: 135,
              name: '文艺演出'
            },
            {
              value: 1548,
              name: '影视娱乐'
            }
          ],
          label: {
            normal: {
              position: 'inside',
              color: '#fff',
              formatter: '{d}%',
              fontSize: '14'
            }
          },
          itemStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }]
      },
      // 信用
      credit: {
        color: ['#33e1bf', '#ff9600', '#109ff6'],
        series: [{
          name: '信用监管',
          type: 'pie',
          radius: ['35%', '55%'],
          label: {
            normal: {
              formatter: '{b|{b}}\n{c|{c}}\n{per|{d}%}',
              rich: {
                b: {
                  fontSize: 14,
                  lineHeight: 16,
                  color: '#0abfe6'
                },
                c: {
                  fontSize: 16,
                  lineHeight: 18,
                  color: '#ffbc41'
                },
                per: {
                  color: '#0abfe6',
                  backgroundColor: '#07437f',
                  padding: [2, 2, 4, 4]
                }
              }
            }
          },
          labelLine: {
            length: 10,
            length2: 30
          },
          data: [{
              value: 60,
              name: '信用B'
            },
            {
              value: 30,
              name: '信用A'
            },
            {
              value: 10,
              name: '信用C'
            }
          ]
        }]
      }
    }
  },
  methods: {
    show() {
      alert(123)
    }
  }
};
</script>

<style lang="less">
.layout {
  background-color: #00134f;

  .header {
    font-size: 0;
    margin-bottom: 29px;
    position: relative;

    .weather {
      position: absolute;
      right: 32px;
      top: 40px;

      .date {
        font-size: 20px;
        font-weight: 700;
        display: inline-block;
        margin-left: 20px;
        color: #24ccff;
        background-image: -webkit-gradient(linear, 0 0, 0 bottom, from(#b0f9ff), to(#24ccff));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }
  }

  .approval-pop-bg {
    position: fixed;
    left: 0;
    top: 0;
    z-index: 100;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);

    .approval-pop-main {
      position: absolute;
      width: 959px;
      height: 578px;
      left: 0;
      top: 0;
      bottom: 0;
      right: 0;
      margin: auto;
      background-color: #1b4ca5;
      border-radius: 10px;
      border: 1px solid #13def4;

      .close {
        cursor: pointer;
        position: absolute;
        right: -20px;
        top: -20px;
        width: 40px;
        height: 40px;
        background: url('~@/assets/images/close.png') 0 0 no-repeat;
        background-size: 100%;
      }

      .title {
        margin-top: 35px;
        height: 46px;
        font-weight: 700;
        text-align: center;
        font-size: 30px;
        height: 50px;
        color: #ffb233;
        background-image: -webkit-gradient(linear, 0 0, 0 bottom, from(#ffd76b), to(#f7a21b));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }

      .line {
        width: 320px;
        height: 1px;
        margin: 0 auto;
        background: linear-gradient(90deg, transparent, #13def4, transparent);
        margin-bottom: 38px;
      }

      .tap-title {
        padding-left: 55px;
        margin-bottom: 24px;

        li {
          width: 80px;
          height: 80px;
          line-height: 80px;
          text-align: center;
          border-radius: 50%;
          background-color: #3eafef;
          font-size: 20px;
          color: #fff;
          float: left;
          margin-right: 68px;
          position: relative;
          top: 17px;
        }

        li:last-child {
          margin-right: 0;
        }

        .act {
          top: 0;
          width: 94px;
          height: 94px;
          line-height: 94px;
          background-color: #ed9e14;
          border: 10px solid #0d2f7a;
          box-sizing: content-box;
          .jiantou {
          position: absolute;
          bottom: -35px;
          left: 33px;
          z-index: 99;
          width: 23px;
          height: 15px;
          background: url('~@/assets/images/tjiantou.png') 0 0 no-repeat;
          background-size: 100%;
        }
        }
      }

      .tap-main {
        width: 828px;
        max-height: 280px;
        margin: 0 auto;
        background-color: #0a2c72;
        border: 1px solid #00a2ff;
        border-radius: 10px;
        position: relative;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.7);
        overflow: auto;

        .six-table{
          font-size: 14px;
          .title-th{
            th{
              font-size: 16px;
              color: #00ccff;
              text-align: left;
            }
          }
          tr{
            height: 40px;
          }
          .tbody tr:nth-child(2n-1){
            background-color: #093880;
          }
          td{
            color: #fff;
          }
          .tc{
            text-align: center;
          }
          .success{
            color: #61af21;
          }
          .error{
            color: #ed6b14;
          }
          .w-1{
            width: 60px;
          }
          .w-2{
            width: 130px;
          }
          .w-4{
            width: 190px;
          }
           .w-5{
            width: 110px;
          }
        }
      }
    }
  }
  
    .risk-pop-bg {
    position: fixed;
    left: 0;
    top: 0;
    z-index: 100;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);

    .risk-pop-main {
      position: absolute;
      width: 900px;
      height: 260px;
      overflow: hidden;
      left: 0;
      top: 0;
      bottom: 0;
      right: 0;
      margin: auto;
      background-color: #062465;
      border-radius: 10px;
      border: 1px solid #0263be;

      .risk-fl{
        width: 463px;
        border-right: 1px solid #0263be;
        float: left;
        .activity-content{
          border-bottom:  1px solid #0263be;
          height: 181px;
          .activity-list{
            height: 36px;
            .name{
              width: 390px;
              padding-right: 20px;
              float: left;
              height: 36px;
              line-height: 36px;
              padding-left: 15px;
              font-size: 14px;
               color: #0abfe6;
               white-space: nowrap;
               overflow: hidden;
               text-overflow: ellipsis;
            }
            .fen{
               float: left;
            width: 60px;
          height: 36px;
          line-height: 36px;
          font-size: 16px;
          color: #ffbc41;
          font-size: 14px;
          text-align: center;

            }
          }
          .activity-list:nth-child(2n){
            background-color: #0c3078;
          }
          .act{
            background-color: #00a2ff!important;
            .name{
              color: #fff;
            }
          }
        }
     
      }
      .risk-fr{
        width: 435px;
        float:right;
      }
         .r-title{
          height: 40px;
          background-color: #1a4ba3;
          .r-name{
            width: 390px;
            padding-left: 15px;
          height: 40px;
          line-height: 40px;
          font-size: 16px;
          color: #0abfe6;
          float: left;

          }
          .r-fen{
            float: left;
            width: 60px;
          height: 40px;
          line-height: 40px;
          font-size: 16px;
          color: #0abfe6;
          text-align: center;

            
          }
          .textc{
            width: 435px;
            text-align: center;
          }
          

        }
    }
    }

}

.main {
  padding: 0 17px 22px;

  /* 左边模块 */
  .m-l {
    width: 446px;
    float: left;

  }

  /* 中间模块 */
  .m-c {
    width: 940px;
    margin: 0 27px;
    float: left;

    .map-pop {
      width: 370px;
      height: 400px;
      background-color: rgba(6, 37, 87, 0.8);
      border: 1px solid #00a2ff;
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
      position: absolute;
      right: 22px;
      bottom: 22px;
      border-radius: 5px;
      overflow: hidden;

      .tab {
        height: 44px;
        border-bottom: 1px solid #00a2ff;

        li {
          float: left;
          width: 50%;
          height: 44px;
          line-height: 44px;
          font-size: 16px;
          text-align: center;
          color: #028ae2;
          cursor: pointer;
        }

        .act {
          height: 43px;
          background-color: #0289e1;
          color: #fff;
        }

      }

      .tab-main {
        .detail {
          margin: 20px;
          font-size: 14px;
          max-height: 316px;
          overflow: auto;

          .more {
            width: 14px;
            height: 8px;
            background: url('~@/assets/images/more.png') 0 0 no-repeat;
            background-size: 100%;
            position: absolute;
            bottom: 5px;
            left: 50%;
            margin-left: -7px;
          }

          .title {
            font-size: 18px;
            color: #fff;
            text-align: center;
            height: 28px;
            line-height: 28px;
            margin-bottom: 10px;
          }

          .d-text {
            line-height: 24px;

            .f0ab {
              color: #0abfe6;
            }

            .ml20 {
              margin-left: 30px;
            }

            .fff {
              color: #fff;
            }
          }

          .username {
            .u-list {
              li {
                float: left;
                width: 60px;
                color: #fff;
              }

              li:nth-child(2) {
                width: 80px;
              }

              li:nth-child(3) {
                width: 125px;
              }

              .yjs {
                color: #ffbc41;
              }

              .wjs {
                color: #e85825;
              }

              .ywc {
                color: #61af21;
              }
            }
          }
        }

        .monitor {
          .title {
            height: 36px;
            margin-top: 10px;

            li {
              height: 36px;
              line-height: 36px;
              padding-left: 113px;
              float: left;
              width: 250px;
              font-size: 16px;
              color: #fff;
            }

            li:last-child {
              padding-left: 0;
              width: 100px;
            }
          }

          .zf-main {
            max-height: 230px;
            overflow: auto;
            margin-bottom: 20px;

            .sb-list {
              height: 50px;

              .c-1 {
                width: 46px;
                height: 50px;
                float: left;

                .gou {
                  display: block;
                  width: 20px;
                  height: 20px;
                  background: url('~@/assets/images/person_1.png') 0 0 no-repeat;
                  background-size: 100%;
                  position: relative;
                  left: 26px;
                  top: 15px;
                }
              }

              .c-2 {
                width: 68px;
                height: 50px;
                float: left;

                span {
                  display: block;
                  width: 35px;
                  height: 35px;
                  position: relative;
                  left: 20px;
                  top: 8px;
                }

                .zfy-cion {
                  background: url('~@/assets/images/person_3.png') 0 0 no-repeat;
                  background-size: 100%;
                }

                .bkq-icon {
                  background: url('~@/assets/images/person_4.png') 0 0 no-repeat;
                  background-size: 100%;
                }

                .gdjk-icon {
                  background: url('~@/assets/images/person_5.png') 0 0 no-repeat;
                  background-size: 100%;
                }

                .gdjk2-icon {
                  background: url('~@/assets/images/person_6.png') 0 0 no-repeat;
                  background-size: 100%;
                }
              }

              .c-3 {
                width: 135px;
                height: 50px;
                line-height: 50px;

                float: left;
                font-size: 14px;
                color: #0abfe6;
              }

              .c-4 {
                width: 119px;
                height: 50px;
                line-height: 50px;
                float: left;
                font-size: 14px;
                color: #0abfe6;
              }

            }

            .sb-list:nth-child(2n) {
              background-color: rgba(12, 52, 125, 0.6)
            }

            .act {
              .c-1 {
                .gou {
                  background: url('~@/assets/images/person_2.png') 0 0 no-repeat;
                  background-size: 100%;
                }
              }
            }
          }

          .sphj {
            background-color: #e85825;
            width: 120px;
            height: 38px;
            line-height: 38px;
            color: #fff;
            font-size: 16px;
            text-align: center;
            margin: 0 auto;
            border-radius: 5px;
          }
        }
      }

    }
  }

  /* 右边模块 */
  .m-r {
    width: 446px;
    float: left;
  }
}

// 地图容器需添加切角样式
.mapmain {
  margin-bottom: 20px;

  .column-map {
    width: 940px;
    height: 700px;
    background: #1f378b;
    background: linear-gradient(135deg, transparent 14px, #1f378b 0) top left,
      linear-gradient(-135deg, transparent 14px, #1f378b 0) top right,
      linear-gradient(-45deg, transparent 14px, #1f378b 0) bottom right,
      linear-gradient(45deg, transparent 14px, #1f378b 0) bottom left;
    background-size: 50% 50%;
    background-repeat: no-repeat;
    position: relative;
    font-size: 0;
    overflow: hidden;

    .map-top-bg {
      pointer-events: none;
      position: absolute;
      left: 0;
      top: 0;
      z-index: 10;
      width: 940px;
      height: 18px;
      background: url('~@/assets/images/map_bg_01.png') 0 0 no-repeat;
      background-size: 100%;
    }

    .map-right-bg {
      pointer-events: none;
      position: absolute;
      right: 0;
      top: 18px;
      z-index: 10;
      width: 7px;
      height: 661px;
      background: url('~@/assets/images/map_bg_02.png') 0 0 no-repeat;
      background-size: 100%;
    }

    .map-bottom-bg {
      pointer-events: none;
      position: absolute;
      left: 0;
      bottom: 0;
      z-index: 10;
      width: 940px;
      height: 21px;
      background: url('~@/assets/images/map_bg_03.png') 0 0 no-repeat;
      background-size: 100%;
    }

    .map-left-bg {
      pointer-events: none;
      position: absolute;
      left: 0;
      top: 18px;
      z-index: 10;
      width: 7px;
      height: 661px;
      background: url('~@/assets/images/map_bg_04.png') 0 0 no-repeat;
      background-size: 100%;
    }
  }
}

// 企业名称
.prise-name {
  .fl1 {
    width: 40px;
    text-align: center;
  }

  .fl2 {
    width: 218px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .fl3 {
    width: 90px;
    text-align: center;
  }

  .fl4 {
    width: 90px;
    text-align: center;
  }

  .title2 {
    background-color: #1a4ba4;
    font-size: 16px;
    height: 37px;
    border-bottom: 1px solid #0263be;
    background: linear-gradient(135deg, transparent 8px, #1a4ba4 0) top left,
      linear-gradient(-135deg, transparent 8px, #1a4ba4 0) top right;
    background-size: 50% 100%;
    background-repeat: no-repeat;

    li {
      height: 37px;
      line-height: 37px;
      float: left;
      color: #0abfe6;
    }
  }

  .prise-main {
    background-color: #062466;
    font-size: 16px;
    height: 180px;
    background: linear-gradient(-45deg, transparent 8px, #062466 0) bottom right,
      linear-gradient(45deg, transparent 8px, #062466 0) bottom left;
    background-size: 50% 100%;
    background-repeat: no-repeat;

    .prise-list {
      height: 36px;
      line-height: 36px;

      >div {
        float: left;
        color: #0abfe6;

      }

      .fl4 {
        color: #ffbc41;
      }
    }

    .prise-list:nth-child(2n) {
      background-color: #0c3078;
    }

  }

}

/* 切角矩形 */
.column {
  width: 440px;
  height: 220px;
  margin: 0 auto 20px;
  background-color: #0263be;
  background: linear-gradient(135deg, transparent 8px, #0263be 0) top left,
    linear-gradient(-135deg, transparent 8px, #0263be 0) top right,
    linear-gradient(-45deg, transparent 8px, #0263be 0) bottom right,
    linear-gradient(45deg, transparent 8px, #0263be 0) bottom left;
  background-size: 50% 50%;
  background-repeat: no-repeat;
  position: relative;
  font-size: 0;

  .column-main {
    width: 438px;
    height: 218px;
    background-color: #0c357e;
    background: linear-gradient(135deg, transparent 8px, #0c357e 0) top left,
      linear-gradient(-135deg, transparent 8px, #0c357e 0) top right,
      linear-gradient(-45deg, transparent 8px, #0c357e 0) bottom right,
      linear-gradient(45deg, transparent 8px, #0c357e 0) bottom left;
    background-size: 50% 50%;
    background-repeat: no-repeat;
    position: absolute;
    left: 1px;
    top: 1px;

    .title {
      font-size: 18px;
      font-weight: 700;
      color: #ffb233;
      margin-top: 16px;
      height: 24px;
      padding-left: 17px;
      background-image: -webkit-gradient(linear, 0 0, 0 bottom, from(#ffd76b), to(#ffb233));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .echart {
      height: 178px;
      font-size: 14px;
    }

    .zsy {
      width: 100%;
      height: 100%;
    }

  }

  .topliner {
    height: 1px;
    width: 438px;
    position: absolute;
    left: 0;
    top: 0;
    background: linear-gradient(90deg, transparent, #13def4, transparent)
  }

  .bian {
    position: absolute;
  }

  .br-jiao {
    right: 0;
    bottom: 0;
  }

  .br-jiao:before {
    position: absolute;
    right: 10px;
    bottom: -3px;
    content: "";
    display: block;
    height: 1px;
    width: 30px;
    background-color: #13e2f6;
  }

  .br-jiao:after {
    position: absolute;
    right: -3px;
    bottom: 10px;
    content: "";
    display: block;
    height: 30px;
    width: 1px;
    background-color: #13e2f6;
  }

  .br-jiao .xiejiao {
    display: block;
    width: 1px;
    height: 18px;
    background-color: #13e2f6;
    position: absolute;
    left: -4px;
    bottom: -5px;
    transform: rotate(45deg);
  }

  .tr-jiao {
    right: 0;
    top: 0;
  }

  .tr-jiao:before {
    position: absolute;
    right: 10px;
    top: -3px;
    content: "";
    display: block;
    height: 1px;
    width: 30px;
    background-color: #13e2f6;
  }

  .tr-jiao:after {
    position: absolute;
    right: -3px;
    top: 10px;
    content: "";
    display: block;
    height: 30px;
    width: 1px;
    background-color: #13e2f6;
  }

  .tr-jiao .xiejiao {
    display: block;
    width: 1px;
    height: 18px;
    background-color: #13e2f6;
    position: absolute;
    left: -4px;
    top: -5px;
    transform: rotate(135deg);
  }

  .bl-jiao {
    left: 0;
    bottom: 0;
  }

  .bl-jiao:before {
    position: absolute;
    left: 10px;
    bottom: -3px;
    content: "";
    display: block;
    height: 1px;
    width: 30px;
    background-color: #13e2f6;
  }

  .bl-jiao:after {
    position: absolute;
    left: -3px;
    bottom: 10px;
    content: "";
    display: block;
    height: 30px;
    width: 1px;
    background-color: #13e2f6;
  }

  .bl-jiao .xiejiao {
    display: block;
    width: 1px;
    height: 18px;
    background-color: #13e2f6;
    position: absolute;
    left: 3px;
    bottom: -5px;
    transform: rotate(-45deg);
  }

  .tl-jiao {
    left: 0;
    top: 0;
  }

  .tl-jiao:before {
    position: absolute;
    left: 10px;
    top: -3px;
    content: "";
    display: block;
    height: 1px;
    width: 30px;
    background-color: #13e2f6;
  }

  .tl-jiao:after {
    position: absolute;
    left: -3px;
    top: 10px;
    content: "";
    display: block;
    height: 30px;
    width: 1px;
    background-color: #13e2f6;
  }

  .tl-jiao .xiejiao {
    display: block;
    width: 1px;
    height: 18px;
    background-color: #13e2f6;
    position: absolute;
    left: 3px;
    top: -5px;
    transform: rotate(-135deg);
  }
}

.column-center {
  width: 934px;

  .column-main {
    width: 932px;

    .fl1 {
      width: 40px;
      text-align: center;
    }

    .fl2 {
      width: 612px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .fl3 {
      width: 140px;
      text-align: left;
    }

    .fl4 {
      width: 140px;
      text-align: left;
    }

    .act {
      color: #ffbc41;
    }
  }
}

.column-176 {
  height: 174px;

  .column-main {
    height: 172px;
  }
}

.column-71 {
  height: 72px;

  .column-main {
    height: 70px;
  }
}

// 动态监管

.dongtai {
  font-size: 14px;
  margin-top: 10px;

  .dt-fl {
    width: 302px;
    float: left;

    li {
      width: 100px;
      text-align: center;
      float: left;
      position: relative;

      p {
        height: 62px;
        line-height: 62px;
      }

      &::after {
        content: "";
        display: block;
        width: 1px;
        height: 100px;
        position: absolute;
        right: 0;
        top: 0;
        background: linear-gradient(0, transparent, #13def4, transparent)
      }

      .t1 {
        font-size: 30px;
        color: #ffbc41;
        font-weight: 700;
      }

      .t2 {
        font-size: 14px;
        color: #ffbc41;
      }

      .t03 {
        font-size: 14px;
        color: #0abfe6;
      }
    }
  }

  .dt-fr {
    width: 136px;
    padding-left: 10px;
    float: right;

    li {
      height: 24px;
      margin-bottom: 10px;

      .t1 {
        font-size: 14px;
        color: #0abfe6;
        padding-right: 10px;
      }

      .t2 {
        font-size: 20px;
        color: #ffbc41;
      }
    }
  }
}

// 风险监管
.fxjg {
  position: relative;
  height: 178px;

  .risk {
    position: absolute;
    text-align: center;

    .t1 {
      font-size: 20px;
      color: #fff;
    }

    .t2 {
      font-size: 16px;
      color: #fff;
    }

  }

  .high {
    padding-top: 30px;
    width: 114px;
    height: 114px;
    border-radius: 50%;
    background-color: #e85825;
    left: 162px;
  }

  .middle {
    padding-top: 17px;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background-color: #ff9600;
    left: 62px;
    top: 63px;
  }

  .low {
    padding-top: 8px;
    width: 64px;
    height: 64px;
    border-radius: 50%;
    background-color: #79b32d;
    left: 304px;
    top: 52px;
  }

}

// 分类监管

.fljg {
  position: relative;
  height: 178px;
  padding: 15px 0 0 25px;

  .area-list {
    font-size: 14px;
    margin-bottom: 20px;

    .person-bfb {
      height: 20px;

      >div {
        float: left;
        color: #0abfe6;
        width: 40px;
        height: 24px;
        line-height: 24px;
      }

      .ft1 {
        font-size: 18px;
      }

      .p-zhu {
        width: 300px;
        background-color: #264783;
        margin-right: 10px;
        position: relative;
        top: 7px;
        height: 11px;
        margin-right: 15px;

        .green {
          position: absolute;
          width: 10%;
          height: 11px;
          left: 0;
          top: 0;
          background-color: #e85825;
        }

      }

    }
  }

  .area-list:nth-child(2) {
    .person-bfb {
      .p-zhu {
        .green {
          background-color: #ff9600;
        }
      }
    }
  }

  .area-list:last-child {
    margin-bottom: 0;

    .person-bfb {
      .p-zhu {
        .green {
          background-color: #79b329;
        }
      }
    }
  }
}

// 平台
.pingtai {
  position: relative;

  .jb {
    width: 1px;
    height: 70px;
    position: absolute;
    left: 50%;
    background: linear-gradient(0, transparent, #13def4, transparent)
  }

  .ptname {
    float: left;
    padding-left: 10px;
    width: 50%;
    height: 70px;
    line-height: 70px;
    font-size: 15px;
    color: #24ccff;
    background-image: -webkit-gradient(linear, 0 0, 0 bottom, from(#b0f9ff), to(#24ccff));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

  }

}

/* 活动数量 */
.amount .jb-line {
  position: absolute;
  left: 162px;
  top: 0;
  width: 1px;
  height: 216px;
  background: url('~@/assets/images/line.png') 0 0 no-repeat;
}

.amount .w162 {
  width: 162px;
  float: left;
}

.amount .w162 .tuxing {
  padding-top: 20px;
  margin-bottom: 10px;
  position: relative;
}

.amount .w162 .circle-main {
  width: 105px;
  height: 105px;
  margin: 0 auto;
  border-radius: 50%;
  border: 4px solid #00a2ff;
  background-color: #264783;
  /* transform: translate(-50%, -50%); */
  padding: 4px;
  overflow: hidden;
  position: relative;
}

.amount .w162 .percentage {
  color: #fff;
  font-size: 18px;
  text-align: center;
  width: 105px;
  height: 30px;
  position: absolute;
  left: 0;
  top: 30px;
  z-index: 21;

}

.amount .w162 .wave {
  position: relative;
  left: 0;
  top: 0;
  width: 90px;
  height: 90px;
  background-color: #00a2ff;
  border-radius: 50%;
}

.amount .w162 .wave-mask {
  position: absolute;
  width: 150px;
  height: 150px;
  top: 0px;
  left: 50%;
  border-radius: 40%;
  background-color: #264783;
  transform: translate(-50%, -70%) rotate(0);
  animation: toRotate 10s linear -5s infinite;
  z-index: 20;
}

.amount .w162 .text {
  font-size: 16px;
  color: #0abfe6;
  text-align: center;
}

@keyframes toRotate {
  50% {
    transform: translate(-50%, -70%) rotate(180deg);
  }

  100% {
    tansform: translate(-50%, -70%) rotate(360deg)
  }
}

.amount .w276 {
  width: 276px;
  float: left;
}

.amount .w276 .bz-top {
  padding: 15px 0 0 40px;
  height: 50px;

}

.amount .w276 .bz-top .bz-list {
  float: left;
  margin-right: 23px;
  line-height: 24px;
}

.amount .w276 .bz-top .bz-list .b-sekuai {
  display: inline-block;
  width: 18px;
  height: 6px;
  background-color: #00a2ff;
  margin-right: 8px;
  position: relative;
  top: -3px;
}

.amount .w276 .bz-top .bz-list .pd-sekuai {
  background-color: #19af43;
}

.amount .w276 .bz-top .bz-list .text {
  color: #0abfe6;
  font-size: 14px;
}

.amount .w276 .bz-main {
  padding: 0 20px 0 14px;
}

.amount .w276 .bz-main .area-list {
  font-size: 14px;
  margin-bottom: 15px;
}

.amount .w276 .bz-main .area-list .person {
  color: #fff;
  height: 20px;
  line-height: 20px;
  text-align: center;
}

.amount .w276 .bz-main .area-list .person-bfb {
  height: 20px;
}

.amount .w276 .bz-main .area-list .person-bfb>div {
  float: left;
  color: #0abfe6;
  width: 31px;
  height: 20px;
}

.amount .w276 .bz-main .area-list .person-bfb .p-zhu {
  width: 170px;
  background-color: #00a2ff;
  margin-right: 10px;
  position: relative;

}

.amount .w276 .bz-main .area-list .person-bfb .p-zhu .green {
  position: absolute;
  width: 10%;
  height: 20px;
  right: 0;
  top: 0;
  background-color: #19af43;
}

.amount .w276 .bz-main .area-list .person-bfb .p-zhu .number {
  text-align: center;
  color: #000;
  font-weight: 700;
}
</style>
