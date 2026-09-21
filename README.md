# 王书钰｜机器人项目

浅色极简个人项目页，展示三个简历项目：

- 人形机器人 VLA 推理优化：同步推理、异步推理、异步推理 + RTC
- RoboMaster 雷达站：多传感器融合机器人定位系统
- 轮腿机器人动力学建模与控制：单边桥、上台阶、下台阶

## 本地查看

网站文件位于 `dist/`。可以直接打开 `dist/index.html`，也可以用任意静态文件服务器预览。

## 发布到 GitHub Pages

1. 在 GitHub 新建名为 `你的用户名.github.io` 的公开仓库。
2. 把本文件夹中的所有内容上传到仓库的 `main` 分支。
3. 打开仓库的 **Settings → Pages**，在 **Build and deployment** 中选择 **GitHub Actions**。
4. 等待部署完成后，访问 `https://你的用户名.github.io/`。

`.github/workflows/deploy.yml` 已配置为自动发布 `dist/` 目录。
