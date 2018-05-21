1 全局安装pm2之后敲命令pm2提示:
  -bash: pm2: command not found
  检查/etc/profile重新配置:
  export NODE_HOME=/root/node-v8.9.3-linux-x64
  export PATH=$NODE_HOME/bin:$PATH
  第一行配置为node安装位置,之后source /etc/profile即可
