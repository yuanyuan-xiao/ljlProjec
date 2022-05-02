<template>
  <!-- 菜单栏 -->
  <div class="left_menu">
    <!-- 左侧菜单栏 -->
    <header>
      <img style="width:239px" src="@/assets/images/logoImg.png" />
    </header>
    <el-menu
      router
      :unique-opened="false"
      @select="openChange"
      :default-active="$route.path"
      class="el-menu-vertical-demo test-1"
    >
      <template v-for="first in menuData">
        <el-submenu
          v-if="first.children && first.children.length > 0"
          :key="first.path"
          :index="first.path"
        >
          <template v-slot:title>
            <span
              ><img class="imgSpan" :src="first.img" />{{ first.name }}</span
            >
          </template>
          <template v-for="second in first.children">
            <el-submenu
              v-if="second.children && second.children.length > 0"
              :key="second.path"
              :index="second.path"
              popper-class="menu_popper"
            >
              <template v-slot:title
                >•<span>{{ second.name }}</span></template
              >
              <el-menu-item
                v-for="third in second.children"
                :key="third.path"
                :index="third.path"
              >
                •
                <span class="spanPoint" v-if="!third.sfdsf">{{
                  third.name
                }}</span>
                <span
                  v-else
                  class="spn spanPoint"
                  @click.stop="handleOpen(third)"
                  style="padding-left: 60px"
                  >{{ third.name }}</span
                >
              </el-menu-item>
            </el-submenu>
            <el-menu-item v-else :key="second.bm" :index="second.path">
              •
              <span class="spanPoint" v-if="!second.sfdsf">{{
                second.name
              }}</span>
              <span
                v-else
                class="spn spanPoint"
                @click.stop="handleOpen(second)"
                style="padding-left: 40px"
                >{{ second.name }}</span
              >
            </el-menu-item>
          </template>
        </el-submenu>
        <el-menu-item v-else :key="first.path" :index="first.path">
          <span v-if="!first.sfdsf">
            <img class="imgSpan" :src="first.img" />{{ first.name }}</span
          >
          <span
            v-else
            class="spn"
            @click.stop="handleOpen(first)"
            style="padding-left: 20px"
          >
            <img class="imgSpan" :src="first.img" />{{ first.name }}</span
          >
        </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>
<script>
// import { defineComponent } from 'vue'
export default {
  name: "Menu",
  components: {},
  emits: [],
  props: {},
  setup(prop, context) {
    return {};
  },
  computed: {},
  watch: {
    // 尽量少使用watch，避免前端代码无用的内存消耗
  },
  data() {
    return {
      menuData: [
        // {
        //   name: "工作台",
        //   path: "/gzt",
        //   // img: require('@/assets/images/menu/gzt-icon.png')
        // },
        {
          name: "系统管理",
          path: "1",
          // img: require('@/assets/images/menu/yhgl-icon.png'),
          children: [
            { name: "学院管理", path: "/xygl" },
            { name: "账号管理", path: "/zhgl" },
          ],
        },
        {
          name: "项目管理",
          path: "2",
          // img: require('@/assets/images/menu/rwtj-icon.png'),
          children: [{ name: "添加项目", path: "/tjxm" }],
        },
        {
          name: "赛程管理",
          path: "3",
          // img: require('@/assets/images/menu/jctj-icon.png'),
          children: [
            { name: "添加赛程", path: "/tjsc" },
            { name: "赛程提醒", path: "/sctx" },
          ],
        },
        {
          name: "成绩管理",
          path: "4",
          // img: require('@/assets/images/menu/gzgl-icon.png'),
          children: [
            { name: "查看排名", path: "/ckpm" },
            { name: "登记成绩", path: "/djcj" },
            // { name: "流程类规则配置", path: "/gzgl/lclgz" },
            // { name: '文书类规则配置', path: '/gzgl/wslgz' }
          ],
        },
        // {
        //   name: "消息管理",
        //   path: "5",
        //   // img: require('@/assets/images/menu/xxgl-icon.png'),
        //   children: [
        //     { name: "消息统计", path: "/xxgl/xxtj" },
        //     { name: "消息列表", path: "/xxgl/xxlb" },
        //   ],
        // },
        // {
        //   name: "系统管理",
        //   path: "6",
        //   // img: require('@/assets/images/menu/xtgl-icon.png'),
        //   children: [
        //     { name: "配置管理", path: "/xtgl/pzgl" },
        //     { name: "授权中心", path: "/xtgl/sqzx" },
        //   ],
        // },
        {
          name: "查看项目",
          path: "/ckxm",
          // img: require('@/assets/images/menu/zygl-icon.png')
        },
        {
          name: "查看赛程",
          path: "/cksc",
          // img: require('@/assets/images/menu/gzt-icon.png')
        },
        {
          name: "查看成绩",
          path: "/ckcj",
          // img: require('@/assets/images/menu/gzt-icon.png')
        },
      ],
    };
  },
  mounted() {
    //
  },
  methods: {
    openChange(val) {
      // console.log(val)
      // console.log(this.$route, 'this.$route')
    },
    // 菜单选择事件
    handleOpen(val) {
      console.log("123", val);
    },
  },
};
</script>
<style lang="scss" scoped>
::v-deep .el-menu {
  background-color: unset;
  border-right: unset;
  // overflow: auto;
  height: calc(100% - 70px);
}
::v-deep .el-menu-item {
  color: #70c1ff;
  font-size: 16px;
  // line-height: 48px;
  &:hover {
    background-color: #0e87dd;
    color: #ffffff;
  }
}
// ::v-deep .el-menu-item:focus {
//   background-color: #0E87DD;
//   color: #fff;
// }
::v-deep .el-menu-item.is-active {
  background-color: #0e87dd;
  color: #fff;
}
::v-deep .el-submenu__title {
  color: #70c1ff;
  font-size: 16px;
  i {
    color: #ffffff;
  }
  &:hover {
    background-color: #0e87dd;
    color: #ffffff;
  }
}
.test-1::-webkit-scrollbar {
  /*滚动条整体样式*/

  width: 10px; /*高宽分别对应横竖滚动条的尺寸*/

  height: 1px;
}

.test-1::-webkit-scrollbar-thumb {
  /*滚动条里面小方块*/

  border-radius: 10px;

  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);

  background: #535353;
}

.test-1::-webkit-scrollbar-track {
  /*滚动条里面轨道*/

  -webkit-box-shadow: inset 0 0 5px rgba(175, 236, 236, 0.2);

  border-radius: 10px;

  background: #ededed;
}
.left_menu {
  // overflow: hidden;
  height: 100%;
  width: 250px;
  background: #0d588c;
  .menu-top {
    display: flex;
    border-bottom: 3px solid #0070d8;
    img {
      margin: 30px 35px 41px 34px;
    }
  }
  .el-menu-vertical-demo {
    overflow: auto;
    .el-submenu__title {
      > img {
        margin-right: 10px;
      }
    }
    .el-menu-item {
      > .spn {
        color: #70c1ff;
        text-decoration: none;
        position: absolute;
        left: 0;
        right: 0;
        &:hover {
          color: #fff;
        }
      }
    }
  }
}
.imgSpan {
  margin-right: 10px;
}
.spanPoint {
  margin-left: 5px;
}
header {
  height: 70px;
  background: rgb(5, 75, 123);
  display: flex;
  padding-left: 6px;
  // justify-content: center;
  align-items: center;
}
</style>
