# nodejs

3q   http://www.nodebeginner.org/index-zh-cn.html



安装nodejs(centos 6.5)

yum install gcc gcc-c++

1下载,解压(/tmp文件夹)
wget http://nodejs.org/dist/latest-v9.x/node-v9.11.1-linux-x64.tar.xz
tar xvJf node-v9.11.1-linux-x64.tar.xz 

2添加到全局链接
ln -s /tmp/node-v9.11.1-linux-x64/bin/node /usr/local/bin/node

3配置环境变量
vi /etc/profile 
在export PATH USER 。。。一行的上面添加如下内容，并将NODE_HOME/bin设置到系统path中 
export NODE_HOME=/usr/local/node
export PATH=$NODE_HOME/bin:$PATH 
保存退出后执行如下命令，使刚才的配置生效 
source /etc/profile

4 测试安装成功
node -v
npm -v
