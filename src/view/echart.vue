<template>
<div class="ec">
  <chart class="zsy" :options="huodong"></chart>

  <div class="column">
    <div class="column-main">

    </div>

  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
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
          name: '访问来源',
          type: 'pie',
          radius: '70%',
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
              color: '#fff'
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
      }
    }
  }
}
</script>

<style lang="less" scoped>
.ec{
  background-color: #000;
}
.corner(@radius) {
  @ca: e("calc(100% - @{radius})");
  clip-path: polygon(@radius 0, @ca 0, 100% @radius, 100% @ca, @ca 100%, @radius 100%, 0 @ca, 0 @radius);
}

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
    // background: linear-gradient(135deg, transparent 8px, #0c357e 0) top left,
    //   linear-gradient(-135deg, transparent 8px, #0c357e 0) top right,
    //   linear-gradient(-45deg, transparent 8px, #0c357e 0) bottom right,
    //   linear-gradient(45deg, transparent 8px, #0c357e 0) bottom left;
    // background-size: 50% 50%;
    // background-repeat: no-repeat;
    .corner(11px);
    position: absolute;
    left: 1px;
    top: 1px;
  }
}
</style>
