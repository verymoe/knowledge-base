# Linux面板

我是不主张使用面板这种管理工具的，因为这可能会扰乱环境，并且面板对软件的魔改可能导致未知漏洞风险（参考宝塔phpmyadmin事件），但是无奈当服务多起来之后，面板确实还是很方便的，所以还是简单整理了一下。

## Cockpit：

https://cockpit-project.org/

### 概述：

Cockpit直译为驾驶舱。之所以推荐这个面板是因为它只提供直观的基于系统的原生管理功能，并没有魔改的地方，不会影响业务稳定性。

### 功能：

此面板支持以下功能：（对于我个人较为实用的功能后面注*号）

- 检查和更改网络设置*
- 配置防火墙*
- 创建和管理 **KVM**、**oVirt** 虚拟机*
- 图形化监控性能*
- 管理用户账户*
- Web终端*
- 集中管理，在多个服务器之间切换*
- 下载并运行容器
- 管理存储（包括 RAID 和 LUKS 分区）
- 浏览和搜索系统日志
- 检查系统的硬件
- 升级软件
- 检查并与基于 systemd 的服务交互
- 通过安装日益增长的应用程序和插件扩展 Cockpit 的功能
- 编写自定义模块，使 Cockpit 做任何您想要的事情

### 安装：

#### rhel系：

```shell
yum install cockpit
systemctl enable --now cockpit.socket
firewall-cmd --permanent --zone=public --add-service=cockpit
firewall-cmd --reload
```