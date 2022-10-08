<template>
  <div class="root">
    <span>{{ label }}</span>
    <!-- <el-upload v-model="mValue" v-bind="mOptions" :count="1" /> -->
    <!-- <el-upload v-model="mValue" v-bind="mOptions" :count="1"></el-upload> -->
    <el-upload
      class="avatar-uploader"
      action="https://jsonplaceholder.typicode.com/posts/"
      :show-file-list="false"
      :on-success="handleAvatarSuccess"
      :before-upload="beforeAvatarUpload"
    >
      <img v-if="imageUrl" :src="imageUrl" class="avatar" />
      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
    </el-upload>
  </div>
</template>

<script>
import schemaMixin from "@/mixin/schemaMixin";
import { nanoid } from "nanoid";

export default {
  name: "SchemaUpload",

  mixins: [schemaMixin],
  data() {
    return {
      imageUrl: "",
      uploadId: nanoid(),
    };
  },
  mounted() {
    this.$bus.$emit("toCarousel", this.uploadId);
  },
  methods: {
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
      this.$bus.$emit("imgUpload", [this.imageUrl, this.uploadId]);
      // console.log("触发了AvatarSuccess：", res, file);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 < 23;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      } else if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 23KB!");
      } else {
        this.$message.success("上传成功！");
      }
      console.log("触发了AvatarUpload：", file);
      return isJPG && isLt2M;
    },
    uploadFile(item) {
      let userId = sessionStorage.getItem("userId");
      let fileObj = item.file;
      const form = new FormData(); // FormData 对象
      form.append("file", fileObj); // 文件对象  'upload'是后台接收的参数名
      form.append("userId", userId);
      this.axios(uploadImge, form, "form")
        .then((data) => {
          if (data.code == "000000") {
            this.$message({
              message: "上传成功",
              type: "success",
            });
            this.urlImage = data.content;
          }
        })
        .catch((data) => {
          this.$message.error("上传失败，请稍后重试");
        });
    },
  },
};
</script>
<style scoped scss>
.root {
  display: flex;
  align-items: center;
  padding-left: 20px;
}

span {
  width: 60px;
  margin-right: 1.3rem;
}

.avatar-uploader .el-upload {
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.avatar-uploader-icon {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  font-size: 24px;
  color: #8c939d;
  width: 60px;
  height: 60px;
  line-height: 60px;
  text-align: center;
}

.avatar {
  width: 80px;
  height: 80px;
  display: block;
}
</style>
